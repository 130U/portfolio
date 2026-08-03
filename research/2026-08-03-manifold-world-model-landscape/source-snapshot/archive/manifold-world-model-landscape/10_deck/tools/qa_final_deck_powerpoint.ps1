param(
    [Parameter(Mandatory = $true)]
    [string]$InputPptx,

    [Parameter(Mandatory = $true)]
    [string]$OutputDir
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()

$fontFamily = 'Noto Sans SC'
$fontPath = 'C:\Windows\Fonts\NotoSansSC-VF.ttf'
$expectedFontHash = '763146584CF0710223441356B4395E279021B0806C196614377A7A0174AE074A'

if (-not [System.IO.Path]::IsPathRooted($InputPptx)) {
    $InputPptx = [System.IO.Path]::GetFullPath((Join-Path (Get-Location) $InputPptx))
}
if (-not [System.IO.Path]::IsPathRooted($OutputDir)) {
    $OutputDir = [System.IO.Path]::GetFullPath((Join-Path (Get-Location) $OutputDir))
}
if (-not (Test-Path -LiteralPath $InputPptx)) {
    throw "PPTX not found: $InputPptx"
}
if (-not (Test-Path -LiteralPath $fontPath)) {
    throw "Required font not found: $fontPath"
}

New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
Get-ChildItem -LiteralPath $OutputDir -File -Filter 'slide-*.png' -ErrorAction SilentlyContinue |
    Remove-Item -Force

$actualFontHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $fontPath).Hash
if ($actualFontHash -ne $expectedFontHash) {
    throw "Font hash mismatch. Expected $expectedFontHash; got $actualFontHash"
}

$violations = [System.Collections.Generic.List[object]]::new()
$textAudit = [System.Collections.Generic.List[object]]::new()
$powerPoint = $null
$presentation = $null

function Add-Violation {
    param([string]$Code, [int]$Slide, [string]$Shape, [string]$Detail)
    $script:violations.Add([PSCustomObject]@{
        code = $Code
        slide = $Slide
        shape = $Shape
        detail = $Detail
    })
}

function Inspect-ShapeCollection {
    param(
        [Parameter(Mandatory = $true)]$Collection,
        [Parameter(Mandatory = $true)][int]$SlideNumber,
        [string]$Prefix = ''
    )

    for ($i = 1; $i -le $Collection.Count; $i++) {
        $shape = $null
        try {
            $shape = $Collection.Item($i)
            $shapeName = if ($Prefix) { "$Prefix/$($shape.Name)" } else { [string]$shape.Name }

            if ([int]$shape.Type -eq 6) {
                Inspect-ShapeCollection -Collection $shape.GroupItems -SlideNumber $SlideNumber -Prefix $shapeName
                continue
            }

            if ($shape.HasTextFrame -ne -1 -or $shape.TextFrame.HasText -ne -1) {
                continue
            }

            $range = $shape.TextFrame.TextRange
            $value = [string]$range.Text
            if ([string]::IsNullOrWhiteSpace($value)) {
                continue
            }

            $fontName = [string]$range.Font.Name
            $fontNameFarEast = [string]$range.Font.NameFarEast
            $fontSize = [double]$range.Font.Size
            $isFooter = ($shapeName -match '(?i)footer|page|scope') -or ([double]$shape.Top -ge 500)
            $minimumSize = if ($isFooter) { 10.0 } else { 16.0 }

            if (($fontName -ne $fontFamily) -or ($fontNameFarEast -ne $fontFamily)) {
                Add-Violation -Code 'font_fallback_or_mismatch' -Slide $SlideNumber -Shape $shapeName -Detail "Name='$fontName'; NameFarEast='$fontNameFarEast'"
            }
            if ($fontSize -gt 0 -and $fontSize -lt ($minimumSize - 0.05)) {
                Add-Violation -Code 'font_below_minimum' -Slide $SlideNumber -Shape $shapeName -Detail "Size=$fontSize; minimum=$minimumSize"
            }

            $boundWidth = $null
            $boundHeight = $null
            $availableWidth = $null
            $availableHeight = $null
            try {
                $tf2 = $shape.TextFrame2
                $boundWidth = [double]$tf2.TextRange.BoundWidth
                $boundHeight = [double]$tf2.TextRange.BoundHeight
                $availableWidth = [double]$shape.Width - [double]$tf2.MarginLeft - [double]$tf2.MarginRight
                $availableHeight = [double]$shape.Height - [double]$tf2.MarginTop - [double]$tf2.MarginBottom

                if ($boundWidth -gt ($availableWidth + 4.0)) {
                    Add-Violation -Code 'text_overflow_width' -Slide $SlideNumber -Shape $shapeName -Detail "Bound=$([math]::Round($boundWidth,2)); available=$([math]::Round($availableWidth,2))"
                }
                if ($boundHeight -gt ($availableHeight + 4.0)) {
                    Add-Violation -Code 'text_overflow_height' -Slide $SlideNumber -Shape $shapeName -Detail "Bound=$([math]::Round($boundHeight,2)); available=$([math]::Round($availableHeight,2))"
                }
            }
            catch {
                Add-Violation -Code 'text_bounds_unreadable' -Slide $SlideNumber -Shape $shapeName -Detail $_.Exception.Message
            }

            $script:textAudit.Add([PSCustomObject]@{
                slide = $SlideNumber
                shape = $shapeName
                text = ($value -replace "`r`n|`r|`n", ' / ')
                font_name = $fontName
                font_name_far_east = $fontNameFarEast
                font_size = $fontSize
                footer = $isFooter
                bound_width = $boundWidth
                bound_height = $boundHeight
                available_width = $availableWidth
                available_height = $availableHeight
            })
        }
        finally {
            if ($shape) {
                [void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($shape)
            }
        }
    }
}

try {
    $powerPoint = New-Object -ComObject PowerPoint.Application
    $presentation = $powerPoint.Presentations.Open($InputPptx, -1, 0, 0)

    $slideCount = [int]$presentation.Slides.Count
    if ($slideCount -ne 10) {
        Add-Violation -Code 'slide_count' -Slide 0 -Shape '' -Detail "Expected 10; got $slideCount"
    }

    $slideWidth = [double]$presentation.PageSetup.SlideWidth
    $slideHeight = [double]$presentation.PageSetup.SlideHeight
    $ratio = $slideWidth / $slideHeight
    if ([math]::Abs($ratio - (16.0 / 9.0)) -gt 0.001) {
        Add-Violation -Code 'slide_ratio' -Slide 0 -Shape '' -Detail "Expected 16:9; got $slideWidth x $slideHeight"
    }

    for ($s = 1; $s -le $slideCount; $s++) {
        $slide = $null
        try {
            $slide = $presentation.Slides.Item($s)
            Inspect-ShapeCollection -Collection $slide.Shapes -SlideNumber $s
            $png = Join-Path $OutputDir ("slide-{0:D2}.png" -f $s)
            $slide.Export($png, 'PNG', 1280, 720)
            if (-not (Test-Path -LiteralPath $png)) {
                Add-Violation -Code 'render_missing' -Slide $s -Shape '' -Detail $png
            }
        }
        finally {
            if ($slide) {
                [void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($slide)
            }
        }
    }
}
finally {
    if ($presentation) {
        $presentation.Close()
    }
    if ($powerPoint) {
        $powerPoint.Quit()
    }
    foreach ($comObject in @($presentation, $powerPoint)) {
        if ($comObject) {
            [void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($comObject)
        }
    }
    [GC]::Collect()
    [GC]::WaitForPendingFinalizers()
}

Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [System.IO.Compression.ZipFile]::OpenRead($InputPptx)
try {
    $slideXml = New-Object System.Text.StringBuilder
    foreach ($entry in $archive.Entries | Where-Object { $_.FullName -match '^ppt/slides/slide\d+\.xml$' }) {
        $reader = New-Object System.IO.StreamReader($entry.Open(), [System.Text.Encoding]::UTF8)
        try {
            [void]$slideXml.AppendLine($reader.ReadToEnd())
        }
        finally {
            $reader.Dispose()
        }
    }
}
finally {
    $archive.Dispose()
}

$xmlText = $slideXml.ToString()
$xmlUsesNoto = $xmlText -match 'typeface="Noto Sans SC"'
$xmlUsesDejaVu = $xmlText -match 'DejaVu Sans'
if (-not $xmlUsesNoto) {
    Add-Violation -Code 'ooxml_missing_noto' -Slide 0 -Shape '' -Detail 'Noto Sans SC not found in slide XML.'
}
if ($xmlUsesDejaVu) {
    Add-Violation -Code 'ooxml_dejavu_fallback' -Slide 0 -Shape '' -Detail 'DejaVu Sans found in slide XML.'
}

$rendered = @(Get-ChildItem -LiteralPath $OutputDir -File -Filter 'slide-*.png' | Sort-Object Name)
if ($rendered.Count -ne 10) {
    Add-Violation -Code 'render_count' -Slide 0 -Shape '' -Detail "Expected 10 PNGs; got $($rendered.Count)"
}

$result = [PSCustomObject]@{
    status = if ($violations.Count -eq 0) { 'pass' } else { 'fail' }
    renderer = 'Microsoft PowerPoint 16 COM export'
    input_pptx = (Resolve-Path -LiteralPath $InputPptx).Path
    pptx_bytes = (Get-Item -LiteralPath $InputPptx).Length
    pptx_sha256 = (Get-FileHash -Algorithm SHA256 -LiteralPath $InputPptx).Hash
    slide_count = $slideCount
    slide_size_points = [PSCustomObject]@{ width = $slideWidth; height = $slideHeight }
    render_count = $rendered.Count
    render_dir = (Resolve-Path -LiteralPath $OutputDir).Path
    font_family = $fontFamily
    font_sha256 = $actualFontHash
    ooxml_uses_noto_sans_sc = $xmlUsesNoto
    ooxml_uses_dejavu_sans = $xmlUsesDejaVu
    text_box_count = $textAudit.Count
    violation_count = $violations.Count
    violations = @($violations)
    text_audit = @($textAudit)
}

$jsonPath = Join-Path $OutputDir 'powerpoint_qa_result.json'
$mdPath = Join-Path $OutputDir 'powerpoint_qa.md'
$result | ConvertTo-Json -Depth 8 | Set-Content -Encoding UTF8 -LiteralPath $jsonPath

$md = @(
    '# Final deck PowerPoint QA',
    '',
    "- Status: $($result.status)",
    "- Slides: $slideCount",
    "- Canvas: $slideWidth x $slideHeight pt (16:9)",
    "- Rendered PNGs: $($rendered.Count)",
    "- Text boxes audited: $($textAudit.Count)",
    "- Font: $fontFamily",
    "- Font SHA256: $actualFontHash",
    "- PPTX SHA256: $($result.pptx_sha256)",
    "- Violations: $($violations.Count)"
)
if ($violations.Count -gt 0) {
    $md += ''
    $md += '## Violations'
    $md += ''
    foreach ($v in $violations) {
        $md += "- [$($v.code)] slide $($v.slide), $($v.shape): $($v.detail)"
    }
}
$md -join "`n" | Set-Content -Encoding UTF8 -LiteralPath $mdPath

$result | Select-Object status, slide_count, render_count, text_box_count, violation_count, pptx_sha256 |
    ConvertTo-Json -Depth 3

if ($violations.Count -gt 0) {
    throw "Final deck PowerPoint QA failed with $($violations.Count) violation(s)."
}

param(
    [Parameter(Mandatory = $true)]
    [string]$OutputDir
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()

$fontPath = 'C:\Windows\Fonts\NotoSansSC-VF.ttf'
$fontFamily = 'Noto Sans SC'
$expectedHash = '763146584CF0710223441356B4395E279021B0806C196614377A7A0174AE074A'
$probeText = '海外世界模型｜接口、运行时、部署链｜12–24 个月｜0.02 美元/秒'

if (-not [System.IO.Path]::IsPathRooted($OutputDir)) {
    $OutputDir = [System.IO.Path]::GetFullPath((Join-Path (Get-Location) $OutputDir))
}
New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null

if (-not (Test-Path -LiteralPath $fontPath)) {
    throw "Required font is missing: $fontPath"
}

$actualHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $fontPath).Hash
if ($actualHash -ne $expectedHash) {
    throw "Font hash mismatch. Expected $expectedHash; got $actualHash"
}

Add-Type -AssemblyName PresentationCore
$glyphTypeface = New-Object System.Windows.Media.GlyphTypeface([Uri]'file:///C:/Windows/Fonts/NotoSansSC-VF.ttf')
$missingGlyphs = @($probeText.ToCharArray() | Where-Object {
    -not $glyphTypeface.CharacterToGlyphMap.ContainsKey([int]$_)
} | Select-Object -Unique)

if ($missingGlyphs.Count -gt 0) {
    throw "Probe contains missing glyphs: $($missingGlyphs -join ',')"
}

$probePptx = Join-Path $env:TEMP ("noto_sans_sc_probe_{0}.pptx" -f [guid]::NewGuid().ToString('N'))
$probePng = Join-Path $OutputDir 'font_probe_noto_sans_sc.png'
$resultJson = Join-Path $OutputDir 'font_probe_result.json'

$powerPoint = $null
$presentation = $null
$slide = $null
$titleShape = $null
$subtitleShape = $null
$bodyShape = $null

try {
    $powerPoint = New-Object -ComObject PowerPoint.Application
    $presentation = $powerPoint.Presentations.Add($false)
    $presentation.PageSetup.SlideWidth = 960
    $presentation.PageSetup.SlideHeight = 540
    $slide = $presentation.Slides.Add(1, 12)

    $titleShape = $slide.Shapes.AddTextbox(1, 54, 55, 852, 78)
    $titleShape.TextFrame.TextRange.Text = '海外世界模型竞争格局'
    $titleShape.TextFrame.TextRange.Font.Name = $fontFamily
    $titleShape.TextFrame.TextRange.Font.NameFarEast = $fontFamily
    $titleShape.TextFrame.TextRange.Font.Size = 50
    $titleShape.TextFrame.TextRange.Font.Bold = -1
    $titleShape.TextFrame.TextRange.Font.Color.RGB = 0

    $subtitleShape = $slide.Shapes.AddTextbox(1, 54, 156, 852, 64)
    $subtitleShape.TextFrame.TextRange.Text = '接口、运行时、部署链｜12–24 个月'
    $subtitleShape.TextFrame.TextRange.Font.Name = $fontFamily
    $subtitleShape.TextFrame.TextRange.Font.NameFarEast = $fontFamily
    $subtitleShape.TextFrame.TextRange.Font.Size = 35
    $subtitleShape.TextFrame.TextRange.Font.Color.RGB = 0

    $bodyShape = $slide.Shapes.AddTextbox(1, 54, 260, 852, 115)
    $bodyShape.TextFrame.TextRange.Text = "正文最小字号探针：`n$probeText"
    $bodyShape.TextFrame.TextRange.Font.Name = $fontFamily
    $bodyShape.TextFrame.TextRange.Font.NameFarEast = $fontFamily
    $bodyShape.TextFrame.TextRange.Font.Size = 16
    $bodyShape.TextFrame.TextRange.Font.Color.RGB = 0

    $resolved = [PSCustomObject]@{
        title_name = $titleShape.TextFrame.TextRange.Font.Name
        title_name_far_east = $titleShape.TextFrame.TextRange.Font.NameFarEast
        subtitle_name = $subtitleShape.TextFrame.TextRange.Font.Name
        subtitle_name_far_east = $subtitleShape.TextFrame.TextRange.Font.NameFarEast
        body_name = $bodyShape.TextFrame.TextRange.Font.Name
        body_name_far_east = $bodyShape.TextFrame.TextRange.Font.NameFarEast
    }

    $presentation.SaveAs($probePptx, 24)
    $slide.Export($probePng, 'PNG', 1280, 720)

    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $archive = [System.IO.Compression.ZipFile]::OpenRead($probePptx)
    try {
        $entry = $archive.GetEntry('ppt/slides/slide1.xml')
        $reader = New-Object System.IO.StreamReader($entry.Open(), [System.Text.Encoding]::UTF8)
        try {
            $slideXml = $reader.ReadToEnd()
        }
        finally {
            $reader.Dispose()
        }
    }
    finally {
        $archive.Dispose()
    }

    $xmlUsesNoto = $slideXml -match 'typeface="Noto Sans SC"'
    $resolvedUsesNoto = @(
        $resolved.title_name,
        $resolved.title_name_far_east,
        $resolved.subtitle_name,
        $resolved.subtitle_name_far_east,
        $resolved.body_name,
        $resolved.body_name_far_east
    ) -notcontains $null -and @(
        $resolved.title_name,
        $resolved.title_name_far_east,
        $resolved.subtitle_name,
        $resolved.subtitle_name_far_east,
        $resolved.body_name,
        $resolved.body_name_far_east
    ) -notcontains '' -and (@(
        $resolved.title_name,
        $resolved.title_name_far_east,
        $resolved.subtitle_name,
        $resolved.subtitle_name_far_east,
        $resolved.body_name,
        $resolved.body_name_far_east
    ) | Where-Object { $_ -ne $fontFamily }).Count -eq 0

    $result = [PSCustomObject]@{
        status = if ($xmlUsesNoto -and $resolvedUsesNoto -and (Test-Path -LiteralPath $probePng)) { 'pass' } else { 'fail' }
        renderer = 'Microsoft PowerPoint 16 COM export'
        font_family = $fontFamily
        font_path = $fontPath
        font_bytes = (Get-Item -LiteralPath $fontPath).Length
        font_sha256 = $actualHash
        embedded_license = ($glyphTypeface.LicenseDescriptions.Values -join ' | ')
        sample = $probeText
        missing_glyphs = @($missingGlyphs)
        resolved_fonts = $resolved
        slide_xml_uses_noto_sans_sc = $xmlUsesNoto
        exported_png = (Resolve-Path -LiteralPath $probePng).Path
        exported_png_bytes = (Get-Item -LiteralPath $probePng).Length
        exported_png_sha256 = (Get-FileHash -Algorithm SHA256 -LiteralPath $probePng).Hash
        fallback_prohibited = 'DejaVu Sans'
    }

    $result | ConvertTo-Json -Depth 6 | Set-Content -Encoding UTF8 -LiteralPath $resultJson

    if ($result.status -ne 'pass') {
        throw 'PowerPoint font probe failed.'
    }

    $result | ConvertTo-Json -Depth 6
}
finally {
    if ($presentation) {
        $presentation.Close()
    }
    if ($powerPoint) {
        $powerPoint.Quit()
    }

    foreach ($comObject in @($bodyShape, $subtitleShape, $titleShape, $slide, $presentation, $powerPoint)) {
        if ($comObject) {
            [void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($comObject)
        }
    }

    [GC]::Collect()
    [GC]::WaitForPendingFinalizers()

    if (Test-Path -LiteralPath $probePptx) {
        Remove-Item -LiteralPath $probePptx -Force
    }
}


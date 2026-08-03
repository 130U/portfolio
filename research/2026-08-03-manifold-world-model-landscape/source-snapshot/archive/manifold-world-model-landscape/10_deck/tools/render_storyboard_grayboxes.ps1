param(
    [Parameter(Mandatory = $true)]
    [string]$OutputDir
)

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()

$fontFamily = 'Noto Sans SC'
$fontPath = 'C:\Windows\Fonts\NotoSansSC-VF.ttf'
$fontHash = '763146584CF0710223441356B4395E279021B0806C196614377A7A0174AE074A'
$script:fitRows = New-Object System.Collections.Generic.List[object]
$script:createdComObjects = New-Object System.Collections.Generic.List[object]

if (-not [System.IO.Path]::IsPathRooted($OutputDir)) {
    $OutputDir = [System.IO.Path]::GetFullPath((Join-Path (Get-Location) $OutputDir))
}
New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null

if (-not (Test-Path -LiteralPath $fontPath)) {
    throw "Required font is missing: $fontPath"
}
if ((Get-FileHash -Algorithm SHA256 -LiteralPath $fontPath).Hash -ne $fontHash) {
    throw 'Noto Sans SC hash mismatch.'
}

function Pt([double]$pixels) {
    return [single]($pixels * 0.75)
}

function Add-TrackedTextBox {
    param(
        [object]$Slide,
        [string]$Id,
        [double]$X,
        [double]$Y,
        [double]$W,
        [double]$H,
        [string]$Text,
        [double]$FontSize,
        [bool]$Bold = $false,
        [int]$Color = 0
    )

    $shape = $Slide.Shapes.AddTextbox(1, (Pt $X), (Pt $Y), (Pt $W), (Pt $H))
    $script:createdComObjects.Add($shape)
    $shape.Name = $Id
    $shape.TextFrame.MarginLeft = 0
    $shape.TextFrame.MarginRight = 0
    $shape.TextFrame.MarginTop = 0
    $shape.TextFrame.MarginBottom = 0
    $shape.TextFrame.WordWrap = -1
    $shape.TextFrame.AutoSize = 0
    $shape.TextFrame.TextRange.Text = $Text
    $shape.TextFrame.TextRange.Font.Name = $fontFamily
    $shape.TextFrame.TextRange.Font.NameFarEast = $fontFamily
    $shape.TextFrame.TextRange.Font.Size = $FontSize
    $shape.TextFrame.TextRange.Font.Bold = if ($Bold) { -1 } else { 0 }
    $shape.TextFrame.TextRange.Font.Color.RGB = $Color

    $boundHeight = [double]$shape.TextFrame2.TextRange.BoundHeight
    $boundWidth = [double]$shape.TextFrame2.TextRange.BoundWidth
    $boxHeight = Pt $H
    $boxWidth = Pt $W
    $resolvedLatin = [string]$shape.TextFrame.TextRange.Font.Name
    $resolvedEastAsia = [string]$shape.TextFrame.TextRange.Font.NameFarEast
    $fit = ($boundHeight -le ($boxHeight + 0.75)) -and
        ($boundWidth -le ($boxWidth + 0.75)) -and
        ($resolvedLatin -eq $fontFamily) -and
        ($resolvedEastAsia -eq $fontFamily)

    $script:fitRows.Add([PSCustomObject]@{
        slide = $Slide.SlideIndex
        id = $Id
        font_size_pt = $FontSize
        box_width_pt = [math]::Round($boxWidth, 2)
        box_height_pt = [math]::Round($boxHeight, 2)
        bound_width_pt = [math]::Round($boundWidth, 2)
        bound_height_pt = [math]::Round($boundHeight, 2)
        resolved_latin = $resolvedLatin
        resolved_east_asia = $resolvedEastAsia
        fit = $fit
    })

    return $shape
}

function Add-Rule {
    param(
        [object]$Slide,
        [double]$X1,
        [double]$Y1,
        [double]$X2,
        [double]$Y2
    )

    $line = $Slide.Shapes.AddLine((Pt $X1), (Pt $Y1), (Pt $X2), (Pt $Y2))
    $script:createdComObjects.Add($line)
    $line.Line.ForeColor.RGB = 12632256
    $line.Line.Weight = 0.75
}

$powerPoint = $null
$presentation = $null
$probePptx = Join-Path $env:TEMP ("storyboard_graybox_{0}.pptx" -f [guid]::NewGuid().ToString('N'))

try {
    $powerPoint = New-Object -ComObject PowerPoint.Application
    $presentation = $powerPoint.Presentations.Add($false)
    $script:createdComObjects.Add($presentation)
    $presentation.PageSetup.SlideWidth = 960
    $presentation.PageSetup.SlideHeight = 540

    # P1 — cover + Executive Answer + three evidence bands.
    $p1 = $presentation.Slides.Add(1, 12)
    $script:createdComObjects.Add($p1)
    Add-TrackedTextBox $p1 'P1-identity' 64 18 1152 82 "Manifold 非中国世界模型竞争格局`n五类重点路径与未来 12–24 个月竞争信号`n截至 2026-07-14" 16 $false | Out-Null
    Add-TrackedTextBox $p1 'P1-title' 64 108 1152 164 "海外世界模型出现三种交付路径`n客户侧生产采用仍待验证" 50 $true | Out-Null
    Add-TrackedTextBox $p1 'P1-answer' 64 282 1152 108 "公开计价接口、申请制入口和可下载/自托管组件`n正在把竞争从模型演示推向交付链；`n但截至 2026-07-14，公开证据尚不足以判断`n五席中任何对象已进入客户确认的付费生产阶段。" 16 $false | Out-Null
    $p1BandW = 368
    Add-TrackedTextBox $p1 'P1-path-1' 64 402 $p1BandW 26 '公开计价接口' 16 $true | Out-Null
    Add-TrackedTextBox $p1 'P1-path-2' 456 402 $p1BandW 26 '文档化或申请制入口' 16 $true | Out-Null
    Add-TrackedTextBox $p1 'P1-path-3' 848 402 $p1BandW 26 '可下载/自托管组件' 16 $true | Out-Null
    Add-TrackedTextBox $p1 'P1-band-1' 64 432 $p1BandW 218 "供给方式已经分化。`nWorld Labs 与 Decart 提供公开计价接口；`nOdyssey 与 Runway 采用文档化或申请制入口；`nCosmos 3 提供可下载和自托管组件。" 16 $false | Out-Null
    Add-TrackedTextBox $p1 'P1-band-2' 456 432 $p1BandW 218 "竞争单元正在扩大。`n比较重点已从生成效果扩展到`n接口、运行时、部署与集成，`n而不是单一模型指标。" 16 $false | Out-Null
    Add-TrackedTextBox $p1 'P1-band-3' 848 432 $p1BandW 218 "商业证据仍是共同短板。`n当前最高证据只到供应商托管原型、`n公司自报合作、公开计价供应路径或伙伴自报集成；`n尚未恢复到客户第一方确认的付费生产采用。" 16 $false | Out-Null
    Add-Rule $p1 444 402 444 650
    Add-Rule $p1 836 402 836 650
    Add-TrackedTextBox $p1 'P1-footer' 64 680 1152 28 '公开信息条件性判断｜截至 2026-07-14｜1' 10 $false 6316128 | Out-Null

    # P2 — discrete 3x3 landscape matrix.
    $p2 = $presentation.Slides.Add(2, 12)
    $script:createdComObjects.Add($p2)
    Add-TrackedTextBox $p2 'P2-title' 64 28 1152 120 "海外玩家按世界形态与交付位置分化`n获得方式决定进入路径" 35 $true | Out-Null
    Add-TrackedTextBox $p2 'P2-conclusion' 64 154 1152 56 "内容探索、开发者基础设施与机器人控制`n正在形成不同阵地；节点位置不表示能力高低。" 16 $false | Out-Null

    $matrixX = 160
    $matrixY = 216
    $headerH = 56
    $matrixW = 1056
    $cellW = 352
    # Preserve the full five-line Runway/Robotics/Genie/Overworld cell at 16 pt
    # while keeping the two multi-line row labels inside the fixed 312 px body.
    $rowHeights = @(136, 103, 77)
    $rowStarts = @(
        ($matrixY + $headerH),
        ($matrixY + $headerH + $rowHeights[0]),
        ($matrixY + $headerH + $rowHeights[0] + $rowHeights[1])
    )
    $headers = @("持久空间`n世界", "实时交互`n世界流", "动作条件`n物理智能组件")
    for ($c = 0; $c -lt 3; $c++) {
        Add-TrackedTextBox $p2 ("P2-col-{0}" -f ($c + 1)) ($matrixX + $c * $cellW) $matrixY $cellW $headerH $headers[$c] 16 $true | Out-Null
    }
    $rowLabels = @("内容与`n探索", "开发者`n世界 /`n仿真基础`n设施", "机器人`n规划`n控制")
    for ($r = 0; $r -lt 3; $r++) {
        Add-TrackedTextBox $p2 ("P2-row-{0}" -f ($r + 1)) 64 $rowStarts[$r] 90 $rowHeights[$r] $rowLabels[$r] 16 $true | Out-Null
    }
    $cells = @(
        'World Labs',
        "Runway`nRunway Robotics：`n规划控制（次级）`nGenie 3 / Project Genie`nOverworld（地域条件）",
        '',
        '',
        "Odyssey`nDecart",
        "NVIDIA Cosmos 3`nCosmos 3 规划控制（次级）`nGeneral Intuition / MIRA",
        '',
        '',
        'Meta V-JEPA'
    )
    for ($r = 0; $r -lt 3; $r++) {
        for ($c = 0; $c -lt 3; $c++) {
            $idx = $r * 3 + $c
            if ($cells[$idx]) {
                Add-TrackedTextBox $p2 ("P2-cell-{0}-{1}" -f ($r + 1), ($c + 1)) ($matrixX + $c * $cellW + 8) ($rowStarts[$r] + 2) ($cellW - 16) ($rowHeights[$r] - 4) $cells[$idx] 16 $false | Out-Null
            }
        }
    }
    $matrixBottom = $rowStarts[2] + $rowHeights[2]
    for ($c = 0; $c -le 3; $c++) { Add-Rule $p2 ($matrixX + $c * $cellW) $matrixY ($matrixX + $c * $cellW) $matrixBottom }
    Add-Rule $p2 $matrixX $matrixY 1216 $matrixY
    Add-Rule $p2 $matrixX ($matrixY + $headerH) 1216 ($matrixY + $headerH)
    Add-Rule $p2 $matrixX ($rowStarts[0] + $rowHeights[0]) 1216 ($rowStarts[0] + $rowHeights[0])
    Add-Rule $p2 $matrixX ($rowStarts[1] + $rowHeights[1]) 1216 ($rowStarts[1] + $rowHeights[1])
    Add-Rule $p2 $matrixX ($rowStarts[2] + $rowHeights[2]) 1216 ($rowStarts[2] + $rowHeights[2])
    Add-TrackedTextBox $p2 'P2-status' 64 590 1152 26 '固定五席 5｜观察对象 4｜早期信号 1：AMI Labs（图外；自有技术资产与入口待核）' 16 $false | Out-Null
    Add-TrackedTextBox $p2 'P2-legend' 64 618 1152 26 '获得方式：公开接口｜受控入口｜可下载/自托管｜尚未核实' 16 $false | Out-Null
    Add-TrackedTextBox $p2 'P2-badges' 64 646 1152 26 '限定：Odyssey 实际账户未独立确认｜Overworld 地域条件' 16 $false | Out-Null
    Add-TrackedTextBox $p2 'P2-footer' 64 682 1152 34 "中国大陆公司不作为节点；Manifold 只作公开比较锚点；`nVLA、机器人基础模型、仿真/合成数据、纯视频、纯 3D 与垂直内部组件不作节点。" 10 $false 6316128 | Out-Null

    # P10 — three equal actions + five equal triggers, no sequence encoding.
    $p10 = $presentation.Slides.Add(3, 12)
    $script:createdComObjects.Add($p10)
    Add-TrackedTextBox $p10 'P10-title' 64 28 1152 120 "Manifold 应锁定交付标准、验证资产`n与权利边界" 35 $true | Out-Null
    $actionW = 368
    $actions = @(
        "定义标准交付单元`n明确模型、接口、部署服务和联合项目`n分别交付什么；哪些层由 Manifold`n拥有、集成或采购。",
        "建立共同验证资产`n固化动作忠实度、持久状态、几何/碰撞、`n失败率、延迟和总体拥有成本的验证协议；`n并保留负面结果。",
        "锁定关键权利边界`n在合同中明确输入/输出数据权、`n模型改进权、部署范围`n和再分发规则。"
    )
    for ($i = 0; $i -lt 3; $i++) {
        Add-TrackedTextBox $p10 ("P10-action-{0}" -f ($i + 1)) (64 + $i * 392) 166 $actionW 190 $actions[$i] 16 $false | Out-Null
    }
    Add-Rule $p10 444 166 444 356
    Add-Rule $p10 836 166 836 356

    $triggerW = 211.2
    $triggerGap = 24
    $triggers = @(
        "稳定接口`n可持续调用，并公开价格与服务等级`n重审产品与平台替代路径",
        "独立复现`n在同一或可比协议下复现关键结果`n重审技术证据成熟度",
        "正式商用闭合`n许可链、服务等级和责任边界完整`n重审采购与部署可行性",
        "客户第一方采用`n具名客户确认付费生产部署或续约`n触发商业采用及竞争关系重审",
        "稳定动作产品`n动作运行时或动作 NIM 正式发布并获验证`n重审自托管平台绕行风险"
    )
    for ($i = 0; $i -lt 5; $i++) {
        $x = 64 + $i * ($triggerW + $triggerGap)
        Add-TrackedTextBox $p10 ("P10-trigger-{0}" -f ($i + 1)) $x 390 $triggerW 250 $triggers[$i] 16 $false | Out-Null
        if ($i -lt 4) { Add-Rule $p10 ($x + $triggerW + 12) 390 ($x + $triggerW + 12) 640 }
    }
    Add-TrackedTextBox $p10 'P10-footer' 64 670 1152 40 '完整 17 条固定五席信号与 5 条观察信号保留在监测附件；主页面不展开。' 10 $false 6316128 | Out-Null

    $presentation.SaveAs($probePptx, 24)
    $exports = @()
    foreach ($slide in @($p1, $p2, $p10)) {
        $name = switch ($slide.SlideIndex) { 1 { 'graybox_p1.png' } 2 { 'graybox_p2.png' } 3 { 'graybox_p10.png' } }
        $path = Join-Path $OutputDir $name
        $slide.Export($path, 'PNG', 1280, 720)
        $exports += [PSCustomObject]@{
            slide = $slide.SlideIndex
            path = $path
            bytes = (Get-Item -LiteralPath $path).Length
            sha256 = (Get-FileHash -Algorithm SHA256 -LiteralPath $path).Hash
        }
    }

    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $archive = [System.IO.Compression.ZipFile]::OpenRead($probePptx)
    try {
        $xmlText = New-Object System.Text.StringBuilder
        foreach ($entry in $archive.Entries | Where-Object { $_.FullName -like 'ppt/slides/slide*.xml' }) {
            $reader = New-Object System.IO.StreamReader($entry.Open(), [System.Text.Encoding]::UTF8)
            try { [void]$xmlText.Append($reader.ReadToEnd()) } finally { $reader.Dispose() }
        }
        $xml = $xmlText.ToString()
    }
    finally {
        $archive.Dispose()
    }

    $failed = @($script:fitRows | Where-Object { -not $_.fit })
    $result = [PSCustomObject]@{
        status = if (($failed.Count -eq 0) -and ($xml -match 'typeface="Noto Sans SC"') -and ($xml -notmatch 'DejaVu Sans')) { 'pass' } else { 'fail' }
        renderer = 'Microsoft PowerPoint 16 COM export'
        canvas = '1280x720'
        font_family = $fontFamily
        font_path = $fontPath
        font_sha256 = $fontHash
        text_box_count = $script:fitRows.Count
        failed_text_box_count = $failed.Count
        failed_text_boxes = $failed
        slide_xml_uses_noto_sans_sc = ($xml -match 'typeface="Noto Sans SC"')
        slide_xml_contains_dejavu_sans = ($xml -match 'DejaVu Sans')
        text_boxes = $script:fitRows
        exports = $exports
    }

    $resultPath = Join-Path $OutputDir 'storyboard_graybox_result.json'
    $result | ConvertTo-Json -Depth 8 | Set-Content -Encoding UTF8 -LiteralPath $resultPath
    $result | ConvertTo-Json -Depth 8

    if ($result.status -ne 'pass') {
        throw "Storyboard graybox test failed: $($failed.Count) text boxes exceeded their bounds or a font fallback was detected."
    }
}
finally {
    if ($presentation) { $presentation.Close() }
    if ($powerPoint) { $powerPoint.Quit() }

    for ($i = $script:createdComObjects.Count - 1; $i -ge 0; $i--) {
        $obj = $script:createdComObjects[$i]
        if ($obj) {
            try { [void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($obj) } catch {}
        }
    }
    if ($powerPoint) {
        try { [void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($powerPoint) } catch {}
    }
    [GC]::Collect()
    [GC]::WaitForPendingFinalizers()

    if (Test-Path -LiteralPath $probePptx) {
        Remove-Item -LiteralPath $probePptx -Force
    }
}


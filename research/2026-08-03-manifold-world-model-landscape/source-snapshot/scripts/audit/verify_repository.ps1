param()

$ErrorActionPreference = 'Stop'
$root = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..'))
$archive = Join-Path $root 'archive\manifold-world-model-landscape'
$failures = New-Object System.Collections.Generic.List[string]

function Assert-Equal {
    param(
        [string]$Name,
        $Actual,
        $Expected
    )
    if ($Actual -ne $Expected) {
        $failures.Add("$Name expected '$Expected' but got '$Actual'")
    }
    [PSCustomObject]@{ check = $Name; actual = $Actual; expected = $Expected; pass = ($Actual -eq $Expected) }
}

function Assert-Exists {
    param([string]$RelativePath)
    $exists = Test-Path -LiteralPath (Join-Path $root $RelativePath)
    if (-not $exists) { $failures.Add("Missing: $RelativePath") }
    [PSCustomObject]@{ check = "exists:$RelativePath"; actual = $exists; expected = $true; pass = $exists }
}

$results = New-Object System.Collections.Generic.List[object]

$required = @(
    'README.md',
    'mkdocs.yml',
    'archive\generation\build_deck_v1_4.original.mjs',
    'provenance\agent_register.csv',
    'docs\dossiers\01 - World Labs.md',
    'docs\dossiers\02 - Odyssey.md',
    'docs\dossiers\03 - Runway.md',
    'docs\dossiers\04 - Decart.md',
    'docs\dossiers\05 - NVIDIA Cosmos 3.md',
    'archive\manifold-world-model-landscape\06_dossier_support\Dossier_Query_Audit.csv',
    'archive\manifold-world-model-landscape\06_dossier_support\Dossier_Completion_QA.md',
    'archive\manifold-world-model-landscape\06_dossier_support\Dossier_Research_Protocol.md'
)

foreach ($file in $required) { $results.Add((Assert-Exists $file)) }

$originalInputs = @(Get-ChildItem -LiteralPath (Join-Path $root 'inputs\original') -File)
$drInputs = @($originalInputs | Where-Object { $_.Name -like 'DR-*.md' })
$results.Add((Assert-Equal 'original_input_files' $originalInputs.Count 5))
$results.Add((Assert-Equal 'original_dr_files' $drInputs.Count 3))

$readerDossiers = @(Get-ChildItem -LiteralPath (Join-Path $root 'docs\dossiers') -File -Filter '*.md')
$canonicalDossiers = @(Get-ChildItem -LiteralPath (Join-Path $archive '06_dossiers') -File)
$dossierSupport = @(Get-ChildItem -LiteralPath (Join-Path $archive '06_dossier_support') -File)
$readmeSvgAssets = @(Get-ChildItem -LiteralPath (Join-Path $root 'assets\readme') -File -Filter '*.svg' -ErrorAction SilentlyContinue)

$results.Add((Assert-Equal 'reader_dossiers' $readerDossiers.Count 5))
$results.Add((Assert-Equal 'canonical_dossier_files' $canonicalDossiers.Count 5))
$results.Add((Assert-Equal 'dossier_support_files' $dossierSupport.Count 3))
$results.Add((Assert-Equal 'clickable_readme_svg_assets' $readmeSvgAssets.Count 0))

$readme = [System.IO.File]::ReadAllText((Join-Path $root 'README.md'), [System.Text.Encoding]::UTF8)
$results.Add((Assert-Equal 'public_boundary_declared' ($readme.Contains('publication-status: public')) $true))
$results.Add((Assert-Equal 'research_design_ownership_declared' ($readme.Contains('Research design &amp; decision ownership')) $true))

$archiveFiles = @(Get-ChildItem -LiteralPath $archive -Recurse -File).Count
$results.Add((Assert-Equal 'archived_project_files' $archiveFiles 331))

$sources = @(Import-Csv (Join-Path $archive '04_evidence\sources.csv')).Count
$sourceCards = @(Get-ChildItem (Join-Path $archive '04_evidence\sources') -File -Filter '*.md').Count
$claims = @(Import-Csv (Join-Path $archive '04_evidence\evidence_ledger.csv')).Count
$maps = @(Import-Csv (Join-Path $archive '08_content\slide_evidence_map.csv')).Count
$agents = @(Import-Csv (Join-Path $root 'provenance\agent_register.csv'))

$results.Add((Assert-Equal 'sources' $sources 141))
$results.Add((Assert-Equal 'source_cards' $sourceCards 141))
$results.Add((Assert-Equal 'evidence_claims' $claims 111))
$results.Add((Assert-Equal 'slide_evidence_map_rows' $maps 63))
$results.Add((Assert-Equal 'agent_spawn_requests' $agents.Count 33))
$results.Add((Assert-Equal 'agents_started' @($agents | Where-Object { $_.actual_started -eq 'true' }).Count 30))

$contentZip = Join-Path $archive '08_content\content_lock_v1_1a.zip'
$contentZipCompanion = Join-Path $archive '08_content\content_lock_v1_1a.zip.sha256'
$contentZipRecordedHash = ([System.IO.File]::ReadAllText($contentZipCompanion, [System.Text.Encoding]::UTF8)).Trim().Split(' ')[0]
$results.Add((Assert-Equal 'public_tree_omits_path_bearing_content_zip' (Test-Path -LiteralPath $contentZip) $false))
$results.Add((Assert-Equal 'historical_content_lock_zip_sha256' $contentZipRecordedHash 'FD333842A2EA94818DBD6FAE3DF3C3B615CE98B3F03EEC60B95748E0C0964C20'))

$pptx = Join-Path $archive '10_deck\manifold_world_model_landscape_v1_4.pptx'
$pptxHash = (Get-FileHash -Algorithm SHA256 -LiteralPath $pptx).Hash
$results.Add((Assert-Equal 'final_pptx_sha256' $pptxHash 'B61FE7FBB66CD1B7F7C926CF254CF4F32ED6B7E5A94C1B488648A2FFABAB02E9'))

$results | Format-Table -AutoSize

if ($failures.Count -gt 0) {
    Write-Host ''
    Write-Host 'Repository verification failed:' -ForegroundColor Red
    $failures | ForEach-Object { Write-Host "- $_" -ForegroundColor Red }
    exit 1
}

Write-Host ''
Write-Host 'Repository verification passed.' -ForegroundColor Green

& (Join-Path $PSScriptRoot 'check_reader_text.ps1')
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

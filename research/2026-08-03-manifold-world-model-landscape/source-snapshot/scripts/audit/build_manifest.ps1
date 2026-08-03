param()

$ErrorActionPreference = 'Stop'
$root = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..'))
$output = Join-Path $root 'provenance\file_manifest.csv'

$topLevel = Get-ChildItem -LiteralPath $root -Force | Where-Object {
    $_.Name -notin @('.git', '.tools', 'site')
}

$files = foreach ($item in $topLevel) {
    if ($item.PSIsContainer) {
        Get-ChildItem -LiteralPath $item.FullName -Recurse -File
    } elseif ($item.FullName -ne $output) {
        $item
    }
}

$files = @($files | Where-Object { $_.FullName -ne $output } | Sort-Object FullName)

$manifest = foreach ($file in $files) {
    $relative = $file.FullName.Substring($root.Length).TrimStart('\', '/').Replace('\', '/')
    [PSCustomObject]@{
        relative_path = $relative
        bytes = $file.Length
        last_modified_utc = $file.LastWriteTimeUtc.ToString('o')
        sha256 = (Get-FileHash -Algorithm SHA256 -LiteralPath $file.FullName).Hash
    }
}

$manifest | Export-Csv -LiteralPath $output -NoTypeInformation -Encoding UTF8
Write-Host "Manifest written: $output"
Write-Host "Files: $($manifest.Count)"

param()

$ErrorActionPreference = 'Stop'
$root = [System.IO.Path]::GetFullPath((Join-Path (Join-Path $PSScriptRoot '..') '..'))
$utf8Strict = New-Object System.Text.UTF8Encoding($false, $true)
$failures = New-Object System.Collections.Generic.List[string]

$textExtensions = @(
    '.md', '.txt', '.csv', '.json', '.jsonl', '.ndjson',
    '.mjs', '.js', '.ps1', '.yml', '.yaml', '.toml',
    '.xml', '.html', '.css', '.sha256'
)
$specialNames = @('.gitattributes', '.gitignore')

$tracked = @(& git -C $root -c core.quotepath=false ls-files -co --exclude-standard)
if ($LASTEXITCODE -ne 0) { throw 'Unable to enumerate tracked files.' }

$checked = 0
foreach ($relative in $tracked) {
    $name = [System.IO.Path]::GetFileName($relative)
    $extension = [System.IO.Path]::GetExtension($relative).ToLowerInvariant()
    if (($textExtensions -notcontains $extension) -and ($specialNames -notcontains $name)) { continue }

    $path = Join-Path $root $relative
    if (-not (Test-Path -LiteralPath $path)) { continue }

    try {
        $bytes = [System.IO.File]::ReadAllBytes($path)
        $text = $utf8Strict.GetString($bytes)
    }
    catch {
        $failures.Add("invalid_utf8: $relative")
        continue
    }

    $checked++

    $privateOrReplacement = [regex]::Matches($text, '[\uE000-\uF8FF\uFFFD]').Count
    if ($privateOrReplacement -gt 0) {
        $failures.Add("private_use_or_replacement_chars=$privateOrReplacement : $relative")
    }

    $nonPortableCitations = [regex]::Matches($text, 'turn\d+(?:search|view|news|fetch|open|academia)\d+').Count
    if ($nonPortableCitations -gt 0) {
        $failures.Add("nonportable_turn_citations=$nonPortableCitations : $relative")
    }

    if ($relative -ne 'scripts/audit/check_reader_text.ps1') {
        $machinePaths = [regex]::Matches($text, '(?i)(?:[A-Z]:[\\/]Users[\\/][^\\/\s"'']+|file:///[A-Z]:/Users/[^/\s"'']+|/Users/[^/\s"'']+|/home/[^/\s"'']+)').Count
        if ($machinePaths -gt 0) {
            $failures.Add("machine_local_paths=$machinePaths : $relative")
        }
    }

    $privateEmails = [regex]::Matches($text, '(?i)theodore\.impact\.invest@gmail\.com').Count
    if ($privateEmails -gt 0) {
        $failures.Add("private_contact_email=$privateEmails : $relative")
    }

    $credentialMaterial = [regex]::Matches($text, '(?i)(?:gh[pousr]_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16}|-----BEGIN (?:RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----)').Count
    if ($credentialMaterial -gt 0) {
        $failures.Add("credential_material=$credentialMaterial : $relative")
    }

    $mojibakePattern = '(?:\u00C3.|\u00C2.|\u00E2\u20AC|\u00F0\u0178|\u00EF\u00BC|\u00E4\u00B8|\u00E6\u0153|\u9225|\u9286)'
    $mojibake = [regex]::Matches($text, $mojibakePattern).Count
    if ($mojibake -gt 0) {
        $failures.Add("probable_mojibake=$mojibake : $relative")
    }

    $controls = 0
    foreach ($ch in $text.ToCharArray()) {
        $code = [int][char]$ch
        if ((($code -lt 32) -and ($code -notin @(9, 10, 13))) -or ($code -eq 127)) {
            $controls++
        }
    }
    if ($controls -gt 0) {
        $failures.Add("unexpected_control_chars=$controls : $relative")
    }
}

Write-Host "Reader text files checked: $checked"

if ($failures.Count -gt 0) {
    Write-Host 'Reader text audit failed:' -ForegroundColor Red
    $failures | ForEach-Object { Write-Host "- $_" -ForegroundColor Red }
    exit 1
}

Write-Host 'Reader text audit passed.' -ForegroundColor Green

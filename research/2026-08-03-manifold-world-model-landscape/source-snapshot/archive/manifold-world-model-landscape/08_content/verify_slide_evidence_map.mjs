import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  FileBlob,
  SpreadsheetFile,
} from "@oai/artifact-tool";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..");
const mapPath = path.join(here, "slide_evidence_map.csv");
const xlsxPath = path.join(here, "slide_evidence_map.xlsx");
const ledgerPath = path.join(root, "04_evidence", "evidence_ledger.csv");
const sourcePath = path.join(root, "04_evidence", "sources.csv");
const monitoringPath = path.join(root, "07_synthesis", "monitoring_matrix.csv");
const watchPath = path.join(root, "07_synthesis", "watch_only_monitoring.csv");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (ch === '"') {
        quoted = false;
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += ch;
    }
  }
  if (field.length || row.length) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }
  const width = rows[0].length;
  if (rows.some((candidate) => candidate.length !== width)) {
    throw new Error("CSV parse produced inconsistent row widths");
  }
  return rows;
}

function ids(value) {
  return value ? value.split(";").map((part) => part.trim()).filter(Boolean) : [];
}

function normalized(value) {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

const [mapCsv, ledgerCsv, sourceCsv, monitoringCsv, watchCsv] = await Promise.all([
  fs.readFile(mapPath, "utf8"),
  fs.readFile(ledgerPath, "utf8"),
  fs.readFile(sourcePath, "utf8"),
  fs.readFile(monitoringPath, "utf8"),
  fs.readFile(watchPath, "utf8"),
]);

const mapRows = parseCsv(mapCsv);
const ledgerRows = parseCsv(ledgerCsv);
const sourceRows = parseCsv(sourceCsv);
const monitoringRows = parseCsv(monitoringCsv);
const watchRows = parseCsv(watchCsv);
const header = mapRows[0];
const index = Object.fromEntries(header.map((name, column) => [name, column]));
const claimSet = new Set(ledgerRows.slice(1).map((row) => row[0]));
const sourceSet = new Set(sourceRows.slice(1).map((row) => row[0]));
const monitorSet = new Set([
  ...monitoringRows.slice(1).map((row) => row[0]),
  ...watchRows.slice(1).map((row) => row[0]),
]);

const unresolved = [];
for (const row of mapRows.slice(1)) {
  const mapId = row[index.map_id];
  for (const claimId of ids(row[index.claim_ids])) {
    if (!claimSet.has(claimId)) unresolved.push(`${mapId}:claim:${claimId}`);
  }
  for (const sourceId of ids(row[index.source_ids])) {
    if (!sourceSet.has(sourceId)) unresolved.push(`${mapId}:source:${sourceId}`);
  }
  for (const monitorId of ids(row[index.monitor_ids])) {
    if (!monitorSet.has(monitorId)) unresolved.push(`${mapId}:monitor:${monitorId}`);
  }
  for (const artifactRef of ids(row[index.canonical_artifact_refs])) {
    try {
      await fs.stat(path.join(root, artifactRef));
    } catch {
      unresolved.push(`${mapId}:artifact:${artifactRef}`);
    }
  }
}

const fileBlob = await FileBlob.load(xlsxPath);
const workbook = await SpreadsheetFile.importXlsx(fileBlob);
const evidence = workbook.worksheets.getItem("Evidence Map");
const imported = evidence.getRangeByIndexes(0, 0, mapRows.length, header.length).values;
const cellDiffs = [];
for (let row = 0; row < mapRows.length; row += 1) {
  for (let column = 0; column < header.length; column += 1) {
    if (normalized(imported[row][column]) !== mapRows[row][column]) {
      cellDiffs.push({
        row: row + 1,
        column: column + 1,
        csv: mapRows[row][column],
        xlsx: normalized(imported[row][column]),
      });
    }
  }
}

const qa = workbook.worksheets.getItem("QA & Page Index");
const formulaValues = qa.getRange("B6:B10").values.flat().map(normalized);
const formulaErrors = formulaValues.filter((value) => /^#(REF|DIV\/0|VALUE|NAME|N\/A|NUM|NULL)!?$/i.test(value));
const pageCounts = Object.fromEntries(
  Array.from({ length: 10 }, (_, offset) => {
    const page = String(offset + 1);
    return [page, mapRows.slice(1).filter((row) => row[index.page] === page).length];
  }),
);
const page2ObjectRows = mapRows.slice(1).filter(
  (row) => row[index.page] === "2" && row[index.claim_type] === "object_level_landscape_mapping",
).length;
const uniqueMapIds = new Set(mapRows.slice(1).map((row) => row[index.map_id]));

const result = {
  rows: mapRows.length - 1,
  uniqueMapIds: uniqueMapIds.size,
  pages: Object.keys(pageCounts).length,
  pageCounts,
  page2ObjectRows,
  unresolvedNonemptyReferences: unresolved.length,
  csvXlsxCellDiffs: cellDiffs.length,
  formulaErrors: formulaErrors.length,
  formulaCache: formulaValues,
};

if (
  result.rows !== 63
  || result.uniqueMapIds !== 63
  || result.pages !== 10
  || result.page2ObjectRows !== 10
  || result.unresolvedNonemptyReferences !== 0
  || result.csvXlsxCellDiffs !== 0
  || result.formulaErrors !== 0
) {
  throw new Error(JSON.stringify({ result, unresolved, cellDiffs: cellDiffs.slice(0, 20) }, null, 2));
}

console.log(JSON.stringify(result));

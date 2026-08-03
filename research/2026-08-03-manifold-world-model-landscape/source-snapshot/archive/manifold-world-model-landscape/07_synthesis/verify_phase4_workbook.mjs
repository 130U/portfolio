import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  FileBlob,
  SpreadsheetFile,
} from "@oai/artifact-tool";

const here = path.dirname(fileURLToPath(import.meta.url));

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
      } else if (ch === '"') quoted = false;
      else field += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else field += ch;
  }
  if (field.length || row.length) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }
  return rows;
}

function normalize(value) {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

async function compareSheet(workbook, sheetName, csvPath) {
  const csvRows = parseCsv(await fs.readFile(csvPath, "utf8"));
  const sheet = workbook.worksheets.getItem(sheetName);
  const values = sheet.getRangeByIndexes(0, 0, csvRows.length, csvRows[0].length).values;
  let diffs = 0;
  for (let row = 0; row < csvRows.length; row += 1) {
    for (let column = 0; column < csvRows[0].length; column += 1) {
      if (normalize(values[row][column]) !== csvRows[row][column]) diffs += 1;
    }
  }
  return { rows: csvRows.length - 1, cellDiffs: diffs };
}

const workbook = await SpreadsheetFile.importXlsx(
  await FileBlob.load(path.join(here, "phase_4_comparison_review.xlsx")),
);
const competitive = await compareSheet(workbook, "Competitive Matrix", path.join(here, "competitive_matrix.csv"));
const monitoring = await compareSheet(workbook, "Monitoring Matrix", path.join(here, "monitoring_matrix.csv"));
const method = workbook.worksheets.getItem("Method & QA");
const methodValues = method.getRange("B5:B8").values.flat().map(normalize);
const formulaErrors = methodValues.filter((value) => value.startsWith("#")).length;
const result = { competitive, monitoring, methodValues, formulaErrors };
if (competitive.rows !== 5 || monitoring.rows !== 17 || competitive.cellDiffs || monitoring.cellDiffs || formulaErrors) {
  throw new Error(JSON.stringify(result, null, 2));
}
console.log(JSON.stringify(result));

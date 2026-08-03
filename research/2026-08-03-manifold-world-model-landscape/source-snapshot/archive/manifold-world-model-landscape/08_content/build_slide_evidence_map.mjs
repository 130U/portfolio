import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  SpreadsheetFile,
  Workbook,
} from "@oai/artifact-tool";

const here = path.dirname(fileURLToPath(import.meta.url));
const mapPath = path.join(here, "slide_evidence_map.csv");
const ledgerPath = path.join(here, "..", "04_evidence", "evidence_ledger.csv");
const sourcePath = path.join(here, "..", "04_evidence", "sources.csv");
const monitoringPath = path.join(here, "..", "07_synthesis", "monitoring_matrix.csv");
const watchPath = path.join(here, "..", "07_synthesis", "watch_only_monitoring.csv");
const outputPath = path.join(here, "slide_evidence_map.xlsx");

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
  if (field.length > 0 || row.length > 0) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }
  const width = rows[0].length;
  if (rows.some((r) => r.length !== width)) {
    throw new Error("CSV parse produced inconsistent row widths");
  }
  return rows;
}

function splitIds(value) {
  return value ? value.split(";").map((v) => v.trim()).filter(Boolean) : [];
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

const mapHeader = mapRows[0];
const index = Object.fromEntries(mapHeader.map((name, i) => [name, i]));
const claimSet = new Set(ledgerRows.slice(1).map((r) => r[0]));
const sourceSet = new Set(sourceRows.slice(1).map((r) => r[0]));
const monitorSet = new Set([
  ...monitoringRows.slice(1).map((r) => r[0]),
  ...watchRows.slice(1).map((r) => r[0]),
]);

const missingClaims = [];
const missingSources = [];
const missingMonitors = [];
for (const row of mapRows.slice(1)) {
  const mapId = row[index.map_id];
  for (const id of splitIds(row[index.claim_ids])) {
    if (!claimSet.has(id)) missingClaims.push(`${mapId}:${id}`);
  }
  for (const id of splitIds(row[index.source_ids])) {
    if (!sourceSet.has(id)) missingSources.push(`${mapId}:${id}`);
  }
  for (const id of splitIds(row[index.monitor_ids])) {
    if (!monitorSet.has(id)) missingMonitors.push(`${mapId}:${id}`);
  }
}

if (missingClaims.length || missingSources.length || missingMonitors.length) {
  throw new Error(JSON.stringify({ missingClaims, missingSources, missingMonitors }));
}

const workbook = await Workbook.fromCSV(mapCsv, { sheetName: "Evidence Map" });
const evidence = workbook.worksheets.getItem("Evidence Map");
evidence.showGridLines = false;
evidence.freezePanes.freezeRows(1);
evidence.freezePanes.freezeColumns(4);
const rowCount = mapRows.length;
const colCount = mapRows[0].length;
evidence.getRangeByIndexes(0, 0, rowCount, colCount).format = {
  font: { name: "Aptos", color: "#17343B", size: 9 },
  wrapText: true,
  verticalAlignment: "top",
  borders: { preset: "all", style: "thin", color: "#D3E0E2" },
};
evidence.getRangeByIndexes(0, 0, 1, colCount).format = {
  fill: "#123B46",
  font: { name: "Aptos", bold: true, color: "#FFFFFF", size: 9 },
  wrapText: true,
  verticalAlignment: "center",
  borders: { preset: "all", style: "thin", color: "#466B73" },
};
evidence.getRangeByIndexes(0, 0, 1, colCount).format.rowHeight = 50;
evidence.getRangeByIndexes(1, 0, rowCount - 1, colCount).format.rowHeight = 84;
for (let r = 1; r < rowCount; r += 1) {
  if (r % 2 === 0) evidence.getRangeByIndexes(r, 0, 1, colCount).format.fill = "#F1F7F8";
}
const widths = [12, 8, 34, 25, 52, 24, 32, 32, 36, 32, 26, 42, 14];
widths.forEach((width, col) => {
  evidence.getRangeByIndexes(0, col, rowCount, 1).format.columnWidth = width;
});
evidence.getRangeByIndexes(1, 0, rowCount - 1, 4).format.fill = "#EAF2F3";
evidence.getRangeByIndexes(1, 0, rowCount - 1, 4).format.font = {
  name: "Aptos",
  bold: true,
  color: "#123B46",
  size: 9,
};

const qa = workbook.worksheets.add("QA & Page Index");
qa.showGridLines = false;
qa.getRange("A1:F2").merge();
qa.getRange("A1").values = [["Content Lock v1.1a evidence map — QA and page index"]];
qa.getRange("A1:F2").format = {
  fill: "#123B46",
  font: { name: "Aptos", bold: true, color: "#FFFFFF", size: 18 },
  verticalAlignment: "center",
};
qa.getRange("A3:F3").merge();
qa.getRange("A3").values = [["63-row audit attachment for the 10-page v1.1a text review; not a storyboard, slide layout, fact lock, or deck production file."]];
qa.getRange("A3:F3").format = {
  fill: "#DCEBED",
  font: { name: "Aptos", italic: true, color: "#36545B", size: 10 },
};
qa.getRange("A5:B10").values = [
  ["QA field", "Value"],
  ["Evidence-map rows", null],
  ["Pages represented", null],
  ["未解析的非空 Claim 引用", missingClaims.length],
  ["未解析的非空 Source 引用", missingSources.length],
  ["未解析的非空 Monitor/Watch 引用", missingMonitors.length],
];
qa.getRange("B6").formulas = [["=COUNTA('Evidence Map'!A2:A100)"]];
qa.getRange("B7").formulas = [["=COUNTA(A14:A23)"]];
qa.getRange("A5:B10").format = {
  font: { name: "Aptos", color: "#17343B", size: 10 },
  wrapText: true,
  borders: { preset: "all", style: "thin", color: "#C9D8DB" },
};
qa.getRange("A5:B5").format = {
  fill: "#1E5A66",
  font: { name: "Aptos", bold: true, color: "#FFFFFF", size: 10 },
};
qa.getRange("B8:B10").format = {
  fill: "#DDF2E4",
  font: { name: "Aptos", bold: true, color: "#1F6A3E", size: 10 },
  horizontalAlignment: "center",
};

const pageTitles = [];
for (let page = 1; page <= 10; page += 1) {
  const rows = mapRows.slice(1).filter((r) => Number(r[index.page]) === page);
  pageTitles.push([page, rows[0][index.page_title], rows.length, rows.filter((r) => r[index.claim_ids]).length, rows.filter((r) => r[index.monitor_ids]).length, "mapped"]);
}
qa.getRange("A12:F12").merge();
qa.getRange("A12").values = [["Ten-page content index"]];
qa.getRange("A12:F12").format = {
  fill: "#D9772D",
  font: { name: "Aptos", bold: true, color: "#FFFFFF", size: 11 },
};
qa.getRange("A13:F23").values = [
  ["Page", "Conclusion title", "Evidence rows", "Claim-bearing rows", "Monitor-bearing rows", "Status"],
  ...pageTitles,
];
qa.getRange("A13:F23").format = {
  font: { name: "Aptos", color: "#17343B", size: 10 },
  wrapText: true,
  verticalAlignment: "top",
  borders: { preset: "all", style: "thin", color: "#C9D8DB" },
};
qa.getRange("A13:F13").format = {
  fill: "#1E5A66",
  font: { name: "Aptos", bold: true, color: "#FFFFFF", size: 10 },
};
for (let r = 14; r <= 23; r += 1) {
  if (r % 2 === 0) qa.getRange(`A${r}:F${r}`).format.fill = "#F1F7F8";
}
qa.getRange("A1:F23").format.rowHeight = 24;
qa.getRange("A1:F2").format.rowHeight = 32;
qa.getRange("A3:F3").format.rowHeight = 26;
qa.getRange("A14:F23").format.rowHeight = 50;
qa.getRange("A1:A23").format.columnWidth = 18;
qa.getRange("B1:B23").format.columnWidth = 58;
qa.getRange("C1:F23").format.columnWidth = 20;
qa.freezePanes.freezeRows(3);

console.log(JSON.stringify({
  rows: mapRows.length - 1,
  pages: pageTitles.length,
  missingClaims: missingClaims.length,
  missingSources: missingSources.length,
  missingMonitors: missingMonitors.length,
  formulaCache: qa.getRange("B6:B10").values,
}));

const qaPreview = await workbook.render({ sheetName: "QA & Page Index", autoCrop: "all", scale: 1.0, format: "png" });
await fs.writeFile(path.join(here, "slide_evidence_map_qa.png"), new Uint8Array(await qaPreview.arrayBuffer()));
const mapPreview = await workbook.render({ sheetName: "Evidence Map", range: "A1:M12", scale: 0.55, format: "png" });
await fs.writeFile(path.join(here, "slide_evidence_map_preview.png"), new Uint8Array(await mapPreview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(JSON.stringify({ outputPath }));
process.exit(0);

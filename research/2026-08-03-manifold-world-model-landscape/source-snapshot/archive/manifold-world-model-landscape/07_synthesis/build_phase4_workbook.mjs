import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  SpreadsheetFile,
  Workbook,
} from "@oai/artifact-tool";

const here = path.dirname(fileURLToPath(import.meta.url));
const competitivePath = path.join(here, "competitive_matrix.csv");
const monitoringPath = path.join(here, "monitoring_matrix.csv");
const outputPath = path.join(here, "phase_4_comparison_review.xlsx");

const [competitiveCsv, monitoringCsv] = await Promise.all([
  fs.readFile(competitivePath, "utf8"),
  fs.readFile(monitoringPath, "utf8"),
]);

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

// Use the native CSV importer for the first canonical CSV.
const workbook = await Workbook.fromCSV(competitiveCsv, { sheetName: "Competitive Matrix" });

// The current library only hydrates CSV into an empty workbook, so the second
// canonical CSV is safely parsed and block-written into a newly created sheet.
const monitoringRows = parseCsv(monitoringCsv);
const monitoring = workbook.worksheets.add("Monitoring Matrix");
monitoring
  .getRangeByIndexes(0, 0, monitoringRows.length, monitoringRows[0].length)
  .values = monitoringRows;

// Create the review/method sheet only after every formula-referenced sheet exists.
const qa = workbook.worksheets.add("Method & QA");
qa.showGridLines = false;
qa.getRange("A1:H2").merge();
qa.getRange("A1").values = [["Phase 4 non-scoring comparison review"]];
qa.getRange("A1:H2").format = {
  fill: "#123B46",
  font: { bold: true, color: "#FFFFFF", size: 18 },
  horizontalAlignment: "left",
  verticalAlignment: "center",
};
qa.getRange("A3:H3").merge();
qa.getRange("A3").values = [["Derived from the canonical CSVs; this workbook is a review surface, not an independent fact source."]];
qa.getRange("A3:H3").format = {
  fill: "#DCEBED",
  font: { italic: true, color: "#36545B", size: 10 },
  verticalAlignment: "center",
};

qa.getRange("A5:B12").values = [
  ["QA field", "Value"],
  ["Fixed-five rows", null],
  ["Monitoring signals", null],
  ["Five-row check", null],
  ["Seventeen-signal check", null],
  ["Evidence baseline", "141 sources / 111 claims / 58 queries"],
  ["Phase 3 QA", "P0=0 / P1=0 / P2=0"],
  ["As-of", "2026-07-14"],
];
qa.getRange("B6").formulas = [["=COUNTA('Competitive Matrix'!A2:A20)"]];
qa.getRange("B7").formulas = [["=COUNTA('Monitoring Matrix'!A2:A30)"]];
qa.getRange("B8").formulas = [["=IF(B6=5,\"PASS\",\"CHECK\")"]];
qa.getRange("B9").formulas = [["=IF(B7=17,\"PASS\",\"CHECK\")"]];
qa.getRange("A5:B12").format = {
  font: { color: "#17343B", size: 10 },
  wrapText: true,
  verticalAlignment: "top",
  borders: { preset: "all", style: "thin", color: "#C9D8DB" },
};
qa.getRange("A5:B5").format = {
  fill: "#1E5A66",
  font: { bold: true, color: "#FFFFFF", size: 10 },
  borders: { preset: "all", style: "thin", color: "#C9D8DB" },
};
qa.getRange("B8:B9").format = {
  fill: "#DDF2E4",
  font: { bold: true, color: "#1F6A3E", size: 10 },
  horizontalAlignment: "center",
  borders: { preset: "all", style: "thin", color: "#A9CFB6" },
};

qa.getRange("A14:H14").merge();
qa.getRange("A14").values = [["Interpretation guardrails"]];
qa.getRange("A14:H14").format = {
  fill: "#D9772D",
  font: { bold: true, color: "#FFFFFF", size: 11 },
  verticalAlignment: "center",
};
const guardrails = [
  "No total score or ordinal ranking; object order follows the approved IDs only.",
  "Gate 3 is conditional against the Manifold public anchor and does not prove shared buyers, budgets, or delivery.",
  "Technical evidence, external access, and commercial adoption are separate maturity dimensions.",
  "Runway Gate 2 is closed only by Worlds; Cosmos Gate 2 is closed only by forward dynamics. Related Robotics/policy/inverse layers cannot lend qualification or maturity.",
  "Storyboard, page layout, fact lock, deck, PPT, and PDF remain frozen until Content Lock approval.",
];
for (let i = 0; i < guardrails.length; i += 1) {
  const row = 15 + i;
  qa.getRange(`A${row}:H${row}`).merge();
  qa.getRange(`A${row}`).values = [[`• ${guardrails[i]}`]];
  qa.getRange(`A${row}:H${row}`).format = {
    fill: i % 2 === 0 ? "#FFF4E8" : "#FFFFFF",
    font: { color: "#4A3A2B", size: 10 },
    wrapText: true,
    verticalAlignment: "center",
    borders: { preset: "outside", style: "thin", color: "#E6D4C3" },
  };
}

qa.getRange("A22:H22").merge();
qa.getRange("A22").values = [["Five distinct risk modes (non-ranking)"]];
qa.getRange("A22:H22").format = {
  fill: "#1E5A66",
  font: { bold: true, color: "#FFFFFF", size: 11 },
  verticalAlignment: "center",
};
const riskModes = [
  ["World Labs", "Spatial-world product/API plus a separate real-time navigation research route"],
  ["Odyssey", "Vendor-documented hosted prototype for real-time action-conditioned world streams"],
  ["Runway", "Creative-foundation-model migration into separate Worlds and Robotics product routes"],
  ["Decart", "Metered driving-first stateful Preview API with direct negative hands-on evidence"],
  ["NVIDIA Cosmos 3", "Downloadable model materials and self-host runtime as an open component platform"],
];
for (let i = 0; i < riskModes.length; i += 1) {
  const row = 23 + i;
  qa.getRange(`A${row}:B${row}`).merge();
  qa.getRange(`C${row}:H${row}`).merge();
  qa.getRange(`A${row}`).values = [[riskModes[i][0]]];
  qa.getRange(`C${row}`).values = [[riskModes[i][1]]];
  qa.getRange(`A${row}:H${row}`).format = {
    fill: i % 2 === 0 ? "#EAF2F3" : "#FFFFFF",
    font: { color: "#17343B", size: 10 },
    wrapText: true,
    verticalAlignment: "center",
    borders: { preset: "all", style: "thin", color: "#C9D8DB" },
  };
  qa.getRange(`A${row}:B${row}`).format.font = { bold: true, color: "#123B46", size: 10 };
}
qa.getRange("A1:H27").format.font.name = "Aptos";
qa.getRange("A1:A27").format.columnWidth = 16;
qa.getRange("B1:B27").format.columnWidth = 16;
qa.getRange("C1:H27").format.columnWidth = 17;
qa.getRange("A1:H27").format.rowHeight = 22;
qa.getRange("A1:H2").format.rowHeight = 32;
qa.getRange("A3:H3").format.rowHeight = 24;
qa.getRange("A10:B10").format.rowHeight = 38;
qa.getRange("A15:H19").format.rowHeight = 32;
qa.getRange("A23:H27").format.rowHeight = 34;
qa.freezePanes.freezeRows(3);

function styleDataSheet(sheet, rowCount, colCount, widthRules, bodyRowHeight) {
  sheet.showGridLines = false;
  sheet.freezePanes.freezeRows(1);
  sheet.freezePanes.freezeColumns(Math.min(4, colCount));
  const all = sheet.getRangeByIndexes(0, 0, rowCount, colCount);
  all.format = {
    font: { name: "Aptos", color: "#17343B", size: 9 },
    wrapText: true,
    verticalAlignment: "top",
    borders: { preset: "all", style: "thin", color: "#D3E0E2" },
  };
  const header = sheet.getRangeByIndexes(0, 0, 1, colCount);
  header.format = {
    fill: "#123B46",
    font: { name: "Aptos", bold: true, color: "#FFFFFF", size: 9 },
    wrapText: true,
    verticalAlignment: "center",
    horizontalAlignment: "left",
    borders: { preset: "all", style: "thin", color: "#466B73" },
  };
  header.format.rowHeight = 52;
  sheet.getRangeByIndexes(1, 0, rowCount - 1, colCount).format.rowHeight = bodyRowHeight;
  for (let r = 1; r < rowCount; r += 1) {
    if (r % 2 === 0) {
      sheet.getRangeByIndexes(r, 0, 1, colCount).format.fill = "#F1F7F8";
    }
  }
  for (const [col, width] of widthRules) {
    sheet.getRangeByIndexes(0, col, rowCount, 1).format.columnWidth = width;
  }
}

const competitive = workbook.worksheets.getItem("Competitive Matrix");
styleDataSheet(
  competitive,
  6,
  26,
  [
    [0, 11], [1, 19], [2, 16], [3, 20], [4, 38], [5, 36], [6, 38],
    [7, 38], [8, 38], [9, 38], [10, 38], [11, 36], [12, 36], [13, 40],
    [14, 38], [15, 38], [16, 30], [17, 34], [18, 34], [19, 38], [20, 38],
    [21, 38], [22, 38], [23, 31], [24, 24], [25, 14],
  ],
  108,
);
competitive.getRange("A2:D6").format.fill = "#EAF2F3";
competitive.getRange("A2:D6").format.font = { name: "Aptos", bold: true, color: "#123B46", size: 9 };

styleDataSheet(
  monitoring,
  monitoringRows.length,
  monitoringRows[0].length,
  [
    [0, 13], [1, 11], [2, 19], [3, 23], [4, 42], [5, 44], [6, 34],
    [7, 16], [8, 42], [9, 28], [10, 28], [11, 14],
  ],
  82,
);
const monitoringLastRow = monitoringRows.length;
monitoring.getRange(`A2:D${monitoringLastRow}`).format.fill = "#EAF2F3";
monitoring.getRange(`A2:D${monitoringLastRow}`).format.font = { name: "Aptos", bold: true, color: "#123B46", size: 9 };

console.log(JSON.stringify({ methodChecks: qa.getRange("B6:B9").values }));

const previews = [
  ["Method & QA", "phase_4_comparison_review_method.png", 1.0],
  ["Competitive Matrix", "phase_4_comparison_review_competitive.png", 0.35],
  ["Monitoring Matrix", "phase_4_comparison_review_monitoring.png", 0.55],
];
for (const [sheetName, fileName, scale] of previews) {
  const preview = await workbook.render({ sheetName, autoCrop: "all", scale, format: "png" });
  await fs.writeFile(path.join(here, fileName), new Uint8Array(await preview.arrayBuffer()));
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(JSON.stringify({ outputPath, sheets: previews.map(([name]) => name) }));
process.exit(0);

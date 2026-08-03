import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  Presentation,
  PresentationFile,
  layers,
  shape,
  text,
} from "@oai/artifact-tool";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(HERE, "..", "manifold-world-model-landscape");
const OUT_PPTX = path.join(PROJECT_ROOT, "10_deck", "manifold_world_model_landscape_v1_4.pptx");
const TMP = process.env.MANIFOLD_DECK_TMP || path.join(HERE, ".tmp", "v1_4");
const PREVIEW = path.join(TMP, "preview_v1_4");
const LAYOUT = path.join(TMP, "layout_v1_4");
const QA = path.join(TMP, "qa_v1_4");

const W = 1280;
const H = 720;
const FONT_SANS = "Noto Sans SC";
const FONT_SERIF = "Noto Serif SC";

const BG = "#F7F3ED";
const PAPER = "#FCFAF6";
const INK = "#24211E";
const MUTED = "#6E6861";
const RULE = "#D8D0C6";
const RULE_DARK = "#BDB4AA";
const CLAY = "#C56B4D";
const CLAY_SOFT = "#F1DFD5";
const SAGE = "#75867A";
const SAGE_SOFT = "#E5EBE5";
const LAV = "#766F82";
const LAV_SOFT = "#E9E5ED";
const GOLD = "#A48755";
const GOLD_SOFT = "#EFE7D6";
const GREY_SOFT = "#EEEAE4";

const BODY = 21.33;      // 16 pt
const FOOT = 13.33;      // 10 pt
const EYEBROW = 18.67;   // 14 pt
const SUB = 24;          // 18 pt
const MID = 26.67;       // 20 pt
const SECTION = 32;      // 24 pt
const TITLE = 46.67;     // 35 pt
const EXEC = 66.67;      // 50 pt

function t(name, value, left, top, width, height, fontSize = BODY, options = {}) {
  return text([value], {
    name,
    position: { left, top, width, height },
    style: {
      fontSize: `${fontSize}px`,
      typeface: options.font || FONT_SANS,
      color: options.color || INK,
      bold: Boolean(options.bold),
      italic: Boolean(options.italic),
      alignment: options.align || "left",
      verticalAlignment: options.valign || "top",
      lineSpacing: options.lineSpacing ?? (fontSize >= TITLE ? 0.96 : fontSize >= BODY ? 1.18 : 1.05),
      autoFit: "none",
      wrap: options.wrap || "square",
      insets: options.insets || { top: 0, right: 0, bottom: 0, left: 0 },
    },
  });
}

function rect(name, left, top, width, height, fill) {
  return shape({
    name,
    geometry: "rect",
    fill,
    position: { left, top },
    width,
    height,
  });
}

function outline(name, left, top, width, height, stroke = RULE_DARK, weight = 0.75, fill = "none") {
  return shape({
    name,
    geometry: "rect",
    fill,
    line: { style: "solid", fill: stroke, width: weight },
    position: { left, top },
    width,
    height,
  });
}

function rule(name, left, top, width, height = 1, fill = RULE) {
  return rect(name, left, top, width, height, fill);
}

function addSlide(presentation, name, elements) {
  const slide = presentation.slides.add();
  slide.background.fill = BG;
  slide.compose(
    layers({ name, width: "fill", height: "fill" }, elements),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 1 },
  );
}

function footer(page, source, guardrail = "") {
  const e = [rule(`p${page}-footer-rule`, 64, 676, 1096, 1, RULE)];
  const leftText = guardrail ? `${guardrail}｜${source}` : source;
  e.push(t(`p${page}-footer-source`, leftText, 64, 684, 820, 20, FOOT, { color: MUTED }));
  e.push(t(`p${page}-footer-page`, `截至 2026-07-14  ·  ${String(page).padStart(2, "0")}`, 900, 684, 284, 20, FOOT, { color: MUTED, align: "right" }));
  return e;
}

function editorialHeader(page, eyebrow, title, subtitle = "", options = {}) {
  const e = [];
  e.push(t(`p${page}-eyebrow`, eyebrow, 64, options.eyebrowTop || 26, 780, 24, EYEBROW, { color: CLAY, bold: true }));
  e.push(t(`p${page}-title`, title, 64, options.titleTop || 56, options.titleWidth || 1152, options.titleHeight || 92, options.titleSize || TITLE, { font: FONT_SERIF, bold: true }));
  if (subtitle) {
    e.push(t(`p${page}-subtitle`, subtitle, 64, options.subtitleTop || 148, options.subtitleWidth || 1100, options.subtitleHeight || 52, BODY, { color: MUTED }));
  }
  return e;
}

function sectionLabel(name, label, left, top, width, color = CLAY) {
  return [
    rule(`${name}-rule`, left, top, 38, 3, color),
    t(`${name}-label`, label, left, top + 10, width, 30, SUB, { bold: true }),
  ];
}

function bullets(name, items, left, top, width, lineHeight = 42, color = INK) {
  const e = [];
  items.forEach((item, i) => {
    e.push(t(`${name}-dot-${i}`, "•", left, top + i * lineHeight, 18, 28, BODY, { color: CLAY, bold: true }));
    e.push(t(`${name}-text-${i}`, item, left + 24, top + i * lineHeight, width - 24, lineHeight, BODY, { color }));
  });
  return e;
}

function fixedNode(name, label, access, left, top, width, secondary = "", accent = CLAY) {
  const e = [rule(`${name}-mark`, left, top + 9, 16, 3, accent)];
  e.push(t(`${name}-name`, label, left + 24, top, width - 24, 28, SUB, { bold: true }));
  e.push(t(`${name}-access`, access, left + 24, top + 29, width - 24, 28, BODY, { color: accent }));
  if (secondary) e.push(t(`${name}-secondary`, secondary, left + 24, top + 56, width - 24, 25, BODY, { color: MUTED }));
  return e;
}

function observeNode(name, label, access, left, top, width) {
  return [
    t(`${name}-circle`, "○", left, top, 20, 28, BODY, { color: MUTED }),
    t(`${name}-text`, `${label}  ·  ${access}`, left + 24, top, width - 24, 32, BODY, { color: MUTED }),
  ];
}

function page1(p) {
  const e = [];
  e.push(t("p1-report", "MANIFOLD · 非中国世界模型竞争格局", 64, 30, 620, 24, EYEBROW, { color: CLAY, bold: true }));
  e.push(t("p1-date", "五类重点路径 · 12–24 个月", 920, 30, 290, 24, EYEBROW, { color: MUTED }));
  e.push(rule("p1-top-rule", 64, 68, 1120, 1, RULE));
  e.push(t("p1-answer-tag", "EXECUTIVE ANSWER", 64, 98, 300, 22, EYEBROW, { color: CLAY, bold: true }));
  e.push(t("p1-title", "海外世界模型已经从模型演示\n走向三种交付方式", 64, 132, 1080, 150, EXEC, { font: FONT_SERIF, bold: true, lineSpacing: 0.92 }));
  e.push(t("p1-answer", "公开计价接口、申请制入口和可下载 / 自托管组件已经出现；\n但还没有公开证据证明任何一家进入客户确认的付费生产阶段。", 64, 316, 1070, 84, 29.33, { color: INK, lineSpacing: 1.14 }));

  const cols = [64, 444, 824];
  const fills = [CLAY_SOFT, SAGE_SOFT, LAV_SOFT];
  const accents = [CLAY, SAGE, LAV];
  const heads = ["三种路径\n已经可见", "真正要比较的\n是交付链", "公开证据仍\n停在早期"];
  const bodies = [
    "按秒调用、申请访问、\n自托管已经出现；\n交付物不再只是模型演示。",
    "接口、运行时、部署方式\n与权利边界共同决定：\n能力能否真正落地。",
    "现有案例多为供应商\n或伙伴自报；客户第一方\n生产采用仍未出现。",
  ];
  for (let i = 0; i < 3; i += 1) {
    e.push(rect(`p1-band-${i}`, cols[i], 458, 356, 170, fills[i]));
    e.push(rule(`p1-band-mark-${i}`, cols[i], 458, 54, 4, accents[i]));
    e.push(t(`p1-band-head-${i}`, heads[i], cols[i] + 28, 482, 300, 54, SUB, { bold: true, lineSpacing: 1.05 }));
    e.push(t(`p1-band-body-${i}`, bodies[i], cols[i] + 28, 548, 300, 70, BODY, { lineSpacing: 1.12 }));
  }
  e.push(...footer(1, "公开来源：官方产品、API、价格、条款、公司/伙伴自报及独立体验"));
  addSlide(p, "manifold-v13-p1", e);
}

function page2(p) {
  const e = [];
  e.push(...editorialHeader(2, "STRATEGIC LANDSCAPE", "海外玩家分成三类世界形态，落点取决于任务与获得方式", "公司名单在第一行，获得方式或关键限制在第二行；粗体色线为固定五席，○为观察对象。", { titleTop: 50, titleHeight: 54, titleSize: 44, subtitleTop: 108, subtitleHeight: 30 }));

  const x = 64, y = 158;
  const widths = [230, 288, 326, 308];
  const xs = [x, x + widths[0], x + widths[0] + widths[1], x + widths[0] + widths[1] + widths[2]];
  const headerH = 62;
  const rowTops = [y + headerH, y + headerH + 164, y + headerH + 164 + 132];
  const rowHeights = [164, 132, 88];
  const colFills = [GREY_SOFT, CLAY_SOFT, SAGE_SOFT, LAV_SOFT];
  const colAccents = [MUTED, CLAY, SAGE, LAV];
  const headers = ["主要任务 /\n交付位置", "持久空间世界", "实时交互世界流", "动作条件物理智能组件"];

  for (let c = 0; c < 4; c += 1) {
    e.push(rect(`p2-col-bg-${c}`, xs[c], y, widths[c], 446, colFills[c]));
    e.push(rule(`p2-col-accent-${c}`, xs[c], y, widths[c], 5, colAccents[c]));
    e.push(t(`p2-col-head-${c}`, headers[c], xs[c] + 18, y + 14, widths[c] - 36, 40, c === 0 || c === 3 ? SUB : MID, { bold: true, lineSpacing: 1.04 }));
  }

  const rowLabels = [
    ["01", "内容与探索"],
    ["02", "开发者世界 /\n仿真基础设施"],
    ["03", "机器人规划\n与控制"],
  ];
  rowLabels.forEach(([num, label], i) => {
    e.push(t(`p2-row-num-${i}`, num, x + 18, rowTops[i] + 18, 38, 28, EYEBROW, { color: CLAY, bold: true }));
    e.push(t(`p2-row-label-${i}`, label, x + 62, rowTops[i] + 16, widths[0] - 80, rowHeights[i] - 28, SUB, { bold: true, lineSpacing: 1.1 }));
  });

  const fixedRecord = (name, label, detail, left, top, width, accent) => [
    rule(`${name}-mark`, left, top + 10, 18, 3, accent),
    t(`${name}-name`, label, left + 28, top, width - 28, 28, SUB, { bold: true }),
    t(`${name}-detail`, detail, left + 28, top + 30, width - 28, 24, BODY, { color: accent }),
  ];
  const watchRecord = (name, label, detail, left, top, width) => [
    t(`${name}-circle`, "○", left, top, 20, 28, BODY, { color: MUTED }),
    t(`${name}-name`, label, left + 28, top, width - 28, 28, SUB, { bold: true, color: MUTED }),
    t(`${name}-detail`, detail, left + 28, top + 28, width - 28, 24, BODY, { color: MUTED }),
  ];

  e.push(...fixedRecord("p2-world-labs", "World Labs", "公开计价接口", xs[1] + 18, 274, widths[1] - 36, CLAY));
  e.push(...fixedRecord("p2-runway", "Runway", "申请制入口；Robotics 单列", xs[2] + 18, 226, widths[2] - 36, SAGE));
  e.push(...watchRecord("p2-genie", "Genie 3", "封闭原型", xs[2] + 18, 278, widths[2] - 36));
  e.push(...watchRecord("p2-overworld", "Overworld（地域条件）", "开放权重", xs[2] + 18, 330, widths[2] - 36));

  e.push(t("p2-empty-r1-c4", "—", xs[3] + 24, 278, 40, 30, SUB, { color: MUTED }));
  e.push(t("p2-empty-r2-c2", "—", xs[1] + 24, 438, 40, 30, SUB, { color: MUTED }));
  e.push(...fixedRecord("p2-odyssey", "Odyssey", "文档入口；账户未独立确认", xs[2] + 18, 392, widths[2] - 36, SAGE));
  e.push(...fixedRecord("p2-decart", "Decart", "公开计价接口", xs[2] + 18, 456, widths[2] - 36, SAGE));
  e.push(...fixedRecord("p2-cosmos", "NVIDIA Cosmos 3", "可下载 / 自托管", xs[3] + 18, 392, widths[3] - 36, LAV));
  e.push(...watchRecord("p2-mira", "MIRA", "外部入口未核", xs[3] + 18, 456, widths[3] - 36));

  e.push(t("p2-empty-r3-c2", "—", xs[1] + 24, 548, 40, 30, SUB, { color: MUTED }));
  e.push(t("p2-empty-r3-c3", "—", xs[2] + 24, 548, 40, 30, SUB, { color: MUTED }));
  e.push(...watchRecord("p2-meta", "Meta V-JEPA", "checkpoint 可下载；许可待核", xs[3] + 18, 532, widths[3] - 36));

  const tableBottom = y + 446;
  [xs[1], xs[2], xs[3]].forEach((vx, i) => e.push(rule(`p2-v-${i}`, vx, y, 1, 446, RULE_DARK)));
  rowTops.forEach((ry, i) => e.push(rule(`p2-h-${i}`, x, ry, 1152, 1, RULE_DARK)));
  e.push(rule("p2-table-bottom", x, tableBottom, 1152, 1, RULE_DARK));

  e.push(rect("p2-ami-bg", 64, 612, 1152, 34, GOLD_SOFT));
  e.push(rule("p2-ami-accent", 64, 612, 5, 34, GOLD));
  e.push(t("p2-ami-name", "早期信号 · AMI Labs", 82, 618, 280, 24, BODY, { bold: true, color: GOLD }));
  e.push(t("p2-ami-detail", "暂不归入三类世界形态；自有技术资产与外部入口待核", 382, 618, 760, 24, BODY, { color: MUTED }));
  e.push(t("p2-scope", "5/4/1；中国大陆公司与类别外路线不作节点；Manifold 只作公开锚点。", 64, 650, 1096, 20, FOOT, { color: MUTED }));
  e.push(...footer(2, "来源：官方项目、产品、代码仓库、开发者资料及公司/地域资料"));
  addSlide(p, "manifold-v13-p2", e);
}

function page3(p) {
  const e = [];
  e.push(...editorialHeader(3, "FIVE PATHS · NO RANKING", "五席走五条路，差异在产品形态和证据成熟度", "固定五席体现路线互补，不构成能力、公司或商业成熟度排名。", { titleTop: 50, titleHeight: 45, subtitleTop: 107, subtitleHeight: 22 }));

  const x = 64, y = 134;
  const widths = [138, 202.8, 202.8, 202.8, 202.8, 202.8];
  const heights = [52, 118, 140, 132, 86];
  const headers = ["比较维度", "World Labs", "Odyssey", "Runway", "Decart", "NVIDIA Cosmos 3"];
  const headerAccents = [MUTED, CLAY, SAGE, SAGE, CLAY, LAV];
  const rowNames = ["技术证据", "外部\n可获得性", "商业采用\n上限", "对 Manifold\n的意义"];
  const cells = [
    ["位姿条件导航与\n空间记忆；动态物体\n仍待证", "历史帧和动作条件\n未来；长时稳定性\n未独立验证", "Worlds 支持导航\n条件未来；Robotics\n证据单列", "油门/转向驱动\n三向后续视图；\n动作域较窄", "动作条件前向预测；\n漂移、几何和碰撞\n仍有限"],
    ["公开计价的\n专有世界接口", "厂商文档化\n原型接口；实际账户\n未确认", "Worlds 申请制；\nRobotics 需洽谈", "公开账户、按秒\n计费的预览接口", "模型材料可下载\n并可自托管；\nGenerator NIM 1.0.0\n只含文生/图生视频"],
    ["供应商托管原型；\n无客户第一方\n生产证据", "合同框架与\n自报云合作；\n无具名采用证据", "公司自报合作；\n无伙伴侧\n部署证据", "有价格与独立体验；\n无付费客户或\n生产证据", "伙伴自报早期测试 /\n内部部署；无客户\n第一方付费生产证据"],
    ["空间世界接口可能\n绕行生成与交付", "若接口稳定，可成为\n实时世界流基础设施", "内容平台向可探索\n世界和机器人应用延伸", "可计费驾驶接口把\n竞争推向具体任务", "自托管组件可绕行\n供应商，也可成为底层"],
  ];

  let cy = y;
  e.push(rect("p3-header-bg", x, cy, 1152, heights[0], "#EDE8E1"));
  let cx = x;
  for (let c = 0; c < 6; c += 1) {
    e.push(rule(`p3-header-accent-${c}`, cx + 12, cy + 9, 32, 3, headerAccents[c]));
    e.push(t(`p3-header-${c}`, headers[c], cx + 12, cy + 20, widths[c] - 24, heights[0] - 22, c === 0 || c === 5 ? BODY : 22.67, { bold: true }));
    cx += widths[c];
  }
  cy += heights[0];
  for (let r = 0; r < 4; r += 1) {
    const fill = r % 2 === 0 ? PAPER : "#F2EDE6";
    e.push(rect(`p3-row-bg-${r}`, x, cy, 1152, heights[r + 1], fill));
    e.push(t(`p3-rowhead-${r}`, rowNames[r], x + 12, cy + 14, widths[0] - 24, heights[r + 1] - 28, BODY, { bold: true, lineSpacing: 1.18 }));
    cx = x + widths[0];
    for (let c = 0; c < 5; c += 1) {
      e.push(t(`p3-cell-${r}-${c}`, cells[r][c], cx + 12, cy + 14, widths[c + 1] - 24, heights[r + 1] - 28, BODY, { lineSpacing: 1.2 }));
      cx += widths[c + 1];
    }
    cy += heights[r + 1];
  }
  let hy = y + heights[0];
  for (let r = 0; r < 4; r += 1) {
    e.push(rule(`p3-h-${r}`, x, hy, 1152, 1, RULE));
    hy += heights[r + 1];
  }
  e.push(...footer(3, "来源：官方技术、产品、接入、价格和条款资料；公司/伙伴自报及独立体验"));
  addSlide(p, "manifold-v12-p3", e);
}

function companyIdentity(page, label, title, route, routeColor = CLAY, titleSize = 40) {
  const e = [];
  e.push(t(`p${page}-identity`, label, 64, 28, 720, 24, EYEBROW, { color: routeColor, bold: true }));
  e.push(t(`p${page}-title`, title, 64, 66, 1080, 90, titleSize, { font: FONT_SERIF, bold: true, lineSpacing: 1.12 }));
  e.push(rule(`p${page}-route-line`, 64, 196, 44, 3, routeColor));
  e.push(t(`p${page}-route`, route, 120, 180, 640, 28, BODY, { color: MUTED, bold: true }));
  return e;
}

function page4(p) {
  const e = companyIdentity(4, "创业公司 1/4 · WORLD LABS", "World API 已开放计价；\n动态交互和客户采用仍待证", "持久空间世界 · 公开计价接口", CLAY);

  e.push(rect("p4-established-bg", 64, 220, 716, 230, CLAY_SOFT));
  e.push(...sectionLabel("p4-established", "已成立", 96, 246, 220, CLAY));
  e.push(rule("p4-component-divider", 414, 304, 1, 118, RULE));
  e.push(t("p4-rtfm-name", "RTFM", 96, 308, 260, 32, MID, { bold: true }));
  e.push(t("p4-rtfm-body", "位姿条件未来视图\n与空间记忆已经公开；\n动态物体仍待证。", 96, 350, 266, 76, BODY, { lineSpacing: 1.18 }));
  e.push(t("p4-api-name", "Marble / World API", 446, 308, 286, 32, MID, { bold: true }));
  e.push(t("p4-api-body", "已有公开计价；\n与 RTFM 分立，\n两条路线需单独判断。", 446, 350, 286, 76, BODY, { lineSpacing: 1.18 }));

  e.push(rect("p4-not-bg", 804, 220, 380, 230, GREY_SOFT));
  e.push(...sectionLabel("p4-not", "未成立", 836, 246, 220, MUTED));
  e.push(...bullets("p4-not-list", ["持久动态物体", "独立系统复现", "客户第一方付费生产采用", "服务与内容权仍有采购摩擦"], 836, 296, 316, 38));

  e.push(rect("p4-meaning-bg", 64, 474, 716, 176, PAPER));
  e.push(...sectionLabel("p4-meaning", "对 Manifold 的意义", 96, 500, 360, SAGE));
  e.push(t("p4-meaning-body", "空间世界接口可能绕行专有生成与交付；\n但仍不能确认双方已争夺相同客户或预算。", 96, 552, 624, 60, BODY, { lineSpacing: 1.18 }));

  e.push(rect("p4-trigger-bg", 804, 474, 380, 176, SAGE_SOFT));
  e.push(...sectionLabel("p4-trigger", "关键触发器", 836, 500, 260, SAGE));
  e.push(t("p4-trigger-body", "RTFM 获得独立复现，\n或 World API 形成版本化服务。", 836, 552, 308, 60, BODY, { bold: true, lineSpacing: 1.18 }));
  e.push(...footer(4, "来源：官方研究/项目页、API、价格、条款及厂商案例", "RTFM 与 World API 分立"));
  addSlide(p, "manifold-v13-p4", e);
}

function page5(p) {
  const e = companyIdentity(5, "创业公司 2/4 · ODYSSEY", "实时世界流已写进开发者接口；\n账户、稳定性和服务等级仍待证", "实时世界流 · 文档化接口", SAGE);

  e.push(rect("p5-left-bg", 64, 220, 670, 430, PAPER));
  e.push(...sectionLabel("p5-established", "已成立", 96, 246, 220, SAGE));
  e.push(t("p5-established-body", "Odyssey-2 Pro 根据历史状态与用户动作生成后续画面。\n厂商文档给出密钥、JavaScript / Python 接入和连接规则。", 96, 296, 582, 72, BODY, { lineSpacing: 1.18 }));
  e.push(rule("p5-left-rule", 96, 388, 582, 1, RULE));
  e.push(...sectionLabel("p5-meaning", "对 Manifold 的意义", 96, 412, 330, CLAY));
  e.push(t("p5-meaning-body", "若账户、可靠性和单位经济性闭合，\n它可能成为实时世界流基础设施；\n目前只能作条件性判断。", 96, 462, 582, 78, BODY, { lineSpacing: 1.16 }));
  e.push(rule("p5-trigger-top", 96, 558, 56, 4, CLAY));
  e.push(t("p5-trigger-label", "关键触发器", 96, 576, 220, 28, SUB, { bold: true }));
  e.push(t("p5-trigger-body", "独立账户在公开价格和服务等级下\n完成长时稳定调用。", 96, 608, 582, 40, BODY, { bold: true, lineSpacing: 1.08 }));

  e.push(rect("p5-limits-bg", 758, 220, 426, 430, SAGE_SOFT));
  e.push(t("p5-limits-title", "仍未闭合的服务条件", 790, 248, 350, 34, MID, { bold: true }));
  const limitRows = [
    ["账户", "实际账户与持续调用未独立确认"],
    ["150 秒", "当前默认单流上限"],
    ["60 分钟", "当前默认单连接上限"],
    ["15 分钟", "无活动流自动断开"],
  ];
  limitRows.forEach(([big, small], i) => {
    const top = 306 + i * 68;
    if (i > 0) e.push(rule(`p5-limit-rule-${i}`, 790, top - 12, 348, 1, RULE_DARK));
    e.push(t(`p5-limit-big-${i}`, big, 790, top, 116, 34, SUB, { bold: true, color: i === 0 ? MUTED : SAGE }));
    e.push(t(`p5-limit-small-${i}`, small, 916, top, 222, 44, BODY, { lineSpacing: 1.14 }));
  });
  e.push(t("p5-limit-note", "这些运营限制均不构成服务等级保证。", 790, 592, 348, 36, BODY, { bold: true, color: MUTED }));
  e.push(...footer(5, "来源：官方开发者文档、运营限制与条款；公司自报云合作"));
  addSlide(p, "manifold-v13-p5", e);
}

function page6(p) {
  const e = companyIdentity(6, "创业公司 3/4 · RUNWAY", "Runway 同时押注 Worlds 与 Robotics；\n两条路线都还处在早期", "内容平台外延 · 申请制入口", LAV);

  e.push(rect("p6-worlds-bg", 64, 220, 540, 184, LAV_SOFT));
  e.push(t("p6-worlds-kicker", "已成立 · 路线 A", 96, 246, 250, 26, EYEBROW, { color: LAV, bold: true }));
  e.push(t("p6-worlds-name", "Worlds", 96, 280, 250, 32, MID, { bold: true }));
  e.push(t("p6-worlds-access", "公开申请制 early access；\n实际访问未独立确认。", 96, 324, 452, 54, BODY, { lineSpacing: 1.16 }));

  e.push(rect("p6-robotics-bg", 628, 220, 556, 184, SAGE_SOFT));
  e.push(t("p6-robotics-kicker", "已成立 · 路线 B", 660, 246, 250, 26, EYEBROW, { color: SAGE, bold: true }));
  e.push(t("p6-robotics-name", "Robotics", 660, 280, 250, 32, MID, { bold: true }));
  e.push(t("p6-robotics-access", "动作条件展开与 Python SDK；\n云端、定制和本地部署均需洽谈。", 660, 324, 476, 54, BODY, { lineSpacing: 1.16 }));

  e.push(rect("p6-gap-bg", 64, 426, 1120, 96, GREY_SOFT));
  e.push(t("p6-gap-title", "共同缺口", 96, 448, 180, 30, SUB, { bold: true }));
  e.push(t("p6-gap-body", "两条路线都缺公开价格、服务等级和独立复现；\n合作证据仍停在 Runway 单方说明。", 276, 446, 856, 58, BODY, { lineSpacing: 1.16 }));

  e.push(rect("p6-meaning-bg", 64, 546, 716, 104, PAPER));
  e.push(t("p6-meaning-title", "对 Manifold 的意义", 96, 566, 300, 28, SUB, { bold: true }));
  e.push(t("p6-meaning-body", "内容平台可能延伸到可探索世界；\n机器人路线不能借证给 Worlds。", 96, 598, 624, 42, BODY, { lineSpacing: 1.1 }));
  e.push(rect("p6-trigger-bg", 804, 546, 380, 104, CLAY_SOFT));
  e.push(t("p6-trigger-title", "关键触发器", 836, 566, 220, 28, SUB, { bold: true }));
  e.push(t("p6-trigger-body", "任一组件获得独立调用，\n并获得伙伴侧生产确认。", 836, 598, 308, 42, BODY, { bold: true, lineSpacing: 1.1 }));
  e.push(...footer(6, "来源：官方产品、申请入口、SDK/部署资料及公司自报", "Worlds ≠ Robotics"));
  addSlide(p, "manifold-v13-p6", e);
}

function page7(p) {
  const e = companyIdentity(7, "创业公司 4/4 · DECART", "驾驶场景已经按秒计费；\n企业可靠性仍待证", "具体驾驶任务 · 公开计价接口", CLAY);

  e.push(rect("p7-price-bg", 64, 220, 330, 430, CLAY_SOFT));
  e.push(t("p7-price-kicker", "价格锚点", 96, 248, 160, 24, EYEBROW, { color: CLAY, bold: true }));
  e.push(t("p7-price", "0.02", 96, 286, 230, 68, 58.67, { font: FONT_SERIF, bold: true, color: CLAY }));
  e.push(t("p7-price-unit", "美元 / 秒", 96, 358, 210, 32, MID, { bold: true }));
  e.push(rule("p7-price-rule", 96, 416, 246, 1, RULE_DARK));
  e.push(t("p7-flow", "油门 / 转向\n↓\n有状态会话\n↓\n前 / 左 / 右后续视图", 96, 442, 246, 120, BODY, { bold: true, lineSpacing: 1.16 }));
  e.push(t("p7-scope", "具体驾驶任务，\n不外推为通用世界能力。", 96, 590, 246, 48, BODY, { color: MUTED, bold: true, lineSpacing: 1.16 }));

  e.push(rect("p7-established-bg", 418, 220, 766, 112, PAPER));
  e.push(t("p7-established-title", "已成立", 450, 246, 150, 30, SUB, { bold: true }));
  e.push(t("p7-established-body", "公开账户按 0.02 美元 / 秒计费；有状态会话接收油门和转向动作，\n生成前、左、右后续视图。", 608, 242, 528, 64, BODY, { lineSpacing: 1.16 }));

  e.push(rect("p7-not-bg", 418, 354, 766, 154, GREY_SOFT));
  e.push(t("p7-not-title", "未成立", 450, 380, 150, 30, SUB, { bold: true }));
  e.push(t("p7-not-body", "预览服务可撤销，且无连续性保证；输入 / 输出可用于训练改进。\n独立体验仍报告路线记忆、控制、漂移和碰撞问题；未见付费客户或生产部署。", 608, 376, 528, 100, BODY, { lineSpacing: 1.16 }));

  e.push(rect("p7-meaning-bg", 418, 530, 470, 120, SAGE_SOFT));
  e.push(t("p7-meaning-title", "对 Manifold 的意义", 450, 550, 250, 28, SUB, { bold: true }));
  e.push(t("p7-meaning-body", "竞争已进入可计量的驾驶任务；\n不能外推为通用能力或企业级采用。", 450, 586, 390, 52, BODY, { lineSpacing: 1.14 }));
  e.push(rect("p7-trigger-bg", 912, 530, 272, 120, PAPER));
  e.push(t("p7-trigger-title", "关键触发器", 944, 550, 208, 28, SUB, { bold: true }));
  e.push(t("p7-trigger-body", "预览接口正式商用，\n并闭合服务等级、\n数据和责任边界。", 944, 582, 208, 62, BODY, { bold: true, lineSpacing: 1.08 }));
  e.push(...footer(7, "来源：官方产品/API、价格、条款及独立产品体验"));
  addSlide(p, "manifold-v13-p7", e);
}

function page8(p) {
  const e = companyIdentity(8, "大厂项目 1/1 · NVIDIA COSMOS 3", "Cosmos 3 已形成自托管路径；\n动作产品仍未闭合", "动作条件物理智能组件 · 可下载 / 自托管", LAV);

  e.push(rect("p8-stack-bg", 64, 220, 700, 282, LAV_SOFT));
  e.push(t("p8-established-label", "已成立 · 三层证据必须分开看", 96, 248, 460, 28, EYEBROW, { color: LAV, bold: true }));
  const stack = [
    ["01", "动作条件前向动力学", "已有可运行材料"],
    ["02", "自托管路径", "模型材料与代码可在本地运行"],
    ["03", "Cosmos3-Generator\nRelease 1.0.0", "初始 GA；只含文生 / 图生视频；\n未列动作模式"],
  ];
  stack.forEach(([n, head, body], i) => {
    const top = 292 + i * 68;
    e.push(t(`p8-stack-num-${i}`, n, 96, top, 44, 28, EYEBROW, { color: LAV, bold: true }));
    e.push(t(`p8-stack-head-${i}`, head, 150, top, 310, i === 2 ? 48 : 28, SUB, { bold: true, lineSpacing: 1.06 }));
    e.push(t(`p8-stack-body-${i}`, body, 480, top, 236, 52, BODY, { lineSpacing: 1.14 }));
    if (i < 2) e.push(rule(`p8-stack-rule-${i}`, 150, top + 52, 566, 1, RULE));
  });

  e.push(rect("p8-not-bg", 788, 220, 396, 282, GREY_SOFT));
  e.push(...sectionLabel("p8-not", "未成立", 820, 248, 220, MUTED));
  e.push(...bullets("p8-not-list", ["稳定动作运行时或动作 NIM", "第三方依赖的完整许可链", "硬件范围与总体拥有成本", "独立复现与客户第一方采用"], 820, 304, 332, 42));

  e.push(rect("p8-meaning-bg", 64, 526, 716, 124, PAPER));
  e.push(t("p8-meaning-title", "对 Manifold 的意义", 96, 548, 300, 28, SUB, { bold: true }));
  e.push(t("p8-meaning-body", "自托管组件可能绕行专有供应商，也可能成为部署与验证底层；\n实际关系取决于 Manifold 的交付单元。", 96, 586, 624, 52, BODY, { lineSpacing: 1.16 }));
  e.push(rect("p8-trigger-bg", 804, 526, 380, 124, CLAY_SOFT));
  e.push(t("p8-trigger-title", "关键触发器", 836, 548, 220, 28, SUB, { bold: true }));
  e.push(t("p8-trigger-body", "稳定动作运行时或动作 NIM 正式发布，\n并获得独立复现。", 836, 586, 308, 52, BODY, { bold: true, lineSpacing: 1.16 }));
  e.push(...footer(8, "来源：官方研究、模型、自托管文档、Release Notes、许可及伙伴自报", "Generator NIM ≠ action runtime"));
  addSlide(p, "manifold-v13-p8", e);
}

function page9(p) {
  const e = [];
  e.push(...editorialHeader(9, "WATCHLIST · FACT-TRIGGERED", "四个观察对象和一个早期信号，只在证据变化时重审", "触发条件只启动事实重审，不自动改变固定五席或 4+1 结构。", { titleTop: 50, titleHeight: 45, subtitleTop: 107, subtitleHeight: 22 }));

  const x = 64, y = 138;
  const widths = [252, 438, 462];
  const headerH = 48, rowH = 96;
  const headers = ["对象", "当前关注点", "重审所需证据"];
  const rows = [
    ["Genie 3 /\nProject Genie", "封闭模型与消费者原型；\n企业/开发者路径和外部采用未证", "企业/开发者接口、SDK 或权重；\n具名外部集成"],
    ["General Intuition /\nMIRA", "证据集中在 Rocket League 虚拟物理域；\n商业接口归属和采用未证", "第一方证据确认实际交付组件；\n跨域独立验证、具名客户"],
    ["Meta V-JEPA", "仅 2-AC 提供动作条件路径；\n窄域、许可与修正复现未闭合", "跨动作域复现、许可闭合、\n产品或客户入口"],
    ["Overworld\n（地域条件）", "开放权重和本地运行有平台价值；\n法律主体、长时一致性和采用未证", "法律实体闭合、长时交互独立验证、\n具名采用"],
    ["AMI Labs\n（早期信号）", "非中国地域已闭合，但无可验证的自有模型、\n论文、演示、权重、接口或评测", "可审计的自有技术资产\n与外部入口"],
  ];

  e.push(rect("p9-header-bg", x, y, 1152, headerH, GREY_SOFT));
  let cx = x;
  for (let c = 0; c < 3; c += 1) {
    e.push(t(`p9-header-${c}`, headers[c], cx + 16, y + 12, widths[c] - 32, 28, BODY, { bold: true }));
    cx += widths[c];
  }
  for (let r = 0; r < 5; r += 1) {
    const ry = y + headerH + r * rowH;
    const fill = r % 2 === 0 ? PAPER : "#F2EDE6";
    e.push(rect(`p9-row-bg-${r}`, x, ry, 1152, rowH, fill));
    e.push(rect(`p9-name-bg-${r}`, x, ry, widths[0], rowH, r === 4 ? GOLD_SOFT : "#EDE8E1"));
    cx = x;
    for (let c = 0; c < 3; c += 1) {
      if (c === 2) e.push(rule(`p9-trigger-mark-${r}`, cx + 16, ry + 18, 22, 3, r === 4 ? GOLD : CLAY));
      e.push(t(`p9-cell-${r}-${c}`, rows[r][c], cx + (c === 2 ? 48 : 16), ry + 16, widths[c] - (c === 2 ? 64 : 32), rowH - 30, BODY, { bold: c === 0, color: c === 0 ? MUTED : INK, lineSpacing: 1.2 }));
      cx += widths[c];
    }
    e.push(rule(`p9-row-rule-${r}`, x, ry + rowH, 1152, 1, RULE));
  }
  e.push(...footer(9, "来源：官方研究、产品、代码仓库、公司及地域资料"));
  addSlide(p, "manifold-v12-p9", e);
}

function page10(p) {
  const e = [];
  e.push(...editorialHeader(10, "MANIFOLD · NOW / LATER", "Manifold 先完成三项底座建设，再用五类证据触发重审", "上半页是现在要做的事；下半页只保留未来触发重审的证据。", { titleTop: 56, titleHeight: 48, titleSize: 38.67, subtitleTop: 116, subtitleHeight: 26 }));

  e.push(rect("p10-actions-bg", 64, 182, 1152, 240, PAPER));
  const actionXs = [88, 464, 840];
  const actionNums = ["01", "02", "03"];
  const actionTitles = ["定义标准交付单元", "建立共同验证资产", "锁定关键权利边界"];
  const actionBodies = [
    "明确模型、接口、部署服务\n和联合项目分别交付什么；\n哪些层自有，哪些层集成或采购。",
    "把动作忠实度、持久状态、\n几何 / 碰撞、失败率、延迟和 TCO\n固化成验证协议，并保留负面结果。",
    "合同先写清输入 / 输出数据权、\n模型改进权、部署范围\n和再分发规则。",
  ];
  for (let i = 0; i < 3; i += 1) {
    e.push(t(`p10-action-num-${i}`, actionNums[i], actionXs[i], 204, 62, 54, SECTION, { font: FONT_SERIF, bold: true, color: CLAY }));
    e.push(t(`p10-action-title-${i}`, actionTitles[i], actionXs[i], 262, 320, 38, SECTION, { bold: true }));
    e.push(t(`p10-action-body-${i}`, actionBodies[i], actionXs[i], 314, 314, 90, BODY, { lineSpacing: 1.18 }));
    if (i < 2) e.push(rule(`p10-action-v-${i}`, actionXs[i] + 344, 204, 1, 198, RULE));
  }

  e.push(t("p10-trigger-kicker", "未来出现什么证据时重审", 64, 448, 430, 30, MID, { color: MUTED, bold: true }));
  e.push(rule("p10-trigger-heading-rule", 356, 463, 860, 1, RULE_DARK));
  e.push(rect("p10-triggers-bg", 64, 486, 1152, 164, GREY_SOFT));
  const gap = 16, tw = (1152 - gap * 4) / 5;
  const triggerTitles = ["稳定接口", "独立复现", "正式商用闭合", "客户第一方采用", "稳定动作产品"];
  const events = [
    "持续调用；\n价格与服务等级公开",
    "同一或可比协议下\n复现关键结果",
    "许可、服务等级和\n责任边界闭合",
    "具名客户确认\n付费生产部署或续约",
    "动作运行时 / NIM\n正式发布并获验证",
  ];
  const uses = [
    "重审产品 / 平台\n替代关系",
    "重审技术证据\n成熟度",
    "重审采购与\n部署可行性",
    "重审商业采用\n与竞争关系",
    "重审自托管\n绕行风险",
  ];
  for (let i = 0; i < 5; i += 1) {
    const x = 64 + i * (tw + gap);
    e.push(rule(`p10-trigger-mark-${i}`, x + 16, 502, 28, 3, i < 2 ? SAGE : i === 4 ? LAV : CLAY));
    e.push(t(`p10-trigger-title-${i}`, triggerTitles[i], x + 16, 516, tw - 32, 30, SUB, { bold: true }));
    e.push(t(`p10-trigger-event-${i}`, events[i], x + 16, 550, tw - 32, 48, BODY, { lineSpacing: 1.18 }));
    e.push(t(`p10-trigger-use-${i}`, uses[i], x + 16, 606, tw - 32, 44, BODY, { color: MUTED, lineSpacing: 1.18 }));
    if (i < 4) e.push(rule(`p10-trigger-v-${i}`, x + tw + gap / 2, 502, 1, 132, RULE));
  }
  e.push(...footer(10, "跨页综合：官方条款、开发者和技术资料；公司/伙伴自报及独立体验"));
  addSlide(p, "manifold-v12-p10", e);
}

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  await fs.mkdir(PREVIEW, { recursive: true });
  await fs.mkdir(LAYOUT, { recursive: true });
  await fs.mkdir(QA, { recursive: true });

  const presentation = Presentation.create({ slideSize: { width: W, height: H } });
  page1(presentation);
  page2(presentation);
  page3(presentation);
  page4(presentation);
  page5(presentation);
  page6(presentation);
  page7(presentation);
  page8(presentation);
  page9(presentation);
  page10(presentation);

  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(path.join(PREVIEW, `${stem}.png`), await presentation.export({ slide, format: "png", scale: 1 }));
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(path.join(LAYOUT, `${stem}.layout.json`), await layout.text(), "utf8");
  }
  await writeBlob(path.join(QA, "deck-montage.webp"), await presentation.export({ format: "webp", montage: true, scale: 1 }));

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(OUT_PPTX);

  const result = {
    output: OUT_PPTX,
    slideCount: presentation.slides.items.length,
    previewDir: PREVIEW,
    layoutDir: LAYOUT,
    montage: path.join(QA, "deck-montage.webp"),
  };
  await fs.writeFile(path.join(QA, "build-result.json"), `${JSON.stringify(result, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

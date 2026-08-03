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
const OUT_PPTX = path.join(PROJECT_ROOT, "10_deck", "manifold_world_model_landscape_v1_0.pptx");
const TMP = process.env.MANIFOLD_DECK_TMP || path.join(HERE, ".tmp", "v1_0");
const PREVIEW = path.join(TMP, "preview");
const LAYOUT = path.join(TMP, "layout");
const QA = path.join(TMP, "qa");

const W = 1280;
const H = 720;
const FONT = "Noto Sans SC";
const WHITE = "#FFFFFF";
const INK = "#000000";
const MUTED = "#5F6368";
const PANEL = "#EDEDED";
const SOFT = "#F7F7F7";
const RULE = "#B8BCC4";
const BLUE = "#3D8DFF";
const BODY = 21.33;   // 16 pt
const FOOT = 13.33;   // 10 pt
const TITLE = 46.67;  // 35 pt
const COVER = 66.67;  // 50 pt
const MID = 26.67;    // 20 pt
const SUB = 24;       // 18 pt

function t(name, value, left, top, width, height, fontSize = BODY, options = {}) {
  return text([value], {
    name,
    position: { left, top },
    width,
    height,
    style: {
      fontSize: `${fontSize}px`,
      typeface: FONT,
      color: options.color || INK,
      bold: Boolean(options.bold),
      alignment: options.align || "left",
      verticalAlignment: options.valign || "top",
      autoFit: "none",
      wrap: options.wrap || "square",
      insets: { top: 0, right: 0, bottom: 0, left: 0 },
    },
  });
}

function solidRect(name, left, top, width, height, fill) {
  return shape({
    name,
    geometry: "rect",
    fill,
    position: { left, top },
    width,
    height,
  });
}

function line(name, x1, y1, x2, y2, color = RULE, weight = 1) {
  const left = Math.min(x1, x2);
  const top = Math.min(y1, y2);
  const width = Math.abs(x2 - x1);
  const height = Math.abs(y2 - y1);
  return solidRect(name, left, top, Math.max(width, weight), Math.max(height, weight), color);
}

function rect(name, left, top, width, height, fill = "none", stroke = RULE, weight = 1) {
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

function blueMark(name, left, top, width = 44, height = 4) {
  return solidRect(name, left, top, width, height, BLUE);
}

function footer(page, category, top = 681) {
  return [
    t(`p${page}-footer-source`, `${category}｜相对 Manifold 公开锚点的条件性分析`, 64, top, 980, 22, FOOT, { color: MUTED }),
    t(`p${page}-footer-page`, `截至 2026-07-14｜${page}`, 1058, top, 158, 22, FOOT, { color: MUTED, align: "right" }),
  ];
}

function addSlide(presentation, name, elements) {
  const slide = presentation.slides.add();
  slide.background.fill = WHITE;
  slide.compose(
    layers({ name, width: "fill", height: "fill" }, elements),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 1 },
  );
  return slide;
}

function fixedNode(name, label, left, top, width) {
  return [
    blueMark(`${name}-mark`, left, top + 7, 10, 3),
    t(name, label, left + 18, top, width - 18, 28, BODY, { bold: true }),
  ];
}

function observerNode(name, label, left, top, width, height = 27) {
  return [
    rect(`${name}-outline`, left, top, width, height, "none", RULE, 0.75),
    t(name, label, left + 6, top + 1, width - 12, height - 2, BODY, { color: MUTED }),
  ];
}

function page1(p) {
  const e = [];
  e.push(t("p1-identity", "Manifold 非中国世界模型竞争格局\n五类重点路径与未来 12–24 个月竞争信号\n截至 2026-07-14", 64, 18, 1152, 82, BODY));
  e.push(t("p1-title", "海外世界模型出现三种交付路径，\n客户侧生产采用仍待验证", 64, 108, 1152, 164, COVER, { bold: true }));
  e.push(t("p1-answer", "公开计价接口、申请制入口和可下载/自托管组件\n正在把竞争从模型演示推向交付链；\n但截至 2026-07-14，公开证据尚不足以判断\n五席中任何对象已进入客户确认的付费生产阶段。", 64, 282, 1152, 108, BODY));
  const cols = [64, 456, 848];
  const labels = ["公开计价接口", "文档化或申请制入口", "可下载/自托管组件"];
  const bodies = [
    "供给方式已经分化。\nWorld Labs 与 Decart 提供公开计价接口；\nOdyssey 与 Runway 采用文档化或申请制入口；\nCosmos 3 提供可下载和自托管组件。",
    "竞争单元正在扩大。\n比较重点已从生成效果扩展到\n接口、运行时、部署与集成，\n而不是单一模型指标。",
    "商业证据仍是共同短板。\n当前最高证据只到供应商托管原型、\n公司自报合作、公开计价供应路径或伙伴自报集成；\n尚未恢复到客户第一方确认的付费生产采用。",
  ];
  for (let i = 0; i < 3; i += 1) {
    e.push(blueMark(`p1-path-${i + 1}-mark`, cols[i], 402));
    e.push(t(`p1-path-${i + 1}-label`, labels[i], cols[i], 412, 368, 28, BODY, { bold: true }));
    e.push(t(`p1-path-${i + 1}-body`, bodies[i], cols[i], 446, 368, 192, BODY));
  }
  e.push(line("p1-rule-1", 444, 402, 444, 650));
  e.push(line("p1-rule-2", 836, 402, 836, 650));
  e.push(...footer(1, "公开来源：官方产品/API/价格、条款、公司/伙伴自报及独立体验"));
  addSlide(p, "manifold-p1", e);
}

function page2(p) {
  const e = [];
  e.push(t("p2-title", "海外玩家按世界形态与交付位置分化，\n获得方式决定进入路径", 64, 28, 1152, 120, TITLE, { bold: true }));
  e.push(t("p2-conclusion", "内容探索、开发者基础设施与机器人控制\n正在形成不同阵地；节点位置不表示能力高低。", 64, 154, 1152, 56, BODY));
  const mx = 160, my = 216, cw = 352, hh = 56;
  const rows = [136, 103, 77];
  const starts = [272, 408, 511];
  const headers = ["持久空间\n世界", "实时交互\n世界流", "动作条件\n物理智能组件"];
  for (let c = 0; c < 3; c += 1) {
    e.push(t(`p2-col-${c + 1}`, headers[c], mx + c * cw, my + 2, cw, 52, BODY, { bold: true }));
  }
  const rowLabels = ["内容与\n探索", "开发者\n世界 /\n仿真基础\n设施", "机器人\n规划\n控制"];
  for (let r = 0; r < 3; r += 1) {
    e.push(t(`p2-row-${r + 1}`, rowLabels[r], 64, starts[r], 90, rows[r], BODY, { bold: true }));
  }
  for (let c = 0; c <= 3; c += 1) e.push(line(`p2-v-${c}`, mx + c * cw, my, mx + c * cw, 588, RULE, 0.75));
  e.push(line("p2-h-0", mx, my, 1216, my, RULE, 0.75));
  e.push(line("p2-h-1", mx, 272, 1216, 272, RULE, 0.75));
  e.push(line("p2-h-2", mx, 408, 1216, 408, RULE, 0.75));
  e.push(line("p2-h-3", mx, 511, 1216, 511, RULE, 0.75));
  e.push(line("p2-h-4", mx, 588, 1216, 588, RULE, 0.75));
  e.push(...fixedNode("p2-world-labs", "World Labs", 168, 282, 300));
  e.push(...fixedNode("p2-runway", "Runway", 520, 276, 300));
  e.push(t("p2-runway-robotics", "Runway Robotics：\n规划控制（次级）", 520, 304, 300, 52, BODY));
  e.push(...observerNode("p2-genie", "Genie 3 / Project Genie", 520, 356, 262, 26));
  e.push(...observerNode("p2-overworld", "Overworld（地域条件）", 520, 382, 300, 26));
  e.push(...fixedNode("p2-odyssey", "Odyssey", 520, 418, 300));
  e.push(...fixedNode("p2-decart", "Decart", 520, 450, 300));
  e.push(...fixedNode("p2-cosmos", "NVIDIA Cosmos 3", 872, 418, 320));
  e.push(t("p2-cosmos-secondary", "Cosmos 3 规划控制（次级）", 872, 450, 330, 26, BODY));
  e.push(...observerNode("p2-mira", "General Intuition / MIRA", 872, 478, 272));
  e.push(...observerNode("p2-meta", "Meta V-JEPA", 872, 525, 180));
  e.push(t("p2-status", "固定五席 5｜观察对象 4｜早期信号 1 · AMI Labs（图外；自有技术资产与入口待核）", 64, 594, 1152, 26, BODY));
  e.push(t("p2-access", "获得方式：公开接口｜受控入口｜可下载/自托管｜尚未核实", 64, 620, 1152, 26, BODY));
  e.push(t("p2-badges", "限定：Odyssey 实际账户未独立确认｜Overworld 地域条件", 64, 646, 1152, 26, BODY));
  e.push(t("p2-scope", "中国大陆公司不作为节点；Manifold 只作公开比较锚点；\nVLA、机器人基础模型、仿真/合成数据、纯视频、纯 3D 与垂直内部组件不作节点。", 64, 682, 1020, 34, FOOT, { color: MUTED }));
  e.push(t("p2-page", "截至 2026-07-14｜2", 1058, 694, 158, 18, FOOT, { color: MUTED, align: "right" }));
  addSlide(p, "manifold-p2", e);
}

function page3(p) {
  const e = [];
  e.push(t("p3-title", "五席代表五种互补路径，差异在产品形态与证据成熟度", 48, 32, 1184, 64, TITLE, { bold: true, wrap: "none" }));
  const x = 64, y = 112, widths = [130, 204.4, 204.4, 204.4, 204.4, 204.4];
  const heights = [54, 100, 150, 126, 100];
  const headers = ["比较维度", "World Labs", "Odyssey", "Runway", "Decart", "NVIDIA Cosmos 3"];
  const rowNames = ["技术证据", "外部可获得性", "商业采用上限", "对 Manifold\n的意义"];
  const cells = [
    ["位姿条件导航与空间记忆；\n动态物体仍待证", "历史帧和动作条件未来；长时稳定性未独立验证", "Worlds 支持导航条件未来；\nRobotics 证据单列", "油门/转向驱动三向后续视图；\n动作域较窄", "动作条件前向预测；漂移、几何和碰撞仍有限"],
    ["公开计价的\n专有世界接口", "厂商文档化原型接口；\n实际账户未确认", "Worlds 申请制；\nRobotics 需洽谈", "公开账户、按秒计费的\n预览接口", "模型材料可下载并可自托管；\nGenerator NIM 1.0.0\n只含文生/图生视频"],
    ["供应商托管原型；\n无客户第一方生产证据", "合同框架与自报云合作；\n无具名采用证据", "公司自报合作；\n无伙伴侧部署证据", "有价格与独立体验；\n无付费客户或生产证据", "伙伴自报早期测试/内部部署；\n无客户第一方付费生产证据"],
    ["空间世界接口可能绕行\n生成与交付环节", "若接口稳定，可成为实时世界流基础设施", "内容平台向可探索世界\n和机器人应用延伸", "可计费驾驶接口把竞争\n推向具体任务", "自托管组件可绕行供应商，\n也可成为共同底层"],
  ];
  let cy = y;
  e.push(solidRect("p3-header-fill", x, cy, 1152, heights[0], PANEL));
  let cx = x;
  for (let c = 0; c < 6; c += 1) {
    if (c > 0) e.push(blueMark(`p3-header-mark-${c}`, cx + 8, cy + 8, 30, 3));
    e.push(t(`p3-header-${c}`, headers[c], cx + 8, cy + 12, widths[c] - 16, heights[0] - 16, c === 0 || c === 5 ? BODY : 22.67, { bold: true }));
    cx += widths[c];
  }
  cy += heights[0];
  for (let r = 0; r < 4; r += 1) {
    e.push(solidRect(`p3-rowhead-fill-${r}`, x, cy, widths[0], heights[r + 1], SOFT));
    e.push(t(`p3-rowhead-${r}`, rowNames[r], x + 8, cy + 8, widths[0] - 16, heights[r + 1] - 16, BODY, { bold: true }));
    cx = x + widths[0];
    for (let c = 0; c < 5; c += 1) {
      e.push(t(`p3-cell-${r}-${c}`, cells[r][c], cx + 8, cy + 8, widths[c + 1] - 16, heights[r + 1] - 16, BODY));
      cx += widths[c + 1];
    }
    cy += heights[r + 1];
  }
  cx = x;
  for (let c = 0; c <= 6; c += 1) {
    e.push(line(`p3-v-${c}`, cx, y, cx, cy, RULE, 0.75));
    if (c < 6) cx += widths[c];
  }
  let hy = y;
  for (let r = 0; r <= 5; r += 1) {
    e.push(line(`p3-h-${r}`, x, hy, 1216, hy, RULE, 0.75));
    if (r < 5) hy += heights[r];
  }
  e.push(t("p3-note", "固定五席体现路线互补，不构成能力、公司或商业成熟度排名。", 64, 647, 1152, 28, BODY));
  e.push(...footer(3, "公开来源：官方技术/产品/接入/价格资料、公司/伙伴自报及独立体验"));
  addSlide(p, "manifold-p3", e);
}

function quadrantPage(p, cfg) {
  const e = [];
  e.push(t(`${cfg.id}-title`, cfg.title, 48, 32, 1216, 72, TITLE, { bold: true, wrap: "none" }));
  e.push(blueMark(`${cfg.id}-route-mark`, 64, 120));
  e.push(t(`${cfg.id}-route`, cfg.route, 64, 130, 400, 28, BODY, { bold: true }));
  e.push(line(`${cfg.id}-v`, 640, 176, 640, 642, RULE, 0.75));
  e.push(line(`${cfg.id}-h`, 64, cfg.splitY, 1216, cfg.splitY, RULE, 0.75));
  e.push(t(`${cfg.id}-est-label`, "已成立", 64, 182, 552, 32, MID, { bold: true }));
  if (cfg.establishedParts) {
    e.push(line(`${cfg.id}-est-inner`, 344, 218, 344, cfg.splitY - 18, RULE, 0.75));
    e.push(t(`${cfg.id}-est-a-label`, cfg.establishedParts[0].label, 64, 222, 260, 28, SUB, { bold: true }));
    e.push(t(`${cfg.id}-est-a-body`, cfg.establishedParts[0].body, 64, 254, 260, cfg.splitY - 272, BODY));
    e.push(t(`${cfg.id}-est-b-label`, cfg.establishedParts[1].label, 364, 222, 252, 28, SUB, { bold: true }));
    e.push(t(`${cfg.id}-est-b-body`, cfg.establishedParts[1].body, 364, 254, 252, cfg.splitY - 272, BODY));
  } else {
    e.push(t(`${cfg.id}-est-body`, cfg.established, 64, 224, 552, cfg.splitY - 246, BODY));
  }
  e.push(t(`${cfg.id}-not-label`, "未成立", 664, 182, 552, 32, MID, { bold: true }));
  e.push(t(`${cfg.id}-not-body`, cfg.notEstablished, 664, 224, 552, cfg.splitY - 246, BODY));
  e.push(t(`${cfg.id}-meaning-label`, "对 Manifold 意味着什么", 64, cfg.splitY + 18, 552, 32, MID, { bold: true }));
  e.push(t(`${cfg.id}-meaning-body`, cfg.meaning, 64, cfg.splitY + 60, 552, 642 - cfg.splitY - 72, BODY));
  e.push(blueMark(`${cfg.id}-trigger-mark`, 664, cfg.splitY + 18));
  e.push(t(`${cfg.id}-trigger-label`, "一个关键触发器", 664, cfg.splitY + 30, 552, 32, MID, { bold: true }));
  e.push(t(`${cfg.id}-trigger-body`, cfg.trigger, 664, cfg.splitY + 74, 552, 642 - cfg.splitY - 86, BODY));
  e.push(...footer(cfg.page, cfg.footer));
  addSlide(p, cfg.id, e);
}

function page4(p) {
  quadrantPage(p, {
    id: "p4", page: 4,
    title: "World Labs 已开放空间世界接口，动态交互与采用仍待证",
    route: "空间世界接口",
    splitY: 416,
    establishedParts: [
      { label: "RTFM", body: "公开位姿条件未来视图\n与空间记忆；\n动态物体仍待证。" },
      { label: "Marble / World API", body: "已提供公开计价；\n与 RTFM 分立，\n两条路线分别判断。" },
    ],
    notEstablished: "持久动态物体、独立系统复现、\n客户第一方付费生产采用未证；\n服务与用户内容权仍有采购摩擦。",
    meaning: "空间世界接口可能绕行专有生成与交付环节，\n但不能确认双方已争夺相同客户或预算。",
    trigger: "RTFM 获得独立复现，\n或 World API 形成版本化服务。",
    footer: "RTFM 与 World API 分立｜来源：官方研究/项目页、API、价格、条款及厂商案例",
  });
}

function page5(p) {
  const e = [];
  e.push(t("p5-title", "Odyssey 已将实时世界流写入开发者接口，\n实际开放与稳定服务仍待证", 64, 28, 1152, 120, TITLE, { bold: true }));
  e.push(blueMark("p5-route-mark", 64, 156));
  e.push(t("p5-route", "实时世界流接口路径", 64, 166, 400, 28, BODY, { bold: true }));
  e.push(line("p5-main-v", 742, 198, 742, 640, RULE, 0.75));
  e.push(t("p5-est-label", "已成立", 64, 198, 650, 32, MID, { bold: true }));
  e.push(t("p5-est-body", "Odyssey-2 Pro 以历史状态和用户动作生成后续画面；\n厂商文档给出密钥、JavaScript / Python 接入和连接规则。", 64, 238, 650, 88, BODY));
  e.push(line("p5-left-rule", 64, 326, 714, 326, RULE, 0.75));
  e.push(t("p5-meaning-label", "对 Manifold 意味着什么", 64, 340, 650, 32, MID, { bold: true }));
  e.push(t("p5-meaning-body", "若账户、可靠性和单位经济性闭合，\n它可能形成实时世界流基础设施；\n当前只能作条件性判断。", 64, 380, 650, 98, BODY));
  e.push(blueMark("p5-trigger-mark", 64, 500));
  e.push(t("p5-trigger-label", "一个关键触发器", 64, 512, 650, 32, MID, { bold: true }));
  e.push(t("p5-trigger-body", "独立账户在公开价格和服务等级下\n完成长时稳定调用。", 64, 554, 650, 72, BODY));
  e.push(t("p5-not-label", "未成立", 772, 198, 444, 32, MID, { bold: true }));
  const items = [
    "实际账户与持续调用未独立确认",
    "当前默认单流上限 150 秒",
    "当前默认单连接上限 60 分钟",
    "无活动流 15 分钟自动断开",
    "这些运营限制均不构成服务等级保证",
  ];
  const ys = [240, 304, 368, 432, 496];
  const hs = [56, 56, 56, 56, 104];
  for (let i = 0; i < items.length; i += 1) {
    if (i > 0) e.push(line(`p5-item-rule-${i}`, 772, ys[i] - 8, 1216, ys[i] - 8, RULE, 0.75));
    e.push(blueMark(`p5-item-mark-${i}`, 772, ys[i] + 8, 18, 3));
    e.push(t(`p5-item-${i}`, items[i], 800, ys[i], 416, hs[i], BODY, { bold: i === 4 }));
  }
  e.push(...footer(5, "来源：官方开发者文档、运营限制与条款；公司自报云合作"));
  addSlide(p, "manifold-p5", e);
}

function page6(p) {
  quadrantPage(p, {
    id: "p6", page: 6,
    title: "Runway 同押可探索世界与机器人，两条路线均处早期",
    route: "内容平台外延",
    splitY: 416,
    establishedParts: [
      { label: "Worlds", body: "公开申请制 early-access 入口；\n实际访问未独立确认。" },
      { label: "Robotics", body: "动作条件展开、Python SDK、\n云端、定制和本地部署洽谈路径。" },
    ],
    notEstablished: "两条路线均缺公开价格、服务等级和独立复现；\n合作只见 Runway 单方说明，\n未恢复伙伴侧试点、生产部署或收入证据。",
    meaning: "内容平台可能把创作客户、模型和分发能力\n延伸到可探索世界；机器人路线只构成相邻压力，\n不能借证给 Worlds。",
    trigger: "Worlds 或 Robotics 任一组件\n获得独立调用和伙伴侧生产确认。",
    footer: "Worlds ≠ Robotics｜来源：官方产品、申请入口、SDK/部署资料及公司自报",
  });
}

function page7(p) {
  const e = [];
  e.push(t("p7-title", "Decart 已把驾驶世界按秒计费，\n企业可靠性仍待证", 64, 28, 1152, 120, TITLE, { bold: true }));
  e.push(blueMark("p7-route-mark", 64, 156));
  e.push(t("p7-route", "按秒计费驾驶世界", 64, 166, 360, 28, BODY, { bold: true }));
  e.push(line("p7-main-v", 442, 198, 442, 640, RULE, 0.75));
  e.push(t("p7-price", "0.02", 64, 218, 260, 82, 69.33, { bold: true, color: BLUE }));
  e.push(t("p7-unit", "美元 / 秒", 64, 302, 260, 42, 32, { bold: true }));
  e.push(line("p7-price-rule", 64, 362, 410, 362, RULE, 0.75));
  e.push(t("p7-flow", "油门 / 转向\n→ 有状态会话\n→ 前 / 左 / 右后续视图", 64, 382, 330, 110, BODY));
  e.push(t("p7-boundary", "具体驾驶任务，\n不外推为通用世界能力。", 64, 526, 330, 72, BODY, { bold: true }));
  const labels = ["已成立", "未成立", "对 Manifold 意味着什么", "一个关键触发器"];
  const bodies = [
    "公开账户按 0.02 美元/秒计费；有状态会话持续接收油门和转向动作，并生成前、左、右后续视图。",
    "预览服务可撤销且无连续性保证；输入/输出可用于训练改进；独立体验报告路线记忆、控制、漂移和碰撞问题；尚未恢复到付费客户或生产部署证据。",
    "竞争已从研究演示进入计量计费的具体驾驶任务，但不能外推为通用世界能力或企业级采用。",
    "预览接口进入正式商用，并闭合服务等级、数据和责任边界。",
  ];
  const ys = [198, 273, 408, 503], hs = [75, 135, 95, 103];
  for (let i = 0; i < 4; i += 1) {
    if (i > 0) e.push(line(`p7-row-rule-${i}`, 474, ys[i], 1216, ys[i], RULE, 0.75));
    if (i === 3) e.push(blueMark("p7-trigger-mark", 474, ys[i] + 12));
    e.push(t(`p7-row-label-${i}`, labels[i], 474, ys[i] + 16, 172, hs[i] - 24, SUB, { bold: true }));
    e.push(t(`p7-row-body-${i}`, bodies[i], 670, ys[i] + 12, 546, hs[i] - 18, BODY));
  }
  e.push(...footer(7, "具体驾驶任务，不外推为通用世界能力｜来源：官方产品/API、价格、条款及独立体验"));
  addSlide(p, "manifold-p7", e);
}

function page8(p) {
  quadrantPage(p, {
    id: "p8", page: 8,
    title: "Cosmos 3 形成自托管组件路径，动作产品尚未闭合",
    route: "自托管物理智能组件",
    splitY: 448,
    established: "动作条件前向动力学已有可运行材料和自托管路径；\nCosmos3-Generator NIM 1.0.0 为初始正式发布，\n仅含文生视频和图生视频，未列动作模式。",
    notEstablished: "尚未恢复精确版本化的稳定动作运行时或动作 NIM；\n模型材料许可不能覆盖第三方依赖；\n硬件范围、总体拥有成本、独立复现\n和客户第一方采用仍待闭合。",
    meaning: "自托管组件可能绕行专有供应商，\n也可能成为 Manifold 的部署和验证底层；\n实际关系取决于 Manifold 的交付单元。",
    trigger: "稳定动作运行时或动作 NIM\n正式发布并获得独立复现。",
    footer: "Generator NIM ≠ action runtime｜来源：官方研究/模型/自托管文档、Release Notes、许可及伙伴自报",
  });
}

function page9(p) {
  const e = [];
  e.push(t("p9-title", "四个观察对象与一个早期信号，只在关键证据出现时重审", 48, 32, 1184, 72, TITLE, { bold: true, wrap: "none" }));
  const x = 64, y = 142, widths = [252, 444, 456], headerH = 44, rowH = 85;
  const headers = ["对象", "当前关注点", "重审所需证据"];
  const rows = [
    ["Genie 3 /\nProject Genie", "封闭模型与消费者原型；\n企业/开发者路径和外部采用未证", "企业/开发者接口、SDK 或权重；\n具名外部集成"],
    ["General Intuition /\nMIRA", "证据集中在 Rocket League 虚拟物理域；\n商业接口归属和采用未证", "第一方证据确认实际交付组件；\n跨域独立验证、具名客户"],
    ["Meta V-JEPA", "仅 2-AC 提供动作条件路径；\n窄域、许可与修正复现未闭合", "跨动作域复现、许可闭合、\n产品或客户入口"],
    ["Overworld\n（地域条件）", "开放权重和本地运行有平台价值；\n法律主体、长时一致性和采用未证", "法律实体闭合、长时交互独立验证、\n具名采用"],
    ["AMI Labs\n（早期信号）", "非中国地域已闭合，但无可验证的自有模型、\n论文、演示、权重、接口或评测", "可审计的自有技术资产\n与外部入口"],
  ];
  e.push(solidRect("p9-header-fill", x, y, 1152, headerH, PANEL));
  let cx = x;
  for (let c = 0; c < 3; c += 1) {
    if (c === 2) e.push(blueMark("p9-header-blue", cx + 8, y + 7, 30, 3));
    e.push(t(`p9-header-${c}`, headers[c], cx + 8, y + 10, widths[c] - 16, 28, 22.67, { bold: true }));
    cx += widths[c];
  }
  for (let r = 0; r < 5; r += 1) {
    const ry = y + headerH + r * rowH;
    e.push(solidRect(`p9-name-fill-${r}`, x, ry, widths[0], rowH, SOFT));
    cx = x;
    for (let c = 0; c < 3; c += 1) {
      if (c === 2) e.push(blueMark(`p9-recheck-mark-${r}`, cx + 8, ry + 12, 18, 3));
      e.push(t(`p9-cell-${r}-${c}`, rows[r][c], cx + (c === 2 ? 34 : 8), ry + 10, widths[c] - (c === 2 ? 42 : 16), rowH - 18, BODY, { bold: c === 0, color: c === 0 ? MUTED : INK }));
      cx += widths[c];
    }
  }
  cx = x;
  for (let c = 0; c <= 3; c += 1) {
    e.push(line(`p9-v-${c}`, cx, y, cx, y + headerH + 5 * rowH, RULE, 0.75));
    if (c < 3) cx += widths[c];
  }
  for (let r = 0; r <= 6; r += 1) {
    const hy = r === 0 ? y : y + headerH + (r - 1) * rowH;
    e.push(line(`p9-h-${r}`, x, hy, 1216, hy, RULE, 0.75));
  }
  e.push(t("p9-note", "任何触发只启动事实重审，不自动改变固定五席或 4+1 结构。", 64, 624, 1152, 30, BODY));
  e.push(...footer(9, "来源：官方研究、产品、代码仓库、公司及地域资料"));
  addSlide(p, "manifold-p9", e);
}

function page10(p) {
  const e = [];
  e.push(t("p10-title", "Manifold 应锁定交付标准、验证资产\n与权利边界", 64, 28, 1152, 120, TITLE, { bold: true }));
  const ax = [64, 456, 848];
  const actionTitles = ["定义标准\n交付单元", "建立共同\n验证资产", "锁定关键\n权利边界"];
  const actionBodies = [
    "明确模型、接口、部署服务和联合项目\n分别交付什么；哪些层由 Manifold\n拥有、集成或采购。",
    "固化动作忠实度、持久状态、几何/碰撞、\n失败率、延迟和总体拥有成本的验证协议；\n并保留负面结果。",
    "在合同中明确输入/输出数据权、\n模型改进权、部署范围\n和再分发规则。",
  ];
  for (let i = 0; i < 3; i += 1) {
    e.push(blueMark(`p10-action-mark-${i}`, ax[i], 166));
    e.push(t(`p10-action-title-${i}`, actionTitles[i], ax[i], 178, 368, 64, MID, { bold: true }));
    e.push(t(`p10-action-body-${i}`, actionBodies[i], ax[i], 244, 368, 128, BODY));
  }
  e.push(line("p10-action-v1", 444, 166, 444, 356, RULE, 0.75));
  e.push(line("p10-action-v2", 836, 166, 836, 356, RULE, 0.75));
  e.push(line("p10-section-rule", 64, 374, 1216, 374, RULE, 0.75));
  const gap = 16, tw = (1152 - gap * 4) / 5;
  const triggerTitles = ["稳定接口", "独立复现", "正式商用闭合", "客户第一方采用", "稳定动作产品"];
  const events = [
    "可持续调用，并公开价格与服务等级",
    "在同一或可比协议下复现关键结果",
    "许可链、服务等级和责任边界完整",
    "具名客户确认付费生产部署或续约",
    "动作运行时或动作 NIM 正式发布并获验证",
  ];
  const uses = [
    "重审产品与平台替代路径",
    "重审技术证据成熟度",
    "重审采购与部署可行性",
    "触发商业采用及竞争关系重审",
    "重审自托管平台绕行风险",
  ];
  for (let i = 0; i < 5; i += 1) {
    const x = 64 + i * (tw + gap);
    e.push(blueMark(`p10-trigger-mark-${i}`, x, 390));
    e.push(t(`p10-trigger-title-${i}`, triggerTitles[i], x, 404, tw, 34, SUB, { bold: true }));
    e.push(t(`p10-trigger-event-${i}`, events[i], x, 450, tw, 82, BODY));
    e.push(t(`p10-trigger-use-${i}`, uses[i], x, 552, tw, 82, BODY, { color: MUTED, bold: true }));
    if (i < 4) e.push(line(`p10-trigger-v-${i}`, x + tw + gap / 2, 390, x + tw + gap / 2, 640, RULE, 0.75));
  }
  e.push(t("p10-note", "完整 17 条固定五席信号与 5 条观察信号保留在监测附件；主页面不展开。", 64, 674, 980, 28, FOOT, { color: MUTED }));
  e.push(t("p10-page", "截至 2026-07-14｜10", 1058, 674, 158, 28, FOOT, { color: MUTED, align: "right" }));
  addSlide(p, "manifold-p10", e);
}

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  await fs.mkdir(PREVIEW, { recursive: true });
  await fs.mkdir(LAYOUT, { recursive: true });
  await fs.mkdir(QA, { recursive: true });
  await fs.mkdir(path.dirname(OUT_PPTX), { recursive: true });

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

# Manifold 世界模型研究执行计划与检查点状态

## 决策问题

在已批准固定五席的前提下，继续验证其技术、产品与商业证据，形成可横向比较、可独立红队且最终可进入 Content Lock 的决策材料；不得把批准席位误写成商业事实或性能背书。

## 当前研究范围

- Phase 2 与检查点 2 审批均已完成；唯一有效基线为 `CP2 推荐包 v1.0 as amended by v1.0a`，不重跑 Phase 2。
- DR 只作发现线索；关键主张必须重开原始来源。
- World Labs、Odyssey、Runway、Decart 与 NVIDIA Cosmos 3 已是固定五席，状态为 `approved_final_five`。五份 dossier、证据刷新、非评分式横向比较与独立 Red Team 均已完成；Content Lock 审批包已提交并等待用户明确批准。评分排名、对象专页、Storyboard、页面视觉落版、事实锁定、PPT 与 PDF 继续冻结。

## 可证伪假设

1. Manifold 的公开资料足以建立 WorldScape lens 与 WorldScape Policy lens，但不足以确认目标客户、交付形态、商业阶段和未来路线，因此竞争关系必须保持条件性。
2. DR-02 的宽口径对象池在统一分析单位并执行类别排除后会显著收缩；被排除对象不会以“相邻技术”名义回流资格验证/隔离队列。
3. DR-03 中只有达到发现阈值的具体大厂世界模型项目可进入资格验证；同时通过门 2 三项技术判据后进入 `technical_qualified`，再通过门 3 战略关系门方可进入 `core_collection`。门 3 只相对于 Manifold 公开锚点作条件性判断，不证明客户、预算或交付已重合。VLA、仿真工具链和垂直内部组件只能进入边界日志。
4. 若原始来源无法唯一恢复或仅支持宣传性自述，对应资格或成熟度判断将被降级，而不是由 DR 原结论补足。

## 来源策略

优先级：官方项目页、论文/模型卡、官方代码与许可证、正式产品/API 文档、客户或合作方原始页面、公共登记资料、独立复现或可信独立报道。搜索摘要与 AI 综述只用于定位原页，不入账。

每个重开来源单独保存来源卡片，并记录标题、发布者、canonical URL、日期、访问日期、版本、支持片段、限制和来源类型。

## 风险登记

- 同一新闻稿被多家媒体转载，造成伪交叉验证。
- 公司级与项目级对象混合，或把关联生态成熟度归给世界模型核心。
- 把研究原型、公开 Demo、预览、可下载 artifact、GA 产品和生产采用混为一谈。
- 把合作、PoC、pilot、付费、生产部署和收入混为一谈。
- Manifold 内部资料缺失导致替代关系被过度确定化。

## 检查点 1 停止条件

- 治理文件、用户修订意见与三份 DR 均完成可读性/版本记录；本地源文件完成大小、时间和哈希记录。
- 三份 DR 的可用价值、不可继承内容、冲突与来源恢复队列完成。
- Manifold 双镜头临时锚点、公开未知、资格验证/隔离队列、资格登记和边界日志完成。
- DR-03 三分流及三个大厂候选的统一验证问题完成。
- 审批包提交后将状态设为 `awaiting_user`，用户明确批准前不进入 Phase 2。

## 执行结果（2026-07-14）

- 输入审计：完成。
- 子 Agent 来源恢复：完成；主 Agent 已统一写入权威文件。
- Manifold 双镜头锚点：完成。
- DR-02 23 项输入审计：完成，结果为 9 验证输入 / 13 边界输入 / 1 丢弃输入。
- 跨来源资格验证/隔离队列：完成，加入 Overworld 后当前为 10 个对象；原 9 个对象不是完整发现宇宙。
- DR-03 三分流与统一问题：完成。
- 检查点 1 审批包：v1.1 已提交；用户随后要求 v1.1a 规则补丁，现已修正导航型状态定义与“队列 → technical_qualified → core_collection → 最终选择”迁移，并同步勘误。
- 检查点 1 提交时状态：`awaiting_user`；当时未执行 Phase 2、五席选择、dossier 或 PPT。

## Phase 2 启动（2026-07-15 批准后）

- 检查点 1 已正式批准；唯一有效基线为 v1.1 审批包＋v1.1a 规则补丁。
- 当前目标是对 10 个对象做资格与真实性验证，并提交固定 5 个对象的检查点 2 推荐包。
- 采用三个并行 Candidate Wave：Startup A、Startup B、Big-tech；子 Agent 只读，主 Agent 统一维护权威文件。
- 不使用不透明总分；按对象资格、门 2、门 3、三维成熟度、页面价值和组合互补性顺序裁决。
- 检查点 2 批准前，推荐对象不是最终五席；dossier、评分排名、专页和 PPT 继续冻结。
- 详细字段、假设和停止条件见 [Phase 2 资格与真实性验证计划](05_candidates/phase_2_validation_plan.md)。

## Phase 2 执行结果与检查点 2 提交

- 10 对象资格与真实性验证已完成；v1.0a 将 Meta 调整为受限平台替代/core watch，当前状态为 `9 core_collection/core_watch / 0 adjacent / 1 isolation`。
- 检查点 2 当时推荐、现已正式批准的固定 5 席为 World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3，结构为 `4 家创业公司 + 1 个大厂具体项目`；不构成排名。
- 推荐依据已写入 [10 对象验证表](05_candidates/phase_2_candidate_validation.csv)、[Evidence Ledger](04_evidence/evidence_ledger.csv) 与 [检查点 2 推荐包](05_candidates/checkpoint_2_recommendation_pack.md)。
- 检查点 2 v1.0a 将全部 Gate 3 结论改为相对于公开锚点的条件性分析，并新增 [九对象非评分决策表](05_candidates/checkpoint_2_nine_object_decision_table.csv)；不改变 4+1 推荐组合。
- 当前审批入口为 [检查点 2 v1.0a 控制补丁](05_candidates/checkpoint_2_v1_0a_control_patch.md) 与 [窄范围差异 QA](05_candidates/checkpoint_2_v1_0a_qa_diff.md)；v1.0 QA 仅作历史快照。
- 检查点 2 批准后的初始状态为 `checkpoint_2 approved / phase_3_ready / running`；该状态现已被 Phase 3 完成记录取代。
- Storyboard、页面内容/视觉落版、事实锁定、评分排名、对象专页、PPT 与 PDF 继续冻结；后续严格遵循 `Dossier → Cross-comparison → Red Team → Content Lock → Deck production`。

## Phase 3 dossier 与证据刷新结果

- 已完成 World Labs、Odyssey、Runway、Decart 与 NVIDIA Cosmos 3 五份统一 schema dossier；每份均含 12 个编号章节，Cosmos 另有不占主体编号的大厂追加字段。
- 查询审计共 58 条；五对象反证查询比例分别为 44.44%、55.56%、50%、50% 与 56.25%，均高于 30% 下限。
- 当前证据底座为 140 张来源卡与 110 条 Evidence Ledger 主张；独立红队已把 NIM、伙伴采用和商业采用复合主张拆为原子 claim，Content Lock 前红队另补 Decart 采用上限 C-P3-035；全部 primary source 元数据与 registry 零差异，引用 ID 零缺失。
- 三路最终只读复核均为 `P0=0 / P1=0 / P2=0`；详细初检、修订与关闭记录见 [Phase 3 完成 QA](06_dossier_support/Dossier_Completion_QA.md)。
- 未生成评分、排名、对象专页、Storyboard、页面落版、PPT 或 PDF。

## Phase 4 非评分式横向比较（已完成）

- 生成五对象 competitive matrix，统一比较技术/产品能力、开放与平台替代路径、技术证据、外部访问和商业采用三维成熟度、条件性战略机制与决定性限制。
- 生成 12–24 个月 monitoring matrix，按可审计阈值记录访问、验证、采用和许可事件。
- 不计算总分、不形成序位、不把不可比 benchmark 或不同组件结果拼成性能排名。
- 横向比较完成后才启动独立 Red Team；Content Lock 获批前，Deck、Storyboard、页面落版、PPT 和 PDF 继续冻结。

## Phase 5 独立 Red Team（已完成）

- 技术/来源/指标/许可线：100% 复核 Evidence Ledger 主来源映射，并重开高风险原始页。
- 商业采用/访问线：核查 preview、申请、价格、合同、伙伴自报、客户侧采用与收入的证据等级。
- 范围/叙事/遗漏线：核查条件性 Gate 3、Manifold 未知、组件与硬排除、隐性排名、反证遗漏和冻结边界。
- 三路均只读；主 Agent 已统一关闭发现并维护 canonical files。
- Phase 5 初始 109 条原子主张全部复验；Content Lock 专项红队另补 Decart 采用上限 `C-P3-035`，最终为 140 个来源、110 条原子主张、17 条固定席信号与 5 条 watch-only 触发器。
- 最终三路复验均为 `P0=0 / P1=0 / P2=0`；固定五席、`4+1`、无排名和 Manifold 仅作锚点均未改变。

## Content Lock 审批包（已提交，等待用户）

- 已完成 10 页结论型文字审阅稿；第 1 页同时承担封面与 Executive Answer 功能。
- 已完成 53 条页面证据映射，完整连接 Claim、Source、Monitor/Watch 与 canonical artifact；缺失引用为 0。
- `slide_evidence_map.xlsx` 与 canonical CSV 逐单元格一致；QA 缓存为 `53 / 10 / 0 / 0 / 0`，并完成视觉复核。
- Content Lock 专项三路红队最终均为 `P0=0 / P1=0 / P2=0`。
- 当前状态为 `awaiting_user`；只有用户明确批准 Content Lock 后，才可按顺序启动事实锁定、Storyboard、页面视觉落版与 Deck production。

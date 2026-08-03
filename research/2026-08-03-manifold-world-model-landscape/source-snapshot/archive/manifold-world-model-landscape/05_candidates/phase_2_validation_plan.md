# Phase 2 资格与真实性验证计划 v1.0

状态：`completed_historical_plan; checkpoint_2_approved`  
检查点 1 批准日期：`2026-07-15`  
研究 as-of：`2026-07-14`  
唯一基线：`检查点 1 审批包 v1.1 + 检查点 1 v1.1a 规则补丁`

> v1.0a 控制注记：本计划的研究执行已经完成；检查点 2 红队未要求重跑。后续对 `gate_3` 的读取必须使用相对于 Manifold 公开锚点的条件性解释；产品/平台替代不证明客户、预算或交付已经重合。

> 批准后注记：用户已于 2026-07-15 批准 `CP2 推荐包 v1.0 as amended by v1.0a`。本文件保留 Phase 2 当时的目标、停止条件和“推荐”措辞作为历史计划；当前固定五席以 `../07_synthesis/shortlist_memo.md` 为唯一权威文件。

## 决策目标

对当前 10 个对象做定向核验，提出固定 5 个检查点 2 推荐对象。推荐结构必须为 `3–4 家非中国世界模型创业公司 + 1–2 个非中国大厂具体世界模型项目`。推荐对象在用户明确批准检查点 2 前不是最终五席。

## 可证伪假设

1. 当前 10 个对象中至少有 5 个能够同时通过门 2 技术资格、门 3 核心集合战略关系和相应地域约束；若不足，必须报告缺口而非用类别外对象凑数。
2. 至少 3 家创业公司能以同一对象内的状态演化、动作条件和物理/具身/实时仿真/空间行动证据进入 `technical_qualified`，并以产品替代、平台替代、未来市场竞争或强直接能力对标进入 `core_collection`。
3. 三个大厂项目中至多 2 个能够同时满足项目自身可获得性、战略关系与页面价值；母公司生态、VLA、仿真器或相邻工具链的成熟度不会被借给世界模型 core。
4. Self-positioned-only、地域未决或仅有导航/渲染线索的对象不会因公司叙事自动晋级；只有新恢复的一手证据能改变层级。

## 统一核验字段

每个对象必须回答：

1. `scope_and_geography`：对象类型、总部、主要经营/法律主体及地域条件是否闭合；
2. `gate_2`：状态演化、动作/控制/持续交互、物理/具身/实时仿真/空间行动是否同时成立；
3. `gate_3`：相对于 Manifold 公开锚点，潜在产品替代、潜在平台替代、未来市场竞争、强直接能力对标分别有什么证据；所有产品/平台机制均记为 `Analyst inference / conditional`；
4. `technical_evidence_stage`：Research / Demo / Validated system，并区分公司自报与独立验证；
5. `external_access_stage`：按组件分别登记权重、代码、API、SDK、产品、许可与访问限制；
6. `commercial_adoption_stage`：No public evidence / Collaboration / PoC / Pilot / Paid pilot / Production deployment / Revenue evidence；
7. `component_boundary`：core、adapter、API、产品原型、仿真器、VLA/policy、相邻工具链不得互借；
8. `decision_carrier_claims`：影响资格、机制、三维成熟度或推荐的主张及原始来源；
9. `counterevidence`：最强反证、降级条件和 12–24 个月升级触发器；
10. `page_value_and_nearest_alternative`：是否足以支撑 CEO 单页，以及为何优于最近未推荐对象。

## 证据与比较规则

- 三份 DR 只作线索；资格、机制、成熟度与推荐主张必须重新打开原始来源。
- 关键主张优先使用官方技术页、论文/模型卡、代码与许可证、API/产品文档、客户/伙伴原始页面和公共登记；独立复现或可信独立报道用于反证和校准。
- 每个来源一张来源卡，保留短摘、支持范围、限制、访问日期与版本；无法恢复则标 `unresolved_source` 并降级。
- 不计算不透明总分，不按融资或母公司名气排序。裁决顺序为：`对象资格 → 门 2 → 门 3 → 三维成熟度与时效 → 页面价值 → 五席组合互补性`。
- 只有 `core_collection` 对象可以竞争检查点 2 的 5 个推荐位；`geography_pending` 不得进入核心集合，其他条件地域对象必须在占推荐位前明确其未决项与关闭条件。

## 分工与停止条件

- Startup Wave A：World Labs、Odyssey、Runway、Decart。
- Startup Wave B：General Intuition / MIRA、AMI Labs、Overworld。
- Big-tech Wave：NVIDIA Cosmos 3、Google DeepMind Genie 3 / Project Genie、Meta V-JEPA family。
- 子 Agent 只做只读来源恢复与结构化返回；主 Agent 统一写入来源卡、Evidence Ledger、Phase 2 资格表与检查点 2 包。
- 当每个对象的门 2、门 3、地域、三维成熟度、最强反证和最近替代者均有可审计结论，或明确 `unresolved` 并相应降级，即停止搜索。
- 若某个窄问题足以改变 5 席组合，才启动第二轮单对象或单命题补充核验；不做宽泛新扫描。

## 检查点 2 交付与冻结

检查点 2 推荐包必须包含：固定 5 个推荐对象、3–4/1–2 席位结构、每个对象的机制组合与三维成熟度、主要不确定性、为何入选及为何不是最近替代者、其余合格对象的第 9 页安排，以及不足 5 个时的缺口说明。

提交后项目状态改为 `awaiting_user` 并暂停。用户明确批准检查点 2 前，不得把推荐对象称为最终五席，不启动 dossier、评分排名、公司/项目专页或 PPT。

# 检查点 1 审批包 v1.1

研究截至：`2026-07-14`  
修订依据：`检查点 1 红队合并修改意见 v2.0`（用户文档日期 `2026-07-15`）  
项目章程：`Manifold World Model Research Project Plan v2.0`  
状态：`approved_checkpoint_1`（批准日期 `2026-07-15`）  

本审批包提交时只执行红队要求的窄范围来源恢复与权威文件修订，没有重跑三份 DR 或整个 Stage 1；当时没有选择最终五席，没有制作 dossier、评分、排名、公司/项目专页或 PPT。检查点 1 随后于 2026-07-15 获得明确批准。

版本关系：v1.1 完整替代 v1.0，不与 v1.0 合并审批；v1.1a 是对 v1.1 的控制性、累积规则补丁。用户已批准“v1.1 + v1.1a”为检查点 1 唯一有效基线。原 [Day 0 未知项](../01_inputs/user_materials/day0_internal_input.md) 与 [DR-03 三分流](../03_universe/dr03_triage.md) 继续作为规范性附件。若本文件与 v1.1a 补丁存在规则措辞差异，以 v1.1a 为准。

## 获批范围（原请求）

用户批准以下四类基础规则与清单，作为后续资格/真实性验证的治理基础：

1. 三门准入与晋级规则；
2. Manifold 的 WorldScape / WorldScape Policy 双镜头锚点及辅助公开资产登记；
3. DR-02 原始 `9/13/1` 输入审计与当前 10 对象资格验证/隔离队列的统计拆分；
4. 边界/组件隔离规则与逐对象地域资格状态。

这不是 Phase 2 的“唯一入口”或完整发现宇宙；后续新对象只能按同一规则、新建变更记录并重新提交范围审议。

## 1. 三门体系

### 门 1：发现/验证队列准入门

允许 `self_positioned_only`、`evidence_pending`、`technical_qualification_challenged` 和 `geography_pending` 对象进入，但必须显式标记。进入队列只表示值得验证，不表示技术合格。

### 门 2：技术资格门

必须同时满足，方可进入 `technical_qualified`：

1. 状态演化；
2. 动作、控制或持续交互对模型所表示的后续状态产生可审计、时间一致的条件性影响；导航中的 agent/机器人/ego/相机位姿、可达性、碰撞约束与持续记忆可以计入状态，仅对静态场景施加外生相机轨迹、只改变像素或视角且无持久状态、几何约束或动作条件未来分支的不够；
3. 物理、具身、实时仿真或空间行动任务。

三项必须归属于同一对象或明确 core，不能借 VLA、policy、simulator、数据/访问层或母公司相邻资产拼接补齐。上述条件性影响已列为全部 10 个对象的统一验证问题，不再只对 World Labs 提问。

### 门 3：核心集合战略关系门

进入 `technical_qualified` 后，还须至少满足产品替代、平台替代、有证据的未来市场竞争之一，或具备同一或可比评测体系、具名人才/投资人重叠等强直接能力对标证据，方可进入 `core_collection`。招聘或融资不能单独证明未来市场竞争，必须直接支持进入相同地域、客户任务或产品位置；仅有技术相似或宽泛赛道标签不足。

AMI Labs 在出现具体技术资产并完成地域门前，只能留在发现/验证隔离层。World Labs 的相机/ego 位姿可作为导航型状态证据，但在证明其形成可审计、时间一致的持久状态、几何/可达性/碰撞约束或动作条件未来分支前，仍保留 `technical_qualification_challenged`。

### 状态迁移与最终选择

`qualification_validation_isolation_queue` → 通过门 2 → `technical_qualified` → 通过门 3 → `core_collection` → 按战略优先级、证据成熟度、组合互补性和固定席位结构选择最终五席。`geography_pending` 不得进入核心集合；其他条件地域对象必须在最终占席前关闭地域资格。最终五席选择不是第四道技术资格门。

详见：[三门准入与晋级规则](../00_brief/qualification_gates.md)

## 2. 统计宇宙与当前队列

| 统计口径 | 数量 | 含义 |
|---|---:|---|
| DR-02 原始输入审计 | `9 / 13 / 1` | 原始 23 项输入中的 9 个验证输入、13 个边界输入、1 个丢弃输入；不因新增线索改写 |
| 当前跨来源资格验证/隔离队列 | `10` | 原 9 个验证输入，加 Overworld 条件对象；不是 shortlist、不是完整发现宇宙 |

当前 10 个对象为：

- 创业公司/条件对象：World Labs、Odyssey、Runway、Decart、General Intuition / MIRA、AMI Labs、Overworld；
- 大厂具体项目：NVIDIA Cosmos 3、Google DeepMind Genie 3 / Project Genie、Meta V-JEPA family。

其中 World Labs、AMI Labs、Overworld 明确位于发现/验证隔离层；其余对象也只是资格验证对象，没有一个在 CP1 被批准为核心集合或最终席位。

Overworld 的 AP 报道和第一方 Waypoint/World Engine artifact 足以触发发现，但目前仍缺法律实体、正式总部，以及键鼠控制对后续状态形成可审计、时间一致条件性影响的充分证据；持续 agent/ego 位姿、可达性/碰撞约束、记忆或动作条件未来分支仍待核。第三方“上一年开始”的表述及 2025-05-23 第一方公开活动只形成 `founded_year=2025 / unresolved_source` 线索，不是 Fact、不是官网成立口径、不得进入最终 PPT。

详见：[资格验证/隔离队列 v1.1a](qualification_validation_isolation_queue.md)、[结构化 10 对象表](../03_universe/company_universe.csv)、[DR-02 23 项输入登记](../03_universe/eligibility_register.csv)

## 3. Manifold 双镜头与辅助资产

### 主要比较镜头不变

- `WorldScape`：动作条件的未来视觉状态预测、空间一致性与记忆机制；速度、排名、开放性和商业状态继续按来源限制拆分。
- `WorldScape Policy`：世界模型到多任务机器人规划器的下游验证；真机结果仍是小样本公司自评，不等于客户部署。

WorldScape 页面统一称“独立域名项目页”。独立域名与匿名投稿状态不代表第三方独立性，也不能证明法律/IP 所有权。

### 其他公开资产登记

本检查点选择 WorldScape 与 WorldScape Policy 作为主要比较镜头；RoboScape、AirScape 与 Worldscape-MoE 作为辅助资产登记，不据此推断当前产品或商业优先级。

- RoboScape：连续机器人动作控制的联合研究资产；论文原词为 `end position`、`end orientation`、`effector position`，精确字段仍待核；仓库只有占位 README，不能写代码已开放。
- AirScape：自然语言运动意图控制的无人机/空域联合研究资产；HF 仓 MIT 标签不能覆盖 CogVideoX-5b-I2V 基座的自定义许可，完整许可链仍待核。
- Worldscape-MoE：相机轨迹、机器人动作与手关节 action map 的联合研究资产；截至日代码和权重仍未实质开放。

详见：[Manifold 公开比较锚点 v1.1](../02_anchor/manifold_anchor.md)、[其他公开资产登记](../02_anchor/manifold_auxiliary_assets.md)

## 4. Meta V-JEPA family 版本归属

研究对象已更新为：`Meta V-JEPA family｜V-JEPA 2 base｜V-JEPA 2-AC｜V-JEPA 2.1 representation branch`。

| 组件 | 能力/机器人结果归属 | 开放与许可边界 | 技术门 |
|---|---|---|---|
| V-JEPA 2 base | action-free 表征/latent prediction 基座；机器人控制结果不得直接归给 base | 代码、配置与 base checkpoints 可见；模型卡许可并不统一 | 单独不通过动作门 |
| V-JEPA 2-AC | 约 300M action-conditioned predictor；V-JEPA 2 的窄域 Franka 规划/控制结果归此分支 | checkpoint/config 可见；精确 AC 权重许可仍待核；无托管产品 | 暂时提供项目族的动作条件证据 |
| V-JEPA 2.1 | 2026-03-16 已发布的最新 action-free dense/空间/时序表征分支 | 代码/config/直链 checkpoints 可见；精确权重许可待核；论文许可不能外推 | 单独不通过动作门 |

V-JEPA 2.1 论文中的机器人结果依赖另训的 action-conditioned predictor，不得归给裸 2.1 checkpoint；本轮未恢复具名公开的 `2.1-AC` artifact。三组件的能力、机器人结果、开放状态和许可证不得互借。

详见：[组件登记](../03_universe/component_register.csv)、[DR-03 三分流 v1.1a](../03_universe/dr03_triage.md)

## 5. 十对象地域资格审计

| 状态 | 对象 | 结论 |
|---|---|---|
| 非中国资格已有一手实体/地址或母公司项目所有者证据 | World Labs、Odyssey、Runway、NVIDIA Cosmos 3、Google DeepMind Genie 3 / Project Genie、Meta V-JEPA family、General Intuition / MIRA | 可在当前范围内继续验证；母公司项目只表示所有者层地域资格，不声称没有全球/中国业务 |
| 条件通过，正式总部仍待恢复 | Decart | US-inc 与美国/以色列经营站点已恢复；正式总部未明确 |
| 地域资格待核 | AMI Labs | 只有 Paris、New York、Montreal、Singapore 运营足迹；法律主体与总部未恢复 |
| 条件通过，法律实体与正式总部待恢复 | Overworld | Providence 团队/经营地点有第一方与 AP 交叉线索；remote-first；法律实体和注册地未恢复 |

每个对象均已登记总部、主要经营/法律主体、一手来源、`scope_status` 和未决问题。详见：[十对象地域资格审计](../03_universe/geography_audit.csv)。

晋级约束：AMI 的 `geography_pending` 不得进入 `core_collection`；Decart、Overworld 等条件地域对象必须在最终占席前关闭非中国地域资格。

## 6. 边界与组件隔离

- 硬排除不变：VLA、机器人基础模型、仿真/合成数据、纯视频、仅作 3D/learned renderer 且无可审计、时间一致动作条件状态转移的对象，以及垂直内部组件不得入队列、占席或获专页。
- World Labs：`Marble / World API` 与 `RTFM` 分开。World API 模型表支持 Marble；不得写“RTFM API”，也不得把 Marble 的 API、计费或产品成熟度借给 RTFM。
- Mistral：`Emmi Physics AI` 与 `Robostral Navigate` 分开。前者是工业物理场 surrogate/仿真路线，后者是机器人导航 policy/planner；两者均不入队列、占席或获专页，也不得互借能力。
- DR-02 的 `9/13/1` 仍按输入对象计数；Genesis 双组件和 Mistral 双组件的拆分不改写 23 项审计链。

详见：[边界与排除日志 v1.1a](../03_universe/boundary_log.md)、[组件登记](../03_universe/component_register.csv)

## 7. v1.1 基线 P1 / P2 关闭矩阵（由 v1.1a 补丁修订）

| 编号 | 状态 | 关闭证据 |
|---|---|---|
| P1-01 三门规则 | closed | 三门独立定义；全队列动作—状态问题；AMI/World Labs 隔离 |
| P1-02 Overworld 与统计宇宙 | closed | O-024 加入第 10 条；`9/13/1` 与当前 `10` 拆分 |
| P1-03 Meta 项目族 | closed | 2、2-AC、2.1 三组件能力/结果/开放/许可拆分 |
| P1-04 Manifold 辅助资产 | closed | RoboScape、AirScape、Worldscape-MoE 单独登记，不新增镜头 |
| P1-05 地域资格审计 | closed | 10 对象逐项登记；AMI 保持待核 |
| P2-01 成立时间 | closed | 2025 仅为 `unresolved_source`，禁止进入 PPT |
| P2-02 队列命名 | closed | 当前权威名称为“资格验证/隔离队列” |
| P2-03 锚点措辞 | closed | 改为“独立域名项目页”，否认匿名状态代表第三方独立性 |
| P2-04 组件隔离 | closed | Marble / World API ≠ RTFM；Emmi 与 Robostral 分拆 |
| P2-05 审批范围 | closed | 下节明确 CP1 的有限审批边界 |

本表只记录上一轮 v1.1 的基线关闭情况；本轮两项 P1 的控制性关闭记录见 [v1.1a 规则补丁](checkpoint_1_v1_1a_rule_patch.md) 与 [v1.1a QA 差异记录](checkpoint_1_v1_1a_qa_diff.md)。

## 审批边界

批准检查点 1 只表示批准：

- 研究范围与硬排除；
- 三门规则；
- Manifold 双镜头锚点与辅助资产登记；
- 当前 10 对象资格验证/隔离队列、地域状态和组件边界。

批准不表示下列内容已经通过完整红队或获得事实背书：

- 完整 Evidence Ledger；
- 商业事实、客户、收入、采用或生产部署；
- 性能复现、榜单领先或物理正确性；
- 竞争标签、产品/平台替代关系；
- 最终五席、dossier、评分、排名、专页或 PPT。

用户已明确回复批准检查点 1；“v1.1 + v1.1a”自 2026-07-15 起构成已批准基线。此后阶段状态以 `project_state.json` 和后续检查点批准记录为准。

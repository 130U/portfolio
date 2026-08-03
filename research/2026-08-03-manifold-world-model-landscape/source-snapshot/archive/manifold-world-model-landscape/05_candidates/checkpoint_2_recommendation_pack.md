# 检查点 2 推荐包 v1.0（v1.0a 控制补丁累积修订）

状态：`approved as amended by v1.0a`  
研究截至：`2026-07-14`  
检查点 1 批准日期：`2026-07-15`  
唯一有效基线：`CP2 推荐包 v1.0 as amended by v1.0a`

> 用户已于 2026-07-15 批准本包经 v1.0a 修订后的版本。以下五对象是固定五席，状态均为 `approved_final_five`；本次批准只授权后续四类工作，不表示这些工作已经启动。

> Gate 3 仅依据 Manifold 公开锚点进行判断。产品替代和平台替代属于 `Analyst inference / conditional`，不证明当前客户、预算或商业交付已经重合。v1.0a 与本包合并构成唯一有效基线；发生冲突时以 v1.0a 为准。

## 一、批准结果

用户批准采用 `4 家创业公司 + 1 个大厂具体项目` 的固定五席：

1. World Labs
2. Odyssey
3. Runway
4. Decart
5. NVIDIA Cosmos 3

以上顺序只按对象类型与叙述组织，不构成排名。五对象均已通过门 2 并进入 `core_collection`，且当前状态为 `approved_final_five`；组合满足 `3–4 家创业公司 + 1–2 个大厂具体项目` 的固定结构。

本轮选择 `4+1` 而非 `3+2`，原因是：截至 2026-07-14，在本轮审议的三个大厂候选项目中，Cosmos 3 是唯一同时具有可下载/自托管路径和具名伙伴侧自报集成线索的对象。Genie 3 虽进入核心集合，但其当前外部访问仍是消费者研究原型，Waymo 路径属于 Alphabet 内部适配；增加第二个大厂席会减少对外部可行动竞争路径的覆盖。

## 二、组合为什么成立

| 固定五席 | 类型 | 主要战略机制 | 技术证据 | 外部可获得性 | 商业采用边界 |
|---|---|---|---|---|---|
| World Labs | 创业公司 | `potential_platform_substitution + evidence_backed_future_market_competition` | RTFM first-party research preview | RTFM 仅 demo；Marble 公共产品/API，组件分开 | 供应商托管 working prototype/PoC；非付费/生产/收入证据 |
| Odyssey | 创业公司 | `potential_product_substitution + potential_platform_substitution + evidence_backed_future_market_competition` | Pro 可访问系统；Max first-party demo/private beta | Pro hosted API/SDK；Max private beta | 无具名客户、试点、部署或收入证据 |
| Runway | 创业公司 | `evidence_backed_future_market_competition + potential_product_substitution + potential_platform_substitution` | GWM Worlds first-party early access | 公开申请制 early-access 入口，实际访问未独立确认；无公开权重/代码 | 仅公司自报 collaboration；无伙伴侧部署证据 |
| Decart | 创业公司 | `potential_product_substitution + potential_platform_substitution` | 可访问 API＋独立媒体产品体验/反证；非 validated system | 公共 API/demo/SDK；模型本身不开源 | 无具名采用；付费 API 与媒体体验均不等于商业采用 |
| NVIDIA Cosmos 3 | 大厂项目 | `potential_platform_substitution + evidence_backed_future_market_competition + potential_partial_product_substitution` | 官方 artifact/workflow＋伙伴自报集成路径 | 权重、代码、self-hosted recipe；action API 稳定性未闭合 | Agile Robots 自报 early access、测试、集成及内部 neural-simulator deployment；非 validated pilot/付费/外部生产 |

组合互补性来自五条不同竞争路径：持久空间渲染与 3D API、通用因果流式模型、创意视频平台向互动世界迁移、低摩擦 Physical AI API，以及开放的大厂 self-hosted 平台。它不是融资规模或母公司名气排序。

## 三、固定五席裁决卡

### 1. World Labs

- 门 2：`pass`。RTFM 以目标 3D 相机位姿条件化后续帧，并把 posed frames 写入空间记忆以支持几何持续与重访；按 v1.1a 导航规则可进入 `technical_qualified`。
- 门 3：`conditional_pass_against_public_anchor`。Marble 与 World API 支持 `potential_platform_substitution + evidence_backed_future_market_competition`；暂不主张确定性产品替代，也不推断客户、预算或交付已经重合。
- 三维成熟度：RTFM 是公司 research preview；RTFM 无 API、代码或权重；Marble 有公共付费 API；Escape 仅为供应商托管的 working prototype/PoC，不是付费试点、生产部署或收入证据。
- 主要不确定性：World Labs 自己把 RTFM 归为 learned renderer；动态对象交互、物理模拟和独立长时复现仍未闭合。
- 为什么推荐：它给出“持久空间表征＋商业 3D world API”的可审计对照，能同时挑战 Manifold 的 WorldScape 技术镜头与平台位置。
- 为什么不是最近未入选对象 Overworld：Overworld 有开放权重与本地 runtime，但法律主体仍未关闭，且官方材料直接承认长期几何和物体持久性失败；World Labs 的非中国范围已闭合，并有公开计价/PAYG API 与供应商托管的 working prototype/PoC 案例。该案例不是付费试点、生产部署或收入证据。
- 决策来源：`S-WL-002; S-WL-003; S-WL-005; S-WL-006; S-WL-007`；账本：`C-P2-001; C-P2-002`。

### 2. Odyssey

- 门 2：`pass`。Odyssey-2 Pro 与 Max 都以因果自回归、动作条件未来闭合；不需要借用 Starchild-1 或 Agora-1。
- 门 3：`conditional_pass_against_public_anchor`。Pro 的 simulations、interactive streams、SDK 与 Max private beta 支持 `potential_product_substitution + potential_platform_substitution + evidence_backed_future_market_competition`；均为相对公开锚点的条件性判断。
- 三维成熟度：Pro 是可访问 hosted API；Max 是公司 demo/private beta；没有开放权重/训练代码，也没有独立 Max 复现。
- 主要不确定性：Max 物理与一致性指标均为公司测量；最新能力与公开 API 分属 Max/Pro，且没有具名客户、PoC、pilot、部署或收入。
- 为什么推荐：它提供通用因果实时世界模型/API 路线的具体对照，且版本族呈现出从单流到多模态、多参与者的扩张，但证据仍能按组件隔离。
- 为什么不是最近未入选对象 General Intuition / MIRA：MIRA 的论文、代码和数据更开放，但核心证据局限于 Rocket League，商业 API 是否交付 MIRA 世界模型仍不可审计；Odyssey 的通用产品接口更明确。
- 决策来源：`S-ODY-002; S-ODY-003; S-ODY-004; S-ODY-005; S-ODY-006; S-ODY-007`；账本：`C-P2-003; C-P2-004`。

### 3. Runway

- 门 2：`pass`。只用 GWM Worlds 的逐帧实时自回归、导航控制、长序列空间一致性和重访证据闭合；GWM Robotics 不得向 GWM Worlds 借出门 2 证据，但作为直接相关世界模型资产在 dossier 中独立分栏。
- 门 3：`conditional_pass_against_public_anchor`。GWM Worlds 与公开申请制 early-access 产品及应用入口（实际访问未独立确认）支持 `evidence_backed_future_market_competition + potential_product_substitution + potential_platform_substitution`；不证明现实客户、预算或交付位置已重合。
- 三维成熟度：Worlds 是 first-party demo/early access；无公开代码、权重或通用模型许可；当前 adoption 仅能写成公司自报 collaboration。
- 主要不确定性：三种 GWM variant 是分开的 post-trained models；Worlds 自身缺少独立持久性、物理和伙伴侧集成验证。
- 后续 dossier 约束：Runway dossier 必须将 `GWM Worlds` 与 `GWM Robotics` 强制分栏，分别记录技术能力、访问状态、许可和采用证据；任何一栏不得向另一栏借证。GWM Worlds 是当前资格 core，GWM Robotics 是直接相关但隔离的世界模型资产。
- 为什么推荐：Runway 展示了成熟创意视频平台向实时互动世界和 Physical AI 工具迁移的独特竞争路径，对相对于 Manifold 公开锚点的潜在平台替代路径与产品及应用入口都有高解释力。
- 为什么不是最近未入选对象 General Intuition / MIRA：MIRA 技术披露更深，但单一游戏域和商业组件不明限制其当前外部替代性；Runway 已公开设置申请制 early-access 产品与应用入口，但实际访问未独立确认。
- 决策来源：`S-RUN-001; S-RUN-002; S-RUN-003`；账本：`C-P2-005; C-P2-006`。

### 4. Decart

- 范围与地域：`non_china_verified_for_scope_hq_label_unresolved`。官方条款与经营足迹只指向美国/以色列，足以关闭本项目的非中国范围；不得声称一个未恢复的一手正式总部。Oasis 3 是对外独立世界模型 API，不是服务自家垂直系统的内部组件；当前公开 action space 驾驶优先仍需在最终研究中显著标注。
- 门 2：`pass_low_confidence`。stateful API 接受 throttle/steering 并生成多相机后续帧，满足最低动作条件状态演化；无需要求物体级状态改变。
- 门 3：`conditional_pass_against_public_anchor`。公共 hosted API、浏览器 demo、SDK/package 和透明调用路径支持 `potential_product_substitution + potential_platform_substitution`；仍只是相对公开锚点的分析判断。
- 三维成熟度：accessible API/demo，并有独立媒体产品体验与负面反证；这不是 validated system 或商业采用。thin client 的 MIT 许可不覆盖 hosted model。
- 主要不确定性：独立媒体产品体验与负面反证出现路线记忆丢失、控制不灵敏、场景漂移和穿车；这不是系统验证。CEO 同时承认物理与记忆是研究问题；无具名客户或部署证据。
- 为什么推荐：它把“最低接入摩擦”与“长期状态/物理尚不可靠”的战略张力暴露得最清楚，是判断潜在 API 平台替代路径推进速度的高价值对象。
- 为什么不是最近未入选对象 Overworld：Overworld 更开放，但地域条件尚未关闭且商业工作流未出现；Decart 已有可调用 API、公开 SDK 与独立媒体产品体验/反证，能形成更可审计的条件性竞争样本。
- 决策来源：`S-DEC-001; S-DEC-002; S-DEC-003; S-DEC-004; S-DEC-005; S-DEC-006; S-DEC-007`；账本：`C-P2-007; C-P2-008; C-P2-009; C-P2-022`。

### 5. NVIDIA Cosmos 3

- 门 2：`pass`。Cosmos 3 Generator 的 action-conditioned forward dynamics、policy 和 inverse-dynamics 分支提供具体 Physical AI 世界状态预测。
- 门 3：`conditional_pass_against_public_anchor`。权重、代码、OpenMDW 1.1 与 self-hosted workflow 支持 `potential_platform_substitution + evidence_backed_future_market_competition + potential_partial_product_substitution`；Agile Robots 只支持伙伴自报的 early access、测试、集成及内部 neural-simulator deployment。
- 三维成熟度：官方研究/workflow artifact＋伙伴自报 early access/测试/集成/内部部署；已公开权重、代码和 self-hosted recipe，但 stable enterprise action API 仍未闭合。不得称 validated pilot、付费客户或外部生产采用。
- 主要不确定性：不能把 NIM、Isaac、GR00T、Omniverse 或 Agile Robots 机器人栈的成熟度借给 Cosmos 3 core；官方模型卡也承认 action-state drift、物体消失和非真实碰撞。
- 为什么推荐：截至 2026-07-14，在本轮审议的三个大厂候选项目中，它是唯一同时具有可下载/自托管路径和具名伙伴侧自报集成线索的对象，代表相对于 Manifold 公开锚点的潜在平台压力；该选择不构成总体技术或证据排名。
- 为什么不是最近未入选对象 Genie 3 / Project Genie：Genie 3 有模型能力与 Waymo 内部适配证据；WorldMark 只作为技术可比性参考，未直接包含 WorldScape，不构成强直接对标。两者证据形态不同；Cosmos 3 的 artifact、自托管路径与伙伴侧自报集成线索用于组合互补性选择，不构成技术或证据总排名。
- 决策来源：`S-NV-001; S-NV-002; S-NV-003; S-NV-004; S-NV-006; S-NV-007`；账本：`C-P2-010; C-P2-011`。

## 四、未入选五席对象的保留位置

这些对象不是“淘汰”，但不在已批准的固定五席中：

| 对象 | 当前层级 | 检查点 2 处置 | 升级触发器 |
|---|---|---|---|
| Google DeepMind Genie 3 / Project Genie | `core_collection` | 第 9 页大厂备选；不占当前大厂席 | 企业/developer API、SDK 或权重；外部具名客户/集成；超越消费者 60 秒原型的工作流 |
| General Intuition / MIRA | `core_collection` | 第 9 页创业公司备选 | 明确商业 API 交付的是世界模型；具名客户；跨域独立动作—状态验证或真实世界迁移 |
| Overworld | `core_collection`，地域条件 | 第 9 页开放平台备选；地域关闭前不得占最终席位 | 法律主体/注册地一手记录；独立长时 action fidelity、几何、碰撞和持久性测试；具名采用 |
| Meta V-JEPA family | `core_collection_watch_not_recommended` | 核心观察；开放研究/复现风险参照，不占已批准大厂席 | 扩展出窄域 Franka/DROID 之外的动作世界模型；关闭 2-AC/2.1 checkpoint 许可；出现托管产品/API/客户路径或独立修复复现 |
| AMI Labs | `discovery_isolation_self_positioned` | 第 9 页监测信号；不授予竞争对象专页 | 出现 AMI 自有模型、论文、demo、checkpoint 或 API，并分别通过门 2 与门 3 |

“第 9 页”只引用既有十页蓝图的结构位置，不表示页面内容已经落版，也不启动 PPT 或授予上述对象专页。九个核心/核心观察对象的非评分比较见 [`checkpoint_2_nine_object_decision_table.csv`](checkpoint_2_nine_object_decision_table.csv)；该表没有总分、权重或排名，并明确记录 Runway 与 Genie 3 的取舍。

## 五、检查点 2 的审批边界

批准本包仅表示：

- 接受上述 5 个对象成为后续研究的固定五席；
- 接受 `4 家创业公司 + 1 个大厂项目` 的组合结构；
- 接受其余 5 个对象按核心观察或隔离层继续监测；
- 只解锁获批五席的 dossier、技术/产品/商业证据刷新、横向比较和独立 Red Team。

批准本包不表示：

- 当前商业事实、客户状态、收入、性能或许可证已通过未来 dossier 的完整红队；
- 任何公司自报 benchmark 已被独立复现；
- 可以把相邻组件、母公司生态或伙伴系统成熟度借给世界模型 core；
- 已授权的 dossier、证据刷新、横向比较或独立 Red Team 已经启动；评分排名、公司/项目专页、Storyboard、页面落版、PPT 与 PDF 仍未获授权。

既有十页蓝图仅作为结构约束。最终页面内容落版、事实锁定与视觉制作继续冻结，并严格遵循：

`Dossier → Cross-comparison → Red Team → Content Lock → Deck production`

Content Lock 获得用户明确批准前，不得开始页面视觉落版、Storyboard、PPT 或 PDF 制作。

配套权威文件：

- `phase_2_candidate_validation.csv`：10 对象逐项资格、机制、三维成熟度与反证；
- `checkpoint_2_nine_object_decision_table.csv`：9 个核心/核心观察对象的非评分式选择透明度表；
- `../04_evidence/evidence_ledger.csv`：Phase 2 决策承载主张；
- `../03_universe/eligibility_register.csv`：当前漏斗状态；
- `checkpoint_2_qa.md`：结构、来源和冻结项 QA。
- `checkpoint_2_v1_0a_control_patch.md` 与 `checkpoint_2_v1_0a_qa_diff.md`：本轮控制修订及窄范围差异 QA。

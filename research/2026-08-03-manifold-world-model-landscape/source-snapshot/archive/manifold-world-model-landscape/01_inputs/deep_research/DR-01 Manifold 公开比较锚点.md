# Manifold 公开比较锚点

> **阅读版说明（2026-07-18）：** 原始 ChatGPT Deep Research 导出包含 GitHub 无法解析的内部 `turn…` 引用标记。本阅读副本已移除这些不可移植标记；这不等于直接恢复了原引用。项目后续已对关键主张重新打开原始来源，并以 Sources、Source Cards 和 Evidence Ledger 为准。未经清理的初始版本仍可通过 Git 初始提交 `67f525c` 与输入清单中的 SHA256 追溯。

## Executive Factual Profile

截至 2026 年 7 月 14 日，公开资料能够较稳妥证明的是：Manifold AI 对外品牌对应的主要经营主体为 **北京流形空间科技有限公司**，成立于 **2025-05-22**，官网定位为“探索 next-generation world models，并将其应用于 AI hardware applications（如 Robotics、XR equipment）”的公司。官网当前公开列出的核心名称包括 **RoboScape、AirScape、WorldScape、WorldScape Policy**；其中 **WorldScape** 与 **WorldScape Policy** 拥有直接的 Manifold 官方技术报告/论文页面，前者公开宣称统一 locomotion 与 manipulation 的实时世界模型，后者公开宣称基于 foundation world model 做 generalizable robotic learning。公开资料还可证明公司存在北京主体，并在 2026 年新增了深圳、上海关联主体；但客户、收入、生产部署规模、API/SDK 商业交付、估值与“独角兽”口径，均未见可独立核验的公开证据。

当前最重要的公开未知项主要有五类。第一，**付费客户、合同金额、收入结构与规模部署**未公开披露。第二，**WorldScape Policy 在“电商物流、3C 制造”等场景的“落地”究竟是试点、PoC、付费还是生产部署**，公开证据不足。第三，**WorldScape 当前是否仍在 WorldScore/WorldArena/RoboTwin 保持第一**不能仅按 2026-04-30 官网口径采信；至少在可公开检索的 WorldScore 最新 leaderboard 文件中，WorldScape 已不处于当前榜首。第四，**AirScape、RoboScape、WorldArena 与 Manifold 的公司归属程度**并不完全由外部一手技术页面直接确认，其中 AirScape 的项目页作者署名仅见 Tsinghua University。第五，**融资口径**存在“单笔金额、同轮累计、历史累计、宣传性独角兽”混用，外部公开资料无法完全对齐。

**3–5 项最重要公开未知项**

- 未发现可公开核验的 **客户名单、付费关系、收入、生产部署规模**。
- **WorldScape Policy** 的“已在电商物流、3C 制造等场景落地”仍停留在公司/交易相关方自述层面。
- **WorldScape 当前榜单地位**与官网 2026-04-30 说法已出现时间差；不能把当时的“rank 1st”直接写成当前事实。
- **AirScape / RoboScape / WorldArena** 与 Manifold 的公司归属、商业所有权与运营边界，公开资料不完全清晰。
- **投后估值/独角兽**未见可独立验证的数值型披露。公开只见宣传性称谓。

## 公司主体与公开口径

公开可核验的公司主体信息，以商业登记数据库和官网交叉来看，当前最稳妥的锚点是：**北京流形空间科技有限公司**，统一社会信用代码 **91110105MAEKRGCAX4**，成立日期 **2025-05-22**，法定代表人 **武伟**，官网为 **www.manifoldai.cn**，邮箱域名为 **manifoldai.cn**，注册地址位于北京市朝阳区东坝乡东晓景产业园。Aiqicha 同页注明其数据来源包括国家企业信用信息公示系统等官方数据库；Manifold 官网则显示 ICP 备案号 **京ICP备2025128832号**。这足以支持“Manifold AI 对外品牌至少对应北京主体作为主要公开经营实体”的判断。

就“总部/主要经营主体”而言，公开证据支持 **北京主体是目前最明确的核心经营实体**。同时，Aiqicha 的武伟关联企业页面显示，**深圳流形空间科技有限公司**成立于 **2025-06-25**，**上海流形空间科技有限公司**成立于 **2025-06-30**，均由武伟担任法定代表人；但这些新设主体是否承担销售、研发、交付或区域运营职责，公开资料并未说明。因此，后续比较时应把“北京流形空间科技有限公司”作为主锚点，而把上海/深圳主体只记录为“公开存在的关联实体”，不宜擅自写成“分公司网络已形成”或“多地运营成熟”。

官网对公司公开定位的原文非常简洁：**“We are a company exploring next-generation world models, and apply it to AI hardware applications (e.g. Robotics, XR equipment)”**。这可以直接支持“世界模型 + Physical AI / AI hardware”定位，也可以支持应用方向包括 **Robotics、XR equipment**；但**不能**从这句官方表述自动推出已经拥有机器人客户、XR 客户，或已规模化商用。官网 Join Us 页面则进一步写明，公司“focus on cutting-edge research in world models and apply it to the field of physical AI”，团队“composed of experts with top-level AI research experience and hands-on experience in deploying robots”。后一句只能证明公司**公开作出过这样的团队自述**，不能单独证明团队规模、商业化经验深度或交付数量。

公开可见的团队与资源信息，最可核验的部分其实来自公司登记与论文署名，而不是媒体渲染。工商页公开了董事长/经理 **武伟**、若干董事与监事，以及 **2025 年年报口径参保人数 6 人**。技术署名层面，**WorldScape Policy** 报告首页直接以 **Manifold AI** 为机构署名；**Worldscape-MoE** 的 arXiv HTML 首页则列出作者一部分来自 **Tsinghua University**、一部分来自 **Manifold AI**。这足以支持“Manifold 有公开的研究产出与学术合作网络”，并支持“与 Tsinghua 研究力量存在公开的人才/合作交叉”；但“创始团队由清华 FIB 实验室与工业界最早落地世界模型团队组成”等更强表述，目前主要仍见于公司授权传播或媒体转述，应标为 **Company claim**。

## 公司与产品项目总表

下表只区分“公开可直接核验的事实”与“仍属于公司自述/利益相关方叙事”的部分，不把方向性描述误写成客户事实。

| 名称 | 官方定位 | 面向任务和应用 | 已公开能力 | 公开交付形态 | 公开证据阶段 | 商业或部署证据 | 标签 | 最新有效证据日期 | 主要来源 |
|---|---|---|---|---|---|---|---|---|---|
| **WorldScape** | “A Unified Real-time World Model Integrating Locomotion And Manipulation”；官网首页写为“one real-time world model”  | 统一 **locomotion / manipulation**，用于交互式环境预测、机器人预训练与 world simulator 场景。  | 可在 **navigation or manipulation actions** 条件下做 streaming prediction；宣称 **16 FPS on a single H100 GPU**；带 **memory-preserving streaming generation**、3D consistency、closed-loop streaming prediction。  | 官方 blog 页面、PDF 技术报告、独立项目站 **worldscape.io**；PDF写“Codes and demos can be found at worldscape.io”，但当前公开可直接核验到的是 demo/项目页，未在官方页上清晰检索到 GitHub 代码入口。  | **Demo**。已有官方项目页与技术报告，但未见公开 API/SDK/商业产品文档。  | 未见公开客户、付费、部署、收入证据。官网 2026-04-30 曾称其在 WorldScore/WorldArena/RoboTwin 排名第一，但至少对 WorldScore 而言，这不能当作 2026-07-14 的当前事实。  | **Fact** 为模型存在、技术报告、能力描述；“当前仍第一”“边缘侧落地支撑”等多为 **Company claim**。 | 2026-07-11（WorldScore 文件 3 days ago）/ 2026-04-03（论文）  | WorldScape PDF、官网、WorldScore leaderboard。  |
| **WorldScape Policy** | “Generalizable Robotic Learning via a Foundation World Model”；world-model-based generalist robotic planner。  | Generalizable robotic learning、长时程 dexterous manipulation、具身策略学习。  | 联合建模 **RGB、depth、continuous action chunks**；3D-aware reasoning；few-shot adaptation；dual-arm physical platform real-world evaluation；human-in-the-loop post-training；closed-loop rollouts。  | 官方 tech report / PDF；官网 news/页面；未见公开代码、权重、API、SDK。  | **Demo**。公开证明其已到真实双臂平台实验，但未见独立可核验的试点/产品化接口。  | 华兴资本授权转发稿称其“已陆续在电商物流、3C制造等具身场景应用落地”，但未给客户名、合同、部署规模，且未发现客户方交叉证据。  | 技术报告与双臂实验是 **Fact**；“已落地电商物流、3C 制造”是 **Company claim**。 | 2026-06-18（公司授权融资稿）/ 2026-02-28（报告）  | WorldScape Policy PDF、官网、华兴资本稿。  |
| **AirScape** | 官网写为 “our world model for drones”；项目页题目为 “An Aerial Generative World Model with Motion Controllability”。  | Aerial agents / drones，6DoF motion intention conditioned future observation prediction，任务含 navigation、tracking、detection。  | 11k video-intention dataset；6DoF motion controllability；两阶段训练；强调 spatio-temporal constraints 与 physical plausibility。  | 公开 project page、arXiv/ar5iv 页面、GitHub code、Hugging Face dataset。  | **Research**。有代码与数据，但未见产品/API/商业文档。  | 未发现公开商业部署、客户或收入证据。 | “AirScape 存在、代码数据公开”是 **Fact**；“它是 Manifold 官方产品线的一部分”在官网层面是 **Company claim/Fact of statement**，但其公开 project page 作者署名仅见 Tsinghua University，外部公司归属并不完全清晰。  | 2026-07-14 可访问 project page / code | 官网、AirScape project、GitHub。  |
| **RoboScape** | 官网写为 “our world model for robotics”；论文题为 “Physics-informed Embodied World Model”。  | Robotics / embodied scenarios；未来状态预测、policy training with generated data、policy evaluation。  | 联合 RGB、temporal depth prediction、adaptive keypoint dynamics；强调物理属性、3D 几何一致性、policy evaluator 角色。  | 公开 ar5iv/arXiv 页面和 GitHub repo；GitHub 无公开 release。  | **Research**。 | 仅有论文中的 downstream utility 评估；未见客户/部署/收入。 | 模型存在、论文、代码仓库为 **Fact**；“官网意义上的公司世界模型产品”可视为 **Fact of company statement**。 | 2026-07-03（官网 news）/ 论文公开可访问日 | 官网、ar5iv、GitHub。  |
| **WorldArena** | “A Unified Benchmark for Evaluating Perception and Functional Utility of Embodied World Models”。Manifold 官网 navbar 直接链接。  | Benchmark / evaluation platform：video quality、data engine、policy evaluator、action planner。  | 16 metrics across 6 perceptual sub-dimensions；并评估 embodied task functionality。公开 leaderboard 与 challenge。  | 官网、GitHub、HF leaderboard/challenge。  | **Research infrastructure**。 | 不是客户/收入证据。华兴资本授权稿称 Manifold “联合国内外数十家科研单位建立”该基准；但 benchmark 首页作者署名主要为多所高校/研究机构，公开 ownership/运营边界不够清晰。  | Benchmark 本身存在是 **Fact**；“由 Manifold 联合建立”的归属叙事更适合标 **Company claim**。 | 2026-07-13 左右可访问 HF space/文件更新至 1 day ago | WorldArena 官网、GitHub、HF、华兴资本稿。  |
| **Worldscape-MoE** | 论文定义为 “A Unified Mixture-of-Experts World Model for Scalable Heterogeneous Action Control”。  | Heterogeneous control：camera trajectories、robot actions、hand-joint signals；locomotion、robotic manipulation、egocentric hand control。  | MoE + heterogeneous control，long-horizon autoregressive world generation，OOD generalization。  | arXiv HTML、Hugging Face model weights、project page、demo video。  | **Research/Demo**。 | 未见商业/部署证据。 | 这是**公开可验证的 Manifold 相关研究 artifact**，因为论文作者同时标注 **Tsinghua University / Manifold AI**；但截至本次审计，Manifold 官网并未把它列入官方 product/news 口径，所以**不应直接写成公司当前官方产品线**。这是 **Fact + Analyst inference** 的组合。  | 2026-07-05 | arXiv HTML、HF model card。  |

有一个必须单独指出的公开冲突：Manifold 官网在 **2026-04-30** 写明“**We rank 1st on WorldScore、WorldArena、RoboTwin**”；但可公开访问的 **WorldScore leaderboard.csv** 在 **2026-07-11 左右更新**后，至少在当前文件顺序与分数字段中，**WorldScape-0.2** 不再位于最高分位置。因此，后续比较海外对象时，**“曾在 2026-04-30 宣布排名第一”**可以记录，**“截至 2026-07-14 仍然排名第一”**则不能写成事实。

## 技术能力证据矩阵

下表专门回答“能否公开证明某项能力”。其中“已验证”表示原始论文/技术报告或项目页直接支持；“公司自述”表示只有官网、授权稿或利益相关方传播在说；“不明确/未披露”表示不能从公开资料稳妥得出。

| 能力字段 | WorldScape | WorldScape Policy | AirScape | RoboScape |
|---|---|---|---|---|
| 学习或预测环境状态及其演化 | **已验证**：可对视觉观察在 action 条件下的演化进行 streaming prediction。  | **已验证**：报告明确写其 predicts future visual trajectories 并联合 action generation。  | **已验证**：根据 current visual inputs + motion intentions 预测 future observation sequences。  | **已验证**：论文明示 based on current observations and given actions 预测 future states。  |
| 持续状态或时间一致性 | **已验证**：memory-aware KV cache、long-range spatial coherence、memory-preserving streaming generation。  | **部分已验证**：有 long-horizon planning、closed-loop rollouts；但“长期世界记忆”主要依托 WorldScape 基模，而非单独作为 Policy 的独立卖点。  | **已验证**：项目页反复强调 spatio-temporal consistency。  | **已验证**：temporal depth prediction 与 keypoint dynamics 明确服务于时序/几何一致性。  |
| 实时生成或实时推理 | **已验证**：16 FPS on single H100 GPU；官网 blog 还写 near real-time up to 24 FPS。两者口径不同，但都支持“实时/近实时”方向。  | **不明确**：报告没有像 WorldScape 一样给出控制推理 FPS；仅提 real-time value prediction in HITL stage。  | **未披露**：未见明确实时 FPS。  | **未披露**：未见明确实时 FPS。  |
| 可交互性 | **已验证**：unified interaction-aware conditioning；可对 navigation / manipulation action sequences 做响应。  | **已验证**：world-model-based planner，联合 video-depth-action，面向可执行 robot control。  | **已验证**：motion intention controllability。  | **已验证**：action-conditioned embodied world model，用于 policy evaluation。  |
| action-conditioned / control-conditioned / policy-conditioned | **已验证**：navigation/manipulation actions conditioned；camera & hand motion injection。  | **已验证**：continuous action chunks、advantage-conditioned HITL、closed-loop rollouts。  | **已验证**：motion intentions 作为控制条件。  | **已验证**：given actions 预测 future states；用于 policy-generated action sequences evaluation。  |
| 物理预测或物理一致性 | **已验证**：论文摘要直接写 physical consistency。  | **已验证**：报告强调接触丰富 manipulation、物理先验、robustness to distribution shifts。  | **已验证**：physical spatio-temporal constraints / physically plausible future video sequences。  | **已验证**：physics-informed；implicit physical properties；physical plausibility。  |
| 3D、空间智能或多视角一致性 | **已验证**：3D Gaussian Splatting supervision、3D spatial consistency。  | **已验证**：depth-aware token conditioning 支持 robust 3D spatial reasoning。  | **已验证**：6DoF spatial imagination / perspective / parallax。  | **已验证**：temporal depth prediction 强化 3D geometric consistency。  |
| 面向机器人、无人机、XR 或其他 Physical AI | **已验证**：至少对机器人/物理 AI 方向公开明确；XR 只在公司层定位出现，不是 WorldScape 单模报告主轴。  | **已验证**：明确面向 robotic learning。  | **已验证**：明确用于 drones / aerial agents。  | **已验证**：明确用于 robotics / embodied scenarios。  |
| 与真实硬件、仿真器或 robot policy 结合 | **已验证**：论文把 world model 直接定位为 agent training / simulator，且有 closed-loop streaming prediction 的 world-simulator ambition；但“已与某商用仿真器集成”未披露。  | **已验证**：dual-arm physical platform PIPER、real-world task setup、DAgger/HITL。  | **不明确**：展示了 aerial agent generation，但未见真实无人机系统部署/仿真器集成披露。  | **已验证**：结合 robotic policy training using synthetic data 与 policy evaluation；未来才计划 combine with real-world robots further test。  |

从后续比较海外对象的角度，**可以稳定拿来做锚点的能力字段**主要是：是否公开支持 action-conditioned world modeling、是否公开证明 3D/depth/spatial consistency、是否公开给出 real-time 指标、是否与真实硬件平台做过 real-world evaluation、是否公开提供 code/weights/dataset。**不能稳定拿来做锚点**的字段则包括：实际客户采用深度、边缘部署规模、生产效率提升幅度、收入贡献、精确实时控制 latency 等，因为这些要么缺失，要么只有公司自述。

## 商业证据与融资时间线

公开商业证据必须严格分层。就目前可见资料，**Manifold 更接近“技术/融资/合作活跃，但客户与收入未公开透明”的状态**。下面先列合作与商业证据，再列融资与资源时间线。

| 事项 | 时间 | 公开证据级别 | 是否有对方交叉证据 | 说明 |
|---|---|---|---|---|
| **与优必选达成战略合作** | 2026-07-13 | **合作/框架合作**，不是已验证收入或规模部署。  | **未发现 partner-side 一手交叉证据**；目前可见主要为媒体稿与转引。  | 可写“公开宣布战略合作”，不可写“已量产商用”或“已形成营收”。 |
| **WorldScape Policy 已在电商物流、3C制造等场景落地** | 2026-06-18 | **Company claim**。  | **无客户方一手交叉证据**。  | 不能升级为“付费客户”“生产部署”“规模部署”“收入”。 |
| **WorldArena benchmark / challenge** | 2026-02 至今 | **联合研究/行业基准建设**。  | **有 benchmark 自身一手交叉证据**，但与 Manifold 的 ownership/主导关系仍需谨慎。  | 这是一项研究/评测基础设施证据，不是客户采用证据。 |
| **WorldScape Policy 真实双臂 PIPER 平台实验** | 2026-02-28 报告公开 | **Demo / real-world evaluation**。  | 无外部客户交叉。 | 可证明与真实硬件结合，不可证明商业部署。 |
| **WorldScape 当前榜单第一** | 官网于 2026-04-30 宣布 | **Company claim（时点性）**。  | WorldScore 的当前公开文件不支持把此话延续为现在时事实。  | 后续研究应记录“曾公开宣称”，不要写“截至现在仍第一”。 |

融资方面，公开资料里能较稳定建立的时间线如下。需要特别注意：**金额口径经常混用**，有的说单笔“数亿元”，有的说同轮累计“近 10 亿元”，有的说历史累计“近 5 亿元”，还有“独角兽”这种宣传标签。下面表格已尽量拆开。

| 时间 | 事件 | 金额口径 | 投资方口径 | 置信度 | 备注 |
|---|---|---|---|---|---|
| **2025-05-22** | 北京主体成立；官网新闻同日写 “Manifold AI online!”。  | 无融资金额可直接核验 | 无 | **高** | 这是主体成立与品牌上线时间锚点。 |
| **2025-07 至 2025-10 前后** | 公开报道反复提到公司早期有 **seed / angel** 轮次，但具体日期与轮次表述存在冲突。1 月报道说“成立初期便完成 seed”；同一时期其他报道又写“2025 年 7 月、9 月完成两轮约亿元天使轮融资”。  | **不明确**；金额与日期未完全对齐 | 常见说法包括英诺天使基金、水木清华校友种子基金。Aiqicha 截至 2026-06 的股东名单中也确有相关主体。  | **中低** | 建议后续内部核对“第一笔交割时间/金额/轮次名称”。 |
| **2025-10-21** | 天使轮公开见报。  | **单笔：近亿元天使轮**。  | 锦秋基金领投，同创伟业、老股东英诺天使基金跟投。  | **中** | 来源是投中网经新浪转载，非公司官网，但表述相对清楚。 |
| **2026-01-13** | 天使+ 轮公开见报。  | **单笔：超亿元天使+轮**。  | 梅花创投、君联资本、华为哈勃联合投资，老股东英诺基金等加注。  | **中** | 仍属媒体/传播稿口径。 |
| **2026-03-04** | Pre-A 轮公开见报。  | **单笔：近 2 亿元 Pre-A 轮**。  | 华控基金、锡创投联合领投，达泰资本跟投，老股东追加。  | **中高** | 至少有界面、36Kr、投中三家同步快讯。 |
| **2026-06-18** | 新一轮融资，华兴资本授权转发。  | **单笔：数亿元**；**同口径累计：Pre-A 轮融资总金额近 10 亿元**。  | 国新基金、毅峰资本、北汽产投、芯能创投 + 四家老股东追加。  | **中高** | 这是最接近一手的交易相关方来源，但仍应标为 Company claim/transaction-side statement。 |
| **2026-06-23 前后** | 商业登记页显示公司注册资本变为 **300.0382 万元**，股东达到 21 个。  | 不是融资额，而是登记侧变化 | 股东名单公开可见前 10 项含水木华清、英诺鼎鑫、哈勃科技等。  | **高** | 可证明股权层面持续变化，但不能据此精确还原各轮交割金额。 |
| **2026-07-13** | 对外宣布与优必选战略合作。  | 无 | 无 | **中** | 这是合作事件，不是融资事件。 |

关于**估值与“独角兽”**，公开可见的最强表述来自华兴资本授权稿中的“快速跃升世界模型独角兽行列”。这是**典型宣传性称谓**，目前未见可独立核验的投后估值数值，因此后续任何比较表都应把“估值”单列为 **未公开披露**，绝不能把“独角兽”自动翻译成“估值 > 10 亿美元已被验证”。

过去 18 个月里，与产品、技术、融资、合作和组织资源最重要的公开事件，按时间看大致是：**2025-05-22 公司与官网上线；2025-07 RoboScape 在官网挂出；2025-10 天使轮公开；2025-11 AirScape 对外发布；2026-01 天使+ 轮公开；2026-02 WorldScape 与 WorldScape Policy 相继发布；2026-03 Pre-A 轮公开；2026-04 官网宣布榜单成绩；2026-06 华兴资本授权披露新一轮融资与 Pre-A 累计口径；2026-07 与优必选宣布战略合作；2026-07 Worldscape-MoE 论文与权重公开。**这些事件足以构成后续海外比较的时间轴锚点。

## Manifold Anchor Schema 与待确认事项

为了后续比较海外对象，真正可靠的 **Manifold Anchor Schema** 建议只保留那些能由公开原始材料稳定支撑的字段，并把其余字段明确留空。下面这张表，左列是建议比较字段，中列是当前公开状态，右列给出是否可直接作为锚点。

| 比较字段 | 当前公开状态 | 是否可直接作为锚点 |
|---|---|---|
| 公司英文名 / 中文名 | **Manifold AI / 流形空间 / 北京流形空间科技有限公司** 可公开核验。  | **可以** |
| 成立日期 | **2025-05-22**（登记）可核验。  | **可以** |
| 主要公开经营主体 | 北京主体明确；上海/深圳主体存在但角色不明。  | **可以，但需注明边界** |
| 官网公开定位 | next-generation world models for AI hardware applications。  | **可以** |
| 公开模型/项目名 | RoboScape、AirScape、WorldScape、WorldScape Policy；另有 WorldArena、Worldscape-MoE 相关公开痕迹。  | **可以，但要区分官方口径与相关研究** |
| 是否支持实时 world model | WorldScape 有明确 16 FPS/H100 证据。  | **可以** |
| 是否支持 action/control conditioning | 多个公开模型均有。  | **可以** |
| 是否有真实硬件实验 | WorldScape Policy 在 dual-arm PIPER 有公开证据。  | **可以** |
| 是否公开代码/权重/数据 | RoboScape、AirScape、Worldscape-MoE 是“有”；WorldScape/Policy 不清晰或未见。  | **可以** |
| 当前 benchmark 名次 | 只能按具体日期记录，不能做静态常量。  | **仅可日期化使用** |
| 付费客户数、收入、部署规模 | 未公开。  | **必须留空** |
| API/SDK/自助产品形态 | 未发现公开证据。  | **必须留空** |
| 投后估值 | 未公开数值；“独角兽”仅宣传称谓。  | **必须留空** |
| 已落地行业 | 仅能写公开“应用方向”或“Company claim 所称场景”；不能写成客户事实。  | **谨慎使用** |

**Fact / Company Claim / Analyst Inference Ledger**

- **Fact**
  1) 北京流形空间科技有限公司成立于 2025-05-22，官网为 manifoldai.cn。
  2) 官网公开定位是 next-generation world models + AI hardware applications。
  3) 官网当前列出 RoboScape、AirScape、WorldScape、WorldScape Policy。
  4) WorldScape 公开报告可直接支持：实时、3D 一致性、memory、navigation/manipulation control。
  5) WorldScape Policy 公开报告可直接支持：robotic planner、dual-arm physical platform、few-shot、HITL。
  6) AirScape、RoboScape、Worldscape-MoE 分别有公开论文/项目页/代码或权重。

- **Company claim**
  1) “国内第一家自研世界模型作为具身基础模型落地到机器人”“国际领先世界模型公司”。
  2) “成立 1 年完成 6 轮融资，Pre-A 轮累计近 10 亿元，跃升独角兽”。
  3) “WorldScape / WorldScape Policy 在 WorldScore、WorldArena、RoboTwin 均获第一”。
  4) “WorldScape Policy 已在电商物流、3C 制造等场景陆续落地”。
  5) “公司联合国内外数十家科研单位建立 WorldArena”。

- **Analyst inference**
  1) 北京主体是目前最适合作为 Manifold 对外比较锚点的主要经营主体。依据是官网域名/邮箱、工商页官网指向、成立时间和品牌对应关系。
  2) Manifold 与 Tsinghua 系研究力量存在公开的人才/合作交叉。依据是 Worldscape-MoE 作者的双重机构署名，以及 AirScape/WorldArena 的公开作者网络。
  3) WorldScape 是当前最接近公司“公开旗舰基础模型”锚点的对象；WorldScape Policy 是最接近“世界模型驱动机器人策略”的锚点。依据是官网顺序、官方报告完整度和叙事中心位置。

**公开资料冲突、证据缺口与内部确认清单**

- **必须向用户确认**
  1) 后续比较时，是否把 **WorldArena** 视为“Manifold 相关平台资产”，还是只当外部 benchmark。
  2) 是否把 **Worldscape-MoE** 纳入“Manifold 官方产品线”，还是仅作为“相关研究成果”。
  3) 对“融资轮次”是否要求只保留**最稳妥轮次锚点**，还是允许保留“存在公开冲突的早期轮次时间”。

- **最好向 Manifold 内部确认**
  1) 北京、上海、深圳三个主体各自职责。
  2) Seed / Angel / Angel+ 各轮的准确交割时间、单笔金额、累计金额、投资主体映射。
  3) WorldScape 是否公开代码、权重，若没有，WorldScore 上“Open Source”口径如何理解。
  4) WorldScape Policy 的“落地”究竟是 PoC、pilot、paid pilot、production deployment 还是内部测试。
  5) WorldArena 与 Manifold 的实际 ownership / 运营角色。

- **可以继续通过公开研究解决**
  1) 继续追踪 partner-side 是否出现优必选一手公告。
  2) 继续跟踪 WorldScore / WorldArena 当前 leaderboard 的客观变动。
  3) 继续检索 Worldscape-MoE project page、demo 和 model license 的更完整公开材料。

**后续研究不得擅自假设的事项**

- 不得把 **应用方向** 写成 **客户事实**。
- 不得把 **合作签约** 写成 **付费试点、部署或收入**。
- 不得把 **真实硬件 demo** 写成 **生产部署**。
- 不得把 **“独角兽”“国际领先”“行业第一”**写成独立验证结论。
- 不得把 **曾经某日榜单第一** 写成 **当前仍第一**。
- 不得把 **商业登记中的股东出现** 直接等同于 **该轮金额与时间已核验无误**。

**完整来源目录**
以下目录均为本次审计中实际打开过的原始页面；访问日期均为 **2026-07-14**。不再单列裸 URL，直接使用可点击引文。

**一手来源**

| 标题 | 发布机构 | 发布日期 | 支持主张 | 引文 |
|---|---|---:|---|---|
| Manifold AI 流形空间官网 | Manifold AI | 未标注 | 公司定位、官网产品名称、2026-04-30 榜单宣称、联系方式/ICP。 |  |
| WorldScape blog 页面 | Manifold AI | 2026-02-25 | WorldScape 官方定位与关键特征。 |  |
| WorldScape PDF | Manifold AI / WorldScape Team | 2026-04-03 | 16 FPS、3D consistency、memory、navigation/manipulation control。 |  |
| WorldScape Policy PDF | Manifold AI | 2026-02-28 | robotic planner、RGB+depth+action、dual-arm PIPER、few-shot/HITL。 |  |
| WorldScape project site | WorldScape | 可访问时未注明 | 演示页存在与 demo 公开形态。 |  |
| AirScape project page | AirScape / Tsinghua University | 可访问时未注明 | AirScape 任务、数据、代码、数据集公开。 |  |
| RoboScape GitHub | tsinghua-fib-lab | 可访问时未注明 | RoboScape 仓库存在、无 release。 |  |
| WorldArena benchmark site | WorldArena | 可访问时未注明 | Benchmark 定位、指标、action planner/policy evaluator 维度。 |  |
| WorldArena GitHub / HF Space | tsinghua-fib-lab / WorldArena | 2026 持续更新 | 官方 leaderboard / challenge 基础设施存在。 |  |
| Worldscape-MoE arXiv HTML | arXiv | 2026-07-05 | Tsinghua + Manifold 双机构署名、模型定位。 |  |
| Worldscape-MoE HF model card | Hugging Face EmbodiedCity | 2026-07-04 | 公开 model weights、demo、project page 链接。 |  |

**独立来源**

| 标题 | 发布机构 | 发布日期 | 支持主张 | 引文 |
|---|---|---:|---|---|
| 北京流形空间科技有限公司 | 爱企查 | 页面更新 2026-06-23 | 主体名称、成立日期、统一社会信用代码、官网、地址、股东/主要人员。 |  |
| 武伟关联企业页 | 爱企查 | 页面更新 2026-07-14 | 上海/深圳关联主体成立时间；北京主体与武伟关系。 |  |
| WorldScore leaderboard.csv | Hugging Face Space | 文件 3 days ago 更新 | 至 2026-07 的 WorldScore 当前分数/排序文件。 |  |
| Manifold AI流形空间获近亿元天使轮融资 | 投中网经新浪转载 | 2025-10-21 | 天使轮口径、投资方、金额。 |  |
| 流形空间完成超亿元天使+轮融资 | 投中网经新浪转载 | 2026-01-13 | 天使+ 轮口径、投资方。 |  |
| 世界模型公司 Manifold AI 流形空间完成近2亿元 PreA 轮融资 | 界面新闻 | 2026-03-04 | Pre-A 单笔近 2 亿元。 |  |
| Manifold AI流形空间宣布已完成近2亿元PreA轮融资 | 投中网 | 2026-03-04 | 累计近 5 亿元等补充口径。 |  |
| Manifold AI流形空间完成近10亿元Pre-A轮融资 | 华兴资本授权稿经新浪转载 | 2026-06-18 | 新一轮数亿元、Pre-A 累计近 10 亿元、场景落地自述。 |  |
| Manifold AI流形空间与优必选达成战略合作 | 盖世汽车转载页面 | 2026-07-13 | 战略合作事件存在。 |  |

**线索来源**
线索来源仅用于发现原页，不单独支撑重大结论。本次主要包括搜索结果进入的 36Kr 快讯、投中快讯、Taibo/company profiles 等；最终关键结论均已尽量回到上面的一手或较强独立页面。

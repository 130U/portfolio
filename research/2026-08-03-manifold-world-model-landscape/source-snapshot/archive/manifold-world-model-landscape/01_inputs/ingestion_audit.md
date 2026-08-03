# 输入摄取审计

基线状态：`content_lock_v1_1a_revision`（检查点 2 批准继续有效）  
已完成：`phase_0_complete / phase_1_source_recovery_complete / phase_2_complete / checkpoint_2_approved / phase_3_to_5_complete`

## 输入预检

原始五份启动输入与后续用户红队修订意见均可读、非空，已登记在 `input_manifest.csv`；本地源文件记录大小、修改时间与 SHA-256，用户消息记录其权威工作副本哈希。三份 DR 原件保持只读，工作副本已固化到 `01_inputs/deep_research/`。

DR-03 的实际文件名含 `(1)`；权威文件统一使用正式名 `DR-03 大厂项目 平台替代与垂直替代路线.md`。

## 总审计结论

三份 DR 都能完整摄取为 lead memo，但都不能作为证据：

- DR-01：194 行；51 个唯一 `turnXX` 标识、326 次出现；完整 HTTP(S) URL 为 0。
- DR-02：223 行；23 个旧口径对象；99 个唯一 `turnXX` 标识；完整 HTTP(S) URL 为 0。
- DR-03：266 行；70 个唯一 `turnXX` 标识、442 次出现；完整 HTTP(S) URL 为 0。

因此，DR 中的“Fact”“已验证”“核心候选”“高/中/低”“完整来源目录”均不具可迁移证据地位。每一条影响对象资格、漏斗层级、机制、成熟度、固定五席或关键数字的主张都必须按标题、发布机构和日期重新定位并真实打开 canonical source。

## DR-01：Manifold 公开比较锚点

### 可安全摄取的线索

- 临时双镜头：`WorldScape lens` 与 `WorldScape Policy lens`。
- artifact 线索：WorldScape、WorldScape Policy、AirScape、RoboScape、WorldArena、Worldscape-MoE。
- 需要恢复的来源标题：Manifold 官网、WorldScape blog/PDF/project site、WorldScape Policy PDF、相关论文/仓库/榜单、登记与商业事件页面。

### 不可继承或必须解决

- WorldScape 的 16 FPS 与官网 up to 24 FPS 条件不完整，不能合并比较。
- 官网 2026-04-30 的“三榜第一”只能作为日期化公司宣称，不能延续为当前事实。
- AirScape、RoboScape、WorldArena、Worldscape-MoE 的作者机构、artifact owner 与 commercial owner 不能混同。
- 上海、深圳主体的年份表述在 DR 内部冲突；职责与控制关系未知。
- “电商物流、3C 制造落地”、客户、付费、生产部署、收入、API/SDK、估值均不能由 DR 升级为事实。

## DR-02：非中国玩家发现池

旧表 23 个分析单位按 v2.0 做 Phase 0 初筛后形成：

| 状态 | 数量 | 说明 |
|---|---:|---|
| `provisional_discovery_pool` | 8 | 对象类型暂符合，仍须重开原始来源 |
| `eligibility_pending` | 1 | Runway 必须改为公司级资格裁决 |
| `boundary_only` | 13 | VLA、机器人基础模型、仿真/工具链、纯视频或垂直内部组件 |
| `discard` | 1 | 当前没有明确世界模型项目证据 |

DR-02 原始正向或待裁决的 9 个验证输入仅是来源恢复对象，不是 shortlist：World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos、Google DeepMind Genie 3 / Project Genie、Meta V-JEPA family、General Intuition / MIRA、AMI Labs。

`9/13/1` 只保留为 DR-02 原始 23 项输入审计结果。跨来源资格验证/隔离队列另计为 10 个对象：在原 9 个输入之外新增 Overworld 条件对象。原 9 个对象不是完整发现宇宙。World Labs 为纯 3D/renderer 边界风险，General Intuition 仅有虚拟域证据，AMI 为 `Self-positioned-only`，Overworld 为技术/地域资格挑战对象；CP1 不将任何对象直接升级为核心集合。

关键清洗动作：

- 创业公司以公司为分析单位；项目只作公司级资格证据。
- 大厂以具体项目/项目族为分析单位。
- Runway GWM-1 不能按“大厂式项目”独立入池。
- Genesis AI / GENE 与 Genesis World 必须拆分为机器人基础模型和仿真平台。
- Waymo、1X、Dexterity、Waabi、Wayve、FieldAI 的 world model 暂按垂直内部组件处理。
- API、产品阶段、Pilot、Deployment、Revenue 必须拆列。

## DR-03：大厂项目与替代路线

### 强制三分流

- `eligible_bigtech_world_model_seed`：NVIDIA Cosmos；Google DeepMind Genie 3 / Project Genie；Meta V-JEPA family。仅表示进入资格验证，不表示最终资格已通过。
- `page9_boundary`：Gemini Robotics、GR00T、开放 VLA；Isaac/Omniverse、Habitat/PARTNR；Waymo、Wayve、Waabi、Amazon、Tesla 等垂直内生化路线。
- `discard`：Microsoft Magma、Google DeepMind SIMA 及无法证明满足三项技术判据的通用 agent/机器人模型。

### 归因护栏

- Isaac、Omniverse、GR00T、Jetson、LeRobot 只能说明 Cosmos 的生态连接性，不能把自身能力、成熟度、伙伴或部署算给 Cosmos。
- Waymo World Model 只能说明 Genie 3 的技术外溢，不能证明 Genie 的企业可得性或外部采用。
- Gemini Robotics 不属于 Genie 项目族。
- V-JEPA 2 基模、V-JEPA 2-AC、2.1、代码、权重、数据和许可分别核验。

## 不可迁移引用规则

- `turnXXsearch/view`、搜索摘要、AI 综述、裸标题、复合来源行均不得进入 Evidence Ledger。
- 恢复原页时，被支持主张必须一致，且标题、发布机构、日期至少匹配两项。
- 无法唯一匹配时写 `unresolved_source`。
- 多家媒体复用同一新闻稿不构成独立交叉证据。

## 来源恢复完成记录

- 2026-07-14 初版登记 61 个官方/原始来源；红队 v1.1 窄范围修订新增 Overworld、V-JEPA 2.1、Manifold 辅助资产和地域/组件来源，v1.1a 再新增 CogVideoX 基座许可证来源后，当前为 89 个来源、89 张独立来源卡。DR 内旧 `turnXX` 不进入证据账本。
- Manifold 速度口径拆为 24 FPS/单 GPU、16 FPS/H100、6.27 FPS/A800 80GB；测试条件不同或不完整。
- “三榜第一”降为 2026-04-30 历史公司自报；当前 WorldScore 反证已记录，WorldArena/RoboTwin 准确赛道仍 unresolved。
- Cosmos 3、Genie 3/Project Genie、Meta V-JEPA family 均已按 core、adapter/access layer、版本与邻接工具拆分；V-JEPA 2 base、2-AC、2.1 的能力/机器人结果/开放/许可分别归属。
- 完整结果见 `02_anchor/`、`03_universe/`、`04_evidence/` 与 `05_candidates/checkpoint_1_approval_pack.md`。

## 并行审计与写入纪律

- DR-01 Input Auditor：完成；已转入 Anchor 来源恢复。
- DR-02 Input Auditor：完成；已转入 Universe/Eligibility 来源恢复。
- DR-03 Input Auditor：完成；已转入大厂项目与技术来源恢复。
- 子 Agent 均未修改工作区；本文件由 Research Director 统一合并。
- 未产生固定五席、dossier 或 PPT 内容。

## 后续用户裁决登记

- `USER-CP2-RT1`：《检查点 2 红队审批意见 v1.0》，用户文档日期 `2026-07-15`，裁决 `awaiting_revision / P0=0 / P1=4 / P2=3`。
- 该裁决只要求 Gate 3 条件性、Meta core watch、CP2 解锁边界、审批 blocker、九对象非评分表、Runway 组件分栏和采用措辞修订；不要求重跑 Phase 2 或更换五对象。
- 原文、大小、时间与 SHA-256 已登记在 `input_manifest.csv`；当前由 v1.0a 控制补丁累积修订。

- `USER-CP2-APPROVAL`：检查点 2 正式批准，用户裁决日期 `2026-07-15`。
- 唯一有效基线为 `CP2 推荐包 v1.0 as amended by v1.0a`；固定五席为 World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3，结构为 `4+1`。
- 本次批准只解锁五份 dossier、证据刷新、横向比较和独立 Red Team，不自动启动任何工作；Storyboard、页面落版、PPT 与 PDF 冻结至 Content Lock。
- 当前 manifest 共 10 条输入记录。批准原文、大小、时间与 SHA-256 已登记在 `input_manifest.csv`，状态为 `readable_nonempty_applied`。

- `USER-CP2-PROP-CORR`：检查点 2 批准传播勘误，用户裁决日期 `2026-07-15`。
- 该裁决不撤销批准、不重开五席、不生成 v1.0b，也不改变任何 `started` 标志；只定点修正 Runway 入口、Genie 隐性排名、Cosmos 唯一性限定与 Genie/WorldMark 机制归属。
- 传播 QA 记录为：初检 `P0=0 / P1=0 / P2=4`；定点修正后 `P0=0 / P1=0 / P2=0`。
- 当前 manifest 共 11 条输入记录；勘误原文、大小、时间与 SHA-256 已登记，状态为 `readable_nonempty_applied`。

- `USER-CL10-RT1`：《Content Lock 红队合并审批意见 v1.0》，用户文档日期 `2026-07-15`，裁决 `awaiting_revision / P0=0 / P1=8 / P2=6`。
- 该裁决只要求 CEO 内容架构、页面证据映射、NVIDIA 版本、密度、战略收口与治理边界修订；不要求重跑 Phase 3–5、重选五席或启动视觉制作。

- `USER-CL11-RT1`：《Content Lock v1.1 红队复核意见》，用户文档日期 `2026-07-15`，裁决 `awaiting_revision / P0=0 / P1=6 / P2=5`。
- 该裁决限定为 v1.1a 窄范围修订：Page 2 离散分类与 5/4/1 状态、Odyssey 标题和运营配置语义、真实冻结附件、批准原子迁移定义及五项治理勘误；不改变固定五席或研究结论。
- 当前 manifest 共 13 条输入记录；两轮 Content Lock 红队原文、大小、时间与 SHA-256 均已登记，状态为 `readable_nonempty_applied`。当前 manifest 版本为 `1.7`。

- `USER-CL11A-RT1`：《Content Lock v1.1a 红队复核意见》，用户文档日期 `2026-07-15`，裁决 `awaiting_revision / P0=0 / P1=2 / P2=4`。
- 该裁决不重开 Phase 3–5 或固定五席，只要求三处文字 / 映射修订、重建 CSV/XLSX，并以 16 个 canonical 文件名提交单一 `content_lock_v1_1a.zip` 与 `content_lock_v1_1a.zip.sha256`。
- 当前 manifest 共 14 条输入记录；本轮复核原文、大小、时间与 SHA-256 已登记，状态为 `readable_nonempty_applied`。当前 manifest 版本为 `1.8`。

- `USER-SB10-RT1`：《Storyboard v1.0 红队审计意见》，用户文档日期 `2026-07-15`，裁决 `awaiting_revision / P0=0 / P1=3 / P2=5`。
- 该裁决不改变 Content Lock、固定五席、4+1 或严格 10 页，只要求批准链机械闭环、权威状态统一、可复现中文字体、五页语义换行、四页灰盒门、模板边界、开放分区和 World Labs 触发器定点修订。
- 当前 manifest 共 15 条输入记录；本轮原文、大小、时间与 SHA-256 已登记，状态为 `readable_nonempty_applied`。当前 manifest 版本为 `1.9`。

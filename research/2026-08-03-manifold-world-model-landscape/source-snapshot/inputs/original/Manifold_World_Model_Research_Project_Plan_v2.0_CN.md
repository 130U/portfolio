# Manifold 海外世界模型竞争格局与重点公司研究：项目执行计划书

**英文项目名：** Non-China World Model Competitive Landscape & Company Deep Dives  
**版本：** v2.0（三份 DR 完整摄取、可直接启动版）  
**日期与统一研究截止日：** 2026-07-14（Asia/Singapore）  
**当前状态：** 项目设计完成；DR-01、DR-02、DR-03 的重传文字版均已确认可读且非空，DR-03 已完成范围审计；当前进入“原始来源恢复＋检查点 1 准备”阶段。尚未确认最终 5 席，尚未启动正式 dossier、内容生产或 PPT 制作。  
**最终硬限制：** PPT 总页数不超过 10 页，包含封面功能；研究对象仅限非中国世界模型创业公司与非中国大厂的具体世界模型项目。

---

## 0. 本文件怎么使用

本文件既是完整计划书，也是新窗口的执行说明。建议在 ChatGPT 桌面客户端创建一个独立项目或任务，一次性附上本文件与以下三份报告，然后启动一个主任务：

1. `DR-01 Manifold 公开比较锚点.md`
2. `DR-02 非中国玩家发现池与三层漏斗.md`
3. `DR-03 大厂项目 平台替代与垂直替代路线.md`

以上名称为本项目唯一正式名称。后续目录、状态文件、引用记录和沟通均不得擅自改名；可使用 `DR-01`、`DR-02`、`DR-03` 作为短 ID。

上传四份文件后，只需发送：

> 执行附件中的 v2.0。你是本项目唯一 Research Director。先完整摄取三份 DR，完成来源恢复、Manifold 临时锚点、范围清洗、DR-03 分流和合规发现池，并在检查点 1 暂停；不要开始最终五席 dossier 或 PPT。请使用并行子 Agent，但由主 Agent 统一写入权威文件。

新窗口不得要求用户重新讲述本项目背景，不得把计划中的候选名称误当最终 shortlist，也不得在第一次回复里只复述计划而不开始工作。

---

## 1. 运行表面建议：优先使用 ChatGPT Work

### 1.1 建议结论

**建议把本文件和三份报告提交到 ChatGPT 桌面客户端中的 ChatGPT Work，而不是把 Codex 作为本项目的默认主线程。**

理由是本项目的核心工作是多源研究、文件分析、结构化比较、演示文稿与附件交付，而不是软件开发。OpenAI 当前官方说明将 ChatGPT Work 用于 research、analysis、documents、presentations 和 spreadsheets，将 Codex 用于带代码库语境和开发者工具的软件任务；Work 也支持子 Agent、项目文件和长任务，并能在桌面端预览、批注和迭代演示文稿等文件。

官方参考：

- [Quickstart：选择 Work 或 Codex](https://learn.chatgpt.com/docs/quickstart)
- [Get started with Work](https://learn.chatgpt.com/docs/get-started-with-work)
- [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)
- [Projects, chats, and tasks](https://learn.chatgpt.com/docs/projects)
- [Work with files](https://learn.chatgpt.com/docs/artifacts-viewer)
- [Build skills](https://learn.chatgpt.com/docs/build-skills)

### 1.2 推荐的实际运行方式

1. 在桌面客户端新建项目：`Manifold 海外世界模型竞争格局与重点公司研究`；
2. 选择 **ChatGPT Work**；
3. 将本文件和三份 DR 文件附在同一个主任务中；若项目会跨多个任务持续，则也可放入项目 Sources；
4. 先做运行能力预检：附件完整读取、公开网页检索、文件持久写入并重新打开、子 Agent、表格与演示文稿生成；
5. 由一个 Work 主任务担任 Research Director，子 Agent 在该任务下分工；
6. 研究、结构化文件、内容锁定和最终 PPT 均在同一个主项目内完成，避免 Work 与 Codex 各自维护一套相互冲突的事实库。

能力预检的回退规则：

- 子 Agent 不可用：保留相同角色和输出 schema，改为串行执行；
- 文件元数据、修改时间或哈希不可见：记录 `not exposed`，不得编造；
- 无法持久写入并重新打开权威文件：暂停，不得假装已建立可审计工作区；将同四份输入转交 Codex；
- 表格或演示文稿预览不可用：研究阶段不受影响，Content Lock 后再转到具有该能力的同一项目表面。

### 1.3 何时改用 Codex

仅在以下任一情况成立时，把同一套 v2.0 提交给 Codex：

- Work 无法访问或持续写入你指定的本地项目目录；
- 你必须依赖只在本地 Codex 中可见、且没有替代方案的自定义 Skill 或脚本；
- 你希望以 Markdown、CSV、Git 和本地命令行为绝对中心，并愿意在 Content Lock 后再用 Work 做视觉交付。

用户原先安装在本地的 Skills 不应被假设为一定会在 Work 或新版本 Codex 中自动出现。启动时先列出实际可见 Skills；缺失某个第三方 Skill 不得阻塞项目，应回退到原生网页、文件、表格、演示文稿和子 Agent 工作流。

---

## 2. 项目背景与最终定义

### 2.1 背景

Manifold（流形空间）CEO 要求开展一项 desk research，研究海外世界模型公司的情况。需求转述中出现过“分类”，但没有证据证明 CEO 需要抽象分类学，也没有证据证明其唯一目标是威胁评估或投资人叙事。

因此，本项目用一张战略格局图回应“全景与分类”，再用固定 5 个公司或项目单页回答真正有决策价值的问题：谁与 Manifold 的产品、平台或未来市场位置最接近，谁值得持续监控，以及为什么。

### 2.2 正式项目定义

> 研究非中国世界模型创业公司及非中国大厂的具体世界模型项目，建立一张简洁的全球技术与应用格局图；在此基础上，固定选出 5 个对 Manifold 构成产品替代、平台替代、未来市场竞争，或具有强直接对标证据的能力竞争对象，进行公司或项目级深度分析。分类用于保证覆盖和解释选样，不是最终研究目的。

### 2.3 主要受众

- Manifold CEO；
- 公司核心管理层与研发负责人；
- 默认受众已理解世界模型基础概念，不需要行业入门教育。

### 2.4 核心研究问题

1. 海外有哪些合格的世界模型创业公司和大厂世界模型项目？
2. 哪些对象与 Manifold 的任务、产品形态或目标客户类型最接近？
3. 哪些对象可形成产品替代或平台替代？
4. 哪些对象可能在未来 12–24 个月进入 Manifold 所处位置？
5. 重点对象的技术、产品、商业证据和资源禀赋达到什么程度？
6. 每个重点对象通过什么机制影响 Manifold？
7. CEO 应持续监控谁、监控什么信号、什么条件下改变判断？

### 2.5 编辑总规则

> 任何一页若不能回答“谁在做、做到什么程度、证据是什么、与 Manifold 有什么关系”，就删除或移入独立附件。

---

## 3. 最高优先级硬约束

以下条款覆盖本文件中一切可能冲突的内容。

### 3.1 页面与席位

1. 最终 PPT **总页数不超过 10 页，且包含封面功能**。
2. 不设置独立纯封面；第 1 页采用“项目标题＋Executive Answer”合一版式。
3. 第 4–8 页固定为 5 个重点单页，因此最终 shortlist 固定为 **5 个对象**。
4. 席位结构固定为：**3–4 家非中国世界模型创业公司＋1–2 个非中国大厂具体世界模型项目**。
5. 超出 5 个的合格对象只在第 9 页集体呈现，不得新增页面。

### 3.2 对象范围

允许对象只有两类：

- 总部和主要经营主体不在中国大陆，且世界模型是其明确核心产品、平台或公司战略的创业公司；
- 非中国大厂内部具有明确边界的具体世界模型项目、模型、平台或产品。

范围规则：

- 中国大陆公司一律排除；Manifold 只作比较锚点，不占 PPT 页面或重点席位；
- 香港、台湾、新加坡按本项目操作口径纳入扫描，但必须分别保留地域标签；此口径仅用于项目样本筛选，不构成政治或法律判断；
- 创始人国籍不作为自动排除条件；总部、主要经营主体和项目归属是主要判断依据；
- 大厂必须以具体项目为研究单位，例如 `NVIDIA Cosmos`，不能笼统研究整个 NVIDIA。

### 3.3 类别外对象

以下对象不得作为独立研究对象，不占重点席位，不做独立 dossier，不获得专属页面：

- VLA；
- 机器人基础模型；
- 仿真或合成数据平台；
- 纯视频生成；
- 纯 3D 资产生成；
- 仅把世界模型作为内部组件、但公司自身不是世界模型创业公司的垂直业务公司。

如这些路线确有替代风险，只能在第 9 页底部做一条可删除的类别级短注。页面容量或范围发生冲突时，这条短注最先删除。

### 3.4 明确不做

- 不用正文两三页解释“什么是世界模型”；
- 不做 TAM、SAM、SOM；
- 不写通用 AI 或 Physical AI 趋势教育；
- 不把融资、估值或创始人名气当作竞争力代理；
- 不把 Demo 当产品、合作当客户、试点当规模部署；
- 不以传统上下游图强行解释跨层玩家；
- 不为了展示 Skills 而调用无关工作流；
- 不在固定五席确认前制作公司单页；
- 不在 Content Lock 前制作正式 PPT。

### 3.5 交付语言与数据口径

- Deck 使用中文；公司、产品、项目、模型、论文保留官方英文名称；
- 全 Deck 使用统一 as-of 日期：默认 `2026-07-14`，如最终制作日进行统一刷新，应一次性更新全部页面和附件；
- 海外融资统一换算为美元，并同时注明原币种、汇率日期和来源；
- “未发现公开证据”只能表示本次公开检索未检出，不能写成对象不存在该能力或客户。

---

## 4. 当前输入状态与 Day 0

### 4.1 已提供输入

| ID | 正式名称 | 在项目中的用途 | 证据地位 |
|---|---|---|---|
| DR-01 | Manifold 公开比较锚点 | 构建临时比较锚点、未知项和来源恢复队列 | Lead memo，不可直接引用 |
| DR-02 | 非中国玩家发现池与三层漏斗 | 高召回发现、初始实体池、边界案例和候选线索 | Lead memo，不可直接引用 |
| DR-03 | 大厂项目 平台替代与垂直替代路线 | 提取合格的大厂具体世界模型项目；验证平台替代因果链；隔离类别外替代路线 | 已确认可读且非空；Lead memo，不可直接引用 |

### 4.2 输入完整性预检

新窗口必须先完成以下检查：

1. 逐一确认四份附件可读、非空、名称正确；若上传系统自动添加 `(1)` 等副本后缀，应在 `input_manifest.csv` 保留实际上传名，同时映射到本计划规定的正式名称，不得把后缀写入后续权威文件；
2. 记录文件名、文件大小、修改时间和哈希到 `input_manifest.csv`；运行表面未暴露的元数据写 `not exposed`，不得猜测；
3. 若任一报告为空或损坏，不得推断其内容；在 `ingestion_audit.md` 标记，并继续处理其余可读输入；
4. 当前三份重传 DR 均已通过非空预检；新窗口若因传输导致任一文件不可读，只报告该次传输问题并请求补传，不得据此回退为“原报告为空”；
5. 若 DR-01 不可读，只能用 Manifold 官方页面、原始论文、项目页和公开登记资料定向重建临时锚点，并标记 coverage gap；
6. 若 DR-02 不可读，不得声称发现池覆盖完整；先请求重传，未获得前只提交标记为 `incomplete` 的检查点 1 审批包；
7. 来源打不开、付费墙或权限受限时，记录 `unresolved_source`，寻找等价一手或独立证据；仍无法恢复的主张不得进入 Evidence Ledger 或固定五席依据；
8. 不允许因为一份输入失败而自行启动另一份宽泛 Deep Research 来替代；
9. 三份 DR 原件只读、不改名、不覆写；需要加工时创建工作副本，保留原件与工作副本映射。

### 4.3 Day 0 用户内部输入状态

用户目前没有额外内部材料可补充。因此项目应创建：

`01_inputs/user_materials/day0_internal_input.md`

并将以下字段明确记录为 `未知 / 未提供 / 不得推断`：

1. Manifold 当前优先目标客户类型与采购者；
2. 当前主要交付形态，例如 API、SDK、权重、on-prem、项目集成或 OEM；
3. 当前商业化阶段，例如 Demo、PoC、paid pilot、production 或 revenue；
4. 未来 12–24 个月产品和市场方向；
5. Deck 保密红线与内部数据可披露范围。

默认保密策略是：只使用公开资料；不猜测内部客户、收入、部署、融资或路线图。内部输入缺失不阻止项目启动，但所有竞争接近度与未来市场判断必须写成条件性结论，并在检查点 1 说明受影响的判断。

---

## 5. 三份 DR 的安全摄取规则

### 5.1 总规则

三份 DR 均是 **lead memo**，不是 Evidence Ledger，也不是最终 PPT 来源。

强制规则：

1. 不得引用 DR 正文作为证据；
2. 不得把 DR 内部的 `turnXXsearch`、`turnXXview` 等会话引用复制到最终文件；这些引用在新窗口不可迁移；
3. 每一条会影响候选资格、固定五席、机制标签、优先级、页标题或关键数字的主张，都必须重新打开底层原始来源；
4. 重新记录 canonical URL、页面标题、发布机构、发布日期或更新时间、访问日期、版本或 commit、关键段落或页码；
5. 搜索摘要和 AI 综述只能帮助发现原页，不能入账；
6. 多家媒体复用同一新闻稿不构成独立交叉证据。
7. 恢复某个 `turnXX` 所对应原页时，被支持主张必须一致，且页面标题、发布机构、日期至少再匹配两项，方可认定为同一 canonical source；无法唯一匹配时保持 `unresolved_source`。

### 5.2 DR-01 的可用价值与已知风险

DR-01 可用于提出一个**临时双镜头 Manifold 锚点**：

- **Anchor A：WorldScape lens**——实时、action-conditioned、空间与物理世界建模；
- **Anchor B：WorldScape Policy lens**——世界模型驱动的机器人规划、评估或策略学习。

RoboScape、AirScape、WorldArena、Worldscape-MoE 暂时列为“Manifold 相关公开 artifact，归属待确认”。在商业所有权、产品归属或公司官方口径未重开核验前，不得用它们定义竞争集合。

DR-01 暴露出的关键方法问题必须进入冲突队列：

- 摘要称上海、深圳关联主体在 2026 年新增，正文却给出 2025 年成立日期；该冲突不得被摄取；
- 公司论文或项目页能证明 artifact 存在和作者报告过某结果，不能自动升级为独立验证的技术事实；
- WorldScape 的 16 FPS 与 24 FPS 等口径必须同时核对硬件、分辨率、上下文、任务和测量条件；
- 榜单名次必须固定到日期、版本、主指标和类别，不能把某日公司宣称延续为当前事实；
- 官网应用方向不是客户名单；合作不是付费或生产部署；“独角兽”不是已验证估值；
- 商业数据库不是国家登记原始页面；参保人数不能当团队规模；作者机构署名不等于商业所有权。

### 5.3 DR-02 的可用价值与已知风险

DR-02 提供了高召回发现线索，但它的“23 个发现对象、11 个核心候选、12 个优先补证对象”基于旧的宽口径，不能直接沿用。

摄取时必须：

1. 统一分析单位，拆分公司、具体项目、内部垂直能力、研究项目和平台；
2. 对 23 个对象逐一增加 `scope_status`、`object_type`、`eligibility_reason` 和 `exclusion_reason`；
3. 把 VLA、机器人基础模型、仿真或数据平台、纯视频、纯 3D 和垂直公司内部 world-model component 移入边界日志；
4. 重新判断四种竞争机制，每个机制必须对应具体证据，不能批量全选；
5. 将 `API`、`产品阶段`、`Pilot/Deployment` 和 `Revenue` 拆成独立字段；
6. 把不完整日期、地域不确定和“未见重大对华关系”等表述改为可审计口径。

### 5.4 DR-03 的处理方式

DR-03 已完整到位，不需要重跑。它对 v2.0 的主要价值不是扩大名单，而是提供三个合规大厂候选种子、平台替代的验证链、反证和监控阈值。它仍只是 Lead memo：文内 `turnXX` 引用不可迁移，搜索摘要不得入账，官方能力、伙伴和采用表述默认按 `Company-reported` 处理。

摄取后逐对象分流如下：

| 分流 | DR-03 的当前结果 | 后续处理 |
|---|---|---|
| `eligible_bigtech_world_model` | `NVIDIA Cosmos`；`Google DeepMind Genie 3 / Project Genie`；`Meta V-JEPA 2 / V-JEPA 2-AC` | 进入统一大厂候选验证池；均不是预定席位 |
| `page9_boundary` | VLA/具身推理，例如 Gemini Robotics、GR00T；仿真与工具链，例如 Isaac Sim/Lab、Omniverse、Habitat/PARTNR；垂直内生化，例如 Waymo World Model、Amazon、Tesla 和 AV 路线；开放 VLA 路线 | 只允许汇总为第 9 页最多三类、每类一句风险＋一个升级触发器；不得逐对象展示或评分 |
| `discard` | 不能证明满足三项世界模型技术判据、仅为通用 agent/机器人模型，或对决策价值过低的项目，例如 Magma、SIMA 等 | 不再消耗研究资源；除非出现会改变资格的新一手证据 |

三个合格名称都是“分析项目族”，而不是把所有组件合并成一个成熟度：

- `NVIDIA Cosmos`：分别核验 Cosmos 3、Transfer、NIM 等组件，再形成项目族判断；Isaac、Omniverse、GR00T 只可证明生态连接性，不能把自身能力、成熟度或部署成绩算作 Cosmos 的成绩；
- `Google DeepMind Genie 3 / Project Genie`：Genie 3 是世界模型核心，Project Genie 是访问或产品化证据；Gemini Robotics 与 Waymo 只可作为相邻栈或垂直外溢上下文；
- `Meta V-JEPA 2 / V-JEPA 2-AC`：基础模型、action-conditioned 后训练版本、代码、权重和许可证分别核验；V-JEPA 2.1 作为时效更新线索，不自动证明商业进入。

DR-03 中的比较级结论——例如“最完整”“最直接”“最大压力”——全部降为待验证假设。合作可能性也不得驱动资格或 shortlist。

只有当以上三者因来源核验而不足以形成合规大厂竞争池时，才允许做一次**窄范围补搜**：“非中国大厂的具体世界模型项目”；不得再运行宽泛替代路线 DR。

### 5.5 补充研究任务边界

第四份宽泛 Deep Research 已取消。DR-01、DR-02、DR-03 已共同覆盖临时锚点、发现池和大厂候选种子；下一步不是继续扩张情报面，而是由客户端中的 Candidate Agents 对最多 10 个对象做定向来源恢复、资格和真实性核查。

只有在某一具体候选存在会改变固定五席的窄问题时，才允许启动一个单对象或单命题的补充研究任务。补充任务必须先写明：待决策问题、所需证据、停止条件和为何普通网页核验不足。

---

## 6. Manifold 临时比较锚点设计

Manifold 不占 PPT 页面，但必须作为内部比较基准。`manifold_anchor.md` 需同时保留公共资料层与未知层。

### 6.1 两个比较镜头

| 镜头 | 关注问题 | 对海外对象的核心比较维度 |
|---|---|---|
| WorldScape lens | 对方是否能替代实时、交互、action-conditioned 的空间或物理世界模型能力 | 状态演化、action/control modality、持续状态/记忆、实时性、3D/depth、物理一致性、开放形态 |
| WorldScape Policy lens | 对方是否能替代世界模型驱动的机器人规划或策略学习；只有原始来源明确支持时才纳入评估能力 | world-to-action、真实硬件实验、闭环规划或策略、客户任务、交付与采用证据 |

最终每个重点对象必须标注主要使用哪个 lens 比较，或两者均适用。若 Day 0 仍无内部输入，不能擅自给两个 lens 设置权重。

在关键 Manifold 原始来源重新打开前，两个临时 lens 不得用于排除候选。Day 0 的客户、交付与未来方向仍未知时，产品替代与未来市场竞争最多标为 `provisional / conditional`。

### 6.2 Anchor Schema

锚点必须区分 company-level 与 project-level 字段：

- `anchor_lens`
- `company_entity`
- `project_or_artifact`
- `artifact_owner`
- `author_affiliation`
- `commercial_owner`
- `target_job_to_be_done`
- `buyer_or_customer_type`
- `state_evolution`
- `action_or_control_modality`
- `persistence_or_memory`
- `spatial_3d_depth`
- `physics_consistency`
- `speed_metric`
- `speed_test_conditions`
- `real_hardware_evaluation`
- `delivery_access_license`
- `adoption_evidence`
- `commercial_stage`
- `public_or_internal`
- `claim_type`
- `verification_status`
- `as_of_date`
- `unknown_or_conflict`

### 6.3 可比技术指标的纪律

任何 FPS、latency、分辨率、rollout 时长、环境规模、机器人成功率或 benchmark 分数，只有同时记录以下条件后才可进入横向比较：

- 模型或产品版本；
- 硬件；
- 输入和输出分辨率；
- 上下文与 rollout 长度；
- 交互或控制频率；
- 数据集、场景和任务；
- 评测版本与主指标；
- 是否为公司自报、独立复现或客户侧数据。

条件不同的数字只能并列说明，不能直接排序。

---

## 7. 三层漏斗、技术门槛与竞争机制

### 7.1 三层漏斗

| 层级 | 标准 | 主 PPT 处理 |
|---|---|---|
| 发现池 | 符合对象类型，且公司自称或被行业频繁称为世界模型公司或项目 | 用于防漏，不自动进入正文 |
| 相邻集合 | 只满足部分技术判据，证据薄弱，或只有泛化能力竞争 | 第 2 页或第 9 页集体呈现 |
| 核心集合 | 满足三项技术判据，并满足收紧后的战略关系门槛 | 才能竞争固定 5 席 |

核心技术判据：

1. 学习或预测环境状态及其演化；
2. 能响应行动、控制信号或持续交互；
3. 面向物理世界、具身任务、实时仿真或空间行动。

仅自称但缺乏技术证据者标记：`Self-positioned only / 尚无充分技术证据`。

### 7.2 核心集合的战略关系门槛

必须满足下列至少一项：

- 产品替代；
- 平台替代；
- 有证据支撑的未来市场竞争；
- 能力竞争具有强直接对标证据，例如同一或可比评测体系、具名直接人才重叠、具名直接投资人重叠。

仅有论文影响、公司知名度、融资叙事、母公司资源或宽泛技术相似性的能力竞争，不能单独构成核心集合门槛。

### 7.3 四种竞争机制

| 机制 | 可审计定义 | 最低证据要求 |
|---|---|---|
| 产品替代 | 对方已有可获得产品，能完成 Manifold 面向客户承担的同一任务 | 明确任务、产品形态、获得方式与现实使用路径 |
| 平台替代 | 合格世界模型项目通过可获得的权重、API 或产品，并连接数据、后训练、评测和部署路径，使客户能现实完成原本需要独立世界模型供应商承担的任务 | 同时具备项目本身的可用性或许可证据、同一客户任务、完整绕行路径与剩余集成摩擦；关联工具链只证明路径完整性，不能作为独立对象，也不能替代项目本身的采用证据 |
| 能力竞争 | 在同一能力、评测、人才或资源争夺中形成直接对标 | 可比评测或具名直接重叠；泛化相似不足 |
| 未来市场竞争 | 未来 12–24 个月可能进入同一地域、客户或产品位置 | 公开路线图、招聘、伙伴、产品动作或进入证据；不能只因“有能力”推断 |

机制可多选。另设独立战略优先级：

- 核心关注
- 高潜在威胁
- 相邻观察
- 生态或合作对象

机制、优先级和漏斗层级不得合并为一个标签。

平台替代另记录四个非评分阶段：

`集成宣示 → 可运行组件 → 可复现外部工作流 → 生产采用或默认标准`

前两档只能支持平台替代假设；后两档方可支持较强判断。硬件、云、数据、标准、总集成成本和厂商锁定既可能增强平台控制，也可能成为反证，必须同时呈现。

---

## 8. 候选验证池 v0.2：三份报告线索，不是 shortlist

以下名单只用于启动资格与证据验证。它来自 DR-02 的范围过滤，并已摄取 DR-03 的合规大厂种子；不得写进 PPT，除非经过来源重开和检查点批准。

| 对象 | 暂定对象类型 | 当前状态 | 来源重开状态 | 需要解决的核心问题 |
|---|---|---|---|---|
| World Labs | 世界模型创业公司 | 优先验证 | DR-02 线索已摄取；原始来源待重开 | World API、交互式 3D 世界与 robotics workflow 是否形成现实产品或平台替代；真实采用深度如何 |
| Odyssey | 世界模型创业公司 | 优先验证 | DR-02 线索已摄取；原始来源待重开 | General world model 产品线与 API 的实际可得性、客户流程和 physical-world 证据 |
| Decart / Oasis 3 | 世界模型创业公司 | 优先验证 | DR-02 线索已摄取；原始来源待重开 | action-conditioned API、持续稳定性、跨场景泛化与真实客户采用 |
| NVIDIA Cosmos | 大厂世界模型项目族 | 优先验证，但不预占席位 | DR-02/03 线索已摄取；原始来源待重开 | 分组件验证开放、许可、产品化、采用、跨硬件和 TCO；不得把 Isaac、GR00T、Omniverse 的能力或采用直接归给 Cosmos |
| Google DeepMind Genie 3 / Project Genie | 大厂世界模型项目族 | 优先验证，但不预占席位 | DR-02/03 线索已摄取；原始来源待重开 | 验证企业可得性、原型限制、持续交互、action/control 和 12–24 个月进入证据；消费者原型不等于企业产品 |
| Meta V-JEPA 2 / V-JEPA 2-AC | 大厂世界模型项目族 | 资格与战略门槛验证 | DR-02/03 线索已摄取；原始来源待重开 | 寻找强直接对标、可商用权利、稳定部署、外部采用或明确市场进入；只有论文和开放权重则降为相邻集合 |
| Runway（GWM-1 作为公司级证据） | 公司级范围待裁决 | 资格裁决 | DR-02 线索已摄取；原始来源待重开 | 必须证明世界模型已成为 Runway 的核心产品、平台或公司战略，并与 Gen-4/4.5 等纯媒体产品分开；否则移入边界日志 |
| General Intuition / MIRA | 条件性世界模型创业公司 | 资格裁决 | DR-02 线索已摄取；原始来源待重开 | 从游戏/虚拟交互向 physical-world world model 的证据是否足够 |
| AMI Labs | Self-positioned 世界模型创业公司 | 发现池观察 | DR-02 线索已摄取；原始来源待重开 | 是否已有论文、模型、代码、产品、评测或明确项目，而非只有公司宣示 |

候选池规则：

1. 上限为 10 个；新发现对象只能替换或与现有对象竞争，不能无限扩张；
2. DR-03 已提供三个合规大厂种子，默认不再启动额外大厂扫描；来源核验导致候选不足时才做窄搜；
3. NVIDIA Cosmos 只是优先验证的平台替代假设，不是预定席位；
4. 若最终保留一个或两个大厂席位，Cosmos、Genie 3 / Project Genie、V-JEPA 2 / 2-AC 必须按同一标准竞争；若保留两个，应优先形成机制互补，而不是为了母公司名气选样；
5. 若对象只通过泛化能力竞争，不进入核心集合；
6. 若合格对象不足 5 个，不得以类别外对象凑数，应报告“候选池不足”并进行窄范围补搜。

### 8.1 明确隔离的对象类型

DR-02 中出现的以下类别不得进入候选验证池或最终五席：

- 1X、Dexterity、Waabi、Wayve、FieldAI 等垂直业务公司内部的 world-model component，除非重新证明公司本身符合“世界模型创业公司”定义；
- Waymo World Model 等服务于单一垂直业务的内部仿真能力；
- Gemini Robotics、Physical Intelligence、Genesis AI、RLWRLD 等 VLA 或机器人基础模型；
- Applied Intuition、Genesis World、Antioch、XDOF、ThreeDWorld 等仿真、数据或工作流基础设施；
- Sora、Luma Ray、Runway Gen-4/4.5 等纯视频或媒体生成产品。

这些名称只能留在 `boundary_log.md`。最终第 9 页如需提醒替代风险，应优先用类别级表达，避免变成第二个 Logo 墙。

### 8.2 DR-03 大厂候选的统一证伪问题

三个大厂候选必须回答同一组问题：

1. 是否满足状态演化、行动或持续交互、物理或空间任务三项判据？
2. 当前各组件分别属于 Research、Demo、Public preview、Private/partner preview、Downloadable artifact、GA API/Product、Pilot、Internal production 或 External paid production 的哪一档？
3. 权重、API、SDK、代码、数据、模型输出、再分发和商业使用分别受什么许可或条款约束？
4. 是否能完成 Manifold 面向客户的同一任务，客户如何现实绕开独立供应商？
5. 伙伴、测试者、技术集成、付费使用和生产部署分别有什么证据？
6. 硬件、云、数据、标准、地域和总体集成成本构成什么摩擦？
7. 当前最强反证是什么；什么公开事件会在 12–24 个月内使机制升级或降级？

任何一个项目族的组件成熟度不得合并取最高值；生态栈的整体替代判断必须另建一条 `Analyst inference`。

---

## 9. 证据体系

### 9.1 主张类型

每条重要主张必须标注：

- `Fact`：可由原始页面直接证明的存在、日期、文本或事件事实；官方页面首先证明“该机构发布或表述了什么”，不自动证明其性能、采用、ROI 或领先性；
- `Company-reported`：公司、作者、交易相关方或项目方报告的能力、指标、客户或进展；
- `Independent evidence`：独立第三方、客户方、公开登记、复现或可核验使用证据；
- `Analyst inference`：分析师基于已列证据推导的判断。

公司论文中的性能数字默认属于 `Company-reported technical result`，不是独立验证。官网可以证明“公司如此定位或宣称”，不能自动证明行业领先、客户采用或商业结果。

DR-03 原文中的 `Fact` 标签不得继承。尤其是“最完整”“最直接”“客户不必采购”“伙伴采用”“已部署”等，必须拆成原始来源可证明部分与 `Analyst inference`，并在统一候选池完成后才允许写比较级。

### 9.2 Evidence Ledger 入账阈值

只把“决策承载型主张”写入 Evidence Ledger：

- 会出现在 PPT 页面；或
- 驱动对象资格、固定五席、机制标签、优先级、三维成熟度或页标题。

普通背景事实保留在 dossier 的行内引用中。Red Team 对 Evidence Ledger 100% 核验，对 dossier 正文按规定抽样。

### 9.3 Evidence Ledger 最低字段

```text
claim_id
object_id
component_or_version_id
claim_text
claim_type
decision_use
source_id
source_type
source_title
publisher
canonical_url
publication_or_update_date
access_date
version_or_commit
page_or_section
supporting_excerpt_or_paraphrase
verification_status
independent_cross_evidence
conflict_or_limit
license_scope_if_applicable
owner_agent
last_checked_at
```

所有 URL 在 Red Team 放行前执行一次“可解析测试”：必须能在新客户端直接打开并定位支持内容；只有 `turnXX`、搜索结果标识、标题而无 URL，或无法唯一恢复的记录均视为未通过。

### 9.4 三维成熟度

不得把技术证据、外部可获得性和商业采用压成一个线性阶段。每个对象分别记录三项：

| 字段 | 分级 | 最低判断规则 |
|---|---|---|
| `technical_evidence_stage` | Research / Demo / Validated system | Research＝论文、模型卡、代码或权重；Demo＝功能演示；Validated system＝在明确任务与条件下完成系统级或真实硬件验证。公司自报与独立验证另行标注 |
| `external_access_stage` | Unavailable / Research artifact / Public demo / Public preview / Private or partner preview / Downloadable artifact / GA API or Product / Open weights / Licensed product | 必须有当前可核验的访问、文档、许可或服务条款；不同开放形态可以并列，不强行排序；项目族每个组件分别记录 |
| `commercial_adoption_stage` | No public evidence / Collaboration / PoC / Pilot / Paid pilot / Production deployment / Revenue evidence | 每一级分别保留；合作不自动升级为试点，试点不自动升级为付费、生产部署或收入 |

同一对象可能技术证据强、外部访问弱、商业采用不透明。任何页面和比较表都必须显示三个独立字段，不得再使用单一“公开证据阶段”概括全部状态。

内部生产与外部商业采用必须分开：内部系统用于生产不能升级为外部 `Pilot / Paid pilot / Production deployment / Revenue evidence`，除非存在可核验的第三方客户关系。

### 9.5 客户、合作与融资

- 官网“面向机器人、无人机、XR”只证明应用方向，不是客户名单；
- 合作、MoU、联合研究、PoC、pilot、paid pilot、production deployment、revenue 必须分别记录；
- 单笔交割、同一轮累计、历史累计、投后估值必须拆开；
- “独角兽”“领先”“第一”默认是宣传性称谓，除非有独立数值或可比证据；
- 投资方、人才或客户重叠必须具名，不能靠模糊关联推断。

许可必须按组件拆分：代码、权重、训练数据、模型输出、API/SDK、再分发和商业使用分别记录。`Open weights`、`ready for commercial use`、开源许可证和已商品化是不同主张，不能互相替代。

### 9.6 产品试用边界

仅试用公开或免费层级：

- 遵守服务条款；
- 不绕过地区、账户、付费或技术限制；
- 记录日期、产品版本、输入、输出、截图和限制；
- 试用只证明该时点的公开体验，不证明技术上限、内部版本或商业部署能力。

---

## 10. 最终交付物与权威文件

### 10.1 最终交付物

1. `company_universe.xlsx`：合规发现池、三层漏斗和边界日志；
2. `evidence_ledger.xlsx`：决策承载型主张与来源；
3. `manifold_anchor.md`：临时公共锚点、双镜头、冲突和未知项；
4. 固定 5 份重点公司或大厂项目 dossier；
5. `competitive_matrix.xlsx`：横向比较、机制标签和战略优先级；
6. `monitoring_matrix.xlsx`：对象 × 信号 × 触发阈值 × 渠道 × 频率 × 触发后动作；
7. `red_team_report.md` 与问题修订记录；
8. `deck_content_review.md`：逐页完整内容审查稿；
9. 总页数不超过 10 页、含封面功能的可编辑 PPT；
10. 独立于 PPT 的方法、完整来源、发现池和 Red Team 附件；dossier 永远只做固定五席的 5 份。

附件不占 PPT 页数，但不得以附件为名制作隐藏第 11 页。

### 10.2 推荐目录

```text
manifold-world-model-landscape/
├── AGENTS.md
├── README.md
├── 00_brief/
│   ├── project_charter.md
│   ├── research_manual.md
│   ├── decision_log.md
│   └── project_state.json
├── 01_inputs/
│   ├── input_manifest.csv
│   ├── ingestion_audit.md
│   ├── user_materials/
│   │   └── day0_internal_input.md
│   └── deep_research/
│       ├── DR-01 Manifold 公开比较锚点.md
│       ├── DR-02 非中国玩家发现池与三层漏斗.md
│       └── DR-03 大厂项目 平台替代与垂直替代路线.md
├── 02_anchor/
│   └── manifold_anchor.md
├── 03_universe/
│   ├── company_universe.csv
│   ├── company_universe.xlsx
│   ├── eligibility_register.csv
│   └── boundary_log.md
├── 04_evidence/
│   ├── source_reopen_queue.csv
│   ├── evidence_ledger.csv
│   ├── evidence_ledger.xlsx
│   ├── claims_queue.csv
│   └── product_test_notes/
├── 05_candidates/
│   ├── candidate_validation_pool.md
│   └── candidate_memos/
├── 06_dossiers/
├── 07_synthesis/
│   ├── shortlist_memo.md
│   ├── competitive_matrix.csv
│   ├── competitive_matrix.xlsx
│   └── monitoring_matrix.xlsx
├── 08_content/
│   ├── deck_content_review.md
│   └── slide_evidence_map.xlsx
├── 09_red_team/
│   ├── red_team_report.md
│   └── issue_register.xlsx
└── 10_deck/
    ├── deck_storyboard_v1.pptx
    ├── deck_storyboard_v1.pdf
    ├── final_deck.pptx
    ├── final_deck.pdf
    ├── source_appendix.pdf
    └── qa_checklist.md
```

Markdown 和 CSV 是可版本化、可合并的权威数据层；XLSX 和 PPTX 是审阅与交付层。只有 Lead 可以修改主表、shortlist、机制标签和逐页内容稿。

### 10.3 权威文件优先级

| 决策域 | 唯一权威文件 | 派生文件或说明 |
|---|---|---|
| 项目章程与硬约束 | 本 v2.0 / `project_charter.md` | 后续文件不得覆盖其硬约束 |
| 当前阶段与下一步 | `project_state.json` | 状态消息不是权威记录 |
| 用户批准与范围裁决 | `decision_log.md` | 检查点口头结论必须先回写 |
| 对象资格与排除 | `eligibility_register.csv` | `company_universe.xlsx` 为审阅视图 |
| 发现池 | `company_universe.csv` | XLSX 单向生成，不反向覆盖 CSV |
| 决策承载型主张 | `evidence_ledger.csv` | XLSX 为审阅视图 |
| 固定五席 | 用户批准后的 `shortlist_memo.md` | 批准前的候选 memo 不具权威性 |
| 页面文本与结论 | Content Lock 后的 `deck_content_review.md` | PPT 只能从锁定内容派生 |
| 演示文稿 | `final_deck.pptx` | 不得反向创造研究事实 |

发生冲突时，按上表的权威文件裁决；CSV/Markdown 胜于其 XLSX/PPT 派生版本。

### 10.4 状态、幂等与中断恢复

`project_state.json` 至少包含：

```text
project_id
plan_version
phase
status: running | awaiting_user | blocked | complete
last_completed_step
open_blockers
next_action
approved_checkpoint
artifact_versions
input_manifest_version
as_of_date
updated_at
```

恢复协议：

1. 每次新任务或恢复运行，先读取 `project_state.json`、`decision_log.md` 和 `input_manifest.csv`；
2. 检查已完成产物是否存在且版本匹配，从 `last_completed_step` 继续；
3. 不得重新初始化或覆盖已批准的 canonical files；
4. 输入原件保持只读；canonical files 采用版本号或原子替换，写入成功后再更新状态；
5. 每次检查点批准、阻塞、来源重大冲突和阶段完成后，立即更新状态；
6. 用户未明确批准时，状态保持 `awaiting_user`，沉默不得视为批准。

### 10.5 Universe 主表不超过 10 个核心字段

```text
canonical_object
object_type_and_location
core_world_model_product
primary_task_or_application
three_technical_criteria
access_and_maturity
scope_status_and_funnel_layer
competition_mechanisms
latest_evidence_date_and_confidence
decision_status_and_reason
```

团队、融资、投资方、客户证据、来源明细、对华关系和冲突等放入附表，不让发现池主表失控。

---

## 11. 多 Agent 分工与运行波次

### 11.1 角色

| 角色 | 负责 | 不负责 |
|---|---|---|
| 用户 / Project Owner | 批准范围、检查点 1、固定五席、Content Lock 和最终验收 | 不需要手工整理底层来源 |
| Research Director / Lead | 唯一口径、分工、合并、冲突裁决、shortlist 建议和最终叙事 | 不把子 Agent 输出直接拼接成结论 |
| Input & Source Recovery Agent | 输入审计、实体消歧、恢复 canonical URL 和来源队列 | 不做最终战略判断 |
| Manifold Anchor Agent | 双镜头锚点、公开事实、未知与冲突 | 不调查完整竞品宇宙 |
| Universe & Eligibility Agent | 范围清洗、三层漏斗、边界日志 | 不决定最终五席 |
| Technical Evidence Agent | 论文、模型卡、GitHub、文档、技术可比性 | 不把公司自报指标当独立事实 |
| Candidate Agent | 单对象资格、机制和真实性定向核查 | 不写最终公司页 |
| Company Agent | 固定五席后的标准化 dossier | 不自行决定机制或优先级 |
| Red Team Agent | 事实、来源、遗漏、选择偏差、相反证据 | 不参与前期结论生成 |
| Deck Architect | Content Lock 后的信息设计、PPT、渲染和视觉 QA | 不引入新事实或改变结论 |

### 11.2 保守四并发波次

即使产品允许更多并发，也默认使用“1 个 Lead＋最多 3 个子 Agent”，降低上下文污染和并行写冲突。

- **Wave 0：** Lead＋三个 DR Input Auditor，一份报告一个 Agent；DR-03 Auditor 必须额外输出三分流表、项目族组件表和不可迁移引用审计；
- **Wave 1a：** Lead＋Anchor＋Universe/Eligibility＋Source Recovery；
- **Wave 1b：** 任一 1a 子任务完成后释放槽位，启动 Technical Evidence；Technical 只核验已通过初步资格或待裁决对象；
- **Wave 2：** Lead＋三个 Candidate Agents，最多 10 个对象分批；
- **Wave 3：** Lead＋一个创业公司试点 dossier＋一个大厂项目试点 dossier＋Technical Reviewer；
- **Wave 4：** Lead＋三个 Company Agents，完成剩余重点对象；
- **Wave 5：** Lead＋技术红队＋商业事实红队＋选样与叙事红队；
- **Wave 6：** Content Lock 后，Lead＋Deck Architect＋来源 QA＋视觉 QA。

### 11.3 并行写入规则

- 子 Agent 只写自己的独立目录或返回结构化片段；
- Lead 是唯一可以合并进 canonical files 的角色；
- 不允许多个 Agent 同时编辑同一个 XLSX 或 PPTX；
- 每次合并更新 `decision_log.md` 和 `project_state.json`；
- 子 Agent 必须返回：结论、证据、反证、未知、建议状态、来源恢复结果；
- 子 Agent 不得用自己的偏好重定义项目范围。

子 Agent 统一返回 schema：

```text
object_id
task_scope
proposed_status
claim
claim_type
supporting_evidence
counterevidence
unknown_or_conflict
source_title
publisher
canonical_url
publication_date
access_date
source_reopen_status
recommended_next_action
```

### 11.4 Skills 白名单

启动时列出实际可用 Skills，并优先核验以下名称或功能是否存在：

- `research-codex-zh`：结构化发现池；只在一个对象试跑后批量使用；
- `discover-competitive-analysis`：筛选逻辑和比较框架；
- `papers`：论文、模型卡、代码和数据集；
- `dossier`：重点对象档案；
- `deep-research`：本地多源核验和 Red Team，不等同于 ChatGPT Deep Research 功能；
- `data-visualization`、`Spreadsheets`、`Presentations`、`pdf`：图表、表格、演示文稿与视觉核验。

只调用真实可见且与当前轮次相关的 Skill。任何缺失均使用原生工具替代；不得为了安装或展示 Skill 延误关键路径。

---

## 12. 从现在开始的执行流程

### Phase 0：项目初始化与输入摄取

目标：建立一个不会把 DR 结论误当事实的工作区。

任务：

1. 创建目录、`AGENTS.md`、项目章程、状态文件和决策日志；
2. 记录当前日期、时区、统一 as-of 和硬约束；
3. 检查四份输入的名称、可读性、大小和完整性；
4. 每份可读 DR 分配一个 Input Auditor，最多三个并行；提取对象、主张、来源标题、冲突、未知、边界和待重开 URL；
5. 生成 `ingestion_audit.md` 和 `source_reopen_queue.csv`；
6. 将 Day 0 五项内部输入全部记录为未知，不再重复询问用户；
7. 对 DR-03 形成 `eligible_bigtech_world_model / page9_boundary / discard` 分流表，并把 Cosmos、Genie、V-JEPA 各组件拆成来源恢复队列。

停止条件：

- 三份报告均有明确摄取状态，且与当前已确认的非空输入一致；若新窗口出现传输异常则单独标记；
- 每一份报告的可用价值、不可直接采用内容和来源恢复队列已列出；
- DR-03 三分流表完成，且类别外对象未进入候选验证池；
- 不产生最终候选或 PPT 文字。

### Phase 1：锚点、范围清洗与合规发现池

目标：回答“用什么比较，谁有资格进入”。

任务：

1. Anchor Agent 重开 DR-01 的关键原始来源，建立双镜头临时锚点；
2. Universe Agent 清洗 DR-02 的 23 个对象；
3. Source Recovery Agent 仅从可读报告的来源标题恢复 canonical URL；
4. Technical Agent 对合规与条件性合规对象重开论文、模型卡、代码、API 文档和官方项目页；
5. 建立 `eligibility_register.csv`、发现池 v1 和边界日志；
6. 将所有资格判断写明规则、证据和不确定性；
7. 不把无法恢复的 DR 引用写进 Evidence Ledger。

#### 检查点 1：必须暂停

向用户提交一个简洁审批包：

1. Manifold 双镜头临时锚点与公开未知；
2. 核心与相邻入围规则；
3. 清洗后的合规发现池；
4. 被排除或降级对象及理由；
5. 候选验证池 v0.2；
6. DR-03 三分流结果与三个大厂候选的统一验证问题；
7. Day 0 内部信息缺失会导致哪些结论只能条件化。

用户批准或修正前，不进入 Phase 2。

### Phase 2：最多 10 个对象的资格与真实性验证

目标：提出固定五席建议，而不是做宽泛新扫描。

进入检查点 2 的前置门槛：DR-03 已完成摄取和三分流；Cosmos、Genie 3 / Project Genie、V-JEPA 2 / 2-AC 的决策承载型关键主张已重开原始来源，或明确记为 `unresolved` 并相应降级。不得仅凭 DR-03 的评分裁决大厂席位。

每个 Candidate Agent 统一回答：

1. 对象是否满足项目范围？
2. 是否满足三项技术判据？
3. 产品、权重、API、SDK、许可或访问方式是否真实可得？
4. 是否有产品替代、平台替代或未来市场竞争的具体证据？
5. 能力竞争是否具备强直接对标证据？
6. 客户、合作、试点、部署和收入分别有什么证据？
7. 哪些结论只是公司自述？
8. 该对象是否有足够信息支撑一整页 CEO 单页？
9. 相比最接近的未入选对象，为什么更值得占一个席位？

三个大厂 Candidate Agent 的额外停止问题：

- **Cosmos：** 是否存在项目本身的可商用访问、可复现客户工作流和生产或付费采用；跨硬件与 TCO 如何；禁止借用 Isaac、GR00T 或 Omniverse 的成熟度；
- **Genie：** 是否存在企业 API/SDK、足够 action/control、持续性与 Physical AI 任务路径；若只有消费者 prototype 和研究能力，是否应降相邻；
- **V-JEPA：** 是否存在强直接对标、明确商用权利、稳定部署、外部采用或市场进入；若只有论文、代码和权重，是否应降相邻。

Lead 不计算不透明总分，而按以下门槛顺序裁决：

> 对象资格 → 三项技术判据 → 实质竞争机制 → 技术证据/外部可获得性/商业采用与时效 → 页面价值 → 五席组合互补性

#### 检查点 2：必须暂停

提交：

- 固定 5 个对象建议；
- 3–4 家创业公司＋1–2 个大厂项目的席位结构；
- 每个对象的机制组合、三维成熟度和主要不确定性；
- 每个对象“为何入选、为何不是最近替代者”；
- 未入选合格对象的第 9 页安排；
- 若不足 5 个，明确报告缺口，不得凑数。

用户确认前，不启动正式 dossier。

### Phase 3：固定五席 dossier

先试跑两份：

- 1 家创业公司；
- 1 个大厂世界模型项目。

校准字段与粒度后，再完成其余 3 份。

每份 dossier 必须包括：

1. 一句话判断；
2. 公司或项目边界；
3. 核心团队或大厂项目归属；
4. 技术路线与主要模型；
5. 产品、接口、开放与许可；
6. 客户任务、商业证据和采用阶段；
7. 过去 18 个月关键事件；
8. 与 Anchor A、Anchor B 的重合和差异；
9. 竞争机制、优先级和置信度；
10. 2–3 个监控信号与触发阈值；
11. 反证、冲突和未知；
12. 决策承载型主张与来源。

大厂项目 dossier 还必须单列：

- `项目边界`：世界模型核心、访问层和关联工具链分别是什么；
- `访问与商用权利`：组件级权重、API、许可、地域和使用限制；
- `平台替代因果链`：项目提供什么 → 客户原采购什么 → 如何绕开 Manifold → 剩余摩擦 → 成立触发器；
- `采用证据等级`：伙伴 / 测试者 / 技术集成 / 付费使用 / 外部生产部署；
- `绑定与反作用`：硬件、云、数据、标准和 TCO 如何既增强控制又留下独立供应商空间；
- `Why not now`：当前最强反证；
- `竞争与合作双面性`：合作仅作独立分析，不得反向抬高竞争资格。

### Phase 4：统一比较与内容审查包

Lead 统一建立：

- 技术与产品能力矩阵；
- 开放方式和平台替代矩阵；
- 技术证据、外部可获得性与商业采用三维矩阵；
- 竞争机制和战略优先级；
- 12–24 个月监控矩阵；
- 逐页内容稿 `deck_content_review.md`；
- 结论与来源映射 `slide_evidence_map.xlsx`。

如果另设纯编辑或 Deck Architect 角色，该角色在 Content Lock 前只能压缩措辞，不能改变事实、固定五席、机制、优先级或页标题逻辑。运行在 Work 中的 Research Director 仍可依据证据流程提出和修订研究判断，但必须经过用户检查点与 Content Lock 批准。

### Phase 5：独立 Red Team

Red Team 不参与前期选样。它必须挑战：

- 对象是否真的符合范围；
- 产品是否只是 Demo；
- 客户是否只是合作伙伴；
- 不同技术指标是否可比；
- 是否把纯视频、VLA、仿真或垂直组件误纳入；
- 是否因融资、名人或大厂光环高估威胁；
- 是否因公开信息少而错误低估对象；
- 是否遗漏更合格的对象；
- 机制标签和未来竞争是否有直接证据；
- Page 1、Page 3 和公司页结论是否被证据支持。

Red Team 完成修订回写后，用户批准 `deck_content_review.md`，形成 Content Lock。

### Phase 6：Storyboard、PPT 与最终 QA

Content Lock 后才制作：

1. 灰度低保真 Storyboard；
2. 用户审查叙事、容量和图形；
3. 最终可编辑 PPT；
4. PDF 渲染；
5. 来源、内容、视觉和链接 QA。

Content Lock 后禁止新增事实。若必须更新事实，应解锁内容、回到 Evidence Ledger、重新通过 Red Team，再重新锁定。

---

## 13. 最终 10 页逐页蓝图

最终 PPT 最多 10 页且包含封面功能。所有页面使用结论型标题。方法、完整来源、Evidence Ledger、完整发现池、dossier 和 Red Team 报告均为独立附件。

### 第 1 页：封面功能＋Executive Answer

**回答：** 最重要的格局判断、固定五席和对 Manifold 的意义是什么？

必须包含：

- 报告标题和统一 as-of 日期；
- 1 句总判断；
- 3 个最重要发现；
- 固定 5 个重点对象；
- 3 条对 Manifold 的直接含义。

推荐版式：`当前格局｜为什么重要｜Manifold 应如何反应` 三栏。

禁止：独立装饰封面、概念定义、TAM、融资汇总、Logo 墙、没有证据的宏大判断。

内容预算：1 个主判断、3 个发现、3 个含义；不超过 7 个信息块。

### 第 2 页：非中国世界模型战略格局

**回答：** 合格玩家分布在哪里，哪几类路线最接近 Manifold？

必须包含：

- 只放对象范围合规的非中国世界模型创业公司和非中国大厂具体世界模型项目；
- 技术路线 × 应用或客户任务；
- 固定五席高亮；
- 核心、相邻、Self-positioned only 三层；
- 对象类型区分为创业公司与大厂项目；
- 每个对象可有多个标签，但在图上只设一个主要落点。

推荐图形：矩阵或战略地图。默认横轴为主要技术路线，纵轴为外部可获得性或成熟度，客户任务作为节点短标签；若清洗后发现该轴不能解释选样，可在 Content Review 中改为“技术路线 × 客户任务”。颜色表示战略优先级，形状表示对象类型，边框或小标签表示漏斗层级；最多使用 3 种视觉编码。

建议路线轴：

- persistent / explorable spatial worlds；
- real-time action-conditioned learned worlds；
- latent predictive / planning world models；
- Physical AI world foundation platform；
- 其他经验证的 world-model-native 路线。

禁止：中国公司节点、Manifold 作为竞争玩家、类别外替代路线节点、融资气泡、超过约 14 个主体节点。

### 第 3 页：为什么是这固定 5 席

**回答：** 为什么这 5 个对象比其他合格对象更值得 CEO 逐页阅读？

固定 5 列，比较行固定为 8 行：

1. 客户任务或 JTBD 重合；
2. 状态演化、行动条件与持续交互证据；
3. 访问方式和商用许可；
4. 平台链路完整性及绑定摩擦；
5. 采用证据等级；
6. 当前机制与 12–24 个月可能机制；
7. 入选理由及其优于最近候选之处；
8. 最大反证与升级或降级触发器。

推荐图形：统一口径比较矩阵或克制的热力表。

禁止：单一总分、融资排序、把“未披露”等同于“不具备”。

### 第 4–8 页：固定 5 个重点对象单页

每页只回答一个对象。顶部固定标签：

`对象类型｜主要 Anchor lens｜竞争机制组合｜战略优先级｜技术证据｜外部可获得性｜商业采用｜as-of`

统一内容：

- 结论型标题与一句话判断；
- 公司或项目边界；
- 技术和产品证据链；
- 访问、许可与产品成熟度；
- 客户、合作和商业证据；
- 与 Manifold 的重合、差异和影响；
- 2–3 个监控信号及触发条件；
- 本页 3–5 个决策承载型 Claim ID。

推荐版式：

- 左：对象快照与产品形态；
- 中：技术或能力证据；
- 右：商业、开放或生态状态；
- 底：`vs Manifold｜竞争机制｜监控触发器`。

创业公司页增加：团队关键资源、迭代速度、客户和商业证据；融资仅作资源背景。

大厂项目页增加：项目边界、组件级访问与商用权利、平台替代因果链、采用证据等级、算力/云/数据/标准与 TCO 绑定、`Why not now`、竞争与合作双面性；不分析母公司融资，不把关联栈成绩算给世界模型核心。

禁止：长篇创始人履历、完整融资时间线、宣传语堆砌、收入或估值猜测、重复概念教育。

### 第 9 页：其余合格玩家与边界风险

**回答：** 哪些合格对象未进入固定五席，什么信号会让它们升级？

主体必须是：

- 其余核心候选；
- 相邻集合；
- Self-positioned only；
- 每个对象的未入选理由与升级触发器。

推荐图形：`当前状态｜未入选原因｜升级触发器` 三层观察带。

可选底部短注最多三类：`VLA / 具身推理 API｜仿真与工具链｜垂直内生化`。每类只写一句风险和一个升级触发器，不写公司名、不放 Logo、不展开档案；该底栏不参与候选评分，并在页面拥挤时整体最先删除。

禁止：无解释 Logo 墙、类别外对象单独成行或占席位。

### 第 10 页：对 Manifold 的启示与监控

**回答：** 接下来做什么，什么信号会改变当前判断？

上半部分：3–5 条结构化启示：

`外部变化 → 对 Manifold 的影响 → 建议动作 → 依赖的内部假设`

下半部分：监控矩阵：

`对象｜信号｜阈值｜渠道｜频率｜触发后的决策`

优先监控：

- Preview 转 GA，或内部模型转为公开 API、权重、SDK；
- Research-only 转为明确可商用许可；
- 伙伴或测试者转为具名付费使用或外部生产集成；
- 可复现端到端工作流、OEM 默认集成或开发者标准形成；
- 跨硬件支持、TCO、定价、性能或时延显著变化；
- 亚洲市场的产品、伙伴或合规入口。

禁止：“持续关注”等空话、无阈值的监控、把外部研究直接包装成确定战略。

---

## 14. 两个正式检查点与决策权限

正式研究检查点只有两个：

1. **检查点 1：** Manifold 双镜头锚点＋规则＋清洗后的发现池＋候选验证池；
2. **检查点 2：** 固定 5 个对象及机制组合。

另有两个生产审批：

3. **Content Lock：** 逐页内容稿批准；
4. **Final Acceptance：** 最终 PPT 验收。

| 决策 | 建议者 | 最终批准者 |
|---|---|---|
| 范围、排除项、Day 0 缺口处理 | Lead | 用户 |
| Manifold 公共锚点 | Anchor＋Lead | 用户 |
| 发现池与候选验证池 | Universe＋Technical＋Lead | 用户 |
| 固定五席 | Lead 提供证据与替代方案 | 用户 |
| 机制、优先级和页标题 | Lead | 用户在 Content Lock 批准 |
| 视觉设计 | Deck Architect | 用户 |

纯编辑或 Deck Architect 在 Content Lock 前只可提供措辞压缩，不得触碰事实、结论、固定五席、机制或优先级；Research Director 的事实判断权按证据流程与用户审批执行。

每个检查点的闭环规则：

1. Lead 提交审批包后将 `project_state.status` 设为 `awaiting_user`；
2. 用户明确批准或修正后，Lead 逐条回写 `decision_log.md`；
3. 更新相关 canonical files、`approved_checkpoint`、`artifact_versions` 和 `next_action`；
4. 完成回写后方可进入下一 Phase；用户沉默或只询问状态不构成批准。

---

## 15. Red Team 与放行条件

### 15.1 Red Team 核验范围

100% 核验：

- 10 页所有页标题结论；
- 关键数字、日期、币种和换算；
- 固定五席、层级、机制、优先级和三维成熟度；
- 五席对象是否全部符合范围，且类别外对象没有以“生态栈”名义形成隐性席位或专页；
- 开放状态、组件级许可证、伙伴/客户/部署层级和比较级表述；
- Evidence Ledger 全部决策承载型主张；
- DR 来源是否真正重新打开。

Dossier 抽样：

- 每份至少 5 条；
- 且不少于可核验事实的 20%；
- 覆盖技术、产品或商业、融资或组织三类。

### 15.2 放行定义

放行不是“宣称错误为 0”，而是：

> 核验完成后不存在未解决的重大问题。

重大问题指会改变页标题、固定五席、对象资格、漏斗层级、竞争机制、优先级、三维成熟度或关键数字的问题。

无法解决时必须：

- 删除主张；或
- 降低结论强度；或
- 降级对象；或
- 阻止 Content Lock 或最终交付。

### 15.3 PPT 放行条件

- 恰好不超过 10 页，没有隐藏第 11 页；
- 第 1 页承担封面功能；
- 每页只有一个主结论；
- 每页 30–45 秒可读懂；
- 图表可追溯到权威数据文件；
- 文件可编辑，无溢出、截断、低清截图或不可辨识脚注；
- 中文 Deck 保留英文官方名；
- 全 Deck as-of 一致；
- 完成最终时效刷新、链接检查和 PDF 渲染审查。
- Evidence Ledger 中每个 URL 已通过新客户端直接打开和定位测试。

---

## 16. 时间安排与关键路径

7 个工作日成立的前提：

- 四份输入在新客户端均能正常读取；三份 DR 当前已确认非空；
- 用户在检查点 1、检查点 2 和 Content Lock 请求后 2 小时内响应；
- 不出现需要重做范围的重大事实冲突。

否则默认按 9 个工作日。

关键路径：

> 输入预检 → DR 摄取与来源恢复 → 双镜头锚点与范围清洗 → 检查点 1 → 最多 10 个候选定向核验 → 检查点 2 固定五席 → 5 份 dossier → 横向比较与 10 页内容稿 → Red Team → Content Lock → Storyboard/PPT → 最终 QA

| 时间 | 核心工作 |
|---|---|
| Day 0 | 上传 v2.0 与三份 DR；启动 Work；完成输入预检、目录和 Day 0 未知项记录 |
| Day 1 | 对三份 DR 并行摄取；完成 DR-03 三分流与项目族组件拆分；恢复来源；建立临时 Anchor、资格规则和冲突队列 |
| Day 2 | 清洗发现池；完成检查点 1 |
| Day 3 | 最多 10 个 Candidate Agents 分批定向核验；完成检查点 2 |
| Day 4 | 试跑 1 个创业公司和 1 个大厂项目 dossier；校准后完成其余 3 个 |
| Day 5 | 统一比较、机制、优先级、监控信号和第 2–10 页内容 |
| Day 6 | 完成第 1 页；独立 Red Team；回写；用户 Content Lock |
| Day 7 | Storyboard、最终 PPT、PDF 与内容/来源/视觉三重 QA |

日期只用于排程，阶段证据门槛与用户批准优先于日历。延期不得跳过三份 DR 摄取、来源重开、两个检查点、Red Team 或 Content Lock。

9 天方案为用户审批与重大来源冲突预留 2 个工作日缓冲。

工期不足时的降级顺序：

1. 先减少 dossier 的非决策字段，例如长履历、次要融资细节和非决策性技术考古；
2. 再减少视觉迭代，使用统一模板；
3. 两个检查点、固定五席、Evidence Ledger、独立 Red Team、Content Lock、10 页上限和来源重开不可删除。

---

## 17. 新窗口的完整启动指令

以下区块可直接作为新 Work 或 Codex 任务的第一条消息；若本文件已作为附件，可发送第 0 节的短版启动语即可。

```text
你是“Manifold 海外世界模型竞争格局与重点公司研究”的唯一 Research Director。请完整执行附件 v2.0，并把它视为本项目最高优先级的项目章程。

输入文件的正式名称必须保持为：
1. DR-01 Manifold 公开比较锚点.md
2. DR-02 非中国玩家发现池与三层漏斗.md
3. DR-03 大厂项目 平台替代与垂直替代路线.md

最高硬性约束：
- 最终 PPT 总页数不超过 10 页，包含封面功能；不设独立封面。
- 最终固定 5 席：3–4 家非中国世界模型创业公司＋1–2 个非中国大厂的具体世界模型项目。
- 中国大陆公司排除；Manifold 仅为内部比较锚点，不占页面或席位。
- VLA、机器人基础模型、仿真/合成数据平台、纯视频、纯 3D、垂直公司内部 world-model component 不能作为独立对象或席位；最多形成第 9 页可删除的类别级短注。
- 不做 TAM/SAM/SOM，不做世界模型入门教育，不在固定五席和 Content Lock 前制作 PPT。

三份 DR 只是 lead memo。禁止引用 DR 正文或 turnXX 引用。任何驱动对象资格、固定五席、机制、优先级、页标题或关键数字的主张，必须重新打开原始来源并建立可迁移证据记录。

目前没有额外 Manifold 内部资料。请将目标客户、交付形态、商业阶段、12–24 个月方向和保密红线记录为“未知/未提供/不得推断”；使用公开资料建立临时双镜头 Anchor，并将受影响的判断写成条件性结论。

请立即开始，而不是只复述计划：
0. 预检当前表面是否能完整读取附件、检索公开网页、持久写入并重新打开文件、运行子 Agent、生成表格和演示文稿。子 Agent 不可用则串行；元数据不可见写 not exposed；无法持久写入并重开权威文件则暂停并建议把同四份输入转交 Codex。
1. 如果项目目录已经存在，先读取 project_state.json、decision_log.md 和 input_manifest.csv，校验已完成产物并从 last_completed_step 恢复；不得覆盖已批准文件。
2. 检查四份附件的名称、可读性、大小与完整性；三份 DR 原件只读。当前三份重传原件均已确认非空；若新客户端读取失败，按传输异常处理，不得误判原报告为空。
3. 创建或续用项目目录、input_manifest.csv、ingestion_audit.md、project_state.json、decision_log.md、source_reopen_queue.csv 和 Day 0 文件。
4. 对三份 DR 各启动一个 Input Auditor，等待全部返回后由你统一合并；DR-03 Auditor 必须输出三分流表、项目族组件表和不可迁移引用审计。
5. 重新打开关键原始来源，构建 Manifold 双镜头临时 Anchor、资格规则、合规发现池、边界日志和最多 10 个对象的候选验证池。
6. DR-03 逐对象分为 eligible_bigtech_world_model / page9_boundary / discard；以 NVIDIA Cosmos、Google DeepMind Genie 3 / Project Genie、Meta V-JEPA 2 / V-JEPA 2-AC 为大厂验证种子，不是 shortlist。关联 VLA、仿真、工具链和垂直栈只能作为平台路径证据或第 9 页类别短注，不能独立入池，也不能抬高世界模型项目成熟度。
7. 严格执行 v2.0 的证据、组件级许可、三维成熟度、竞争机制和范围规则。
8. 完成检查点 1 审批包后将状态设为 awaiting_user 并暂停。不要提前选择最终五席，不要启动正式 dossier，不要制作 PPT。用户明确批准后先回写 decision_log 和 project_state，再继续。

主 Agent 是唯一可修改权威文件的人。子 Agent 只按 v2.0 统一 schema 返回结构化结果或写入自己的独立目录。缺失第三方 Skill 时使用原生网页、文件、表格和演示文稿能力，不要因安装工具阻塞项目。后续每次恢复都先读取状态文件，按检查点和 next_action 继续。
```

---

## 18. v1.2 → v2.0 变更记录

1. 当前输入状态由“DR-03 为空待重传”更新为“三份 DR 重传文字版均已确认可读且非空”；删除所有 DR-03 重传阻塞与等价宽搜条件。
2. 保留用户正式名称；上传系统产生的 `(1)` 仅作为实际文件名记录，后续权威文件仍使用无后缀的 DR-01、DR-02、DR-03 正式名称。
3. 完整摄取 DR-03：其价值定位为大厂候选线索、平台替代验证链、反证和监控阈值，而不是直接证据或 shortlist。
4. 明确 DR-03 的三个合规大厂种子：`NVIDIA Cosmos`、`Google DeepMind Genie 3 / Project Genie`、`Meta V-JEPA 2 / V-JEPA 2-AC`；均须统一验证且不预占席位。
5. 将 Gemini Robotics、GR00T、Isaac/Omniverse、Habitat/PARTNR、Waymo World Model、Amazon、Tesla、AV 与开放 VLA 路线分流为第 9 页类别边界或排除对象，不得进入固定五席。
6. 新增“关联工具链归因规则”：类别外技术可解释合格项目的平台路径，但不能独立获得资格、成熟度或席位，也不能把自身采用成绩算给世界模型项目。
7. 将候选验证池升级为 v0.2；总量仍为 9 个种子、上限仍为 10 个，没有因 DR-03 扩大研究宇宙。
8. 新增三个大厂项目族的组件拆分要求：模型、访问层、NIM/API、代码、权重、数据、许可和关联栈分别核验，项目族判断另行综合。
9. 收紧平台替代定义，加入“项目本身可获得＋同一客户任务＋完整绕行路径＋剩余摩擦”，并新增四阶段路径：集成宣示、可运行组件、可复现外部工作流、生产采用或默认标准。
10. 新增三个大厂候选的统一证伪问题，以及 Cosmos、Genie、V-JEPA 各自的停止条件。
11. 证据纪律升级：DR-03 原 `Fact` 标签不可继承；比较级、伙伴采用、部署和 ROI 必须拆成来源可证部分与分析推断。
12. Evidence Ledger 增加组件或版本、来源类型和许可范围字段，并新增 URL 可解析测试。
13. 外部可获得性分档细化为 Research artifact、Public demo/preview、Private/partner preview、Downloadable artifact、GA API/Product、Open weights、Licensed product；内部生产与外部商业采用分开。
14. 许可按代码、权重、数据、输出、API/SDK、再分发与商业使用分别记录；开放权重、可商用声明、法律许可和已商品化不得互相替代。
15. 大厂 dossier 与单页新增项目边界、平台替代因果链、采用证据等级、绑定与反作用、`Why not now` 和竞争/合作双面性。
16. 第 3 页比较行改为客户任务、技术判据、访问许可、平台链路、采用等级、机制演化、相对入选理由和反证触发器；第 9 页边界底栏最多三类且不得出现对象名或 Logo。
17. 第 10 页监控信号改为事件阈值：GA/许可、付费或生产采用、默认标准、跨硬件与 TCO、亚洲进入、定价/性能/时延。
18. 检查点 1 新增 DR-03 三分流表和三个大厂项目的统一验证问题；检查点 2 前置门槛改为关键原始来源已重开或明确降级。
19. Red Team 新增对范围偷渡、组件级开放与许可、伙伴/客户/部署层级、比较级表述和 URL 可解析性的 100% 核验。
20. 时间表、新窗口完整启动指令和极简 Work 启动语全部同步到 v2.0；项目仍停在计划完成、正式研究未启动的阶段。

---

## 19. 最终完成定义

项目只有同时满足以下条件才算完成：

- 固定五席经过检查点 2 批准，且符合 3–4 家创业公司＋1–2 个大厂项目；
- 每个重点对象能解释“为何入选、为何不是最近替代者”；
- 所有决策承载型主张可追溯到新窗口真实打开过的原始来源；
- Fact、Company-reported、Independent evidence 和 Analyst inference 清晰区分；
- 产品、合作、试点、付费、部署和收入严格区分；
- Red Team 核验后没有未解决重大问题；
- 用户批准 Content Lock；
- 最终 Deck 不超过 10 页，含封面功能，中文表达、英文专名、统一 as-of；
- 最终 PPT 可编辑，PDF 渲染无缺陷，附件完整但不形成第 11 页。

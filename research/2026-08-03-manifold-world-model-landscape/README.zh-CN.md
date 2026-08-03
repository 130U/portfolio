---
postId: research.002
lang: zh-CN
---

<p align="center"><sub>DESK RESEARCH · 研究归档</sub></p>

<!-- publication-status: public -->

# Manifold 海外世界模型竞争格局

<p align="center"><strong>2026-07-14 研究项目复盘：从三份 Deep Research，到一条可审计、可反驳、可复现的研究决策链</strong></p>

<p align="center"><strong>研究设计与决策责任：</strong> Theodore Ouyang</p>

<p align="center">
  <a href="#zh-design-ownership">我的设计</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#zh-research-origin">研究起点</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#zh-decision-trail">决策链</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#zh-postmortem">经验与改进</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#zh-ai-value">AI 增益</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#zh-conclusions">最终结论</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#zh-audit">复核路径</a>
</p>

<p align="center"><sub>研究截至 2026-07-14　·　非中国世界模型创业公司与大厂具体项目　·　4 家创业公司＋1 个大厂项目</sub></p>

> [!IMPORTANT]
> **作品与信息边界**
>
> 本仓库记录截至 2026-07-14 的“Manifold 海外世界模型竞争格局”研究项目，以及项目结束后的结构化整理。它保存问题设计、公开来源、资格判断、反证、决策记录、生成过程和改进事项，使这项研究可以被复查、维护和继续迭代。
>
> 本仓库不代表 Manifold AI 或任何相关公司的官方立场，不构成其内部研究或正式商业判断；仓库不包含公司提供的内部文件、客户信息、商业秘密或内部沟通。第三方论文、网页、代码、商标和产品名称的权利归原权利人所有。
>
> **脱敏状态：已完成。** 公开发布前已移除本机绝对路径、私人联系邮箱、工作区路径和冗余打包文件中的机器元数据，并完成文本、Office 文件与凭据特征扫描。具体处理范围和可复核结果见 [`公开发布审计`](source-snapshot/docs/reproducibility/public-release-audit.md)。
>
> **公开平台边界：** 本仓库为 Public，任何人均可能查看、索引或通过 GitHub 平台功能 Fork。除平台功能允许的查看与 Fork 外，未经研究设计者书面许可，不得复制、转载、改编或用于商业用途。

这份作品首先是一份留给未来复查的工作记录。最终 PPT 浓缩结论，随本文迁移的研究快照保存形成这些结论的过程与证据；两者是同一项研究的不同层次，而不是互相补救。

如果只读一个文件，就读这份报告。它记录：**问题为什么这样拆解、每一步解决什么风险、AI 与 Agent 在哪里产生真实增益、哪些做法值得复用，以及下一次如何进一步改进。**

最终研究对象：**World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3**。

**5 分钟阅读路径：** [`一分钟结论`](#zh-quick-take) → [`五席选择`](#zh-portfolio-selection) → [`完整决策链`](#zh-decision-trail) → [`复核路径`](#zh-audit)。项目形成的 10 页结论版本见 [`最终 PPTX`](source-snapshot/archive/manifold-world-model-landscape/10_deck/manifold_world_model_landscape_v1_4.pptx)。

> [!NOTE]
> 这里所说的“思考链路”，是可以公开复核的决策链：问题、假设、证据、反证、选择理由、状态迁移和未决事项。它不是模型不可验证的逐 token 隐式推理。

---

<a id="zh-quick-take" data-pair-id="quick-take"></a>

## 一分钟结论

1. **供给形态已经分化。** 海外世界模型正在从演示走向三种可观察的交付路径：公开计价接口、申请制或受控入口、可下载或自托管组件。
2. **五席不是排行榜。** World Labs、Odyssey、Runway、Decart 与 NVIDIA Cosmos 3 分别代表空间世界、实时 world stream、内容平台向 Worlds/Robotics 延伸、driving-first API 和自托管组件平台五类风险路径。
3. **公开证据仍有明显上限。** 截至 2026-07-14，研究没有恢复到任何一席的客户第一方确认付费生产采用、续约或收入证据；“可以调用”不能写成“已经规模化落地”。
4. **Manifold 只是公开比较锚点。** 在缺少内部客户、收入、标准交付和路线信息时，本文只讨论条件性战略关系，不宣称双方已经争夺同一客户或预算。
5. **更稳健的下一步是补验证与权利基础设施。** 定义标准交付单元，建立动作忠实度、持久状态、几何/碰撞、失败率、延迟和 TCO 的共同验证资产，并预先锁定数据、模型改进、部署与再分发权利。

> **证据口径：** 本文把原始事实、公司自报、伙伴第一方披露、独立反证、条件性分析与未决事项分开记录。任何来源都只支持它真正覆盖的原子主张。

<a id="zh-design-ownership" data-pair-id="design-ownership"></a>

## 00 · 研究设计：先把问题变成可验证的决策系统

这项工作不是把题目整体交给 AI、等待它生成一份报告。我负责定义研究问题、拆分三份 Deep Research、设定范围与准入门、设计阶段审批和证据结构，并对红队修订、五席选择与最终表达承担责任。AI 和 Agent 是并行研究、来源恢复、结构化整理与机械 QA 的执行层。

| 我设计的环节 | 为什么这样设计 |
|---|---|
| **三份 Deep Research 的问题架构**：DR-01 建立 Manifold 公开锚点，DR-02 扩展非中国玩家池，DR-03 专门处理大厂项目与替代路线 | **避免一次性搜索把“我们是谁、市场上有谁、谁可能替代我们”混成一个问题。** |
| **Manifold 只作公开锚点**，不作为竞争节点 | **没有内部客户、收入和路线信息时，不能把未知事实补成确定竞争关系。** |
| **发现队列 → 技术合格 → 核心集合 → 固定五席** | **把“值得调查”“技术成立”“具有战略关系”和“值得占用展示席位”分开，减少名气偏差。** |
| **Source Card → Atomic Claim → Evidence Map** | **让每条公开结论回到它真正依赖的来源，而不是让整篇网页替一句话背书。** |
| **检查点、Red Team 与 Content Lock** | **AI 可以加速执行，但不能自行扩大研究范围、升级商业措辞或绕过人的批准。** |
| **结论表达＋Research Repository** | **同一项研究分别保存结论、过程和证据，避免方法与中间判断在项目结束后丢失。** |

> **设计原则：** 人负责问题、边界、取舍和最终责任；AI 负责扩大覆盖、恢复证据、执行重复验证并暴露反证。AI-native 的价值不在于 Agent 数量，而在于把研究设计转成可检查、可暂停、可纠错的系统。

<a id="zh-research-origin" data-pair-id="research-origin"></a>

## 01 · 我为什么先设计三份 Deep Research

我没有让模型围绕“海外世界模型竞争格局”一次性自由搜索，而是先把任务拆成三个互相制衡的问题。三份报告文本由 ChatGPT Deep Research 生成，但 **DR-01 / DR-02 / DR-03 的题目结构、各自要解决的问题和后续使用方式由我设计**。

### DR-01：先描述 Manifold 自己

[`DR-01 Manifold 公开比较锚点.md`](<source-snapshot/inputs/original/DR-01 Manifold 公开比较锚点.md>) 汇总了 Manifold 的公开公司口径、产品项目、技术能力、融资与商业线索，并提出了一个比较锚点框架。

- **它带来的价值：** 告诉我之后应该拿什么维度比较海外对象。
- **它没有解决的问题：** 这些公开材料能否代表 Manifold 当前的实际买方、标准交付形态、商业阶段和未来路线？答案是否定的。
- **因此得到的决定：** Manifold 只能作为“公开比较锚点”，不能被虚构成一个信息完备的竞争者节点。

### DR-02：先把非中国玩家尽量找全

[`DR-02 非中国玩家发现池与三层漏斗.md`](<source-snapshot/inputs/original/DR-02 非中国玩家发现池与三层漏斗.md>) 给出了发现池、边界案例、技术路线、应用任务、覆盖审计和初步候选建议。

- **它带来的价值：** 提供了 23 条可登记的对象线索，而不是只盯着最知名的几家公司。
- **它没有解决的问题：** “world model”在视频、机器人、仿真和空间智能中含义不同；自称世界模型并不等于符合本项目技术门。
- **因此得到的决定：** 先做对象资格清洗，再做公司研究；不能把发现榜单直接当 shortlist。

### DR-03：补足大厂项目和替代路线

[`DR-03 大厂项目 平台替代与垂直替代路线.md`](<source-snapshot/inputs/original/DR-03 大厂项目 平台替代与垂直替代路线.md>) 梳理了 NVIDIA、Google、Meta 等大厂项目，以及机器人、自动驾驶、仿真和内部组件等替代路线。

- **它带来的价值：** 防止研究只看创业公司，忽略大厂通过开放组件或全栈平台形成的绕行风险。
- **它没有解决的问题：** 大量条目其实是 VLA、机器人基础模型、仿真/合成数据平台或垂直内部组件，并不都应进入候选池。
- **因此得到的决定：** 只抽取合格的“大厂具体世界模型项目”，其他路线登记为边界或监测项，不占五席。

另外两份 v2.0 治理文件定义了硬边界、审批检查点和证据标准：[`项目执行计划`](source-snapshot/inputs/original/Manifold_World_Model_Research_Project_Plan_v2.0_CN.md) 与 [`启动 Prompt`](source-snapshot/inputs/original/Manifold_ChatGPT_Work_Launch_Prompt_v2.0_CN.md)。三份 DR **只作线索**；决定范围、资格和结论的关键主张必须重新打开原始来源。

<a id="zh-decision-trail" data-pair-id="decision-trail"></a>

## 02 · 完整研究推导链

> ### 01 / 原始线索
> **输入：** 三份 ChatGPT Deep Research 报告。
>
> **要解决的问题：** 它们提供了广泛线索，但不能直接作为最终证据。
>
> **设计理由：** 先把锚点、发现池和大厂路线拆开，避免一次研究同时承担三种互相冲突的任务。

<p align="center">↓</p>

> ### 02 / 输入审计
> **动作：** 分开审计 Manifold 锚点、非中国玩家池和大厂替代路线。
>
> **产出：** 区分“原始输入、事实线索、分析判断和待恢复来源”。
>
> **设计理由：** Deep Research 适合扩展线索，但关键主张必须重新打开原始来源。

<p align="center">↓</p>

> ### 03 / 对象清洗
> **动作：** 应用地域、对象类型、技术门和组件隔离规则。
>
> **产出：** 23 条 DR-02 线索被清洗，并补入遗漏对象，形成 10 个资格验证对象。
>
> **设计理由：** “自称 world model”不是资格；先解决范围污染，再投入深度研究资源。

<p align="center">↓</p>

> ### 04 / 资格验证与五席选择
> **动作：** 分开验证技术资格、外部获得方式、地域和相对 Manifold 公开锚点的战略关系。
>
> **产出：** 5 个重点对象、4 个观察对象、1 个早期信号；不做评分排名。
>
> **设计理由：** 固定席位迫使研究做战略取舍；禁止总分排名避免在不可比证据上制造伪精确。

<p align="center">↓</p>

> ### 05 / 五份对象 Dossier
> **动作：** 为五席分别寻找支持证据、反证、组件边界和未决问题。
>
> **产出：** 五份公司/项目研究档案，以及独立存放的方法、查询审计和完成 QA。
>
> **设计理由：** 被选中只代表值得投入研究资源，不代表相关技术、产品和商业主张已经成立。

<p align="center">↓</p>

> ### 06 / Red Team 与 Content Lock
> **动作：** 攻击版本归属、商业采用、许可证、范围和措辞上限。
>
> **产出：** 结论被降级到证据真正支持的程度，并形成 Page → Claim → Source 映射。
>
> **设计理由：** 公开表达必须先通过反证和证据映射，不能把视觉制作当成事实修订阶段。

<p align="center">↓</p>

> ### 07 / Research Repository
> **动作：** 保存原始输入、决策日志、来源卡、Ledger、Dossier、QA 和生成过程。
>
> **产出：** 另一个人可以从输入开始复核研究是怎样形成的，而不必先理解原项目目录。
>
> **设计理由：** 最终 PPT 只能证明“交付过”，研究仓库才能证明“如何思考、如何纠错、为什么可信”。

下面不是阶段名清单，而是每一步真实解决的问题。

<a id="zh-governance-first" data-pair-id="governance-first"></a>

## 03 · 第一步：先建立规则和权威文件，而不是立刻搜索

**当时的问题：** 三份 DR 已经包含大量结论，如果直接沿着它们继续搜索，后续很容易混淆“原始输入”“新证据”“分析判断”和“研究设计者批准”。

**具体做法：** 主 Agent 先建立 [`project_state.json`](source-snapshot/archive/manifold-world-model-landscape/00_brief/project_state.json)、[`decision_log.md`](source-snapshot/archive/manifold-world-model-landscape/00_brief/decision_log.md) 和 [`input_manifest.csv`](source-snapshot/archive/manifold-world-model-landscape/01_inputs/input_manifest.csv)。每个输入记录来源路径、工作副本、字节数、时间和 SHA256；每个阶段由状态文件控制是否允许启动。

**AI/工具为什么在这里有用：** AI 不是用来先写结论，而是把自然语言章程转成机器可检查的状态、范围枚举和停止条件。PowerShell 负责文件哈希和清单，主 Agent 是唯一 canonical editor，避免多个 Agent 同时改写权威文件。

**这一步的产出：** 5 份初始输入被固定为同一基线——3 份 Deep Research 加 2 份治理文件。此后由我发起的红队意见和批准记录继续进入同一个输入登记表，而不是散落在聊天里。

**为什么进入下一步：** 只有先知道“什么文件说了算”，后面发现来源冲突时才知道应改哪里、谁有权批准。

<a id="zh-split-audit" data-pair-id="split-audit"></a>

## 04 · 第二步：把三份 DR 拆开审计，而不是整体接受

**当时的问题：** DR-01、DR-02、DR-03 服务于不同目的，混在一起审阅会让 Manifold 自身信息、候选发现和大厂替代路线互相污染。

**具体做法：** 创建三个并行审计 Agent：

- `dr01_anchor_audit`：检查 Manifold 锚点和 DR-01 的事实边界；
- `dr02_universe_audit`：逐行检查发现池、地域和类别资格；
- `dr03_bigtech_audit`：只抽取合格的大厂具体项目，其余对象分流为边界路线。

三个 Agent 只返回发现、冲突和建议；主 Agent 重新核验后统一写入权威文件。

**AI/工具为什么在这里有用：** 三类问题可以并行，但判断标准必须一致。子 Agent 提高覆盖速度，主 Agent 集中解决跨文档冲突，避免把“多 Agent”误当成“多份真相”。

**这一步的可量化结果：** DR-02 的 23 条输入被规范化为 **9 个原始验证输入、13 个边界排除、1 个未恢复到合格对象的 discarded 条目**。这比简单说“发现了 23 家”更有意义：它说明大部分工作其实是在排除范围污染。

对应产物是 [`eligibility_register.csv`](source-snapshot/archive/manifold-world-model-landscape/03_universe/eligibility_register.csv) 和三份输入审计记录。

**为什么进入下一步：** 对象名称被登记并不等于对象合格；接下来必须定义一套所有对象都能接受相同检验的技术门和战略关系门。

<a id="zh-qualification" data-pair-id="qualification"></a>

## 05 · 第三步：定义“世界模型对象”，同时重开原始来源

**当时的问题：** 仅凭厂商使用“world model”一词会误纳纯视频模型、机器人策略、仿真工具和内部组件；反过来，如果要求“动作必须改变物体”，又会误排 WorldScape、Genie、AirScape 等导航型世界模型。

**具体做法：** 研究形成三层状态迁移：

1. `qualification_validation_isolation_queue`：允许证据待补和资格受挑战的对象进入验证；
2. `technical_qualified`：动作、控制或持续交互对后续状态产生可审计、时间一致的条件性影响；导航中的 agent/ego/相机位姿、可达性、碰撞约束和持续记忆可以计入状态；
3. `core_collection`：在技术合格之外，还要相对于 Manifold 公开锚点形成产品替代、平台替代或有直接证据支持的未来市场关系。

与此同时，搜索 Agent 不引用 DR 的转述，而是重新打开官方项目页、论文、代码仓库、模型卡、定价页、条款、许可证和合作方原文，并为每个来源建立 source card。

**AI/工具为什么在这里有用：** 搜索工具负责恢复原文，专项 Agent 负责版本、地域和组件隔离，主 Agent 将“支持证据”“反证”“未知”写成可审计字段。AI 的增益不是替代来源，而是系统地追问：这个来源究竟支持哪一个原子主张，又不支持什么？

**这一步发现了什么：**

- 原始池遗漏了 Overworld；恢复来源后，它成为第 24 条登记记录和第 10 个验证对象；
- Meta 已发布 V-JEPA 2.1，不能继续只按 V-JEPA 2 处理；
- Manifold 的 RoboScape、AirScape、Worldscape-MoE 需要登记，但不能由此推断商业优先级；
- AMI 缺少足够具体的自有技术资产，只能留在早期信号/隔离层。

这些修正由 `overworld_source_recovery`、`vjepa21_refresh`、`manifold_aux_assets` 等 Agent 定向完成。

**阶段结果：** 检查点 1 最终批准的是**范围、规则、Manifold 公开锚点和 10 对象验证队列**，并没有提前选五席。审批包、规则补丁和 QA 见 [`checkpoint_1_approval_pack.md`](source-snapshot/archive/manifold-world-model-landscape/05_candidates/checkpoint_1_approval_pack.md)。

**为什么进入下一步：** 至此我只知道“谁值得验证”；下一步才回答“谁真正通过技术与战略关系验证”。

<a id="zh-portfolio-selection" data-pair-id="portfolio-selection"></a>

## 06 · 第四步：逐对象验证，形成五席但不做排名

**当时的问题：** 技术合格、外部可获得和商业竞争经常被混为一谈。一个模型可以技术上成立，却没有 API；也可以开放 checkpoint，却没有商业采用；还可能与 Manifold 技术相近，但没有证据表明双方争夺相同客户或预算。

**具体做法：** 两个创业公司验证 Agent 分组核查 10 个对象，主 Agent补齐大厂项目与跨对象一致性，逐项记录：

- 动作是否影响模型所表示的未来状态；
- 总部和主要法律/经营主体是否满足非中国范围；
- 外部获得方式是公开 API、申请制入口、下载/自托管还是仅演示；
- 采用证据来自厂商、伙伴还是客户第一方；
- Gate 3 是否只能写成“相对于公开锚点的条件性判断”。

**AI/工具为什么在这里有用：** 结构化验证让相同问题覆盖所有对象，减少“知名公司获得更宽松标准”的偏差；我发起的红队复核再专门攻击措辞过度和状态迁移错误。

**这一步的结果不是排行榜，而是组合选择：**

- **World Labs**：空间世界产品/API 与实时导航研究；
- **Odyssey**：实时 world-stream 开发者服务；
- **Runway**：内容平台向 Worlds 与 Robotics 两条世界模型分支迁移；
- **Decart**：公开计价的 driving-first Preview API；
- **NVIDIA Cosmos 3**：可下载、自托管的动作条件组件平台。

保留 Runway 而没有用 Genie 3 替换它，不是因为 Runway “能力更强”，而是因为它提供公开申请制的产品与应用入口；Genie 3 更适合作为闭源前沿能力和 Alphabet 内部适配的观察对象。维持 4 家创业公司＋1 个大厂项目，也不是忽视大厂，而是 Cosmos 3 已足以代表自托管平台风险，再加一个大厂席会降低路线互补性。

检查点 2 将结果固定为 **5 个重点对象、4 个观察对象、1 个早期信号**。Meta V-JEPA family 被修正为受限平台替代的 `core watch`，而不是因为“没有托管 API”就判为无战略关系。详见 [`checkpoint_2_recommendation_pack.md`](source-snapshot/archive/manifold-world-model-landscape/05_candidates/checkpoint_2_recommendation_pack.md) 与 [`checkpoint_2_v1_0a_control_patch.md`](source-snapshot/archive/manifold-world-model-landscape/05_candidates/checkpoint_2_v1_0a_control_patch.md)。

**为什么进入下一步：** 五席只是研究资源配置决定，还不足以支持结论；必须为每个对象主动寻找反证。

<a id="zh-dossier" data-pair-id="dossier"></a>

## 07 · 第五步：为五席做 Dossier，专门验证“尚未成立的部分”

**当时的问题：** 公司网页天然倾向展示能力，不会主动说明账户是否真实开放、依赖许可证是否闭合、合作是否付费、客户是否进入生产环境。

**具体做法：** 五份 dossier 统一回答四类问题：

1. 已经由一手来源成立的技术和产品事实是什么；
2. 哪些只是厂商或伙伴自报；
3. 哪些组件必须隔离，不能互借能力与访问状态；
4. 什么证据一旦出现，会改变当前判断。

例如，World Labs 的 RTFM 与 World API 分开处理；Runway 的 GWM Worlds 与 GWM Robotics 分开；Cosmos 的开放模型、Generator NIM 和 action 条件资产分别归属；伙伴测试不能自动升级为客户付费生产采用。

**AI/工具为什么在这里有用：** 定向查询可以并行追踪支持证据与反证，Source Card 将网页原文、时间、证据上限和限制固定下来，Evidence Ledger 再把长文拆成原子主张，避免整篇网页为一句话“背书”。

**这一步的可量化增益：**

- 形成 5 份对象 Dossier；[`固定五席`](source-snapshot/docs/results/final-five.md) 提供统一入口，方法和 QA 与对象研究分开存放；
- 执行 **58 次定向支持/反证查询**；
- 证据底座扩展为 **141 个来源、141 张来源卡和 111 条原子主张**。

更重要的研究结果是：截至研究日，五席中没有任何一个对象恢复到**客户第一方确认的付费生产部署、续约或收入证据**。公开材料能够证明供给路径已经出现，但还不能证明成熟商业采用。

**为什么进入下一步：** 单家公司 dossier 可以很深，却仍可能使用不同的叙事口径；接下来需要横向比较和独立攻击。

<a id="zh-red-team" data-pair-id="red-team"></a>

## 08 · 第六步：横向比较与 Red Team，拒绝伪精确排名

**当时的问题：** 五个对象没有共同硬件、任务、时长、失败率协议或统一商业披露。把它们压成一个总分，会制造看似精确、实际不可复核的排名。

**具体做法：** [`competitive_matrix.csv`](source-snapshot/archive/manifold-world-model-landscape/07_synthesis/competitive_matrix.csv) 只比较四个维度：技术证据、外部可获得性、商业采用上限、对 Manifold 的条件性意义。之后从三条路线攻击结果：

- 技术来源与版本归属；
- 商业访问、许可和采用措辞；
- 范围、叙事和对象边界。

技术与商业红队由独立 Agent 执行；范围/叙事任务有一次计划中的 Agent 未实际启动，最终由主 Agent 的 canonical review 与我给出的红队裁决补齐。仓库明确区分“创建请求”和“实际启动”，不会把未运行的 Agent 算成完成工作。

**AI/工具为什么在这里有用：** Red Team Agent 不负责扩写报告，而负责找错：版本漂移、证据借用、语义升级、地域未决和状态冲突。我保留最终裁决权，P0/P1/P2 只有在定点修正并复核后才能关闭。

**这一步产生的实际改进：**

- Gate 3 被改成“相对于 Manifold 公开锚点的条件性判断”，不再暗示已经争夺相同客户和预算；
- Escape、Agile Robots、Decart hands-on 等采用措辞被降到证据真正支持的上限；
- 形成 **17 个五席监测信号**和**5 个观察对象触发器**，用于未来重审，而不是把当下不确定性藏进分数。

详见 [`red_team_report.md`](source-snapshot/archive/manifold-world-model-landscape/09_red_team/red_team_report.md)、[`cross_comparison.md`](source-snapshot/archive/manifold-world-model-landscape/07_synthesis/cross_comparison.md) 和 [`monitoring_matrix.csv`](source-snapshot/archive/manifold-world-model-landscape/07_synthesis/monitoring_matrix.csv)。

**为什么进入下一步：** 只有红队后的主张才适合进入公开内容；接下来需要证明每一条可见结论都能回到 Claim 和 Source。

<a id="zh-content-lock" data-pair-id="content-lock"></a>

## 09 · 第七步：Content Lock 把“写得通”升级为“可追溯”

**当时的问题：** 一份报告即使事实大体正确，只要页面文字无法逐条映射到证据，后续编辑就可能无意中扩大结论。

**具体做法：** 将可见主张拆成 `Page Claim → Atomic Claim → Source` 映射，使用 CSV 作为权威数据，再生成 XLSX 供人工审阅；冻结 Markdown、CSV、XLSX 和 Ledger，并记录 ZIP 与文件哈希。

**AI/工具为什么在这里有用：** Agent 做对象级证据补映射和内容红队；Node.js 与 `@oai/artifact-tool` 生成工作簿；PowerShell 校验 CSV/XLSX 一致性、文件身份和 SHA256；人工再检查语义是否真的被来源覆盖。

**红队在这里捕获了什么：**

- Cosmos3-Generator NIM 被从错误的“3.0.0 GA”修正为官方 **Release 1.0.0**；
- Odyssey 的 150 秒、60 分钟和 15 分钟被重新区分，避免把默认值、连接上限和空闲断开混成 SLA；
- 原本只有聚合记录的对象页被补成逐对象证据映射；
- 许可、API、动作模式和组件归属不能在页面之间互相借用。

**这一步的结果：** 形成 **63 条唯一页面证据映射**，覆盖 10 个内容单元，并通过 CSV/XLSX 逐单元一致性和冻结哈希复核。详见 [`slide_evidence_map.csv`](source-snapshot/archive/manifold-world-model-landscape/08_content/slide_evidence_map.csv) 与 [`content_lock_v1_1a_frozen_manifest.md`](source-snapshot/archive/manifold-world-model-landscape/08_content/content_lock_v1_1a_frozen_manifest.md)。

**为什么进入下一步：** 事实和表达边界锁定后，才能安全地改变呈现形式，而不在设计阶段偷偷改写研究结论。

<a id="zh-deck" data-pair-id="deck"></a>

## 10 · 第八步：用 Storyboard 与 PPT 表达研究结论

原项目在 Content Lock 后将研究转成 10 页 Storyboard 和 PPT。Node.js 负责结构化生成，Microsoft PowerPoint 进行 1280×720 实机渲染，程序检查文本框与页面边界，人工再以 100% 尺寸和缩略图逐页检查层级、换行和视觉重点。

它经历了 4 个 PPTX 版本和多轮视觉整改，最终 10 页、252 个文本框通过机械与人工 QA。最终结论表达见 [`PPTX v1.4`](source-snapshot/archive/manifold-world-model-landscape/10_deck/manifold_world_model_landscape_v1_4.pptx)，相关生成代码、渲染记录和 QA 同时保留，便于复查内容如何被转化为页面。

<a id="zh-repository" data-pair-id="repository"></a>

## 11 · 第九步：把一次性项目整理为 Research Repository

项目结束时，输入、研究记录、证据、代码和 QA 分散在不同工作目录中。这一步把它们整理成可长期维护、可以反向检查自身判断的系统：

- 原始输入以 [`项目执行计划`](source-snapshot/inputs/original/Manifold_World_Model_Research_Project_Plan_v2.0_CN.md) 等文件为入口单独保存；
- 原工作区 333 个阶段文件经过公开发布审计后，在 [`原工作区归档说明`](source-snapshot/archive/manifold-world-model-landscape/README.md) 下保留 331 个公开安全文件；两个带机器本地路径元数据、且不含独有内容的派生 ZIP 字节包不公开，其原始 SHA256 和 16 个成员文件仍完整保留；
- Storyline、方法、Research Log、Agent 和结果由 [`docs/index.md`](source-snapshot/docs/index.md) 组织；
- Agent 创建、实际启动、输入输出角色和工具事件见 [`provenance/README.md`](source-snapshot/provenance/README.md)；
- [`scripts/audit/verify_repository.ps1`](source-snapshot/scripts/audit/verify_repository.ps1) 可机械复核输入、来源、Claims、Evidence Map、Agent 和关键哈希；
- MkDocs 与 Mermaid 将文档、流程图、思维导图和依赖图组织成可浏览站点。

这一步使用 Git、GitHub CLI、MkDocs、Mermaid 和 PowerShell 审计脚本。它的增益不是再产生新结论，而是让另一个人可以从输入开始，沿相同路径复核研究是怎样形成的。

<a id="zh-postmortem" data-pair-id="postmortem"></a>

## 12 · 这次项目留下的经验

回看整个过程，重要的不是流程有多少层，而是哪些设计真正提高了判断质量、哪些工作只是必要成本、哪些环节如果更早设计好可以减少返工。

**已经证明有效的设计：**

- 先把问题拆成 Manifold 公开锚点、非中国玩家发现和大厂替代路线三份 DR，再交叉校验，明显降低了范围混杂；
- 把“值得调查、技术成立、具有战略关系、值得占席”拆成不同状态，避免直接用知名度或演示效果代替资格判断；
- 把支持证据、反证和未知写入同一套 Source Card、Ledger 与 Decision Log，使红队可以真正修改结论，而不是只修改措辞；
- 固定检查点和 Content Lock 让 AI 的执行速度服从人的决策权，避免研究在未经确认时自动扩张。

**如果下一次再做，我会进一步升级五件事：**

1. **在 Day 0 就同时设计交付层和复盘层。** PPT 只承担结论，审计仓库从第一天同步积累，减少项目结束后的目录重组与脱敏返工；
2. **把所有审批门直接写成可执行状态机。** 不依赖聊天语境判断是否能进入下一阶段，让“技术 QA 通过”和“人已经批准”始终是两个字段；
3. **更早记录 Claim → 来源 → 发现 Agent 的归属。** 本项目保存了 Agent 名单与任务，但没有从一开始就完整建立每条 Claim 的发现 provenance；
4. **先做少量高风险页面的视觉压力测试。** 在完整 Deck 制作前验证中文字体、最长标题、最密表格和 16:9 渲染，减少后期多轮版式返工；
5. **用结果增益而不是 Agent 数量评价 AI-native。** 下一次会更明确记录每个 Agent 减少了什么遗漏、关闭了什么风险、节省了哪一类重复检查。

把这些经验记录下来，是为了让下一次研究不必重复同样的判断成本和工程返工，也让方法能够随着项目持续演化。

<a id="zh-ai-value" data-pair-id="ai-value"></a>

## 13 · AI 在这个项目中究竟增加了什么

AI 不是为了“用了很多 Agent”而存在。这个项目中真正有价值的增益只有四类：

1. **并行覆盖：** 三份 DR、多个对象、技术/商业/地域/许可可以分开审计，减少单线程遗漏；
2. **结构化记忆：** 把网页、主张、反证、状态和决定写入 Source Card、Ledger、Register 和 Decision Log，不依赖聊天记忆；
3. **对抗性复核：** 独立 Agent 和我发起的红队审查专门寻找版本错误、组件混用和措辞升级，而不是只帮报告变得更顺；
4. **机械验证：** 代码检查文件身份、哈希、工作簿一致性、页面映射和渲染边界，把人不擅长重复检查的工作自动化。

AI 没有替代的部分同样明确：研究范围、阶段审批、固定五席和 Content Lock 都由我定义并明确批准；主 Agent 对最终 canonical 文件负责；原始来源而不是 Agent 的自信程度决定一条主张能否进入结论。

整个会话记录了 33 次 Agent 创建请求，其中 30 个实际启动。这个数字本身并不代表质量；有意义的是每个 Agent 是否解决了一个边界清楚的问题，以及结果是否进入可验证的 Claim、Source 或 QA。完整角色、输入和输出见 [`agent_register.csv`](source-snapshot/provenance/agent_register.csv)、[`Agent I/O`](source-snapshot/docs/agents/agent-io.md) 和 [`Agent 编排方式`](source-snapshot/docs/agents/orchestration.md)。

<a id="zh-conclusions" data-pair-id="conclusions"></a>

## 14 · 最后得出了什么结论

海外世界模型已经从模型演示走向三种可观察的交付路径：**公开计价接口、申请制/受控入口、可下载/自托管组件**。竞争单位也从“谁的视频更像”扩大到接口、运行时、部署、集成、数据权、许可和总体拥有成本。

但截至研究日，公开证据尚不足以证明五席中的任何对象已经达到**客户第一方确认的付费生产采用**。因此，对 Manifold 更稳健的动作不是宣布谁已经成为确定竞争对手，而是：

1. 定义模型、API、部署服务和联合项目中的标准交付单元；
2. 建立动作忠实度、持久状态、几何/碰撞、失败率、延迟和 TCO 的共同验证资产；
3. 预先锁定输入输出数据权、模型改进权、部署与再分发规则。

完整结论和五席证据边界见 [`最终结论`](source-snapshot/docs/overview/final-conclusions.md)、[`固定五席`](source-snapshot/docs/results/final-five.md) 与 [`观察名单`](source-snapshot/docs/results/watchlist.md)。

<a id="zh-audit" data-pair-id="audit"></a>

## 15 · 如果你要复核这项研究

建议按真实工作流，而不是按文件数量阅读：

1. 阅读上面的三份 Deep Research，理解最初有哪些线索；
2. 查看 [`input_manifest.csv`](source-snapshot/archive/manifold-world-model-landscape/01_inputs/input_manifest.csv) 和 [`eligibility_register.csv`](source-snapshot/archive/manifold-world-model-landscape/03_universe/eligibility_register.csv)，确认输入如何变成对象登记；
3. 查看 [`sources.csv`](source-snapshot/archive/manifold-world-model-landscape/04_evidence/sources.csv)、[`来源卡清单`](source-snapshot/archive/manifold-world-model-landscape/04_evidence/source_reopen_queue.csv) 和 [`evidence_ledger.csv`](source-snapshot/archive/manifold-world-model-landscape/04_evidence/evidence_ledger.csv)，抽查 Claim 是否回到原始来源；
4. 阅读 [`固定五席`](source-snapshot/docs/results/final-five.md) 和 [`横向比较`](source-snapshot/archive/manifold-world-model-landscape/07_synthesis/cross_comparison.md)；
5. 对照 [`Red Team 报告`](source-snapshot/archive/manifold-world-model-landscape/09_red_team/red_team_report.md) 查看哪些结论被降级、修正或保留；
6. 运行机械审计：

```powershell
powershell -ExecutionPolicy Bypass -File source-snapshot/scripts/audit/verify_repository.ps1
```

本地浏览文档：

```powershell
python -m pip install -r source-snapshot/requirements-docs.txt
mkdocs serve -f source-snapshot/mkdocs.yml
```

完整构建：

```powershell
mkdocs build --strict -f source-snapshot/mkdocs.yml
```

<a id="zh-current-boundaries" data-pair-id="current-boundaries"></a>

## 附录 · 当前边界

- 仓库为公开研究过程记录，任何人均可能查看、索引或通过 GitHub 平台功能 Fork；
- 原始网页可能继续变化，Source Card 固定的是研究截至日的支持内容与限制；
- 原始完整 Codex 会话包含系统信息和无关后续任务，因此不直接提交；仓库保存经过清理的 Agent、工具、决策和证据记录；
- 原项目没有实际生成 PDF；PPTX v1.4 是本次研究的最终 10 页结论版本，生成代码与 QA 记录均保留在仓库中。

核心一手来源入口：

- [Manifold WorldScape](https://manifoldai.cn/blogs/WorldScape.html)
- [World Labs](https://www.worldlabs.ai/about)
- [Odyssey](https://odyssey.ml/the-gpt-2-moment-for-world-models)
- [Runway GWM-1](https://runwayml.com/research/introducing-runway-gwm-1)
- [Decart Oasis](https://decart.ai/oasis)
- [NVIDIA Cosmos 3](https://research.nvidia.com/labs/cosmos-lab/cosmos3/)

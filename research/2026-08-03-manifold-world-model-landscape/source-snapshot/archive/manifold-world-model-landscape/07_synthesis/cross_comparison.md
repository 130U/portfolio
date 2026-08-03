# 五席非评分式横向比较

**截至：** `2026-07-14`  
**状态：** `phase_4_cross_comparison`  
**适用基线：** `CP2 推荐包 v1.0 as amended by v1.0a`  
**规则：** 不计算总分、不生成序位、不把不同组件或不可比协议拼成性能排名。

## 1. 执行结论

固定五席代表五种不同但可并存的条件性风险路径：World Labs 是“空间世界产品/API＋实时导航研究路线”，Odyssey 是“厂商文档所示的实时 world-stream developer service”，Runway 是“创意视频基础模型向 Worlds/Robotics 双分支迁移”，Decart 是“按秒计费的 driving-first Preview API”，Cosmos 3 是“可下载模型材料＋自托管 runtime 的开放组件平台”。

这些路径均相对于 Manifold 的公开 WorldScape / WorldScape Policy 锚点成立；没有一条可以证明当前客户、预算、商业交付或现实采购位置已经重合。五对象都通过了技术资格，但“通过门 2”只说明动作/控制对模型所表示的后续状态有可审计影响，不等于物理准确、长时稳定、独立验证或生产成熟。

## 2. 五对象的非排名式区别

| 对象 | 主要风险机制 | 可审计外部路径 | 商业采用证据上限 | 决定性限制 |
|---|---|---|---|---|
| World Labs | `potential_platform_substitution` + `evidence_backed_future_market_competition` | Marble public web product；World API publicly priced paid/PAYG | 厂商自报 early integration；供应商托管 prototype/PoC 与 workflow demo | RTFM 与 Marble/API 分立；动态/物理与客户采用未闭合；服务含 competitive-use restrictions |
| Odyssey | `potential_product_substitution` + `potential_platform_substitution` + future competition | vendor-documented prototype API、API key 与 JavaScript/Python integration docs | `Not established`；只有合同框架和供应商自报云合作 | 实际账户与持续调用未独立确认；可撤销、无默认服务等级；当前默认单流上限 150 秒、当前默认单连接上限 60 分钟、无活动流 15 分钟自动断开 |
| Runway | future competition + potential product/platform substitution | Worlds 公开申请制 early access；Robotics 申请/洽谈式 SDK/cloud/custom/on-prem | 只有 Runway 自报合作 | Worlds/Robotics/Characters 不得互借；实际 access、独立验证与伙伴确认均未闭合 |
| Decart | `potential_product_substitution` + `potential_platform_substitution` | public account-based metered Preview API，$0.02/sec 快照 | priced supply path only | driving-first 窄动作；独立 hands-on 反证；Beta、数据与责任条款摩擦 |
| NVIDIA Cosmos 3 | `potential_platform_substitution` + future competition + partial product substitution | 可下载/自托管模型材料；厂商文档化 policy/forward/inverse online path；分立 T2V/I2V NIM | action core 仅 Agile 伙伴自报内部 neural-simulator；Centific/Ailytics 仅相邻生态 | 精确版本化 stable action runtime、action NIM、独立复现、TCO 与客户侧付费生产证据未闭合 |

表中顺序沿用对象 ID，仅用于可追踪性，不表示优先级或强弱。

## 3. 横向模式

### 3.1 技术资格与技术成熟度必须分开

- World Labs 的 RTFM、Odyssey-2 Pro、Runway GWM Worlds、Decart Oasis 3 与 Cosmos 3 forward dynamics 都能说明动作或位姿对后续状态有条件性影响。Runway Robotics 与 Cosmos Policy/inverse dynamics 仅作 Anchor B 相关组件，不独立承担或扩大门 2。
- 五对象均未达到“由独立团队在同一或可比协议下完成系统级复现”的证据上限。
- World Labs 与 Decart 有独立产品体验/分析，但它们主要提供反证，不是 validated system。
- Runway Robotics 只提供单一 Franka tabletop 域的供应商自评相对策略排序；Cosmos 的榜单位置是会随提交变化的版本化快照；均不能升级为横向领先结论。

### 3.2 外部访问是不同配置，不是单轴排名

- World Labs：专有 public web product 与公开计价 API。
- Odyssey：厂商文档所示的 hosted prototype API；实际账户获取和持续调用未独立确认。
- Runway：申请/洽谈式入口；没有自助调用或公开合同证据。
- Decart：公开账户、API key 与按秒计费的 hosted Beta API。
- Cosmos 3：明确的下载/self-host 路径与厂商文档化的 policy/forward/inverse 在线调用；精确版本化 stable runtime、独立执行和 action NIM 仍分别未闭合，分立 NIM 产品面不能借用 action capability。

“可下载”不自动优于“托管 API”，“公开价格”也不自动优于“申请入口”；真正的采购选择还取决于可靠性、许可、算力/TCO、集成、人力和任务验证。当前证据不足以把这些配置压成一条成熟度序位。

### 3.3 商业采用是全组共同的证据短板

- 没有对象恢复到客户侧可审计的 paid contract、续约或收入。
- 没有对象恢复到客户第一方确认的 external production deployment。
- World Labs 的 Escape、Lightwheel 是供应商托管证据；Odyssey 只有合同框架；Runway 只有供应商自报合作；Decart 只有价格与产品体验；Cosmos action core 只有 Agile 伙伴自报，Centific/Ailytics 只支持相邻项目生态。
- 因此，所有 Gate 3 机制仍为 `Analyst inference / conditional against public anchor`。

### 3.4 平台绕行路径已出现，但摩擦不同

- World Labs 的摩擦在动态/物理验证、专有 API、competitive-use restrictions，以及 User Content（Input/Output）可用于模型训练：免费账户许可不可撤销，付费账户仅可前瞻性退出。
- Odyssey 的摩擦在 prototype、可撤销访问、时长限制、无默认 SLA、账户未独立确认，以及虽由客户拥有 Customer Data、Odyssey 仍取得 perpetual/irrevocable/transferable/sublicensable 的训练、测试和改进等许可。
- Runway 的摩擦在申请/洽谈、组件分裂、许可文本缺失与公司自证。
- Decart 的摩擦在窄动作空间、Beta 法律边界、数据训练权与负面 hands-on。
- Cosmos 的摩擦在 NVIDIA 硬件/runtime 绑定、分层许可、action product 未稳定、TCO 与独立复现。

这些摩擦为 Manifold 可能的领域验证、端到端交付、跨硬件部署、定制数据与客户集成保留空间；但 Day 0 仍缺 Manifold 实际买方、标准交付形态、商业阶段和未来路线，不能把该空间写成已确认优势。

## 4. 两个 Manifold 锚点的覆盖

### Anchor A — WorldScape lens

五对象均能从不同任务侧与 Anchor A 比较：World Labs RTFM 是 pose-conditioned navigation；Odyssey 是 action-conditioned world stream；Runway Worlds 是 camera/navigation-conditioned exploration；Decart 是 driving-first ego rollout；Cosmos 是多 embodiment forward dynamics。它们没有共同硬件、分辨率、时长、动作空间、数据集或失败率协议，不能直接排序。

### Anchor B — WorldScape Policy lens

直接相关者只有 Runway Robotics 与 Cosmos 3 Policy/inverse branches；World Labs、Odyssey、Decart 目前只提供或设想 world/environment rollouts，未恢复可与 WorldScape Policy 对应的自有闭环 policy 系统。即使是直接相关者，Runway 的单臂 tabletop 相对 policy ranking、Cosmos 的 recipe/模型材料与 WorldScape Policy 的 PIPER 双臂公司自评仍不可比。

## 5. 五席各自保留的研究价值

- **World Labs：** 观察 research renderer 如何与公开计价/PAYG API、显式空间输出在同公司演进，同时检验产品层与技术层不互借成熟度。
- **Odyssey：** 观察“实时世界流即服务”是否从 prototype 文档走向可独立调用、具 SLA 的开发者基础设施。
- **Runway：** 观察成熟创意模型团队能否把同一基础架构拆成可探索世界与机器人 rollout 两个产品面，并取得外部验证。
- **Decart：** 观察按秒计费能否克服 driving-first、长时一致性、数据权利和可靠性问题；独立负面体验为反证提供锚点。
- **Cosmos 3：** 观察开放模型材料、self-host runtime、NIM 和伙伴生态能否真正收敛为稳定 action product，而不是分立组件集合。

这里的“研究价值”是组合互补性说明，不构成公司强弱或投资排序。

## 6. 12–24 个月监测逻辑

监测只对可验证事件触发重审，固定五席的 17 条信号见 `monitoring_matrix.csv`；未入选五对象的升级触发器见 `watch_only_monitoring.csv`，只用于非评分式重审，不自动换席：

1. **访问/产品化：** 从 preview、申请、文档或 merged main 进入可独立调用、版本化 API、stable release 或 action NIM。
2. **独立验证：** 同一或可比协议下披露动作忠实度、长时状态、几何/碰撞、失败率、硬件和成本。
3. **商业采用：** 客户第一方确认 paid pilot 或 production use，并提供任务、范围、支付/续约或可靠性信息。
4. **许可/数据：** 明确服务、模型材料、客户端、NIM、第三方依赖、数据训练权与 redistribution 的完整链条。

watch-only 对象为 Genie 3 / Project Genie、MIRA、Overworld、Meta V-JEPA family 与 AMI Labs。其触发器分别保留企业/开发者访问、世界模型 API 归属、地域与长时独立验证、动作域与 checkpoint 许可、AMI 自有技术资产等 CP2 已批准条件；任何触发只重开对应事实或组合互补性判断，不能自动改变固定五席或 `4+1`。

供应商发布、合作公告、申请表、价格页、伙伴自报或免费 credits 本身不会触发“客户采用”升级。

## 7. 范围与冻结边界

- 固定五席、`4+1` 结构与 CP2 批准继续有效，不因本比较重开。
- VLA、机器人基础模型、仿真/合成数据、纯视频、纯 3D 与垂直内部组件仍不得入池、占席或获得对象 dossier。
- 本阶段未形成总分、排名或“更强/第一”判断。Cosmos 的限定唯一性句仅保留为 CP2 已批准的三候选比较事实，并明确不构成 Phase 3/4 排名。
- Storyboard、页面内容/视觉落版、事实锁定、对象专页、PPT 与 PDF 继续冻结。横向比较完成后只允许启动独立 Red Team；Content Lock 仍需用户明确批准。

## 8. 结构化附件

- `competitive_matrix.csv`：五对象统一字段的非评分式竞争矩阵。
- `monitoring_matrix.csv`：17 条固定五席可审计事件阈值与重审动作。
- `watch_only_monitoring.csv`：5 个未入选/隔离对象的非占席升级触发器。
- `phase_4_comparison_review.xlsx`：由两张 canonical CSV 派生的可视复核工作簿；不作为独立事实源。

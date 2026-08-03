# O-001 World Labs dossier

**对象类型：** 非中国世界模型创业公司  
**截至：** `2026-07-14`  
**固定席位状态：** `approved_final_five`  
**dossier 状态：** `completed_phase_3`  
**主要比较镜头：** Anchor A / WorldScape lens；Anchor B 仅作下游工作流参照  
**非排名式战略优先级：** `高潜在威胁`  

## 待检验假设与当前裁决

> 相对 Manifold 公开锚点，World Labs 的 Marble / World API 已形成有条件的平台替代路径，并由 RTFM 的导航型实时世界模型路线支撑未来市场竞争；但 RTFM 的技术证据不得借用 Marble 的产品成熟度，当前证据不足以证明现实客户、预算或交付重合。

**当前裁决：`PARTIALLY SUPPORTED`。** 公开 API、PAYG 计费、模型版本、导出权利和下游集成工作流支持“可调用、可嵌入、可输出”的平台路径；RTFM 支持实时、持续导航世界的技术方向。反面是：RTFM 是独立 research preview/learned renderer，动态世界和物体交互仍属未来扩展；Marble 的碰撞 mesh 与下游物理引擎不能证明 Marble 自身具有准确动态仿真；独立产品体验也记录静态世界、边缘 morphing 与后续物理层缺口。公开采用仅到供应商托管 prototype/PoC、厂商自报早期集成或合作演示，无法确认与 Manifold 的客户、预算或交付重合。

## 1. 一句话判断

World Labs 对 Manifold 的一项现实风险不是“已证实的同客户产品替代”，而是 Marble / World API 已把空间世界生成做成可付费调用、可导出并可接入创意与仿真流程的产品层，同时 RTFM 展示向实时持久世界演进的技术路径；两者共同构成条件性平台替代与未来市场竞争，但不能互借成熟度。

## 2. 公司与项目边界

| 层级 | 证据所支持的边界 | 不得外推 |
|---|---|---|
| 公司 | World Labs 由 Fei-Fei Li、Justin Johnson、Christoph Lassner、Ben Mildenhall 创立；法律文本列出 World Labs Technologies, Inc. 与 San Francisco 地址。[S-WL-001](https://www.worldlabs.ai/about) [S-WL-004](https://www.worldlabs.ai/terms-of-service) | 不据此推断客户、收入、总部法定标签或商业阶段。 |
| RTFM | 2025-10-16 发布的 research preview；按目标 3D camera pose 生成未来视图，以 posed frames 和 context juggling 维持空间记忆；公司明确称其为 learned renderer。[S-WL-002](https://www.worldlabs.ai/blog/rtfm) [S-WL-006](https://www.worldlabs.ai/blog/taxonomy-of-world-models) | 不得借用 Marble 的 API、计费、mesh、客户工作流或采用；不得写成已支持动态对象交互或物理仿真。 |
| Marble | 面向文本、图像、视频和粗 3D 布局生成、编辑、扩展、组合并导出 3D 世界的产品族；当前模型包括 Marble 1.0、1.1、1.1 Plus 等。[S-WL-008](https://www.worldlabs.ai/blog/marble-world-model) [S-WL-009](https://docs.worldlabs.ai/marble/release-notes) | 不能把视觉/碰撞 mesh 输出等同于经独立验证的动态世界模型或物理引擎。 |
| World API | 对 Marble 模型的公开可编程访问层；与 Marble web app 分开计费，支持 API key、usage、billing 和多种导出工作流。[S-WL-003](https://www.worldlabs.ai/blog/announcing-the-world-api) [S-WL-005](https://docs.worldlabs.ai/api/models) [S-WL-010](https://docs.worldlabs.ai/api/pricing) | API 成熟度不能升级 RTFM；可付费调用不等于具名客户、生产部署或收入规模。 |
| 下游工具与案例 | Escape、Lightwheel、Isaac Sim、MuJoCo、RoboSuite 等说明 Marble 输出可进入外部工作流。[S-WL-007](https://www.worldlabs.ai/case-studies/escape) [S-WL-011](https://www.worldlabs.ai/case-studies/2-lightwheel) | 外部物理引擎、SimReady 资产、机器人或评测层的能力不能归给 Marble core。 |

## 3. 核心团队与归属

- Fei-Fei Li：联合创始人、CEO；公司官网将其与三位技术联合创始人共同列出。
- Justin Johnson、Christoph Lassner、Ben Mildenhall：联合创始人；官网仅支持其共同创办与技术背景，不在本 dossier 中推断具体当前分工。
- RTFM、Marble 与 World API 均由 World Labs 官方页面发布；商业主体以条款中的 World Labs Technologies, Inc. 为准。

团队声誉和融资不作为技术资格或成熟度替代证据。本轮没有用名人、投资方或融资规模提升竞争标签。

## 4. 技术路线与主要模型

### RTFM：实时导航型 learned renderer

- 自回归 diffusion transformer 以过去帧为上下文，按目标 3D camera pose 生成下一视图。
- posed frames 构成空间记忆，context juggling 检索邻近历史，支持回访与大场景几何持续性。
- 公司称单 H100 可实现 interactive framerates，但没有公开完整 FPS、分辨率、交互频率和独立复现条件，因此不进入可比性能排序。
- 公司在同一技术文中把动态世界和用户与生成世界交互列为未来扩展；这使 RTFM 当前更接近持久导航 renderer，而不是已证明物体级动力学 simulator。

### Marble：显式空间输出与外部仿真工作流

- 从文本、单图、多图、视频或粗 3D 布局生成可导航世界，并支持编辑、扩展与组合。
- 输出包括 Gaussian splats、meshes 和 videos；官方案例显示 collider/mesh 可进入外部物理引擎和模拟器。
- World Labs 自己的 taxonomy 将 RTFM 放在 renderer，将 Marble 称为向 simulator 方向的第一步；该分类既支持路线意图，也构成反证：公司没有把当前 Marble 表述为已完成的统一动态 simulator。

## 5. 产品、接口、开放与许可

| 组件 | 技术证据 | 外部访问 | 许可/权利 | 关键限制 |
|---|---|---|---|---|
| RTFM | `Demo / company-reported research preview` | browser research preview；未见公开 API model ID、代码或权重 | 服务条款下的预览访问；无模型许可 | 与 Marble API 分离；无动态对象交互和独立长时复现。 |
| Marble web app | `Demo + shipping product` | 面向所有用户的 web product | 免费账户输出仅限个人非商业使用；付费账户输出权利按条款另行约定 | 产品开放不证明性能或采用；模型权重不开放。 |
| World API | `publicly available paid/PAYG API` | API keys、PAYG credits、公开模型 ID、价格与导出文档 | 付费/API 用户可按条款商业使用、修改、分发或再许可输出；服务访问本身仍是专有、可撤销权利 | 输出可商用不等于可用服务做竞争分析/benchmark、开发竞争模型或复制核心功能；另受额度、Order Form 和第三方材料约束；无公开模型权重。 |
| Marble outputs | splat、mesh、video | 可导出至下游工具 | 输出权利取决于账户/订单与条款；输入和第三方权利仍由用户负责 | 输出 mesh 不等于准确物理模型。 |

**数据治理边界：** 条款把 Input 与 Output 合称 `User Content`，并允许 World Labs 将其用于业务、营销、benchmark 和模型训练。免费账户的该许可不可撤销；付费账户可退出，但退出只向前生效，退出前已训练模型不要求移除相关数据。该数据权与用户对合格付费/API 输出的商业权利并存，不能互相抵销。[S-WL-004](https://www.worldlabs.ai/terms-of-service)

**成熟度拆分：**

- `technical_evidence_stage`：RTFM＝Demo/research preview；Marble＝Demo/产品化空间生成系统，但物理准确性未独立验证。
- `external_access_stage`：RTFM＝Public preview；Marble＝publicly available web product；World API＝publicly priced paid/PAYG API（厂商未在该页面使用 GA 原词）。
- `commercial_adoption_stage`：company-reported early integration + supplier-hosted prototype/collaboration only；无 partner-confirmed paid pilot、外部 production deployment 或 revenue evidence。

## 6. 客户任务、商业证据与采用阶段

World API 的公开任务覆盖创意/沉浸媒体、建筑设计、空间内容与机器人仿真环境生成。公开 API、价格和可商用输出权利证明产品与应用入口真实存在，但不证明某一买方、预算或 Manifold 当前交付形态相同。

- **Escape.ai：** World Labs 托管案例显示 Creator Studio 与 Marble API 形成 working prototype；只能记为供应商托管 PoC，不是付费或生产部署。
- **Lightwheel：** World Labs 托管案例描述 Marble 世界进入 Omniverse/Isaac Sim，再叠加 Lightwheel 的物理资产、行为与评测层；属于工作流/合作演示，不是 Marble 自身物理能力或外部生产采用。
- **Preview、Fenestra 等发布页线索：** 只登记为 World Labs 厂商自报的 early product integration，不是伙伴侧确认、付费或生产采用。
- **公开定价：** 证明 API 已具备 PAYG 商业入口；不证明收入规模或客户数量。
- **独立产品体验：** TechCrunch 试用确认商业产品/导出路径，同时观察到边缘 morphing 与同一提示词效果漂移；Ars Technica 将 Marble 描述为可导航但静态的 3D 世界，内生 dynamics/physics 需外部工具补入。[S-WL-012](https://techcrunch.com/2025/11/12/fei-fei-lis-world-labs-speeds-up-the-world-model-race-with-marble-its-first-commercial-product/) [S-WL-013](https://arstechnica.com/ai/2026/07/simulating-everything-sort-of-the-promise-and-limits-of-world-models/)

## 7. 过去 18 个月关键事件

| 日期 | 事件 | 决策含义 |
|---|---|---|
| 2025-09-16 | Marble limited-access beta preview | 从研究展示进入有限产品预览。 |
| 2025-10-16 | RTFM research preview | 显示单 GPU、实时、pose-conditioned、持久导航路线；动态交互仍是未来工作。 |
| 2025-11-12 | Marble 面向所有用户开放；发布多项案例 | 产品可获得性增强；案例采用层级仍需逐项降级。 |
| 2026-01-21 | World API 发布 | 形成可编程、计费和可嵌入的外部平台入口。 |
| 2026-04-02 | Marble 1.1 / 1.1 Plus 进入 release notes | 模型版本和大世界产品继续迭代。 |
| 2026-06-03 | 发布 renderer/simulator/planner taxonomy | 明确 RTFM 与 Marble 当前边界，并公开统一世界模型的未来方向。 |

## 8. 与 Anchor A、Anchor B 的重合与差异

### Anchor A / WorldScape lens：高重合，但不是同一技术形态

重合：两者都面向连续可探索空间、相机/导航控制、持久状态或记忆与实时/交互体验。RTFM 的 pose query 与 WorldScape 的相机轨迹条件可在技术门层面对照。

差异：WorldScape 公开锚点强调 action-conditioned 连续视觉预测，并报告操作动作；RTFM 当前只证明导航 pose 对未来视图的条件影响，动态世界仍是未来扩展。Marble 提供显式 splat/mesh 与 publicly available paid/PAYG API，而 Manifold 公开锚点尚未证实代码、权重、API、SDK 或商业交付。Anchor A 的双边来源映射为 [S-MAN-002](https://manifoldai.cn/blogs/WorldScape.html)、[S-MAN-003](https://manifoldai.cn/assets/file/WorldScape.pdf) 对 S-WL-002/003/005/008/010/012/013。

### Anchor B / WorldScape Policy lens：间接重合

Marble 可生成并导出环境供外部 simulator、机器人、策略或评测系统使用；但本轮没有证据证明 World Labs 自身提供 world-to-action planner、真实硬件策略结果或类似 WorldScape Policy 的闭环 policy system。它更像环境供给层，而非已验证的策略层替代。Anchor B 的双边来源映射为 [S-MAN-004](https://manifoldai.cn/assets/file/WorldScapePolicy.pdf) 对 S-WL-007/011。

## 9. 条件性竞争机制、优先级与置信度

| 机制 | 状态 | 依据 | 置信度 |
|---|---|---|---|
| `potential_platform_substitution` | 条件性成立 | publicly available paid/PAYG API、输出与导出、外部工作流可使客户在空间世界生成环节绕开定制供应商 | 中高；Manifold 实际交付和买方未知，competitive-use restrictions 收窄直接绕行 |
| `evidence_backed_future_market_competition` | 条件性成立 | RTFM→Marble→World API 的版本节奏及公司公开统一世界模型路线 | 中高；未来进入不等于当前客户重合 |
| `potential_product_substitution` | 当前不作为主要机制 | Marble 可完成部分空间世界生成任务，但 Manifold 产品、标准交付和客户未知，RTFM 也未证明动态模拟 | 低至中 |

平台路径：World API/Marble → 生成可导航空间世界 → 导出 splat/mesh → 接入创意工具或外部 simulator → 客户减少独立定制世界生成工作。剩余摩擦包括物理/几何验证、动态交互、外部模拟器、人工资产/任务层、专有 API、客户集成，以及条款对竞争分析、benchmark、竞争模型/产品和复制核心功能的限制。

Gate 3 使用候选侧 S-WL-002/003/004/005/007/008/010/011/012/013 与锚点侧 S-MAN-002/003/004 的双边证据；仍为 `Analyst inference / conditional`，不证明共同客户、预算或商业交付。

## 10. 监控信号与触发阈值

1. **RTFM 产品化阈值：** 官方 API/SDK 出现 RTFM model ID，或公开动态对象/agent interaction 分支；触发从“技术路线”重审为直接产品/平台路径。
2. **系统验证阈值：** 独立团队在公开协议下证明长时回访、尺度/几何、碰撞和动作条件动态一致性；触发技术证据从 Demo 向 Validated system 重审。
3. **商业采用阈值：** 出现具名付费 pilot、外部生产部署或可核验客户合同/收入，而非供应商托管案例；触发商业采用与产品替代机制重审。

## 11. 反证、冲突与未知

- World Labs 自己将 RTFM 归为 renderer，并承认动态世界/交互是未来扩展。
- Marble 的 visual world、collision mesh 和外部物理引擎组合不能证明其自身具有可靠物理动力学。
- TechCrunch 与 Ars Technica 的独立体验/分析分别提供 morphing、结果漂移与静态场景/外部 dynamics 依赖的反证；它们不是标准 benchmark。
- 供应商托管案例同时包含外部引擎、资产、机器人和任务层，能力归属必须拆分。
- 未发现 RTFM 独立长时复现、公开代码/权重、API model ID 或许可证。
- 未发现具名 paid pilot、外部 production deployment、收入或与 Manifold 现实买方/预算重合的证据。
- Manifold 实际客户、产品、交付、预算与路线未知，因此任何替代判断均为相对公开锚点的条件性分析。

## 12. 决策承载型主张与来源

| 主张 | 类型 | 核心来源 | 限制 |
|---|---|---|---|
| RTFM 以 3D pose 条件、posed-frame memory 支持持续导航并通过技术门 | Company-reported + Analyst inference | [S-WL-002](https://www.worldlabs.ai/blog/rtfm) | 无独立长时复现；动态交互未完成。 |
| RTFM 与 Marble / World API 是分立证据单元 | Fact / component boundary | [S-WL-005](https://docs.worldlabs.ai/api/models) [S-WL-006](https://www.worldlabs.ai/blog/taxonomy-of-world-models) | API 模型表仅列 Marble。 |
| Marble / World API 具备 publicly available paid/PAYG 和可商用输出路径 | Fact from vendor docs | [S-WL-003](https://www.worldlabs.ai/blog/announcing-the-world-api) [S-WL-004](https://www.worldlabs.ai/terms-of-service) [S-WL-010](https://docs.worldlabs.ai/api/pricing) | 输出权利与服务访问限制分开；不证明客户量、收入或生产采用。 |
| 独立产品体验显示边缘 morphing、结果漂移及静态世界/dynamics 缺口 | Independent hands-on/analysis | [S-WL-012](https://techcrunch.com/2025/11/12/fei-fei-lis-world-labs-speeds-up-the-world-model-race-with-marble-its-first-commercial-product/) [S-WL-013](https://arstechnica.com/ai/2026/07/simulating-everything-sort-of-the-promise-and-limits-of-world-models/) | 单记者/媒体分析，不是系统复现。 |
| 平台替代与未来市场竞争相对公开锚点条件性成立 | Analyst inference / conditional | S-WL-002/003/004/005/006/007/010/011/012/013 + S-MAN-002/003/004 | Manifold 买方、预算与交付未知。 |
| Escape 仅支持 supplier-hosted working prototype / PoC | Company-reported with adoption downgrade | [S-WL-007](https://www.worldlabs.ai/case-studies/escape) | World Labs 托管；无付费或生产证明。 |
| Lightwheel 仅支持 supplier-hosted collaboration / workflow demo | Company-reported with adoption downgrade | [S-WL-011](https://www.worldlabs.ai/case-studies/2-lightwheel) | World Labs 托管；未恢复 Lightwheel 自有页面确认，无付费或生产证明。 |

## 研究完整性记录

- 查询数：`9`；其中预设反证查询 `4`，占 `44.4%`，已登记于 [`Dossier_Query_Audit.csv`](../06_dossier_support/Dossier_Query_Audit.csv)。
- 来源独立性：技术、产品与法律入口以公司原始页为主；TechCrunch 与 Ars Technica 提供产品反证，但采用仍无客户侧或独立三源支持，已明确标为证据不足。
- 关键 URL 与 source cards 已复核；决策承载主张已写入 Evidence Ledger。未生成评分或排名。

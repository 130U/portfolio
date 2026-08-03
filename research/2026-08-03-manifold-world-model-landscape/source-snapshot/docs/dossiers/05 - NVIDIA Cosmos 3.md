# 05｜NVIDIA Cosmos 3

> **阅读版：** 本页面向普通读者，内容来自已批准的 NVIDIA Cosmos 3 dossier。审计用权威文件保留在 [历史工作区](https://github.com/Madarame87/manifold-world-model-research/blob/main/archive/manifold-world-model-landscape/06_dossiers/O-005_nvidia_cosmos_3_dossier.md)。

- **对象：** 非中国大厂的具体世界模型项目
- **研究截止：** 2026-07-14
- **当前状态：** 固定五席之一；对象研究已完成
- **比较视角：** 同时对照 Manifold 的 WorldScape 与 WorldScape Policy
- **当前判断：** 平台替代风险较高（非评分、非排名）

## 待检验假设与裁决

> 相对 Manifold 公开锚点，Cosmos 3 已形成可下载、自托管且具组件级商用路径的动作世界模型平台，并凭伙伴集成线索形成现实绕行可能；但稳定动作 NIM、独立系统复现和客户侧付费生产证据仍未闭合，因此只构成条件性平台替代、未来市场竞争与部分产品替代。

**裁决：`PARTIALLY SUPPORTED`。** Cosmos 3 的 Nano/Super、代码、action recipes、OpenMDW-1.1 与厂商文档化的 vLLM-Omni policy/forward-dynamics/inverse-dynamics 在线调用已形成真实下载和自托管路径。反面是 NIM for Cosmos WFM 3.0.0 文档快照中的 Cosmos3-Generator Release 1.0.0 初始 GA 产品面只列 T2V/I2V；精确版本化 stable action runtime、独立执行、action NIM GA、企业 SLA 与生产验证仍未闭合；官方模型卡承认 action-state drift、几何/物体持久性、碰撞和物理准确性限制；action-core 采用仅到 Agile Robots 伙伴侧自报，没有客户侧付费或外部生产证据。

## 1. 一句话判断

Cosmos 3 通过可下载模型材料与自托管 runtime 形成开放组件层的平台风险，但它不是已验证的企业级动作世界模型标准：核心 artifact、runtime、NIM 和关联 NVIDIA 栈必须分别判断，现实采用仍停在伙伴自报层。

## 2. 项目边界

| 层级 | 纳入 O-005 | 不得借用 |
|---|---|---|
| 核心模型 | Cosmos3-Nano、Cosmos3-Super、Nano-Policy 及 forward/inverse dynamics、policy 等 Cosmos 3 模式。[S-NV-001](https://research.nvidia.com/labs/cosmos-lab/cosmos3/) [S-NV-002](https://huggingface.co/nvidia/Cosmos3-Nano) [S-NV-017](https://huggingface.co/nvidia/Cosmos3-Super) | 历史 Cosmos 模型、其他 NVIDIA 项目的能力不得自动归给 Cosmos 3。 |
| 模型材料 | 明确标注 OpenMDW-1.1 的权重、代码、训练/评测资源 | 未标注第三方代码、数据、依赖、NIM 或托管服务。 |
| 自托管 runtime | NVIDIA/cosmos、Cosmos Framework、Diffusers、vLLM/vLLM-Omni/SGLang 等具体路径 | main/merged artifact 不自动等于稳定发行、NIM、SLA 或生产验证。 |
| NIM 访问层 | Cosmos3-Generator、Reasoner 等分立产品面 | OpenMDW 权利和 action capability 不得借给 NIM；未审计的托管端点不用于权利或成熟度判断。 |
| 关联 NVIDIA 栈 | Curator、Evaluator、DGX Cloud 等只作集成环境登记 | Isaac、GR00T、Omniverse、Jetson 的性能、客户或收入不得借给 O-005。 |

## 3. 项目归属与核心团队

- Cosmos 3 归属 NVIDIA Cosmos Lab / NVIDIA Research，并由 NVIDIA 的模型、开发者与 NIM 平台承接分发。
- 技术报告、模型卡、官方 benchmark 和产品主张均先视为 NVIDIA 第一方证据，不是独立验证。[S-NV-008](https://arxiv.org/abs/2606.02800)
- 项目在母公司层面通过 NVIDIA Santa Clara 公司地址满足非中国范围；NVIDIA 全球经营不改变本轮 owner-level 地域判断。[S-NV-005](https://www.nvidia.com/en-us/contact/)

## 4. 技术路线与主要模型

Cosmos 3 将文本、图像、视频、声音和动作放入统一 omnimodal world-model 路线。本研究只使用与状态演化/动作相关的分支：

- **Forward dynamics：** 以观察和 control/action 序列为条件生成未来视频状态。
- **Inverse dynamics：** 从视频与任务条件预测动作；属于 Anchor B/world-to-action 相关组件，不承担门 2。
- **Policy：** 从观察与指令预测 action chunks。
- **Embodiment：** 模型卡列出机器人、自动驾驶、ego/camera pose 等具体 action representations。

**门 2 只由 forward dynamics 闭合：** 输入 action/control 对模型表示的后续视频状态产生时间一致的条件影响，而非只输出 action chunk。Policy 与 inverse dynamics 只作 Anchor B/world-to-action 相关组件登记，不能用来补齐或扩大门 2。[S-NV-001](https://research.nvidia.com/labs/cosmos-lab/cosmos3/) [S-NV-002](https://huggingface.co/nvidia/Cosmos3-Nano)

官方模型卡同时承认 temporal inconsistency、action-state drift、不稳定相机/物体运动、交互不精确、错误 3D、物体消失/变形、不真实碰撞及缺少显式 physics simulator。因此不得把“physical AI”或“物理准确”脱离限制单独使用，也不得用于 safety certification。

## 5. 产品、接口、开放与许可

| 组件 | 当前访问 | 商用权利 | 关键限制 |
|---|---|---|---|
| Cosmos3-Nano | Hugging Face 下载、Cosmos Framework 与多种 self-host recipes | 模型卡标注 OpenMDW-1.1，可用于商业及非商业用途 | 只覆盖明确 Model Materials；Linux/NVIDIA GPU/BF16 等要求；第三方权利另清理。 |
| Cosmos3-Super | Hugging Face 下载与 self-host 路径 | 模型卡单独标注 OpenMDW-1.1、commercial/non-commercial | Nano 的性能/限制不得借给 Super，反之亦然。[S-NV-017](https://huggingface.co/nvidia/Cosmos3-Super) |
| vLLM-Omni | NVIDIA 固定 revision 的模型卡与仓库已文档化 policy、forward dynamics、inverse dynamics 的自托管在线调用；PR #4102 只记录 2026-06-03 合并时 policy/forward 的历史子集 | 依具体 runtime 和模型材料许可证 | 厂商文档化示例未被本项目独立执行；仍不等于精确版本化 stable release、NIM、SLA 或生产验证。[S-NV-002](https://huggingface.co/nvidia/Cosmos3-Nano) [S-NV-004](https://github.com/nvidia/cosmos) [S-NV-018](https://github.com/vllm-project/vllm-omni/pull/4102) |
| Cosmos3-Generator NIM | 自托管 HTTP/gRPC 产品容器；在 NIM for Cosmos WFM 3.0.0 文档快照中，Cosmos3-Generator Release 1.0.0 为初始 GA | 支持矩阵指向 NVIDIA Open Model License/独立产品条款 | 当前 3.0.0 文档快照的支持矩阵只列 T2V/I2V；不得写成 action NIM/GA。[S-NV-009](https://docs.nvidia.com/nim/cosmos/3.0.0/release-notes.html) [S-NV-010](https://docs.nvidia.com/nim/cosmos/3.0.0/support-matrix.html) |
| Cosmos3-Reasoner NIM | 独立 Reasoner 容器 | 适用相应 NIM/NGC 条款 | reasoning 入口不证明动作生成。 |

许可护栏：OpenMDW-1.1、NVIDIA Open Model License、NIM 产品条款与第三方依赖是分立法律层；未登记的托管端点权利不作判断，不得写“Cosmos 3 全部开源”或“一份许可证覆盖整个栈”。[S-NV-007](https://openmdw.ai/license/1-1/) [S-NV-011](https://www.nvidia.com/en-us/agreements/enterprise-software/nvidia-open-model-license/)

## 6. 客户任务、商业证据与采用阶段

Cosmos 3 官方任务覆盖机器人、自动驾驶、smart space、world simulation、future prediction、policy 与评测。成熟度必须分三维拆分：

- `technical_evidence_stage`：research + vendor demo + runnable first-party artifacts；没有独立 validated system。
- `external_access_stage`：downloadable artifact + self-hosted recipes；NIM 的 Reasoner/T2V/I2V 为分立产品入口；action NIM/GA 未闭合。
- `commercial_adoption_stage`（action core）：Agile Robots 伙伴侧自报 early access/testing/integration/internal neural-simulator deployment；无 customer-side verification、paid contract、external production deployment 或 revenue evidence。
- `adjacent_project_ecosystem`：Centific 的 Super synthetic-video/editing 与 Nano Reasoner annotation/detection，及 Ailytics 的 search/scene/alert/SOP reasoning/select-customer beta；这些线索不提升 action-core adoption，也不证明产品替代成熟度。

| 伙伴 | 可接受表述 | 不得升级为 |
|---|---|---|
| Agile Robots | 伙伴侧自报 early access、测试、集成，并内部作为 neural simulator 用于 policy 开发/评估。[S-NV-006](https://www.agile-robots.com/en/news/detail/simulating-worlds-agile-robots-early-access-to-nvidia-cosmos-3/) | validated pilot、付费客户、外部生产部署或收入。 |
| Centific（相邻生态） | 伙伴侧自报使用 Cosmos 3 Super 做合成视频/编辑，以 Nano Reasoner 支持标注与检测工作流。[S-NV-012](https://www.centific.com/blog/centific-brings-last-mile-physical-ai-to-production-with-nvidia-cosmos-3) | action-core 采用、具名付费客户、客户侧生产验证或合同。 |
| Ailytics（相邻生态） | 伙伴侧自报将 Cosmos 3 reasoning 用于 Ailyssa 的搜索、场景/告警与 SOP 推理，并面向 select customers 处于 active beta。[S-NV-013](https://www.ailytics.ai/news/industrial-video-intelligence-reimagined-ailytics-deploys-nvidia-cosmos-3-across-heavy-industry) | action-core 采用；将 Ailytics 既有约 400 个整体部署归给 Cosmos 3；或推导付费/生产采用。 |

截至 cutoff，未恢复可审计的客户侧付费合同、生产指标、续约或外部生产部署。Ailytics 的“research to revenue”等营销语句缺客户、支付和合同细节，不能登记为收入证据。

## 7. 过去 18 个月关键事件

| 日期 | 事件 | 决策含义 |
|---|---|---|
| 2026-05-31 | Cosmos 3、Nano/Super 模型与材料发布 | 建立可下载、可自托管和组件级许可路径。 |
| 2026-06-01/02 | Agile Robots、Centific、Ailytics 发布伙伴侧说明 | Agile 支持 action-core 内部部署线索；另两项仅支持相邻项目生态；均非客户侧付费证据。 |
| 2026-06-03 | vLLM-Omni PR #4102 合并 commit `706bad2` | policy/forward-dynamics serving 进入 upstream main；该记录是合并时点历史状态，不代表后续 current state。 |
| 截至 2026-07-14 | 固定 revision 的 NVIDIA 模型卡与仓库快照 | 已文档化 policy、forward dynamics、inverse dynamics 的自托管在线调用；仍未独立执行或升级为 stable runtime/NIM/SLA。 |
| 2026-06-04 | RoboArena 后续提交改变榜单领先者 | Cosmos 技术报告中的“第一”只能保留为截至 2026-05-30 的历史快照。[S-NV-015](https://robo-arena.github.io/) [S-NV-016](https://www.eweek.com/news/chinese-startup-spirit-ai-nvidia-physical-ai-ranking-apac/) |
| 截至 2026-07-14 | NIM for Cosmos WFM 3.0.0 文档快照 | Cosmos3-Generator Release 1.0.0 为初始 GA，仍只覆盖 T2V/I2V 产品面。 |

## 8. 与 Anchor A、Anchor B 的重合与差异

### Anchor A / WorldScape lens

两者都以 observation + action/control 条件滚动生成未来视觉状态，覆盖导航、机器人或 camera-pose 空间任务。WorldScape 公开锚点强调实时导航/操作、长期空间记忆和 memory-aware cache；Cosmos 3 覆盖更广模态、embodiment 与开放 artifact，但没有同条件的实时、长时或空间记忆协议。比较映射为 [S-MAN-002](https://manifoldai.cn/blogs/WorldScape.html)、[S-MAN-003](https://manifoldai.cn/assets/file/WorldScape.pdf) 对 S-NV-001/002/008，不形成性能排名。

### Anchor B / WorldScape Policy lens

WorldScape Policy 从观察、深度、proprioception 与语言输出动作；Cosmos 3 Policy/inverse dynamics 也连接 world-to-action。前者报告 PIPER 双臂七任务公司自评，后者覆盖 DROID/AgiBotWorld/AV 等 recipes；没有可直接比较的真机成功率或独立协议。比较映射为 [S-MAN-004](https://manifoldai.cn/assets/file/WorldScapePolicy.pdf) 对 S-NV-002/004/008。

## 9. 条件性竞争机制、优先级与置信度

> **CP2 已批准的限定比较事实（不构成 Phase 3 排名）：**截至 2026-07-14，在本轮审议的三个大厂候选项目中，Cosmos 3 是唯一同时具有可下载/自托管路径和具名伙伴侧自报集成线索的对象。

| 机制 | 状态 | 依据 | 置信度 |
|---|---|---|---|
| `potential_platform_substitution` | 条件性成立 | 模型材料＋框架＋self-host runtime＋分立 NIM 产品面，可让客户自建部分 world-model pipeline | 中高；硬件、许可、稳定性和验证摩擦显著 |
| `evidence_backed_future_market_competition` | 条件性成立 | NVIDIA physical-AI 平台路线、持续 artifact 发布与伙伴集成线索 | 中；不证明当前共同客户、预算或采购 |
| `potential_partial_product_substitution` | 条件性、局部成立 | action self-host、T2V/I2V NIM、reasoning 等**分立组件**可组合覆盖部分任务 | 中；不能写成统一 action NIM 产品，生产 SLA 未闭合 |

Gate 3 是候选侧 S-NV-001/002/004/006/007/009/010/012/013/017/018 与锚点侧 S-MAN-002/003/004 的条件性分析；不证明与 Manifold 已发生同客户、预算或交付替代。

## 大厂追加字段

### A. 核心模型／访问层／关联栈

核心模型（Nano/Super/Policy/forward/inverse）→ 模型材料与 self-host runtime → 分立 NIM 访问层 → Curator/Evaluator/DGX 等关联环境。每一层的许可证、成熟度和采用分别归属。

### B. 组件级访问与商用权利

OpenMDW 只覆盖明确模型材料；NIM 适用其产品许可与企业协议；未登记的托管端点权利保持 `not audited`，不得推断 production、redistribution 或 SLA；第三方依赖、数据和基础模型另行清理。

### C. 平台替代因果链

开放模型材料 → 客户下载、后训练与本地评估 → Framework/vLLM/NIM 形成部署选项 → 客户可能减少独立供应商采购 → 条件性平台替代压力。链条在稳定 action product、客户验证、production SLA 与 TCO 处中断。

### D. 采用证据等级

厂商生态声明：有；action core 的伙伴 early access/测试/集成/内部 neural-simulator deployment：仅 Agile 自报；Centific/Ailytics 为相邻项目生态线索；客户第一方验证、可审计付费合同/续约、独立外部生产部署：无。

### E. 绑定与反作用

Linux、NVIDIA GPU/CUDA、高显存、NIM/NGC/DGX 形成硬件与平台绑定。OpenMDW 降低模型材料层锁定，但 runtime、托管、计算和集成重新引入 TCO/迁移摩擦，也为跨硬件、低成本、领域验证和端到端交付的独立供应商保留空间。

### F. Why not now

稳定 action NIM/GA 未建立；官方物理/状态一致性限制明显；缺少独立复现、production reliability/TCO 与客户侧付费证据；Manifold 真实产品和买方位置未知。

### G. 竞争与合作双面性

NVIDIA 可把模型、数据、评测、serving 与计算整合成平台，压缩独立供应商价值层；Manifold 也可能把 Cosmos 3 当作底座、评测对象或部署组件。合作可能性既不降低 Gate 3 技术判断，也不构成商业采用证据。

## 10. 监控信号与触发阈值

1. **Stable runtime 阈值：** policy、forward dynamics 或 inverse dynamics 进入精确版本化 stable runtime，并公布可复现安装/兼容矩阵；这会重审 external access，但不要求企业 SLA，也不自动成为 NIM 或商业采用。
2. **Action NIM 阈值：** policy、forward dynamics 或 inverse dynamics 进入 NIM GA，并公布 API contract、支持矩阵、许可与企业 SLA；这会重审 enterprise product path。
3. **采用阈值：** 具名客户第一方确认 paid production use，并披露任务、部署范围、指标、合同或续约。
4. **独立复现/TCO 阈值：** 非 NVIDIA/伙伴团队在同一或可比协议复现核心结果，并披露硬件、延迟、稳定性、失败率与 TCO。

## 11. 反证、冲突与未知

- “physical AI platform”营销与模型卡的 temporal inconsistency、action-state drift、几何、物体持久性、碰撞和非显式 physics 限制并存；结论以后者校准。
- Cosmos3-Generator NIM 为 GA，但 support matrix 只列 T2V/I2V；GA 不得扩展为 action NIM。
- vLLM-Omni PR #4102 只记录其合并时 policy/forward、inverse 待后续的历史状态；截至 cutoff，NVIDIA 固定 revision 模型卡与仓库已文档化 inverse online path。厂商文档仍不等于独立执行、精确版本化 stable release、NIM 或生产验证。
- Nano/Super 模型卡分别标注 OpenMDW；NIM、托管、第三方依赖和数据权利分立。
- Agile、Centific、Ailytics 均为伙伴第一方；只有 Agile 直接支持 action-core 采用线索，Centific/Ailytics 只支持相邻项目生态；均未恢复客户第一方付费或外部生产验证。
- Cosmos3-Nano-Policy 的榜单领先只是一项历史快照；不得写成 as-of 当前第一。
- 未恢复 Cosmos 3 单独收入、付费席位、合同金额、续约或 production SLA。

## 12. 决策承载型主张与来源

| 主张 | 类型 | 核心来源 | 限制 |
|---|---|---|---|
| Cosmos 3 包含 action-conditioned forward dynamics、inverse dynamics 与 policy | Company-reported technical fact | [S-NV-001](https://research.nvidia.com/labs/cosmos-lab/cosmos3/) [S-NV-008](https://arxiv.org/abs/2606.02800) | NVIDIA 自研/自评；各模式 serving 成熟度不同。 |
| 模型卡承认 drift、交互、几何、碰撞及非显式 physics 限制 | Vendor limitation fact | [S-NV-002](https://huggingface.co/nvidia/Cosmos3-Nano) [S-NV-017](https://huggingface.co/nvidia/Cosmos3-Super) | 不能作为 safety ground truth。 |
| Nano/Super 明确模型材料可按 OpenMDW 下载、自托管和商用 | Legal/artifact fact | S-NV-002/007/017 | 只限明确标注材料；NIM、托管及第三方分开。 |
| PR #4102 在合并时只覆盖 policy/forward，inverse 留作后续 | Historical versioned artifact fact | [S-NV-018](https://github.com/vllm-project/vllm-omni/pull/4102) | 只代表 2026-06-03 时点。 |
| 截至 cutoff，厂商已文档化 policy/forward/inverse 的 vLLM-Omni 自托管在线路径 | Versioned vendor-documentation fact | [S-NV-002](https://huggingface.co/nvidia/Cosmos3-Nano) [S-NV-004](https://github.com/nvidia/cosmos) | 未独立执行；不等于 stable release、NIM 或 SLA。 |
| Generator NIM 已 GA，但当前只支持 T2V/I2V | Product fact | [S-NV-009](https://docs.nvidia.com/nim/cosmos/3.0.0/release-notes.html) [S-NV-010](https://docs.nvidia.com/nim/cosmos/3.0.0/support-matrix.html) | 稳定 action NIM 未建立。 |
| Agile 提供 action-core 伙伴线索；Centific/Ailytics 提供相邻项目生态线索 | Partner self-report | S-NV-006/012/013 | 后两者不提升 action-core adoption；全部禁止升级为客户侧付费或外部 production。 |
| 相对 Manifold 公开锚点形成条件性平台/部分产品替代与未来竞争 | Analyst inference / conditional | S-NV-001/002/004/006/007/009/010/012/013/017/018 + S-MAN-002/003/004 | 不证明共同客户、预算或交付。 |

## 研究完整性记录

- 查询数：`16`；其中预设反证查询 `9`，占 `56.25%`。
- 决策相关来源覆盖 NVIDIA 官方页、模型卡、仓库、技术报告、原始许可证、NIM 版本文档、upstream merge record、三项伙伴第一方及独立媒体/动态榜单。
- 关键修正：上游 PR #4102 保留为 2026-06-03 历史状态；截至 cutoff 的固定 NVIDIA revision 已补入 policy/forward/inverse 三种 vendor-documented online paths；不改变 action NIM 未闭合的判断。
- 伙伴采用均维持 self-report 等级，并拆为 Agile action core 与 Centific/Ailytics adjacent ecosystem；未生成评分或排名。

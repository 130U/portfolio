# 02｜Odyssey

> **阅读版：** 本页面向普通读者，内容来自已批准的 Odyssey dossier。审计用权威文件保留在 [历史工作区](https://github.com/Madarame87/manifold-world-model-research/blob/main/archive/manifold-world-model-landscape/06_dossiers/O-002_odyssey_dossier.md)。

- **对象：** 非中国世界模型创业公司
- **研究截止：** 2026-07-14
- **当前状态：** 固定五席之一；对象研究已完成
- **比较视角：** 主要对照 Manifold 的 WorldScape
- **当前判断：** 潜在威胁较高（非评分、非排名）

## 待检验假设与裁决

> 相对 Manifold 公开锚点，Odyssey 已借 Odyssey-2 Pro 建立可由开发者调用的因果、实时、动作条件世界模型产品路径，并借 Odyssey-2 Max 证明继续扩展长期世界模拟的路线；但两者的能力、访问和成熟度必须分开，现有证据不足以证明稳定生产服务、付费客户或与 Manifold 的现实买方重合。

**裁决：`PARTIALLY SUPPORTED`。** Pro 的公开开发者 API、simulation/interactive-stream 接口与商用合同框架支持条件性产品和平台替代；Max 的 private beta 与公司自测支持未来市场竞争。反证是 API 法律文本把接口定义为 prototype，许可可撤销、无默认 SLA 或持续可用性承诺；Max 指标不能借给 Pro，且没有恢复具名客户 PoC、付费试点、外部生产部署或收入证据。

## 1. 一句话判断

Odyssey 已把“实时生成世界”包装成厂商文档所示的开发者服务路径，但截至研究截止日仍是早期、供应商自报为主的 prototype 接口：它形成了可审计的供应意图，却尚未形成经独立执行验证的持续访问、生产可靠性或商业采用证据。

## 2. 公司与项目边界

| 层级 | 纳入 O-002 | 不得借用 |
|---|---|---|
| 公司 | Odyssey Systems, Inc.；Oliver Cameron 为 Co-Founder & CEO，Jeff Hawke 为 Co-Founder & CTO。[S-ODY-002](https://odyssey.ml/legal) [S-ODY-008](https://odyssey.ml/about) | 团队、融资或投资人不替代模型、产品或采用证据。 |
| Odyssey-2 Pro | 当前对外开发者 API 的核心模型与产品路径。[S-ODY-003](https://odyssey.ml/the-gpt-2-moment-for-world-models) | 不得借用 Max 的 benchmark、private-beta 伙伴或更长 rollout 主张。 |
| Odyssey-2 Max | Odyssey-2 系列第三个模型；公司称其在每步接受 latent action conditioning，当前为 private beta。[S-ODY-007](https://odyssey.ml/introducing-odyssey-2-max) | 不得把 private beta 写成公开 API；不得把公司自测借给 Pro。 |
| Starchild-1 | 因果、实时、多模态音视频研究预览。[S-ODY-004](https://odyssey.ml/introducing-starchild-1) | 不向 Odyssey-2 借音频能力、稳定性或访问状态。 |
| Agora-1 | 多参与者显式共享状态的研究预览。[S-ODY-005](https://odyssey.ml/introducing-agora-1) | 不向 Odyssey-2 借多智能体状态、可玩入口或 GoldenEye 域结果。 |

## 3. 核心团队与归属

- Oliver Cameron：Co-Founder & CEO；Jeff Hawke：Co-Founder & CTO。公司官方 careers/about 页面支持其领导角色。
- Odyssey-2、Starchild-1、Agora-1 与 PROWL-1 均属于 Odyssey 的研究/产品族，但本 dossier 的技术门和产品路径只由 Odyssey-2 Pro/Max 承担。
- Odyssey 法律页列出 Odyssey Systems, Inc. 及美国地址；地域资格已在 CP2 闭合，San Jose corporate-headquarters 表述与 Menlo Park principal-business 地址仍按角色区分。

## 4. 技术路线与主要模型

### Odyssey-2 Pro

- 因果、自回归地依据历史帧和用户动作生成下一状态；公司报告 720p、约 22 FPS、约 50ms，但没有独立复现，不能进入性能排名。[S-ODY-001](https://odyssey.ml/introducing-odyssey-2) [S-ODY-003](https://odyssey.ml/the-gpt-2-moment-for-world-models)
- 公开接口包括 simulations、interactive streams 与 viewable streams，可把动作持续写入后续生成；API Quick Start 给出 API key 与 JavaScript/Python 等接入路径。[S-ODY-009](https://documentation.api.odyssey.ml/api-quick-start) [S-ODY-010](https://documentation.api.odyssey.ml/odyssey-2-overview)
- 这足以通过门2；但“动作条件生成”不等于物理准确、长期稳定或生产级服务。

### Odyssey-2 Max

- 公司称 Max 在每个生成步骤接受 latent action conditioning，面向更长 rollout 和实时交互。
- 其 VBench 2、PAI-Bench 或公司内部一致性结果属于公司自测；既不是与 Manifold 同一或可比闭环协议，也不构成独立系统验证。

## 5. 产品、接口、开放与许可

| 组件 | 技术证据 | 外部访问 | 许可/权利 | 关键限制 |
|---|---|---|---|---|
| Odyssey-2 Pro API | Company demo + vendor-documented hosted prototype API；未独立执行或验证 | 厂商报告的 public developer access path、API key 与 JavaScript/Python 接入文档；实际账户获取和持续调用未独立确认 | limited、revocable、non-exclusive、non-transferable、non-sublicensable；主要用于内部业务应用开发 | 法律文本称 prototype；当前默认单流上限 150 秒、当前默认单连接上限 60 分钟，且无 active stream 15 分钟自动断开；更长体验需重启/衔接；可随时撤销；不得反向工程、转售或未经许可训练模型；Customer Data 虽归客户所有，Odyssey 仍取得 worldwide、perpetual、irrevocable、transferable、sublicensable 的训练、测试和改进等许可。 |
| 商业合同层 | MSA、Order 与 Special API Order Terms | 可形成收费商业关系 | Order 可约定费用、期限与商业义务 | 默认没有 support、SLA、uptime 或 maintenance 承诺；合同框架不证明已有客户。 |
| Odyssey-2 Max | Company demo + private beta | 伙伴申请制 private beta | 未恢复公开模型许可或自助 API 权利 | private beta 不能写成公开可得。 |
| SDK/package | 客户端接入工具 | 公共 JavaScript npm package；Python integration path/examples 仅由厂商文档确认，未恢复独立 Python package artifact | npm 包的 MIT 标记仅覆盖 JavaScript 客户端包，不等于托管模型/API 许可 | 不证明模型开放、self-host、实际账户可得性或采用。[S-ODY-013](https://www.npmjs.com/package/%40odysseyml/odyssey) |

成熟度拆分：

- `technical_evidence_stage`：company demo + vendor-documented hosted prototype API；未独立执行或验证，没有独立 validated system。
- `external_access_stage`：Pro 为 vendor-reported public developer access path with API key，实际账户获取和持续调用未独立确认；Max 为 private beta；权重和自托管路径未恢复。
- `commercial_adoption_stage`：Not established；commercial contracting framework exists，但无具名客户、付费 pilot、production deployment 或 revenue evidence。

## 6. 客户任务、商业证据与采用阶段

官方把 API 面向游戏、机器人、教育、训练、模拟及其他实时体验；这支持产品与应用方向，不证明已进入这些客户的生产系统。

- API 与 MSA 证明 Odyssey 已准备承接商业订单。
- 官方运维文档列出当前默认单流上限 150 秒、当前默认单连接上限 60 分钟；无 active stream 达 15 分钟会自动断开。更长体验需要重启或双会话衔接并可能出现约 1–2 秒间隙。这些配置不能被解释为所有账户永久不变的硬上限、连续服务保证或服务等级承诺。[S-ODY-011](https://documentation.api.odyssey.ml/stream-duration-limits) [S-ODY-014](https://documentation.api.odyssey.ml/session-management)
- AWS/Annapurna 合作涉及 preferred cloud、模型优化、研究与 go-to-market；属于平台/路线证据，不是客户采用。[S-ODY-006](https://odyssey.ml/our-series-b)
- 本轮未恢复具名客户侧确认、付费合同、PoC 指标、生产部署、续约或收入。
- 融资规模和估值只作资本/执行能力背景，不用于 Gate 2、Gate 3 或采用升级。

## 7. 过去 18 个月关键事件

| 日期 | 事件 | 决策含义 |
|---|---|---|
| 2025-10-27 | Odyssey-2 发布 | 建立因果、动作条件、实时 world-simulation 路线。 |
| 2026-01-23 | Odyssey-2 Pro 与 developer API 发布 | 从研究体验进入可编程供应路径。 |
| 2026-04-21 | Odyssey-2 Max private beta | 路线继续扩展，但访问和指标不能借给 Pro。 |
| 2026-05-17/18 | Starchild-1、Agora-1 发布 | 多模态和多智能体研究分支出现；仍须组件隔离。 |
| 2026-06-17 | Series B 与 AWS/Annapurna 合作公布 | 资本与平台路线增强；不等于客户采用。 |

## 8. 与 Anchor A、Anchor B 的重合与差异

### Anchor A / WorldScape lens

重合：两者都以控制/动作影响后续视觉状态，并面向实时、持续、可探索世界。Odyssey-2 Pro 的开发者 API 使这种能力直接进入应用层，而 Manifold 公开锚点尚未恢复 API、SDK、权重或商业交付。

差异：WorldScape 强调 navigation/manipulation、长期空间记忆和具身任务；Odyssey-2 Pro 公开材料更广泛、更视频生成化，物理与长期一致性主要依赖厂商主张。不存在共同评测协议，不能进行性能排序。

双边来源映射：候选侧 S-ODY-003/006/007/009/010/011 对锚点侧 S-MAN-002/003；Anchor B 的否定边界另以候选侧未恢复 policy 组件对锚点侧 S-MAN-004。该映射只支持条件性关系，不证明共同买方或交付。

### Anchor B / WorldScape Policy lens

Odyssey 的世界 rollouts 可以潜在服务训练或决策，但本轮没有恢复相当于 WorldScape Policy 的 world-to-action policy、真机成功率或闭环机器人策略验证。机器人用例是方向，不是已验证组件。

## 9. 条件性竞争机制、优先级与置信度

| 机制 | 状态 | 依据 | 置信度 |
|---|---|---|---|
| `potential_product_substitution` | 条件性成立 | Pro API 可直接提供动作条件实时世界流 | 中；Manifold 产品/交付未知，稳定性未验证 |
| `potential_platform_substitution` | 条件性成立 | 开发者 API、SDK、MSA/Order 路径可嵌入第三方应用 | 中；无 self-host，许可可撤销且无默认 SLA |
| `evidence_backed_future_market_competition` | 条件性成立 | Pro→Max→多模态/多智能体分支及 AWS go-to-market 路线 | 中高；不证明当前共同客户或预算 |

平台因果链：hosted API → 第三方将实时 world stream 嵌入应用 → 可能减少定制世界模型采购。断点在长期稳定性、物理准确性、服务保证、可控成本、客户验证和 Manifold 实际交付未知。

## 10. 监控信号与触发阈值

1. **生产服务阈值：** 公布版本化 SLA、uptime、support、持续时长、价格与公开状态页，并由第三方长期运行复现。
2. **采用阈值：** 具名客户第一方披露 paid pilot 或 production deployment，含任务、规模、可靠性或续约指标。
3. **技术阈值：** 独立团队在同一或可比协议下复现 action fidelity、空间记忆、物理一致性和长时稳定性。

## 11. 反证、冲突与未知

- API 法律文本明确称其为 prototype，访问可撤销，默认没有 support、SLA 或 uptime 承诺；官方运维文档另有当前默认 150 秒单流上限、60 分钟单连接上限和 15 分钟空闲断开规则。
- 公司报告的 FPS、延迟、分辨率、持续时长和 benchmark 没有独立复现。
- Max 的能力、private-beta 伙伴和指标不得借给 Pro；Starchild/Agora 也不能借证。
- 未恢复公开权重、自托管服务端、模型许可证或可审计单位经济性。
- 未恢复具名客户 PoC、付费试点、生产部署或收入。
- Manifold 买方、预算、产品与交付未知，因此 Gate 3 仅为相对公开锚点的条件性判断。

## 12. 决策承载型主张与来源

| 主张 | 类型 | 核心来源 | 限制 |
|---|---|---|---|
| Odyssey-2 Pro 是因果、动作条件、实时 world model 并具有公开 developer API | Company-reported fact | [S-ODY-003](https://odyssey.ml/the-gpt-2-moment-for-world-models) S-ODY-009/010 | 性能与长期稳定性未独立复现。 |
| Pro、Max、Starchild 与 Agora 为分立证据单元 | Component boundary | S-ODY-003/004/005/007 | 不得互借能力、访问或成熟度。 |
| API 具有商业合同框架，但 prototype、可撤销且无默认 SLA；单流时长受限 | Legal and operations fact | [S-ODY-002](https://odyssey.ml/legal) [S-ODY-011](https://documentation.api.odyssey.ml/stream-duration-limits) [S-ODY-014](https://documentation.api.odyssey.ml/session-management) | 当前默认 150 秒是单流上限、当前默认 60 分钟是单连接上限，15 分钟是空闲断开；实际 Order 可能另行约定；不证明已有客户或连续服务保证。 |
| Odyssey 对公开锚点形成条件性产品/平台替代与未来竞争 | Analyst inference / conditional | 候选侧 S-ODY-003/006/007 + 锚点侧 S-MAN-002/003/004 | 不证明共同客户、预算或商业交付。 |
| 未恢复具名付费或外部生产采用 | Not established | 反证检索 | 保持开放监控。 |

## 研究完整性记录

- 查询数：`9`；其中预设反证查询 `5`，占 `55.6%`。
- 决策主张以 Odyssey 官方技术、产品和法律原始页为主；商业采用缺少客户侧或独立三源，已降级为 `Not established`。
- 所有模型分支、API、SDK、法律权利和采用阶段均按组件拆分；未生成评分或排名。

# 04｜Decart

> **阅读版：** 本页面向普通读者，内容来自已批准的 Decart dossier。审计用权威文件保留在 [历史工作区](https://github.com/Madarame87/manifold-world-model-research/blob/main/archive/manifold-world-model-landscape/06_dossiers/O-004_decart_dossier.md)。

- **对象：** 非中国世界模型创业公司
- **研究截止：** 2026-07-14
- **当前状态：** 固定五席之一；对象研究已完成
- **比较视角：** 主要对照 Manifold 的 WorldScape
- **当前判断：** 潜在威胁较高，但公开证据置信度较低（非评分、非排名）

## 待检验假设与裁决

> 相对 Manifold 公开锚点，Decart 已借 Oasis 3 Preview 建立可计费、可通过 stateful API 反复输入驾驶动作并生成多视角后续状态的产品路径，形成条件性产品与平台替代；但 driving-first action space、Preview 法律状态、独立体验中的状态/物理失败和无客户采用证据显著削弱其近期替代强度。

**裁决：`PARTIALLY SUPPORTED`。** 官方文档、Python thin client、账户/API key、公开价格和单记者实际体验共同证明产品与计费入口存在；这比纯 demo 更接近可调用产品。反面是技术证据仍主要由供应商提供，第三方体验观察到路径记忆、控制、场景漂移与碰撞问题；API 为 revocable Beta 服务、无不中断保证且 Beta liability cap 为 0；没有恢复具名客户、付费 pilot、生产部署或收入。

## 1. 一句话判断

Decart 的威胁来自“把动作条件视频世界模型直接做成按秒计费的 API”，而不是已证明的通用或可靠物理模拟：Oasis 3 Preview 供应路径真实，但当前仍是 driving-first、Beta、低置信技术与低采用证据的条件性竞争者。

## 2. 公司与项目边界

| 层级 | 纳入 O-004 | 不得借用 |
|---|---|---|
| 公司 | Decart.ai Inc.；美国/以色列经营证据闭合非中国范围，正式 HQ 标签仍未确认。[S-DEC-002](https://www.decart.ai/terms) [S-DEC-003](https://decart.ai/company) | 公司基础设施、融资或其他模型采用不替代 Oasis 3 证据。 |
| Oasis 3 Preview | 当前核心：promptable、stateful、driving-first world model/API。[S-DEC-001](https://decart.ai/oasis) [S-DEC-004](https://docs.platform.decart.ai/models/realtime/oasis-3) | 不借旧版 Oasis/Minecraft 的用户量、能力或成熟度。 |
| `decart-oasis` / `decart-robotics` | Python thin client、示例和 RL wrapper；连接 hosted Oasis endpoint。[S-DEC-005](https://github.com/DecartAI/decart-robotics) [S-DEC-006](https://pypi.org/project/decart-oasis/) | MIT 只覆盖客户端/示例，不覆盖服务端模型、权重或 API 权利。 |
| DOS / infra | Decart 可能提供的推理基础设施与相关商业叙述 | hyperscaler、chipmaker、Lucy 或其他产品采用不得借给 Oasis 3。 |

## 3. 核心团队与归属

- 本轮已登记的 Decart 公司页、Oasis 3、API 文档与法律文本未公开可归属于 Oasis 3 的具名技术负责人；该字段记为 `not publicly disclosed in registered first-party sources`，不以媒体或融资材料补写。
- Decart 是 Oasis 3、API 文档、SDK/客户端和法律文本的可溯源发布主体；团队/创始人信息不参与 Gate 2、Gate 3 或采用升级。[S-DEC-001](https://decart.ai/oasis) [S-DEC-003](https://decart.ai/company)
- Terms 标识 Decart.ai Inc.；公司页列出 San Francisco、Tel Aviv、New York 等经营地点。地域资格已按“非中国、正式总部标签未决”闭合。
- Oasis 3 Preview、Lucy、旧 Oasis 和 DOS 属分立组件；只允许 Oasis 3 Preview 及其直接客户端/文档承载本席位结论。

## 4. 技术路线与主要模型

- Oasis 3 Preview 接收 text prompt 建立场景；在 stateful gRPC session 中反复输入四步 `[throttle, steering]` action chunk，并返回 front/left-forward/right-forward 三路后续帧。[S-DEC-004](https://docs.platform.decart.ai/models/realtime/oasis-3)
- prompt 会重置 world-model context；连续 `infer` calls 保留 session sequence，使动作对后续帧产生可审计的时间条件影响，满足门2。
- 公开 action space 只覆盖驾驶油门和转向；这不是通用机器人动作、操作技能或显式 3D/physics state。
- 供应商将其称为 learned driving simulator，但模型权重、训练数据、架构细节和独立 benchmark 未公开；“simulator”不得自动解释为物理准确。

## 5. 产品、接口、开放与许可

| 组件 | 技术证据 | 外部访问 | 许可/权利 | 关键限制 |
|---|---|---|---|---|
| Oasis 3 Preview web | public playable preview | 浏览器体验入口 | 网站/服务条款 | 体验不证明 API reliability、模型开放或商业采用。 |
| Oasis 3 hosted API | documented stateful gRPC API | 账户、API key、hosted endpoint；按秒计费 | limited、non-exclusive、non-transferable、non-sublicensable、revocable | Preview 属 Beta；不得转售/再托管模型；无不中断保证。 |
| Pricing | `oasis-3-preview` 每秒 0.02 美元；新账户 test credits | PAYG + enterprise pricing 联系路径 | 具体 Order 可另约 | 证明可计费供应，不证明付费客户或收入。 |
| Python client | `decart-oasis` 与 GitHub wrapper | PyPI/GitHub 可下载 | MIT 只覆盖 thin client/examples | 不覆盖 hosted model、server、weights 或 API terms。 |

数据与责任边界：开发者保留 Input/Output ownership，但授予 Decart 广泛、永久、可再许可的运营、改进与训练权利；Beta 服务按“as is/as available”提供，liability cap 为 0 美元。[S-DEC-009](https://docs.platform.decart.ai/resources/api-terms)

成熟度拆分：

- `technical_evidence_stage`：vendor documentation + public playable product + one independent hands-on；未达独立 validated system。
- `external_access_stage`：public account-based metered Preview API；不等于开放权重或 self-host。
- `commercial_adoption_stage`：priced supply path only；截至 cutoff，本研究未恢复到具名客户、付费 pilot、production deployment 或 revenue evidence（C-P3-035）。

## 6. 客户任务、商业证据与采用阶段

Oasis 3 的直接任务是实时 driving world rollout、RL/environment interaction 和多视角生成。官方 enterprise pricing 入口表明可以承接更大用量，但不证明已有企业合同。

- TechCrunch 记者实际使用产品，支持“可体验/可调用”与负面反证；它不是 system validation 或 commercial adoption。[S-DEC-007](https://techcrunch.com/2026/06/10/decarts-new-world-model-can-simulate-hours-of-photorealistic-driving-with-some-caveats/)
- 截至 cutoff，本轮未恢复具名客户、伙伴 PoC、付费 pilot、外部 production deployment、revenue 或续约证据（C-P3-035）。
- API 价格和免费测试 credits 只能登记为供应路径，不能以“有计费”推导“有采用”。

## 7. 过去 18 个月关键事件

| 日期 | 事件 | 决策含义 |
|---|---|---|
| 2026-05-28 | API Terms 更新 | 明确 Preview/Beta、许可、数据与 liability 边界。 |
| 2026-06 | Oasis 3 Preview、hosted API、thin client 和价格页公开 | 形成真实产品、开发者与计费入口。 |
| 2026-06-10 | TechCrunch hands-on | 独立确认可体验，并提供路线记忆、控制和物理反证。 |
| 截至 2026-07-14 | 文档显示 `oasis-3-preview` 每秒 0.02 美元 | 价格快照；需监控版本和 Preview 状态变化。 |

## 8. 与 Anchor A、Anchor B 的重合与差异

### Anchor A / WorldScape lens

重合：两者都以导航/ego control 影响连续后续视觉状态，支持持续 session 和空间行动任务。Oasis 3 的公开计费 API 是相对 Manifold 公开锚点的产品差异。

差异：Oasis 3 是 driving-first throttle/steering、多摄像头视觉 rollout；WorldScape 公开锚点覆盖更广导航/操作并报告 memory-aware cache。Oasis 3 没有公开显式 3D state、通用 action space 或可比长期记忆评测，且有独立体验反证。不能按营销 FPS、持续时长或“physics”直接排序。

Anchor A 双边来源映射为候选侧 S-DEC-004/007/008/009 对锚点侧 S-MAN-002/003；Anchor B 的否定边界以未恢复自带 policy 的候选侧证据对锚点侧 S-MAN-004。该映射只支持条件性关系。

### Anchor B / WorldScape Policy lens

Oasis 3 文档允许 RL/environment loop，但本轮未恢复自带 policy、真机动作预测或机器人任务成功率。它是环境/world rollout 层，不是 WorldScape Policy 的直接 policy 替代。

## 9. 条件性竞争机制、优先级与置信度

| 机制 | 状态 | 依据 | 置信度 |
|---|---|---|---|
| `potential_product_substitution` | 条件性成立 | 按秒计费的 driving world rollout API 可覆盖部分导航/训练任务 | 中低；action space 窄、可靠性反证明显 |
| `potential_platform_substitution` | 条件性成立 | hosted API、SDK、账户/价格可嵌入第三方 RL 或应用流程 | 中；Beta/revocable/无 SLA/self-host 缺失 |

本对象的 CP2 已批准 Gate 3 机制仅为上述 product/platform 两项；从 preview 到 metered API 的新产品路线只作为其既有机制的证据更新，不自动新增未来市场竞争机制。

因果链：prompt + actions → hosted stateful rollout → SDK/API 接入 RL/应用 → 可能替代部分定制 world rollout。断点在 long-horizon consistency、碰撞/物理、通用动作、数据权利、服务保证、客户验证和 Manifold 实际交付未知。

## 10. 监控信号与触发阈值

1. **GA 与可靠性阈值：** Preview 升级为 GA，公布版本、SLA、uptime、error rate、retention 与明确数据选择退出机制。
2. **技术阈值：** 独立团队在公开协议下复现路线记忆、回环、碰撞、控制跟随和长时状态一致性，并披露失败率。
3. **采用阈值：** 具名客户第一方披露 paid pilot 或 production use，含任务、用量、可靠性与续约/支付信息。

## 11. 反证、冲突与未知

- TechCrunch 单记者体验观察到无法稳定回到起点、时常失去控制、场景漂移以及穿过车辆等非物理行为。
- 该 hands-on 是产品体验和反证，不是标准 benchmark、系统验证或商业采用。
- API Terms 把 Preview 归为 Beta；许可可撤销，无 uninterrupted/error-free guarantee，Beta liability cap 为 0。
- Input/Output 可被 Decart 用于训练和改进，形成企业数据治理摩擦；但开发者仍保留 Input/Output ownership。
- MIT 只覆盖 thin client/examples；没有公开服务端模型权重或许可证。
- 无具名客户、付费 pilot、生产部署、收入或 Manifold 现实买方重合证据。

## 12. 决策承载型主张与来源

| 主张 | 类型 | 核心来源 | 限制 |
|---|---|---|---|
| Oasis 3 stateful session 接受重复 throttle/steering 并生成多视角后续帧 | Vendor technical fact + Gate inference | [S-DEC-004](https://docs.platform.decart.ai/models/realtime/oasis-3) | driving-first；无独立长期/物理验证。 |
| Oasis 3 具有账户/API key、hosted endpoint 与每秒 0.02 美元定价 | Product/access fact | [S-DEC-008](https://docs.platform.decart.ai/getting-started/pricing) S-DEC-004 | 证明供应路径，不证明客户采用或 SLA。 |
| Preview 为 revocable Beta，数据/责任边界显著 | Legal fact | [S-DEC-009](https://docs.platform.decart.ai/resources/api-terms) | Order 可另约；法律条款不等于实际失败率。 |
| 独立产品体验提供记忆、控制、碰撞和物理负面证据 | Independent hands-on | [S-DEC-007](https://techcrunch.com/2026/06/10/decarts-new-world-model-can-simulate-hours-of-photorealistic-driving-with-some-caveats/) | 单记者、非标准化；不是系统验证/采用。 |
| 相对公开锚点形成条件性产品/平台替代 | Analyst inference / conditional | 候选侧 S-DEC-004/007/008/009 + 锚点侧 S-MAN-002/003/004 | 不证明共同客户、预算或交付。 |

## 研究完整性记录

- 查询数：`12`；其中预设反证查询 `6`，占 `50%`。
- 官方 API/价格/法律原始页与独立 hands-on 已分别归属；thin client、hosted model 和其他 Decart 组件没有借证。
- 负向采用结论保持 `Not established`，未把体验、免费 credits 或计价入口误写为采用。
- 未生成评分或排名。

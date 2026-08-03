# Phase 3 dossier 协议

**状态：** `completed`
**统一截至日：** `2026-07-14`  
**批准基线：** `CP2 推荐包 v1.0 as amended by v1.0a`  
**固定五席：** World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3（`4+1`，顺序不构成排名）

本协议只控制五份研究 dossier 与证据刷新，不是页面内容稿，不启动评分排名、对象专页、Storyboard、PPT 或 PDF。

## 1. 试跑与校准

先完成两份试跑：

1. 创业公司：`O-001 World Labs`；
2. 大厂项目：`O-005 NVIDIA Cosmos 3`。

两份试跑通过字段完整性、组件边界、证据类型、三维成熟度、反证比例与 URL 可定位性检查后，再以同一粒度完成 Odyssey、Runway 与 Decart。试跑不改变固定五席，不构成对象间排名。

## 2. 每份 dossier 的固定结构

1. 一句话判断；
2. 公司或项目边界；
3. 核心团队或大厂项目归属；
4. 技术路线与主要模型；
5. 产品、接口、开放与许可；
6. 客户任务、商业证据和采用阶段；
7. 过去 18 个月关键事件；
8. 与 Anchor A（WorldScape lens）、Anchor B（WorldScape Policy lens）的重合和差异；
9. 相对 Manifold 公开锚点的条件性竞争机制、战略优先级与置信度；
10. 2–3 个监控信号及可审计触发阈值；
11. 反证、冲突和未知；
12. 决策承载型主张与来源映射。

大厂项目另行单列：`项目边界`、`访问与商用权利`、`平台替代因果链`、`采用证据等级`、`绑定与反作用`、`Why not now`、`竞争与合作双面性`。

## 3. 五对象可证伪假设

| 对象 | 待检验假设 |
|---|---|
| O-001 World Labs | 相对 Manifold 公开锚点，World Labs 的 Marble / World API 已形成有条件的平台替代路径，并由 RTFM 的导航型实时世界模型路线支撑未来市场竞争；但 RTFM 的技术证据不得借用 Marble 的产品成熟度，当前证据不足以证明现实客户、预算或交付重合。 |
| O-002 Odyssey | Odyssey-2 Pro 的公开接口与 Odyssey-2 Max 的实时 action-conditioned 路线共同支持有条件的产品/平台替代和未来市场竞争；但各版本能力、访问与采用不得互借，外部复现和具名商业采用可能不足。 |
| O-003 Runway | Runway 从创意平台向 GWM Worlds 与 GWM Robotics 扩展，支持未来市场竞争及潜在产品/平台替代；但 Worlds 与 Robotics 必须分栏，申请制 early-access 的实际访问、长期状态一致性与外部采用仍可能不足。 |
| O-004 Decart | Oasis 3 的公开 stateful API 构成低摩擦的潜在产品/平台替代路径；但路线记忆、控制、碰撞、物理一致性、模型开放和具名商业采用的反证可能限制其当前威胁强度。 |
| O-005 NVIDIA Cosmos 3 | 截至 2026-07-14，在本轮审议的三个大厂候选项目中，Cosmos 3 的可下载/自托管路径与伙伴侧自报集成线索支持有条件的平台替代、未来市场竞争及部分产品替代；但组件许可、稳定 action serving、独立复现、外部付费生产采用与 NVIDIA 生态绑定仍可能阻断现实绕行。 |

Gate 3 结论一律为相对 Manifold 公开锚点的 `Analyst inference / conditional`，不得写成当前客户、预算、合同或商业交付已经重合。

## 4. 证据与反证纪律

- 每个对象在检索前标记查询为 `supporting` 或 `disconfirming`；最终 `disconfirming_queries / total_queries >= 0.30`。
- 决策承载型主张优先重开官方项目页、论文、代码、模型卡、API 文档、条款、许可和客户/伙伴一方的原始页面。
- 公司或作者自报的能力和数字记为 `Company-reported`；客户方、公开登记、独立复现或独立产品体验才可记为 `Independent evidence`。
- 独立产品体验只证明该版本的公开体验或反证，不自动证明系统验证、客户采用或商业部署。
- 决策主张进入 `04_evidence/evidence_ledger.csv`；普通背景事实保留在 dossier 行内来源中。
- 每个 URL 必须是可直接打开的 canonical URL，并记录页面、章节或可定位段落；搜索摘要、`turnXX` 和 DR 正文不得入账。

## 5. 组件与成熟度边界

- 分别记录 `technical_evidence_stage`、`external_access_stage`、`commercial_adoption_stage`，不得合并成单一成熟度。
- 代码、权重、数据、模型输出、API/SDK、再分发和商业使用的许可逐组件记录。
- World Labs：RTFM 与 Marble / World API 分开；Escape 仅为供应商托管 working prototype / PoC，Lightwheel 仅为供应商托管 collaboration / workflow demo，未恢复伙伴自有页面确认。
- Runway：GWM Worlds 与 GWM Robotics 分栏，能力、访问、许可、采用互不借用。
- Decart：媒体 hands-on 仅为产品体验与反证。
- Cosmos 3：核心模型、OpenMDW、NIM 与 Isaac / GR00T / Omniverse 等关联栈分开；Agile Robots 仅为伙伴侧自报 early access、测试、集成与内部 neural-simulator deployment。

## 6. 完成门槛

单份 dossier 只有同时满足下列条件才可标记完成：

- 固定结构完整；
- 显式假设已有 `SUPPORTED / PARTIALLY SUPPORTED / DISPROVEN / INCONCLUSIVE` 裁决；
- 反证查询比例不少于 30%；
- 关键组件、许可和采用层级无证据互借；
- 决策承载型主张已回写 Evidence Ledger；
- 所有引用 URL 可解析且支持正文；
- 未使用 DR 正文或搜索摘要作证。

五份 dossier 完成前，`cross_comparison_started` 与 `independent_red_team_started` 保持 `false`。

## 7. 来源策略与风险登记

来源顺序：官方项目/产品页与论文 → 官方代码、模型卡、API 文档和许可证 → 客户/伙伴一方原始页面 → 独立复现、可靠媒体 hands-on 或公开登记。融资和团队只在影响未来市场进入、组织归属或执行能力时保留，不以融资额替代技术或采用证据。

同一核心论点尽量由三种不同来源类型交叉支持；若只有公司自报或不足三类来源，正文必须标记 `insufficient independent evidence`，不得用低质量来源凑数。

| 风险 | 控制方式 |
|---|---|
| Manifold 买方、预算、交付与路线未知 | 所有 Gate 3 与替代判断保持 `conditional_against_public_anchor`。 |
| 项目族内部证据互借 | 组件级列出模型、访问层、SDK/API、许可和采用；项目族综合结论另写 Analyst inference。 |
| 公司自报性能被当成验证 | 公司论文、模型卡与 Demo 默认 Company-reported；独立复现另列。 |
| 合作、PoC、试点与生产采用混同 | 按章程枚举逐级记录，未来时态不升级当前采用层级。 |
| 动态 API、仓库和模型卡发生版本漂移 | 记录版本/commit/访问日；对改变机制或成熟度的新证据单独入账。 |
| 技术数字不可比 | 缺版本、硬件、分辨率、rollout、控制频率、数据集或评测条件时不做横向排序。 |
| 开放标签掩盖许可链 | 代码、权重、数据、输出、API、第三方依赖和商业使用逐项核验。 |
| 独立证据稀缺 | 明确记为未知或证据不足，不把讨论帖、搜索摘要或匿名说法升级为事实。 |

检索停止条件：关键组件均有当前原始来源；假设的支持与反证路径均已检索；反证比例达标；新增搜索连续两轮不再改变技术资格、三维成熟度、机制、优先级或关键未知。若无法满足，则以 `INCONCLUSIVE` 和明确缺口停止，不继续扩大对象范围。

# 03｜Runway

> **阅读版：** 本页面向普通读者，内容来自已批准的 Runway dossier。审计用权威文件保留在 [历史工作区](https://github.com/Madarame87/manifold-world-model-research/blob/main/archive/manifold-world-model-landscape/06_dossiers/O-003_runway_dossier.md)。

- **对象：** 非中国世界模型创业公司
- **研究截止：** 2026-07-14
- **当前状态：** 固定五席之一；对象研究已完成
- **比较视角：** 同时对照 Manifold 的 WorldScape 与 WorldScape Policy
- **当前判断：** 潜在威胁较高（非评分、非排名）

## 待检验假设与裁决

> 相对 Manifold 公开锚点，Runway 已从创意视频平台迁移到由 GWM Worlds 与 GWM Robotics 构成的世界模型产品路线，具备条件性未来市场竞争和潜在产品/平台替代；但两分支的能力、访问与采用必须分开，当前申请制入口、公司自评和公司自报合作不足以证明公开可得、独立验证或现实客户重合。

**裁决：`PARTIALLY SUPPORTED`。** GWM Worlds 具 action-conditioned 实时探索与公开申请制 early-access 产品与应用入口；GWM Robotics 具动作条件 rollout、policy evaluation、定制 policy、Python SDK/cloud API 与可洽谈 on-prem model licensing 路线。反面是实际访问未独立确认；Robotics 仅有公司在单一 Franka tabletop 域开展的相对策略排序自评；未恢复伙伴侧确认、具名付费试点、生产部署或收入。

## 1. 一句话判断

Runway 的战略价值在于它正把创意视频基础模型的技术与产品工程经验迁移到世界模型；截至研究截止日，GWM Worlds 与 GWM Robotics 仅形成公开申请制 early-access 产品与应用入口，实际访问未独立确认，不能写成已被外部客户验证的平台。

## 2. 公司与项目边界

| 层级 | 纳入 O-003 | 不得借用 |
|---|---|---|
| 公司 | Runway AI, Inc.；美国实体与纽约地址已在 CP2 核验。[S-RUN-002](https://runwayml.com/terms-of-use) [S-RUN-003](https://aif.runwayml.com/terms) | 创意产品客户、收入或 Gen 系列采用不得借给 GWM。 |
| GWM-1 family | 基于 Gen-4.5 的三个分立 post-trained variants。[S-RUN-001](https://runwayml.com/research/introducing-runway-gwm-1) | 不能把“同一基础架构”写成统一模型或共享评测。 |
| GWM Worlds | 以 camera/navigation action 控制的实时可探索世界；承担 Gate 2 与 Anchor A 对比。 | 不借 Robotics SDK、policy 结果、on-prem 路径或合作方。 |
| GWM Robotics | 动作条件 rollout、policy evaluation、Policy Model、data/model delivery；承担 Anchor B 对比。 | 不借 Worlds 的长序列空间一致性、720p/2min 或实时探索能力。 |
| Runway Characters | 音频驱动交互角色，已有 Runway API/web product。 | 属纯角色/视频产品，不入世界模型竞争主张，不得借其 GA 访问给 Worlds/Robotics。 |

## 3. 核心团队与归属

- Runway 于 2026-02-26 公布 Anastasis Germanidis 与 Cristóbal Valenzuela 共同担任 co-CEO，Kamil Sindi 担任 CTO；这仅作公司治理背景，不提高 GWM 技术或采用成熟度。
- GWM-1 与后续 Robotics 产品页均由 Runway/Runway Robotics 发布；所有性能与合作主张先按公司自报处理。
- 公司创意平台的既有分发能力是“执行与渠道背景”，不是 GWM 客户、收入或 production evidence。

## 4. 技术路线与主要模型

GWM-1 family 基于 Gen-4.5 的 autoregressive architecture，但不同 post-trained variants 接受不同条件；以下只按组件归属，不以 family-level 描述互借能力。[S-RUN-001](https://runwayml.com/research/introducing-runway-gwm-1)

### GWM Worlds

- Worlds 分支按 camera/navigation action 逐帧生成、实时探索；robot commands 与 rollout 归 GWM Robotics，audio-driven interaction 归 Characters，均不借给 Worlds。
- Worlds 分支允许用户在环境中持续移动，并由公司声称维持长序列空间一致性与回访；公司列出 up to 2 minutes、720p。
- 这些证据足以通过门2，但全部来自供应商页面；没有独立长时回访、几何、碰撞或 physics 复现。

### GWM Robotics

- 作为 simulator，按机器人动作生成视频 rollout，并支持 counterfactual trajectories。
- Runway 报告了一项局限于 Franka Panda tabletop 与 RoboArena 任务的公司自评相对策略排序实验；它不是绝对成功率、跨机器人验证或独立复现。[S-RUN-004](https://runwayml.com/research/accelerating-robot-policy-evaluation)
- Policy Model 从 camera、proprioception 和定制模态输出 action chunks，按 deployment 微调，并通过 Python SDK/cloud API 接入。[S-RUN-005](https://runwayml.com/product/robotics/policy-model)

## 5. 产品、接口、开放与许可

| 组件 | 技术证据 | 外部访问 | 许可/交付 | 关键限制 |
|---|---|---|---|---|
| GWM Worlds | Company demo / research-product preview | **公开申请制 early-access 产品与应用入口，实际访问未独立确认** | 专有服务；未恢复公开权重、代码或模型许可 | 申请表不是 GA、自助 API、客户或生产使用。 |
| GWM Robotics SDK | Company demo + product pages | 申请制 Python SDK/world model API | 专有申请制访问 | 实际 access、rate、price、SLA 未独立确认。 |
| Robotics Policy Model | custom-scoped model | 与 Runway 团队定制，SDK/cloud API 推理 | 每个 deployment 单独定义 | 产品页不是公开可执行合同；无伙伴侧部署确认。 |
| Robotics Video Model Licensing | company-advertised negotiated model-access route | 洽谈 foundation model access、fine-tuning、on-prem | 未公开具体 license text、price 或 requirements | 不等于开放权重、公共许可、已交付访问或已执行授权。 |

成熟度拆分：

- `technical_evidence_stage`：Worlds＝company demo；Robotics＝company demo + company-run evaluation。
- `external_access_stage`：公开申请制 early-access 产品与应用入口，实际访问未独立确认；Robotics 有申请/洽谈式 SDK、cloud、custom model、on-prem 路线。
- `commercial_adoption_stage`：Runway company-reported collaboration only；无 partner-confirmed PoC/pilot/production/revenue。

## 6. 客户任务、商业证据与采用阶段

GWM Worlds 官方列出 gaming、education、training agents 与 VR/immersive；GWM Robotics 覆盖 policy execution、simulation evaluation、synthetic data 和 custom deployment。用例页证明产品意图，不证明客户采用。

- Runway 称与 NVIDIA、Berkshire Grey 合作把 GWM Robotics 集成到训练和评估流程。[S-RUN-004](https://runwayml.com/research/accelerating-robot-policy-evaluation)
- 本轮未恢复两家伙伴对 GWM Robotics 的第一方确认，也未恢复 PoC、付费 pilot、production deployment、revenue 或续约。
- “deliver value to customers”之类供应商表述不能升级为可审计客户事实。
- Runway 创意平台的客户、API、订阅或工作流不得作为 GWM 采用证据。

## 7. 过去 18 个月关键事件

| 日期 | 事件 | 决策含义 |
|---|---|---|
| 2025-12-11 | GWM-1 family 发布 | Worlds、Robotics、Characters 三个独立 post-trained models 出现。 |
| 2026-02-26 | 公司领导结构更新 | 执行背景变化；不影响技术或采用结论。 |
| 2026-02-27 | Robotics policy-evaluation 结果发布 | 提供公司自评的相对排序证据及明确局限。 |
| 2026 H1 | Policy Model、Video Model Licensing 等产品面公开 | 形成申请/洽谈式产品与交付路径；访问未独立确认。 |
| 2026-06-01 | Cosmos Coalition 公布 | 未来合作/基础模型倡议；不能提升当前 GWM-1 开放或采用状态。 |

## 8. 与 Anchor A、Anchor B 的重合与差异

### Anchor A / WorldScape lens

GWM Worlds 与 WorldScape 都面向 action/camera-conditioned、实时、连续可探索世界，并声称长序列空间一致性。Runway 的差异是来自创意视频基础模型并以 early-access 产品面推进；Manifold 公开锚点更具体披露导航/操作任务和 memory-aware 机制。两者缺共同评测与独立复现，不能说谁“更强”。

Anchor A 双边来源映射为候选侧 S-RUN-001 对锚点侧 S-MAN-002/003；只支持技术任务和产品路径的条件性比较。

### Anchor B / WorldScape Policy lens

GWM Robotics 的 action-conditioned rollout 和 policy ranking 与 WorldScape Policy 的具身闭环更直接相关。差异是 Runway 目前报告单臂 tabletop 的相对 policy ranking，而 WorldScape Policy 报告 PIPER 双臂真实任务成功率；协议、硬件、指标不同，不能直接排序。Policy Model 的 cloud/SDK 路径是产品差异，但实际访问和部署未证实。

Anchor B 双边来源映射为候选侧 S-RUN-004/005/006 对锚点侧 S-MAN-004；不得把 Robotics 证据借给 Worlds。

## 9. 条件性竞争机制、优先级与置信度

| 机制 | 状态 | 依据 | 置信度 |
|---|---|---|---|
| `evidence_backed_future_market_competition` | 条件性成立 | 创意平台向 Worlds/Robotics 迁移；产品面、定制交付与未来联盟路线 | 中高；不证明共同客户/预算 |
| `potential_product_substitution` | 条件性成立 | Worlds 可覆盖实时探索；Robotics 可覆盖 rollout/policy evaluation | 中；访问和可靠性未独立确认 |
| `potential_platform_substitution` | 条件性成立 | SDK/cloud/custom fine-tuning/on-prem 洽谈路径 | 中；不等于 GA、自助或开放平台 |

因果链：GWM 基础模型 → Worlds/Robotics post-training → SDK/cloud/custom/on-prem 产品面 → 客户可能减少单独采购世界模型、仿真或策略评估。断点在实际 access、独立性能、许可文本、SLA、伙伴确认和 Manifold 商业位置未知。

## 10. 监控信号与触发阈值

1. **访问阈值：** Worlds 或 Robotics 出现公开 API contract、价格、版本、SLA 或独立账户调用证明。
2. **验证阈值：** 独立团队在同一或可比协议复现 Worlds 长时空间一致性，或 Robotics 跨 embodiment 的绝对任务预测与 failure rate。
3. **采用阈值：** NVIDIA、Berkshire Grey 或其他客户第一方确认 paid pilot/production deployment，含任务、范围与指标。

## 11. 反证、冲突与未知

- Worlds、Robotics、Characters 是独立 post-trained models；访问、能力和客户不得互借。
- GWM Worlds 的 2min/720p/physics/consistency 为公司主张，未独立复现。
- Robotics 只报告单一 Franka tabletop 域的公司自评相对策略排序；不是绝对成功率、跨机器人验证或生产可靠性。
- 公开申请制 early-access 产品与应用入口存在，但实际访问未独立确认。
- Video Model Licensing 页描述可洽谈 on-prem/direct access，但不是公开许可文本或已签约证明。
- 合作只见 Runway 自报；无伙伴侧、客户侧或独立部署证据。
- Manifold 真实客户、预算和交付未知，Gate 3 仅相对公开锚点成立。

## 12. 决策承载型主张与来源

| 主张 | 类型 | 核心来源 | 限制 |
|---|---|---|---|
| GWM Worlds 通过门2并有申请制 early-access 路径 | Company-reported + Analyst inference | [S-RUN-001](https://runwayml.com/research/introducing-runway-gwm-1) | 实际访问未独立确认；无独立长时复现。 |
| GWM Robotics 报告单一 Franka tabletop 域的公司自评相对策略排序 | Company-reported evaluation | [S-RUN-004](https://runwayml.com/research/accelerating-robot-policy-evaluation) | 只验证相对排序；单一 Franka tabletop；非独立。 |
| Robotics 提供 custom Policy Model、SDK/cloud 与 on-prem 洽谈路线 | Product-route fact | [S-RUN-005](https://runwayml.com/product/robotics/policy-model) [S-RUN-006](https://runwayml.com/product/robotics/video-model-licensing) | 申请/洽谈入口，不是实际 access 或公开 license。 |
| NVIDIA/Berkshire Grey 仅为 Runway 公司自报合作 | Company-reported adoption lead | S-RUN-004 | 无伙伴侧、付费或生产确认。 |
| 相对公开锚点形成条件性产品/平台替代和未来竞争 | Analyst inference / conditional | 候选侧 S-RUN-001/004/005/006 + 锚点侧 S-MAN-002/003/004 | 不证明共同客户、预算或交付。 |

## 研究完整性记录

- 查询数：`12`；其中预设反证查询 `6`，占 `50%`。
- Worlds 与 Robotics 全程分栏；Characters、创意平台采用和 Cosmos Coalition 均未借证。
- 关键技术与产品主张均重开 Runway 原始页；采用因缺伙伴侧/客户侧来源而保持低证据等级。
- 未生成评分或排名。

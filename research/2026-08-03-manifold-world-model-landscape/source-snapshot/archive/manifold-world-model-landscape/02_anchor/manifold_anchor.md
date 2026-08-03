# Manifold 公开比较锚点 v1.1（检查点 1 修订版）

基线状态：`approved_checkpoint_1`（批准日期 `2026-07-15`）  
截至：`2026-07-14`  
证据原则：DR-01 只用于定位线索；下列主张均回到重新打开的第一方页面、技术报告或榜单原始记录。性能、排名和真机结果若未获独立复现，统一标为公司/项目自报。

## 镜头 A：WorldScape——核心世界模型能力锚点

| 字段 | 暂定锚点 |
|---|---|
| 公开身份 | Manifold 官网发布并托管技术报告；独立域名项目页仍显示匿名投稿状态。独立域名与匿名投稿均不代表第三方独立性，法律/IP 所有权未由公开材料确认。 |
| 核心任务 | 根据导航或操作动作，连续预测后续视觉状态。 |
| 状态演化 | 有；技术报告将其描述为动作条件的自回归视频扩散世界模型。 |
| 动作接口 | 相机轨迹、手部姿态/运动等交互条件。 |
| 空间与记忆 | 公司报告采用 3DGS 监督、几何一致性约束及记忆感知 KV cache。 |
| 速度口径 | `24 FPS/单 GPU` 来自博客，硬件和完整条件缺失；`16 FPS/单 H100` 来自报告摘要，完整条件缺失；`6.27 FPS/A800 80GB` 来自报告对比表，实验设置含 832×480。三者不得合并或直接横比。 |
| 公开交付 | 官网、项目演示和 PDF 可访问；代码、权重、API、SDK、许可证均未证实。 |
| 验证等级 | 公司/项目自报；本轮未发现独立复现。 |
| 商业未知 | 客户、付费试点、生产部署、收入、采购方和标准交付形态均未公开确认。 |

## 对 Gate 3 的限制

由于公开资料不能确认 Manifold 的实际买方、预算归属、标准交付形态、商业阶段与未来路线，Gate 3 只能相对于上述公开锚点作条件性判断。`potential_product_substitution` 与 `potential_platform_substitution` 均为 `Analyst inference / conditional`，不证明任何海外对象已经与 Manifold 争夺相同客户、预算或商业交付位置。

## 镜头 B：WorldScape Policy——从世界模型到机器人策略的下游验证锚点

| 字段 | 暂定锚点 |
|---|---|
| 公开身份 | 官方博客和报告均直接署名 Manifold AI，是当前公司归属最清晰的技术资产。 |
| 核心任务 | 将预训练世界模型适配为多任务机器人规划器。 |
| 输入/输出 | 多视角 RGB、深度、本体感知和语言指令；输出连续动作块。 |
| 闭环机制 | 报告使用 DAgger/HITL 数据回流。 |
| 真机证据 | 双臂 PIPER、7 个长时程任务、每任务 10 次；结果均为公司自评，样本量小且无置信区间。 |
| 性能边界 | 未披露控制频率、端到端推理延迟或边缘设备实时性；报告将更高控制频率和边缘推理效率列为未来工作。 |
| 公开交付 | 官方页面和 PDF；未证实代码、权重、API、SDK 或许可证。 |
| 商业边界 | 真机实验不等于客户部署、生产运行或商业采用。 |

## 排名与开放性纠偏

1. Manifold 官网在 2026-04-30 自报 WorldScore、WorldArena、RoboTwin 三项第一；这只能写成带日期的历史公司陈述。
2. 2026-07-14 访问的 WorldScore 榜单快照已不支持 WorldScape 保持 Static 或 Dynamic 第一。
3. WorldArena 当前只能恢复 WorldScape v0.2 的一个 Policy Evaluator 记录，不能推导综合榜第一；提交/评测独立性未确认。
4. 已打开的 RoboTwin 2.0 官方榜单没有 WorldScape；公司所指赛道或快照仍未恢复。
5. Worldscape-MoE 的仓库在访问时仍写明代码和权重正在整理，HF 文件树未见权重；不得写成“代码/权重已公开”。

## 辅助公开资产

本检查点选择 WorldScape 与 WorldScape Policy 作为主要比较镜头；RoboScape、AirScape 与 Worldscape-MoE 作为辅助资产登记，不据此推断当前产品或商业优先级。

三项辅助资产的任务、动作接口、开放状态、Manifold 归属证据与不作为主要镜头的原因，见 [Manifold 其他公开资产登记](manifold_auxiliary_assets.md)。它们不构成第三个比较镜头。

## 可安全使用的比较语言

> Manifold AI 官网将自身定位为探索下一代世界模型并面向机器人、XR 等硬件应用的公司。其核心公开技术锚点为 WorldScape，以及面向机器人策略的 WorldScape Policy。现有性能与真机结果主要来自公司技术报告，尚未发现独立复现、商业客户、生产部署或明确公开交付证据。公司在 2026 年 4 月发布过三项榜单第一的历史自报，但当前 WorldScore 快照已不支持其保持第一，WorldArena 与 RoboTwin 的准确赛道及排名快照仍待恢复。

## 公开未知项

- 法律实体、统一社会信用信息、项目/IP 所有权链。
- 目标客户与实际买方、预算归属、优先场景、付费/生产采用。
- 模型、Policy、API/SDK、服务或联合项目中哪一种是标准交付形态。
- 未来 12–24 个月更偏基础世界模型、机器人策略、数据/评测还是软硬一体。
- 可公开披露的客户、性能测试条件、路线图和知识产权边界。

## 重新打开的关键原始来源

- [Manifold AI 官网](https://manifoldai.cn/)（S-MAN-001）
- [WorldScape 官方博客](https://manifoldai.cn/blogs/WorldScape.html)（S-MAN-002）
- [WorldScape 技术报告](https://manifoldai.cn/assets/file/WorldScape.pdf)（S-MAN-003）
- [WorldScape 项目页](https://worldscape.io/)（S-MAN-005）
- [WorldScape Policy 技术报告](https://manifoldai.cn/assets/file/WorldScapePolicy.pdf)（S-MAN-004）
- [WorldScore 官方榜单数据](https://huggingface.co/spaces/Howieeeee/WorldScore_Leaderboard/blob/main/leaderboard.csv)（S-BENCH-001）
- [WorldArena 项目页](https://world-arena.ai/) 与 [WorldScape v0.2 记录](https://huggingface.co/spaces/WorldArena/WorldArena/blob/main/worldarena-results%28policy%20evaluator%29/WorldScape%20v0.2.json)（S-BENCH-002/003）
- [RoboTwin 2.0 官方榜单](https://robotwin-platform.github.io/leaderboard)（S-BENCH-004）
- [Worldscape-MoE 官方代码仓](https://github.com/EmbodiedCity/Worldscape-MoE.code)（S-ART-001）
- [Worldscape-MoE Hugging Face 文件树](https://huggingface.co/EmbodiedCity/Worldscape-MoE/tree/main)（S-ART-002）
- [Manifold 其他公开资产登记](manifold_auxiliary_assets.md)（RoboScape、AirScape、Worldscape-MoE）

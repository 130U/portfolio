# Manifold 其他公开资产登记 v1.1a

基线状态：`approved_checkpoint_1`（批准日期 `2026-07-15`）  
截至：`2026-07-14`

> 本检查点选择 WorldScape 与 WorldScape Policy 作为主要比较镜头；RoboScape、AirScape 与 Worldscape-MoE 作为辅助资产登记，不据此推断当前产品或商业优先级。

辅助资产不构成第三个比较镜头，不占席，也不获得候选专页。联合作者单位、Manifold 官网公告或独立域名项目页只能证明公开参与/归属线索；不能单独证明独占 IP、产品化、商业采用或公司优先级。

## 登记表

| 资产 | 任务 | 动作接口 | 截至日开放状态 | Manifold 归属证据 | 不作为主要镜头的原因 |
|---|---|---|---|---|---|
| RoboScape | 由历史视觉观察和机器人动作生成后续 RGB/深度观察，用于合成数据、策略训练与评估 | 连续机器人动作控制向量；论文原文仅明确将 `end position`、`end orientation` 与 `effector position` 拼接为动作序列；精确字段定义仍待核 | 论文公开；GitHub 仅为极小 README 占位；实际实现、权重与许可证未恢复，因此不得写“代码已开放” | Manifold 官网将其列为机器人世界模型；论文将 Xin Zhang、Wei Wu 列为 Manifold AI，属于清华—Manifold 联合作者证据（S-MAN-001、S-AUX-001/002） | 窄机器人操作研究资产；公开材料不能证明通用产品、标准交付或商业优先级 |
| AirScape | 从当前第一视角观察和运动意图预测 6DoF 无人机未来观察视频 | 自然语言 motion intention，包括平移、旋转、复合运动、云台调整、导航与跟踪；不是直接飞控变量 | 论文、项目代码与 Phase 1/2 权重公开；HF 权重仓标 MIT，但论文与 model tree 表明其基于 CogVideoX-5b-I2V，而基座采用 CogVideoX 自定义许可；MIT 标签不能覆盖基座条款，代码、衍生权重、基座与训练数据的完整许可链仍待核 | Manifold 官网将其列为无人机世界模型；arXiv v2 将 Xin Zhang、Wei Wu 列为 Manifold AI，属于多机构联合作者证据（S-MAN-001、S-AUX-003/004/005/008） | 空域/无人机垂直任务；不代表通用产品面或当前商业优先级 |
| Worldscape-MoE | 用一个 DiT/MoE 世界模型统一多种控制接口生成未来观察，并可通过末帧回灌继续自回归延展 | 相机轨迹、低维双臂机器人动作序列、稠密手关节 action map，另有文本条件 | 论文、独立域名项目页和演示公开；GitHub 明示代码/模型仍在整理，HF 文件树未见权重；论文许可不能外推到代码/模型 | 论文将 Xin Zhang、Haisheng Su、Wei Wu 列为 Manifold AI，主要其余作者来自清华；是联合研究归属，不是独占所有权证明（S-AUX-006/007、S-ART-001/002） | 发布时间极新且 artifact 未实质开放；没有公司产品 API、商业交付或优先级证据；名称相似不能证明替代 WorldScape 0.2 |

## 统一限制

- Manifold 官网的“发布”措辞与作者单位支持“公司参与/公开归属”，不支持独占所有权。
- 项目页为独立域名或匿名投稿状态，不代表项目方与 Manifold/作者团队相互独立，也不构成第三方验证。
- 模型、数据、论文与代码许可证分别归属；不得借其中一项的开放许可覆盖其他 artifact。
- 进入后续阶段前须刷新仓库、权重和许可证状态；新开放只触发重审，不自动升级为主要镜头或产品优先级。

## 重新打开的关键原始来源

- [Manifold 官网](https://manifoldai.cn/)（S-MAN-001）
- [RoboScape 论文](https://arxiv.org/html/2506.23135v1) 与 [GitHub](https://github.com/tsinghua-fib-lab/RoboScape)（S-AUX-001/002）
- [AirScape 论文](https://arxiv.org/html/2507.08885v2)、[代码仓](https://github.com/EmbodiedCity/AirScape.code)、[权重仓](https://huggingface.co/EmbodiedCity/Airscape) 与 [CogVideoX 基座许可证](https://huggingface.co/zai-org/CogVideoX-5b-I2V/blob/main/LICENSE)（S-AUX-003/004/005/008）
- [Worldscape-MoE 论文](https://arxiv.org/html/2607.03964v1)、[独立域名项目页](https://worldscape-moe.com/)、[代码仓](https://github.com/EmbodiedCity/Worldscape-MoE.code) 与 [HF 文件树](https://huggingface.co/EmbodiedCity/Worldscape-MoE/tree/main)（S-AUX-006/007、S-ART-001/002）

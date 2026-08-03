# S-AUX-001 — RoboScape 论文
- 发布者/版本/访问：清华大学与 Manifold AI 作者团队；arXiv v1；2026-07-14。
- URL：https://arxiv.org/html/2506.23135v1
- 支持：以历史观察和连续机器人动作控制向量预测后续 RGB/深度观察；论文实验设置仅明确将 `end position`、`end orientation` 与 `effector position` 拼接为动作序列；Xin Zhang、Wei Wu 的作者单位为 Manifold AI。
- 关键原文（短摘）： “We concatenate the end position, end orientation, and effector position of the embodiment as the action sequence.”
- 类型：联合作者技术报告。
- 限制：`effector position` 不得改写为“执行器状态”；实际字段路径、维度、坐标系、单位/归一化、effector 类型及时间对齐仍待实现核验。能力为作者自报；联合署名证明 Manifold 参与和公开归属，不证明独占 IP、产品化或商业优先级。

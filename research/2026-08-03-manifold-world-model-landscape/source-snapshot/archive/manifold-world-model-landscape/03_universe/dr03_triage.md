# DR-03 大厂项目三分流 v1.1a

基线状态：`approved_checkpoint_1`（批准日期 `2026-07-15`）；本文件只确认范围资格，不排名、不选择最终 1–2 个大厂席位。

## A. 合格大厂具体世界模型项目种子

### NVIDIA Cosmos 3

- `core`：Reasoner tower + Generator/world-simulator tower。
- `action-conditioned`：Cosmos3 Nano/Super 的动作轨迹输入与未来生成。
- `access`：代码/检查点与自托管 NIM 层均存在，但模型、Transfer2.5、NIM 的许可证分立。
- `limit`：模型卡明确无显式物理模拟器；可能出现动作—状态漂移和物理交互不精确。
- `guardrail`：不得把 Isaac、GR00T、Omniverse 或 Transfer2.5 的成熟度归给 Cosmos 3 core。

### Google DeepMind Genie 3 / Project Genie

- `core`：Genie 3 研究模型，按导航动作生成后续环境，支持 promptable events。
- `access`：Project Genie 是叠加 Genie 3、Nano Banana Pro、Gemini 等组件的 Google Labs 订阅制实验原型，不是纯 Genie 3 产品。
- `limit`：动作空间、时长、多智能体、控制与延迟、真实地点还原均有限；无公开权重、企业 API 或 SDK 证据。
- `guardrail`：Street View grounding 或 Ultra 订阅访问不等于物理准确性、企业部署或外部采用。

### Meta V-JEPA family

- `V-JEPA 2 base`：action-free 视频表征与 latent prediction 基座，单独不满足动作条件化。
- `V-JEPA 2-AC`：在冻结基座上增加约 300M action-conditioned predictor，按过去状态与候选动作预测未来 latent；机器人规划/控制证据归属这一分支。
- `V-JEPA 2.1`：2026-03-16 已纳入官方仓库的最新 action-free 表征分支，强化 dense、空间与时序一致特征；单独仍不满足动作门。
- `robot result boundary`：2.1 论文中的机器人结果使用 2.1 encoder 与另训的 action-conditioned predictor；不得归给裸 2.1 checkpoint，且未恢复具名公开的 2.1-AC artifact。
- `access`：三组件的代码、配置、checkpoint 与模型卡必须逐项归属；未发现官方托管商业产品。
- `license`：代码与权重不能写成统一许可；已恢复的 V-JEPA 2 base 模型卡分别标 MIT 或 Apache-2.0，2-AC 与 2.1 直链 checkpoint 的精确许可仍待核。
- `guardrail`：项目族只有通过明确 action-conditioned derivative 才能满足动作门；base、2.1、2-AC 的能力、机器人结果、开放状态与许可不得互借。

## B. 只作路线/边界，不入池、不占席、不获专页

- VLA/机器人基础模型：Gemini Robotics、NVIDIA GR00T、OpenVLA/LeRobot 等。
- 仿真与工具：Isaac Lab/Isaac Sim、Omniverse/OpenUSD、Meta Habitat/PARTNR。
- 垂直内部项目：Waymo World Model、Wayve GAIA、Waabi World/Copilot4D、Amazon DeepFleet、Tesla autonomy stack。
- 组件归因规则：邻接工具、数据、部署或母公司商业成熟度不得向三个 core 项目倒灌。

## C. 丢弃

- Microsoft Magma：multimodal agentic foundation model，输出 UI/机器人动作，属 VLA/agent 路线。
- Google DeepMind SIMA：在既有游戏/3D 环境中输出键鼠动作的 generalist agent，不生成环境动力学。

## 三个项目统一验证问题

1. 核心模型本身是否满足状态演化、动作/控制/持续交互、物理/具身/实时仿真/空间行动任务三项，而不是借邻接组件补齐；动作、控制或持续交互是否对模型所表示的后续状态产生可审计、时间一致的条件性影响？导航中的持续 agent/ego/相机位姿、可达性、碰撞约束与记忆可以计入状态；仅对静态场景施加外生相机轨迹、只改变像素/视角且无持久状态、几何约束或动作条件未来分支的不足。
2. 哪些能力来自 core、adapter/predictor、NIM/API、产品原型或仿真工具？
3. 权重、代码、容器、托管服务分别如何访问？
4. 各层许可证是否允许商业使用、修改、再分发及衍生模型？
5. 性能主张是否披露方法、基线、硬件、复现实验和第三方证据？
6. 限制是否直接影响物理一致性、动作可控性、长期稳定性或安全用途？
7. 是否有企业 API/SDK/SLA，还是只有研究代码、订阅原型或自托管容器？
8. 是否有外部采用；若只有厂商内部或相邻工具采用，能否明确隔离？
9. 新版本是否改变旧 DR 的组件状态、许可证或访问条件？
10. 能否清楚回答“项目边界在哪里结束，邻接技术栈从哪里开始”？
11. 是否能完成 Manifold 面向客户的同一任务，客户通过它如何现实绕开独立供应商？
12. 伙伴、测试者、技术集成、付费使用和生产部署分别有什么原始证据，能否避免把它们合并成“采用”？
13. 硬件、云、数据、标准、地域与总体集成成本分别构成什么摩擦或锁定？
14. 当前最强反证是什么；哪些公开事件会在 12–24 个月内使替代机制升级或降级？

上述动作—状态问题适用于全部 10 个资格验证/隔离对象，而不是只适用于 World Labs；完整规则见 [三门准入与晋级规则](../00_brief/qualification_gates.md)。

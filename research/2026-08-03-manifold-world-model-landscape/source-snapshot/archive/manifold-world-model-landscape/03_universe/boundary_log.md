# 边界与排除日志 v1.1a

基线状态：`approved_checkpoint_1`（批准日期 `2026-07-15`）  
截至：`2026-07-14`

## 硬边界

以下类别不得进入资格验证/隔离队列、不得占最终五席、不得获得公司/项目专页：

- VLA 与直接输出机器人动作的机器人基础模型；
- 仿真、合成数据、评测、数据管线或 3D 工具链；
- 纯视频生成；或仅作 3D/learned renderer、且不具备可审计、时间一致、动作条件状态转移的对象；
- 自动驾驶、仓储、单一机器人公司等垂直内部组件；
- 只有未来意图、没有当前具体世界模型技术对象的项目；
- 只有“world model”措辞、但不满足状态演化、动作/交互与物理/空间任务三项技术判据的对象。

被排除对象只用于解释范围、路线替代和边界变化；技术强弱不能推翻类别硬排除。

## 13 个边界输入对象（组件拆分后为 14 行）

| 对象 | 路由 | 排除理由 | 第一方原始来源 |
|---|---|---|---|
| Gemini Robotics | VLA | 官方直接定义为 VLA，并输出机器人动作。 | [Google DeepMind](https://deepmind.google/models/gemini-robotics/) |
| Waymo World Model | 垂直内部组件 | 为 Waymo Driver 生成自动驾驶仿真环境。 | [Waymo](https://waymo.com/blog/2026/02/the-waymo-world-model-a-new-frontier-for-autonomous-driving-simulation/) |
| 1X / 1XWM | 垂直机器人组件 | 用于自有 NEO/Redwood 机器人 policy 评估。 | [1X](https://www.1x.tech/discover/redwood-ai-world-model) |
| Dexterity / Foresight | 垂直机器人组件 | Dexterity 仓储/装箱机器人系统的内部 intelligence layer。 | [Dexterity](https://dexterity.ai/blog/foresight) |
| Waabi / Copilot4D | 垂直自动驾驶组件 | 服务 self-driving 与 Waabi World。 | [Waabi](https://waabi.ai/introducing-copilot4d/) |
| Wayve / GAIA-3 | 垂直自动驾驶组件 | 明确用于评估与验证 Wayve 自动驾驶 AI。 | [Wayve](https://wayve.ai/press/wayve-launches-gaia3/) |
| FieldAI | 机器人基础模型/内部组件 | 公司核心为机器人基础模型与现场部署；动态模型嵌入机器人系统。 | [FieldAI](https://www.fieldai.com/technology) |
| Applied Intuition | 仿真/数据/工具链 | 提供数据、仿真、合成传感器、微调与评测工具；示例底模为 NVIDIA Cosmos。 | [Applied Intuition](https://www.appliedintuition.com/engineering-blog/world-foundation-models-from-research-to-reality) |
| Genesis AI / GENE | 机器人基础模型 | GENE 是 robot foundation model / robotic brain。 | [GENE](https://www.genesis.ai/press/press-release-gene-265) |
| Genesis World | 仿真平台 | 独立代码项目是 multi-physics simulation platform。 | [Genesis World](https://github.com/Genesis-Embodied-AI/genesis-world) |
| Physical Intelligence / π0 | VLA/机器人基础模型 | 从图像、文本直接生成机器人动作的通用 policy。 | [Physical Intelligence](https://www.pi.website/blog/pi0) |
| RLWRLD / RLDX-1 | 机器人基础模型 | 当前为 dexterity-first robot FM；world model 仍是路线图。 | [RLWRLD](https://www.rlwrld.ai/en/insight/blog/14) |
| Luma / Open Physical AI Lab | 未来方向/资格待决 | 公开公告是未来研发意图，尚无当前可验证的 action-conditioned 世界模型对象；现有主产品仍偏媒体/3D。 | [Luma](https://lumalabs.ai/news/luma-open-physical-ai-lab) |
| OpenAI / Sora 2 | 纯视频 | 官方定义为视频/音频生成系统；未公开持续动作条件闭环。 | [OpenAI](https://openai.com/index/sora-2/) |

## 1 个丢弃输入对象（两个组件分别登记）

| 对象/组件 | 判定 | 原因 | 第一方原始来源 |
|---|---|---|---|
| Mistral / Emmi Physics AI | 丢弃组件 | 从几何、边界条件等预测工程物理场，服务 CFD/FEM、设计探索与数字孪生；属工业物理 surrogate/仿真路线，不是 observation-action-future-world 接口。 | [Physics AI](https://mistral.ai/news/introducing-physics-ai-at-mistral/) |
| Mistral / Robostral Navigate | 丢弃组件 | 从图像历史与语言任务输出下一移动点、方向或局部位移，功能上是机器人导航 policy/planner，不生成未来环境状态。 | [Robostral](https://mistral.ai/news/robostral-navigate/) |

计数说明：GENE 与 Genesis World 在组件层已拆开，但为保持 DR-02 原始 23 项输入的审计链，`9/13/1` 仍把它们记为同一个输入对象 O-018。Emmi Physics AI 与 Robostral Navigate 同样在组件表拆分，但仍对应一个 DR-02 丢弃输入 O-021。组件资格以 `component_register.csv` 为准。

## 资格降级但保留验证的对象

- **World Labs**：保留在发现/验证隔离层；RTFM 当前证据是按历史帧和相机 pose 预测新视角并报告空间持久性，动态世界和更丰富交互仍是未来扩展。相机/ego 位姿可以计入导航状态，不能因其是相机控制而自动排除；但仍须审计该控制是否对后续状态形成时间一致的持久状态、几何/可达性/碰撞约束或动作条件未来分支。Marble / World API 与 RTFM 分开登记。
- **General Intuition / MIRA**：保留在相邻层；已证明的是 Rocket League 虚拟域，多域现实物理迁移是未来命题。
- **AMI Labs**：只按 `Self-positioned-only` 保留在发现/验证隔离层；没有公开模型、论文、产品、演示或评测，地域资格也待核。
- **Overworld**：新增为第 10 个发现层条件对象；已有 Waypoint/World Engine artifact，但键鼠控制是否对后续状态形成可审计、时间一致的条件性影响仍未闭合，需验证持续 agent/ego 位姿、可达性/碰撞约束、记忆或未来分支；物理正确性、法律实体与正式总部也待核，不得预占席位。
- **Runway**：研究单位纠正为创业公司本身，GWM-1 只是嵌套技术证据；不按“大厂具体项目”计。

## 不回流规则

边界对象若未来出现新的、独立、具体、通过门 2 技术资格、具备门 3 战略关系且非垂直内部的世界模型资产，须新建变更记录、重开原始来源并重新提交范围审批；不得直接从本日志回流资格验证/隔离队列。

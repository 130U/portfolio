# 资格验证/隔离队列 v1.1a（检查点 1）

基线状态：`approved_checkpoint_1`（批准日期 `2026-07-15`）  
截至：`2026-07-14`  
用途：定义当前跨来源资格验证队列；不排名、不评分、不预占固定五席、不制作 dossier。

最终席位约束仍为：`5 席 = 3–4 家非中国世界模型创业公司 + 1–2 个非中国大厂具体世界模型项目`。Manifold 只作锚点。本队列的 10 个对象不是十强名单，也不代表最终都会进入 `technical_qualified` 或 `core_collection`。

## 统计宇宙

- `9/13/1`：仅指 DR-02 原始 23 项输入审计的 9 个验证输入、13 个边界输入和 1 个丢弃输入；详见 [eligibility_register.csv](../03_universe/eligibility_register.csv)。
- `10`：当前跨来源资格验证/隔离队列；在原 9 个验证输入之外新增 Overworld 条件对象。
- 原 9 个对象不是 Phase 2 的“唯一入口”，也不是完整发现宇宙。任何新增对象必须按同一三门体系、地域门和原始来源规则提交变更。

## 当前 10 个对象

| 分组 | 对象 | 队列层级与标签 | CP1 保留依据 | 核心未决问题 |
|---|---|---|---|---|
| 创业公司 | World Labs | 发现/验证隔离；`technical_qualification_challenged` | 公开空间世界产品/API 与 RTFM 研究资产使其达到发现阈值 | Marble / World API 与 RTFM 必须分开；相机/ego 位姿可计入导航状态，但仍须证明其对后续状态产生可审计、时间一致且具有持久状态、几何/可达性/碰撞约束或动作条件未来分支的影响 |
| 创业公司 | Odyssey | 资格验证；`evidence_pending` | Odyssey-2 被公司描述为因果、自回归、动作感知、实时交互模型 | API、物理准确性、泛化、采用与竞争关系仍须核验；官方地址角色需区分 |
| 创业公司 | Runway | 资格验证；`evidence_pending` | GWM-1 被公司描述为实时模拟并接收 camera/robot actions | 研究单位保持公司级；访问、产品化、持久状态变化和战略重要性待核 |
| 创业公司 | Decart | 资格验证；`evidence_pending`；总部待恢复 | Oasis 3 被公司描述为闭环、policy-action 条件并面向 Physical AI | 正式总部、API 可用性、跨域泛化和独立证据待核 |
| 创业公司 | General Intuition / MIRA | 资格验证；`technical_qualification_challenged` | MIRA 在多人虚拟环境中按动作实时演化 | 当前只证明虚拟空间域；现实物理迁移与战略门未通过 |
| 创业公司条件对象 | AMI Labs | 发现/验证隔离；`self_positioned_only + technical_qualification_challenged + geography_pending` | 官方使命以 representation-space、action-conditioned world models 为核心 | 没有具体模型、论文、产品、演示或评测；法律主体与总部未恢复 |
| 创业公司条件对象 | Overworld | 发现/验证隔离；`technical_qualification_challenged + geography_conditional` | AP 的 interaction-first 报道与第一方 Waypoint/World Engine artifact 足以触发发现 | 待核键鼠控制是否对后续状态形成可审计、时间一致的条件性影响，包括持续 agent/ego 位姿、可达性/碰撞约束、记忆或未来分支；法律实体、正式总部与物理正确性也未闭合；不得预占席位 |
| 大厂项目 | NVIDIA Cosmos 3 | 资格验证；`evidence_pending` | 具体 world-model 项目，含动作条件变体与 Physical AI 任务 | core、NIM、Transfer2.5、Isaac/Omniverse 及许可证/采用必须分层 |
| 大厂项目 | Google DeepMind Genie 3 / Project Genie | 资格验证；`evidence_pending` | 具体实时、可控、可导航世界模型项目 | 研究模型与订阅原型必须拆开；有限访问不等于企业平台成熟度 |
| 大厂项目 | Meta V-JEPA family | 资格验证；`evidence_pending` | 明确的 V-JEPA 2-AC 组件提供动作条件的未来 latent 预测 | V-JEPA 2 base、2-AC、2.1 能力/机器人结果/开放/许可分别归属；base 与 2.1 均不能单独过动作门 |

## Overworld 成立时间与资格边界

- 第三方报道中“上一年开始”的表述与 2025-05-23 第一方技术博客只构成 `2025` 成立/运营线索。
- 原始登记页未恢复，因此 `founded_year=2025` 的状态为 `unresolved_source`，不得写成 Fact、不得写成官网口径、不得进入最终 PPT。
- 第一方模型、代码与产品线索已登记；法律实体、注册司法辖区和正式总部仍待后续恢复。

## 放行与冻结

- 三门规则以 [三门准入与晋级规则](../00_brief/qualification_gates.md) 为准；全队列都必须回答“动作、控制或持续交互是否对模型所表示的后续状态产生可审计、时间一致的条件性影响”。
- 逐对象地域证据与未决项见 [地域资格审计](../03_universe/geography_audit.csv)。
- 结构化队列见 [company_universe.csv](../03_universe/company_universe.csv)。
- 用户明确批准检查点 1 前，不启动 Phase 2；不选五席，不做 dossier、评分、排名或 PPT。

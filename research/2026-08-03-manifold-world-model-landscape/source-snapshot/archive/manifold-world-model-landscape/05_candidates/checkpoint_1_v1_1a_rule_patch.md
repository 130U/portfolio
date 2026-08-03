# 检查点 1 v1.1a 规则补丁

研究截至：`2026-07-14`  
修订依据：用户“检查点 1 v1.1a 规则补丁”裁决  
状态：`approved_checkpoint_1`（批准日期 `2026-07-15`）  
裁决响应：`P0=0；P1-01/P1-02 已修订；用户已于 2026-07-15 批准`

本文件是对检查点 1 审批包 v1.1 的窄范围、控制性规则补丁。没有重跑 Stage 1，没有重新生成整个审批包，没有启动 Phase 2，也没有选择五席、制作 dossier 或 PPT。

## 版本与审批关系

- v1.1 完整替代 v1.0，不与 v1.0 合并审批。
- v1.1a 累积修订 v1.1；用户已批准“v1.1 + v1.1a”为检查点 1 唯一有效基线。发生规则措辞冲突时，以 v1.1a 为准。
- [Day 0 未知项](../01_inputs/user_materials/day0_internal_input.md) 与 [DR-03 三分流](../03_universe/dr03_triage.md) 继续作为规范性附件。
- 本补丁的获批范围仅包括规则、锚点与资格验证/隔离队列；不批准完整 Evidence Ledger、商业事实、性能复现、竞争标签或最终五席。

## 修订后的三门规则

### 门 1：发现/验证队列准入门

有具名公司或具名大厂具体项目、至少一条可重开来源线索，且未被确认属于硬排除类别，即可进入 `qualification_validation_isolation_queue`。允许以下条件对象进入，但必须显式标记：

- `self_positioned_only`：只有公司定位，没有具体技术资产；
- `evidence_pending`：关键来源或组件边界尚未恢复；
- `technical_qualification_challenged`：门 2 至少一项未闭合或已有相反证据；
- `geography_pending`：现有证据不足以完成非中国资格判断；
- `geography_conditional`：一手证据足以暂留非中国研究范围，但正式总部、法律连续性或主要实体仍未完全闭合。

进入队列不表示技术合格。AMI Labs 在具体技术资产和地域证据补齐前保持 `self_positioned_only + technical_qualification_challenged + geography_pending`。World Labs 的相机/ego 位姿可作为导航型状态证据，但在门 2 所要求的时间一致条件性影响闭合前保持 `technical_qualification_challenged`。

### 门 2：技术资格门

对象必须同时满足以下三项，方可进入 `technical_qualified`：

1. **状态演化**：模型学习或预测环境状态及其随时间的演化。
2. **动作、控制或持续交互**：动作、控制或持续交互必须对模型所表示的后续状态产生可审计、时间一致的条件性影响。对具身导航或空间行动任务，agent、机器人、ego 或相机位姿及其可达性、碰撞约束和持续记忆可以计入状态；仅对静态场景施加外生相机轨迹，只改变像素或视角且不产生持久状态、几何约束或动作条件未来分支的，不足以通过本门。
3. **任务适用性**：面向物理、具身、实时仿真或空间行动任务。

三项必须归属于同一对象或明确、不可分割的项目 core；不得借 VLA、policy、simulator、数据/访问层或母公司相邻资产拼接补齐。导航任务无需以物体变化为必要条件；持续 agent/ego 状态转移同样可以合格。

### 门 3：核心集合战略关系门

进入 `technical_qualified` 后，对象还须至少满足下列一种与 Manifold 的实质战略关系，方可进入 `core_collection`：

1. **产品替代**：能够替代 Manifold 面向同一客户任务的产品或交付；
2. **平台替代**：客户可通过其平台现实地绕开独立供应商；
3. **有证据的未来市场竞争**：可审计证据支持未来 12–24 个月进入相同地域、客户任务或产品位置；招聘或融资不能单独证明本项，必须直接支持具体进入路径；
4. **强直接能力对标**：处于同一或可比评测体系，或存在具名人才、投资人等强直接重叠证据；仅有技术相似或宽泛赛道标签不足。

`geography_pending` 不得进入 `core_collection`。`geography_conditional` 或其他条件地域状态可进入晋级审议，但必须在最终占席前关闭非中国地域资格。

## 全队列统一验证问题 1

> 动作、控制或持续交互是否对模型所表示的后续状态产生可审计、时间一致的条件性影响？对具身导航或空间行动任务，是否体现持续的 agent/机器人/ego/相机位姿状态、可达性、碰撞约束、持续记忆或动作条件未来分支；还是仅对静态场景施加外生相机轨迹，只改变像素或视角？

该问题适用于全部队列对象，不能只对 World Labs 提问。

## 状态迁移

1. `qualification_validation_isolation_queue`
2. 通过门 2 → `technical_qualified`
3. 通过门 3 → `core_collection`
4. 从 `core_collection` 中，按照战略优先级、证据成熟度、组合互补性和固定席位结构选择最终五席

最终五席选择不是第四道技术资格门，也不设置额外资格门状态。固定结构仍为 `3–4 家非中国世界模型创业公司 + 1–2 个非中国大厂具体世界模型项目`；Manifold 只作锚点，不占席。

## 对象级同步

- **World Labs**：不再以“相机控制”本身降级；未决项改为导航控制是否形成可审计、时间一致的持久状态、几何/可达性/碰撞约束或动作条件未来分支。Marble / World API 与 RTFM 继续分开。
- **Overworld**：不再把物体变化设为必要条件；未决项改为键鼠控制是否形成持续 agent/ego 状态转移、约束、记忆或未来分支。地域状态统一为 `geography_conditional`，最终占席前必须关闭法律实体与正式总部问题。

## 同步勘误

| 项目 | v1.1a 处理 |
|---|---|
| 可比评测 | “同一评测体系”改为“同一或可比评测体系” |
| 未来市场证据 | 招聘或融资不得单独成立；必须直接支持进入相同地域、客户任务或产品位置 |
| 地域晋级 | `geography_pending` 不得进入核心集合；其他条件地域对象最终占席前关闭资格 |
| RoboScape | 论文原词登记为 `end position`、`end orientation`、`effector position`；不得写“执行器状态”，精确字段定义待核（S-AUX-001） |
| AirScape | HF 权重仓 MIT 标签不覆盖 CogVideoX-5b-I2V 基座的自定义许可；代码、衍生权重、基座与训练数据完整许可链待核（S-AUX-003/005/008） |
| 项目状态 | 补丁提交时的权威状态统一为章程枚举 `awaiting_user`；后续批准状态由批准记录覆盖 |

## 批准前冻结条件（历史快照）

检查点 1 批准前的状态为：`approved_checkpoint=null`、`phase_2_started=false`、`final_five_selected=false`、`dossiers_created=false`、`ppt_created=false`。用户已于 2026-07-15 批准，当前状态以 `project_state.json` 为准。

# 检查点 1 v1.1a QA 差异记录

研究截至：`2026-07-14`  
用户裁决日期：`2026-07-15`  
状态：`approved_checkpoint_1`（批准日期 `2026-07-15`）  
当前结果：`pass — P0=0 / P1=0 / P2=0`

本记录只验证 v1.1a 的两项 P1 与同步勘误，不重做 v1.1 全包 QA，也不扩大到 Phase 2。下列 `awaiting_user` 与冻结值均是批准前 QA 快照；用户已于 2026-07-15 批准检查点 1，当前状态以批准记录和 `project_state.json` 为准。

## P1 差异

| 项目 | v1.1 问题 | v1.1a 控制性修改 | 传播位置 | 预检 |
|---|---|---|---|---|
| P1-01 导航型动作状态 | 将相机/视角控制本身视为不足，可能误排导航型世界模型 | 门 2 改为审计动作、控制或持续交互是否对后续状态产生时间一致的条件性影响；agent/robot/ego/相机位姿及可达性、碰撞约束、持续记忆可计入；仅静态场景外生轨迹且无持久状态、几何约束或未来分支的不通过 | 三门规则、研究手册、10 对象队列、DR-03、World Labs、Overworld、边界/组件表、Evidence Ledger、来源重开队列、刷新目标 | closed |
| P1-02 核心集合迁移 | v1.1 把通过门 2 直接写为核心集合，并把门 3 写成最终五席门 | 迁移改为 `qualification_validation_isolation_queue → technical_qualified → core_collection → 最终五席选择`；门 3 改为核心集合战略关系门；最终选择不是第四道资格门 | 三门规则、研究手册、审批包、结构化队列、计划、README | closed |

## 同步勘误差异

| 勘误 | v1.1a 结果 |
|---|---|
| 可比评测 | 当前规则使用“同一或可比评测体系” |
| 未来市场证据 | 招聘或融资不能单独证明；必须直接支持进入相同地域、客户任务或产品位置 |
| 地域晋级 | AMI 的 `geography_pending` 不得进入核心集合；Overworld 改为与地域审计一致的 `geography_conditional`；Decart/Overworld 最终占席前须关闭条件地域资格 |
| RoboScape | 当前登记使用论文原词 `end position`、`end orientation`、`effector position`；精确 schema 仍待核 |
| AirScape | 新增 S-AUX-008；明确 HF MIT 标签不覆盖 CogVideoX-5b-I2V 自定义基座许可，完整许可链待核 |
| 版本关系 | v1.1 完整替代 v1.0；v1.1a 累积修订 v1.1；Day 0 与 DR-03 继续作为规范性附件 |
| 状态枚举 | 补丁提交时的权威文件统一为 `awaiting_user`；后续批准状态由批准记录覆盖 |

## 自动一致性预检

- `sources.csv`：89 行；独立来源卡 89 张；缺失卡 0；额外卡 0；重复 `source_id` 0。
- `evidence_ledger.csv`：53 条主张；主来源与交叉来源均可解析；重复 `claim_id` 0。
- DR-02 原始输入：23 项，严格为 `9 / 13 / 1`。
- 当前资格验证/隔离队列：10 项；地域审计 10 项；组件登记 13 项；输入清单 7 项。
- `company_universe.csv` 字段已从旧的核心技术门/最终战略门命名改为 `technical_gate_status` 与 `core_strategic_relationship_status`。
- 当前 Overworld 的队列标签为 `geography_conditional`，与 `non_china_provisional_legal_entity_unresolved` 地域记录一致；AMI 保持 `geography_pending`。
- 补丁提交时的权威文件未使用旧的非章程状态标签，统一为 `awaiting_user`。
- 当前规则不设置门 3 之后的额外资格门状态。

## 范围冻结预检

- `approved_checkpoint=null`
- `phase_2_started=false`
- `final_five_selected=false`
- `dossiers_created=false`
- `ppt_created=false`
- 未生成 shortlist、ranking、scorecard、dossier 或 `.pptx`。

## 本补丁修改的权威文件

- 规则与治理：`00_brief/qualification_gates.md`、`00_brief/research_manual.md`、`00_brief/decision_log.md`、`01_inputs/ingestion_audit.md`、`plan.md`、`README.md`
- 锚点与范围：`02_anchor/manifold_anchor.md`、`02_anchor/manifold_auxiliary_assets.md`、`03_universe/boundary_log.md`、`03_universe/dr03_triage.md`
- 队列与结构化表：`05_candidates/qualification_validation_isolation_queue.md`、`03_universe/company_universe.csv`、`03_universe/eligibility_register.csv`、`03_universe/component_register.csv`
- 证据：`04_evidence/evidence_ledger.csv`、`04_evidence/source_reopen_queue.csv`、`04_evidence/refresh_targets.md`、`04_evidence/sources.csv`、S-AUX-001/003/005/008、S-OW-005
- 已批准基线文件：`05_candidates/checkpoint_1_approval_pack.md`、`05_candidates/checkpoint_1_v1_1a_rule_patch.md`；v1.1 历史 QA 保留为基线快照

## 独立只读红队复核

最终结论：`P0=0 / P1=0 / P2=0`。

- 首轮发现 DR-03 规范性附件遗漏门 2 的“实时仿真/空间行动任务”，以及摄取审计仍使用旧复合状态；两处均已定点修正并复判通过。
- 导航型门 2 已完整传播至主规则、全队列问题、World Labs、Overworld、DR-03、边界/组件、Evidence Ledger、重开队列与刷新目标。
- 状态迁移严格为“队列 → `technical_qualified` → `core_collection` → 最终组合选择”，无第四道资格门残留。
- 来源/来源卡 `89/89`、主张 `53`、DR-02 `9/13/1`、当前队列 `10`、地域 `10`、组件 `13`、输入 `7`；链接和来源引用无缺失。
- 该次复核时项目状态为 `awaiting_user`，Phase 2、最终五席、dossier 与 PPT 均冻结。

该复核本身只判断 v1.1a 已关闭本轮问题，不构成用户批准；用户随后于 2026-07-15 另行明确批准检查点 1。

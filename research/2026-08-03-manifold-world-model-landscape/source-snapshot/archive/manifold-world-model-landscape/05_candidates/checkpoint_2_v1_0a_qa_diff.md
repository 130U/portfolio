# 检查点 2 v1.0a 窄范围差异 QA

研究截至：`2026-07-14`  
用户裁决日期：`2026-07-15`  
状态：`pass`  
当前结果：`P0=0 / P1=0 / P2=0`

本记录只验证《检查点 2 红队审批意见 v1.0》的 `P1=4 / P2=3` 是否闭环，不重跑 Phase 2，不重新选择五个推荐对象。`checkpoint_2_qa.md` 保留为 v1.0 历史快照。

> 批准覆盖说明：本文中的 `awaiting_user`、审批 blocker、`final_five_selected=false` 与 `recommended_CP2_not_final` 均为 2026-07-15 正式批准前的差异 QA 快照。用户批准后的当前状态以 [`checkpoint_2_approval_record.md`](checkpoint_2_approval_record.md) 和 `project_state.json` 为准；本文未伪造为批准后重新运行的 QA。

## P1 差异

| 项目 | v1.0 问题 | v1.0a 控制性修改 | 传播位置 | 预检 |
|---|---|---|---|---|
| P1-01 Gate 3 条件性 | 确定性产品/平台替代可能暗示客户、预算或交付已重合 | Gate 3 只相对 Manifold 公开锚点判断；推荐五对象使用用户指定 `conditional_pass_against_public_anchor` 与 `potential_*` 机制；Genie、MIRA、Overworld 同步条件化；Decart 新增 `C-P2-022` | 三门规则、研究手册、锚点、Day 0、Phase 2 表、资格/宇宙表、Ledger、推荐包、刷新目标 | closed |
| P1-02 Meta V-JEPA | 公开 checkpoint/code/local path 被判为 `none_closed / adjacent` | 仅 2-AC 通过门 2；Gate 3 改为 `pass_limited_against_public_anchor / potential_limited_platform_substitution`；进入 `core_collection_watch_not_recommended`；保留窄域、许可与复现限制 | 验证表、资格表、宇宙表、地域表、组件表、Ledger、刷新目标、推荐包 | closed |
| P1-03 CP2 放行范围 | v1.0 直接允许“最终 PPT 规划” | CP2 获批后只解锁 dossier、技术/产品/商业证据刷新、横向比较和独立 Red Team；十页蓝图仅结构约束；后续顺序锁为 `Dossier → Cross-comparison → Red Team → Content Lock → Deck production` | 章程、推荐包、控制补丁、README、计划、项目状态 | closed |
| P1-04 状态 blocker | `awaiting_user` 与空 `open_blockers` 冲突 | `open_blockers=[explicit_user_checkpoint_2_approval_required]`；当前保持 `approved_checkpoint=1 / checkpoint_2_status=awaiting_user / final_five_selected=false` | `project_state.json`、控制补丁、决策日志 | closed |

## P2 差异

| 项目 | v1.0a 结果 | 预检 |
|---|---|---|
| P2-01 九对象决策表 | 新增 `checkpoint_2_nine_object_decision_table.csv`，正好 9 行；展示战略机制、技术证据、外部可获得性、商业采用、独特页面价值、重叠、地域与决定性理由；无 score、weight、total 或 rank 字段 | closed |
| P2-02 Runway 组件 | `component_register.csv` 新增 GWM Worlds 与 GWM Robotics 两行；推荐包和验证表锁定未来 dossier 双栏，能力、访问、许可、采用互不借用 | closed |
| P2-03 采用措辞 | Escape=供应商托管 working prototype/PoC；Agile Robots=伙伴自报 early access、测试、集成与内部 neural-simulator deployment；Decart hands-on=独立媒体产品体验与反证 | closed |

## 五对象 Gate 3 枚举核对

| 对象 | `gate_3_status` | `gate_3_mechanisms` |
|---|---|---|
| World Labs | `conditional_pass_against_public_anchor` | `potential_platform_substitution;evidence_backed_future_market_competition` |
| Odyssey | `conditional_pass_against_public_anchor` | `potential_product_substitution;potential_platform_substitution;evidence_backed_future_market_competition` |
| Runway | `conditional_pass_against_public_anchor` | `evidence_backed_future_market_competition;potential_product_substitution;potential_platform_substitution` |
| Decart | `conditional_pass_against_public_anchor` | `potential_product_substitution;potential_platform_substitution` |
| NVIDIA Cosmos 3 | `conditional_pass_against_public_anchor` | `potential_platform_substitution;evidence_backed_future_market_competition;potential_partial_product_substitution` |

批准前快照中五对象仍为 `recommended_CP2_not_final`；批准后已统一为 `approved_final_five`，顺序不构成排名。

## Meta 与漏斗核对

- Meta 验证表：`gate_2_status=gate_2_pass_only_for_2_AC`；`gate_3_status=pass_limited_against_public_anchor`；`gate_3_mechanisms=potential_limited_platform_substitution`；`funnel_state=core_collection_watch_not_recommended`。
- 规范漏斗表将 Meta 计入 `core_collection`，推荐状态仍为 core watch not recommended。
- 当前统计严格为 `9 core_collection/core_watch + 0 adjacent + 1 isolation`；推荐数仍为 5，结构仍为 `4+1`。

## 非评分九对象表核对

- 行数：9；对象为 O-001–O-008 与 O-024；AMI 因无具体技术资产留在 isolation，不进入组合决策表。
- Runway：记录公开申请制 early-access 产品与应用入口（实际访问未独立确认）与创意平台向世界模型迁移。
- Genie 3：记录闭源前沿能力与 Alphabet 内部适配；未选择原因是组合互补性和单一大厂席配置，不是技术总分低于 Runway。
- 字段中不存在 `score`、`weight`、`total`、`rank`、`ranking` 或序位列。

## 数据完整性预检

- `sources.csv`：109 行；来源卡 109 张。
- `evidence_ledger.csv`：75 条主张；新增 Decart Gate 3 `C-P2-022`。
- `phase_2_candidate_validation.csv`：10 对象；推荐 5 个。
- `checkpoint_2_nine_object_decision_table.csv`：9 对象；无评分字段。
- `company_universe.csv`：10 对象；9/0/1。
- `eligibility_register.csv`：24 行。
- `geography_audit.csv`：10 对象。
- `component_register.csv`：15 行；新增 Runway Worlds/Robotics 分栏护栏。
- `input_manifest.csv`：9 行；新增 `USER-CP2-RT1`，文件哈希已登记。
- `project_state.json`：可解析；上述计数与实际文件一致。

## 冻结与状态预检

- `approved_checkpoint=1`
- `checkpoint_2_status=awaiting_user`
- `open_blockers=[explicit_user_checkpoint_2_approval_required]`
- `final_five_selected=false`
- `dossiers_started=false`
- `evidence_refresh_started=false`
- `cross_comparison_started=false`
- `independent_red_team_started=false`
- `scoring_ranking_started=false`
- `company_project_pages_started=false`
- `content_lock_approved=false`
- `deck_production_started=false`
- `ppt_created=false`

## 独立只读复核

最终结论：`P0=0 / P1=0 / P2=0`。

- 快速治理复核首轮发现 World Labs 仍有一处“Escape 案例只到 PoC”的不完整限定；已改为“供应商托管 working prototype/PoC，非付费试点、生产部署或收入”，定点复判为 `P0=0 / P1=0 / P2=0`。
- Meta/漏斗专项复核确认：仅 2-AC 通过门 2；`pass_limited_against_public_anchor / potential_limited_platform_substitution / core watch not recommended` 已传播；统计严格为 9/0/1，结果为 `P0=0 / P1=0 / P2=0`。
- 全量对抗复核发现 CP1 历史状态残留、Decart 的 `C-P2-022` 指针遗漏及三处确定性替代措辞；均已定点修正。最终复判确认规则、组件表、账本指针与条件性措辞一致，结果为 `P0=0 / P1=0 / P2=0`。
- 本地完整性检查确认 109 个来源、75 条主张、10 个验证对象、9 个非评分决策对象、15 条组件、9 个输入；ID、来源引用、计数、五对象 Gate 3、Meta 状态、审批 blocker 与冻结标志全部通过。

该复核只判断 v1.0a 已关闭本轮 P1/P2，不构成用户批准检查点 2。

# 检查点 1 v1.1 QA 基线记录（已由 v1.1a 修订）

研究截至：`2026-07-14`  
红队修订依据：用户文档日期 `2026-07-15`  
基线结果：`historical_pass_superseded_by_v1.1a`  
状态影响：本记录只保留 v1.1 提交时的历史 QA 快照；当前控制性结果以 [v1.1a QA 差异记录](checkpoint_1_v1_1a_qa_diff.md) 为准。项目为 `awaiting_user`，Phase 2 仍冻结。

## 自动一致性检查

- `sources.csv`：88 行；独立来源卡 88 张；缺失卡 0；额外卡 0；重复 `source_id` 0。
- `evidence_ledger.csv`：53 条决策承载型主张；主 `source_id` 和交叉来源引用均可解析；重复 `claim_id` 0。
- DR-02 资格登记：23 项，严格为 `9 个原始验证输入 / 13 个边界输入 / 1 个丢弃输入`。
- 当前跨来源资格验证/隔离队列：10 项；Overworld 只在当前队列，不写回 DR-02 的 23 项原始审计。
- 地域资格审计：10 项，与当前队列 object ID 一一对应；AMI=`geography_pending`，Decart 与 Overworld 保留条件性限制。
- 组件登记：13 行；Genesis 双组件、Cosmos core/NIM、Genie core/原型、V-JEPA 2/2-AC/2.1、Marble/RTFM、Emmi/Robostral 均已拆分。
- 所有 CSV 可解析；队列、组件与地域表的所有来源 ID 均存在。
- 所有本地 Markdown 链接可解析。
- `project_state.json` 可解析，计数与实际文件一致：queue=10、geo=10、components=13、sources/cards=88、claims=53。
- 项目状态为 `awaiting_user`、`approved_checkpoint=null`；`phase_2_started=false`、`final_five_selected=false`、`dossiers_created=false`、`ppt_created=false`。
- 文件扫描未发现 dossier、shortlist、scorecard、ranking 或 `.pptx` 产物。

## 5 项 P1 关闭检查

1. **P1-01 三门规则（历史基线）**：该版规则随后因导航状态定义和核心集合迁移问题被 v1.1a 取代；不再作为当前规则依据。
2. **P1-02 Overworld / 统计宇宙**：O-024 作为第 10 个发现层条件对象加入；DR-02 `9/13/1` 与当前 `10` 拆分；原 9 个对象不再称完整发现宇宙或唯一入口。
3. **P1-03 Meta 版本漂移**：对象改为 Meta V-JEPA family；V-JEPA 2 base、2-AC、2.1 的能力、机器人结果、开放状态与许可分别登记，并明确 CP1 不批准 core gate。
4. **P1-04 Manifold 辅助资产**：仍只有 WorldScape / WorldScape Policy 两个主要镜头；RoboScape、AirScape、Worldscape-MoE 已按任务、动作接口、开放状态、归属证据和非主镜头理由登记。
5. **P1-05 地域资格**：10 个对象逐项登记总部、主要经营/法律主体、一手来源、scope status 与未决问题；AMI 保持 `geography_pending`。

## 5 项 P2 关闭检查

1. **成立时间**：Overworld 的 2025 仅为 `unresolved_source`，非 Fact、非官网口径、不可进入最终 PPT。
2. **名称**：当前权威名称为“资格验证/隔离队列”；旧 `candidate_validation_pool.md` 仅保留废止指针。
3. **锚点措辞**：改为“独立域名项目页”；明确匿名投稿/独立域名不代表第三方独立性。
4. **组件隔离**：Marble / World API 与 RTFM 分开，且不写 RTFM API；Emmi Physics AI 与 Robostral Navigate 分开并分别排除。
5. **审批范围**：审批包明确 CP1 只批准范围、规则、锚点、验证队列、地域状态与组件边界，不代表 Evidence Ledger、商业事实、性能复现、竞争标签或最终五席通过完整红队。

## 对抗复核尾项与修正

- 修正 `project_state.json` 与旧 QA 的 v1.0 计数漂移。
- 将 AMI 从“暂定非中国合格”纠正为 `geography_pending`。
- 删除无本轮来源支持的 Overworld `Wayfarer Labs` 名称；只保留 S-OW-008 支持的历史 `Open World Labs` 页面，并明确法律连续性未决。
- 将 Meta 和其他项目的旧“通过技术门”措辞统一降为“资格验证/暂定组件证据/CP1 不批准核心门”。
- 输入审计更新为 88 个来源与 V-JEPA 三组件口径。
- 决策日志补记 v1.1 提交、5 项 P1/5 项 P2 关闭、`awaiting_user` 与 Phase 2 冻结。

历史独立红队复核结论：`P0=0 / P1=0 / P2=0`。该结论只描述 v1.1 当时的 QA，已被用户后续 `P0=0 / P1=2` 裁决覆盖；当前关闭状态见 v1.1a QA 差异记录，不会据此自动批准检查点 1。

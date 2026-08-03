# Phase 5 独立 Red Team 与 Content Lock 关单报告

**截至：** `2026-07-14`  
**执行日期：** `2026-07-15`  
**适用基线：** `CP2 推荐包 v1.0 as amended by v1.0a`  
**用户最新裁决：** `awaiting_revision / P0=0 / P1=2 / P2=4`  
**机械修订后内部复验：** `P0=0 / P1=0 / P2=0`  
**状态：** `mechanical_correction_completed_awaiting_user_recheck`

## 1. 审查边界

本轮由三条相互独立的只读审查线执行，主 Agent 统一回写 canonical files：

1. 技术、来源、版本、指标与许可；
2. 商业采用、外部访问、数据权与伙伴/客户证据等级；
3. 范围、条件性叙事、组件隔离、选样偏差、隐性排名与冻结边界。

审查不重开检查点 2，不改变固定五席与 `4+1`，也不生成评分、Storyboard、对象页面或 PPT/PDF。

## 2. 覆盖范围

- 5/5 份 dossier；
- Phase 5 关闭时的 109/109 条 Evidence Ledger 原子主张及其主来源映射；Content Lock 专项红队新增 Decart 采用上限原子主张后，最终为 110/110 条；
- 140 个 source registry 条目与 source card 的关键元数据；
- 5 行 competitive matrix；
- 17 条固定五席 monitoring signals；
- 5 条 watch-only 非占席触发器；
- Phase 4 派生工作簿及公式缓存、末行样式和 canonical CSV 一致性；
- 项目状态、decision log、CP2 措辞与 Content Lock 冻结传播。
- 10 页文字审阅稿、53 条页面证据映射及其 CSV/XLSX 一致性。

## 3. 初检结果

| 审查线 | 初检结果 | 主要问题 |
|---|---:|---|
| 技术/来源 | P0=0 / P1=2 / P2=1 | Cosmos 历史 PR 与当前固定版本路径漂移；复合主张、版本固定与来源原子性 |
| 商业/访问 | P0=0 / P1=2 / P2=2 | World Labs/Odyssey 数据权缺失；Cosmos action-core 与相邻生态混用；查询映射与采用措辞 |
| 范围/叙事 | P0=0 / P1=3 / P2=4 | Gate 3 机制越界、Gate 2 组件借证、监测与状态传播、隐性比较级、复合触发器与工作簿样式 |

三条审查线的计数包含交叉发现，不能直接相加为唯一问题数。完整修订轨迹见 `red_team_revision_log.md`。

## 4. 关键修订

- 将 vLLM-Omni PR #4102 保留为历史 policy/forward 子集记录；另以固定 revision 的 NVIDIA 模型卡和仓库记录截至 cutoff 的 policy/forward/inverse 自托管在线路径。该路径不等于独立执行、稳定版本化 action runtime、action NIM、企业 SLA 或生产验证。
- 将 Evidence Ledger 扩展并原子化为 109 条；109 条主张的七项来源元数据与 `sources.csv` 规范化后为 `0 mismatch`。
- 分别登记 World Labs User Content 与 Odyssey Customer Data 的训练、测试和改进权利；在 dossier、矩阵与横向比较中对称传播。
- 将 Cosmos 采用证据拆为 Agile Robots 的 action-core 伙伴侧自报线索，以及 Centific/Ailytics 的相邻项目生态；均不升级为客户侧付费或外部生产采用。
- Decart 回归 CP2 批准的产品/平台两机制；Runway Gate 2 只由 Worlds 闭合；Cosmos Gate 2 只由 forward dynamics 闭合。
- 所有 Gate 3 保持相对于 Manifold 公开锚点的条件性判断；删除隐性比较级与“已付费 API”等过度措辞。
- 将复合监测阈值拆为 17 条：World Labs 的产品化与动态交互研究分开，Cosmos 的 stable action runtime 与 action NIM 分开；新增 5 条 watch-only 触发器，且任何触发都不自动占席或换席。
- 重新生成并复核 Phase 4 工作簿：`5 / 17 / PASS / PASS`；末两条监测信号已包含在动态样式范围。
- 更新 `project_state.json`、Phase 4 QA 与 decision log，统一为 109 claims、17 signals、5 watch-only。
- Content Lock 专项红队新增 `C-P3-035`，以 `Q-DEC-010` 单独承载 Decart 的商业采用证据上限；最终 Ledger 为 110 条。
- 将页面标题、任务/JTBD、平台链、商业采用、许可与负向结论全部映射为 53 条可审计记录；Excel 与 canonical CSV 保持逐单元一致。
- 修正最终传播残留：Page 1 使用 `C-P3-035`，Cosmos 的 runtime/许可/TCO 改为“仍需核验”，Page 9/10 负向结论统一限定为截至 cutoff 的证据恢复结果。

## 5. Content Lock 专项初检与关闭

Content Lock 初检在不重开固定五席和研究范围的前提下，分别发现技术线 `P0=0 / P1=3 / P2=1`、商业线 `P0=0 / P1=4 / P2=2`、范围叙事线 `P0=0 / P1=3 / P2=2`。问题集中在条件性标题、Page 3 映射、负向证据上限、许可与采用传播，以及 CSV/XLSX 证据映射完整性。

主 Agent 完成定点修订、重建 Evidence Map 工作簿并冻结新哈希后，三条审查线均在最新快照上返回 `P0=0 / P1=0 / P2=0`。最终快照为 140 个来源、110 条原子主张、53 条 Evidence Map、10 页、17 条固定席信号与 5 条 watch-only 触发器，引用断链和来源元数据差异均为 0。

## 6. 最终复验

三条审查线均在定点修订后重新执行只读复验，并分别返回 `P0=0 / P1=0 / P2=0`：

- 技术线：110 条主张无缺失引用，版本固定一致，来源元数据 `0 mismatch`，Runway/Cosmos Gate 2 边界通过；
- 商业线：数据权、采用层级、查询映射与公开计价/PAYG 措辞全部闭合；
- 范围线：53 条页面映射、17/5 监测结构、状态传播、AMI 地域口径、无排名规则和 Content Lock 前冻结全部通过。

## 7. 放行与保留边界

独立 Red Team 已关闭，可提交 `deck_content_review.md` 与 `slide_evidence_map.xlsx` 供用户进行 Content Lock 审批。

这不等于 Content Lock 已获批准。用户明确批准前，以下仍为冻结状态：事实锁定、Storyboard、页面视觉落版、对象专页生产、Deck production、PPT 与 PDF。

## 8. Content Lock v1.1 用户红队返工与再次关单

用户对 v1.0 的裁决为 `awaiting_revision / P0=0 / P1=8 / P2=6`，并明确不重开固定五席、`4+1`、Phase 3–5 或全部来源。主 Agent 只执行内容架构、证据映射、版本归属和状态治理的定点修订。

关键关闭结果：

- 将 NIM for Cosmos WFM `3.0.0` 限定为文档快照；Cosmos3-Generator 产品版本统一为 `Release 1.0.0` 初始 GA，支持页只列 T2V/I2V，未列动作模式。
- 新增 Odyssey Session Management 来源与原子主张，并重开 Stream Duration Limits 官方 Markdown：区分当前默认单流上限 150 秒、当前默认单连接上限 60 分钟和 15 分钟空闲断开；均不解释为永久硬上限或连续服务保证。
- 删除 Runway 无本地原始截图或机器可读证据支撑的精确相关系数，仅保留单一 Franka tabletop 域的公司自评相对策略排序。
- Page 2 锁定为二维战略格局图，不显示对象表；十对象各有唯一主落点，并新增十条对象级 Claim/Source 映射。
- Page 3 压缩为四个维度；Page 4–8 统一为四字段；Page 10 收口为三项无悔动作与五类触发器；CEO 主稿不显示后台治理语言。
- `scoring_ranking` 进入永久禁令，不随 Content Lock 批准解锁。

最终快照为 141 个来源、141 张来源卡、111 条原子主张、63 条 Evidence Map、10 页、17 条固定席信号与 5 条非占席触发器。引用断链、主来源同 row 缺失、来源元数据差异和 CSV/XLSX 单元格差异均为 0。

三路最终只读复验结果：

- 技术、来源与版本边界：`P0=0 / P1=0 / P2=0`；
- CEO 内容架构与文字密度：`P0=0 / P1=0 / P2=0`；
- 映射、工作簿与状态治理：`P0=0 / P1=0 / P2=0`。

该 v1.1 提交随后被用户复核为 `P0=0 / P1=6 / P2=5`，已由 v1.1a 窄补丁取代；Storyboard、页面落版、事实锁定、对象专页、Deck production、PPT 与 PDF 继续冻结。

## 9. Content Lock v1.1a 窄补丁复验

用户要求不重跑 Phase 3–5、不改变固定五席，只关闭离散分类、节点状态、Odyssey 语义、冻结附件和批准迁移等 6 项 P1 与 5 项 P2。复验基于 v1.1a 当前文件本体，不沿用 v1.1 QA 自报。

关闭结果：

- Page 2 改为“持久空间世界｜实时交互世界流｜动作条件物理智能组件”三列离散分类，以及“内容与探索｜开发者世界 / 仿真基础设施｜机器人规划控制”三类离散交付位置；明确不构成连续能力轴、成熟度轴或排名。
- 节点状态统一为固定五席 5、观察对象 4、早期信号 1；Overworld 以“地域条件”作为附加徽标，不再误列 boundary。
- Odyssey 标题收窄为“写入开发者接口，实际开放与稳定服务仍待证”；官方 Markdown 确认当前默认单流上限 150 秒、当前默认单连接上限 60 分钟，以及无 active stream 15 分钟自动断开。三项均不外推为永久硬上限或 SLA。
- P10-03、MIRA 重审措辞、13 行 input manifest 与类别外路线永久禁令均已定点传播。
- 使用工作簿导入流程重新打开 v1.1a XLSX：63 条唯一映射、10 页、Page 2 十对象、所有非空引用可解析、CSV/XLSX 逐单元差异 0、公式错误 0；可见 QA 标签已改为“未解析的非空引用”，不再把治理或非监测空字段误报为缺失。
- 四份冻结文件与两张 Odyssey source card 已按文件本体记录字节数、SHA256 与签名；XLSX 签名为 `504B0304`，不再与 CSV 混淆。
- `project_state.json` 已定义用户批准时的单事务迁移，但尚未执行；所有下游制作标志继续为 false。

三路复验结果：

- 内容架构与状态口径：`P0=0 / P1=0 / P2=0`；
- 原始来源、证据映射与工作簿：`P0=0 / P1=0 / P2=0`；
- 状态治理与冻结附件：`P0=0 / P1=0 / P2=0`。

该轮内部复验当时认为 v1.1a 可重新提交，但不代表已获批准；其后用户机械复核发现新的附件与身份问题，见下一节。事实锁定、Storyboard、页面视觉落版、对象专页、Deck production、PPT 与 PDF 始终冻结。

## 10. Content Lock v1.1a 机械交付复核与关闭

用户对上一份 v1.1a 附件的裁决为 `awaiting_revision / P0=0 / P1=2 / P2=4`。本轮不重跑研究或重开五席，只检查用户指定的最小关闭路径。

关闭结果：

- 冻结交付改为单一 `content_lock_v1_1a.zip`，恰好包含 16 个唯一根级 canonical 文件名；`evidence_ledger.csv`、`sources.csv`、两张 Odyssey source card、`project_state.json`、QA、输入和红队文件均在包内。
- 包内只存在精确名 `slide_evidence_map.xlsx`，不含 `(1)` 后缀、第二份 XLSX、脚本、预览图或旧快照；最终不再单独提交 XLSX。
- companion 精确名为 `content_lock_v1_1a.zip.sha256`，只登记该 ZIP 的整体 SHA256。
- `deck_content_review.md` 已明确：映射及摘要见 XLSX，完整证据、许可与反证见 Ledger、source cards 和 dossiers；Page 1 删除“许可”；World Labs 触发器拆分为 RTFM 独立复现或 World API 版本化动态交互服务。
- Evidence Map 重建并导入验证后仍为 63 条唯一映射、10 页、Page 2 十对象；CSV/XLSX 逐单元差异 0、公式错误 0，页分布保持 `5/13/8/5/5/5/5/6/5/6`。
- `project_state.json` 继续保持 `content_lock_revision / awaiting_revision`；批准迁移合同未执行，所有下游制作标志为 `false`。

内部机械复验为 `P0=0 / P1=0 / P2=0`，仅表示材料已准备好接受下一轮机械复核。用户最新裁决仍是当前有效审批状态，Content Lock 尚未批准。

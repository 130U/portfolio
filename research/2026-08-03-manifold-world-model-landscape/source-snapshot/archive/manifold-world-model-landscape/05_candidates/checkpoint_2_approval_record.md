# 检查点 2 正式批准记录

记录版本：`v1.0`  
批准日期：`2026-07-15`  
研究事实截至：`2026-07-14`  
批准状态：`approved`  
v1.0a 基线红队状态：`P0=0 / P1=0 / P2=0`  
批准传播 QA：`初检 P0=0 / P1=0 / P2=4；定点修正后 P0=0 / P1=0 / P2=0`

## 一、唯一有效基线

后续唯一有效的检查点 2 基线为：

> `CP2 推荐包 v1.0 as amended by v1.0a`

即《检查点 2 推荐包 v1.0》与《检查点 2 v1.0a 控制补丁》合并读取；发生冲突时以 v1.0a 为准。v1.0 QA 及 v1.0a 批准前差异 QA 继续作为历史审计快照，不覆盖本批准记录。

## 二、原子状态迁移

本次批准同时生效以下状态，不允许部分写入：

- `approved_checkpoint=2`
- `checkpoint_2_status=approved`
- `final_five_selected=true`
- `open_blockers=[]`

五个对象的当前状态统一为 `approved_final_five`。

## 三、固定五席

| 对象 ID | 对象 | 类型 | 当前状态 |
|---|---|---|---|
| O-001 | World Labs | startup | `approved_final_five` |
| O-002 | Odyssey | startup | `approved_final_five` |
| O-003 | Runway | startup | `approved_final_five` |
| O-004 | Decart | startup | `approved_final_five` |
| O-005 | NVIDIA Cosmos 3 | big-tech project | `approved_final_five` |

组合结构为 `4 家创业公司 + 1 个大厂具体项目`。表内顺序不构成评分或排名。

## 四、批准后授权与冻结边界

本次批准只解锁以下工作：

1. 五份对象 dossier；
2. 技术、产品与商业证据刷新；
3. 横向比较；
4. 独立 Red Team。

“已解锁”仅表示获得后续执行资格，不表示工作已经启动。因此，本次登记后：

- `dossiers_started=false`
- `dossiers_created=false`
- `evidence_refresh_started=false`
- `cross_comparison_started=false`
- `independent_red_team_started=false`
- `scoring_ranking_started=false`
- `company_project_pages_started=false`
- `storyboard_started=false`
- `content_lock_approved=false`
- `deck_production_started=false`
- `ppt_created=false`
- `pdf_created=false`

Storyboard、最终页面内容落版、事实锁定、公司/项目页面视觉落版、Deck 视觉制作、PPT 与 PDF 继续冻结至 Content Lock。规范顺序保持为：

`Dossier → Cross-comparison → Red Team → Content Lock → Deck production`

## 五、批准传播勘误

本节替代此前误记的“四项非阻塞措辞勘误”清单。此前列出的 Runway 组件隔离、Escape、Agile Robots 与 Decart 仍是 v1.0a 的既有护栏，但不是本次批准传播遗漏的四项。正确的四项为：

1. **Runway 入口口径**：`external request-access product entrance`、“企业访问入口”“客户入口”统一改为“公开申请制 early-access 入口，实际访问未独立确认”及“产品与应用入口”。
2. **Genie 3 隐性排名**：删除“更强的闭源前沿能力”中的“更强”；只写闭源前沿能力与 Alphabet 内部适配，不生成技术高低排序。
3. **Cosmos 3 唯一性限定**：统一写为“截至 2026-07-14，在本轮审议的三个大厂候选项目中，Cosmos 3 是唯一同时具有可下载/自托管路径和具名伙伴侧自报集成线索的对象。”
4. **Genie / WorldMark 归属**：`comparable_capability_relation` 从 Genie 的战略机制字段移除；WorldMark 只保留为技术可比性参考。WorldMark 未直接包含 WorldScape，不构成强直接对标；Genie 的 Gate 3 由 `evidence_backed_future_market_competition` 支撑。

本次只做批准后定点传播，不改变 `CP2 推荐包 v1.0 as amended by v1.0a` 的唯一有效基线，不生成 v1.0b，不重开审批、Phase 2 或固定五席。

## 六、批准边界

本批准固定对象与授权工作流，但不表示当前商业事实、客户状态、收入、性能、许可证或公司自报 benchmark 已通过 dossier 阶段的完整核验，也不允许把相邻组件、母公司生态或伙伴系统成熟度借给世界模型 core。

## 七、批准输入登记

- 输入 ID：`USER-CP2-APPROVAL`
- 工作副本：`01_inputs/user_materials/checkpoint_2_approval_2026-07-15.md`
- 字节数：`1274`
- SHA-256：`BEA5EAADADFCCFB76660DAEA7B24083FEB87E4D89241C04796639A8C445320A6`
- 状态：`readable_nonempty_applied`

批准传播勘误输入：

- 输入 ID：`USER-CP2-PROP-CORR`
- 工作副本：`01_inputs/user_materials/checkpoint_2_approval_propagation_correction_2026-07-15.md`
- 字节数：`1586`
- SHA-256：`1B8CE36A85554584359058A6D843410444F2984600148F890416599F2CC231E1`
- 状态：`readable_nonempty_applied`

## 八、批准传播 QA

- 审计范围：`post_approval_propagation_only`。
- 初检结果：`P0=0 / P1=0 / P2=4`；四项 P2 即本记录第五节列出的批准传播遗漏。
- 处理：`targeted_propagation_only`；未生成 v1.0b，未重跑 Phase 2，未重开审批或固定五席。
- 原子状态四字段、五席名称和 `approved_final_five` 状态：保持不变并通过复核。
- 所有后续 `started` 标志：保持 `false`；Content Lock 冻结边界不变。
- 结构计数保持：10 个验证对象、9 个非评分决策对象、109 个来源、75 条主张、15 条组件、11 条输入记录。
- 下游 dossier、Content、Red Team 和 Deck 目录新增文件：0。
- 定点修正后独立只读复判结果：`P0=0 / P1=0 / P2=0`；最终状态：`pass / closed`。
- 批准影响：`none`；基线影响：`none`；版本升级：`not_required`。

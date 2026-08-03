# 检查点 2 v1.0a 控制补丁

研究截至：`2026-07-14`  
用户裁决日期：`2026-07-15`  
状态：`approved; 与 v1.0 合并生效`  
裁决响应：`P0=0 / P1=4 / P2=3 已修订；用户已于 2026-07-15 批准`

本文件累积修订《检查点 2 推荐包 v1.0》。没有重跑 Phase 2，没有更换 World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3 的 `4+1` 组合，也没有因批准登记自动启动 dossier、证据刷新、横向比较、独立 Red Team、评分排名、公司/项目专页或 PPT。用户已批准 `CP2 推荐包 v1.0 as amended by v1.0a` 作为唯一有效基线；发生冲突时以 v1.0a 为准。

## P1-01：Gate 3 条件性解释

统一规则：

> Gate 3 仅依据 Manifold 公开锚点进行判断。产品替代和平台替代属于 `Analyst inference / conditional`，不证明当前客户、预算或商业交付已经重合。

一般通过状态统一为 `conditional_pass_against_public_anchor`。这仍表示通过门 3 并可进入 `core_collection`；它是锚点限制，不是门 2 技术降级。

| 推荐对象 | Gate 3 状态 | 条件性战略机制 |
|---|---|---|
| World Labs | `conditional_pass_against_public_anchor` | `potential_platform_substitution + evidence_backed_future_market_competition` |
| Odyssey | `conditional_pass_against_public_anchor` | `potential_product_substitution + potential_platform_substitution + evidence_backed_future_market_competition` |
| Runway | `conditional_pass_against_public_anchor` | `evidence_backed_future_market_competition + potential_product_substitution + potential_platform_substitution` |
| Decart | `conditional_pass_against_public_anchor` | `potential_product_substitution + potential_platform_substitution` |
| NVIDIA Cosmos 3 | `conditional_pass_against_public_anchor` | `potential_platform_substitution + evidence_backed_future_market_competition + potential_partial_product_substitution` |

Genie 3、MIRA 与 Overworld 也使用相同 public-anchor 条件语义，不再保留裸 `pass` 或确定性产品/平台替代标签。Decart 新增决策承载主张 `C-P2-022`，明确公开 API/SDK 只支持条件性产品/平台替代，并与 TechCrunch 产品体验反证分开。

## P1-02：Meta V-JEPA family

- 门 2：仅 V-JEPA 2-AC 通过；base V-JEPA 2 与 V-JEPA 2.1 仍为 action-free。
- `gate_3_status = pass_limited_against_public_anchor`
- `mechanism = potential_limited_platform_substitution`
- `funnel_state = core_collection_watch_not_recommended`
- 核心依据：2-AC checkpoint、action-conditioned training config、PyTorch Hub 本地加载与本地 workflow 形成受限自托管绕行路径。
- 保留限制：Franka/DROID 窄域；2-AC checkpoint 精确许可未闭合；无 hosted API、产品或客户路径；TMLR 后续保留 rollout-loss bug 与公共 checkpoint 较弱结果的反证。
- 该调整不授予推荐席。漏斗统计改为 `9 core_collection/core_watch + 0 adjacent + 1 isolation`。

## P1-03：检查点 2 放行范围

检查点 2 获得用户明确批准后，只解锁：

1. 固定五对象 dossier；
2. 技术、产品与商业证据刷新；
3. 横向比较；
4. 独立 Red Team。

既有十页蓝图只作结构约束。页面内容落版、事实锁定和视觉制作必须遵循：

`Dossier → Cross-comparison → Red Team → Content Lock → Deck production`

Content Lock 获批前，不开始 Storyboard、PPT、PDF 或页面视觉制作。

## P1-04：审批状态原子约束

批准前控制状态（历史快照）：

- `approved_checkpoint = 1`
- `checkpoint_2_status = awaiting_user`
- `final_five_selected = false`
- `open_blockers = [explicit_user_checkpoint_2_approval_required]`

只有用户明确批准检查点 2 后，才可原子更新为 `approved_checkpoint=2`、`checkpoint_2_status=approved`、`final_five_selected=true` 并解除审批 blocker。

用户已于 2026-07-15 明确批准。批准后当前状态由 [`checkpoint_2_approval_record.md`](checkpoint_2_approval_record.md) 覆盖为：

- `approved_checkpoint = 2`
- `checkpoint_2_status = approved`
- `final_five_selected = true`
- `open_blockers = []`
- O-001 至 O-005：`approved_final_five`

## P2-01：九对象非评分决策表

[`checkpoint_2_nine_object_decision_table.csv`](checkpoint_2_nine_object_decision_table.csv) 统一展示九个核心/核心观察对象的：战略机制、技术证据成熟度、外部可获得性、商业采用阶段、独特页面价值、对象重叠、地域状态与决定性理由。表内没有总分、权重、序位或伪排名。

Runway 与 Genie 3 的取舍明确为：Runway 增加公开申请制 early-access 产品与应用入口（实际访问未独立确认）及“创意平台向世界模型迁移”路径；Genie 3 提供闭源前沿能力与 Alphabet 内部适配对照。保留 Runway 是组合互补性和 `4+1` 结构判断，不表示 Runway 技术得分高于 Genie 3。

## P2-02：Runway 组件分栏约束

Runway dossier 必须至少将 `GWM Worlds` 与 `GWM Robotics` 分栏。两者的技术能力、访问状态、许可与采用证据分别归属，任何一栏不得向另一栏借证。当前 Gate 2 资格 core 为 GWM Worlds；GWM Robotics 是直接相关、申请制 Python SDK 的世界模型资产，但不独立占席。

## P2-03：采用措辞

- World Labs Escape：供应商托管的 working prototype/PoC；不是付费试点、生产部署或收入证据。
- Agile Robots：伙伴公司自报的 early access、测试、集成及内部 neural-simulator deployment；不是 validated pilot、付费客户或外部生产采用。
- Decart hands-on：独立媒体产品体验与负面反证；不是系统验证或商业采用。

## 批准结果

用户已批准《检查点 2 推荐包 v1.0》经本 v1.0a 修订后的合并版本。五对象现为 `approved_final_five`；只解锁 dossier、证据刷新、横向比较和独立 Red Team，且本次登记不把它们标为已启动。Storyboard、页面落版、PPT 与 PDF 继续冻结至 Content Lock。

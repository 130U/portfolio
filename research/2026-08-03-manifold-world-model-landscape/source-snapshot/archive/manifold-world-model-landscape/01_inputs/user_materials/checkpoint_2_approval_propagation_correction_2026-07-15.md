# 检查点 2 批准传播勘误

用户裁决日期：`2026-07-15`  
记录类型：`checkpoint_2_post_approval_propagation_correction`

## 治理裁决

- 检查点 2 批准继续有效，不重开审批。
- 固定五席不变：World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3。
- 不提交 v1.0b，不改变任何审批状态。
- 所有 `started` 标志保持不变。

## 四项批准传播勘误

1. Runway 的 `external request-access product entrance`、“企业访问入口”“客户入口”改为“公开申请制 early-access 入口，实际访问未独立确认”及“产品与应用入口”。
2. 删除“Genie 3 提供更强的闭源前沿能力”中的“更强”，避免隐性排名。
3. Cosmos 3 的唯一性表述限定为：“截至 2026-07-14，在本轮审议的三个大厂候选项目中，Cosmos 3 是唯一同时具有可下载/自托管路径和具名伙伴侧自报集成线索的对象。”
4. 将 Genie 的 `comparable_capability_relation` 移出战略机制字段，保留为技术证据描述；WorldMark 未直接包含 WorldScape，不构成强直接对标。Genie 的 Gate 3 继续由 `evidence_backed_future_market_competition` 支撑。

## 记录要求

- 在 approval record 与 decision log 增加“批准传播勘误”。
- 不生成 v1.0b。
- 传播 QA 记录为：`初检 P0=0 / P1=0 / P2=4；定点修正后 P0=0 / P1=0 / P2=0`。
- `approved_checkpoint=2`、`checkpoint_2_status=approved`、`final_five_selected=true`、`open_blockers=[]`、五席状态、Phase 3 ready 状态与冻结边界全部保持不变。

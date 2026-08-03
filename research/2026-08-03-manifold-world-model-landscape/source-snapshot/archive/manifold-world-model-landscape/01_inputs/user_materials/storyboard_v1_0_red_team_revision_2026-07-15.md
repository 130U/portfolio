# Storyboard v1.0 红队审计意见

日期：2026-07-15  
裁决：`awaiting_revision`  
严重度：`P0=0 / P1=3 / P2=5`

## 已通过

- 严格 10 页，封面并入 P1。
- 固定五席、4+1、5/4/1 均未漂移。
- Manifold 仅作公开锚点；无评分、排名或类别外节点。
- P1→P10 叙事弧清楚。
- Runway、Cosmos、Decart、Odyssey 的组件与证据上限保持隔离。
- P3、P5、P7、P10 按所列尺寸预算原则上可以制作。

## P1 阻断

1. Content Lock 批准链仍无法独立验证。当前可访问的 ZIP/校验文件仍是 0 字节；新批准哈希与可读旧附件不同，Ledger 副本也处于截断状态。当前消息可视为用户明确批准，但 `FD333842…` 与四份冻结文件仍未完成独立机械闭环。
2. 权威状态不一致。Storyboard 标记为 `storyboard_review`，摘要却称当前已是 `deck_production_ready`；同时没有可读取的迁移后 `project_state.json`，无法确认 `storyboard_started/completed=true`、`deck_production_started=false`、`ppt_created=false`、`pdf_created=false`。
3. 锁定字体在制作环境不可用。Microsoft YaHei 实际回退为 DejaVu Sans，且当前没有可用中文字体，因此无法可靠验证中文换行、溢出和最低 16 pt。制作前须提供合法可用字体，或把视觉合同改为可复现的中文字体。

## P2 定点修订

1. 明确锁定 P1、P2、P5、P7、P10 的语义换行点，不能只写“预设换行”。
2. 把 1280×720 灰盒硬门扩展到 P1、P2、P10；这三页与 P3 同样属于高密度页。
3. P1、P10 应标为“参考 Codex Grid 后自定义重构”，不能让制作器机械套用 slide-09/17 原始槽位。
4. P4/P6/P8 使用开放分区和细规则，不使用连续圆角灰卡，避免整套 Deck 变成 UI 卡片网格。
5. P4 不要只写“逐字使用 Content Lock”，应在 Storyboard 明示修正版触发器：`RTFM 获得独立复现，或 World API 形成版本化服务。`

## 放行条件

关闭上述三项 P1、更新 Storyboard QA，并统一权威状态后，才能进入 `deck_production_ready`。无需改变页数、固定五席或 Content Lock 的研究结论。

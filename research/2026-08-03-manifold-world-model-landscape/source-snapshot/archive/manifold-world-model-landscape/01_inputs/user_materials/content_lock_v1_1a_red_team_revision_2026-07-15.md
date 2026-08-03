# Content Lock v1.1a 红队复核意见

日期：2026-07-15  
裁决：暂不批准 Content Lock v1.1a  
严重度：P0=0 / P1=2 / P2=4  
状态要求：`awaiting_revision`，不得执行批准迁移。

## 已通过

- Markdown、CSV、新版 XLSX 的字节数、签名和 SHA256 与 `content_lock_v1_1a_frozen_manifest.md` 一致。
- XLSX 实际导入为 63 条唯一映射、10 页、Page 2 十对象，页分布 `5/13/8/5/5/5/5/6/5/6`。
- CSV 与新版 XLSX 逐单元格差异为 0，公式错误为 0。
- 上轮 Page 2、5/4/1、Overworld 徽标、Odyssey 标题、Page 9/10、永久禁令等主要问题已关闭。
- 原子批准迁移合同设计本身基本完整。

## P1

1. 冻结包不完整：只收到四份内容冻结文件中的 3/4，缺 `evidence_ledger.csv`；另缺 sources、两张 Odyssey source card、`project_state.json`、QA、输入与红队文件等共 12 个清单文件，无法验证 141/111 底座、Odyssey 原文及实际迁移合同。
2. XLSX 身份冲突：新版文件名为 `slide_evidence_map(1).xlsx`；精确名称 `slide_evidence_map.xlsx` 仍指向旧快照（17,685 字节，SHA256 前缀 `F6E2844A`），存在误选风险。

## P2

1. 未提交实际 16 文件 ZIP，也没有明确命名的 companion SHA256，无法验证包内名称唯一及排除旧快照、脚本和预览文件。
2. `deck_content_review.md` 第 8、153 行错误暗示完整证据、许可全文只在 XLSX / 附件中；应改为“映射及摘要见 XLSX；完整证据见 Ledger、source cards 和 dossiers”。
3. Page 1 写“接口、运行时、许可、部署和集成”，但 `P01-02` 未承载“许可”；删除“许可”或新增对应原子映射。
4. World Labs 触发器重新粘合 RTFM 与 World API；改为“RTFM 的动态交互获得独立复现，或 World API 推出版本化动态交互服务”。

## 最小关闭路径

完成三处文字 / 映射修订后重建 CSV/XLSX；以 16 个 canonical 文件名提交单一 `content_lock_v1_1a.zip`，并另附明确命名的 `content_lock_v1_1a.zip.sha256`。无需重跑 Phase 3–5，也不改变固定五席；下一轮只需机械复核。

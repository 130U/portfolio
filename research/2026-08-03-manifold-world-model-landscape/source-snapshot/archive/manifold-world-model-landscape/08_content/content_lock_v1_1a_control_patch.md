# Content Lock v1.1a 机械交付补丁

**研究截至：** `2026-07-14`  
**执行日期：** `2026-07-15`  
**适用基线：** `CP2 推荐包 v1.0 as amended by v1.0a`  
**用户最新裁决：** `awaiting_revision / P0=0 / P1=2 / P2=4`  
**当前状态：** `awaiting_revision`  
**变更边界：** 不重跑 Phase 3–5，不重选五席，不改变 `4+1`，不执行 Content Lock 批准迁移，不启动 Storyboard、页面落版、对象专页、PPT 或 PDF。

## 一、本轮两项 P1 关闭方式

1. **冻结包完整性。** 单一交付包 `content_lock_v1_1a.zip` 恰好包含 16 个根级 canonical 文件名：四份内容冻结文件、证据底座、两张 Odyssey source card、项目状态、输入与红队治理文件；`evidence_ledger.csv` 已作为内容冻结文件 4/4 纳入。
2. **XLSX 身份唯一。** 包内只存在精确名称 `slide_evidence_map.xlsx`，不含 `slide_evidence_map(1).xlsx`、旧 XLSX 快照或第二份工作簿；最终不单独提交 XLSX，从交付面消除下载端重名风险。

## 二、本轮四项 P2 关闭方式

1. **唯一 ZIP 与 companion。** 审批附件只提交 `content_lock_v1_1a.zip` 与 `content_lock_v1_1a.zip.sha256`；companion 以 64 位 SHA256、两个空格和 ZIP 精确文件名登记整体哈希。
2. **证据载体措辞。** `deck_content_review.md` 已统一为：“证据映射及摘要见 `slide_evidence_map.xlsx`；完整证据、许可与反证见 `evidence_ledger.csv`、source cards 和 dossiers。”不再把 XLSX 描述为完整证据或许可全文载体。
3. **Page 1 映射对齐。** CEO 可见文字由“接口、运行时、许可、部署和集成”收窄为“接口、运行时、部署与集成”，与 `P01-02` 的原子映射一致；不新增无对应映射的“许可”主张。
4. **World Labs 组件隔离。** 触发器改为：“RTFM 的动态交互获得独立复现，或 World API 推出版本化动态交互服务。”`P04-05` 同步引用 `C-P3-001;C-P3-004`、`S-WL-002;S-WL-003` 与 `M-WL-01;M-WL-02;M-WL-04`，并明确两条路径互不借证。

## 三、工作簿与证据映射复验

- `slide_evidence_map.csv` 与 `slide_evidence_map.xlsx` 仍为 63 条唯一映射、10 页、Page 2 十对象；页分布固定为 `5/13/8/5/5/5/5/6/5/6`。
- 使用工作簿导入流程重新打开 XLSX；所有非空引用均可解析，CSV/XLSX 逐单元格差异为 0，公式错误为 0，公式缓存为 `63 / 10 / 0 / 0 / 0`。
- `sources.csv / evidence_ledger.csv / source cards` 的底座仍为 `141 / 111 / 141`；本轮没有重跑研究或更改任何对象资格、席位或商业结论。

## 四、16 个 canonical 包内文件名

1. `content_lock_v1_1a_frozen_manifest.md`
2. `content_lock_v1_1a_control_patch.md`
3. `deck_content_review.md`
4. `slide_evidence_map.csv`
5. `slide_evidence_map.xlsx`
6. `content_lock_qa.md`
7. `evidence_ledger.csv`
8. `sources.csv`
9. `S-ODY-011.md`
10. `S-ODY-014.md`
11. `project_state.json`
12. `input_manifest.csv`
13. `ingestion_audit.md`
14. `decision_log.md`
15. `red_team_report.md`
16. `red_team_revision_log.md`

包内不得出现子目录、重复 basename、`(1)` 后缀、`.mjs`、预览 PNG、`.inspect.ndjson`、旧 ZIP、旧 companion 或旧快照。

## 五、批准迁移继续冻结

当前仍保持：

```json
{
  "phase": "content_lock_revision",
  "status": "awaiting_revision",
  "content_lock_approved": false,
  "content_lock_approval_migration_pending": true,
  "fact_lock_started": false,
  "storyboard_started": false,
  "company_project_pages_started": false,
  "deck_production_started": false,
  "ppt_created": false,
  "pdf_created": false
}
```

`project_state.json` 中的批准迁移合同仅为预定义；只有用户明确批准 Content Lock v1.1a 后，才可在同一事务写入批准日期、10 页上限、四份冻结哈希、事实锁与解冻字段。机械修订完成或 QA 清零均不得自动触发迁移，所有下游 `started/created` 标志仍保持 `false`。

## 六、提交规则

本轮只提交以下两个附件：

- `content_lock_v1_1a.zip`
- `content_lock_v1_1a.zip.sha256`

旧的 `content_lock_v1_1a_frozen_attachments.zip`、旧 companion 及单独 XLSX 均不属于本轮提交。任一包内成员名称、字节、签名或 SHA256 与冻结清单不一致即 fail closed，状态继续保持 `awaiting_revision`。

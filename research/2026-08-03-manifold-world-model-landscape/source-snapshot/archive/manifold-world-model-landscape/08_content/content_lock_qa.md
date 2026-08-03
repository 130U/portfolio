# Content Lock v1.1a 机械交付 QA

**研究截至：** `2026-07-14`  
**执行日期：** `2026-07-15`  
**适用基线：** `CP2 推荐包 v1.0 as amended by v1.0a`  
**用户最新裁决：** `awaiting_revision / P0=0 / P1=2 / P2=4`  
**本轮定点修正后内部 QA：** `P0=0 / P1=0 / P2=0`  
**项目状态：** `awaiting_revision`；本 QA 不构成 Content Lock 批准。

## 1. 修订边界

- 只关闭冻结包完整性、XLSX 身份冲突、交付形态与三处文字 / 映射问题。
- 不重跑 Phase 3–5、不重选五席、不改变 `4+1`，不改写 dossier 或商业结论。
- 不执行批准迁移；事实锁、Storyboard、页面落版、对象专页、Deck production、PPT 与 PDF 继续冻结。
- 评分、加权、排名与类别外路线独立研究节点继续永久禁止。

## 2. 内容与映射定点复核

| 检查项 | 结果 |
|---|---|
| XLSX / 附件载体措辞 | 映射及摘要见 XLSX；完整证据见 Ledger、source cards 和 dossiers |
| Page 1 “许可”覆盖 | CEO 可见文字已删除“许可”；`P01-02` 无需新增映射 |
| World Labs 触发器 | RTFM 独立复现与 World API 版本化服务拆为两个“或”条件，互不借证 |
| `P04-05` 原子映射 | `C-P3-001;C-P3-004` → `S-WL-002;S-WL-003`；监测 `M-WL-01;M-WL-02;M-WL-04` |

## 3. Evidence Map 工作簿复验

- 63 行、63 个唯一 `map_id`、10 页；Page 2 十对象映射完整。
- 页分布：`5/13/8/5/5/5/5/6/5/6`。
- 所有非空 Claim、Source、Monitor/Watch 与 canonical artifact 引用均可解析；治理记录和非监测记录允许按 schema 留空。
- CSV/XLSX 逐单元格差异：`0`；公式错误：`0`；公式缓存：`63 / 10 / 0 / 0 / 0`。
- 包内工作簿精确名为 `slide_evidence_map.xlsx`，前四字节 `504B0304`；不存在 `(1)` 后缀或第二份 XLSX。

## 4. 证据底座复核

- `sources.csv`：141 条唯一来源登记。
- `evidence_ledger.csv`：111 条唯一原子主张，已作为内容冻结文件 4/4 纳入包。
- source cards：141 张；本轮包内额外携带 `S-ODY-011.md` 与 `S-ODY-014.md` 供时限原文机械复核。
- 本轮未改变 Odyssey 的既定口径：当前默认单流上限 150 秒、当前默认单连接上限 60 分钟、无 active stream 15 分钟自动断开；均不构成永久硬上限或 SLA。

## 5. 四份内容冻结文件

| 权威文件 | 字节数 | SHA256 | 签名 |
|---|---:|---|---|
| `08_content/deck_content_review.md` | 12214 | `7D794E1DEC6E9FC2FA3085892C6719B5778C7127CE424EB431543992659C4211` | `23204D61` |
| `08_content/slide_evidence_map.csv` | 30246 | `06074FF97F4CA54CA82F0DCD912789CE8A858137EC2ECF13C96F7AA9C49B2F25` | `226D6170` |
| `08_content/slide_evidence_map.xlsx` | 18853 | `50384D8780CE1B365957BC3FDF28E9DC5BF9E70B44A4228E2A55C237475B3443` | `504B0304` |
| `04_evidence/evidence_ledger.csv` | 81920 | `A60F4BCAFF9B6A0EDD6FA32C4BD2D814477E8EB24BF3835D7D19F040245C02EA` | `22636C61` |

上述四个哈希同时写入 `project_state.json` 的提交快照与待批准单事务合同。任何内容冻结文件漂移都必须重建清单和包，并阻止批准迁移。

## 6. 16 文件包结构

`content_lock_v1_1a.zip` 必须恰好包含以下 16 个唯一根级名称：

`content_lock_v1_1a_frozen_manifest.md`、`content_lock_v1_1a_control_patch.md`、`deck_content_review.md`、`slide_evidence_map.csv`、`slide_evidence_map.xlsx`、`content_lock_qa.md`、`evidence_ledger.csv`、`sources.csv`、`S-ODY-011.md`、`S-ODY-014.md`、`project_state.json`、`input_manifest.csv`、`ingestion_audit.md`、`decision_log.md`、`red_team_report.md`、`red_team_revision_log.md`。

结构检查要求：

- 成员数 `16`、唯一 basename 数 `16`、根级成员数 `16`；
- 不含 `(1)`、脚本、预览图、检查中间文件或旧快照；
- 清单所列 15 个非自引用成员的字节、签名和 SHA256 与包内文件逐项一致；
- 包内 XLSX 与权威精确名文件及清单三方哈希一致；
- companion 精确名为 `content_lock_v1_1a.zip.sha256`，且只指向 `content_lock_v1_1a.zip`。

## 7. 状态与迁移检查

机械修订后仍必须满足：

- `phase=content_lock_revision`
- `status=awaiting_revision`
- `content_lock_approved=false`
- `content_lock_approval_migration_pending=true`
- `fact_lock_started=false`
- `storyboard_started=false`
- `company_project_pages_started=false`
- `deck_production_started=false`
- `ppt_created=false`
- `pdf_created=false`

## 8. 结论

用户最新初检的 `P1=2 / P2=4` 已按最小关闭路径完成定点修正，内部机械 QA 为 `P0=0 / P1=0 / P2=0`。这只证明材料可供下一轮机械复核，不覆盖用户尚未给出的批准；项目继续保持 `awaiting_revision`，批准迁移不得执行。

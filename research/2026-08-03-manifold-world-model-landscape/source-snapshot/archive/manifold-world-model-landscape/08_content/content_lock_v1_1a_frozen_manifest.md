# Content Lock v1.1a 规范冻结包清单

**生成日期：** `2026-07-15`  
**状态：** `awaiting_revision`  
**规范 ZIP：** `content_lock_v1_1a.zip`  
**规范 companion：** `content_lock_v1_1a.zip.sha256`  
**用途：** 以单一 16 文件包消除缺件、旧快照和 XLSX 重名误选风险；任一包内名称、字节数、签名或 SHA256 不一致即 fail closed。  
**四份内容冻结文件：** `deck_content_review.md`、`slide_evidence_map.csv`、`slide_evidence_map.xlsx`、`evidence_ledger.csv`。

## 15 个非自引用成员

| 包内 canonical 文件名 | 权威相对路径 | 字节数 | 前四字节签名 | SHA256 | 角色 |
|---|---|---:|---|---|---|
| `content_lock_v1_1a_control_patch.md` | `08_content/content_lock_v1_1a_control_patch.md` | 4367 | `2320436F` | `911CEF53C48A6F90C3118C9FF1501BDBCF9B820D5F1DBA47B746BBB50E690364` | 机械交付控制补丁 |
| `deck_content_review.md` | `08_content/deck_content_review.md` | 12214 | `23204D61` | `7D794E1DEC6E9FC2FA3085892C6719B5778C7127CE424EB431543992659C4211` | **内容冻结 1/4** |
| `slide_evidence_map.csv` | `08_content/slide_evidence_map.csv` | 30246 | `226D6170` | `06074FF97F4CA54CA82F0DCD912789CE8A858137EC2ECF13C96F7AA9C49B2F25` | **内容冻结 2/4；权威映射数据** |
| `slide_evidence_map.xlsx` | `08_content/slide_evidence_map.xlsx` | 18853 | `504B0304` | `50384D8780CE1B365957BC3FDF28E9DC5BF9E70B44A4228E2A55C237475B3443` | **内容冻结 3/4；由 CSV 派生** |
| `content_lock_qa.md` | `08_content/content_lock_qa.md` | 4749 | `2320436F` | `6591D12B30E38436F30C39DAED390865AB623070B95AAE2EFD282E8D95538FA3` | 机械交付 QA |
| `evidence_ledger.csv` | `04_evidence/evidence_ledger.csv` | 81920 | `22636C61` | `A60F4BCAFF9B6A0EDD6FA32C4BD2D814477E8EB24BF3835D7D19F040245C02EA` | **内容冻结 4/4；111 条原子主张** |
| `sources.csv` | `04_evidence/sources.csv` | 41331 | `22736F75` | `CF9444DE0EA4A80221727FC0C8CB0A1B920DD18E6B90365CCB037760A8CB4A1B` | 141 条来源登记 |
| `S-ODY-011.md` | `04_evidence/sources/S-ODY-011.md` | 1142 | `2320532D` | `FFD2D2203B0619216EEA6C6A59177DB297EE1BDFD5D5521B4F207BBE42306618` | Odyssey 时限 source card |
| `S-ODY-014.md` | `04_evidence/sources/S-ODY-014.md` | 768 | `2320532D` | `E8A083D3D4D3A7B7F52090470248278856F2EC47755088A53E8F429453A8A9CA` | Odyssey 空闲断开 source card |
| `project_state.json` | `00_brief/project_state.json` | 14707 | `7B0A2020` | `7BE143CA65E4392EFDB8E507F7C0E70CD2E202AAC77C02CF155136C05E7CD65D` | 当前状态与未执行的批准迁移合同 |
| `input_manifest.csv` | `01_inputs/input_manifest.csv` | 4726 | `696E7075` | `1FCAD1743516AA419591CD3B8E63D417204B37D9F8EAEC3BB179CC28C5327868` | v1.8 / 14 行输入登记 |
| `ingestion_audit.md` | `01_inputs/ingestion_audit.md` | 9801 | `2320E8BE` | `F732723AF620EE972A66188A70B0AC89437C6B355A2E64227D294B063E2A749A` | 输入摄取审计 |
| `decision_log.md` | `00_brief/decision_log.md` | 24915 | `2320E586` | `D6EE3E7B69E90B8AF030331CC1B3B41A4B73AAB8F75B25F278860AA9DF6EA629` | 决策与状态轨迹 |
| `red_team_report.md` | `09_red_team/red_team_report.md` | 11455 | `23205068` | `73F4220FA2F8CEA16B72641BDED612ACB87E29DE6C5E1B36995791C585DB7C6D` | 合并红队与机械复核报告 |
| `red_team_revision_log.md` | `09_red_team/red_team_revision_log.md` | 6541 | `2320E78B` | `4A4E13A81D05FD72D79720FC7062E531CC28517DC4B4C15D006D90D4AAAB512C` | 修订闭环记录 |

本清单文件自身不列入上表，避免自引用哈希；它作为第 16 个根级成员进入 ZIP。ZIP 整体 SHA256 只写入同目录 companion，不回写包内文件，以避免循环依赖。

## 包结构合同

- 包内成员数必须为 `16`，唯一 basename 数必须为 `16`，根级成员数必须为 `16`。
- 唯一 XLSX 名称必须是 `slide_evidence_map.xlsx`；不得出现 `slide_evidence_map(1).xlsx`、第二份 XLSX 或旧 XLSX 快照。
- 包内不得出现 `(1)` 后缀、子目录、`.mjs`、预览 PNG、`.inspect.ndjson`、旧 ZIP、旧 companion 或 v1.0/v1.1 历史快照。
- 上表 15 个成员必须与权威路径逐项同字节、同签名、同 SHA256；包内 XLSX、权威精确名文件与本清单必须三方同哈希。
- companion 内容格式必须为：`<64 位大写 SHA256><两个空格>content_lock_v1_1a.zip`。

## 内容与工作簿合同

- Evidence Map 为 63 条唯一映射、10 页、Page 2 十对象，页分布 `5/13/8/5/5/5/5/6/5/6`。
- CSV/XLSX 逐单元格差异为 0；所有非空引用均可解析；公式错误为 0；公式缓存为 `63 / 10 / 0 / 0 / 0`。
- `sources.csv / evidence_ledger.csv / source cards` 为 `141 / 111 / 141`。
- `deck_content_review.md` 的三处定点修订已冻结：XLSX 只承载映射及摘要；Page 1 删除“许可”；World Labs 的 RTFM 与 World API 触发器分立。

## 审批边界

本清单只证明规范附件可供机械复核，不代表 Content Lock 获批。当前仍为 `content_lock_revision / awaiting_revision`；`content_lock_approved=false`、`content_lock_approval_migration_pending=true`。事实锁、Storyboard、页面落版、对象专页、Deck、PPT 与 PDF 继续冻结。

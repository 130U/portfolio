# Content Lock v1.1a 批准记录

**批准日期：** `2026-07-15`  
**批准指令：** `批准 Content Lock v1.1a`  
**状态：** `approved`  
**适用内容基线：** `Content Lock v1.1a`  
**固定页数：** `10_including_cover`  

## 批准对象

- `deck_content_review.md`
- `slide_evidence_map.csv`
- `slide_evidence_map.xlsx`
- `evidence_ledger.csv`
- 规范交付包 `content_lock_v1_1a.zip`

规范交付包 SHA256：

`FD333842A2EA94818DBD6FAE3DF3C3B615CE98B3F03EEC60B95748E0C0964C20`

四份内容冻结文件 SHA256：

| 文件 | SHA256 |
|---|---|
| `08_content/deck_content_review.md` | `7D794E1DEC6E9FC2FA3085892C6719B5778C7127CE424EB431543992659C4211` |
| `08_content/slide_evidence_map.csv` | `06074FF97F4CA54CA82F0DCD912789CE8A858137EC2ECF13C96F7AA9C49B2F25` |
| `08_content/slide_evidence_map.xlsx` | `50384D8780CE1B365957BC3FDF28E9DC5BF9E70B44A4228E2A55C237475B3443` |
| `04_evidence/evidence_ledger.csv` | `A60F4BCAFF9B6A0EDD6FA32C4BD2D814477E8EB24BF3835D7D19F040245C02EA` |

## 批准时原子迁移结果（历史）

- `content_lock_approved=true`
- `content_lock_approved_date=2026-07-15`
- `content_lock_approval_migration_pending=false`
- `open_blockers=[]`
- `phase=deck_production_ready`
- `status=running`
- `content_locked_page_count=10`
- `deck_page_cap=10_including_cover`
- `fact_lock_started=true`
- `fact_lock_completed=true`
- `content_lock_change_requires_reapproval=true`
- `locked_until_content_lock=[]`

## 不随批准自动启动的工作

批准只解除 Storyboard、对象专页、页面视觉落版、Deck、PPT 与 PDF 的冻结，不等于这些工作已经开始。批准迁移完成时，相关 `started/created` 标志仍保持 `false`；只有实际开工时才能更新。

评分、加权、排名、超过 10 页、中国大陆公司作为研究节点、Manifold 作为竞争节点以及类别外路线作为独立研究节点继续永久禁止。

## 批准链机械闭环

`content_lock_v1_1a_approval_mechanical_qa.md` 已独立确认：规范 ZIP 非零且可打开，16 个 canonical 成员名称唯一，四份冻结文件逐字节匹配上述哈希，Evidence 底座为 141 条来源 / 111 条原子主张 / 141 张 source card。该复核不改变 Content Lock 批准状态或冻结哈希。

Storyboard 进入红队修订时，live `project_state.json` 可以由 `deck_production_ready` 临时迁移为 `storyboard_review / awaiting_revision`；这属于批准后的下游治理状态，不撤销 Content Lock 批准，也不修改本记录的批准时原子迁移事实。

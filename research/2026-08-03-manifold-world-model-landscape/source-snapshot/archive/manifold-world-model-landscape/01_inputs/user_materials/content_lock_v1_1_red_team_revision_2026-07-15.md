# Content Lock v1.1 红队复核意见

裁决：暂不批准原稿，提交极窄 v1.1a 后即可放行。  
严重度：`P0=0 / P1=6 / P2=5`

这版已经完成主要修正：CEO/后台语言分离、页面密度、Page 2 对象级映射、第 10 页战略收口、永久禁排名及 NVIDIA 版本问题基本关闭。

## 已确认通过

- 严格 10 页，固定五席与 4+1 不变。
- 新 CSV 确有 63 条唯一映射，页分布为 5/13/8/5/5/5/5/6/5/6。
- Page 2 有 10 条逐对象 Claim/Source 映射，无重复 ID。
- Runway 的 Pearson 0.95 已删除。
- Cosmos3-Generator 已正确改为产品版本 Release 1.0.0；官方支持范围只有 T2V/I2V，没有 action mode。
- 无评分、排名、额外席位或提前视觉制作。
- 红队按 Spreadsheets 工作簿流程实际导入了 CSV；63 行、10 页和 Page 2 十对象映射均通过结构检查。

## 必须关闭的 P1

### P1-01：第 2 页不应使用伪连续坐标轴

改成非连续三列：持久空间世界｜实时交互世界流｜动作条件物理智能组件。

纵向改称：主要任务/交付位置：内容与探索｜开发者世界/仿真基础设施｜机器人规划控制。

### P1-02：第 2 页 5/3/2 分类与批准状态漂移

统一改为：固定五席 5；观察对象 4——Genie、MIRA、Meta、Overworld；早期信号 1——AMI。Overworld 增加“地域条件”徽标。

第 9 页标题同步为：“四个观察对象与一个早期信号，只在关键证据出现时重审”。

### P1-03：Odyssey 页标题证据越界

改为：“Odyssey 已将实时世界流写入开发者接口，实际开放与稳定服务仍待证”。

### P1-04：Odyssey 的 150 秒口径可能发生语义漂移

必须以 S-ODY-011/S-ODY-014 原文确认：150 秒究竟是默认值还是硬上限；60 分钟是 connection upper bound；15 分钟是 inactive-stream disconnect。

若无法恢复原文，CEO 页面改为：“厂商文档列出单流、连接及空闲断开限制，均不构成服务等级保证。”

### P1-05：本轮上传的冻结文件不完整

重新审批时需提供真实的：

- `deck_content_review.md`
- `slide_evidence_map.csv`
- `slide_evidence_map.xlsx`
- `evidence_ledger.csv`
- Odyssey 新增 source cards

### P1-06：批准后的原子状态迁移尚未完整定义

批准 Content Lock 时须同一事务写入：

- `content_lock_approved=true`
- `content_lock_approved_date=2026-07-15`
- `content_lock_approval_migration_pending=false`
- `open_blockers=[]`
- `phase=deck_production_ready`
- `content_locked_page_count=10`
- `deck_page_cap=10_including_cover`
- `fact_lock_started=true`
- `fact_lock_completed=true`
- `content_lock_change_requires_reapproval=true`

同时写入四份冻结哈希。Storyboard/PPT 只解除冻结，所有 started 标志仍保持 false。

## 同步关闭的 P2

- Evidence Map P10-03 的“商业威胁等级升级”改成“触发商业采用及竞争关系重审”。
- QA 的“Claim、Source、Monitor/Watch 缺失数均为 0”改为“所有非空引用均可解析”；治理记录和非监测记录允许留空。
- `input_manifest` 应登记上轮用户红队输入，不能继续保持 v1.6/11 行。
- Page 9 MIRA 的“一方证明接口交付”改为“第一方证据确认实际交付组件”。
- `permanently_prohibited` 补入类别外路线不得作为独立研究节点。

## 下一步

无需重跑研究、dossier、五席选择或全部红队。只提交 Content Lock v1.1a 窄范围内容与治理补丁及正确冻结附件；修订获批前继续冻结 Storyboard、PPT 与 PDF。

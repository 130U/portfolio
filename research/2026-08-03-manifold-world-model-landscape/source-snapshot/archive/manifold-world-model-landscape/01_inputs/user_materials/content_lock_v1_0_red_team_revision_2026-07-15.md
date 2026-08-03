# Content Lock 红队合并审批意见 v1.0

裁决：暂不批准 Content Lock  
状态：`awaiting_revision`  
严重度：`P0=0 / P1=8 / P2=6`

研究范围、固定五席和证据底座无须推翻。完成一次内容架构与证据映射修订后即可重新审批，不需要重跑 Phase 3–5。

## 已经通过的部分

- 严格 10 页，第 1 页兼封面与 Executive Answer。
- 第 4–8 页恰好对应固定五席，4+1 结构未漂移。
- Manifold 只作公开比较锚点。
- 未加入中国大陆公司、类别外替代路线或额外重点对象。
- 未生成评分、加权、排名或能力序位。
- 工作簿实际包含 53 条 Evidence Map、覆盖 Page 1–10，无公式错误，也没有 Storyboard 或页面视觉对象。
- 两个附件的 SHA256 与 QA 申报一致。
- 抽查 World Labs API/条款、Runway 组件隔离与申请入口、Decart 计价和 Beta 条款，大方向成立。

## 必须关闭的 P1

### P1-01：Cosmos NIM 版本号错误

第 8 页及 P08-03 写成 Cosmos3-Generator NIM 3.0.0 GA。NVIDIA 官方截至日期前的 release notes 显示为 Cosmos3-Generator Release 1.0.0 — Initial GA release。T2V/I2V、不包含 action mode 的边界判断可以保留，但须同步修正页面、C-P3-022/C-P3-030、Ledger、source card 和 Evidence Map。

### P1-02：第 2 页没有完整证据映射

第 2 页包含 10 个对象的技术路线、外部可获得性和漏斗位置，约 30 项对象级事实；但 Evidence Map 只有三条聚合记录。必须按对象至少补 10 条“页面主张 → 原子 Claim → Source”映射，或删除无法映射的字段。

### P1-03：第 2 页不是既定的战略格局图

横轴改为“空间世界 → 实时交互世界 → latent / Physical AI components”；纵轴改为“内容与探索 → 开发者基础设施/仿真 → 机器人规划与控制”；节点只区分重点研究、持续观察、边界；叠加公开 API、申请制、自托管等获得方式。内部字段移入附件。

### P1-04：后台治理语言大量进入 CEO 可见内容

主页面可见文字与后台审计文字必须分离；Gate、Anchor、Claim ID、core watch、监测编号、cutoff、Day 0、Why not now 等不得进入 CEO 主稿。

### P1-05：当前文字密度无法直接落版

- 第 3 页由 8 行压缩为 4 行：技术证据、外部可获得性、商业采用上限、对 Manifold 的意义。
- 第 4–8 页统一为“已成立 / 未成立 / 对 Manifold 意味着什么 / 一个关键触发器”。
- 完整条款、反证和 Claim ID 下沉到证据附件。

### P1-06：第 1、3、10 页内容重复

- 第 1 页：市场发生了什么。
- 第 3 页：五个对象哪里不同。
- 第 10 页：Manifold 应该做什么。

### P1-07：第 10 页尚未形成 CEO 战略收口

锁定三个条件性无悔动作：定义标准交付单元；建立动作忠实度、持久状态、几何/碰撞、失败率、延迟和 TCO 的验证资产；锁定输入输出数据权、模型改进权、部署与再分发规则。主页面只保留五类最高价值触发器，完整 17 条信号留在附件。

### P1-08：评分排名被错误设置为 Content Lock 后可解锁

评分排名是永久硬约束。移入 `permanently_prohibited`，并永久保持 `scoring_ranking_started=false`。

## 同步关闭的 P2

- P01-02 页面文字包含许可链、SLA、TCO，但映射未覆盖全部内容；补 Claim 或收窄措辞。
- Odyssey 的 60 分钟应写成“连接上限”，并补充 15 分钟 idle timeout，不能暗示连续服务保证。
- Runway Pearson 0.95 在官方页面机器可读正文中不可直接复核；须附 source-card 截图/原始证据，否则删除具体数字。
- 第 2 页“中国公司不作为节点”改为“中国大陆公司不作为节点”。
- 批准迁移时写入 `deck_page_cap=10_including_cover`、`content_locked_page_count=10` 及四份冻结文件哈希。
- 减少中英文混排，页标题压缩为可口头读完的一行。

## 返工边界

只需提交：`deck_content_review v1.1`、`slide_evidence_map.csv/xlsx v1.1`、更新后的 Ledger/source card、`content_lock_qa v1.1`、状态治理补丁。

不需要：重选五席；改变 4+1；重跑 dossier 或全部 Deep Research；重跑全部 140 个来源；启动 Storyboard、PPT 或 PDF。

结论：暂不批准 Content Lock。关闭 8 项 P1、同步关闭 6 项 P2，并提交 Content Lock 审批包 v1.1。修订版获批前不得启动 Storyboard、页面落版、PPT 或 PDF。

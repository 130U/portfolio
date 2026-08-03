# Phase 4 非评分式横向比较 QA

**截至：** `2026-07-14`  
**执行日期：** `2026-07-15`  
**状态：** `pass_revalidated_after_independent_red_team_revision`  
**结果：** `P0=0 / P1=0 / P2=0`

## 1. 结构检查

- `competitive_matrix.csv`：5 行、26 个统一字段、5 个唯一 `object_id`，严格对应 CP2 已批准固定五席。
- `monitoring_matrix.csv`：17 行、17 个唯一 `monitor_id`；对象分布为 World Labs 4、Odyssey 3、Runway 3、Decart 3、NVIDIA Cosmos 3 4，即 `4/3/3/3/4`。
- `watch_only_monitoring.csv`：5 行、5 个唯一 `watch_id`，分别覆盖 Genie 3、MIRA、Overworld、Meta V-JEPA family 与 AMI；所有触发器均明确不占席、不会自动替换固定五席。
- `evidence_ledger.csv`：111 条唯一原子主张；Content Lock v1.0 前新增 C-P3-035 承载 Decart 采用证据上限，v1.1 新增 C-P3-036 承载 Odyssey 15 分钟空闲断开规则；111 条主来源元数据与 registry 保持 `0 mismatch`。
- 三张 CSV 均可由标准 CSV parser 解析，列数一致、无重复主键。
- competitive matrix、monitoring matrix 与 watch-only 表中的 source ID 和 claim ID 均可解析到 `sources.csv` 与 `evidence_ledger.csv`，缺失数为 0。

## 2. 方法检查

- 没有数值评分、总分、加权分、序位或公司强弱排名；对象顺序仅沿用批准 ID。
- 技术证据、外部可获得性与商业采用阶段分开记录，不压缩成综合成熟度。
- 所有 Gate 3 结论均为相对于 Manifold 公开锚点的条件性判断，不证明现实客户、预算或交付位置已经重合。
- Decart 仅保留批准的 `potential_product_substitution + potential_platform_substitution`；没有追加未来市场竞争机制。
- Runway Gate 2 仅由 GWM Worlds 闭合；GWM Robotics 为相关分支，不向 Worlds 借出访问、成熟度或采用证据。
- Cosmos Gate 2 仅由 forward dynamics 闭合；policy 与 inverse dynamics 为相关动作组件，不独立借出技术资格或成熟度。
- 不可比的 FPS、持续时长、相关系数、成功率、榜单位次与视觉质量均排除出性能排名。

## 3. 内容检查

- World Labs 与 Odyssey 的数据训练权已对称传播至 source card、Evidence Ledger、dossier、competitive matrix 与 cross-comparison；Decart 的 Beta 数据使用边界保持独立呈现。
- Cosmos 的历史 vLLM-Omni PR #4102 只记录 policy/forward 子集；截至 cutoff，固定 revision 的厂商材料已文档化 policy、forward dynamics 与 inverse dynamics 的自托管在线路径，但未独立执行，也不等于稳定版本化 action runtime、action NIM、企业 SLA 或生产验证。
- NIM for Cosmos WFM 3.0.0 文档快照中的 Cosmos3-Generator Release 1.0.0 初始 GA 产品面仅限 T2V/I2V，不向动作组件借出 NIM 状态。
- Cosmos 外部采用已拆分：Agile Robots 仅为伙伴侧自报的 action-core early access、测试、集成与内部 neural-simulator deployment；Centific 与 Ailytics 仅为相邻项目生态线索。
- Runway 入口统一表述为“公开申请制 early-access 产品与应用入口，实际访问未独立确认”。
- Runway Robotics 只保留单一 Franka tabletop 域的公司自评相对策略排序描述；因本地未保留可独立复核的原始截图或机器可读证据，删除精确相关系数。
- Odyssey 官方 Markdown 已重开：当前默认单流上限为 150 秒，当前默认单连接上限为 60 分钟，无活动流 15 分钟自动断开；三项均不外推为永久硬上限、连续服务或服务等级保证。
- 商业采用上限均按证据实际支持层级记录；没有对象被升级为客户侧可审计的付费生产采用。
- 17 个固定五席监测阈值和 5 个 watch-only 触发器均要求可审计事件；价格页、申请表、供应商发布、合作公告、伙伴自报或免费 credits 不单独触发商业采用升级或换席。

## 4. 工作簿验证

- `phase_4_comparison_review.xlsx` 由 canonical CSV 派生，仅作复核界面，不是独立事实源，也不是 Deck 页面。
- 工作簿含 3 张表：`Competitive Matrix`（6×26）、`Monitoring Matrix`（18×12）、`Method & QA`（27×8）。
- `Method & QA` 的公式与缓存值已核验：fixed-five rows=`5`、monitoring signals=`17`、两项检查均为 `PASS`。
- 三张表均已重新渲染并进行视觉检查；17 条监测信号的最后两行已纳入动态样式范围，标题、表头、换行、冻结区与交替底色可读，无公式错误或不可见数据。
- 竞争矩阵因 26 列天然较宽，采用冻结前四列和换行布局；该宽度是审计表特性，不构成 Deck 视觉方案。

## 5. 冻结边界

本 QA 只确认 Phase 4 可进入独立 Red Team 收口。Storyboard、最终页面内容/视觉落版、事实锁定、对象专页、PPT 与 PDF 均未启动；Content Lock 必须在独立 Red Team 发现关闭并提交文字内容与证据映射后，由用户明确批准。

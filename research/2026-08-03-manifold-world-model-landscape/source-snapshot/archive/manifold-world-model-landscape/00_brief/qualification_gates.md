# 三门准入与晋级规则 v1.1a（检查点 2 v1.0a 条件性解释）

基线状态：`approved_checkpoint_1`（批准日期 `2026-07-15`）  
截至：`2026-07-14`  
用途：统一发现、核心集合与最终五席的判定边界；本文件不对任何对象预选、评分或分配席位。

## 门 1：发现/验证队列准入门

对象只要达到可审计的发现阈值，即可进入“资格验证/隔离队列”：

1. 有具名公司或具名大厂具体项目，或有公司第一方世界模型定位；
2. 至少存在一条可重开的来源线索，显示其可能涉及环境状态演化、动作/控制/持续交互或空间行动任务；
3. 尚未被确认属于 VLA、机器人基础模型、仿真/合成数据平台、纯视频、纯 3D 或垂直内部组件等硬排除类别。

进入队列不代表通过技术门。以下对象可进入，但必须显式标记：

- `self_positioned_only`：只有公司定位，没有具体技术资产；
- `evidence_pending`：关键来源或组件边界尚未恢复；
- `technical_qualification_challenged`：已出现相反证据或技术门至少一项未闭合；
- `geography_pending`：总部、主要经营主体或法律主体不足以完成非中国资格判断；
- `geography_conditional`：已有足够一手证据支持暂留非中国研究范围，但正式总部、法律连续性或主要实体仍未完全闭合；可继续晋级审议，但最终占席前必须关闭地域资格。

检查点 1 时，AMI Labs 曾因缺技术资产与地域证据处于 `self_positioned_only + technical_qualification_challenged + geography_pending`，World Labs 曾因导航状态证据待核处于 `technical_qualification_challenged`。Phase 2 已取代这两个历史对象状态：AMI 的法国地域已闭合，但仍因无具体技术资产留在 `discovery_isolation_self_positioned`；World Labs 已按导航定义通过门 2，并以 `conditional_pass_against_public_anchor` 进入 `core_collection`。这些对象处置不改变本门对未来新增对象的通用定义。

## 门 2：技术资格门

对象只有同时满足以下三项，才可从隔离层进入 `technical_qualified`：

1. **状态演化**：模型学习或预测环境状态及其随时间的演化；
2. **动作、控制或持续交互**：动作、控制或持续交互必须对模型所表示的后续状态产生可审计、时间一致的条件性影响。对具身导航或空间行动任务，agent、机器人、ego 或相机位姿及其可达性、碰撞约束和持续记忆可以计入状态；仅对静态场景施加外生相机轨迹，只改变像素或视角且不产生持久状态、几何约束或动作条件未来分支的，不足以通过本门；
3. **任务适用性**：面向物理、具身、实时仿真或空间行动任务。

三项能力必须归属于同一合格对象或明确、不可分割的项目 core；不得借用 VLA、policy、simulator、数据平台、访问层或母公司相邻资产拼接补齐。公司或作者自报只能支持“其这样主张”，不能替代独立验证。

## 门 3：核心集合战略关系门

进入 `technical_qualified` 后，对象还须至少满足以下一种与 Manifold 的实质战略关系，才可进入 `core_collection`：

1. **产品替代**：能够替代 Manifold 面向同一客户任务的产品或交付；
2. **平台替代**：客户可通过其平台现实地绕开独立供应商；
3. **有证据的未来市场竞争**：有公开产品路线、客户/伙伴行动或其他可审计证据支持 12–24 个月内进入相同地域、客户任务或产品位置；招聘或融资不能单独证明本项，必须直接支持上述具体进入路径；
4. **强直接能力对标**：处于同一或可比评测体系，或存在具名人才、投资人等强直接重叠证据；仅有技术相似、宽泛赛道标签或无具体竞争路径的资源相似不够。

检查点 2 v1.0a 对门 3 增加以下强制解释层：

- 门 3 仅依据 Manifold 公开锚点判断。Day 0 尚缺实际买方、标准交付形态、商业阶段与未来路线，因此产品替代和平台替代只能登记为 `Analyst inference / conditional`，不证明双方已经争夺同一客户、预算或商业交付位置。
- 一般通过状态统一为 `conditional_pass_against_public_anchor`；只有路径明显受限但仍形成可审计绕行机制时，使用 `pass_limited_against_public_anchor`。
- 机制枚举统一使用 `potential_product_substitution`、`potential_platform_substitution`、`potential_partial_product_substitution`、`potential_limited_platform_substitution`、`evidence_backed_future_market_competition` 与 `comparable_capability_relation`。这些标签均为相对公开锚点的分析判断。
- Gate 3 的条件性不会削弱门 2 的绝对技术判据，也不会把 API、checkpoint、合作或融资自动提升为客户、付费、生产或收入证据。

`geography_pending` 对象不得进入 `core_collection`。其他具有条件性地域结论的对象可在核心集合内保留条件标记，但必须在最终占席前关闭非中国地域资格。

最终五席固定为 `3–4 家非中国创业公司 + 1–2 个非中国大厂具体世界模型项目`。Manifold 只作比较锚点，不占席。最终五席从 `core_collection` 中按照战略优先级、证据成熟度、组合互补性和固定席位结构选择；这是组合选择，不是第四道技术资格门。

## 全队列统一验证问题

每个对象都必须回答，不能只对 World Labs 提问：

1. 动作、控制或持续交互是否对模型所表示的后续状态产生可审计、时间一致的条件性影响？对具身导航或空间行动任务，是否体现持续的 agent/机器人/ego/相机位姿状态、可达性、碰撞约束、持续记忆或动作条件未来分支；还是仅对静态场景施加外生相机轨迹，只改变像素或视角？
2. 状态变化是否在时间上持续，并体现 agent、对象或场景的可追踪性与一致约束？
3. 哪些能力来自 core，哪些来自 adapter、policy、API、产品原型、仿真器或其他相邻组件？
4. 物理、具身、实时仿真或空间行动任务的证据属于公司自报、第一方 artifact、独立复现中的哪一层？
5. 权重、代码、API、SDK、容器和许可证分别属于哪个版本或组件？
6. 总部、主要经营/法律主体及非中国范围资格是否有逐对象一手证据？
7. 相对于 Manifold 公开锚点，属于 `potential_product_substitution`、`potential_platform_substitution`、`evidence_backed_future_market_competition` 还是 `comparable_capability_relation`，证据是什么；是否误把条件性分析写成客户、预算或交付已经重合；招聘或融资是否直接支持进入相同地域、客户任务或产品位置？

## 状态迁移约束

- `qualification_validation_isolation_queue` → `technical_qualified`：须通过门 2，并保留原始来源、反证与组件归属。
- `technical_qualified` → `core_collection`：须通过门 3；`geography_pending` 不得迁移至此。
- `pass_limited_against_public_anchor` 可进入 `core_collection` 的观察子层；该子层属于核心集合统计，但不自动获得推荐席。
- `core_collection` → 最终五席选择：按照战略优先级、证据成熟度、组合互补性和固定席位结构作组合决策；其他条件性地域结论须在占席前关闭。这一步不是第四道技术资格门，也不产生额外资格门状态。
- 任一硬排除类别被确认：移至边界/丢弃，不得占席或获专页。
- 新证据只触发重新审议，不自动升级层级。

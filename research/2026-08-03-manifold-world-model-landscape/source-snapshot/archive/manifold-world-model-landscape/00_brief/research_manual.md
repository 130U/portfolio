# 研究手册

## 分析单位

创业公司按公司级分析；大厂按具体项目/模型/平台级分析。研究项目、访问层、关联工具链、VLA、仿真与垂直内部组件必须拆分，不能借名或借成熟度。

## 三门体系

- 发现/验证队列允许 `self_positioned_only`、`evidence_pending`、`technical_qualification_challenged`、`geography_pending` 和 `geography_conditional` 对象进入，但必须显式标记；进入队列不代表技术合格。
- 门 2 是技术资格门：对象必须同时满足状态演化、动作/控制/持续交互、物理/具身/实时仿真/空间行动三项技术判据，方可进入 `technical_qualified`。导航中的持续 agent/ego/相机位姿、可达性、碰撞约束与持续记忆可以计入状态；仅对静态场景施加外生相机轨迹且无持久状态、几何约束或动作条件未来分支的不足。
- 门 3 是核心集合战略关系门：`technical_qualified` 对象至少满足产品替代、平台替代、有证据的未来市场竞争或强直接能力对标之一，方可进入 `core_collection`；`geography_pending` 不得进入核心集合。检查点 2 起，门 3 只相对于 Manifold 公开锚点判断；产品/平台替代统一标为 `Analyst inference / conditional`，不证明当前客户、预算或商业交付已经重合。一般通过使用 `conditional_pass_against_public_anchor`，受限但可审计的平台绕行使用 `pass_limited_against_public_anchor`。
- 最终五席从核心集合中按战略优先级、证据成熟度、组合互补性与固定席位结构选择，不是第四道技术资格门；其他条件性地域结论必须在占席前关闭。

完整定义以 [三门准入与晋级规则](qualification_gates.md) 为准。

## 证据标签

- `Fact`：原始页面直接证明的存在、日期、文本或事件。
- `Company-reported`：公司、作者或项目方报告的能力、指标或进展。
- `Independent evidence`：客户侧、公共登记、独立复现或可信独立证据。
- `Analyst inference`：基于已列证据的推断。

Gate 3 的 `potential_*_substitution` 与 `evidence_backed_future_market_competition` 均属于 `Analyst inference`；必须与客户、PoC、付费、生产部署和收入事实分栏记录。

## 三维成熟度

技术证据、外部可获得性和商业采用必须分别记录；项目族按组件记录，不合并取最高值。

## 来源恢复

每条决策承载型主张必须绑定 canonical URL、标题、发布者、日期、访问日期、版本或 commit、支持位置、支持片段/转述、限制与重开状态。`turnXX`、搜索结果 ID、搜索摘要和 AI 综述不得入账。

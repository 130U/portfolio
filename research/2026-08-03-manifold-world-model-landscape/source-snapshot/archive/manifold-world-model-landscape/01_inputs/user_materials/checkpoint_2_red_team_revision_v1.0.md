# 检查点 2 红队审批意见 v1.0

日期：2026-07-15  
对象：检查点 2 推荐包 v1.0  
裁决：`awaiting_revision`  
严重度：`P0=0 / P1=4 / P2=3`

## 一、总体结论

暂不原样批准，但不需要重跑 Phase 2，也不要求更换五个推荐对象。保留 World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3；`4 家创业公司 + 1 个大厂项目` 可以成立，不应机械改为 `3+2`。事实层面没有发现要求换席的重大错误，当前问题是条件性竞争关系、Meta V-JEPA 漏斗判定、CP2 放行范围和状态控制。

## 二、必须修改的 P1

### P1-01：Gate 3 改为相对于公开锚点的条件性判断

Day 0 仍缺 Manifold 的实际买方、标准交付形态、商业阶段和未来路线。统一增加：

> Gate 3 仅依据 Manifold 公开锚点进行判断。产品替代和平台替代属于 Analyst inference / conditional，不证明当前客户、预算或商业交付已经重合。

五个推荐对象的机制改为：

- World Labs：`potential_platform_substitution + evidence_backed_future_market_competition`；暂删确定性的产品替代。
- Odyssey：`potential_product_substitution + potential_platform_substitution + evidence_backed_future_market_competition`。
- Runway：`evidence_backed_future_market_competition + potential_product_substitution + potential_platform_substitution`。
- Decart：`potential_product_substitution + potential_platform_substitution`；基于公开 API，但仍是相对 Manifold 的分析判断。
- Cosmos 3：`potential_platform_substitution + evidence_backed_future_market_competition + potential_partial_product_substitution`。

统一 Gate 3 状态：`conditional_pass_against_public_anchor`。这不影响五对象推荐。

### P1-02：重新判定 Meta V-JEPA family 的 Gate 3

改为：

- `gate_3_status = pass_limited_against_public_anchor`
- `mechanism = potential_limited_platform_substitution`
- `funnel_state = core_collection_watch_not_recommended`

保留限制：仅 V-JEPA 2-AC 通过门 2；Franka/DROID 窄域；checkpoint 许可逐项闭合；不因此获得重点席位。漏斗统计改为 `9 core_collection/core_watch + 0 adjacent + 1 isolation`。

### P1-03：收紧检查点 2 放行范围

CP2 获批后只解锁：五对象 dossier、技术/产品/商业证据刷新、横向比较、独立 Red Team。十页蓝图只作结构约束。最终页面内容落版、事实锁定和视觉制作必须按以下顺序：

`Dossier → Cross-comparison → Red Team → Content Lock → Deck production`

### P1-04：修正项目状态文件

当前 `awaiting_user` 与空 blocker 冲突。应登记：

```json
"open_blockers": [
  "explicit_user_checkpoint_2_approval_required"
]
```

只有用户批准后才设置 `approved_checkpoint=2`、`checkpoint_2_status=approved`、`final_five_selected=true`。

## 三、P2 修改

### P2-01：增加非评分式九对象决策表

对九个核心/核心观察对象统一展示：战略机制、技术证据成熟度、外部可获得性、商业采用阶段、独特页面价值及与其他对象的重叠、地域状态、选择或未选择的决定性理由。不得计算总分或生成伪排名。明确 Runway 与 Genie 3 的取舍：Runway 代表外部产品入口和创意平台向世界模型迁移；Genie 3 代表闭源前沿能力和 Alphabet 内部适配。

### P2-02：Runway dossier 强制拆分两个组件

后续 dossier 至少分栏处理 `GWM Worlds` 与 `GWM Robotics`。Robotics 包含机器人动作条件 rollout 和申请制 Python SDK，属于直接相关世界模型资产；两者的能力和访问状态不得互借。

### P2-03：统一外部采用措辞

- World Labs Escape：供应商托管 PoC，不是付费或生产部署。
- Agile Robots：伙伴公司自报的 early access、测试、集成及内部 neural-simulator deployment；不得简称为 validated pilot、付费客户或生产采用。
- Decart 独立 hands-on：产品体验和反证，不是系统验证或商业采用。

## 四、最终名单裁决

- 保留 World Labs、Odyssey、Runway、Decart、Cosmos 3：是。
- 强制改为 `3+2`：否。
- 用 Genie 3 替换 Runway：可作为用户偏好选项，但不是红队要求。
- 用 MIRA 或 Overworld 替换创业公司：否。
- 重跑 Phase 2：否。

## 五、直接指令

提交《检查点 2 v1.0a 控制补丁》，同步关闭以上 P1/P2，不生成评分或排名。完成后重新提交窄范围差异 QA；不得启动 dossier 或 PPT。

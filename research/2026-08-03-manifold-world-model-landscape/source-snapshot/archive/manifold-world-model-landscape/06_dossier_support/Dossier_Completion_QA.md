# Phase 3 dossier 与证据刷新完成 QA

**截至：** `2026-07-14`  
**执行日期：** `2026-07-15`  
**适用基线：** `CP2 推荐包 v1.0 as amended by v1.0a`  
**最终裁决：** `P0=0 / P1=0 / P2=0 — pass`

## 1. 审批边界

本 QA 只放行五份 dossier、证据刷新及其进入非评分式横向比较的输入质量。它不批准评分排名、对象专页、Storyboard、页面内容或视觉落版、事实锁定、PPT 或 PDF。固定五席与 `4+1` 结构沿用 CP2 已批准基线，不在本阶段重开。

## 2. 产物范围

- 五份 dossier：World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3。
- `Dossier_Query_Audit.csv`：58 条查询，全部具有唯一 ID。
- `sources.csv` 与来源卡：140 条 registry 记录，140 张来源卡，零缺失。
- `evidence_ledger.csv`：101 条唯一主张；所有 primary source ID、cross-evidence source ID 和 dossier/query source ID 均可解析。
- 全部 101 条 ledger 主来源的 source type、标题、发布者、URL、日期与版本已和 registry 逐字段规范化，最终 `0 mismatch`。

> **独立 Red Team 与 Content Lock 后续变更：** Phase 3 关闭时的 140 个来源、101 条主张为历史快照。为修复复合 claim-source fit，Red Team 将 World Labs Escape/Lightwheel、Odyssey 合同/AWS、Cosmos NIM 状态/支持模态和 action-core/相邻伙伴生态拆为原子主张，并补入两项数据权及 current action-serving claim；Content Lock v1.0 前补入 Decart adoption-ceiling 原子主张 C-P3-035；v1.1 又重开 Odyssey Session Management，新增 S-ODY-014 与 C-P3-036。当前为 141 个来源、111 条主张，元数据仍须保持 `0 mismatch`。

## 3. 查询与反证预算

| 对象 | 总查询 | 反证查询 | 反证比例 | 结果 |
|---|---:|---:|---:|---|
| O-001 World Labs | 9 | 4 | 44.44% | pass |
| O-002 Odyssey | 9 | 5 | 55.56% | pass |
| O-003 Runway | 12 | 6 | 50.00% | pass |
| O-004 Decart | 12 | 6 | 50.00% | pass |
| O-005 NVIDIA Cosmos 3 | 16 | 9 | 56.25% | pass |

五对象均高于 30% 的预设反证查询下限。

## 4. QA 轮次与关闭记录

### 4.1 Pilot 校准

- 初检：`P0=0 / P1=6 / P2=4`。
- 主要问题：12 项 schema、query/ledger 闭环、Gate 3 双边锚点、World API 服务与输出权利、Cosmos action runtime/NIM/许可/伙伴采用分层、动态版本快照。
- 修正：补齐 World Labs 与 Cosmos 来源卡、主张与查询；拆分 RTFM/Marble/API、模型材料/runtime/NIM/伙伴采用；重开 vLLM-Omni PR #4102，确认其于 2026-06-03 合并 policy 与 forward-dynamics serving，并在该时点把 online inverse dynamics 留作后续；将 NIM GA 严格限制在 T2V/I2V 产品面。独立 Red Team 后续又恢复了截至 cutoff 的固定 NVIDIA revision，确认 policy/forward/inverse 均已有厂商文档化在线路径，但仍非独立执行、stable runtime 或 action NIM。
- 复核：`P0=0 / P1=0 / P2=0`。

### 4.2 五 dossier 商业采用与访问成熟度审计

- 初检：`P0=0 / P1=2 / P2=4`。
- 主要问题：Odyssey API/SDK 可获得性写得过实；Escape 与 Lightwheel 的供应商托管证据类型混合；Marble 的 GA 暗示；Runway negotiated access；Cosmos 伙伴侧自报摘要。
- 修正：Odyssey 改为 vendor-documented hosted prototype API，区分公共 JavaScript npm artifact 与文档中的 Python integration path，并将采用主状态设为 `Not established`；Escape 与 Lightwheel 分拆；World Labs 改为 publicly available/priced；Runway 改为 negotiated route；Cosmos 显式保留 partner-side self-report。
- 定点复核剩余元数据风险：`P0=0 / P1=0 / P2=2`。
- 末次修正：`S-WL-007/011` 改为 vendor-hosted 类型；`C-P3-025/026` 的 `independent_cross_evidence` 归零，第一方上下文移入限制字段。
- 最终复核：`P0=0 / P1=0 / P2=0`。

### 4.3 五 dossier 全量治理 QA

- 初检：`P0=0 / P1=6 / P2=5`。
- 主要问题：NVIDIA query audit 的旧 `in review` 状态、三份 Gate 3 双边来源映射、Runway 组件借证、跨对象排序措辞、未登记 Build/Technology Access 权利判断、状态与计数待迁移，以及历史 ledger 元数据与 Waymo 重复 canonical URL。
- 修正：更新 Q-NV-005/009；为 Odyssey/Runway/Decart 增加候选侧与 S-MAN-002/003/004 双边映射；严格拆分 GWM family/Worlds/Robotics/Characters；删除“最接近/最明确”，保留用户已批准的 Cosmos 限定唯一性事实并明确“不构成 Phase 3 排名”；删除未登记托管端点权利主张并记为 `not audited`；补 Decart `not publicly disclosed`；全 ledger 机械规范化；将 S-GD-006 标为 S-BND-002 的跨对象 alias，禁止作为独立交叉证据。
- 最终复核：`P0=0 / P1=0 / P2=0`。

## 5. 结构与边界结果

- 五份 dossier 均有严格的 12 个编号章节；Cosmos 的大厂追加字段独立于 12 项主体。
- Runway Worlds 与 Robotics 全程分栏，Characters 与创意平台采用不借证。
- Odyssey Pro/Max/Starchild/Agora、World Labs RTFM/Marble/API、Decart hosted model/thin client/其他组件、Cosmos model/runtime/NIM/伙伴/关联栈均保持证据隔离。
- 没有 demo、preview、申请入口、价格、合作、伙伴内部部署或 customer beta 被升级为 validated system、付费客户、外部生产部署或收入。
- VLA、机器人基础模型、仿真/合成数据、纯视频、纯 3D 与垂直内部组件未入池、占席或获得 dossier。
- 未生成总分、排名、专页、Storyboard、页面落版、PPT 或 PDF。

## 6. 放行结论

Phase 3 dossier 与证据刷新通过 QA，可按既定顺序启动非评分式横向比较。下一阶段只能生成竞争矩阵、监测矩阵及其研究叙事；独立 Red Team 需在横向比较完成后单独启动，Content Lock 获批前继续冻结所有 Deck/PPT 工作。

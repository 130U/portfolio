# 检查点 2 QA v1.0

状态：`historical_v1.0_snapshot; superseded_by_v1.0a_diff_QA`  
研究截至：`2026-07-14`  
控制基线：`检查点 1 审批包 v1.1 + 检查点 1 v1.1a 规则补丁`

> 本文件保留检查点 2 v1.0 提交时的 QA 快照。用户随后以 `P0=0 / P1=4 / P2=3` 裁定 `awaiting_revision`；当前裁决与修订结果以 [`checkpoint_2_v1_0a_qa_diff.md`](checkpoint_2_v1_0a_qa_diff.md) 为准。

## 1. 审批与冻结边界

- `approved_checkpoint=1`，批准日期为 `2026-07-15`。
- CP2 文件只提交推荐，不把五对象称为已批准最终五席。
- 当前未创建 dossier、评分排名、公司/项目专页或 PPT。
- CP2 状态必须在 QA 完成后转为 `awaiting_user`；只有用户明确批准才能解除冻结。

## 2. 固定席位与范围

- 推荐数：`5`。
- 结构：`4 家创业公司 + 1 个大厂具体项目`。
- 创业公司：World Labs、Odyssey、Runway、Decart。
- 大厂项目：NVIDIA Cosmos 3。
- 五个推荐对象在 `phase_2_candidate_validation.csv` 与 `eligibility_register.csv` 中均为 `core_collection`。
- Manifold 只作锚点，不占席。
- 推荐名单中没有 VLA、机器人基础模型、仿真/合成数据平台、纯视频、纯 3D 或垂直内部组件。
- Decart 的当前公开 action space 虽为驾驶优先，但 Oasis 3 是面向外部开发者的独立世界模型 API，不是服务自家垂直系统的内部组件；该判断与其可靠性反证同时保留。

## 3. 状态迁移与门规则

- 当前 10 对象状态：`8 core_collection + 1 adjacent + 1 discovery_isolation_self_positioned`。
- 推荐路径符合 `qualification_validation_isolation_queue → technical_qualified → core_collection → 固定五对象组合选择`。
- World Labs 与 Overworld 均按 v1.1a 导航定义审理：持久相机/ego 状态、空间记忆、rolling history 和动作条件未来可以计入；未要求物体级变化。
- Meta 只允许 2-AC 通过门 2；base 与 2.1 不借用动作 predictor。由于门 3 未闭合，Meta 留在 `adjacent`。
- AMI 的法国地域资格已关闭，但没有具体技术资产，门 2 未通过，仍在 self-positioned isolation。
- Overworld 通过门 2/3 进入核心集合，但法律主体仍是条件项；本轮不推荐且明确阻止其占席。

## 4. 地域 QA

- 10 个对象均有逐对象地域审计记录。
- Decart：状态为 `non_china_verified_for_scope_hq_label_unresolved`。条款与经营足迹只指向美国/以色列；足以完成本研究的非中国范围判断，但禁止写精确总部或注册辖区。
- AMI：法国政府登记确认 Advanced Machine Intelligence SAS、SIREN 994675254 与 Paris 总部；`geography_pending` 已关闭。
- Overworld：Providence 经营线索保留，但法律主体/注册地未恢复；状态继续为条件性非中国，不占推荐位。
- 大厂项目的地域只在 parent-owner 层级判断，不声称内部项目独立法律主体。

## 5. 组件、版本与采用层级 QA

- World Labs：RTFM 技术 core 与 Marble / World API 商业层分开；Marble PoC 不提升 RTFM access。
- Odyssey：Pro、Max、Starchild-1、Agora-1 分开；Pro API 不提升 Max 可获得性。
- Runway：只以 GWM Worlds 过门 2；GWM Robotics 与 Characters 不借证。
- Decart：Oasis 3 与 DOS、Lucy 分开；Lucy 的开发者数量不记入 Oasis adoption。
- Cosmos 3：Generator core 与 NIM、Isaac、GR00T、Omniverse 分开；Agile Robots 记录为具名外部集成/内部 pilot，不写付费客户生产。
- Genie：Genie 3、Project Genie、Waymo World Model 分开；Waymo 只证明 Alphabet 内部适配路径，不回流候选池。
- Meta：V-JEPA 2 base、2-AC、2.1 分开；代码许可不外推至所有 checkpoint。
- General Intuition：MIRA 与 broader agent/robot demos 分开；匿名客户报道不证明交付组件、paid pilot 或 production。
- Overworld：模型、World Engine、Biome、较大模型和训练数据许可分别归属。
- 所有对象均区分技术证据、外部可获得性和商业采用；API 可付费不等于 revenue evidence。

## 6. 数据完整性 QA

本地结构化检查结果：

- `sources.csv`：109 行；无重复 `source_id`；109 张来源卡均存在。
- `evidence_ledger.csv`：74 条 claim；无重复 `claim_id`；主 source 与 cross-evidence source 均能解析。
- `phase_2_candidate_validation.csv`：10 个对象；无重复对象；固定推荐正好 5 个。
- `geography_audit.csv`：10 个对象；全部 source ID 可解析。
- `eligibility_register.csv`：24 行，保留 DR-02 原始 23 项审计并新增 O-024。
- `company_universe.csv`：10 个 Phase 2 对象，状态分布为 8/1/1。
- CP2 推荐包中引用的 27 个 source ID 与 11 个 Phase 2 claim ID 均能解析。
- `project_state.json` 可解析。

完整性检查结论：`pass`。

## 7. 独立红队

第一轮独立红队裁决为 `P0=0 / P1=2 / P2=2`，全部属于控制面或文字一致性：

- P1-01：`project_state.json`、版本/计数、`next_action` 与决策日志尚未随 CP2 提交更新；已改为 `checkpoint_2 / awaiting_user`，登记 109 个来源、74 条主张、10 个验证对象和 5 个推荐对象，并保持所有后续制作标志为 false。
- P1-02：红队读取时 `checkpoint_2_qa.md` 尚未落盘；本文件现已存在并被推荐包正确引用。
- P2-01：Overworld 地域字段曾使用描述性自定义值；现已统一为规范枚举 `geography_conditional`，法律实体/注册地未恢复保留在说明字段。
- P2-02：Cosmos 出现“在五对象中最强”的序位措辞；已改为事实型的公开权重、代码、self-hosted recipe 与外部集成机制描述。

第二轮快速治理红队在上述结构文件上返回 `P0=0 / P1=0 / P2=0`，确认 4+1 结构、核心集合来源、地域边界、禁止类别、冻结项和“推荐而非最终五席”均一致。

最终独立只读复核再次返回 `P0=0 / P1=0 / P2=0`：首轮 2 项 P1 与 2 项 P2 均已关闭；状态文件、决策日志、QA 文件、Overworld 地域枚举与 Cosmos 非序位措辞均复核通过。该结论仅表示 CP2 推荐包可提交等待审批，不构成检查点 2 获批。

## 8. 当前 QA 裁决

`pass`。检查点 2 推荐包可提交，项目状态转为 `awaiting_user`。用户明确批准前继续冻结最终五席确认、dossier、评分排名、公司/项目专页和 PPT。

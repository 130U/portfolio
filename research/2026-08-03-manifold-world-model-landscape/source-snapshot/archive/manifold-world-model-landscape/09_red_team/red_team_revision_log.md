# 独立 Red Team 修订记录

**用户最新状态：** `awaiting_revision / P0=0 / P1=2 / P2=4`  
**机械修订后内部残余：** `P0=0 / P1=0 / P2=0`  
**审批状态：** `awaiting_user_mechanical_recheck_not_approved`

| ID | 初始严重度 | 发现 | 定点修订 | 复验结果 |
|---|---|---|---|---|
| RT-01 | P1 | Cosmos 历史 PR 被用于描述当前全部在线能力 | 保留 PR #4102 的历史子集；新增固定 revision 的 policy/forward/inverse 厂商文档事实，并隔离 stable runtime、action NIM、SLA 与生产验证 | closed |
| RT-02 | P1/P2 | 复合主张与来源版本固定不足 | Ledger 原子化至 109 条；固定 S-NV-002/004/009/017 与 S-ODY-013；主来源元数据归一化 | closed；109/109，0 mismatch |
| RT-03 | P1 | World Labs 与 Odyssey 数据训练权未进入横向比较 | 新增 C-P3-027/028，并贯穿 source card、dossier、competitive matrix 与 cross-comparison | closed |
| RT-04 | P1 | Cosmos action-core 采用与相邻 Reasoner/视频生态混合 | Agile Robots 单列 action-core；Centific/Ailytics 单列 adjacent ecosystem；商业采用上限不升级 | closed |
| RT-05 | P1 | Decart 追加未批准机制；Runway/Cosmos 组件借出 Gate 2 | Decart 仅保留产品/平台两机制；Runway 仅 Worlds、Cosmos 仅 forward dynamics 闭合 Gate 2 | closed |
| RT-06 | P2 | Gate 3 条件性、入口与比较级措辞不一致 | 全部改为 against public anchor 的条件性判断；统一 early-access、公开计价/PAYG 与非排名措辞 | closed |
| RT-07 | P1/P2 | 监测阈值复合、watch-only 缺失且 AMI 沿用历史地域 pending | 拆为 17 条固定五席信号与 5 条非占席触发器；AMI 改用 C-P2-019 的地域已闭合口径 | closed |
| RT-08 | P1/P2 | Phase 4 QA、project state、decision log 与工作簿仍保留 15/101 旧计数 | 统一为 109 claims、17 signals、5 watch-only；工作簿公式缓存改为 5/17/PASS/PASS，样式范围动态化 | closed |
| RT-09 | P2 | 商业反证查询与 Ledger 行映射互换或不完整 | C-P3-025/031→Q-WL-005+008；C-P3-026→Q-ODY-008；C-P3-032→Q-ODY-004 | closed |
| RT-10 | P1 | Decart 缺少独立的商业采用上限原子主张 | 新增 C-P3-035，以 Q-DEC-010 承载“priced supply＋独立体验，但未恢复客户侧采用证据”，并传播至 dossier、监测矩阵、Page 1/3/10 与 evidence map | closed；Ledger 110 条 |
| RT-11 | P1/P2 | Content Lock 标题、任务/JTBD、平台链、采用/许可与页面映射存在条件性或覆盖缺口 | 统一条件性措辞，补齐 Page 3 与 Page 10 的 Claim/Source 映射，将 evidence map 扩展并验证为 53 条、10 页、0 断链 | closed |
| RT-12 | P1 | 最终传播仍残留旧 Decart Claim、Cosmos TCO 确定性措辞及两处绝对化负向结论 | Page 1 改用 C-P3-035；Cosmos runtime/许可/TCO 改为仍需核验；Page 9/10 与 P10-02 统一为截至 cutoff 未恢复到证据 | closed；三路最终 P0/P1/P2=0 |
| RT-13 | P1/P2 | 用户对 Content Lock v1.0 合并裁决为 P1=8/P2=6 | 保持固定五席与 Phase 3–5 不变，只重构 CEO 内容、Evidence Map、必要 Ledger/source card 与状态治理 | closed；无范围重开 |
| RT-14 | P1 | 将文档快照 3.0.0 误写为 Cosmos3-Generator 产品版本 | 全链统一为 docs 3.0.0 snapshot / Cosmos3-Generator Release 1.0.0 initial GA；T2V/I2V 与动作组件隔离 | closed；技术线 0/0/0 |
| RT-15 | P1 | Page 2 只有聚合映射且仍可被理解为筛选表；v1.1 又使用伪连续坐标与错误 5/3/2 状态 | 增加十对象原子映射；v1.1a 改为三列离散世界形态、三类离散交付位置与 5/4/1 节点状态，Overworld 叠加地域条件徽标 | closed；Page 2=13 rows，object rows=10 |
| RT-16 | P1/P2 | CEO 主稿混入后台语言、密度过高且 Page 1/3/10 重复 | Page 3 四行、Page 4–8 四字段、Page 10 三动作五触发；后台编号和完整条款下沉 | closed；CEO 内容线 0/0/0 |
| RT-17 | P2 | Odyssey 时限语义与连续服务混淆；Runway 精确数字无法本地复核 | 重开 S-ODY-011/014 官方 Markdown，统一为当前默认单流上限 150 秒、当前默认单连接上限 60 分钟、无活动流 15 分钟断开；删除 Runway 精确相关系数 | closed；运营配置不再外推为永久硬上限或 SLA |
| RT-18 | P1/P2 | v1.1 需重建 Evidence Map、工作簿和永久禁令状态 | 141/111/63/10 全量校验；工作簿导入后 CSV/XLSX 差异 0；scoring_ranking 与类别外独立节点进入 permanently_prohibited | closed；映射治理线 0/0/0 |
| RT-19 | P1/P2 | 用户对 Content Lock v1.1 复核为 P1=6/P2=5：离散分类、5/4/1、Odyssey 标题/时限、冻结附件与批准迁移仍未闭合 | 提交 v1.1a 窄补丁；Page 2/Page 5/Page 9、P10-03、MIRA、manifest、禁令与原子迁移合同全部定点修正 | closed；不重开五席、Phase 3–5 或研究结论 |
| RT-20 | P1 | 冻结附件曾出现 CSV 重复上传、XLSX/Markdown/Ledger 旧快照，无法独立验证 | 从权威路径重新打包；逐文件记录字节数、SHA256 与签名；XLSX 重新导入验证 63/10/10/0/0 | closed；任一哈希漂移即 fail closed |
| RT-21 | P2 | 工作簿可见 QA 标签仍写“Missing IDs”，可能误解为治理/非监测空字段也必须填充 | 改为“未解析的非空 Claim / Source / Monitor/Watch 引用”，重建 XLSX、重新导入并冻结新哈希 | closed；非空引用未解析数 0，合法空字段保留 |
| RT-22 | P1 | v1.1a 冻结包缺少 Ledger 与治理附件，且精确名 XLSX 与 `(1)` 文件身份冲突 | 以单一 ZIP 收齐 16 个根级 canonical 文件名；包内只保留精确名 `slide_evidence_map.xlsx`，不单独提交 XLSX | internally closed；等待用户机械复核 |
| RT-23 | P2 | 缺少规范 ZIP/companion，XLSX 载体措辞越界，Page 1 “许可”无映射，World Labs 两组件触发器重新粘合 | 生成 `content_lock_v1_1a.zip` 与 `.zip.sha256`；修订三处 CEO 文案并同步 `P04-05`，重建 CSV/XLSX | internally closed；63/10/10、单元差异 0、公式错误 0，等待用户机械复核 |

## 不受修订影响的控制项

- 固定五席：World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3；
- 结构：4 家创业公司＋1 个大厂具体项目；
- 唯一有效基线：`CP2 推荐包 v1.0 as amended by v1.0a`；
- Manifold 仅作公开比较锚点；
- 评分、加权与排名为永久禁令；
- Content Lock 前不启动 Storyboard、页面视觉落版、对象专页生产、PPT 或 PDF。

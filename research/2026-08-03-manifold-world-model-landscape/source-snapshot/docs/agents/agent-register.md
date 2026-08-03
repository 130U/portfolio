# Agent 登记

## 总体结构

原始会话包含 33 次子 Agent 创建请求，其中 30 个实际启动、3 个没有产生启动事件。主 Agent 负责 canonical 文件、状态迁移和结果合并；子 Agent 主要承担来源恢复、范围审计、独立红队和版式验证。

完整机器可读登记见 GitHub 仓库中的 [`provenance/agent_register.csv`](https://github.com/Madarame87/manifold-world-model-research/blob/main/provenance/agent_register.csv)。

## 输入、范围和检查点 1

| Agent 任务 | 职责 |
|---|---|
| `dr01_anchor_audit` | 审计 Manifold 锚点、榜单、测速和归属线索 |
| `dr02_universe_audit` | 审计非中国发现池、漏斗和地域问题 |
| `dr03_bigtech_audit` | 提取大厂具体项目，分流垂直/组件路线 |
| `cp1_adversarial_review` | 对检查点 1 首稿做独立攻击 |
| `overworld_source_recovery` | 恢复 Overworld 技术和地域线索 |
| `vjepa21_refresh` | 处理 V-JEPA 2.1 版本漂移 |
| `manifold_aux_assets` | 登记 RoboScape、AirScape、Worldscape-MoE |
| `cp1_v11_adversarial_review` | 复核 CP1 v1.1 |
| `v11a_rule_propagation_audit` | 检查三门和状态迁移传播 |
| `v11a_source_precision` | 检查导航状态和来源措辞精度 |
| `v11a_adversarial_review` | 最终 CP1 v1.1a 红队 |

## Phase 2 与检查点 2

| Agent 任务 | 职责 |
|---|---|
| `phase2_startups_a` | 核验第一组创业公司候选 |
| `phase2_startups_b` | 核验第二组创业公司及后续补充任务 |
| `cp2_fast_governance_audit` | CP2 规则、漏斗、状态和推荐包复核 |

`phase2_bigtech` 被创建但未启动；大厂核验任务由其他活跃 Agent 和主 Agent 接管。

## Phase 5 独立 Red Team

| Agent 任务 | 职责 |
|---|---|
| `rt_technical_sources` | 技术、版本、来源和评测边界 |
| `rt_commercial_access` | 访问、定价、采用、许可和数据权 |

`rt_scope_narrative` 被创建但未启动；范围叙事复核由现有红队和主 Agent 完成。

## Content Lock

| Agent 任务 | 职责 |
|---|---|
| `cl11_nim_source_fix` | 修正 Cosmos3-Generator/NIM 版本和支持范围 |
| `cl11_ceo_architecture` | 重构十页内容架构和 CEO 可见语言 |
| `cl11_mapping_governance` | Evidence Map、XLSX 和状态治理 |
| `cl11a_final_content_audit` | v1.1a 内容复核 |
| `cl11a_final_evidence_audit` | 来源、Ledger 和映射复核 |
| `cl11a_final_governance_audit` | 状态迁移和冻结合同复核 |
| `cl11a2_identity_audit` | 文件身份、命名和哈希复核 |
| `cl11a2_content_diff_audit` | 窄补丁内容差异复核 |

`cl11a2_package_governance_audit` 被创建但未启动。

## Storyboard

| Agent 任务 | 职责 |
|---|---|
| `approval_chain_audit` | Content Lock 批准链机械闭环 |
| `font_repro_audit` | 中文字体、哈希和 PowerPoint 复现 |
| `storyboard_redline` | Storyboard 内容和布局红线 |
| `storyboard_v11_content_redteam` | 锁定内容、标题和组件隔离 |
| `storyboard_v11_layout_redteam` | 灰盒、换行、溢出和尺寸预算 |
| `storyboard_v11_governance_redteam` | 状态、哈希和制作放行条件 |

## 审计限制

Evidence Ledger 的 `owner_agent` 统一为 `main`，因此它证明主 Agent 是 canonical editor，但不能单独显示每条 Claim 最初由哪个子 Agent 发现。任务级 provenance 需要结合本登记和原始会话事件理解。

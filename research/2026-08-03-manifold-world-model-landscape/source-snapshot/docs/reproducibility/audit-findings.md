# 技术审计发现

## 已确认通过

- 检查点 1、检查点 2 和 Content Lock 均存在明确用户批准；
- Content Lock 四份冻结文件当前哈希与批准记录一致；
- 规范 ZIP 可打开，16 个根级成员名称唯一；
- 141 个来源、141 张来源卡和 111 条 Claim 一致；
- 63 条 Evidence Map 覆盖 10 页，无非空引用断链；
- Phase 4 CSV/XLSX 单元格差异 0；
- 最终 PPTX v1.4 字节数和 SHA256 与状态、QA、Manifest 一致；
- PowerPoint 实机渲染 10/10，文本框违规 0。

## 发现的治理漂移

- 原 `README.md` 和 `plan.md` 停留在 PPT 未启动阶段；
- 原 `decision_log.md` 记录至视觉 v1.1，没有登记 v1.2–v1.4；
- `project_state.json` 才是最终最新状态；
- 原 input manifest 没有登记全部后期视觉反馈；
- 项目缺少可用 Git 历史。

## 发现的工程缺口

- 最终 v1.4 生成器原本只存在于临时目录；
- 生成器包含绝对路径，无法跨机器直接运行；
- 项目目录没有保存结构化 Agent 任务清单；
- Ledger 的 owner 统一为 main，缺少 Claim→发现 Agent 映射；
- 原始来源主要保存为来源卡，未普遍保存不可变 HTML/PDF 快照；
- PDF 实际未生成。

## 本仓库的修复

- 完整归档原工作区；
- 恢复最终 Deck 的生成代码；
- 增加 Agent、工具和会话 provenance；
- 增加 Storyline、方法、决策理由和可视化图；
- 增加 Git 版本控制和自动文档构建；
- 增加机械审计和文件清单脚本。

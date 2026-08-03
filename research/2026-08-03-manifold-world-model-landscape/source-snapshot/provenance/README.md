# Provenance

本目录保存从原始 Codex 会话中提取的、适合进入研究仓库的结构化运行信息。

未直接提交完整原始 JSONL，原因包括：

- 文件超过 80 MB；
- 同一长期会话后续还包含本仓库创建任务；
- 可能包含系统指令、工具内部数据和与研究复现无关的信息；
- GitHub 仓库不应成为隐藏思维链或敏感运行数据的发布渠道。

当前保存：

- `agent_register.csv`：33 个创建请求及 30 个实际启动事件；
- `session_summary.json`：截至项目完成时的会话规模；
- `tool_usage_summary.md`：工具和协作调用统计；
- `file_manifest.csv`：仓库文件、字节数和 SHA256，可由审计脚本重建。


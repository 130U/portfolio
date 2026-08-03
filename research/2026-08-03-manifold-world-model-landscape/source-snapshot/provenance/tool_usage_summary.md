# 工具使用摘要

统计截止至最终 v1.4 项目状态收口。

| 工具/事件 | 数量 | 主要用途 |
|---|---:|---|
| `exec` | 1,612 | 编排本地、网络、文件和生成工具 |
| `wait` | 149 | 等待长时间工作簿、渲染或工具完成 |
| `spawn_agent` | 33 | 创建专项研究和红队任务 |
| 实际启动 Agent | 30 | 产生 `sub_agent_activity.started` |
| `followup_task` | 90 | 复用既有 Agent 做补充复核 |
| `send_message` | 54 | 向活跃 Agent补充边界或证据 |
| `wait_agent` | 146 | 等待子 Agent结果 |
| `interrupt_agent` | 2 | 停止不再合适的执行方向 |
| Web 搜索完成 | 102 | 搜索并重新打开原始来源 |
| Patch 事件 | 461 | 主项目及派生产物的定点修订 |
| 上下文压缩 | 22 | 长会话上下文管理 |

## 技术执行面

- PowerShell：目录、CSV、哈希、ZIP、PowerPoint COM、OOXML 检查；
- Node.js＋`@oai/artifact-tool`：XLSX 和 PPTX 构建；
- Microsoft PowerPoint 16：最终 1280×720 逐页渲染；
- Python：部分缩略图/contact sheet 辅助；
- GitHub CLI：本 Research Repository 的创建和发布。


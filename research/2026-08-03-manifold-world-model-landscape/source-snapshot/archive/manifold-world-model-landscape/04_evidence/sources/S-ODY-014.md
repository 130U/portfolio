# S-ODY-014 — Session Management
- 发布者/更新/访问：Odyssey；2026-04-10；2026-07-14；live docs snapshot。
- URL：https://documentation.api.odyssey.ml/session-management
- 机器可读原文：https://documentation.api.odyssey.ml/session-management.md
- 原始支持：连接后若连续 15 分钟没有 active stream，会被服务器自动断开；该空闲超时与单流时长上限分开。
- 类型：公司第一方 API 运营文档。
- 复核：Content Lock v1.1a 定点重开官方 Markdown，确认规则仅适用于“已连接但没有 active stream”的 15 分钟空闲情形。
- 限制：15 分钟是空闲会话清理规则，不是连续生成时长、服务等级承诺或独立可靠性验证；配置可能随服务版本变化。

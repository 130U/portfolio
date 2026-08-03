# S-ODY-011 — Stream Duration Limits
- 发布者/访问：Odyssey；2026-07-14。
- URL：https://documentation.api.odyssey.ml/stream-duration-limits
- 机器可读原文：https://documentation.api.odyssey.ml/stream-duration-limits.md
- 原始支持：官方 Markdown 的限制表以 `Default` 为列名，列出 `Per-stream 150 seconds` 与 `Per-connection 60 minutes`；正文将前者说明为从 `startStream` 到 `endStream` 的单流最大生命周期，将后者说明为从 `connect` 到 `disconnect` 的单连接最大生命周期；达到连接限制后需重新连接。更长体验需要重启或双会话衔接，并可能出现约 1–2 秒间隙。
- 类型：公司第一方 API 运营文档。
- 复核：Content Lock v1.1a 定点重开官方 Markdown，确认 `Default`、单流生命周期与单连接生命周期的字段归属。
- 限制：准确口径是截至研究日的“当前默认单流上限 150 秒、当前默认单连接上限 60 分钟”；不外推为所有账户、合同或未来版本永久不变的硬上限，也不能把连接时长等同于无缝生成时长、服务等级或可靠性验证。

# 公开发布审计

- **审计日期：** 2026-07-18
- **对象：** 当前公开发布树
- **结论：** 已完成脱敏与公开发布检查；当前公开树可发布

## 发布边界

- 研究事实、技术判断与商业采用上限均来自公开来源；
- 流程架构、三份 Deep Research 的问题拆分、资格规则、检查点和证据治理由研究设计者组织完成；
- 未使用或提交公司提供的内部文件、客户信息、商业秘密或内部沟通；
- 原始完整 Codex 会话、系统提示和无关任务不进入仓库。

## 已执行的脱敏

- 将输入清单中的本机下载路径替换为 `<LOCAL_INPUT_DIR>`；
- 将生成脚本中的本机输出目录改为相对路径和环境变量；
- 将工作簿脚本中的本机依赖路径改为包名导入；
- 将 PowerPoint QA 记录中的工作区路径替换为 `<LOCAL_WORKSPACE>`；
- 自动检查公开文本中的机器绝对路径、私人联系邮箱、凭据特征、乱码和不可移植引用。

## 历史冻结包处理

两个历史派生 ZIP 包包含机器本地路径元数据，但不包含独有研究内容。公开树不发布其字节文件；16 个 canonical 成员文件仍分别保存在仓库中，原始 ZIP 的名称、字节数和 SHA256 继续保留在冻结清单、批准记录及 companion 文件中：

- `content_lock_v1_1a.zip`：`FD333842A2EA94818DBD6FAE3DF3C3B615CE98B3F03EEC60B95748E0C0964C20`；
- `content_lock_v1_1a_frozen_attachments.zip`：`AADD886787576407EECAF419D6DAE231BF17A4D517203661F078E8696A59D12A`。

这项公开发布处理只移除机器路径和冗余打包字节，不修改固定五席、来源登记、Evidence Ledger、Evidence Map、Content Lock 结论或最终 PPT。

## 自动检查

运行：

```powershell
powershell -ExecutionPolicy Bypass -File scripts/audit/verify_repository.ps1
```

该检查同时覆盖阅读文本、公开边界声明、Dossier 目录结构、来源与 Claim 数量、历史 ZIP 哈希记录以及最终 PPT 哈希。

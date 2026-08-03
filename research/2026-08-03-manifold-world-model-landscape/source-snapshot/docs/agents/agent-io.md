# Agent 输入、输出与汇总

## 来源恢复类

**输入：** DR 文档、待恢复问题、对象 ID、截止日期和硬范围。  
**输出：** 原始 URL、版本、支持内容、冲突、未决问题和是否允许进入 Evidence Ledger。  
**汇总：** 主 Agent写入 `sources.csv`、来源卡、资格表和来源恢复队列。

## 候选验证类

**输入：** 三门规则、十对象列表、组件表、地域要求和 Manifold 锚点。  
**输出：** Gate 2/3 判断、访问方式、采用上限、组件边界和反证。  
**汇总：** 主 Agent写入 Phase 2 验证表、九对象决策表和 CP2 推荐包。

## Red Team 类

**输入：** 当前冻结快照、Evidence Ledger、Dossier、矩阵和状态文件。  
**输出：** P0/P1/P2、具体文件/Claim、风险和关闭条件。  
**汇总：** 主 Agent做定点修订，再由红队对新快照复验。

## Content Lock 类

**输入：** 十页文字稿、Evidence Map、Ledger、来源卡和批准迁移合同。  
**输出：** 页面越界、证据映射缺口、版本错误、文件身份冲突和状态问题。  
**汇总：** 重建 CSV/XLSX、规范 ZIP、冻结哈希和批准记录。

## Storyboard 类

**输入：** 已批准 Content Lock、字体环境、十页结构和视觉合同。  
**输出：** 换行点、版式预算、灰盒风险、字体回退和制作边界。  
**汇总：** Storyboard v1.1、字体预检、灰盒 QA 和 Deck production 放行。

## 为什么不保存隐藏思维链

可审计研究应保存能被第三方检验的内容：问题、假设、依据、反证、选择理由和状态迁移。模型隐藏的逐 token 内部思维并不能被可靠复现，也可能包含系统信息。因此本仓库用 Research Log、Decision Rationale、Evidence Ledger 和 Agent I/O 记录替代。


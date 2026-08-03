# Final Deck v1.1 QA

日期：2026-07-15  
结论：PASS  
严重度：P0=0 / P1=0 / P2=0

## 交付身份

- 当前交付：`10_deck/manifold_world_model_landscape_v1_1.pptx`
- 历史快照：`10_deck/manifold_world_model_landscape_v1_0.pptx`，保持不变
- 字节数：63,043
- SHA256：`FF3480C15CFDD2ABF81EB7826E36D1619EC528B0794FD2A6C8C9B1245900E588`
- 页数：10，含封面功能
- 交付范围：PPTX only；PDF 未启动且不构成 blocker

## 本轮视觉重构

- 全稿统一为暖白底、低饱和陶土 / 鼠尾草绿 / 灰紫强调、浅色分区和轻分隔线。
- Page 1 将 Executive Answer 设为唯一视觉主角，直接给出三类交付方式与商业证据上限。
- Page 2 重构为三种离散世界形态 × 三类任务 / 交付位置；每个对象节点直接标出获得方式，并区分固定五席、观察对象与早期信号。
- Page 3 与 Page 9 保留研究型表格结构，只优化表头层级、行距、对齐和轻边界。
- Page 4–8 保持统一四段分析框架，但使用不同的页面轮廓；组件、访问方式、证据上限与关键触发器保持隔离。
- Page 10 将三项行动置于主层级，五类重审证据置于次级监测层。

## PowerPoint 实机 QA

- 渲染器：Microsoft PowerPoint 16 COM export。
- 画布：960×540 pt，16:9；逐页导出 1280×720。
- 页面：10/10；渲染：10/10。
- 文本框：249；字体或边界违规：0。
- 字体：Noto Serif SC（标题）与 Noto Sans SC（正文）；OOXML 中未出现 DejaVu Sans。
- 正文最低 16 pt；说明性标签最低 14 pt；页脚最低 10 pt。
- 未发现文本裁切、重叠、自动缩字或字体回退。

## 永久约束复核

- 固定五席和 `4+1` 不变；Page 4–8 恰好对应 World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3。
- Page 2 保留 `5/4/1`、十对象、Overworld 地域条件及 AMI 图外早期信号。
- Manifold 只作公开比较锚点；未成为竞争节点。
- 无评分、总分、加权、能力序位或隐性排名。
- 无中国大陆公司或类别外路线作为研究节点、席位或专页。
- `RTFM 与 World API 分立`、`Worlds ≠ Robotics`、`Generator NIM ≠ action runtime` 继续可见。
- Odyssey 的 150 秒、60 分钟与 15 分钟运营限制未写成服务等级保证。

最终裁决：v1.1 可以作为当前 PPTX 交付版本。

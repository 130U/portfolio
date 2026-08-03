# Final Deck v1.4 QA

日期：2026-07-15  
结论：PASS  
严重度：P0=0 / P1=0 / P2=0

## 交付身份

- 当前交付：`10_deck/manifold_world_model_landscape_v1_4.pptx`
- v1.0–v1.3 均作为历史快照保留，未覆盖
- 字节数：62,779
- SHA256：`B61FE7FBB66CD1B7F7C926CF254CF4F32ED6B7E5A94C1B488648A2FFABAB02E9`
- 页数：10，含封面功能
- 交付范围：PPTX only；PDF 未启动且不构成 blocker

## 本轮窄范围调整

- Page 1、2 未修改；PowerPoint 渲染 SHA256 与 v1.3 对应页面完全一致。
- Page 10 标题改为单行：`Manifold 先完成三项底座建设，再用五类证据触发重审`。标题、副标题与行动区之间重新建立纵向留白。
- Page 4–8 两行主标题采用更松的行距，并适度缩小字级；主标题与路线说明之间的间距增加。
- Page 3、9 仅拉开主标题与副标题间距，表格内容与研究结论不变。

## PowerPoint 实机 QA

- 渲染器：Microsoft PowerPoint 16 COM export。
- 画布：960×540 pt，16:9；逐页导出 1280×720。
- 页面：10/10；渲染：10/10。
- 文本框：252；字体、字号、边界或溢出违规：0。
- 字体：Noto Serif SC 与 Noto Sans SC；OOXML 未出现 DejaVu Sans。

## 人工视觉 QA

- 已逐页在 100% 尺寸检查标题、正文、脚注、日期与页码；10/10 无出界、缺字、拥挤或生硬断行。
- 已重点复核 Page 10 及所有两行标题页 Page 4–8：标题行距、主副标题间距和标题至正文的过渡均自然。
- 已用 5×2 缩略图复核全稿：Page 10 先读到三项行动，再读到五类触发器，收口层级明确。

## 永久约束复核

- 研究内容、固定五席、`4+1`、`5/4/1` 与十页结构均未改变。
- Manifold 只作公开比较锚点；无评分、排名、中国大陆公司节点或类别外独立研究节点。
- `RTFM 与 World API 分立`、`Worlds ≠ Robotics`、`Generator NIM ≠ action runtime` 继续可见。

最终裁决：v1.4 达到 PPTX 提交标准。

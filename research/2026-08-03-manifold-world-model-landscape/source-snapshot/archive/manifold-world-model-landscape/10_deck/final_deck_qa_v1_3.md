# Final Deck v1.3 QA

日期：2026-07-15  
结论：PASS  
严重度：P0=0 / P1=0 / P2=0

## 交付身份

- 当前交付：`10_deck/manifold_world_model_landscape_v1_3.pptx`
- v1.0、v1.1、v1.2 均作为历史快照保留，未覆盖
- 字节数：62,712
- SHA256：`16D70510440E71F49435718363DD477122F13E65D44CAB347F50CC8A570FBA5E`
- 页数：10，含封面功能
- 交付范围：PPTX only；PDF 未启动且不构成 blocker

## 第三轮结构性版式整改

- Page 1：底部三栏使用明确语义换行、相同内边距和节奏；右上信息、日期和页码均保留安全边距。
- Page 2：重建为真正四列表格。第一列完整承载三类任务／交付位置，后三列对应持久空间世界、实时交互世界流、动作条件物理智能组件。公司名与获得方式／限制分为两层，每家公司独立成条。
- Page 4–8：整体缩小标题和模块字级，按实际文字长度重新分配模块高度与宽度；正文左对齐，卡片内边距和模块间距增加。
- Page 3、9、10：保留既定信息结构，继续以轻分隔、宽松行距和层级字重完成视觉精修。

## PowerPoint 实机 QA

- 渲染器：Microsoft PowerPoint 16 COM export。
- 画布：960×540 pt，16:9；逐页导出 1280×720。
- 页面：10/10；渲染：10/10。
- 文本框：252；字体、字号、边界或溢出违规：0。
- 字体：Noto Serif SC（标题）与 Noto Sans SC（正文）；OOXML 未出现 DejaVu Sans。

## 人工视觉 QA

- 已逐页以最终 1280×720 渲染在 100% 尺寸检查：标题、正文、脚注、日期和页码均未出界，无缺字、拥挤、生硬断行或模块失衡。
- 已特别复核 Page 1 底部三栏、Page 2 完整四列表格、Page 4–8 全部对象页，以及 NVIDIA Cosmos 3、Runway 等长名称与说明。
- 已用 5×2 缩略图复核整套叙事节奏：Page 1 的结论、Page 2 的格局结构、Page 10 的三项行动均保持第一视觉层级。
- Page 4–8 分析框架一致，但使用不同空间比例，未机械套用同一构图。

## 永久约束复核

- 固定五席与 `4+1` 不变；Page 4–8 恰好对应 World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3。
- Page 2 保留 `5/4/1`、Overworld 地域条件与 AMI 早期信号。
- Manifold 只作公开比较锚点；无评分、排名、中国大陆公司节点或类别外独立研究节点。
- `RTFM 与 World API 分立`、`Worlds ≠ Robotics`、`Generator NIM ≠ action runtime` 继续可见。

最终裁决：v1.3 达到 PPTX 提交标准。

# Final Deck v1.2 QA

日期：2026-07-15  
结论：PASS  
严重度：P0=0 / P1=0 / P2=0

## 交付身份

- 当前交付：`10_deck/manifold_world_model_landscape_v1_2.pptx`
- 历史快照：v1.0 与 v1.1 均保持不变
- 字节数：62,375
- SHA256：`915BFF73F72D93F525D18FA81E314C224181617436B4C8C2F17134A3315EF5FF`
- 页数：10，含封面功能
- 交付范围：PPTX only；PDF 未启动且不构成 blocker

## 本轮人工排版整改

- Page 1：重设右侧安全边距、页脚位置和三块结论模块的内边距；Executive Answer 保持唯一主视觉。
- Page 2：重新分配三列与三行空间；对象名为第一层、获得方式为第二层；固定五席、四个观察对象和一个早期信号可快速区分。
- Page 3 / 9：保留研究表结构，增大行高与单元格内边距，删除重纵线，使用浅底色和关键词层级提高扫描性。
- Page 4–8：按照实际文字长度使用不同空间比例；标题、路线、正文和触发器均留出独立节奏，不再压入同一固定模板。
- Page 10：三项行动保持主层级，五类未来证据保持次级监测层。

## PowerPoint 实机 QA

- 渲染器：Microsoft PowerPoint 16 COM export。
- 画布：960×540 pt，16:9；逐页导出 1280×720。
- 页面：10/10；渲染：10/10。
- 文本框：250；字体、字号、边界或溢出违规：0。
- 字体：Noto Serif SC（标题）与 Noto Sans SC（正文）；OOXML 中未出现 DejaVu Sans。
- 正文最低 16 pt；说明性标签最低 14 pt；页脚最低 10 pt。

## 人工视觉 QA

- 已逐页以最终 1280×720 渲染进行 100% 检查：标题、正文、页脚与页码均未出界；未见拥挤、缺字、生硬断行或模块失衡。
- 已以 5×2 缩略图检查整套节奏：Page 1、2、10 的视觉重点明确；五个对象页面框架一致但构图不机械重复；Page 3 与 Page 9 明确呈现为研究型比较表。
- Page 7 的标题缺字与底部触发器越界已在实渲复核中关闭。
- Page 2 的辅助文字已提升至可读字号，节点与行分隔线不再碰撞。

## 永久约束复核

- 固定五席与 `4+1` 不变；Page 4–8 恰好对应 World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3。
- Page 2 保留 `5/4/1`、Overworld 地域条件与 AMI 早期信号。
- Manifold 只作公开比较锚点；无评分、排名、中国大陆公司节点或类别外独立研究节点。
- `RTFM 与 World API 分立`、`Worlds ≠ Robotics`、`Generator NIM ≠ action runtime` 继续可见。

最终裁决：v1.2 达到 PPTX 提交标准。

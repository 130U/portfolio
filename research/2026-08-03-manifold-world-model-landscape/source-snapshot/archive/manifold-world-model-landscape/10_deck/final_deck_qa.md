# Final Deck QA

日期：2026-07-15  
结论：PASS  
严重度：P0=0 / P1=0 / P2=0

## 交付身份

- PPTX：`10_deck/manifold_world_model_landscape_v1_0.pptx`
- 字节数：57,360
- SHA256：`9C2476537C247117AAF87B0FF9CED17C6920006EBC1CEE81F6CDD99A5B4A5B44`
- 页数：10，含封面功能
- 交付范围：PPTX only；PDF 未启动且不构成 blocker

## 基线完整性

- Content Lock v1.1a 四份冻结文件：4/4 哈希匹配。
- Storyboard v1.1 十份冻结文件：10/10 哈希匹配。
- Content Lock 标题：10/10 逐字匹配。
- P3 4 个维度 × 6 列：24/24 单元匹配，五对象列等宽。

## PowerPoint 实机 QA

- 渲染器：Microsoft PowerPoint 16 COM export。
- 画布：960×540 pt，16:9；逐页导出 1280×720。
- 页面：10/10；渲染：10/10。
- 文本框：189；字体或边界违规：0。
- 字体：Noto Sans SC；OOXML 中未出现 DejaVu Sans。
- 正文最低 16 pt；页脚最低 10 pt。
- 未发现裁切、重叠、自动缩字、未授权标题换行或字体回退。

## 独立红队

| 路线 | P0 | P1 | P2 | 结论 |
|---|---:|---:|---:|---|
| 内容锁与证据上限 | 0 | 0 | 0 | 放行 |
| 视觉落版与可读性 | 0 | 0 | 0 | 放行 |
| 治理、身份与状态 | 0 | 0 | 0 | 放行 |

## 永久约束复核

- 固定五席与 4+1 生效；P4–P8 恰好对应 World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3。
- P2 保留 5/4/1、十对象、Overworld 地域条件和 AMI 图外早期信号。
- Manifold 只作公开比较锚点；未作为竞争节点。
- 无评分、总分、加权、能力序位或隐性排名。
- 无中国大陆公司或类别外路线作为研究节点、席位或专页。
- `RTFM 与 World API 分立`、`Worlds ≠ Robotics`、`Generator NIM ≠ action runtime` 均保持可见。
- Odyssey 的 150 秒、60 分钟与 15 分钟限制未写成服务等级保证。

最终裁决：可以交付 canonical PPTX。

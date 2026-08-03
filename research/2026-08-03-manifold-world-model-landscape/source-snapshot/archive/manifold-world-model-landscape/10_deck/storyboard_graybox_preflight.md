# Storyboard v1.1 高密度页灰盒预检

**状态：** `pass`  
**执行日期：** `2026-07-15`  
**渲染器：** Microsoft PowerPoint 16 COM export  
**画布：** `1280×720`  
**字体：** `Noto Sans SC`  
**用途：** 验证 P1、P2、P10 的锁定换行、最低字号和纵向预算；本文件及灰盒图不是最终 Deck。

## 机械结果

- 实际创建并测量 37 个文本框；
- `failed_text_box_count=0`；
- 所有正文文本框均为 16 pt 或更大，脚注为 10 pt；
- PowerPoint 返回的 Latin / Far East 字体均为 `Noto Sans SC`；
- slide XML 含 `Noto Sans SC`，不含 `DejaVu Sans`；
- 三页均由 PowerPoint 直接导出为 1280×720 PNG，并完成全尺寸视觉检查；
- P1 三行识别区、三类路径标签，P2 Runway Robotics / Cosmos 3 规划控制次级标签及 AMI Labs“自有技术资产与入口待核”，以及 P10 三项动作与五类触发器均进入实际灰盒；
- 无文字溢出、遮挡、意外自动换行、脚注裁切或字体回退。

## 结果文件

| 文件 | 字节数 | SHA256 |
|---|---:|---|
| `qa_assets/storyboard_graybox_result.json` | 22,957 | `47B36D2B3A3ADECD1C229825D0BB3C761A808A685F1CE85C1B1E182BC5C03A7A` |
| `qa_assets/graybox_p1.png` | 57,375 | `195234DEAF7FB1AC3E2A12E99D1FE518BFC3D5F9E33BCAB3455EF41CBC8BA411` |
| `qa_assets/graybox_p2.png` | 54,536 | `385315C86457107DEB454BBD2FE86BE69F6959D7A55CBD50B1A154F52A95B087` |
| `qa_assets/graybox_p10.png` | 54,474 | `AE94780EFD39D91B8C47C68B53834A76CF69E68E8E788A119AA9257C9C1FDBFF` |

## 定点修正轨迹

独立版式初检发现 P1、P2、P10 的首版坐标预算不足；第一次修正后又发现灰盒没有完整纳入 P1 路径标签及 P2 次级组件标签。随后只调整纵向区间、语义换行和 P2 状态/图例/徽标/脚注分行；最后将 `Runway Robotics：⏎规划控制（次级）` 锁定为语义换行，并为该格保留 4 px 纵向余量。全过程没有修改锁定标题、事实、对象、数字、证据上限或页数。最终 PowerPoint 实测为 `37/37 fit`。

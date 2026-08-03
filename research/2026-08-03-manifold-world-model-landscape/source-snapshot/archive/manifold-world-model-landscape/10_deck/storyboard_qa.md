# Storyboard v1.1 QA

**内容基线：** `Content Lock v1.1a approved`  
**执行日期：** `2026-07-15`  
**本轮用户红队初检：** `P0=0 / P1=3 / P2=5`  
**定点修正后：** `P0=0 / P1=0 / P2=0`  
**状态：** `pass`  
**PPT / PDF：** 未启动

## P1 关闭记录

### P1-01｜Content Lock 批准链

- 规范批准包 `content_lock_v1_1a.zip`：100,817 bytes；SHA256 `FD333842A2EA94818DBD6FAE3DF3C3B615CE98B3F03EEC60B95748E0C0964C20`；
- companion：89 bytes，正文精确绑定上述哈希与 canonical 文件名；
- ZIP：16 个唯一根级成员，无旧快照、`(1)`、脚本、预览或子目录；
- 四份冻结文件逐字节匹配批准记录和 live 权威路径；
- Evidence 底座：141 sources / 111 unique claims / 141 source cards；Ledger 非截断；
- 独立机械记录：`08_content/content_lock_v1_1a_approval_mechanical_qa.md`；
- 旧 `content_lock_v1_1a_frozen_attachments.zip` 明确为非 canonical，不得用于审计。

结论：`pass`。Content Lock 批准继续有效，冻结文件与批准哈希无漂移。

### P1-02｜权威状态

修订过程已记录 `storyboard_review / awaiting_revision`；全部 P1/P2 关闭后，权威状态原子迁移为：

```text
phase=deck_production_ready
status=running
storyboard_started=true
storyboard_completed=true
storyboard_qa_completed=true
deck_production_started=false
company_project_pages_started=false
ppt_created=false
pdf_created=false
```

`project_state.json`、Storyboard、QA、README 与 decision log 的当前状态一致。结论：`pass`。

### P1-03｜中文字体可复现性

- 全稿字体改为 `Noto Sans SC`，固定文件 `C:\Windows\Fonts\NotoSansSC-VF.ttf`；
- 字体 17,773,244 bytes；SHA256 `763146584CF0710223441356B4395E279021B0806C196614377A7A0174AE074A`；
- 字体内嵌许可字段：SIL OFL 1.1；
- PowerPoint 16 已实际导出 1280×720 中文探针；50 / 35 / 16 pt 均可见；
- PowerPoint 返回的 Latin / Far East 字体名称均为 `Noto Sans SC`；slide XML 同样记录该字体；缺失字形 0；
- 禁止回退到 `DejaVu Sans`，任何文件、哈希或解析不一致均 fail closed；
- 证据：`10_deck/font_preflight.md`、`10_deck/qa_assets/font_probe_result.json` 与 `font_probe_noto_sans_sc.png`。

结论：`pass`。

## P2 关闭记录

| 审计项 | 定点修订 | 结果 |
|---|---|---|
| P1/P2/P5/P7/P10 语义换行 | Storyboard v1.1 逐页以 `⏎` 锁定标题、正文、标签、限定词和触发器断点；制作器必须转换为硬换行 | pass |
| 扩展 1280×720 灰盒门 | P1/P2/P3/P10 均登记全尺寸预算、最终字体、最小字号、脚注和 fail 条件；P1/P2/P10 已由 PowerPoint 实测 | pass |
| P1/P10 模板边界 | 明确为“参考 Codex Grid 后自定义重构”，不套用 `slide-09/17` 原始槽位 | pass |
| P4/P6/P8 开放分区 | 统一使用 0.75–1 pt 细规则，禁止连续圆角灰卡、阴影和 UI 卡片网格 | pass |
| World Labs 触发器 | Storyboard 明示“RTFM 获得独立复现，或 World API 形成版本化服务” | pass |

### 灰盒机械回归

独立版式复核先发现 P1/P2/P10 纵向预算不足，随后发现首轮灰盒未完整纳入 P1 三类路径标签及 P2 Runway Robotics、Cosmos 3 规划控制次级标签与 AMI Labs“自有”限定。完成定点修正，并将 `Runway Robotics：⏎规划控制（次级）` 锁定为语义换行后，使用 PowerPoint 16、Noto Sans SC 和 1280×720 画布实际渲染：37 个文本框全部 fit，失败数 0，slide XML 无 DejaVu，三页全尺寸视觉检查无溢出、裁切或意外换行。证据见 `10_deck/storyboard_graybox_preflight.md` 与 `qa_assets/storyboard_graybox_result.json`；最终版式复核为 `P0=0 / P1=0 / P2=0`。

## 结构与范围回归

- 严格 10 页，P1 同时承担封面与 Executive Answer；
- P4–P8 恰好对应 World Labs、Odyssey、Runway、Decart、NVIDIA Cosmos 3，固定五席和 4+1 不变；
- P2 保持 5/4/1；P9 保持四个观察对象与一个早期信号；
- Manifold 只作公开比较锚点；无中国大陆公司或类别外路线节点；
- 无评分、权重、总分、排名、能力序位或隐性优先级；
- Runway Worlds / Robotics、Cosmos action materials / Generator NIM、World Labs RTFM / World API 的组件证据继续隔离；
- `deck_production_started=false`、`ppt_created=false`、`pdf_created=false`。

## 放行结论

Storyboard v1.1 已关闭本轮 `P0=0 / P1=3 / P2=5` 的全部问题，最终为 `P0=0 / P1=0 / P2=0`。状态可迁移到 `deck_production_ready`，但本次不启动 Deck、PPT 或 PDF 制作。

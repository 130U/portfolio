# Storyboard v1.1 中文字体预检

**状态：** `pass`  
**执行日期：** `2026-07-15`  
**用途：** 关闭 Storyboard 的中文字体可复现性阻断；本文件不是最终 PPT。

## 锁定字体

| 字段 | 值 |
|---|---|
| 字体族 | `Noto Sans SC` |
| 本机文件 | `C:\Windows\Fonts\NotoSansSC-VF.ttf` |
| 字节数 | `17,773,244` |
| SHA256 | `763146584CF0710223441356B4395E279021B0806C196614377A7A0174AE074A` |
| 字重 | 仅 400 / 700 |
| 斜体 | 禁止 |
| 内嵌许可字段 | SIL Open Font License 1.1 |
| 禁止回退 | `DejaVu Sans` 及其他替代字体 |

字体内嵌许可字段允许使用、嵌入与再分发，但若把字体文件本身加入交付包，必须同时附 SIL OFL 1.1 许可证。官方许可文本：<https://github.com/googlefonts/noto-cjk/blob/main/Sans/LICENSE>。

## PowerPoint 实际渲染探针

- 渲染器：`C:\Program Files\Microsoft Office\root\Office16\POWERPNT.EXE`，Microsoft PowerPoint 16，文件版本 `16.0.20131.20126`，COM export；
- 画布：1280×720；
- 探针：`海外世界模型｜接口、运行时、部署链｜12–24 个月｜0.02 美元/秒`；
- 50 pt、35 pt 与 16 pt 三档均已渲染；
- PowerPoint 返回的 Latin / Far East 字体名称全部为 `Noto Sans SC`；
- PPTX slide XML 明确包含 `typeface="Noto Sans SC"`；
- 缺失字形：0；
- 导出图：`qa_assets/font_probe_noto_sans_sc.png`，16,729 bytes，SHA256 `0F0FC6B116BF645CF13550A1F30DC3871B67601EC81BE9DA35565AF57B3435C4`；
- 结果 JSON：`qa_assets/font_probe_result.json`。

## Fail-closed 规则

每次 Deck 生成前必须验证字体文件、SHA256 与实际解析名称；最终 PPTX 还必须确认 OOXML 含 `Noto Sans SC` 且不含 `DejaVu Sans`。任一检查失败即停止制作，不得静默回退或以缩小字号掩盖换行变化。

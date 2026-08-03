# 复现指南

## 1. 运行仓库机械审计

```powershell
powershell -ExecutionPolicy Bypass -File scripts/audit/verify_repository.ps1
```

该脚本检查：

- 原工作区文件数；
- 141 来源、141 来源卡、111 Claim；
- 63 条 Evidence Map；
- 10 页最终 PPTX；
- Content Lock 和 v1.4 PPTX SHA256；
- 关键输入和文档是否存在。

## 2. 重建文件清单

```powershell
powershell -ExecutionPolicy Bypass -File scripts/audit/build_manifest.ps1
```

输出 `provenance/file_manifest.csv`，包含相对路径、字节数、修改时间和 SHA256。

## 3. 验证 Phase 4 工作簿

进入原工作区归档：

```powershell
cd archive/manifold-world-model-landscape/07_synthesis
node verify_phase4_workbook.mjs
```

期望结果：5 个对象、17 条信号、CSV/XLSX 单元格差异 0、公式错误 0。

## 4. 验证 Slide Evidence Map

```powershell
cd archive/manifold-world-model-landscape/08_content
node verify_slide_evidence_map.mjs
```

期望结果：63 行、10 页、Page 2 十对象、未解析引用 0、CSV/XLSX 差异 0、公式错误 0。

## 5. 构建文档站

```powershell
python -m pip install -r requirements-docs.txt
mkdocs build --strict
```

## 6. PPT 复现边界

原始 PPT 生成程序依赖 Codex 打包运行时中的 `@oai/artifact-tool`，并包含原机器绝对路径。它已被归档，但不是跨机器一键可运行程序。

要实现完全复现，需要：

1. 将输入、输出和临时目录改为参数；
2. 锁定 Node 和 `@oai/artifact-tool` 版本；
3. 安装 Noto Sans SC / Noto Serif SC；
4. 使用 Microsoft PowerPoint 16 COM 完成最终实机渲染；
5. 重新执行字体、OOXML、文本边界和人工视觉 QA。

本仓库的长期维护不要求重新生成 PPT。

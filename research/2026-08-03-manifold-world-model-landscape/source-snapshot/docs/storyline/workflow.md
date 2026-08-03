# 完整工作流

```mermaid
flowchart TD
    A[治理章程与三份 DR 输入] --> B[输入审计与 SHA256 登记]
    B --> C[35 个原始来源重开问题]
    C --> D[Manifold 锚点恢复]
    C --> E[候选与地域清洗]
    C --> F[大厂项目与类别外路线分流]
    D --> G[检查点 1]
    E --> G
    F --> G
    G -->|批准| H[十对象资格与真实性验证]
    H --> I[检查点 2 推荐包]
    I -->|批准| J[固定五席 4+1]
    J --> K[五份 Dossier 与证据刷新]
    K --> L[非评分式横向比较]
    L --> M[独立 Red Team]
    M --> N[Content Lock 与 63 条证据映射]
    N -->|批准| O[Storyboard 与字体/灰盒预检]
    O --> P[PPTX v1.0-v1.4]
    P --> Q[PowerPoint COM 与人工视觉 QA]
    N --> R[本 Research Repository]
```

## 阶段退出条件

| 阶段 | 退出条件 |
|---|---|
| 输入审计 | 文件非空、名称和 SHA256 登记 |
| 来源恢复 | 决策主张有原始来源或明确 unresolved |
| 检查点 1 | 范围、三门、锚点、地域和队列获批准 |
| Phase 2 | 十对象完成技术、战略、访问和采用核验 |
| 检查点 2 | 固定五席明确批准 |
| Dossier | 支持性和反证性查询均关闭 |
| 横向比较 | 无评分排名，组件边界和证据上限一致 |
| Red Team | P0/P1/P2 全部关闭 |
| Content Lock | 10 页、63 映射、冻结哈希和审批闭环 |
| Storyboard | 字体、换行、灰盒和状态治理通过 |
| PPTX | 10 页实机渲染、机械 QA 和人工视觉 QA 通过 |

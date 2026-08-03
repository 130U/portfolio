# Portfolio 双语研究出版标准

> 版本：1.0
> 状态：目标标准（Target Standard）
> 适用范围：`articles/`、`research/`、`reflections/` 中的全部公开内容，以及由这些内容生成的网站页面与 README 索引。

## 1. 目的与规范用语

本标准将 `portfolio` 定义为一个可长期维护的双语研究出版系统，而不是若干手写网页的集合。目标是让每篇文章都具备一致的内容模型、双语对应关系、视觉层级、证据边界、可访问性和发布审计记录。

本文使用以下规范用语：

- **必须（MUST）**：不满足时不得发布。
- **应当（SHOULD）**：原则上需要满足；若例外，必须在文章的 `AUDIT.md` 中解释。
- **可以（MAY）**：按文章需要选择。

以下原则优先级最高：

1. Markdown 是正文的唯一事实来源（single source of truth）。
2. 元数据只在文章 manifest 中维护，不在首页、文章模板和多个索引中重复手写。
3. 正文必须在构建期输出为完整静态 HTML；JavaScript 只提供语言切换、目录高亮等渐进增强（progressive enhancement）。
4. 双语版本追求语义等价和结构可对照，不要求逐字、逐句或逐行翻译。
5. 论文证据、作者主张、解释性转述和个人判断必须明确区分。

## 2. 仓库与文章目录模型

### 2.1 内容集合

公开内容归入三个集合：

- `articles/`：面向较广泛读者的技术文章与观点文章。
- `research/`：包含方法、证据和审计过程的深度研究。
- `reflections/`：明确带有作者经验和判断的反思性写作。

每篇内容必须使用独立目录，不得同时混用“单 Markdown 文件”和“文章目录”两套发布方式。

```text
research/
  2026-08-02-pi0-vla-flow/
    post.json
    README.md
    README.zh-CN.md
    README.en.md
    SOURCES.yaml
    AUDIT.md
    assets/
```

目录名必须采用 `YYYY-MM-DD-short-slug`，且日期必须是真实日历日期。目录日期表示首次进入仓库的日期；目录中的 `short-slug` 是内部可读标签，不要求与公开 `post.json.slug` 相同。公开路由不得依赖目录名，以便日后调整发布日期或整理内部命名而不破坏链接。

### 2.2 文件职责

| 文件 | 要求 | 职责 |
|---|---:|---|
| `post.json` | 必须 | 唯一的文章元数据 manifest |
| `README.md` | 必须 | GitHub 入口页，链接至各语言正文、来源和审计记录 |
| `README.zh-CN.md` | 按语言 | 中文正文 |
| `README.en.md` | 按语言 | 英文正文 |
| `SOURCES.yaml` | 研究文章必须 | 结构化来源清单及稳定 source ID |
| `AUDIT.md` | 发布前必须 | 校验结果、例外、人工审阅和版本记录 |
| `assets/` | 按需 | 文章专属图片、图表和下载文件 |

`src/` 中的 Astro 页面模板、组件与共享样式可以手工维护；文章正文、文章卡片和文章元数据不得在其中重复维护。`_site/` 属于构建产物，不得成为正文事实来源。

## 3. 文章 Manifest

### 3.1 最小字段

每篇文章必须提供 `post.json`。推荐结构如下：

```json
{
  "schemaVersion": 1,
  "id": "research.001",
  "seriesNo": 1,
  "slug": "pi0",
  "collection": "research",
  "status": "published",
  "publishedAt": "2026-08-02T00:00:00-04:00",
  "updatedAt": "2026-08-02T00:00:00-04:00",
  "featured": true,
  "readingMinutes": 35,
  "sourceLanguage": "zh-CN",
  "languages": {
    "zh-CN": {
      "file": "README.zh-CN.md",
      "title": "π₀：机器人怎样把看懂任务变成连续动作",
      "summary": "一份兼顾直觉、公式和证据边界的深度阅读笔记。"
    },
    "en": {
      "file": "README.en.md",
      "title": "π₀: How a Robot Turns Understanding into Continuous Action",
      "summary": "A deep reading note connecting intuition, equations, and evidence boundaries."
    }
  },
  "topics": ["Robotics", "Embodied AI", "VLA"],
  "paper": {
    "title": "π₀: A Vision-Language-Action Flow Model for General Robot Control",
    "url": "https://arxiv.org/abs/2410.24164",
    "arxivId": "2410.24164"
  },
  "audit": {
    "status": "passed",
    "file": "AUDIT.md",
    "reviewedAt": "2026-08-02T00:00:00-04:00",
    "openIssueCount": 0
  }
}
```

### 3.2 字段约束

- `id` 必须全仓唯一，发布后不得复用。
- `seriesNo` 是集合内的稳定编号；不得因首页排序或新增旧文章而重新编号。`content-sequence.json` 保存各集合只增不减的高水位，脚手架在排他锁内分配编号，并通过同卷临时文件原子替换 registry；允许跳号，不允许回收或复用。创建失败或放弃的预留编号也不回滚，因此空洞属于正常审计痕迹。
- `slug` 必须全仓唯一；正式路由由 `site + base + slug` 确定，发布后不得无重定向修改。
- `collection` 只能是 `article`、`research` 或 `reflection`。
- `status` 只能是 `draft`、`review` 或 `published`；若未来引入归档状态，必须先升级 schema 与路由行为。
- `languages` 中的 `zh-CN` 与 `en` 必须各自存在文件、标题和摘要。
- `publishedAt`、`updatedAt` 与 `audit.reviewedAt` 必须使用含时区的 ISO date-time。
- `readingMinutes` 是当前发布版本的统一阅读时间估计；内容大改时必须复核。
- canonical URL 由 Astro 的 `site`、`base` 与 `slug` 构建，不在 manifest 重复手写。
- 机器可读契约以 [`schemas/post.schema.json`](schemas/post.schema.json) 和 `src/content.config.ts` 为准。

状态行为必须如下：

| 状态 | 首页/索引 | Sitemap/RSS | 搜索引擎 |
|---|---|---|---|
| `draft` | 不出现 | 不出现 | `noindex` |
| `review` | 不进入公开索引或正式构建 | 不出现 | 不生成公开路由 |
| `published` | 正常出现 | 正常出现 | `index` |

### 3.3 全局 Registry

构建程序必须扫描三个集合下的 `post.json`，由 Astro Content Collection 形成全局 registry，并输出机器可读的 `/posts.json`。该产物不得人工编辑。

`content-sequence.json` 只负责防止稳定 ID 被复用，不是文章索引，也不得用于推导页面顺序。其严格契约由 `schemas/content-sequence.schema.json` 定义。脚手架锁只负责同一工作树内的事务；不同工作树或同步设备之间的冲突由 Git 合并和 CI 唯一性检查最终阻断。已发布文章若需撤下，应保留 manifest 并通过未来经 schema 定义的归档状态处理；不得通过删除目录来回收编号。

同一次扫描应当生成：

- 首页最近发布内容；
- 三个集合的档案页；
- Sitemap、RSS、结构化数据，以及后续需要时的标签和年份索引；
- 根 README 与集合 README 的自动索引区域。

首页“最近文章”默认展示最近 3 至 6 篇 `published` 内容，并提供集合入口。排序依据为 `publishedAt`，相同日期再按稳定 `id` 排序。

## 4. 双语正文与锚点规则

### 4.1 对齐单位

双语对齐单位是**语义章节（semantic section）**，不是句子或屏幕上的行。每个章节必须表达相同的主要命题、公式、图表和证据边界；两种语言可以采用不同语序和解释长度。

页面不提供中英对照阅读模式；任何时刻只显示一份完整语言版本。语义章节的内部映射仍须保留，用于切换语言时定位到等价章节，并作为翻译结构与证据一致性的构建检查。无 JavaScript 时默认中文版本仍须可读，两份 canonical Markdown 均须提供直达链接。

### 4.2 稳定锚点

每个二级或三级核心章节必须共享同一个逻辑 `data-pair-id`，同时使用语言前缀保证最终 HTML `id` 唯一：

```markdown
<a id="zh-architecture" data-pair-id="architecture"></a>
## 4. 模型架构
```

```markdown
<a id="en-architecture" data-pair-id="architecture"></a>
## 4. Architecture
```

锚点必须：

- 使用小写 ASCII `kebab-case`；
- 描述章节概念，而不是绑定某种语言的标题文本；
- `data-pair-id` 在所有语言中集合相同、顺序相同；
- 原始语言锚点使用 `zh-` / `en-` 前缀，配对后的页面行独占无前缀逻辑 `id`；
- 发布后保持稳定；若必须修改，旧锚点必须保留兼容跳转；
- 在单篇文章内唯一。

允许语言内部增加不参与对齐的段内说明，但不得引入只在一种语言中存在的独立核心结论。确有必要时，必须使用明确的本地注释标签，并在 `AUDIT.md` 中说明。

### 4.3 结构一致性检查

发布检查必须验证：

1. 两种语言的逻辑 `data-pair-id` 集合和顺序完全一致，实际 HTML `id` 全页唯一；
2. 对应锚点后的标题层级一致；
3. 公式 ID、图表 ID、表格 ID 和 source ID 一致；
4. 外部来源不存在仅一侧遗漏或指向不同证据的情况；
5. 所有内部链接和静态资源路径有效；
6. 各语言不存在重复 HTML `id`；
7. manifest 声明的语言文件全部存在。

校验的是结构与证据等价性，不应以字数相同作为翻译质量标准。

### 4.4 公式、图表与来源

- 公式应当使用稳定标签，例如 `eq-flow-path`，并在两种语言中保持一致。
- 变量必须在首次出现时定义，明确标出形状或维度；动作向量、动作块和动作 token 不得混为一谈。
- 图片和图表必须有稳定 ID、双语 caption 与双语替代文本（alt text）。
- 图片不得承载正文中唯一存在的信息；关键结论必须在正文中同步说明。
- `SOURCES.yaml` 使用稳定 ID（例如 `pi0-paper-2024`）维护来源身份；正文可以保留方便读者访问的直达链接，但双语链接必须指向同一证据。

推荐的来源结构：

```yaml
- id: pi0-paper-2024
  type: paper
  title: "π0: A Vision-Language-Action Flow Model for General Robot Control"
  authors: "Black et al."
  year: 2024
  url: "https://arxiv.org/abs/2410.24164"
  accessed_at: "2026-08-02"
  primary: true
```

## 5. 证据与解释标签

研究文章必须显式区分以下内容层级：

| 中文标签 | English label | 含义 |
|---|---|---|
| 论文事实 | Evidence from the paper | 论文直接报告的正文、公式、表格或实验结果，但不自动等同于第三方复现 |
| 作者声明 | Author claim | 作者提出的“首次”“最大”或 SOTA 等判断，必须保留原始限定语 |
| 代码快照 | Code snapshot | 特定核验日期的公开实现状态，可能与论文时期或未来版本不同 |
| 通俗解释 | Plain-language explanation | 为帮助理解而进行的转述或例子，不是论文原句 |
| 我的思考 | My interpretation | 基于证据作出的路线判断，不冒充论文结论 |

当信息没有足够来源或超出核验范围时，必须另行标明“未验证范围 / Unverified scope”。文章可以调整上述标签的显示措辞，但必须在开头给出一一对应的定义，且不得混淆证据、作者主张和本文判断。

视觉样式必须帮助辨认这些层级，但不能只依赖颜色；标签文字或图标必须同时存在。

引用必须尽量指向论文、项目页、数据集说明和官方仓库等第一方来源。历史定位或“开创性”判断必须说明比较范围，不得把新兴术语描述为已形成共识。

## 6. 标准文章结构

深度研究文章应当采用以下主线。某一节确实不适用时可以省略，但必须保持结论、方法、证据和判断之间的逻辑闭环。

1. **一分钟结论（One-minute takeaway）**：读者离开前必须记住的三至五点。
2. **问题与缺口（Problem and gap）**：已有方法哪里不够，本文解决什么问题。
3. **输入、输出与符号（Inputs, outputs, notation）**：先定义对象和维度。
4. **模型架构（Architecture）**：模块、信息流和各模块职责。
5. **核心方法与公式（Method and equations）**：从直觉过渡到正式表达。
6. **训练与推理（Training vs. inference）**：明确哪些步骤只在训练发生。
7. **数据与实验（Data and experiments）**：数据来源、指标、基线和结果。
8. **论文证明了什么（Claims and boundaries）**：证据支持范围及未证明事项。
9. **历史与路线位置（Historical and technical context）**：与相关路径的可比维度。
10. **本文思辨（Interpretation）**：作者自己的判断及其推理链。
11. **优势与长期缺陷（Strengths and durable limitations）**：区分短期性能差距与结构性约束。
12. **常见误解与自测（Misconceptions and self-check）**：帮助读者验证理解。
13. **来源、审计与版本（Sources, audit, changelog）**：可复核入口。

每个技术章节应当遵循以下内部顺序：

> 结论 → 通俗解释 → 正式定义或公式 → 证据来源 → 边界与例外

标题层级必须表达逻辑结构，不得仅为了视觉大小跳级。页面只允许一个 `<h1>`；正文核心章节从 `<h2>` 开始。

## 7. 文章页与视觉 Tokens

### 7.1 页面组成

标准文章页必须包含：

- 跳至正文链接（skip link）；
- 集合、稳定编号和文章状态；
- 当前语言的标题与摘要；
- 发布日期、更新日期、阅读时间和最近核验日期；
- 可保持滚动位置的语言切换器；
- 文章目录与证据标签说明；
- 一次只显示一种语言的单栏正文，并保留内部语义章节映射；
- 来源、审计记录、canonical URL 和版本信息。

正文最大阅读宽度应约为 `48rem–54rem`。桌面与移动端都必须保持单栏，不得把两种语言并排或上下连续展示。

### 7.2 语义 Token

样式必须使用语义 token，不得在组件内反复写具体色值或字体名。至少定义：

```css
:root {
  --color-page: ...;
  --color-surface: ...;
  --color-surface-muted: ...;
  --color-ink: ...;
  --color-ink-muted: ...;
  --color-rule: ...;
  --color-accent: ...;
  --color-accent-muted: ...;
  --color-focus: ...;

  --color-evidence-paper: ...;
  --color-evidence-claim: ...;
  --color-evidence-explanation: ...;
  --color-evidence-interpretation: ...;
  --color-evidence-unverified: ...;

  --font-ui: ...;
  --font-body-zh: ...;
  --font-body-en: ...;
  --font-math: ...;
  --font-mono: ...;

  --measure-single: 52rem;
  --canvas: 108rem;
  --toc-width: 14rem;

  --space-1: ...;
  --space-2: ...;
  --space-3: ...;
  --radius-card: ...;
  --shadow-card: ...;
}
```

中文与英文必须使用明确的语言字体栈，而不是让中文偶然落入系统 fallback：

```css
:lang(zh-CN) { font-family: var(--font-body-zh); }
:lang(en) { font-family: var(--font-body-en); }
```

视觉体系应当保持项目自身身份。可以借鉴编辑部式的白底黑字、无衬线排版、宽留白和轻量目录层级；不得复制其他站点的精确 token、DOM、类名、wordmark、头像、文案或固定布局尺寸。

## 8. 语言切换行为

页面支持以下模式：

- `zh`：仅中文；
- `en`：仅英文；

语言切换器必须：

- 使用原生按钮；
- 通过 `aria-pressed` 暴露当前状态；
- 支持 Tab、方向键、Home 和 End；
- 更新根元素的 `lang`：中文为 `zh-CN`，英文为 `en`；
- 不得在切换后主动滚回页面顶部，并应尽量保留当前章节上下文；
- 可以通过 URL 查询参数分享，例如 `?lang=zh`；
- 可以在本地保存读者偏好，但 URL 参数优先；
- 当前发布契约要求每篇文章同时具备 `zh-CN` 与 `en`；若未来支持单语文章，必须先升级 schema 与切换器行为。

使用 `[hidden]` 隐藏另一语言时，隐藏内容不得继续进入键盘焦点顺序或辅助技术阅读树。

## 9. 可访问性与渐进增强

所有已发布页面必须满足以下最低标准：

- 没有 JavaScript 时仍能阅读完整正文、访问目录和来源；
- 正文静态 HTML 包含正确的 `lang` 属性；
- 键盘可以完成导航、语言切换和链接访问；
- 所有交互控件具有可见焦点样式；
- 普通文字与背景对比度至少为 4.5:1，大字号至少为 3:1；
- 主要触控目标建议不小于 `44 × 44px`；
- 支持 `prefers-reduced-motion`；
- 表格有表头，复杂表格提供说明；移动端不得通过无限横向滚动隐藏关键结论；
- 图片有语义准确的 alt；装饰图片使用空 alt；
- 链接文字能够脱离上下文理解，避免多个“点击这里”；
- 数学公式必须由锁定版本的 KaTeX 在构建期输出 HTML 与 MathML；即使样式未加载，辅助技术仍可读取 MathML，邻近正文仍需解释公式含义；
- 颜色不是状态、证据类型或错误提示的唯一表达方式。

构建期必须把 Markdown 与公式转换为静态 HTML/MathML。JavaScript 可以增强语言切换、等价语义章节定位和目录高亮，但不得成为读取默认语言正文的前置条件。

## 10. README 自动索引

### 10.1 根 README

根 `README.md` 应当包含：

1. 项目定位与内容边界；
2. 从 manifest 自动生成的全部已发布内容及其中英文、网页直达链接；
3. 三个内容集合的入口；
4. 写作、审计和发布流程；
5. Markdown、网站与构建产物之间的 source-of-truth 关系。

### 10.2 集合 README

每个集合的 README 按发布日期倒序列出全部已发布文章。每项使用源语言标题作为唯一主标题，并提供 ID、日期、topics、中文全文、English version、项目文件夹与网页入口；不得把两个完整标题堆叠成对照表。

### 10.3 生成边界

自动生成内容必须放在固定注释之间：

```markdown
<!-- portfolio:index:start -->
<!-- 此区域由构建脚本生成，请勿手工编辑。 -->
<!-- portfolio:index:end -->
```

`content:index` 只允许替换上述区域，不得覆盖 README 中的人工说明；`check:index` 只读检查漂移。CI 依次运行 `check` 与 `build`，不会在构建时静默改写 README。

## 11. 构建、SEO 与发布产物

构建流程必须：

1. 校验全部 manifest 和目录结构；
2. 校验双语锚点、来源、公式和资源引用；
3. 验证 README 索引与 manifest 一致，并生成网站 registry；
4. 将 Markdown 和数学公式在构建期预渲染为静态 HTML/MathML；
5. 生成首页、文章页、档案页、Sitemap 和 RSS；
6. 验证站内链接、canonical URL 和静态资源；
7. 将完整站点输出到 `_site/`。

本仓库的 GitHub Pages 必须保持关闭。GitHub Actions 只负责校验；生产发布必须使用与个人网站无关的独立托管地址，并且只能发布已经通过全部检查、与远端 `main` SHA 完全一致的构建产物。

每篇公开页面应当生成：

- 唯一 `<title>` 与 meta description；
- canonical URL；
- Open Graph 和社交分享信息；
- `Article` 或 `TechArticle` 结构化数据；
- 正确的 `inLanguage`；
- 发布、更新和核验日期；
- 可用时的原论文 citation。

除非内容和同行评审状态确实满足定义，不得仅因文章讨论学术论文就标记为 `ScholarlyArticle`。

Markdown 渲染使用 Astro 的 Unified adapter、`remark-math` 与 `rehype-katex`。若未来允许不受信任的作者输入，构建阶段必须清理危险 HTML；即使目前只有可信内容，也禁止在 manifest 和 Markdown 中嵌入运行时脚本。

## 12. 发布前检查清单

### 12.1 自动检查

- [ ] manifest schema 有效，必填字段完整。
- [ ] `id`、集合内 `seriesNo` 和 `slug` 唯一。
- [ ] 状态、日期和语言声明合法。
- [ ] 双语锚点集合、顺序和标题层级一致。
- [ ] 显示公式数量与数学结构、双语外链顺序和 `SOURCES.yaml` registry 一致。
- [ ] 所有内部链接和静态资源路径有效；外部链接可达性由人工抽查。
- [ ] 静态 HTML 在无 JavaScript 环境中包含完整正文。
- [ ] 首页、集合页和 README 索引与 registry 一致。
- [ ] 草稿与评审稿未进入 Sitemap、RSS 和公开索引。
- [ ] Sitemap、RSS、canonical 和结构化数据通过检查。
- [ ] 构建可重复执行，且工作区不会产生未解释的差异。

项目至少提供以下命令语义：

```powershell
npm run check
npm run build
```

`check` 必须只读验证，不得静默修复源文件；`build` 可以重建 `_site/` 等明确的生成目录。

### 12.2 人工审阅

- [ ] 中文和英文的关键结论、证据边界与数字一致。
- [ ] 文章开头能让非专家迅速理解“解决了什么问题”。
- [ ] 公式前有直觉，公式后有变量解释和实际含义。
- [ ] 论文证据、作者主张、本文解释和个人推断已区分。
- [ ] “首创”“首次”“开山”等历史判断有明确比较范围和来源。
- [ ] 优点和缺点没有把短期性能差距误写成长期结构性结论。
- [ ] 手机端、中文模式、英文模式和键盘操作均已人工检查，任何时刻只显示一种语言。
- [ ] 图表、表格、公式、脚注和长链接在窄屏下可读。
- [ ] `AUDIT.md` 记录检查结果、已知限制、例外和审阅日期。

## 13. 版本与变更治理

- 本标准的破坏性修改必须提升 `schemaVersion`，并提供已有文章的迁移说明。
- 已发布文章的内容更正必须更新 `updatedAt`，重大更正还应在页面与 `AUDIT.md` 中说明。
- 路由、anchor 和 source ID 均视为公共接口；发布后优先兼容，不得仅为命名美观随意更改。
- 新组件或新内容类型只有在至少两篇文章确有共同需求时，才应进入共享系统。
- 对本标准的临时例外必须记录原因、影响范围和计划处理方式，不得成为未说明的永久分叉。

---

本标准的判断基线是：新增下一篇文章时，作者只需要添加文章目录和内容文件；首页、文章外壳、双语完整性映射、README 索引、SEO 信息和发布检查均由共享系统完成，而不需要复制并修改上一篇文章的代码。

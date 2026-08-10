---
postId: research.001
lang: zh-CN
---

# π₀：机器人怎样把“看懂任务”变成连续动作

> 一份兼顾直觉、公式与路线思辨的双语读书笔记。
> 配对版本：[English](./README.en.md)
> 核心论文：[π₀: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164)
> 核验口径：[arXiv v4，2026-01-08](https://arxiv.org/html/2410.24164v4)；历史措辞参考：[arXiv v1，2024-10-31](https://arxiv.org/html/2410.24164v1)

这篇笔记使用五种内容标签：

- **论文事实**：由 π₀ 论文直接报告，但不等于已有第三方独立复现；
- **作者声明**：作者关于“首次、最大、SOTA”等判断，必须保留“据作者所知”等限定；
- **代码快照**：当前 openpi 公开实现呈现的状态，可能与论文时期接口不同；
- **通俗解释**：为了帮助理解而做的转述，不是论文原句；
- **我的思考**：基于证据形成的路线判断，不冒充论文结论。

---

<a id="zh-quick-take" data-pair-id="quick-take"></a>
## 一、先用一分钟抓住 π₀

<a id="zh-quick-take-what" data-pair-id="quick-take-what"></a>
### 1. π₀ 是什么

π₀（读作 pi-zero）是 Physical Intelligence 发布的第一代通用机器人策略。它不是“Physical Intelligence Zero”的正式全称，也不是一个显式预测未来视频的 World Model。它是一种 Vision-Language-Action policy：根据视觉、语言指令和机器人本体状态，直接生成连续动作。

最简洁的架构表达是：

```math
\pi_0
=
\underbrace{\text{VLM 语义骨干}}_{\text{编码看到了什么、任务要求什么}}
+
\underbrace{\text{连续 Flow 动作专家}}_{\text{决定接下来怎样运动}}
```

但 Flow Matching 只是动作生成机制，不是 π₀ 的全部。完整配方还包括：

```math
\boxed{
\pi_0
=
\text{VLM 语义}
+
\text{连续动作专家}
+
\text{跨机器人数据}
+
\text{pretraining/post-training}
+
\text{滚动执行}
}
```

**论文事实：**

- 视觉语言骨干采用约 30 亿参数的 PaliGemma；
- action expert 约 3 亿参数，总参数量约 33 亿；
- 模型一次生成 $H=50$ 个连续物理动作；
- 推理时对同一个动作块执行 $K=10$ 次 Euler 更新。

<a id="zh-quick-take-gap" data-pair-id="quick-take-gap"></a>
### 2. 它弥合了什么设计缺口

π₀ 出现之前，两类模型各自解决了问题的一部分：

| 技术路线 | 擅长什么 | 主要缺口 |
|---|---|---|
| VLM / 早期 VLA | 理解图像、语言、物体和开放词汇指令 | 离散、自回归动作输出不天然适合高频精细控制 |
| Diffusion / 连续控制策略 | 生成平滑、多模态的连续动作 | 缺少大型 VLM 的语义知识和语言迁移能力 |
| π₀ | 将大型 VLM 与连续动作生成器接在一起 | 仍受机器人示范数据覆盖范围约束 |

π₀ 的关键选择是：不要求一个语言模型同时勉强承担语义理解和底层马达控制，而是让 VLM 提供任务相关的视觉语言上下文，让 action expert 生成连续动作。这一“语义骨干—动作专家”接口，是论文最重要且最耐久的设计。

---

<a id="zh-execution-loop" data-pair-id="execution-loop"></a>
## 二、机器人实际执行时发生了什么

假设指令是：“把桌上的盘子和杯子收进周转箱。”

<a id="zh-execution-loop-observe" data-pair-id="execution-loop-observe"></a>
### 1. 观察现实

机器人接收：

- 桌面相机、腕部相机等 2–3 路 RGB 图像；
- 自然语言指令；
- 当前关节角、夹爪状态等本体状态。

<a id="zh-execution-loop-context" data-pair-id="execution-loop-context"></a>
### 2. 形成任务上下文

PaliGemma 编码与任务有关的视觉语言信息：哪些物体是盘子、杯子和箱子，当前目标是什么，物体与指令有什么关系。这里不是“VLM 先说出一句话，再交给动作解码器”；action expert 通过 attention 读取内部隐藏表示。

<a id="zh-execution-loop-generate" data-pair-id="execution-loop-generate"></a>
### 3. 从噪声生成动作

action expert 从一块高斯噪声开始，经过 10 次 Flow 更新，得到一段包含 50 个连续动作的 action chunk。教学上可以把它描述为：

> 靠近盘子 → 调整手腕 → 闭合夹爪 → 抬起 → 移向箱子 → 放下。

真实输出是连续数值，而不是自然语言步骤。

<a id="zh-execution-loop-prefix" data-pair-id="execution-loop-prefix"></a>
### 4. 只执行动作块前缀

π₀ 虽然预测 50 步，却不会盲目执行全部动作：

- 20 Hz 平台执行前 16 步，约 0.8 秒后重新规划；
- 50 Hz 平台执行前 25 步，约 0.5 秒后重新规划。

<a id="zh-execution-loop-reobserve" data-pair-id="execution-loop-reobserve"></a>
### 5. 重新观察并滚动规划

机器人重新拍摄真实场景。如果物体移动、夹持失败或姿态偏离，下一轮动作会根据新观察重新生成：

~~~text
观察现实
→ 形成任务上下文
→ 生成 50 步动作块
→ 执行其中一部分
→ 重新观察现实
→ 再生成
~~~

**关键边界：**π₀ 在行动之后重新观察真实世界；它没有在行动之前显式生成一段未来视频来预测世界变化。

---

<a id="zh-inputs-outputs" data-pair-id="inputs-outputs"></a>
## 三、模型的输入和输出

<a id="zh-inputs-outputs-observation" data-pair-id="inputs-outputs-observation"></a>
### 1. 当前观察

物理时间 $t$ 的观察可写为：

```math
o_t=[I_t^1,\ldots,I_t^n,\ell_t,q_t]
```

其中：

- $I_t^i$：第 $i$ 路相机图像；
- $\ell_t$：语言指令；
- $q_t$：机器人本体状态，例如关节角和夹爪状态。

$q_t$ 不是模型内部状态，也不是所谓“action 状态”，而是机器人当前真实的物理状态。

<a id="zh-inputs-outputs-vector" data-pair-id="inputs-outputs-vector"></a>
### 2. 单步动作向量

```math
a_t\in\mathbb R^d
```

$a_t$ 表示一个物理时间步的连续控制向量；$d$ 是单步动作维数，不同机器人可以不同。

<a id="zh-inputs-outputs-chunk" data-pair-id="inputs-outputs-chunk"></a>
### 3. 动作块

```math
A_t=[a_t,a_{t+1},\ldots,a_{t+H-1}]
\in\mathbb R^{H\times d}
```

π₀ 使用 $H=50$。若展平：

```math
\mathrm{vec}(A_t)\in\mathbb R^D,
\qquad D=Hd
```

几个容易混淆的概念必须分开：

| 概念 | 表示 | 含义 |
|---|---|---|
| action vector | $a_t$ | 一个物理时间步的动作 |
| action chunk | $A_t$ | 连续 $H$ 个物理动作 |
| action slot | Transformer 序列位置 | 承载一个连续动作向量的内部槽位 |
| discrete action token | 词表 ID | 某些 VLA 使用的离散动作表示 |

π₀ 的 action slot 承载连续向量，不等于语言词表中的离散 token。

<a id="zh-inputs-outputs-distribution" data-pair-id="inputs-outputs-distribution"></a>
### 4. 模型真正学习的对象

```math
\boxed{
p_{\mathrm{data}}(A_t\mid o_t)
}
```

通俗地说：给定当前画面、语言目标和机器人姿态，生成一段合理的未来动作。生成的是动作，不是未来图像或未来世界状态。

---

<a id="zh-architecture" data-pair-id="architecture"></a>
## 四、架构：VLM 与 action expert 怎样协作

<a id="zh-architecture-specialization" data-pair-id="architecture-specialization"></a>
### 1. 两套专长

π₀ 可以理解为同一系统中的两套专长权重：

1. **PaliGemma VLM，约 3B 参数**：处理图像和语言，提供物体、场景和指令语义；
2. **action expert，约 300M 参数**：处理机器人状态、带噪动作和 Flow 时间，预测连续动作的修改方向。

一个粗略比喻是“领班 + 编舞师”：领班掌握现场与目标，编舞师把任务意图转成各关节的协调运动。这个比喻只描述分工；模型内部交换的是隐藏表示，并非可读语言。

<a id="zh-architecture-not-moe" data-pair-id="architecture-not-moe"></a>
### 2. 它不是普通的稀疏 MoE

图像和语言固定进入 VLM 权重，本体状态和动作固定进入 action-expert 权重，两者通过 self-attention 交换信息。系统没有学习一个路由器，临时决定每个 token 应该进入哪个专家。

更准确地说，π₀ 使用固定的模态分工，让语义骨干与动作专家在同一 Transformer 式注意力系统中协作。

<a id="zh-architecture-continuous" data-pair-id="architecture-continuous"></a>
### 3. 为什么不把动作直接当作语言 token

机器人动作天然是连续数值，并要求多个关节在时间上协调。把动作量化成离散词表并逐 token 输出，可能引入：

- 量化误差；
- 自回归延迟；
- 多关节和多时间步之间的协调困难。

π₀ 一次联合生成整个连续动作块，使 50 个动作位置能够相互协调。

---

<a id="zh-flow-matching" data-pair-id="flow-matching"></a>
## 五、Conditional Flow Matching：从噪声学习到动作的流

<a id="zh-flow-matching-noise" data-pair-id="flow-matching-noise"></a>
### 1. 为什么从噪声开始

高斯噪声是容易采样的简单分布：

```math
\epsilon\sim\mathcal N(0,I)
```

$\epsilon$ 与动作块 $A_t$ 形状相同。这里的噪声不是注入真实机器人的物理干扰，也不是普通正则化噪声；它是生成模型的起始分布。

模型要学习的是：

```math
\text{简单高斯分布}
\longrightarrow
\text{给定观察条件后的动作分布}
```

<a id="zh-flow-matching-path" data-pair-id="flow-matching-path"></a>
### 2. 构造训练路径

采样 Flow 时间：

```math
\tau\in[0,1]
```

在噪声和真实示范动作之间做线性插值：

```math
\boxed{
A_t^\tau=(1-\tau)\epsilon+\tau A_t
}
```

端点为：

```math
A_t^0=\epsilon,
\qquad
A_t^1=A_t
```

$\tau=0$ 是纯噪声，$\tau=1$ 是真实动作块，中间状态是一块“半噪声、半动作”的候选动作。这条直线位于生成空间，不代表机械臂在物理空间中沿直线移动。

<a id="zh-flow-matching-target" data-pair-id="flow-matching-target"></a>
### 3. 得到配对训练目标

将插值式写成：

```math
A_t^\tau=\epsilon+\tau(A_t-\epsilon)
```

对 $\tau$ 求导：

```math
\boxed{
\frac{dA_t^\tau}{d\tau}=A_t-\epsilon
}
```

因此，对每一组采样的 $(\epsilon,A_t)$，监督目标速度是：

```math
u=A_t-\epsilon
```

通俗地说，它告诉模型这块尚未完成的候选动作应该朝什么方向、以多大幅度修改。

<a id="zh-flow-matching-loss" data-pair-id="flow-matching-loss"></a>
### 4. action expert 学习条件向量场

模型预测：

```math
v_\theta(A_t^\tau,o_t,\tau)
```

训练损失为：

```math
\boxed{
\mathcal L(\theta)
=
\mathbb E
\left[
\left\|
v_\theta(A_t^\tau,o_t,\tau)
-(A_t-\epsilon)
\right\|_2^2
\right]
}
```

<a id="zh-flow-matching-qualification" data-pair-id="flow-matching-qualification"></a>
### 5. 必须保留的专业限定

训练时，每个噪声—示范动作配对都有目标 $A_t-\epsilon$；实际推理时，模型并不知道某个预先指定的真实动作 $A_t$。

在理想的无限数据和均方误差优化下，模型学习的是条件向量场：

```math
v^*(x,o,\tau)
=
\mathbb E
\left[
A_t-\epsilon
\mid
A_t^\tau=x,\ o_t=o,\ \tau
\right]
```

这意味着 π₀ 学习的是怎样把高斯噪声分布运输成当前条件下的动作分布，而不是检索某一条训练示范。不同初始噪声仍可对应不同的合理动作；条件期望向量场不等于简单输出一条“平均动作”。

---

<a id="zh-inference" data-pair-id="inference"></a>
## 六、推理：10 次 Euler 更新究竟做了什么

<a id="zh-inference-start" data-pair-id="inference-start"></a>
### 1. 从新噪声开始

```math
\hat A_t^{(0)}\sim\mathcal N(0,I)
```

推理时有当前观察 $o_t$，但没有真实动作答案 $A_t$。

<a id="zh-inference-ode" data-pair-id="inference-ode"></a>
### 2. 学到的 ODE

```math
\frac{d\hat A_t^\tau}{d\tau}
=
v_\theta(\hat A_t^\tau,o_t,\tau)
```

<a id="zh-inference-euler" data-pair-id="inference-euler"></a>
### 3. 使用 Forward Euler 离散求解

π₀ 设置：

```math
K=10,
\qquad
\delta=\frac{1}{K}=0.1
```

更新公式：

```math
\boxed{
\hat A_t^{(k+1)}
=
\hat A_t^{(k)}
+
\frac{1}{K}
v_\theta
\left(
\hat A_t^{(k)},o_t,\frac{k}{K}
\right)
}
```

其中 $k=0,1,\ldots,9$，最后得到：

```math
\hat A_t=\hat A_t^{(10)}
```

<a id="zh-inference-no-proof" data-pair-id="inference-no-proof"></a>
### 4. Euler 法没有证明“10 步必然得到真实动作”

在一个教学特例中，若假设速度始终为已知常数：

```math
v_\theta=A_t-\epsilon
```

则：

```math
\hat A_t^{(k)}
=
\epsilon+\frac{k}{K}(A_t-\epsilon)
```

当 $k=K$ 时，确实有：

```math
\hat A_t^{(K)}
=
\epsilon+(A_t-\epsilon)
=A_t
```

这只验证了一条已知、恒速的配对直线路径，不能证明真实模型中 10 步理论上必需、一定足够，或每个噪声样本都会逼近某个指定示范动作。事实上，如果速度恒定且终点已知，一步 $\delta=1$ 也能到达终点。

真实模型需要多步，因为学到的向量场随候选动作位置、当前观察和 $\tau$ 改变，同时存在网络近似误差与 Euler 离散误差。因此，10 步是生成质量、数值精度和推理计算之间的工程折中，不是“十步收敛定理”。

<a id="zh-inference-h-vs-k" data-pair-id="inference-h-vs-k"></a>
### 5. $H=50$ 与 $K=10$ 完全不同

```math
\boxed{
10\text{ 次 Flow 更新}
\longrightarrow
1\text{ 个包含 50 步物理动作的 action chunk}
}
```

- $H=50$：动作块包含的物理时间步数；
- $K=10$：生成同一个动作块时的数值积分步数。

---

<a id="zh-training-deployment" data-pair-id="training-deployment"></a>
## 七、训练与运行不要混在一起

<a id="zh-training-deployment-training" data-pair-id="training-deployment-training"></a>
### 训练阶段

~~~text
真实观察 o_t 与真实动作块 A_t
→ 采样噪声 ε
→ 采样 Flow 时间 τ
→ 构造中间动作 A_t^τ
→ 监督 action expert 预测 A_t - ε
→ 更新模型参数
~~~

<a id="zh-training-deployment-deployment" data-pair-id="training-deployment-deployment"></a>
### 运行阶段

~~~text
当前观察 o_t 与一块新噪声
→ 做 10 次 Euler 更新
→ 得到 50 步动作块
→ 执行动作块前缀
→ 重新观察真实世界
→ 滚动重规划
~~~

训练时存在真实动作监督；运行时没有真实答案，只能沿学到的条件向量场采样。

---

<a id="zh-data-recipe" data-pair-id="data-recipe"></a>
## 八、公式之外：数据与训练配方同样是核心

<a id="zh-data-recipe-scale" data-pair-id="data-recipe-scale"></a>
### 1. 数据规模

论文报告：

- 超过 10,000 小时机器人操作数据；
- 约 903M 自有 timesteps；
- 7 类 robot configurations；
- 68 个宽任务；
- 开放数据占训练采样混合的约 9.1%；
- 不同机器人的状态与动作统一填充到最大 18 维接口。

903M 指时间步，不是 903M 条完整轨迹；9.1% 是采样混合占比，不是原始时间步占比。

<a id="zh-data-recipe-pretraining" data-pair-id="data-recipe-pretraining"></a>
### 2. 广泛预训练

预训练数据覆盖多机器人、多任务、多物体和多场景，也包含不完美动作、偏离状态与恢复过程。它的目标不是让每项任务立即达到最高熟练度，而是扩大模型见过的状态和行为范围。

<a id="zh-data-recipe-posttraining" data-pair-id="data-recipe-posttraining"></a>
### 3. 高质量 post-training

任务后训练使用更一致、更熟练、更有针对性的示范，使动作趋于稳定和流畅。简单任务可能需要约 5 小时专项数据，复杂任务可能需要 100 小时以上。

π₀ 没有消灭任务数据收集，而是把专项数据的作用从“从零学习全部能力”转变为“校准和精修已有能力”。

<a id="zh-data-recipe-system" data-pair-id="data-recipe-system"></a>
### 4. 整套配方

```math
\boxed{
\text{广泛预训练负责能力覆盖}
\quad+\quad
\text{高质量后训练负责动作熟练度}
}
```

这在方法论上类似“先广泛预训练，再有针对性地适配”，但 π₀ 的任务后训练不应简单等同于语言模型的 RLHF 或 alignment。

---

<a id="zh-evidence" data-pair-id="evidence"></a>
## 九、实验究竟证明了什么

论文从四个层级验证系统：

| 证据层级 | 主要结果 | 必须保留的限定 |
|---|---|---|
| Direct prompting | 五个任务中 π₀ 的归一化进度分约为 0.75–1.00，明显高于论文基线 | 这些任务族存在于预训练中，不是严格未见任务 |
| 语言跟随 | 能利用人类或高层 VLM 给出的中间语言指令 | π₀-small 同时改变规模、初始化和架构，不是干净的单因素消融 |
| 新任务适配 | 使用 1/5/10 小时数据微调时，预训练通常提高样本效率 | 并非每个任务、每个数据点都获胜 |
| 复杂任务 | 展示洗衣、收桌、装盒等 5–20 分钟任务 | “超过 50%”是部分进度分，不等于完整成功率 |

其中 0.75–1.00 是对论文图 7 的近似读图范围，并非论文表格给出的精确数值。

<a id="zh-evidence-zero-shot" data-pair-id="evidence-zero-shot"></a>
### 1. v1 与 v4 的 zero-shot 口径

首发 v1 使用了 zero-shot，但同一版本说明五个基础评测任务族存在于预训练中。当前 v4 已改为 direct prompting / out-of-box。

准确的解释是：模型没有针对相应测试版本做任务专门 post-training，不等于它从未见过相关任务族、机器人或行为分布。

<a id="zh-evidence-long-horizon" data-pair-id="evidence-long-horizon"></a>
### 2. 长任务不等于完整自主规划

部分长任务依赖人类或独立高层 VLM 提供中间指令。π₀ 主要证明了通用底层策略能力，并没有由单个模型同时包办长期目标分解、持久记忆、成功验证、安全判断和底层连续控制。

---

<a id="zh-innovation" data-pair-id="innovation"></a>
## 十、π₀ 的核心创新究竟是什么

π₀ 不是下列任何单项概念的发明者：

- [RT-2](https://arxiv.org/abs/2307.15818) 更早提出 VLA；
- [Diffusion Policy](https://arxiv.org/abs/2303.04137) 更早探索连续生成式控制；
- action chunking 并非由 π₀ 首创；
- [Octo](https://arxiv.org/abs/2405.12213) 是更早的跨机器人通用策略；
- [OpenVLA](https://arxiv.org/abs/2406.09246) 更早公开了基于 Internet 预训练 VLM 的 VLA。

π₀ 的贡献是系统整合：

1. 用大型预训练 VLM 保留视觉语言语义；
2. 用独立 action expert 处理本体状态与连续动作；
3. 用 Flow Matching 联合生成高频 action chunk；
4. 用万小时跨机器人数据进行基础预训练；
5. 用高质量 post-training 把广泛能力变成熟练行为；
6. 在柔性物体、双臂协调和长任务上做大规模真实机器人展示。

论文将贡献定位为整合型创新，只作了带 “to our knowledge” 限定的首创声明：据作者所知，它是首个用于灵巧控制、生成高频动作块的 flow-matching VLA。

因此，更稳妥的历史评价是：

> π₀ 是 Physical Intelligence 的 π 系列和连续 action-expert VLA 路线的定义性起点，但不是整个 VLA 或具身智能领域的第一篇工作。

---

<a id="zh-route-analysis" data-pair-id="route-analysis"></a>
## 十一、我的思考：π₀ 与 WM/WAM 路线有什么区别

> 本章属于路线分析，不是 π₀ 论文已经证明的结论。WAM 是仍在形成中的非标准化术语，不同研究对其边界和耦合方式并没有统一定义。

<a id="zh-route-analysis-information" data-pair-id="route-analysis-information"></a>
### 1. 根本区别不是“语言介质 vs 视频介质”

我原来的直觉是：π₀ 与 LLM/VLM 的关联更深，VLA 的信息更像语言，而 WM/WAM 的信息更像视频或 latent。这个直觉抓住了信息侧重点，却把中间表示说得过于简单。

更准确的区分是：

- π₀ 的语义骨干来自 PaliGemma，因此重视物体、指令和任务语义；
- VLM 交给 action expert 的不是一段可读语言，而是图像、语言和状态形成的隐藏上下文；
- WM/WAM 路线让未来世界的时空结构或预测监督实质参与动作学习。

π₀ 式直接策略学习：

```math
p(A_t\mid o_t)
```

它问：“根据当前观察，我现在应该怎样行动？”

World Model 可以学习：

```math
p(z_{t+1:t+H}\mid z_t,A_t)
```

它问：“如果执行这些动作，未来世界可能怎样变化？”其中 $z$ 可以是图像、视觉 latent、状态或其他世界表征，不必是人类可读视频。

联合型 WAM 的一种教学抽象是：

```math
p(A_t,z_{t+1:t+H}\mid o_t)
```

但这不是统一定义；具体系统也可以采用其他分解方式、训练期预测监督或部署期 action-only 输出。

<a id="zh-route-analysis-before-after" data-pair-id="route-analysis-before-after"></a>
### 2. “行动后看结果”与“行动前推演”是教学性对比

π₀ 的闭环是：

~~~text
观察 → 直接行动 → 世界真实变化 → 再观察
~~~

World Model 路线可以采用：

~~~text
观察 → 内部预测若干未来 → 比较后果 → 选择行动
~~~

这是一种帮助理解的典型对比，并不意味着所有 World Model 或 WAM 都会在部署时显式生成视频并搜索多个未来。

没有显式 World Model，也不等于 π₀ 毫无物理知识。为了从示范中生成有效动作，其参数可能编码与接触、物体和机器人动力学有关的行动规律。区别在于：π₀ 没有使用一个可单独检查的未来预测目标来训练这些规律，也不天然提供反事实模拟器。它可能“会做”，却不一定显式展示动作之后世界会怎样变化。

<a id="zh-route-analysis-latency" data-pair-id="route-analysis-latency"></a>
### 3. 决策路径可能更短，但不保证更快

直接策略不必先生成未来世界、评估候选轨迹再选择动作，因此可能拥有较短的决策路径。但：

- π₀ 自己仍需 10 次 action-expert Flow 更新；
- 某些 WAM 只在训练时使用未来预测监督，部署时可以 action-only；
- 工程速度必须比较端到端 p50/p95 延迟、控制频率、硬件与重规划方式。

因此，π₀ 倾向于以更直接的动作接口换取执行效率；WM/WAM 倾向于以更丰富的动态表征换取后果推演能力。具体快慢需要实测。

<a id="zh-route-analysis-tradeoff" data-pair-id="route-analysis-tradeoff"></a>
### 4. 两条路线的真实权衡

| 维度 | π₀ 式直接 VLA | WM/WAM-first 路线 |
|---|---|---|
| 主要学习对象 | 条件动作分布 | 世界转移、未来表征与动作的耦合 |
| 动作前主要信息 | 当前观察形成的 hidden context | 当前观察加未来结构或预测监督 |
| 是否必须生成视频 | 否 | 也不一定，可以是 latent 或仅训练期监督 |
| 反事实推演 | 不显式提供 | 更容易支持“如果这样做会怎样” |
| 控制接口 | 直接生成连续动作块 | 可联合生成，也可通过策略或 action-only 头输出 |
| 典型优势 | 语义接口清晰、执行链短、适合连续控制 | 动态信息丰富，适合规划和后果判断 |
| 典型风险 | 可能流畅地做错，却缺少显式成功验证 | 计算、内存、数据要求和模型误差可能更高 |

<a id="zh-route-analysis-fusion" data-pair-id="route-analysis-fusion"></a>
### 5. 长期更可能融合

我的判断是：World Model 更适合慢速推演、长期规划、后果判断和异常检测；VLA action expert 更适合快速、连续的底层执行。这是由两条路线的互补性推导出的架构判断，不是论文结论。

~~~text
语言与目标理解
→ 世界动态推演
→ 任务与子目标规划
→ 连续动作生成
→ 真实世界反馈
~~~

因此，“VLA vs WAM”未来可能不是产品分类，而是同一机器人系统内部不同层次的能力。

---

<a id="zh-strengths-limitations" data-pair-id="strengths-limitations"></a>
## 十二、最大的优点与最耐久的缺点

<a id="zh-strengths-limitations-strength" data-pair-id="strengths-limitations-strength"></a>
### 1. 最大优点：建立“语义—运动接口”

π₀ 最耐久的贡献不是某个榜单分数，也不一定是 Flow Matching 永远最好，而是把大型 VLM 的通用语义能力与一个可以替换和扩展的连续动作专家接在一起。

未来可以更换 VLM 主干、动作编码、Flow 求解器、chunk 长度或机器人平台，但“通用语义骨干 + 连续控制专家”的分工仍可能保留。

<a id="zh-strengths-limitations-structural" data-pair-id="strengths-limitations-structural"></a>
### 2. 最大结构性缺点：能力边界受示范支持域约束

π₀ 本质上仍是离线示范驱动的条件行为克隆。它没有显式提供：

- 自己是否处于训练分布外的不确定性；
- 不理解时的拒绝执行；
- 动作之后任务是否成功的验证器；
- 持久世界状态与长期记忆；
- 通过在线交互持续学习的机制。

因此，它可能在陌生状态下流畅而自信地做错。更多数据能扩大覆盖面，但不会自动带来对未知状态的自知。

<a id="zh-strengths-limitations-evidence" data-pair-id="strengths-limitations-evidence"></a>
### 3. 论文证据的耐久限制：难以因果归因

- 核心万小时数据无法被第三方完整获得；
- 基线训练预算和动作接口不完全一致；
- π₀ 与 π₀-small 同时改变参数量、初始化和架构；
- 多数条件约进行 10 次真实机器人试验，论文未报告置信区间；
- 复杂任务使用作者自建的部分进度量表。

[openpi](https://github.com/Physical-Intelligence/openpi) 现已公开代码和基础权重，因此“完全不开源”已经不准确；但原始 10,000 小时预训练仍不能被第三方完整复刻。

论文有力证明的是整套系统配方在作者环境中有效，但没有干净分离 VLM、Flow、数据规模、post-training 与系统工程各自贡献了多少。

---

<a id="zh-misconceptions" data-pair-id="misconceptions"></a>
## 十三、最容易出现的误读

1. **π₀ 是 Physical Intelligence Zero 的正式全称。**
   不是；直接称 π₀ 或 pi-zero。

2. **π₀ 是 World Model。**
   不是；它不显式预测未来图像、状态或奖励。

3. **VLM 先输出一句语言，再交给动作模型。**
   不是；action expert 读取内部隐藏上下文。

4. **$H=50$ 表示动作是 50 维。**
   不是；它表示 50 个物理时间步。

5. **10 次 Flow 更新会生成 10 个动作块。**
   不是；10 次更新共同生成一个动作块。

6. **Forward Euler 证明 10 步必然到达真实动作。**
   不是；Euler 是数值求解器，10 步是工程选择。

7. **50 Hz 表示模型每秒重新看图并完整推理 50 次。**
   不是；这是动作命令频率，系统约每 0.5–0.8 秒重规划。

8. **Direct prompting 等于从未见过任务。**
   不是；基础任务族存在于预训练中。

9. **长任务完全由 π₀ 单模型自主规划。**
   不完整；部分任务使用人类或高层 VLM 的中间指令。

10. **实验已经证明 Flow Matching 是成功的唯一原因。**
    没有；论文主要证明整套 recipe 有效。

---

<a id="zh-recap" data-pair-id="recap"></a>
## 十四、一分钟复述

> π₀ 是 Physical Intelligence 的第一代通用机器人策略。它用约 30 亿参数的 PaliGemma 编码图像和语言，再用约 3 亿参数的 action expert，通过 Conditional Flow Matching 生成包含 50 个连续物理动作的 action chunk。训练时，模型在高斯噪声和真实动作之间构造直线路径，学习候选动作应该怎样修改；推理时从新噪声开始，使用 10 次 Forward Euler 更新得到动作块，然后只执行其中一部分并重新观察现实。π₀ 真正的创新不是一条孤立公式，而是将 VLM 语义、连续动作专家、万小时跨机器人预训练和高质量 post-training 整合成一套 foundation-policy 配方。它与 World Model 的根本区别是：π₀ 直接学习条件动作分布，而 World Model 显式学习世界可能怎样变化。长期看，两条路线更可能在规划层和执行层融合。

---

<a id="zh-self-check" data-pair-id="self-check"></a>
## 十五、复盘自测

如果能够回答下面十个问题，就基本掌握了 π₀：

1. π₀ 的输入和输出分别是什么？
2. $a_t$、$A_t$、$H$、$d$、$D$ 分别表示什么？
3. action chunk 与 discrete action token 有什么区别？
4. 为什么使用高斯噪声作为起点？
5. 为什么配对训练目标是 $A_t-\epsilon$？
6. 推理时为什么不存在一个已知的真实 $A_t$？
7. Forward Euler 在系统中负责什么，又不负责什么？
8. 为什么 $H=50$ 与 $K=10$ 完全不同？
9. π₀ 的创新为什么是系统配方，而不是单一 Flow 公式？
10. π₀ 与 World Model/WAM 的学习目标有什么区别？

---

<a id="zh-sources" data-pair-id="sources"></a>
## 主要来源

- 核心论文：[π₀ v4](https://arxiv.org/html/2410.24164v4)、[π₀ v1](https://arxiv.org/html/2410.24164v1)
- 作者材料：[PI π₀ 项目页](https://www.pi.website/blog/pi0)、[openpi](https://github.com/Physical-Intelligence/openpi)
- 方法前史：[PaliGemma 技术报告](https://arxiv.org/abs/2407.07726)、[Flow Matching](https://arxiv.org/abs/2210.02747)、[Rectified Flow](https://arxiv.org/abs/2209.14577)
- 前置工作：[RT-2](https://arxiv.org/abs/2307.15818)、[Diffusion Policy](https://arxiv.org/abs/2303.04137)、[Octo](https://arxiv.org/abs/2405.12213)、[OpenVLA](https://arxiv.org/abs/2406.09246)
- 后续边界：[π₀.5](https://arxiv.org/abs/2504.16054)、[Real-Time Chunking](https://arxiv.org/abs/2506.07339)
- WAM 路线参考：[WAM Survey](https://arxiv.org/abs/2605.12090)、[VPP](https://arxiv.org/abs/2412.14803)、[DreamZero](https://arxiv.org/abs/2602.15922)、[Fast-WAM](https://arxiv.org/abs/2603.16666)、[GigaWorld-Policy](https://arxiv.org/abs/2603.17240)
- 论文索引：[Hugging Face paper page](https://huggingface.co/papers/2410.24164)

<a id="zh-verification" data-pair-id="verification"></a>
## 版本与核验说明

- 公式、模型、数据与实验事实主要使用 π₀ arXiv v4；
- “zero-shot”历史措辞使用 v1，并明确当前 v4 已改写；
- 论文推导使用 $\tau=0$ 为噪声、$\tau=1$ 为动作；当前 openpi 代码采用相反的时间方向（$t=1$ 为噪声、$t=0$ 为动作，$dt<0$），两者通过 $t=1-\tau$ 等价，并不矛盾；
- 正文始终用一般动作维数 $d$。18 维是论文跨机器人数据接口的补齐维数；当前 openpi 的 `Pi0Config` 默认 `action_dim=32`，属于当前开源实现配置，不能混成同一个数字；
- openpi 公共仓库状态于 2026-08-02 通过 GitHub connector 确认为公开仓库；
- Hugging Face 页面沿用 2026-08-01 已核验快照，仅用于元数据与生态索引；
- “我的思考”属于解释性推断，应与论文事实分开阅读。

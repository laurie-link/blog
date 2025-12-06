---
title: Cursor 入门，用氛围编程数倍提升工作效率
date: 2025-04-12
excerpt: 超级个体必备编程工具
tags: ["AI工具", "深度AI博文"]
category: AI学习
---

哈喽大家好，最近我一直在用cursor这个AI编程工具，专门写一些小工具自动化枯燥乏味的重复性工作（例如不停复制粘贴）。作为一名几乎从不写代码的运营人员，我全靠 Vibe Coding（氛围编程，只用自然语言和 AI 对话），就能快速写出超实用的工具，效率直接翻倍！这让我能有更多精力集中于“知识密集型"工作，而不是被劳动密集型任务支配

![notion image](https://img.aiexplorernote.com/pic/vide-coding.jpg?t=1d3d1f9c-c2a3-80b7-97f7-fc75794fe0f9)

今天这期内容，我就结合自己的使用经验，介绍一下 Cursor 的收费规则和基础用法，希望能帮助你更好地上手这个工具，用 AI 解放生产力！

首先是cursor的收费规则

## Cursor会员值不值？要不要冲？

我从上个月开始充值 Cursor Pro 会员（$20/月），之前用免费试用版白嫖惯了，一直以为 $20 只能买 500 次请求，用完就得歇菜。结果真正充值后才发现，这 500 次是“快速请求”（fast request），响应速度和跟GPT-4o 聊天一样，基本秒回。而500 次用完后，其实会员到期前还能继续用，只是会切换到“慢速请求”模式

具体规则是这样的，Cursor 有两个请求池：

  * **快速请求池** ：前 500 次请求，响应超快，基本秒回

  * **慢速请求池** ：500 次之后，请求进入这个池子。刚开始速度和快速请求差不多，但用得越多，响应越慢。最慢能慢到什么程度？没试过，但应该不会比 DeepSeek 还慢（手动狗头）

这是cursor官方对此的介绍：

![notion image](https://img.aiexplorernote.com/pic/cursor-fast-request-slow-request.jpg?t=1d3d1f9c-c2a3-8040-8b97-eec5fe787271)

这么看还可以，不够用的问题稍稍得以缓解。不过Cursor 也一些”小心机”。以前一次对话只消耗一次次数，现在他们悄悄加入了一些机制，巧妙地为自己“回血”：

**1.超长上下文多扣次数** 当对话上下文超过一定长度时，会消耗更多次数。我测试发现，最多一次可扣 3 次快速请求

![notion image](https://img.aiexplorernote.com/pic/cursor-three-count-pricing.jpg?t=1d3d1f9c-c2a3-8091-af34-de5a81af171b)

**2.推理模型翻倍计费** 使用普通模型（如 Claude-3.7-Sonnet）每次扣 1 次快速请求，而推理模型（如 Claude-3.7-Sonnet-Thinking）每次扣 2 次。如果上下文超长，消耗还会进一步增加。

**3.按量计费（Usage-based Pricing） 机制** 用完 500 次快速请求后，可以开启按量计费，继续享受快速请求。 补充两个细节：模型调用和工具调用分开计费，每次请求的总费会用因模型和工具调用次数而异

![notion image](https://img.aiexplorernote.com/pic/cursor-usage-based-pricing.jpg?t=1d3d1f9c-c2a3-8088-82f5-fbf5a7ffaba4)

普通高级模型一次最多调用 25 次工具，高级推理模型最多 200 次。 按量计费产生的这部分费用会在累积到 $20 或下月月初（2号/3号）时收取

**4.Max 模型额外付费**

![notion image](https://img.aiexplorernote.com/pic/max-model-in-cursor.jpg?t=1d3d1f9c-c2a3-80cf-86c2-e600eab45396)

Pro 会员不包含 Max 级模型（如 Claude-3.7-Sonnet-Thinking-Max 或 Gemini-2.5-Pro-Max），即使是pro会员，使用这些模型也要单独付费，这些模型思考时间更长：我测试下来普通推理模型思考时间通常不超过 10 秒，而Max 模型一般 30 秒起步

Cursor虽然有这些小心思，但我觉得没什么。毕竟通过自己的API Key用过cursor的小伙伴都知道，它的对话上下文几乎都是拉满的状态，要是真用自己的API Key，用500次肯定不止20美元，甚至远超也说不定。再说500次之后还能继续用

之前在cursor里试了几次上下文都是2万token拉满

![notion image](https://img.aiexplorernote.com/pic/cursor-chat-context.jpg?t=1d3d1f9c-c2a3-80c2-9b20-c9d4df58be37)

所以我觉得20美元的月费没啥毛病，就目前来看，用的多的话充会员才是最省钱的选择。值吗？值！

## Cursor基础用法 & 注意事项

下面是 Cursor 的一些基础用法简介及需要注意的地方

### Cursor 核心功能与代码应用逻辑

Cursor、Windsurf 和 Trae 这类 AI 编程工具最早由 GitHub Copilot 领头起步，它们一般都会提供三个主要功能：**代码补全** 、**文件中对话** 和**自动应用代码** 。这里重点聊聊 **自动应用代码** 的能力

Cursor 的代码应用逻辑是这样的：AI 先生成需要修改的代码，然后通过专门的代码应用模型将代码写入文件，而不是直接在原文件上改动。而且应用修改时使用的是cursor自己训练的代码应用模型，不是我们与之对话的AI模型本身，这是我在和claude的对话中发现的

![notion image](https://img.aiexplorernote.com/pic/cursor-use-apply-model-to-apply-modified-code.jpg?t=1d3d1f9c-c2a3-804b-ac15-cc0493077dbe)

不过，这个机制也有个小瑕疵。由于大语言模型的随机性，AI（如 Claude）生成的代码和最终写入文件的代码偶尔会有些许差异。我之前好几次遇到这种情况：Claude 写好的代码和实际应用的代码不完全一致导致出现bug，起初还误以为是 Claude 的代码有问题

目前，这个问题暂时无法完全避免，只能稍微仔细一些

仔细想想，Cursor 的做法其实挺合理。单独训练一个专用于代码应用的模型有两大好处：一是相比 Claude 这样的通用模型，专用模型的代码生成准确率很可能更高（尽管仍然做不到完美）；另一个自然是是能以较低成本实现这一功能

### 代码库索引（Codebase Indexing）

每次打开新项目，首次对话时 Cursor 可能会显示“Codebase Not Indexed”（代码库未索引）。这是因为 Cursor 需要在处理第一个请求时，将代码库向量化，变成 AI 的“知识库”。这个过程就像我们在 Coze 或 Cherry Studio 中建知识库一样。

![notion image](https://img.aiexplorernote.com/pic/cursor-codebase-not-indexed.jpg?t=1d3d1f9c-c2a3-80ad-992c-ef42588678f9)

索引完成后，AI 就能更好地看到代码库上下文，提高回复质量。代码库是否索引完成可以通过打开 **Settings > Features**，向下拉即可看到代码库索引状态

![notion image](https://img.aiexplorernote.com/pic/cursor-codebase-indexing.jpg?t=1d3d1f9c-c2a3-80aa-887f-d5b11c39e049)

### 网页知识库（Docs）

在写这个教程时，我注意到索引功能下方还有个 **Docs** 功能

![notion image](https://img.aiexplorernote.com/pic/docs-function-in-cursor.jpg?t=1d3d1f9c-c2a3-8017-9a19-ce090c78175e)

看了一下，发现这也是一个标准知识库工具，但它只允许用户将线上网页索引为知识库。索引完成后，在对话中输入 **@docs** ，就能将这些资源作为上下文提供给 AI

### 隐私模式

Cursor 提供隐私模式开关，位于设置中。开启后，你的对话数据和代码不会被用于训练 AI。

![notion image](https://img.aiexplorernote.com/pic/privacy-mode-in-cursor.jpg?t=1d3d1f9c-c2a3-8084-a61a-e651b2390504)

### 自定义模型与 API Key

Cursor允许用户使用自己的模型。在 **Settings > Models** 中，你可以通过填写 **Base URL** 和 **API Key** ，将 Cursor 连接到自定义模型。这样就能在cursor中用自己的 API Key 与 AI 对话，模型选择完全自由

![notion image](https://img.aiexplorernote.com/pic/openai-api-key-in-cursor.jpg?t=1d3d1f9c-c2a3-80d3-9079-e8cc2c4fae9f)

### Rules 设置：控制 AI 行为

Curosr中的**Rules** （规则）相当于系统提示（System Prompt），定义了 AI 在处理指令时的背景和前提。Cursor 提供了多种 Rules 类型，如果不是程序员，一般只要关注以下两种：

![notion image](https://img.aiexplorernote.com/pic/rules-in-cursor.jpg?t=1d3d1f9c-c2a3-8025-aed6-d4143cacb248)

  * **全局 Rule** ：位于设置顶部，优先级最高，对所有对话生效

  * **Project Rules** ：仅对指定项目生效，每个项目需单独配置

### MCP 服务器配置（Windows 用户注意）

最近大火的 **MCP** （Model-Context-Protocol）功能需要在cursor中手动配置才能使用。官方文档多针对 Linux 和 macOS，Windows 用户可能会遇到点麻烦。以下是一个常见的 JSON 文件安装方法调整：

  * 将 npx 移到命令下方。

  * 在命令前加上 \c。

  * 将文件顶部改为 /cmd。

这是我现在安装的MCP服务器的Json文件，需要的小伙伴可以参考一下:

**注意** ：MCP 还有其他安装方式，具体问题具体分析，建议参考官方文档或社区教程

### 撤销操作与代码回退

最后还有一个觉得比较重要的是撤销操作，主要关系到AI写的代码万一有问题如何回退到之前的版本。.Cursor 提供了多种回退方式：

  * **回退检查点（Restore Checkpoint）** ：点击历史对话右下角的“Restore Checkpoint”，即可恢复到之前的代码状态

![notion image](https://img.aiexplorernote.com/pic/restore-checkpoint-in-cursoe.jpg?t=1d3d1f9c-c2a3-80e7-b7cc-c71e04d321c9)

  * **重新编辑历史消息** ：编辑并重新发送历史消息，Cursor 会提示“此操作将清除该消息后的所有更改”，效果等同于回退检查点

  * **接受/拒绝更改** ：AI 改完代码后，文件和对话框底部都会出现 **Accept All** 和 **Reject All** 选项。要注意的是，单个文件中的按钮只影响当前文件，如果 AI 修改了多个文件，且需要统一接受/拒绝所有更改，就要用对话框底部的按钮统一接受/拒绝

![notion image](https://img.aiexplorernote.com/pic/accept-and-reject-in-cursor.jpg?t=1dbd1f9c-c2a3-802b-923b-c15aa2664c99)

另外要特别注意的是，在 **Agent 模式** 下，AI 可能通过命令行删除文件，而命令行删除是无法恢复的！我之前就因为这个被AI删掉重要文件，幸好有备份，但半小时的对话进度只能重来

解决办法一是在 **Rules** 中明确禁止 AI 使用命令行删除文件（比如写上“禁止通过命令行执行删除操作”）。另外就是最好养成使用 **Git** 或 **SVN** 等版本控制工具的习惯，定期备份，防患于未然

以上就是我认为小白入门cursor首先需要了解的几个最基础的点，如果这篇对你有帮助，不要忘了点赞关注哦~
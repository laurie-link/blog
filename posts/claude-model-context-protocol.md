---
title: Claude开源新MCP协议，使Claude将能联网
date: 2024-12-07
tags: ["AI快讯"]
category: AI学习
---

相比 ChatGPT，Claude 使用上的一个主要痛点是 **无法联网** 。虽然大模型的联网能力对于一些真正的生产力任务帮助可能有限，但在解决简单问题时，如果能直接联网无疑会更加方便

Anthropic（Claude 的开发公司）并没有选择直接为 Claude 增加类似 ChatGPT 的联网功能，而是 开源了一个名为 **MCP（Model Context Protocol）的模型上下文协议** 。官方公告链接：


[Anthropic](https://www.anthropic.com)


## MCP 是什么？

MCP 是一个开源标准协议，专门用来帮助开发者扩展桌面版 Claude 的能力，比如**联网、访问外部数据源或其他定制化功能** 。这种统一的架构不仅提供了更大的灵活性，还简化了开发过程，让 Claude 能够适应更多的使用场景

## 为什么 Anthropic 没有直接为 Claude 加联网？

Anthropic 的做法非常巧妙，通过开放 MCP，将“是否联网”和“如何联网”的选择权交给用户和开发者 上次写了一篇给大模型加联网能力的具体看法，感兴趣的小伙伴可以看看[这篇文章](https://www.aiexplorer.rest/article/is-chatgpt-search-really-useful)

直接为大模型添加联网功能可能带来一些隐患

一方面，如果功能做得不够好，可能会被拿来和 ChatGPT 比较，甚至被嘲讽。另一方面，联网功能的实现和使用体验很难平衡，如果没有处理好用户需求，容易影响产品的口碑

通过开放 MCP 协议，Anthropic 巧妙地绕开了这个问题。用户可以根据自身需求决定是否需要联网，而联网的具体实现方式则交给开发者灵活设计，以适配各种使用场景

这种策略不仅避免了直接被拿来和 ChatGPT 作比较的风险，也让 Claude 的功能扩展变得更加灵活。高，实在是高

开发者同学感兴趣的可以了解下这个协议~
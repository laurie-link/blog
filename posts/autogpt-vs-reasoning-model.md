---
title: 推理模型 VS AutoGPT
date: 2025-02-13
excerpt: 推理模型路线真的正确吗
tags: ["深度AI博文"]
category: AI学习
---

最近思考了一下DeepSeek、o1这种推理模型和AutoGPT的区别，这篇文章来分享一下

23年三四月份ChatGPT火起来后，同年大概五六月份AutoGPT爆火，GitHub星星数一路狂飙，很快就超过十万颗星，跃居AI开源项目之最。看了下现在有十七万颗星，应该还是AI领域星星最多的项目

AutoGPT项目地址：

[AutoGPTSignificant-Gravitas • Updated Feb 19, 2025](https://github.com/Significant-Gravitas/AutoGPT)

先简单说下AutoGPT是啥。AutoGPT的目标是做一个能独立完成任务的Agent，而且这是在ChatGPT刚火起来时提出来的，非常前卫。它想做的Agent是像AI程序员Devin那样，人类给它一个任务，能从零到一自己完整完成一个项目的代理\(实际现在Devin还无法真正独立完成项目\)。或者像Gemini-1.5-with-deep-search、ChatGPT Deep Search那样，在人类给一个主题后，能独立搜寻网上信息，汇总、分析并撰写一个完整报告的代理，省去人类自己进行调研的时间

而且捣鼓过AutoGPT的朋友都知道，它在执行任务时，会和o1、DeepSeek-R1模型一样进行很多思考、推理，两者运行过程看起来很像。早期部署AutoGPT还相对简单，但现在变得很困难，我也不会搭建，官方开了一个内测申请通道，感兴趣的小伙伴可以申请看看。另外，AgentGPT是专门用AutoGPT打造的一个商业平台，有免费试用，搭建不了又真的想尝试可以去这个平台试用下，AgentGPT地址：


[Agentgpt](https://agentgpt.reworkd.ai)


但AutoGPT早期效果并不好，经常是连续跑好几个小时，API不知道烧掉多少钱，结果最后没得到结果或者得到的结果根本不能用。过去这么长时间，AutoGPT也没有宣布什么大改进，可能还和当初差不多

实际这也是当初o1模型出来时我不看好的原因，我想这不就是AutoGPT吗？AutoGPT有开源社区支持，十七万颗星，弄了那么久都没结果，OpenAI又能搞出什么名堂。感觉是弄不出GPT5，无路可走临时想出来的招，走不长远

尽管网上把o1、o3吹得神乎其神，什么博士水平乱七八糟的，个人感觉这就是它自己多思考了几步，我们和普通对话模型多对话迭代几次也能达到同样效果。这些纯推理模型好的一点可能就是让我们省掉这一些迭代步骤，少费点劲，所以我认为有一定意义，但不大。大模型这东西听别人讲没用，最重要还得自己试，对自己有用才有意义。比如o1高考数学每次都考满分，这和我有什么关系？我又不考高考数学

DeepSeek-R1能火是因为人家把价格打下来了，让世界人民都能用上大模型，这并不意味着R1效果多么多么好

但gemini-1.5-pro-with-deep-search和ChatGPT Deep Search的出现表明，现在这些推理模型效果确实比AutoGPT好。它们都基于推理模型，结合网络搜索能力实现。同样的任务AutoGPT基本完不成，而两个新的Deep Search都能给出不错的答案，ChatGPT Deep Search我没试过，只有200美刀一月的Pro会员能用，不过据说能连续工作三四个小时并给出报告（不会是有人工在后面写好提交的吧，手动狗头），给出的报告也很详细

我觉得有可能是实现方式导致了现在推理模型和AutoGPT效果上的差异。前者通过训练、微调，从根上让大模型实现推理，后者则通过各种组合Prompt，从指令遵循层面让大模型推理、进行链式思维。应该原生的还是更加自然，性能更好一些

Agent确实是未来AI发展的主要方向，期待未来各家AI带来更多像1.5-with-deep-search和chatgpt deep search这种真正能大幅提升生产力的工具
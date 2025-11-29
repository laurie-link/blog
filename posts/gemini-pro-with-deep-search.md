---
title: Gemini大更新，完虐ChatGPT
date: 2024-12-12
excerpt: o1在它面前不值一提
tags: ["AI快讯"]
category: AI学习
---

今天Gemini发布两个新模型，两个都非常惊艳！

两个模型分别是“1.5 Pro with Deep Search"和”2.0 Flash Experimental“

![notion image](https://img.aiexplorernote.com/pic/gemini-with-deep-search.jpg?t=15ad1f9c-c2a3-80c2-86a2-cd6d309138a2)

体验了下第一个模型，本来以为这个已经够惊艳了，没想到看完介绍文档，发现第二个模型也强得离谱

## 1.5 Pro with Deep Search

这个模型走的是和ChatGPT o1模型一样的Agent路线，当用户给Gemini一个需要研究的主题，Gemini 1.5 Pro with Deep Search会首先使用Gemini1.5 Pro 模型生成一个研究该主题的规划，询问用户是否按照它写的规划进行主题研究

用户确认后，Gemini会分出多个”分身“，利用谷歌搜索引擎从网上寻找资源，最后生成一个详尽的报告

今天用了一天，生成的报告我基本都是比较满意的。就比如我让它根据主题”share spotify songs"写一篇文章，最后把它写的文章和我自己写的文章进行对比，发现它只用几分钟，写出来的文章完成度上已经达到我写的文章的百分之六七十

说起来这个功能和谷歌前几个月发布的NotebookLM还挺像的，都是生成一个报告的形式。NotebookLM是播客形式的报告，1.5 Pro with Deep Search则是书面形式的报告，而两者给我的感觉都非常惊艳！

莫名想把这个和ChatGPT 的o1进行对比，就给生产力带来的效益，1.5 Pro with Deep Search 对于我来说完虐o1。o1只是推理能力强，做数学题可以，但我不做题啊！我日常大部分的工作都和互联网信息有关，Gemini的这个新模型将能节省我很多搜集信息的时间

## 2.0 Flash Experimental

这个模型是之前Gemini的普通版升级，但这可不是像ChatGPT 3.5到GPT-4o-mini那样的升级哦！

首先它在生成速度比原先的旗舰模型Gemini 1.5 Pro快两倍，然后你猜怎么着？它还在几乎所有测试维度中超过Gemini 1.5 Pro！看官方给出的对比图：

![notion image](https://img.aiexplorernote.com/pic/gemini-1.5-pro-vs-gemini-flash-2.jpg?t=15ad1f9c-c2a3-800c-8cfc-e7bdf332f63a)

只有“长上下文”这一项的表现能力flash 2.0比1.5 Pro低了13个百分点，其他均是Flash2.0更高

但这并不是Gemini Flash 2.0最亮眼的地方，真正逆天的是它”All in one"的能力。熟悉ChatGPT的同学都知道GPT-4-all这个模型，它是GPTs的底层模型，原生支持联网、画图

而Gemini Flash 2.0转为成为AI代理而生，原生支持的能力有：

  1. 多模态输入，包括视频，音频，图片

  2. 多模态输出，包括图片，音频，语音转文字

  3. 原生调用谷歌搜索

  4. 支持代码执行（类似于chatgpt的代码解释器）

  5. 支持函数调用 可能还有其他的我没看到，这些能力无疑极大得方便了AI Agent的开发

下面让我们看看谷歌基于这个模型已经开发出来的一些功能

### Project Astra--AI贾维斯

这个项目的发展方向是将手机、眼镜这类硬件打造成用户的生活助手。不知道大家是否记得谷歌去年12月发布的一个乌龙视频，那个视频后来谷歌自己承认是剪辑的，Project Astra要实现的就是那种效果。今年12月，谷歌看起来真的实现了这个能力（还没开放） 官网演示视频：

![Video preview](https://i.ytimg.com/vi/hIIlJt8JERI/hqdefault.jpg)

### Project Mariner--真正的浏览器代理

这个项目是让Gemini实时获取用户浏览器上的信息，并通过一个插件自动在用户的浏览器上完成一些操作。Project Mariner发展好了将会成为一个非常好的RPA工具，节省大量重复性劳动工作

![notion image](https://img.aiexplorernote.com/pic/project-mariner.jpg?t=15ad1f9c-c2a3-8004-84f2-ce9e9413e60d)

官网演示视频：

![Video preview](https://i.ytimg.com/vi/2XJqLPqHtyo/hqdefault.jpg)

### Jules--谷歌开发的Devin

程序员同学应该听过上半年爆火的Devin，没错，就是那个能够独立完成项目开发的AI程序员。Jules是谷歌基于Gemini Flash 2.0开发的AI程序员，能够“自动集成GitHub工作流，解决问题、制定计划并执行计划”

## 小结

不知各位看完谷歌发布的这些更新有什么感觉，我感觉真挺牛的。OpenAI这几天的更新我倒没什么感觉，除了被那个200美元吓到哈哈

参考资料：


[Blog](https://blog.google)


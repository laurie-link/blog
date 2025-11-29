---
title: 最近发现的一个超强插件
date: 2025-02-17
excerpt: 一个插件实现联网+本地知识库，无需复杂安装
tags: ["AI工具", "AI项目"]
category: AI学习
---

插件地址：


[Github](https://github.com/n4ze3m/page-assist))


它的开源项目地址：

[page-assistn4ze3m • Updated Feb 17, 2025](https://github.com/n4ze3m/page-assist)

这个项目有如下特点：

  1. 支持通过GUI页面与本地模型对话，再也不用自己写GUI页面与ollama模型对话啦

  2. 有联网功能，且同时支持本地模型、API模型，可自行设置网络搜索提示词

  3. 可上传图片给大模型分析

  4. 支持知识库功能，同时支持使用本地和API嵌入模型，且可自行设置知识库参数，如嵌入大小、嵌入重叠，以及自定义RAG提示词

  5. 支持语音转文字输入和OCR图片识别文字输入

  6. 多种格式导出对话记录

  7. 完整的Markdown渲染

  8. 支持导出对话记录

  9. 支持使用系统提示词

  10. 支持修改API模型参数，如温度、Top K这些

  11. 最重要的一点：安装极其简单，只需要像安装其他浏览器插件一样在浏览器插件上点钟安装这个插件即可

可以说这个项目集合了它的“前浪”，如ChatGPT Next Web，Lobechat等优秀项目的所有优点。且具备知识库功能，这直接替代掉了我平时使用的ChatOllama。ChatOllama最大的问题就是部署比较麻烦，要用到docker，而且通过API调用嵌入模型做知识库时有些问题。这个插件完美解决了这些问题

个人认为虽然此插件的Github星星没有ChatGPT Next Web这种项目多，甚至差得很远，但功能上实际已远超ChatGPT Next Web，很有点DeepSeek R1以超低成本赶上ChatGPT的感觉

唯一的问题在于修改API参数做得不是很好，只支持临时为对话设置参数，且调节参数只支持手动输入，没有滑块调节，使用起来很不方便

![notion image](https://img.aiexplorernote.com/pic/page-assisatant-api-parameters-adjustment.jpg?t=19dd1f9c-c2a3-8033-b00f-e586be39a1bf)

不理解为什么其他功能做那么好，这个功能做成这样，可能后面会改进吧。总的来说这个插件还是非常值得推荐的，分享给大家~
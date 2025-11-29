---
title: ChatGPT将正式接入IDE，Cursor瑟瑟发抖！
date: 2024-11-16
tags: ["AI快讯"]
category: AI学习
---

今天OpenAI在MacOS的ChatGPT应用程序上正式推出辅助编辑代码的功能

先说结论，看了下官网的介绍，应该和Cursor，GitHub Copilot这类现有的协作式AI编程工具差不多。如果好用的话可能Cursor就凉了，毕竟应该很少人会在订阅了20美刀ChatGPT的基础上再另外花20美刀订阅Cursor

官网介绍文章：


[Static](https://static.intercomassets.com)


官方介绍视频：


[I0](https://i0.hdslb.com)


现在暂时只是像ChatGPT Plus和Team用户开放这个功能，且只有Mac端应用程序有。接下来几周将陆续向企业用户和教育用户开放

使用方法： 在对话框中点击“Work with Apps”按钮，并点击对应App旁边的“Enable”按钮，ChatGPT就能读取该应用程序中的内容，将其作为上下文参考回复用户的问题

![notion image](https://img.aiexplorernote.com/pic/work-with-apps-button-in-chatgpt.png?t=13fd1f9c-c2a3-8014-86e2-cbe4488fe2bb)

把鼠标悬浮在对应应用程序的Banner上，就会高亮出ChatGPT参考的应用中的代码：

![notion image](https://img.aiexplorernote.com/pic/see-what-content-refered-by-chatgpt.png?t=13fd1f9c-c2a3-80df-ba5b-e678305e6b6e)

值得注意的是，OpenAI说这些被参考的代码也会像一般的对话记录一样作为历史记录保留下来，并不是像RAG一样只在当次查询中有效

在使用这个功能时，发送给ChatGPT的上下文将包括如下内容：

  * **在编辑器和集成开发环境（IDE）中（如 Xcode、VS Code、TextEdit）** ：
    * ChatGPT 会获取当前打开的编辑器窗口中全部的内容，直到达到一个截断限制。
    * 如果你在编辑器中选择了某段文本，ChatGPT 会将焦点集中在你选择的部分。即使如此，编辑器窗口中的所有内容仍然作为上下文被包含在内。

  * **在终端中（如 Terminal、iTerm）** ：
    * ChatGPT 会获取当前打开的终端窗口中的最后200行内容。
    * 如果你在终端窗口中选择了文本，ChatGPT 会聚焦于选中的文本，并且会包括选中部分周围的文本，直到达到截断限制。

有一点需要注意的是，通过这个功能发送给ChatGPT的代码是有可能被OpenAI拿来训练的，重要代码最好不要轻易通过这个功能发送给ChatGPT
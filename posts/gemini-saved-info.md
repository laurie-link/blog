---
title: Gemini新增记忆功能
date: 2024-11-24
excerpt: 类似于ChatGPT的记忆功能
tags: ["AI快讯"]
category: AI学习
---

谷歌Gemini这两天新增了一个“Saved info”功能，本质上和ChatGPT的记忆功能一样，会在对话过程中记住有关用户的信息

只需要在对话的过程中跟Gemini或者ChatGPT说要记住某些信息，它们就会把这些信息放在自己的后台的“记忆”里

![notion image](https://img.aiexplorernote.com/pic/chatgpt-mrmorizes-user-info.jpg?t=148d1f9c-c2a3-807e-9611-d064fbfd6ca1)

上面之所以没有放Gemini记住信息的截图，是因为我试了一下感觉并不像ChatGPT的记忆功能那么灵敏，应该是还没有训练到位

![notion image](https://img.aiexplorernote.com/pic/gemini-fails-to-remember-user-info.jpg?t=148d1f9c-c2a3-8024-9066-e80342ab693f)

这就需要我们自己到后台添加相应的信息

![notion image](https://img.aiexplorernote.com/pic/gemini-saved-info.jpg?t=148d1f9c-c2a3-809d-904a-f6707d7853f9)

Gemini比ChatGPT好的一点是Gemini允许用户到后台直接输入内容作为Gemini的记忆，而要修改ChatGPT的记忆只能通过在对话窗口和它对话实现。有时候想让ChatGPT记住的内容和它自己理解然后选择的要记忆的内容不一样，就不得不迭代提示词知道它记住的东西和我想让它记住的东西差不多为止，这个比较麻烦

关于识别是不是该记住用户说的信息的灵敏度，虽然说现在ChatGPT比Gemini强一些，但是又有点强的过头了。好几次我并不想让他记住某些信息它也自动记住，特别是在使用高级语音模式的时候

这个弊端在于会导致以后的对话传递给ChatGPT的信息中”噪声“增多，影响对话质量，因此每次ChatGPT记住了某些我不想它记住的信息，我都要去后台删一下。相比于主动去后台给ChatGPT加记忆，实际上我去给它删记忆的情况是更多的

所以其实这个还是要优化一下，找到中间的一个平衡点
---
title: 把chatgpt接入智能音箱、家居
date: 2024-11-25
tags: ["AI项目"]
category: AI学习
---

发现一个可以把ChatGPT接入智能音箱的项目，项目地址：

[wukong-robotwzpan • Updated Jan 25, 2025](https://github.com/wzpan/wukong-robot)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F5a0fc4a1-625f-48fd-a23d-52bb6b3a8a26%2Fwukong-robot.jpg?table=block&id=149d1f9c-c2a3-8021-aca8-e0b9c106e92f&t=149d1f9c-c2a3-8021-aca8-e0b9c106e92f&width=336&cache=v2)

项目介绍：

  1. 模块化：功能插件、语音识别、语音合成、对话机器人都做到了高度模块化，第三方插件单独维护，方便继承和开发自己的插件。

  2. 中文支持：集成百度、科大讯飞、阿里、腾讯、OpenAI Whisper、Apple、微软Edge、VITS声音克隆TTS 等多家中文语音识别和语音合成技术，且可以继续扩展。

  3. 对话机器人支持：支持基于 AnyQ 的本地对话机器人，并支持接入图灵机器人、ChatGPT 等在线对话机器人。

  4. 全局监听，离线唤醒：支持 Porcupine 和 snowboy 两套离线语音指令唤醒引擎，并支持 Muse 脑机唤醒以及行空板摇一摇唤醒等其他唤醒方式。

  5. 灵活可配置：支持定制机器人名字，支持选择语音识别和合成的插件。

  6. 智能家居：支持和小爱音箱、Siri、mqtt、HomeAssistant 等智能家居协议联动，支持语音控制智能家电。

  7. 后台配套支持：提供配套后台，可实现远程操控、修改配置和日志查看等功能。

  8. 开放API：可利用后端开放的API，实现更丰富的功能。

  9. 安装简单，支持更多平台：相比 dingdang-robot，舍弃了 PocketSphinx 的离线唤醒方案，安装变得更加简单，代码量更少，更易于维护，并且能在 Mac 以及更多 Linux 系统中运行。

项目Demo：

  1. wukong-robot + ChatGPT 实现支持流式对话的智能音箱（一分半钟）：https://www.bilibili.com/video/BV1Bh411g7t2

  2. 粉丝向定制版，演示对话+音+开放API+智能家居（五分钟）：https://www.bilibili.com/video/av50685517/

  3. 使用脑机唤醒 wukong-robot：https://www.bilibili.com/video/av76739580/

  4. Google AIY Voice Kit + wukong-robot：https://www.bilibili.com/video/av81173082/

  5. Siri 联动 wukong-robot + ChatGPT：https://www.bilibili.com/video/BV1yY4y1y7oW

  6. 小爱同学联动 wukong-robot：https://www.bilibili.com/video/BV1eg4y1b75Y

  7. 教程：基于树莓派&wukong-robot&VITS的AI泠鸢开源智能音箱的初步实现（by @二维环状无限深势阱）：https://www.bilibili.com/video/BV1Sc411K7dv

  8. 教程：实现一个虚拟管家：贾维斯\(by @Echo）：https://zhuanlan.zhihu.com/p/655865035

不过部署看了一下感觉有点麻烦呦
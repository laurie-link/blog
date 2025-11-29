---
title: 如何登录Gemini CLI
date: 2025-06-26
tags: ["AI工具"]
category: AI学习
---

前面步骤就跳过了，直接看怎么解决登录的时候登不进去

首先，这跟你如何科学上网有密切关系。Gemini CLI 这种命令行工具和一些底层应用，默认不会像浏览器、一些带有图形界面的应用程序一样读取系统代理。这时候需要开启 Tun 模式或使用软路由，才能让所有流量都走代理

但是要确保你的科学上网工有开启 Tun 模式的选项。可能一些专有的代理客户端没有这个选项，可以看看有没有提供订阅链接，如果有的话就能通过 clash 和 v2rayn 实现科学上网，然后在clash 或 v2rayn 中开启 Tun 模式

## 开启 Tun 模式

开启 Tun 模式很简单

V2rayN 开启 Tun:

直接点击主界面下面的"Enable Tun"，重启软件就行

![notion image](https://img.aiexplorernote.com/share-google-account/enablr-tun-in-v2rayn.jpg?t=21ed1f9c-c2a3-8090-8f36-ed1c68ed070c)

Clash 开启 Tun:

也是在主界面，有一个开关

![notion image](https://img.aiexplorernote.com/share-google-account/enablr-tun-in-clash.jpg?t=21ed1f9c-c2a3-803b-ad57-d3d3e8051489)

要注意的是，开启 Tun 模式后会导致某些应用程序网速变慢，比如 Cursor，国内流量速度也会变慢，这时可以考虑使用 gemini API key 登录

## 使用 gemini API Key 登录

Gemini CLI 还有一个通过 gemini API Key 登录的方式，但现在这个方式有 bug，即选择通过 gemini API Key 的登录方式依然要通过浏览器完成授权，这是脱裤子放屁。API key 本身就已经完成授权，理论上只要输入 API Key 就应该能使用。这种登录方式专门用于一些没有图形界面的环境中完成授权，比如 Linux 系统上

这个 Bug 导致无法在一些没有图形界面的 Linux 系统上使用 Gemini CLI，也有人在项目讨论中指出这个问题，应该后续会修复

这不影响我们先说下怎么通过 gemini API Key 登录，主要面向一些小白用户

首先来到 AI Studio, 网址：

<https://aistudio.google.com/>

点击上方"Get API Key"

![notion image](https://img.aiexplorernote.com/share-google-account/click-get-api-key-in-ai-studio.jpg?t=21ed1f9c-c2a3-80f8-a274-fd95bd462815)

然后再点击右上角"创建 API 秘钥“

![notion image](https://img.aiexplorernote.com/share-google-account/create-ai-studio-api-key.jpg?t=21ed1f9c-c2a3-802c-bc96-d43ec0469c9e)

如果你没有在谷歌云控制台创建过项目，会提示你去创建一个，点击中间的“google Cloud 控制台”

![notion image](https://img.aiexplorernote.com/share-google-account/go-to-google-cloud-console.jpg?t=21ed1f9c-c2a3-80db-a975-cd09151d50db)

点击创建项目

![notion image](https://img.aiexplorernote.com/share-google-account/create-projects-in-google-cloud-console.jpg?t=21ed1f9c-c2a3-80af-9b50-dab0e575a8f8)

到这里就可以返回 AI Studio 并创建 API Key，会提醒你选择一个现有项目或创建新项目，就选择刚才创建的项目

![notion image](https://img.aiexplorernote.com/share-google-account/create-gemini-api-key.jpg?t=21ed1f9c-c2a3-8047-92de-ccfb48664815)

到这里就可以啦，复制 API Key 即可

下面需要将这个 API Key 添加到环境中让 gemini CLI 读取，在 Windows 上，用以下命令:

Linux 上用这两行命令:

## 小结

对于一个命令行工具来说，使用 API Key 登录肯定是最好的方式，但现在还要等待官方修复 bug

另外我试过通过设置终端代理登录，确实能登录，但聊一两句就会自动退出，应该是这种方式容易出现网络抖动，所以不算一个解决办法

2025-07-09更新

我发现除了开启Tun模式，还需要在终端设置系统级代理才行，甚至貌似只要在终端设置代理就行了，在终端设置代理的方法:

  1. 用管理员身份打开powershell

  2. 输入下面的命令，你需要根据自己使用的魔法工具更改端口:

执行完关闭窗口重新打开powershell应该就可以了

Mac我不知道终端工具是什么，不过道理是一样的，使用Mac的小伙伴自己研究下哈
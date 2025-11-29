---
title: 如何解决Discord登录时一直更新的问题
date: 2025-09-13
tags: ["互联网"]
category: 互联网技巧
---

Discord 网页版还相对好登录一些，但桌面版登录时需要一个小技巧，否则你会看到它一直转圈，像这样：

![notion image](https://img.aiexplorernote.com/pic/e-mail-forward20250913223248.png?t=26dd1f9c-c2a3-802a-bf7c-e8334db8b923)

我看知乎上这个问题有 19 万的阅读量，但居然没有一个人回答！

今天我们就来解决这个问题

其实是跟魔法有关系，Discord 的流量似乎默认不走代理，所以我们必须强制让它走代理

要做到这一点，需要开启魔法工具的 Tun 模式，使得所有流量全部走代理

这里演示如何在 V2rayN 以及 Clash 上开启 Tun 模式

V2rayN 开启 Tun:

直接点击主界面下面的"Enable Tun"，重启软件就行

![notion image](https://img.aiexplorernote.com/share-google-account/enablr-tun-in-v2rayn.jpg?t=26dd1f9c-c2a3-80d5-8aec-efcd1e52bb4f)

Clash 开启 Tun:

也是在主界面，有一个开关

![notion image](https://img.aiexplorernote.com/share-google-account/enablr-tun-in-clash.jpg?t=26dd1f9c-c2a3-808b-81ed-f12e763d2aea)

开启后，关闭 Discord 重新打开，这时候就能正常更新并进入软件啦

![notion image](https://img.aiexplorernote.com/pic/e-mail-forward20250913230045.png?t=26dd1f9c-c2a3-8017-83e2-fb27519b164c)

登录软件后，建议把 Tun 模式关掉，因为登录 Discord 后即使不开 Tun 模式也能正常使用，开着这个有时候会导致某些奇奇怪怪的网络问题

如果你不想开启 Tun 模式，理论上也可以通过修改分流规则，使 Discord 流量默认走代理，这个问下 AI 咯~

💡

很奇怪的是今天测试时，我自己的电脑尽管已经打开Tun模式\(v2rayn\)，但仍然进不去，公司的电脑用这个方法又是可以的，可能和v2rayn客户端本身有关系，得卸载重装啥的可能
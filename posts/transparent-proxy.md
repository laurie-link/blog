---
title: 闲置设备充当透明代理，不碰一行代码，无需Root，丢掉第三方代理客户端
date: 2024-12-05
excerpt: 最简单的透明代理搭建
tags: ["技术"]
category: 技术分享
---

这里所说的透明代理也可以叫软路由，旁路由等。名称不重要，只要知道它可以让你在不使用第三方代理客户端的情况下与目标服务器进行通信。这里的目标服务器是什么就不说了，懂的都懂

透明代理一个比较有意思的玩法是在家中的一个设备上配置代理，然后通过wifi将代理共享给家中其他所有设备，实现在家中其他设备上不使用第三方代理客户端就直接与“外部网络”通信。这可以提高上网冲浪的体验

我这两天才接触透明代理，但是发现了一个很简单的方法，不需要像配置 OpenWrt 路由器或 Linux 那样复杂。主要针对安卓设备，无需Root，很方便。另外这篇文章还会分享一个在windows上实现透明代理的方法，但不知道Mac能不能做类似的实现。两个方法都不需要碰一行代码，终端都不需要。

## 用闲置安卓设备充当透明代理

先来看看如何在安卓设备商实现透明代理

首先，全程使用魔法，这个不讲

小Tip: 你可以先到手机设置中，查看热点设置选项中有没有一个叫“允许热点使用VPN”的选项。如果有，恭喜你，下面的步骤不用看了，因为现在其他设备连接你的热点已经可以直接共享你的VPN连接，透明代理已经配置好了

如果你的手机没有类似的设置选项，请继续往下看

第二步，到谷歌商店，下载一个叫"VPN share"的软件

![notion image](https://img.aiexplorernote.com/pic/vpn-share.jpg?t=152d1f9c-c2a3-802c-a367-d5ebace8cda6)

第三步，下载安装好以后，在主页把VPN共享开关打开，如图

![notion image](https://img.aiexplorernote.com/pic/turn-on-vpn-share.jpg?t=152d1f9c-c2a3-803a-b45f-ec956c550f41)

第四步，在你需要连接WiFi的设备上，连接你刚才打开的热点

第五步，进入WIFi设置选项，点击“代理”，然后选择“手动”。出来的“主机名”和“端口”分别填写上面VPN share让填写的内容，即： 主机名：192.168.117.205 端口：8181

![notion image](https://img.aiexplorernote.com/pic/config-proxy-settings.jpg?t=152d1f9c-c2a3-8059-a9f3-fdca99562b4a)

现在，你已经能正常访问外部网络啦！是不是超级简单

我使用的是平板，平板可以像电脑一样同时开热点和WIFi，如果是闲置的安卓手机，则需要插卡才能像这样作为透明代理

小Tip: 1. 为避免长时间无连接自动关闭热点，你可以在平板或手机上设置不自动关闭，这样以后一到家自动连接马上就能直接“上网”了

2.如果觉得网速不够快，我看到有那种转换器可以把家里的光纤直接接到手机上，也可以试试哈哈。不过我用起来基本上一般的场景和直接用代理客户端没很大区别

## 用闲置电脑充当透明代理

这个也是比较简单的，只要你的代理客户端支持开启Tun模式就行。我使用的是V2rayn，clash也可以。这里用V2rayn为例

第一步，开启你的魔法

第二步，打开V2rayn下方的Tun模式，如果要求你重启，那就重启后再开启Tun模式

![notion image](https://img.aiexplorernote.com/pic/turn-on-tun-mode.jpg?t=152d1f9c-c2a3-801f-a204-d96782bdb741)

第二步，打开电脑热点

第三步，来到控制面板，点击网络和互联网

![notion image](https://img.aiexplorernote.com/pic/network-and-intetnet.jpg?t=152d1f9c-c2a3-80b0-bcfa-e1afd3db0e0e)

第四步，点击网络和共享中心

![notion image](https://img.aiexplorernote.com/pic/network-and-sharing-center.jpg?t=152d1f9c-c2a3-8059-bbd3-cf19a3015e31)

第五步，点击更改适配器设置

![notion image](https://img.aiexplorernote.com/pic/change-adapter-settings.jpg?t=152d1f9c-c2a3-803a-acef-dd8bd4838543)

这时候因为你前面开启了Windows的热点和V2rayn的Tun模式，你应该看到一个“singbox\_tun"和一个”本地连接“的连接，如图

![notion image](https://img.aiexplorernote.com/pic/choose-network-settings.jpg?t=152d1f9c-c2a3-80f6-9fa8-e5cceebb5381)

第六步，右击“singbox\_tun"的连接，选择”属性“，选择第二个”共享”页，勾选第一个“允许其他网络用户通过此计算机的 Internet 连接来连接”，在“家庭网络连接”中选择上面提到的“本地连接”那个连接。最后点击确认，完整流程如图：

![notion image](https://img.aiexplorernote.com/pic/vpn-share-on-windows.jpg?t=152d1f9c-c2a3-80d9-be61-d62af68661e8)

现在，用其他设备连接你电脑的热点，你又能不用代理客户端直接“上网”啦！

## 小结

昨天搭建好以后，今天回家真的直接自动连接WiFi就可以“上网”了。明天打算把公司的电脑也配置好，这样我倒公司又能直接用了。甚至再进阶，使用内网穿透，实现不连接WiFi也能直接连接到透明代理，这个等我研究研究

如果文章对你有用，别忘了一键三连哦~
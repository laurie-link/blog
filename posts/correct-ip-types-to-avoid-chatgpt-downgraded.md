---
title: 弄清楚了！用这种IP使用ChatGPT就不会被降智
date: 2025-01-10
tags: ["深度AI博文"]
category: AI学习
---

直接上干货：

首先，如果不知道你魔法的IP，可以通过whatismyip查看。提前打开你的魔法环境，然后来到这个网址：


[Whatismyip](https://www.whatismyip.com)


当你打开这个网站，它会自动检测你的IP并显示

![notion image](https://img.aiexplorernote.com/pic/whatismyip1.jpg?t=177d1f9c-c2a3-80cf-b1a5-f49db1ed0849)

复制你的IPV4或者IPV6地址，来到ipinfo，没账号的话先注册登录:

[ipinfo.iohttps://ipinfo.io/account/search](https://ipinfo.io/account/search)

查看ASN与company下方两个type字段

![notion image](https://img.aiexplorernote.com/pic/asn-and-company-type-in-ipinfo.jpg?t=177d1f9c-c2a3-8029-88f7-edcd956138ad)

重点来了：不能两个全部是”hosting"，这种IP是纯机房IP，现在必降智。我有一个机房IP，在[scamalytics](https://www.aiexplorernote.com/blog/scamalytics)中显示风险值为8，已经算高纯净度IP，但依然被降智

排除机房IP，不会被降智的IP类型还剩下以下几种：

  * **hosting + isp**

  * **business + business**

  * **business + isp**

  * **isp + isp**

但我不清楚欺诈值是否会有影响，我现在用的这个ip在scamalytics中是显示0欺诈值，这个应该影响不是很大，重要的是类型

除IP以外，是否会降智还取决于线路质量，主要指网页端，只要IP正常，客户端使用都不会有问题（桌面端+移动端）。明天出个详细文章说明一下，感兴趣的小伙伴记得点个关注哦~
---
title: IP纯净度、节点质量检测攻略
date: 2024-12-13
tags: ["互联网"]
category: 互联网技巧
---

前几天推荐过一个检测IP纯净度的网站：[scamalytics](https://www.aiexplorernote.com/article/scamalytics)，文章阅读量还不错。今天给大家分享另外两个我常用来检测IP、节点质量的工具和方法

scamalytics这里就不说了，感兴趣的小伙伴可以看上面提到的那篇文章

## Whoer

网址：


[Whoer](https://whoer.net)


当你来到这个网站，它会自动检测你当前IP，显示你当前节点的伪装程度，如图所示：

![notion image](https://img.aiexplorernote.com/pic/anonymousness-presented-in-whoer.jpg?t=15bd1f9c-c2a3-808a-9c43-ffcfa6a52676)

一般90%是比较安全的，我点开“更详细”里面的优化建议，里面让我更换时区什么的，那个应该会改变系统时间，导致我没法正常看时间就没弄

这个网站还有其他一些检测节点质量的功能，往下拉，先来看“DNS 泄露测试”

![notion image](https://img.aiexplorernote.com/pic/dns-leak-testing-in-whoer.jpg?t=15bd1f9c-c2a3-80cc-acfb-e7bad8208c3b)

我们每次访问网站时，会先向DNS服务器发出DNS请求，DNS服务器把这个请求中的网址转换为IP地址后与目标网站的服务器建立连接进行通信。如果发生DNS泄露，DNS请求发送到其他ISP的DNS服务器，这个ISP将知道我们访问的所有网站，甚至劫持DNS请求导致无法我们正常访问目标网站，所以需要确保没有DNS泄露发生

点击Whoer中的DNS泄露检测后，可以看到类似如下的界面：

![notion image](https://img.aiexplorernote.com/pic/dne-leak-testing-result-in-whoer.jpg?t=15bd1f9c-c2a3-806d-a2ec-c9cb39ea43fa)

这里不是很清楚它如何定义DNS泄露，我的节点是专门把DNS服务器设置为谷歌，没有另外搭建DNS服务器，所以其实也不算DNS泄露

相信大多数小伙伴检测出来都是红色，显示DNS不受保护，大家也没办法确定自己的节点如何处理DNS服务器。但其实还有一个判断DNS是否泄露的方法，就是看后面的国家。比如你在大陆，设置了美国的节点，却突然冒出来几个DNS服务器显示在中国，那就是DNS泄露了

另一种情况是检测结果中大部分DNS服务器显示在美国（举例），但有几个显示在其他国家。这种节点一般来讲也能用，然而在那些对IP质量要求高的场景中，这种节点往往都不得行。我的测试中，质量高的节点情况都是：ISP那列全部相同，比如都是谷歌，国家那列全部相同，比如都是美国

下面来看Whoer的端口扫描功能，在主页点击这个按钮

![notion image](https://img.aiexplorernote.com/pic/port-testing-in-whoer.jpg?t=15bd1f9c-c2a3-808f-9b9a-dad8d8d969b9)

我看的几个节点都是绿色的，没有开放什么异常端口。常见端口一般就是22、80、443。开放端口越多越容易被攻击和探测，影响伪装性和匿名性

![notion image](https://img.aiexplorernote.com/pic/port-tesing-result-in-whoer.jpg?t=15bd1f9c-c2a3-8091-9261-cbb013f70148)

Whoer还有一个“Evercookie”的检测功能，扫了一眼感觉挺复杂就没折腾，感兴趣的小伙伴可以去了解一下

## IPinfo

网址：


[Cdn](https://cdn.ipinfo.io)


这个主要用来检测IP类型。IP一般分为三种：住宅IP（或家宽IP），商业IP，以及数据中心IP（也经常被称为机房IP）。住宅IP是运营商分配给个人，家庭的IP。这种IP受限少，正常拿来办卡，注册都没问题。商业IP是公司，企业的IP。数据中心IP则是经常被用来建机场的IP，导致这种IP基本都被服务商标记，无法用于从事一些对IP质量要求高的业务

当你来到ipinfo官网，它会自动检测你当前IP并显示在输入框中。往下拉结果，查看其中两个“type”（类型）的字段，如果显示是“ISP”就是住宅IP，显示是“bussiness"是商业IP，”hosting“则是机房IP

![notion image](https://img.aiexplorernote.com/pic/ip-type-in-ipinfo.jpg?t=15bd1f9c-c2a3-80b6-8c6b-daed96c975a6)

如果两个”type“字段都是”ISP“，那么恭喜你，你的IP是原生住宅IP，可以拿来进行绝大部分业务。像我上图中显示的这个IP，一个是”business“，一个是”ISP“，应该是公司向运营商购买住宅IP后卖给个人的。伪装性上比双ISP住宅IP差一点，不过也不错。还有一种最常见的，就是两个都显示”hosting"，大部分机场都是用的这种IP。这种IP正常上网可以，但用来注册，充值什么的很容易触发风控，导致业务无法正常进行

## IP和节点有什么区别

本文将IP和节点混着讲，可能大家有点云里雾里，这里说下IP和节点的区别

科学上网主要分两种方式，一种是通过节点，另一种是通过IP。通过节点就是大多数小伙伴用的，使用一个代理客户端上网。通过IP就比较小众了，我也没用过，只是在一些Up的视频里见过。总的来说这两种方法差不多，区别在于通过IP上网可以更好地控制IP类型，纯净度

节点是搭建在一个个服务器上的VPN，这些服务器都有自己的IP，所以检测节点的质量也是在检测它们IP的质量。检测节点质量其实对大多数人来说没什么意义，找到一个符合上述所有标准的机场节点难如登天，至少我找不到，虽说现在机场遍地都是

这并不是说通过IP上网就更好，如果你使用的是住宅IP，一般运营商都会限制这种IP的带宽，导致用起来网速比较慢，尽管它的纯净度比较高。除了速度慢，住宅IP的价格也比较贵，所以住宅IP建议只是注册、充值什么的暂时用一下

如果真的对IP纯净度要求比较高，建议使用住宅IP上网
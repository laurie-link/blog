---
title: 最新版AI接入QQ教程
date: 2025-01-05
tags: ["深度AI博文", "AI项目"]
category: AI学习
---

本教程介绍的部署方式可以将国内、国外各种AI同时接入QQ。另外配置简单，无需魔法

实现方式是通过中转API Key，现在中转API Key大多数支持一个Key同时调用多种模型，这样就可以绕过在项目本身配置多种接入方式的麻烦，且大大降低维护成本。实际上，本教程使用的项目起初专门做多种AI接入QQ，后来项目停止维护，个人猜测就是因为中转API Key的出现。另外，中转API一般会在后端代理，这样国内用户在使用时可以不开魔法直连

## 为什么要搭建QQ机器人

因为闲得蛋疼。一直续费ChatGPT的大佬根本瞧不上这些第三方客户端，一直不会用ChatGPT的小白完全不想折腾第三方客户端。不仅QQ机器人是这样，很多ChatGPT 镜像站也是

现在这些客户端唯一用处就是在魔法间歇性失灵，或者信号不好时救急。这点用处在我看来不值得专门去搭建。因为除去时间成本，还会有服务器、域名成本，甚至维护成本。至于靠这个赚米，得要么有技术，要么有商业头脑，不然就和我一样是陪跑

如果你在了解这些的基础上，还想搭建QQ机器人，那么就随我一起进入下面的章节吧

## 项目概述

教程使用lss233大佬的这个项目：

[chatgpt-mirai-qq-botlss233 • Updated Feb 13, 2025](https://github.com/lss233/chatgpt-mirai-qq-bot)

如前所说，此项目现已停止维护，并且由于中转API可以平替项目核心功能，许多AI相关配置已完全无用。但项目中一些基础交互相关功能已做得比较完善，直接使用可以避免重复造轮子

### 基础交互功能

下面说一下项目中当前还有哪些基础交互功能能正常使用。首先来到项目Wiki：


[Github](https://github.com)


![notion image](https://img.aiexplorernote.com/pic/basic-interact-functions.jpg?t=171d1f9c-c2a3-8016-ab4c-cd46b387fa74)

点击“**常用命令列表** ”，我们看右边**目录** ：

![notion image](https://img.aiexplorernote.com/pic/common-orders.jpg?t=171d1f9c-c2a3-8088-a075-e24190c6db09)

这里仅介绍项目当前能用（经我测试没bug\)，有一定意义的功能，其他功能有bug

第一个，“**切换AI XXX** "。这个命令用于切换AI，不像ChatGPT-on-WeChat那样无法切换

第二个，“**重置回话** "。这个命令用于清空对话上下文

第三个，“**回滚会话** "。用过ChatGPT就比较容易理解这个命令：与chatgpt对话时，如果你想重新回到之前某条消息，点击那条消息重新编辑，便可以从那里开始重新对话，此功能就是这个作用。只需给机器人发送“**回滚对话 + \[你想回退到的消息原文\]** " 即可

第四个，"**加载预设** "。这个命令用于启用system prompt，配合项目Wiki页中”**预设系统** "页使用，由于讲起来比较复杂，这里跳过。看不懂可以\[咨询我\]

第五个，“**画/看 + 图片描述** "，这个命令用于画图。本来项目支持Bing，以及OpenAI（DALLE3）和Stable Diffusion，但是BIng画图已废弃，现在只能用后面两个

最后还有一个额度限制功能（我不确定还能不能用，没测试过），从Wiki页进入：

![notion image](https://img.aiexplorernote.com/pic/quota-limitation-function.jpg?t=171d1f9c-c2a3-8043-b99e-f23f3291943c)

就是如果受众比较多，这个功能可以当作一个管理后台，管理不同用户使用额度。页面本身有详细介绍，这里不再赘述

看上去很复杂，但80%都不用管，因为用不到，我只是跟大家说一下

## 项目部署

本次部署我直接将项目最新代码git clone 下来改代码，但没有做一键包（之前项目习惯做一键包发布在Releases中），启动需要使用命令行，后期如果嫌麻烦可以自己做个启动脚本

这个是我修bug、优化功能后的最终版项目文件：

链接: <https://pan.baidu.com/s/1nTB5d5MRm0qtCKOF3UIWvQ?pwd=1234> 提取码: 1234

一、下载并解压文件，进入项目根目录，打开"**config.cfg** "文件

![notion image](https://img.aiexplorernote.com/pic/project-config-qq-bot-.jpg?t=171d1f9c-c2a3-8065-8d0c-d0a947ef02ed)

把"**请修改为管理员的QQ号** “换成真实QQ号（不是机器人QQ）。然后在"**api\_key** "中填入中**转API API Key** ，并把下面"**api\_endpoint** "改成你中转API 的代理URL，后面记得加"**/v1** ‘。如果你使用官方API Key，也需要对应修改"**api\_endpoint** "

修改完毕后保存修改

二、进入项目根目录下“**go-cqhttp** "文件夹，编辑“**config.yml** "文件

![notion image](https://img.aiexplorernote.com/pic/config-yml-in-chatgpt-qq%3Dbot.jpg?t=171d1f9c-c2a3-8000-9fe4-f9e7d4616d58)

将“**请修改为机器人的QQ号** "换成机器人真实QQ号

![notion image](https://img.aiexplorernote.com/pic/modify-qq-bot-number.jpg?t=171d1f9c-c2a3-8099-b4ea-fbd75b947ef0)

不用带引号，密码不用填，填写好QQ号后直接保存即可

三、安装依赖。来到项目根目录，打开终端，运行以下命令安装依赖：

四、启动项目主程序后端。运行项目根目录下"**bot.py** "程序。显示如图即为正常

![notion image](https://img.aiexplorernote.com/pic/chatgpt-qq-bot-work-well.jpg?t=171d1f9c-c2a3-80dd-af97-e30733a7acd4)

五、启动go-cqhttp通信后端。双击项目根目录下"**启动go-cqhttp.cmd** "脚本，手机与电脑连接同一WiFI，在手机上用机器人QQ扫屏幕二维码登录，登录成功应显示如下

![notion image](https://img.aiexplorernote.com/pic/scan-qrcode-to-log-in.jpg?t=171d1f9c-c2a3-806b-9faf-f437cb9a0993)

六、最后发消息进行测试，可以看到已经能成功对话

![notion image](https://img.aiexplorernote.com/pic/successfully-chat-with-bot.jpg?t=171d1f9c-c2a3-80c0-94c1-c62f4f367e8f)

七、上传到服务器，24小时在线。这个可以在本地部署好后，将整个文件打包发送到服务器，到时只需要重新安装依赖，就能直接在云服务器上登录

💡

Tips: 如果想更改模型，可以参考这篇文章：

[zhuanlan.zhihu.comhttps://zhuanlan.zhihu.com/p/716399604](https://zhuanlan.zhihu.com/p/716399604)

## 结语

我的机器人已连续在线快五个月

![notion image](https://img.aiexplorernote.com/pic/chatgpt-qq-bot-online--for-months.jpg?t=171d1f9c-c2a3-8082-8026-d41d2d76f9ea)

如果感兴趣或者想测试可以加它，关注公众号\[文雅的疯狂a\]，后台回复“qq机器人"获取qq号

有问题欢迎评论，尽量帮大家解决

* * *

**2025-01-19更新**

有小伙伴问到怎么打包上传服务器，这里补充一下，开始之前确保你已经购买了一台云服务器哦，拼夕夕、TB或者白嫖阿里云无影云桌面免费试用都可以

准备好云服务器后，需要在上面安装python，因为项目使用python运行

接下来开始把本地已配置好的项目文件上传到云服务器的过程，这样做是因为可以省略在云服务器重新配置一遍的步骤：

首先需要保证项目在本地已部署好，能够正常收发信息。然后选中整个项目文件夹，将其压缩成压缩文件

下一步使用远程桌面工具，我使用的是向日葵，TeamViewer什么的也行，只要有远程传输文件的功能就行，传输文件到服务器。向日葵下载地址：


[Sunlogin](https://sunlogin.oray.com)


两台设备都要安装向日葵哦，即本地你自己的电脑和云服务器

接下来登录云服务器，把云服务器上向日葵的设备识别码、验证码记下，通过本地电脑的向日葵软件远程连接，选择“远程文件”

![notion image](https://img.aiexplorernote.com/pic/xaingrikui1.jpg?t=180d1f9c-c2a3-808f-b8d0-ea1c3a7690ca)

在向日葵的文件传输面板，“本地设备”里选择你之前压缩好的项目文件压缩包，随后点击中间“传输”传到设备上就行

![notion image](https://img.aiexplorernote.com/pic/transfer-qq-file-to-server.jpg?t=180d1f9c-c2a3-80b2-aa4b-c54494cb0e74)

虽然直接打包时，账号密码都已在本地配置过，但服务器上并没有安装依赖，所以需要在服务器上也进行这个步骤，在项目根目录下（本地已经配置好的小伙伴不会存在不知道根目录是什么的问题了吧）执行：

等依赖安装好，像在本地一样，在服务器启动机器人，机器人就能24小时在线啦

**重要更改：** 之前分享的项目文件包中，requirements.txt文件中依赖似乎有些问题，已更新网盘文件链接。当然，依赖问题不难解决，即使碰到报错，对应让AI给点提示一般就能解决
---
title: 一键导出微信聊天记录到本地，永久保存，爆火开源项目
date: 2024-12-08
excerpt: 完美导出聊天记录到本地，数据可用于训练大模型，创造数字分身
tags: ["互联网"]
category: 互联网技巧
---

微信聊天记录一直是在手机和电脑上加密的，想取得这份数据并不容易。今天发现一个免费开源工具--**Memotrace（留痕）** ，可以把微信聊天记录导出为HTML，CSV，JSON等格式，永久保存在本地。在GitHub上这个项目星星高达3.5万颗，说明真的帮助了很多人导出微信聊天记录

![notion image](https://img.aiexplorernote.com/pic/GitHub-stars-of-wechatmsg.jpg?t=156d1f9c-c2a3-80f6-b08a-ca9c3dad8871)

## Memotrace（留痕）介绍

GitHub项目地址：

[WeChatMsgLC044 • Updated Dec 13, 2024](https://github.com/LC044/WeChatMsg)

这个项目有如下特点：

  * ✅支持将微信聊天记录导出为HTML，CSV，JSON，Markdown，PDF，word等格式永久保存在本地，HTML格式（推荐）可以完美还原微信聊天页面：
    * 支持文本、图片、视频、语音、文件、表情包、分享链接、引用消息、转账记录、音视频通话、位置分享、名片、小程序、视频号等
    * 支持时间轴跳转
    * 引用消息可定位到原文
    * 支持分享链接、小程序支持超链接跳转
    * 支持合并转发的聊天记录支持展开

  * ✅支持批量导出数据

  * ✅导出联系人

  * ✅自动为聊天信息生成数据分析图表

  * ✅所有数据在本地处理，保证隐私安全

导出的JSON，CSV等格式的数据可以用来训练大语言模型，已经有网友成功利用自己的聊天记录训练chatglm3，做出一个数字化的自己，模仿自己说话

## 如何使用

这个工具使用起来非常简单，下面是具体步骤

### 1\. 更新微信版本

首先，保证你的电脑微信更新到了最新版本。打开电脑微信，点击左下方三个横杠 -> **设置** -> **关于微信** -> **检查更新** ，保证看到“**当前微信已是最新版本** ”

![notion image](https://img.aiexplorernote.com/pic/update-wechat.jpg?t=156d1f9c-c2a3-809e-a01b-c5fd48ecf3dc)

### 2\. 转移手机聊天记录到电脑

下面需要先把手机微信聊天记录迁移到电脑端，这样后面Memotrace才能从电脑上获取手机端微信的聊天记录

第一步，确保手机和电脑连接到同一个WiFi下，这里建议电脑开热点，手机连电脑的热点，速度会比手机和电脑同时连接家庭WiFi快两三倍

第二步，打开手机微信，依次进入**我** > **设置** > **聊天** > **聊天记录迁移与备份** > **迁移** ，记住，一定是迁移，否则手机端的聊天记录将被删除！！

![notion image](https://img.aiexplorernote.com/pic/transfer-wechat-chat-history.jpg?t=156d1f9c-c2a3-803c-b2ab-d28348f13a9b)

继续点击“**迁移到电脑微信** ”，选择迁移全部聊天记录或者部分聊天记录都可以，随后会看到正在迁移

![notion image](https://img.aiexplorernote.com/pic/transfer-wechat-chat-history-2.jpg?t=156d1f9c-c2a3-803b-9a2e-f91639a7692e)

第三步，等待提示迁移完成，完成后重启电脑端微信（重启才能将数据写入数据库进行读取）

下面就可以开始在电脑上用Memotrace导出聊天微信聊天记录到本地啦

### 3\. 下载并配置Memotrace（留痕）

来到Memotrace官网：


[Memotrace](https://memotrace.cn)


第一步，点击下载按钮跳转到蓝奏云下载主文件：

![notion image](https://img.aiexplorernote.com/pic/download-memotrace.jpg?t=156d1f9c-c2a3-803d-829f-c4ded6e5b5a1)

打开以后会有几个文件下载选项，点击第一个最大的EXE文件下载，会有一个验证

![notion image](https://img.aiexplorernote.com/pic/download-memotrace-exe.jpg?t=156d1f9c-c2a3-80a7-99c2-ee87788441bb)

注意：这个工具只支持WIn10和Win11系统

第二步，启动Memotrace。下载好以后，双击下载好的exe文件，在弹出的窗口中点击“**开始** ”进行解压

![notion image](https://img.aiexplorernote.com/pic/extract-memotrace-exe.jpg?t=156d1f9c-c2a3-8004-a347-d8a9bbae819c)

来到解压后的文件夹，双击“**MemoTrace.exe** ”可执行文件启动程序

![notion image](https://img.aiexplorernote.com/pic/double-click-on-memotrace-exe.jpg?t=156d1f9c-c2a3-808f-9e94-ca5893b0b1db)

第三部，配置Memotrace。在打开的程序中，点击第一个“获取信息”按钮，程序会自动获取当前登录电脑微信的微信号的信息并填充

![notion image](https://img.aiexplorernote.com/pic/get-identity-info-in-memotrace.jpg?t=156d1f9c-c2a3-80f7-9b31-ce51ec5f7d1f)

我是一下就成功了，但如果解析数据失败，官方给出的解决办法如下：

![notion image](https://img.aiexplorernote.com/pic/how-to-deal-with-problems-with-analyzing-data-in-memotrace.jpg?t=156d1f9c-c2a3-80b7-9a03-e33843e8ce12)

关于“**解析数据** ”和“**增量解析** ”两个按钮的区别，官方给出的说法如下：

![notion image](https://img.aiexplorer.rest/pic/differences-betweeb-two-analyzing-buttons-in-memotrace%2Cjpg?t=156d1f9c-c2a3-80dd-9c00-d54f0d5a0519)

“**增量解析** ”适用于需要频繁备份微信聊天记录的场景

解析成功后应该看到如下界面：

![notion image](https://img.aiexplorernote.com/pic/interface-after-successfully-analyze-wechat-chat-history-in-memotrace.jpg?t=156d1f9c-c2a3-80c5-ba2a-d10eef53bb82)

### 4\. 使用Memotrace导出微信聊天记录

接下来就可以开始导出聊天记录啦，好友、群组、公众号什么的聊天记录都可以导出。选中要导出的好友，点击程序右上角的“导出聊天记录”可以选择导出的格式，有PDF，Excel，CSV，HTML，Markdown等

![notion image](https://img.aiexplorernote.com/pic/formats-supported-in-memotrace.jpg?t=156d1f9c-c2a3-80f9-b8c0-d95c420245d0)

虽然PDF和Excel要付费，但是最主要的HTML格式不需要，这个格式可以完美复现我们在手机微信上看到的消息，所有类型的消息在导出的HTML文件中都可以正常查看，包括视频，语音，图片等。类似于这样：

![notion image](https://img.aiexplorernote.com/pic/html-format-wechat-chat-history.jpg?t=156d1f9c-c2a3-801b-9dd4-d2852ad92b5d)

正常情况下选HTML格式导出就行了，其他的CSV、JSON格式等应该主要是用于大模型训练，没这个需求的话不用管

导出的文件会存放于这个路径：“**Memotrace/data/聊天记录/ <好友名称文件夹>**"

![notion image](https://img.aiexplorernote.com/pic/storage-path-of-exported-chat-history-in-memotrace.jpg?t=156d1f9c-c2a3-8047-947f-e224c165e618)

点击这个路径下与导出格式相同的文件就可以查看导出的聊天记录了，注意如果是HTML文件的话一定要在这个路径下才能正常查看，因为上面的那些文件夹里的数据是HTML文件读取数据的地方。如果HTML文件被单独移出去，会导致图片，语音等媒体文件在HTML文件中无法查看。其他格式导出的聊天记录倒是可以单独移出去（如Markdown，JSON\)

点击最上方工具栏的”数据“选项卡，这里有另外几个导出相关的功能

![notion image](https://img.aiexplorernote.com/pic/other-export-related.options-in-memotrace.jpg?t=156d1f9c-c2a3-8061-8d08-d192c292f25c)

第一个是导出全部聊天记录中的视频，文件，图片等（我没试，不过看着应该是这样），第二个是导出微信的通讯录，这个应该可以在换微信号的时候用到，导出的CSV表格中的第二列”Alias“就是所有通讯录中好友的微信号（群聊没有微信号），换号后可以按这个再加一遍好友

![notion image](https://img.aiexplorernote.com/pic/alias-in-exported-contacts-csv-of-memotrace.jpg?t=156d1f9c-c2a3-80b6-93f9-d9636e5ec8d1)

最后一个是批量导出，也是蛮有用的，上面演示的选中某个好友进行导出只能单独导出，用这个选项就可以批量导出啦

![notion image](https://img.aiexplorernote.com/pic/export-wechat-chat-history-in-memotrace-in-batch.jpg?t=156d1f9c-c2a3-806f-a852-fb9e9e6aa287)

Memotrace还有一个”**统计信息** “的功能比较有用

![notion image](https://img.aiexplorernote.com/pic/statistics-in-memotrace.jpg?t=156d1f9c-c2a3-8088-8602-c47c6309e836)

这个功能提供了多种对聊天记录分析的数据分析图表，这里以onechat售后群的聊天信息举例。在Memotrace中选中onechat售后群群聊，然后点击上方的统计信息，就会自动打开一个网页，如下所示（数据分析图表生成如果数据比较多的话生成会比较慢，看到都是空白就等一等）：

![notion image](https://img.aiexplorernote.com/pic/data-analysis-of-chat-history-in-memotrace.jpg?t=156d1f9c-c2a3-80bf-a696-f29a22369e66)

![notion image](https://img.aiexplorernote.com/pic/data-analysis-in-memotrace.jpg?t=156d1f9c-c2a3-809d-a84d-d9a0724d2317)

最后提一点，Memotrace虽然有”**增量更新** “的功能，但似乎仍然不够灵活，必须保证是在同一台电脑，相同的微信聊天记录文件夹情况下才能在上一次备份的基础上进行增量备份

例如，我之前微信聊天记录是放C盘的，嫌太占C盘空间，移到D盘并重新在微信设置里配置路径后微信已经不能加载先前的聊天记录，并且Memotrace无法加载图片，音视频等富媒体。如果有小伙伴成功实现更灵活的增量更新办法，欢迎分享在评论区呀

## 小结

本文尽可能详尽地介绍了Memotrace（留痕）的基本使用，如果使用过程中还有什么问题，可以参考官方的文档，或者进入交流群寻求帮助：


[Memotrace](https://memotrace.cn)


如果对你有用，希望给个一键三连~
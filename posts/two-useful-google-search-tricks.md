---
title: 两个你不知道的实用谷歌搜索引擎技巧
date: 2025-01-17
excerpt: SEO小技巧
tags: ["互联网"]
category: 互联网技巧
---

这两天发现两个比较实用的谷歌搜索引擎技巧，感觉挺有用的，分享给大家。一个是在谷歌搜索引擎中一次查看100个搜索结果（SERP），另一个是修改请求头，在桌面端直接查看不同平台、不同浏览器的搜索结果

## 一次查看100个结果

这个可以节省我们查看搜索结果时翻页的时间，而且如果要用爬虫爬数据进行数据分析的话，掌握这个技巧也能帮助简化代码，下面我们来看看怎么用这个技巧

这里以在谷歌搜索引擎中搜“TikTok”为例，首先，请大家先到谷歌中搜索这个词。然后来到地址栏，你会看到出现很长一个链接：

![notion image](https://img.aiexplorer.rest/pic/search-tiktok-in-google%2Cjpg?t=17dd1f9c-c2a3-8099-b420-c92ca2a0a9f8)

不用管后面那一长串，只要看最前面的“google.com/search?q=tiktok”，这里“q"表示搜索词，”tiktok“就是你搜索的内容。现在最关键的一步来了，请在"tiktok"后面加上这个参数”&num=100", "num"就是表示所呈现搜索结果的数量，所以这个参数会让你的搜索结果一次呈现100个

加完这个参数，地址栏最后的URL应该是这样：

https://www.google.com/search?q=tiktok&num=100

点击回车，你会发现右边滑块变得很小，说明这时呈现的搜索结果数量的确是100个

![notion image](https://img.aiexplorernote.com/pic/huakuai-in-google.jpg?t=17dd1f9c-c2a3-8066-b2fa-cd969b34c0ad)

但是这样每次都打这个参数太麻烦了，有没有什么简便办法？有！

首先打开chrome浏览器设置，依次点击“搜索引擎”和“管理搜索引擎与站点搜索”

![notion image](https://img.aiexplorernote.com/pic/git-search-engine-in-chrome.jpg?t=17dd1f9c-c2a3-8055-8e27-fe52b193c75c)

来到下方“站点搜索"，点击“添加"

![notion image](https://img.aiexplorernote.com/pic/add-site-search-in-chrome.jpg?t=17dd1f9c-c2a3-80d6-acef-f615cd167d62)

按照如图所示配置，名称随意，快捷键越简洁越好，URL填这个：

意思就是只要启用这个站点搜索，无论用户搜索什么词，都一次性呈现100个搜索结果

![notion image](https://img.aiexplorernote.com/pic/site-search-settings-in-chrome.jpg?t=17dd1f9c-c2a3-8034-9f64-cb6b7d0d6977)

点击添加就完成啦。还有一点需要注意的是，chrome浏览器中搜索引擎设置里，上面有一个“键盘快捷键”，用来决定你如何唤起搜索引擎以及站点，建议选“空格或Tab”

完成以上配置后，来到地址栏，首先输入你新添加的站点搜索的快捷键，然后敲击空格或者Tab（取决于你设置的快捷键），浏览器就会自动使用你设置的站点搜索，并且在搜索时一次呈现100个结果啦

演示：

![notion image](https://img.aiexplorernote.com/pic/Animation2.gif?t=17dd1f9c-c2a3-80a8-81ad-ec3895dd4655)

如果是写爬虫，可以直接写搜索关键词时，跳到上面说的URL格式的网址

## 修改请求头查看不同平台、浏览器的搜索结果

我一开始弄这个是因为在使用fake user agent（一个随机变换请求头python库）查网页排名时，突然发现我的网页在有的设备端有排名，有的没有。然后就找办法自己测试是否真是这样。虽然最后感觉由于个性化推荐、地理位置、IP等因素影响，修改请求头查看网页真实排名还不如无痕浏览器靠谱，但这个技巧说不定在其他场景能派上用场，所以也分享给大家

首先去chrome插件商店下载这个插件，可以看到用户有100万，说明这个插件还是挺有用的

![notion image](https://img.aiexplorernote.com/pic/user-agent-swithcher-in-chrome.jpg?t=17dd1f9c-c2a3-8013-bfe5-d675ff76bdb0)

下载好以后把它置顶，点击对应的设备或者浏览器就能切换对应请求头，查看不同设备、浏览器上的页面结果啦

![notion image](https://img.aiexplorernote.com/pic/pinned-user-agent-addon.jpg?t=17dd1f9c-c2a3-808a-a92c-e92c8463ee45)

选中插件，右击点“options"来到插件设置页面，在“Import Settings"中可以导入自定义请求头，可以让AI根据下面的模板帮你写几个你想要的请求头，写好以后点击”choose file"就能导入啦

![notion image](https://img.aiexplorernote.com/pic/import-settings-in-user-agent-addon.jpg?t=17dd1f9c-c2a3-80ae-824b-e735d45853a2)

请求头模板：

这个插件还有一个“Other Settings"，这里面有两个选项

![notion image](https://img.aiexplorernote.com/pic/other-settings-in-user-agent-addon.jpg?t=17dd1f9c-c2a3-8076-a94f-f2e2f35f2f84)

第一个是让指定的域名不受更换请求头影响，你可以在第二个设置中置顶不受影响的域名，第二个选项是使切换请求头操作只影响当前标签页面，开启后你可以在同一个浏览器中通过多个标签页同时查看不同端侧的显示结果

那有没有办法自己修改User Agent呢？有。但前提是你有需要的User Agent的完整名称，不过这个可以让AI生成，下面来看看怎么做

首先打开开发者模式，然后点击右上角三个点，选择"More tool" -> ”Network conditions"，中文可能是网络条件吧

![notion image](https://img.aiexplorernote.com/pic/network-conditions-in-devloper-mode.jpg?t=17dd1f9c-c2a3-8096-8562-e12c656fe9f6)

在下方出现的Network Conditions控制台中，取消勾选“Use browser default"， 然后在下方填入你需要的User Agent，之后刷新页面，就会显示对应的结果页啦

![notion image](https://img.aiexplorernote.com/pic/input-new-user-agent-in-network-conditions-in-developer-mode.jpg?t=17dd1f9c-c2a3-80ac-b4c4-f64b3b9a6409)

如果对你有用，记得给个三连~
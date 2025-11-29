---
title: 批量查询GSC，GA后台数据，SEO小伙伴看过来
date: 2025-04-19
excerpt: 自动查询GA4,，GSC数据，助力SEO数据分析
tags: ["技术", "互联网"]
category: 技术分享
---

本人从事谷歌SEO，每个月需要做月报总结月度工作情况，GSC、GA数据是月报中考量个人工作成效的重要指标，这里主要指每个人优化、原创文章页面的GSC、GA数据

正常手工收集这些页面数据，需要一个一个把页面URL输入GSC，GA后台，然后在表格中记录下数据。整个过程相当枯燥乏味，跟一直复制粘贴没区别，而且弄完二三十个页面，加上反复检查，这样的工作要连续做三小时才能完成。此外，很有可能出错，毕竟是手工查询

一开始我也是这么弄，不过后来自己写了工具，自动化查询这些GSC，GA数据。用工具查完（一两分钟\)，一整个把结果复制进表格中，又快又准，效率直接翻几倍

相信其他从事SEO的小伙伴平时工作中也会涉及类似业务，本文来分享下我是如何写这个小工具的。无需编程经验，只要会用AI就行。本人也不会写代码，但已靠氛围编程\(用自然语言与AI对话进行编程\)写出很多实用工具。建议使用Cursor写工具，如果不会用，参考👉：[Cursor入门教程](https://www.aiexplorernote.com/article/cursor-basics)

## 前情提要 & 初步准备

注：本文所有演示使用Cursor中的Claude-3.7-sonnet模型

为了方便，肯定是写一个带GUI（图形界面）的工具比较好，让工具更易用。但本文不分享工具GUI部分的代码，这个让AI自己写，能用就行。只分享程序在请求GA/GSC数据时，如何完成认证流程。分享这个是因为当初我即使用AI也没搞明白怎么弄这一步，后来自己慢慢测试才摸索出来

在进行认证流程之前，你需要先向你的AI表述清楚需求，让它帮你写个GUI工具查询GSC、GA数据，它应该能够直接写出大部分重要的代码，如果有什么具体需求，多迭代几次就行。给大家一个初步、简单的演示，后面各人需要根据自己的需求迭代

首先，我们向AI表述总的需求，"帮我写个GUI工具，批量查询网站GA后台的数据"。GA，GSC分开写，不要两个写在一个GUI中。不然你很可能得到这样一坨答辩：

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/ga-gsc-tool-tes.jpg?t=1dad1f9c-c2a3-80ab-bbc2-c2edb287e40e)

如果我只让它只写一个查询GA数据的工具，得到的结果是这样：

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/zero-shot-ga-query-gui.jpg?t=1dad1f9c-c2a3-807a-a43e-c4d6230fcecf)

这个虽然离我们想要的成品还有差距，但说实话超过了我预期。以下是优点总结：

  1. 创建requirements.txt并提醒用户安装程序运行依赖

  2. 认识到查询GA数据需要在Google Cloud下载凭据、认证，并在程序中添加认证机制，提醒用户认证

  3. 认识到批量查询需要excel文件，并在程序中实现，且添加导出为excel的功能 PS：我想大多数想做这个工具的小伙伴都是想批量查不同时间段的不同页面的数据吧（如果是批量查相同时间段不同页面的数据，直接GSC、GA后台导出），这个需求的主要问题是GUI页面不好组织，所以让程序读取指定xlsx文件中的数据作为输入数据才是标准操作流程，这样可以避免GUI页面过于复杂

  4. 创建详细README文件，向用户介绍程序完整使用流程 说实话这对于一句话Prompt来说，已经相当不错，我认为这波Claude值得点赞。但是，程序确实也有很大问题：

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/ga-gui-code-analyze.jpg?t=1dad1f9c-c2a3-8033-b030-f52313e73c38)

  5. 最大问题是程序使用Universal Analytics\(旧版GA\)查询数据，并要求用户提供“视图id”，但事实上Universal Analytics已被完全弃用，迁移到Google Analytics 4，也就是我们常说的GA4。GA4只有媒体资源id。这导致查询部分的逻辑需要全换掉才能用

  6. 剩下就是小问题，我这里是credentials路径设置不正确，要迭代一次才能运行。可能大家也会碰到这种小问题，不过这种问题不大，很容易解决

总得来说这个初步的小程序只用一句话prompt就达到我百分之七八十预期，效果很不错。所以现在AI变强后，我们每个人都能很轻松开发出实用app

## 认证流程

大家初步做好GUI后，AI一定会让大家去Google Cloud创建Oauth 2.0客户端，下载凭据文件。这个光看AI的文字解释容易云里雾里，网上资料也很少。当时我捣鼓好一阵才弄好，这部分就详细讲下认证流程

首先来到谷歌云控制台，登录：[https://console.cloud.google.com](https://console.cloud.google.com/)

点击左上角“My First Project"

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/my-first-project-in-google-cloud.jpg?t=1dad1f9c-c2a3-8015-9d37-c95853168070)

点击”New Project"，新建项目并命名

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/new-project-in-google-cloud.jpg?t=1dad1f9c-c2a3-804f-b177-f9cc197b4f1e)

点击左上角三条杠，在左侧菜单中点击“API & Services"

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/api-and-services-in-google-cloud.jpg?t=1dad1f9c-c2a3-80bd-b223-d845d4926852)

第五步，要查询GA数据，我们需要为这个项目开启Google Analytics Data API，点击上方”Enable API services", 搜索 “Google Analytics Data API”，在搜索结果中点击它，然后点击“Enable"启用

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/enable-google-analytics-data-api.jpg?t=1dad1f9c-c2a3-8023-894f-c20b1d222613)

Oauth 2.0客户端需要配置同意屏幕才能使用，接下来我们点击左侧边栏的”Oauth Consent Screen"，配置同意屏幕。点击中间“Get Started"以后，配置应用的名称\(（注意不要包含"google"）、开发者信息，Audience选择”External"

创建好以后，点击左侧边栏中的“Clients"，开始创建应用。这个应用将作为我们与GA数据连接的桥梁

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/create-client-in-google-cloud.jpg?t=1dad1f9c-c2a3-8021-938f-c885300890c8)

点击上方"+ Create client"

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/click-on-create-client-in-google-cloud.jpg?t=1dad1f9c-c2a3-8023-ae53-ce896a1c2137)

由于我们的应用主要在本地电脑使用，下面应用类型选择”Desktop App“，名称随意

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/create-app-in-google-cloud.jpg?t=1dad1f9c-c2a3-808b-884e-f515a46b9796)

弹出一个弹窗，点击左下角”Download Json", 下载凭据文件

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/click-download-app-json-in-google-cloud.jpg?t=1dad1f9c-c2a3-80ec-85a8-e84a30425acf)

到这里我们就下载好了AI让我们下载的认证文件，把它放到指定位置就可以开始认证啦

但事实上到这里还不够。Oauth 2.0客户端在正式发布之前，只有被邀请的测试用户\("test user"\)才能使用，如果没有被邀请成为这个应用的测试用户，哪怕是你本人也无法通过这个凭据文件访问GA数据。当初我就是在这里卡了好久

点击左侧边栏中”Audience“，再点击下方”Add User"，把你自己或者其他需要访问这个应用的人员邮箱加入其中

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/add-test-user-for-google-cloud-oauth-2-client.jpg?t=1dad1f9c-c2a3-8080-be19-ca81dd991852)

可以看到这个地方在发布之前最多可以加100个测试用户，一般来说不需要发布应用，一个网站很少情况下运营人员有这么多，而且发布应用的流程比较繁琐，需官方审核，可能还不一定通过

到此，认证流程结束，你可以用你的应用查到数据啦！

## 进阶

### 解决反复验证问题

你可能会发现配置好应用后，每次查询数据时都要重新认证，很烦人

这个问题主要是应用开发人员可能会碰到。应用第一次认证时会生成带有"refresh\_token"的凭据文件（可以点进json文件查看），它允许程序在令牌过期后自动获取新访问令牌，这样用户就不需要重新登录。但在开发过程中，肯定要删除这个凭据文件重新验证并进行测试，一旦删除，就很有可能出现需要反复登录的情况

我测试下来，大部分AI写认证部分的代码都会漏掉一点，导致上面说的需要重复验证。下面我们就来看看到底是什么导致重复验证，以及如何避免重复验证

不管你认证部分代码怎么写，绝对都有这一行：“flow.run\_local\_server”，它用于打开默认浏览器，并导航到 Google 的授权页面，最终生成一个json凭据文件。要想不重复登录，凭据文件中必须有名为"refresh\_token"的键值对，这样程序在发现“token"过期时（json文件中有一个"expiry" 字段用于记录有效期），就可以使用refresh\_token自动获取新的访问令牌\(token\)。如果没有refresh\_token字段，用户必须重新进行完整的认证流程

那为什么有时候认证完会生成refresh\_token，有时候又不会呢？问题在于认证过程中是否出现同意屏幕，同意屏幕就是这个东西：

![notion image](https://img.aiexplorernote.com/%E6%89%B9%E9%87%8F%E6%9F%A5%E8%AF%A2GSC%EF%BC%8CGA%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%EF%BC%8CSEO%E5%B0%8F%E4%BC%99%E4%BC%B4%E7%9C%8B%E8%BF%87%E6%9D%A5/conseent-screen-oauth-client.jpg?t=1dad1f9c-c2a3-801a-9afd-da6361548a55)

这个一般情况下只有第一次认证的时候会出现，经过这个同意屏幕完成认证后，就会生成一个带有refresh token字段的json认证文件。如果你后来不小心，或者因为要测试，把第一次生成的json认证文件删除了，之后重新认证时默认并不会再出现这个同意屏幕。你会发现再次验证时程序打开认证窗口后直接就显示认证成功，没有出现同意屏幕。但这时候打开生成的json凭据文件，其中并没有refresh token字段，意味着当token过期后（一般有效期很短）你需要再次验证

但也不是没办法，我们可以在请求认证的时候加上”prompt='consent'"参数，强制要求出现同意屏幕并生成refresh token。”prompt='consent'"参数就加在上面说的flow.run\_local\_server方法中：“flow.run\_local\_server\(port=0, prompt='consent'\)”，在代码里加入这个参数就行

温馨提示：其实没有这个refresh token也能用，但会比较麻烦。如果你看不懂，没关系，把这部分复制粘贴给AI，它就知道该怎么做了

2025-07-06更新:

似乎“access\_type=offline”参数才是请求refresh\_token的关键。但也可能加了这两个参数还是无法生成refresh\_token，这时候只能到账号后台手动取消授权，然后重新授权

### 给其他同事使用

如果你还想把自己开发的应用给其他同事或者整个部门使用，Oauth 2.0客户端也能允许你安全地实现

当我们用Oauth 2.0 客户端生成凭据文件后，用户在请求访问网站的数据时，只能访问他们自己有权访问的网站的数据。所以你可以把你认证完成后生成的json认证文件删掉（注意这一步非常重要，不然别人拿着你的认证文件可以访问你网站的数据），然后将应用程序发给你同事，让他自己走一遍认证流程，并生成专属认证文件访问自己网站的数据

注意：如果你的应用没有发布（不建议），必须先将同事按“认证流程”部分的操作邀请成为应用测试用户，否则他根本无法验证）

## 小结

本文主要介绍Oauth 2.0客户端的认证流程和一些进阶技巧，帮助大家解决在开发访问网站GA、GSC数据应用道路上的最大拦路虎。开发的应用不仅可以解决月报，更重要地我想是自动化收集、分析网站数据，对SEOs来说很有价值

关于应用本身如何编写，大家可以用AI完成。如果有小伙伴不想折腾，想用我的应用，欢迎私聊我~

最后，如果教程看不懂，复制粘贴发给AI就行
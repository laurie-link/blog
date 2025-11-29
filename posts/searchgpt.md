---
title: 原来这就是SearchGPT啊
date: 2024-11-05
excerpt: 超全SearchGPT解析，看看有没有你没发现的功能
tags: ["深度AI博文"]
category: AI学习
---

前两天ChatGPT进行了一次[更新](https://www.aiexplorer.rest/article/chatgpt-ui-update-1102),我以为是小更新，后来才发现这次更新里的搜索居然是前阵子比较火的“SearchGPT”

说实话我挺懵的，因为最近用着感觉和之前ChatGPT的搜索功能没啥区别。刚在OpenAI官网看完关于SearchGPT的文章:


[Openai](https://openai.com)


总结就是ChatGPT搜索中会出现更多的“富结果”。就是图片，视频一类的东西，跟在搜索引擎中进行搜索一样

![notion image](https://img.aiexplorernote.com/pic/rich-result-in-serp.png?t=134d1f9c-c2a3-80f9-8a01-ea00fd030a5b)

而我之所以感觉用起来和之前的搜索没什么区别，是因为这些富结果的触发是只有当ChatGPT认为呈现某种富结果更有助于帮助用户解决查询的问题的时候才会触发，有可能我最近的查询用不到富结果，所以没觉得ChatGPT有什么变化吧

这一点上和搜索引擎很像。比如搜索商品，搜索引擎往往会把带图品展示的商品链接放在排名靠前的位置，搜索某个破解软件，搜索引擎又会趋向于把带下载链接的网页排到靠前的位置

因此可以看出ChatGPT搜索的方向就是往代替传统搜索引擎的方向做的，[ChatGPT搜索引擎插件](https://chromewebstore.google.com/detail/chatgpt-search/ejcfepkfckglbgocfkanmcdngdijcgld)进一步证明了OpenAI的野心

💡

Tip: 如果你使用ChatGPT搜索引擎插件的时候不想在地址栏触发ChatGPT搜索，可以用这种格式进行查询：\!g \[查询\] ,例如查询searchgpt : \!g searchgpt 。这个时候搜索引擎就不会跳转到ChatGPT页面去了

## SearchGPT的原理

SearchGPT是怎么实现的呢？OpenAI说SearchGPT是基于GPT4o在搜索能力上的微调版本，用于训练的数据是AI合成数据，包括从OpenAI的“o1"模型提取的输出

我有个问题是是只有开启搜素功能的时候会调用这个基于搜索微调的GPT4o，还是直接使用的GPT4o也是这个基于搜索微调的版本？问题来源于我发现我即使不开启搜索按钮有时候ChatGPT也会自动搜索然后展示富结果什么的

OpenAI也没有就这一点给出说法，OpenAI给出的触发方法是这么说的:

> ChatGPT会根据你的提问自动搜索网络上的信息，或者你也可以手动点击搜索开关出发搜索

![notion image](https://img.aiexplorernote.com/pic/openai-says-how-to-trigger-chatgpt-search.png?t=134d1f9c-c2a3-80aa-9bb3-f0aad92f01d0)

这里还有两种：

  1. 通过斜杠命令“/"选择”Search“开启搜索

  2. 如果你之前有某个回答ChatGPT没有搜索，可以点击回复下面的重新生成按钮并选择“使用网页搜索”来让ChatGPT搜索网页回答问题

![notion image](https://img.aiexplorernote.com/pic/another-two-ways-to-trigger-chatgpt-search.png?t=134d1f9c-c2a3-80e0-a753-de0e5504191b)

话说回来，既然不开启这个按钮ChatGPT也会搜索，那按钮的意义何在？个人觉得还是删掉好哈哈

## ChatGPT搜索（SearchGPT）的几种富结果

刚才试着触发官网文章中提到的几种富媒体，有几个没试出来，OpenAI也没给出触发方法，这要看运气

下面结合我自己的试验和官网的演示，一起来看看ChatGPT都支持哪些富媒体吧

**一 、图片** 之前ChatGPT是无法返回图片的，最多让它通过Markdown语法呈现，但那个如果真要用很麻烦。现在官方支持的这个看起来还是很不错的：

一般如果触发图片富媒体，ChatGPT会在网上搜索十一张左右的图片展示在回复的顶端，初始是四张：

![notion image](https://img.aiexplorernote.com/pic/chatgpt-show-pictures-in-carousel.png?t=134d1f9c-c2a3-80c5-8835-c4af92c0e142)

然后任意点击其中一张图片可以放大，用户也可以左右点击查看更多图片

![notion image](https://img.aiexplorernote.com/pic/view-chatgpt-picture.png?t=134d1f9c-c2a3-80e2-9648-ded5b9532c2a)

每张图片左下角都有图片链接来源，点击可以进入源网页

![notion image](https://img.aiexplorernote.com/pic/link-in-pictures-of-chatgpt-search.png?t=134d1f9c-c2a3-8020-8579-c0b098453ee3)

另外图片展示还有这种形式：

![notion image](https://img.aiexplorernote.com/pic/new-form-of-pictures-in-chatgpt-search.png?t=134d1f9c-c2a3-80dd-8235-c980eb3322fc)

说不定还有其他展示形式，如果你触发了，欢迎分享哦

**二、天气**

这个我没成功触发，触发效果如图：

![notion image](https://img.aiexplorer.rest/pic/weather-in-chatgpt-searchpng?t=134d1f9c-c2a3-80db-b007-d3586644b5c8)

**三、地图**

这个我成功触发了

![notion image](https://img.aiexplorernote.com/pic/map-in-chatgpt.png?t=134d1f9c-c2a3-802a-a05e-d8c9de67f18c)

**四、股市**

未成功触发

![notion image](https://img.aiexplorernote.com/pic/stock-in-chatgpt-search.png?t=134d1f9c-c2a3-80e6-9909-d59287631a43)

**五、球赛**

未成功触发

![notion image](https://img.aiexplorernote.com/pic/sports-in-chatgpt-search.png?t=134d1f9c-c2a3-800d-ad3d-d38e432102c5)

**六、新闻**

未成功触发

![notion image](https://img.aiexplorernote.com/pic/news-in-chatgpt-search.png?t=134d1f9c-c2a3-800d-8e3e-dc94cc60c57f)

**七、视频**

另外这个是我自己发现的，ChatGPT搜索还能返回视频，并可以在ChatGPT聊天也直接观看：

![notion image](https://img.aiexplorernote.com/pic/video-in-chatgpt-search.png?t=134d1f9c-c2a3-8008-8065-deb19936f42c)

## 主打一个全面---一次搜索参考数十个页面

相比富媒体，我觉得最重要的还是现在的ChatGPT每次搜索都会参考从多个搜索引擎提供商获得的十几二十个页面的内容来回复用户的问题，使得回复参考价值比之前高的多

![notion image](https://img.aiexplorernote.com/pic/link-source-in-chatgpt-search.png?t=134d1f9c-c2a3-80eb-9759-f3aaac2638ef)

OpenAI背后的大金主是微软，之前ChatGPT搜索的时候一直默认用的必应搜索引擎，每次搜索只参考从必应浏览器找到的不超过六个页面作为参考回复用户的问题，关于数量为什么是这个数量不太清楚，我只知道微软自家的Copilot AI之前随随便便都是参考三十个网页

这次OpenAI改版之后能够同时从多个搜索引擎提供商获得信息，虽然没明说，我想这里面肯定包含谷歌。OpenAI翅膀硬了是吧，这事儿跟微软商量过吗\[狗头\]

## 进行搜索的时候信息会被泄露吗？

会的，但是泄露的只是你查询的内容，而且是ChatGPT进行“转义”后的查询内容。因为ChatGPT搜索需要调用第三方搜索引擎，在搜索的时候这些查询的内容会和你在搜索引擎中直接搜索一样不可避免地发送给搜索引擎提供商

另外你的地理位置信息也会被记录用于优化搜索查询效果

总结其实就是没啥事儿，和直接使用搜索引擎是一样的

## 我觉得ChatGPT搜索有可能带来垄断

在看OpenAI发布的关于SearchGPT的文章时，我发现一个比较耐人寻味的地方，是这么写的：

> ChatGPT的搜索功能连接用户与网络中的原创、高质量内容，并将这些内容融入对话。这种方式让用户可以在对话界面中与信息互动，而内容创作者也有机会接触更广泛的观众群体。通过这项功能，OpenAI希望帮助用户发现新的网站和发布者，为搜索带来更多选择。

> OpenAI与多家全球新闻出版商（如美联社、Axel Springer、康泰纳仕、金融时报、赫斯特、路透社等）进行了广泛合作，聆听了这些出版商的反馈。任何网站或出版商都可以选择出现在ChatGPT的搜索结果中，这样既为用户提供更丰富的信息来源，也为出版商带来了新的展示机会。

前面说ChatGPT搜索致力于与高质量内容创作者合作为用户提供更有用的信息没错，值得玩味的点是，这里面的“内容创作者”怎么来的？从它说的“高质量”和它下面提到的与多个知名新闻出版商的动作来看，是不是可以理解为一般只有巨头才有资格进入ChatGPT搜索所谓的高质量内容创作者行列并优先展示给用户？

如果是这样的话，又怎么可能“帮助用户发现新的网站和发布者”，这种情况下小型和新兴企业理论上是没机会的，最终会变成谁给的钱多谁就能在ChatGPT搜索时展示在前面

这么看后面说的“任何网站或出版商都可以选择出现在ChatGPT的搜索结果中”更像是在打广告，吸引巨头来“合作”

所以我隐约感觉OpenAI这波操作可能带来垄断
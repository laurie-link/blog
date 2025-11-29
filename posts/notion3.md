---
title: NotionNext建站教程（二）
date: 2024-11-05
tags: ["Notion使用", "互联网"]
category: 技术分享
---

之前写过[NotionNext,用Notion搭建一个多模态第二大脑，让你对笔记爱不释手](https://www.aiexplorer.rest/article/notion1)介绍NotionNext搭建的个人网站和一篇教程 [NotionNext搭建个人网站教程（一\)](https://www.aiexplorer.rest/article/notion2)，解决了用这个项目建站的一些基本问题，包括如何购买域名，一直到初步建成自己的博客网站。

![notion image](https://pic4.zhimg.com/80/v2-5d55ebe2aeb0d596eca7b57f46960b6d_720w.webp?t=117d1f9c-c2a3-8086-b3b4-c5a24132927a)

但是，到这一步建成的网站上的内容都只是一些模板内容

这篇教程将会涉及到如何修改网站内容，让它成为真正的自己的个人网站。主要以我自己用这个项目建的网站为例。

![notion image](https://pic2.zhimg.com/80/v2-18636c575bdde58855efe3094f7c8833_720w.webp?t=117d1f9c-c2a3-8045-8308-d101eb449ea6)

网站网址：

aiexplorer.rest

NotionNext有多个主题，有如图的12种，分别是

EAMPLE,FUKASAWA,GITBOOK,HEO,HEXO,MATERY,NAV,MEDIUM,NEXT,NOBELIUM,PLOG,SIMPLE

![notion image](https://pic2.zhimg.com/80/v2-eff2bf36aeede1c38db63af5e78b2849_720w.webp?t=117d1f9c-c2a3-8081-bfe8-dccc7053fec8)

这个主题如何更换会在后面讲到，我全都试了一遍，发现HEXO这个主题既好看又简单，所以就一直用的这个主题，因此这篇教程将会以HEXO主题举例修改网页的内容。当然，除了HEO主题之外，其他主题都和HEXO一样简单，大家可以依葫芦画瓢，聪明的你一定可以的~

## 一、修改网页标题、网页描述、作者头像、封面大图

我们先从顶部开始

![notion image](https://pica.zhimg.com/80/v2-5c3bfe77f9b22b09c7c1fe3695ade12a_720w.webp?t=117d1f9c-c2a3-802b-a8e3-f17a5be71e3c)

①：作者头像,如图点击

![notion image](https://pic4.zhimg.com/80/v2-7788d3f35f8c861fb127c18f2edff1a7_720w.webp?t=117d1f9c-c2a3-80b0-8729-c8c8bd6f7000)

②：站点标题

③：网站描述

这两点除了会因为主题的不同而变化外，主要显示在这里：

![notion image](https://pic2.zhimg.com/80/v2-9c546997e22d71d1799ec5265de7cb07_720w.webp?t=117d1f9c-c2a3-80fc-a384-ce921ed90bad)

④：封面大图，封面大图只有Matery和Hexo主题有，点击图中”change cover”修改即可

## 二、数据库表头介绍

如图：

![notion image](https://pic1.zhimg.com/80/v2-e940385837f2fcc3fd1e06da5f6622aa_720w.webp?t=117d1f9c-c2a3-8040-8f8e-e00033d39d83)

接下来我们一个一个看

## 1.类型（type）

![notion image](https://pic3.zhimg.com/80/v2-fcc15a5278c129c183e50f6d5b67ba34_720w.webp?t=117d1f9c-c2a3-80bf-a38d-fee4e9527b54)

### ①Post:

文章，这个类型的数据会被发布成一篇篇的文章展示在网站上，也就是你现在看到的示例文章所在的地方

### ②Page:

单页，主要用于旧的菜单以及隐藏单页，关于隐藏单页:

**示例** ：

下图中的隐藏单页`slug` 值为`example-3`，因此在浏览器中访问链接：[https://preview.tangly1024.com/example-3](https://link.zhihu.com/?target=https%3A//preview.tangly1024.com/example-3) ， 即可展示此页面内容。

![notion image](https://pic4.zhimg.com/80/v2-dad4fd9ed37e2af8a46d3c333fb74085_720w.webp?t=117d1f9c-c2a3-80bb-8a16-fa8cb1ea2f5a)

**隐藏单页的使用场景**

目前已知有两种使用场景：

  1. 特许用户访问：某些页面不希望在博客列表或导航菜单中展示入口，只有知道完整地址的用户才能直接访问。

  2. 内嵌页面：博文中点击文字链接，需要跳到另一篇文章，且这些文章时不需在博客列表或者导航菜单中 展示，而仅仅作为某篇博文的附属文章。

**内嵌页面**

感谢 [不知名小宇](https://link.zhihu.com/?target=https%3A//bzmxiaoyu.cn/) 提供隐藏单页在内嵌页面（或叫多级页面）场景下的使用建议。这里对内嵌页面的使用做一些说明：

假设有一篇博文A，其中有两个论点需要跳到文章B和文章C中进行补充解释。而B和C的内容仅作为文章A的附属、不需要展示在博文列表。此时可以将B、C设置为隐藏单页，并在文章A中添加一个**链接** 作为入口，从而实现跳转到特定页。

![notion image](https://pic1.zhimg.com/80/v2-8f7c7339205cb4cc4965ac5a16a756c0_720w.webp?t=117d1f9c-c2a3-8040-8d07-ccba233d73e3)

**关于** 链接：如下图示例，链接格式为 **https://\`$\{你的站域名\}**`**/**`**$\{slug\}\`**

![notion image](https://pic3.zhimg.com/80/v2-71be84291a69ba9823de0e0f206636f8_720w.webp?t=117d1f9c-c2a3-8090-b203-d34087e0d58c)

### ③Notice: 公告，通知

这个一般来说不常用，效果：

![notion image](https://pic1.zhimg.com/80/v2-c6c77fc951f6ef2a6e36c22054f1f45e_720w.webp?t=117d1f9c-c2a3-805e-97c8-c3cfb3c1add2)

### ④Menu&SubMenu

之所以放在一起是因为两者是有关联的，主要用于菜单，较常用,菜单效果：

![notion image](https://pica.zhimg.com/80/v2-d872f2fdf8a8b8fbceef1547458cefb0_720w.webp?t=117d1f9c-c2a3-8055-a068-ea9ce845fa2b)

**添加普通菜单-**`**Menu**`

在notion中添加一个类型为`Menu`的页面：并包含以下字段

**字段名**| **说明**| **示例**  
---|---|---  
type| 类型| Menu  
title| 显示在菜单栏的标题| 首页  
status| 状态| Published  
slug| 菜单链接| /  
icon| 菜单图标，https://fontawesome.com/search| fas fa-home  
  
示例配置:

![notion image](https://picx.zhimg.com/80/v2-d93b740feec759081d0fcb7130fe390f_720w.webp?t=117d1f9c-c2a3-80ca-b888-c279d92fd0f0)

**添加子菜单-**`**SubMenu**`

![notion image](https://pic3.zhimg.com/80/v2-f59ebe359edc503a00c178c49452edde_720w.webp?t=117d1f9c-c2a3-801e-a20a-c684f6d115ca)

这三个菜单构成一组一级菜单和二级菜单

子菜单绑定方法：在列表中，`SubMenu`紧跟在`Menu`后面即可做为子菜单。

图片示例，这三个菜单构成一组一级菜单和二级菜单

子菜单3点注意：

  1. 只有普通菜单`Menu` 后能挂子菜单`SubMenu`；`Menu`不能挂`Menu`、`SubMenu`不能挂`SubMenu`；

  2. `SubMenu`若没有紧跟在一个`Menu`后面，则成为孤儿菜单，不会显示。

  3. `Menu`后面一旦挂载了`SubMenu`，则此`Menu`就无法点击跳转，只能作为展开菜单使用。

其他的标题（title），分类（category）,标签（tag），总结（summary）,日期（date），密码（password），这几个很好理解，就不赘述了。这里讲讲状态（status）、slug和图标（icon）

## 二、状态

![notion image](https://pic2.zhimg.com/80/v2-d1581009e1b61a19af5c8a4eb7dd7e69_720w.webp?t=117d1f9c-c2a3-80c2-b276-f21927b84180)

从图中可以看出主要分为三种状态：

### ①发布（Published）

只有处于此状态的数据才会被发布在网站上

### ②不可见（Invisible）

这个主要用于上面说的隐藏[单页](https://zhida.zhihu.com/search?content_id=235357750&content_type=Article&match_order=8&q=%E5%8D%95%E9%A1%B5&zhida_source=entity)的场景

### ③草稿（Draft）

处于此状态的数据均不会被发布到网站上

## 三、Slug

这个作者说是必填项，但是我试过，有的文章不填也能正确显示。另外这个表头的值一方面是一些特定的功能，如搜索，归类等：

![notion image](https://pic2.zhimg.com/80/v2-21c7b4525e5a20edfebf34b9289046ed_720w.webp?t=117d1f9c-c2a3-80fe-adf5-dac42f5881af)

另一方面主要是用来给菜单存放跳转链接，或者上面所说隐藏单页时候的链接。

![notion image](https://pic3.zhimg.com/80/v2-3056ddcfd2fc9c2267ecc4256b88cc54_720w.webp?t=117d1f9c-c2a3-80fc-9a45-c939e18a1f1a)

## 四、图标（icon）

NotionNext使用fontawesome作为图标库，这是一个在线的图标字体库提供了大量的免费图标

![notion image](https://pic4.zhimg.com/80/v2-89855de740ab5cd037b9aaf1a5f8e45b_720w.webp?t=117d1f9c-c2a3-80e0-a36b-d3079784b9dc)

点击这个链接预览更多图标：[https://fontawesome.com/search?o=r&m=free](https://link.zhihu.com/?target=https%3A//fontawesome.com/search%3Fo%3Dr%26m%3Dfree)

在图标库中选择自己想要的图标，点击查看详情

![notion image](https://pic3.zhimg.com/80/v2-ae4dfc11837375b2c01ab5a9a632c56a_720w.webp?t=117d1f9c-c2a3-80a5-85ec-fad601ba03f8)

下方绿色的字符就是我们需要的东西，例如 这里的`fa-regular fa-image` 这串代码粘贴到您的notion中的icon字段，即可显示出这个相册的图标。

**图表类型可以缩写**

例如notion库中配置的默认用户图标是 `fas fa-user` ，其本质上就是 `fa-solid fa-user` 这个图标，只不过图标类型被缩写了。

这个主要是我们建的菜单有时候可能需要特定的标识符，比如

![notion image](https://pic3.zhimg.com/80/v2-6fc0fd7b43d11d545d2d9819de56edd4_720w.webp?t=117d1f9c-c2a3-8005-aeaa-e552819d8e52)

## 三、更改网页侧边栏图标

![notion image](https://picx.zhimg.com/80/v2-ca4884a3e492d16a991b0cc5cbaefec1_720w.webp?t=117d1f9c-c2a3-80ae-ba3c-d318707e58a5)

侧边栏图标就是这个

这里我们需要用到这个网站来吧想要的图片转成ico结尾的格式：[https://favicon.io/](https://link.zhihu.com/?target=https%3A//favicon.io/)

转换好之后来到我们fork项目的主页，点击public文件夹

![notion image](https://pic1.zhimg.com/80/v2-1b160c05ba9f0ca0c8fce7c7187cd464_720w.webp?t=117d1f9c-c2a3-80fa-b4f8-cc94ab32ff48)

上传刚刚转换的图片

![notion image](https://pica.zhimg.com/80/v2-a1935849e3f1170618f272a803175a66_720w.webp?t=117d1f9c-c2a3-8071-9b7f-c3916b2adada)

现在侧边栏图标应该就改过来了。

## 四、修改源代码

站点的大部分配置都可以在**blog.config.js** 文件中找到； 您只需修改对应的配置，Vercel将自动部署您Github仓库中的最新代码。

![notion image](https://pic3.zhimg.com/80/v2-536ef803239aca2601ca0bf2424e0b22_720w.webp?t=117d1f9c-c2a3-80a4-97f0-e1749288e8c7)

配置方法：在您的github中找到此文件，点击右上角的编辑按钮，可以任意修改参数。

## 举个栗子

![notion image](https://picx.zhimg.com/80/v2-07fe19ef7eaf959ffed8bbc18fa6a8ad_720w.webp?t=117d1f9c-c2a3-807d-b065-ca864439fdb3)

在图中的第8行，我们可以更改默认主题，其他行后面也都有对应的注释，大家看着改就好

按照图片中我做的更改，最终呈现出来是这样的：

![notion image](https://pic2.zhimg.com/80/v2-a1e6a9a95ea3fa10721814305fbe7f67_720w.webp?t=117d1f9c-c2a3-80ee-b52d-e8904ca1938c)

![notion image](https://pic2.zhimg.com/80/v2-d273d8f4b6686030c557b4939bb81361_720w.webp?t=117d1f9c-c2a3-80b0-911b-e3251abd62fb)

其他的也都是差不多这样修改，大家可以自行尝试一下，还是比较简单的。

## 五、主题设置

主题设置在项目主页的themes处：

![notion image](https://pic2.zhimg.com/80/v2-8443b1abe574909ef4ac819d2a7e95e7_720w.webp?t=117d1f9c-c2a3-80d3-ac13-e055aff5f971)

在这里你可以对每个主题进行更加精细化的配置，特别是heo主题，主要的内容都是在这里配置的。

## 下期预告：

  1. 音乐播放器

  2. 评论插件

  3. heo主题配置

  4. 期待你的三连

参考文章：

[https://docs.tangly1024.com/article/notionnext-hidden-page](https://link.zhihu.com/?target=https%3A//docs.tangly1024.com/article/notionnext-hidden-page)

[https://docs.tangly1024.com/article/notion-next-secondary-menu](https://link.zhihu.com/?target=https%3A//docs.tangly1024.com/article/notion-next-secondary-menu)

[https://docs.tangly1024.com/art](https://link.zhihu.com/?target=https%3A//docs.tangly1024.com/article/notion-next-font-awesome)
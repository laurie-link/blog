---
title: ChatGPT搜索引擎插件 & UI更新（11-01）
date: 2024-11-05
excerpt: OpenAI更新ChatGPT联网功能并推出ChatGPT搜索引擎插件
tags: ["ChatGPT更新", "AI快讯"]
category: AI学习
---

今天ChatGPT的UI又进行了一次更新，把[上次这个更新](https://www.aiexplorer.rest/article/chatgpt-ui-update)里面新加的斜杠命令调出的搜索功能移到对话框中，和上传文件按钮一起直接显示在UI上。可能是怕用户不知道用斜杠命令而忽视这个功能，确实是这样，很多人都没怎么接触过这种斜杠命令

![notion image](https://img.aiexplorernote.com/pic/web-search-chatgpt.png?t=131d1f9c-c2a3-8027-b6b8-fe8576897987)

按钮选中下的状态：

![notion image](https://img.aiexplorernote.com/pic/chatgpt-search-selected.png?t=131d1f9c-c2a3-80c2-a8b5-f1fb3404833d)

碰巧碰到这个情况：即使我开启了联网按钮，ChatGPT也不一定会搜索信息

![notion image](https://img.aiexplorernote.com/pic/chatgpt-search.gif?t=131d1f9c-c2a3-806c-a36b-f2f7e8fe8dc6)

这我就不是很懂了，居然会出现开联网按钮还不搜索的情况，不知道是不是卡了

真的巧，这时候刚好碰到ChatGPT说自己不能联网的情况

![notion image](https://img.aiexplorernote.com/pic/chatgpt-cant-search.png?t=131d1f9c-c2a3-807e-9b8a-d2cee666a1dc)

这种概率极低的事我一次碰到俩，要发财了哈哈

不过这说明背后大概率就是通过prompt实现，也证明大模型的回复确实是存在随机性的

总的来说选中联网按钮之后ChatGPT是必定会联网搜索的

提一下，选中搜索后斜杠命令就被禁用了

![notion image](https://img.aiexplorernote.com/pic/20241101214458.png?t=131d1f9c-c2a3-80ea-813c-d74ca4927aa5)

就是像原来一样只能同时用一个命令

还有一个小更新是ChatGPT现在可以像展示网店商品图一样展示用户咨询的相关主题的图片

![notion image](https://img.aiexplorernote.com/pic/chatgpt-show-pictures-in-carousel.png?t=132d1f9c-c2a3-802d-8337-cced26b0f729)

然后随机点击一张图片，图片会被放大，且可以看到实际显示的不止四张图片，用户可以左右点击查看更多的图片

![notion image](https://img.aiexplorernote.com/pic/view-chatgpt-pictures.png?t=132d1f9c-c2a3-80db-b09a-d87381b43b95)

## OpenAI搜索引擎插件

今天还发现OpenAI推出了一个ChatGPT搜索引擎插件，当时是是在ChatGPT的对话页面提醒我安装这个插件的，但是没截图那个提示，后来安装了就看不到那个提示了

现在只有chrome扩展商店能下载，edge扩展商店还没上线，下载链接：

[ChatGPT search - Chrome Web Store](https://chromewebstore.google.com/detail/chatgpt-search/ejcfepkfckglbgocfkanmcdngdijcgld)

![notion image](https://img.aiexplorernote.com/pic/chatgpt-addon.png?t=131d1f9c-c2a3-8097-89cf-c409d09bfa8b)

这个插件安装了以后，在浏览器地址栏中进行的所有搜索会直接跳转到ChatGPT对话页面，ChatGPT会根据用户的查询调用联网能力查询信息并回答问题

![notion image](https://img.aiexplorernote.com/pic/search-in-adress-bar.png?t=131d1f9c-c2a3-8035-b280-f282a827619d)

OpenAI这是在向搜索引擎挑衅啊，不知道微软作何感想哈哈

这种地址栏搜索触发的机制让我想起谷歌Gemini更新的这个功能，OpenAI应该是抄的谷歌

谷歌Gemini是在地址栏中输入“@”，然后选择Gemini的时候就会跳转到Gemini进行对话

![notion image](https://img.aiexplorernote.com/pic/chat-with-gemini-through-address-bar.png?t=131d1f9c-c2a3-8004-82a6-f8f5f4e9e501)

触发机制上比OpenAI的插件更灵活或者说高级一点，因为并不是所有在地址栏的查询都会触发，而是允许用户选择性的通过“@”触发。很多时候在地址栏直接查询实际上就不想回到搜索引擎主页再查询，OpenAI这个插件的触发机制导致用户如果不想触发ChatGPT就只能返回搜索引擎主页或者现有搜索结果页进行查询，有时会给用户带来一定困扰

但这操控搜索引擎本身这件事已经超出了OpenAI的能力范畴
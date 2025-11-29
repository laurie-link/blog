---
title: 把Claude变成Cursor的MCP服务器，Cline完美平替
date: 2025-06-30
tags: ["AI工具", "AI项目", "深度AI博文"]
category: AI学习
---

Dektopcommander MCP，这个 [MCP 服务器](https://www.aiexplorernote.com/article/model-context-protocol)主要用于给 Claude 桌面应用程序添加执行命令行的功能，这样 Claude 就能像 [Cursor](https://www.aiexplorernote.com/article/cursor-basics) 和 [Gemini CLI ](https://www.aiexplorernote.com/article/gemini-cli) 一样用命令行对本地文件进行增、删、查。并且可以编写包含"old string"以及"new string"的结构化数据实现像 Cursor, Windsurf 那样对文件内容进行文本替换

官网地址:


[Desktopcommander](https://desktopcommander.app)


GitHub 地址:

“把 Claude 桌面应用程序打造成一站式 AI 开发工具”是 Desktopcommander MCP 写在官网上的愿景，但现在看还不太可能

首先，修改文件内容时它要让 Claude 同时写新旧代码，效率上相对于 Cursor 会大大下降。Cursor 里 Claude 只要写新代码，然后由专门的代码应用模型应用到文件中。而且 Cursor 有最大优势 -- 差异视图 UI，以及接受/拒绝的回滚机制，是 Desktopcommander MCP 望尘莫及的

所以感觉这个 MCP 服务器目前更适合用来做一些程序初稿。但用它改比较成熟的程序的话，万一改乱就麻烦了

除此之外，这个 MCP 服务器用到现在个人感觉还不错。用起来很丝滑，暂时没有效率低的明显体感。而且我发现 Claude 桌面应用程序输出 Token 会比 Cursor 种使用 API 调用 Claude 上限更高，变相给 Desktopcommader MCP 增加了优势

综合看来，应该说 Desktopcommander MCP 把 Claude 桌面应用程序变成 Cline 最合适，这套组合简直是 Cline 完美平替

* * *

安装 Desktopcommander MCP非常简单。安装 Node. js 和 Claude 桌面应用程序后，一行命令就能搞定:

Windows 执行:

Mac/Linux 运行:

* * *

最后来个关于如何注册 Claude 账号的彩蛋

Claude 账号注册是要外国手机号的，之前试过 SMS Activate 那个接码平台，接不到验证码，我后来用 [Talkatone](https://www.aiexplorernote.com/article/talkatone) 美国手机号注册的。但Talkatone 对小白来说难度太大。最近看到 WildCard 有免费提供 Claude 注册接码服务

![notion image](https://img.aiexplorernote.com/share-google-account/wildcard-register-number.jpg?t=222d1f9c-c2a3-80e8-9725-c6385faa600a)

我不知道能不能用，感觉应该可以

温馨提示：WildCard 是一家比较稳定的虚拟卡供应商，你如果不知道怎么充值 Claude，可以直接买 WildCard 虚拟卡充值（没恰饭）

之前Claude 封号严重，但最近好像正常使用不太会被封，我这号使用快半年了都。另外，Claude 封号是会**退款** 的啊！怕个锤子。加上能[无限注册谷歌账号](https://www.aiexplorernote.com/article/cant-register-google-account-indefinitely)，我表示不虚

如果你在充值 ChatGPT，建议能转 Claude 就转 Claude。现阶段 ChatGPT 性价比很低，用 Claude 的话能玩 MCP 服务器
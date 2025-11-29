---
title: 解决Obsidian Git插件移动端同步难题
date: 2025-06-16
excerpt: 完美解决git插件移动端同步Obsidian笔记库的难题
tags: ["实用工具"]
category: 互联网工具
---

前段时间写过一篇[使用Obsidian Git插件实现同步](https://www.aiexplorernote.com/blog/obsidian-git)，但Git插件对移动端支持很差，几乎完全不能用。好在最近发现一个手机软件gitsync，可以代替git插件将Obsidian笔记库同步到移动端

![notion image](https://img.aiexplorernote.com/share-google-account/gitsync-logo.jpg?t=214d1f9c-c2a3-800e-8da5-e722f42220b7)

这个软件需要在移动端的play商店中下载，但苹果上我不知道有没有这个软件

首先来到play商店搜索并安装这个软件

![notion image](https://img.aiexplorernote.com/share-google-account/gitsync-app-in-play-store.jpg?t=214d1f9c-c2a3-809e-93bc-dfdf6b0593b3)

打开软件，授权通知、允许管理所有文件，之后软件会让你选择一个git托管平台并认证，这里选择第一个GitHub，点击OAUTH

![notion image](https://img.aiexplorernote.com/share-google-account/authenticate-github-within-gitsync.jpg?t=214d1f9c-c2a3-8055-bda6-fde6b6a758e6)

在浏览器中完成认证并点击跳转到GitSync，如果没有跳转应该是浏览器开了禁止弹出通知，在地址栏找找红点之类的东西点击手动跳转

跳转到gitsync后，它会自动扫描你的仓库，在最上方列出仓库列表

![notion image](https://img.aiexplorernote.com/share-google-account/listed-repositories-in-gitsync.jpg?t=214d1f9c-c2a3-80f5-a16d-cd12cbf929ed)

选择你的Obsidian笔记仓库和一个本地文件夹进行拉取，记好选择的文件夹，后面Obsidian中导入要用。注意，Git仓库越大，拉取越慢，而且很可能失败，跟网速也有关系。失败很正常，但我试过，即使失败后把原来仓库文件夹删掉重新拉取，第二次拉取速度也会快很多。如果拉取不成功可以多试几次

实在不行可以直接把笔记库文件夹从电脑用文件传输到手机，然后使用gitsync中的使用本地文件夹功能导入仓库，本地文件夹导入功能就在拉取仓库页面最下面

成功拉取仓库后，gitsync会问你要不要开启自动同步

![notion image](https://img.aiexplorernote.com/share-google-account/auto-sync-in-gitsync.jpg?t=214d1f9c-c2a3-80fe-890e-eff8e8357c83)

你可以选择开启，然后它会让你在手机无障碍功能中允许gitsync开启

![notion image](https://img.aiexplorernote.com/share-google-account/accessibility-service-disclosure.jpg?t=214d1f9c-c2a3-80d2-9801-d562a955744f)

这个每种手机不太一样，我是vivo，界面长这样，点进去开启就行

![notion image](https://img.aiexplorernote.com/share-google-account/gitsync-in-accessbility-service.jpg?t=214d1f9c-c2a3-8002-978e-d8e64ea61eff)

开启后，回到软件主页面，点开下面的“Auto Sync Settings"，先点击下面的"SELECT APP\(S\)"，选择下载的Obsidian软件，这时候就可以点亮开启软件时自动同步同步和关闭软件时自动同步按钮了

![notion image](https://img.aiexplorernote.com/share-google-account/auto-sync-button-in-gitsync.jpg?t=214d1f9c-c2a3-800b-a08f-f85e65774b43)

我没有开这两个功能，一是我每次打开软件或者切换到另一个软件或者关闭软件，它都会创建提交，导致仓库出现很多无意义的提交。还有每次同步它都会在屏幕上弹出通知，很碍眼，不过把它的通知权限关掉就没有这个问题了

还有，如果要让它自动同步，gitsync须默认开启。这当然是不可能的，强迫症的我希望在刷新后台的时候一个不留。所以我每次同步都得手动打开gitsync，加上上面两个原因，我干脆每次都手动同步了

gitsync还是挺全面的，有以下功能：

一、有冲突解决功能。同步发生冲突时会弹出，可以在图形页面上直接选择接受远程或本地来解决冲突

二、手动同步功能。上面这里选择”SYNC CHANG"，点击就是手动同步，等价Git插件commit and sync按钮

![notion image](https://img.aiexplorernote.com/share-google-account/sync-changes-in-gitsync.jpg?t=214d1f9c-c2a3-8060-bbba-f46eb9a6abd4)

三、强制拉取、强制推送。点击原来"SYNC CHANG"旁边的三个点，会出现一些选项

![notion image](https://img.aiexplorernote.com/share-google-account/git-operations-in-gitsync.jpg?t=214d1f9c-c2a3-8020-9700-f6cd1e3ba6ce)

但好像这几个按钮有bug，我点击FORCE PULL，它切换到FORCE PUSH，反之亦然。不过只要最后选中的是正确功能，功能运行上是正常的。这个MANUAL SYNC 我没看懂是干什么的，一般应该用不到

四、设置作者信息、邮箱、.gitignore，以及排除同步文件夹。点击旁边齿轮图标就能打开

![notion image](https://img.aiexplorernote.com/share-google-account/gitsync-settings.jpg?t=214d1f9c-c2a3-8069-8065-ed67640bc61a)

最后给大家一两个小Tip。切换账号的话点击主页“AUTH”，重新登录一个GitHub账号就行

还有一个，由于Git插件在移动端支持性很差，开着会一直弹失败通知，我的解决办法是将Git插件设置为只在桌面端使用，以下为操作步骤：

在桌面端打开“.obsidian\plugins\obsidian-git”文件夹下，Git插件的manifest.json文件，把"isDesktopOnly"改为"true"

![notion image](https://img.aiexplorernote.com/share-google-account/git-manifest-json.jpg?t=214d1f9c-c2a3-80f8-a3d6-e506f71c0d7d)

gitsync我用的时间不算久，但目前来看确实能用。习惯Git的小伙伴（比如我）可以通过这个软件解决Obsidian移动端同步问题

如果大家使用过程中发现有什么问题也欢迎在评论区讨论哦。下次见
---
title: FFmpeg怎么安装
date: 2024-11-05
excerpt: 这应该是最出名和强大的开源多媒体处理工具了吧
tags: ["开发", "技术"]
category: 技术分享
---

FFmpeg是一款强大的多媒体处理工具，且开源免费。FFmpeg广泛用于音视频的转换、处理和流式传输。来看看它能做什么：

  1. **视频和音频转换** ：可以在多种格式之间进行转换，比如从 AVI 转为 MP4 或从 MP3 转为 AAC。

  2. **视频处理** ：包括剪辑、合并、分割、添加水印、旋转等操作。

  3. **音频处理** ：支持音频剪切、音量调节、声道转换等。

  4. **流媒体传输** ：支持将视频流实时推送到流媒体服务器，比如用于直播推流。

  5. **滤镜处理** ：可以添加多种滤镜效果，比如模糊、锐化、变速等，应用于音视频内容。

  6. **解码和编码** ：FFmpeg 支持多种编解码器，比如 H.264、H.265、VP9 等，可以用来压缩或解压缩音视频数据 只要会用FFmpeg，我们可以自己在本地实现一些格式转换的操作，不用再去网上找在线格式转换器来处理多媒体文件

很多开源项目都用到FFmpeg进行多媒体文件的处理，所以把正确安装FFmpeg是很有用的，这篇文章分享一下如何安装FFmpeg并把它添加到系统变量以便全局访问，以Windows平台为例

如果你不确定你是否安装了FFmpeg，打开终端，输入以下命令：

如果没有报错，输出一大段信息就是安装且添加到系统路径中了

![notion image](https://img.aiexplorernote.com/pic/ffmpeg-installed.png?t=132d1f9c-c2a3-80bb-9e10-c1bd8f27d6fa)

如果你没安装，可以按照下面的步骤安装

  1. 首先去FFmpeg的官网

点击右边的“Download”

![notion image](https://img.aiexplorernote.com/pic/click-download-on-ffmpeg.png?t=132d1f9c-c2a3-8045-9560-e16db86fcf35)

  1. 选择对应平台安装文件，Windows这里有两个安装的方式，我选的第一个

![notion image](https://img.aiexplorernote.com/pic/choose-right-ffmpeg-package.png?t=132d1f9c-c2a3-8071-a86b-ff21f0ba4ac8)

  2. 选择最新版的Full安装包

![notion image](https://img.aiexplorernote.com/pic/choose-full-pavkage-of-ffmpeg.png?t=132d1f9c-c2a3-80b6-830b-f8f0b487294a)

  3. 解压下载的安装包

  4. 下面需要把FFmpeg添加到全局变量中，进入解压后的文件夹，一直往里点，找到“bin”文件夹所在的目录并复制它

![notion image](https://img.aiexplorernote.com/pic/ffmpeg-bin-path.png?t=132d1f9c-c2a3-80da-a387-d9e17d9e22ba)

  5. 打开设置，搜索“高级系统设置”，在打开的窗口中选择“修改环境变量”

![notion image](https://img.aiexplorernote.com/pic/edit-environment-variables-on-windows.png?t=132d1f9c-c2a3-804c-a7ce-fcf2020640f7)

  6. 在下面的“系统变量”部分中，找到“Path”并选中，再点击“编辑”

![notion image](https://img.aiexplorernote.com/pic/edit-windows%3Denviroment-variables.png?t=132d1f9c-c2a3-801b-9d6c-fb0f642d6d90)

  7. 点击“新建”，输入你刚才复制的系统变量，最后依次点击确认关掉所有窗口就可以啦

![notion image](https://img.aiexplorernote.com/pic/ffmpeg-in-system-environment-variables.png?t=132d1f9c-c2a3-80d5-9f99-ef179e93de72)
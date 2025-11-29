---
title: 一个让你在Windows上运行MacOS系统的项目
date: 2024-11-17
tags: ["技术"]
category: 技术分享
---

项目地址：[sickcodes/Docker-OSX: Run macOS VM in a Docker\! Run near native OSX-KVM in Docker\! X11 Forwarding\! CI/CD for OS X Security Research\! Docker mac Containers.](https://github.com/sickcodes/Docker-OSX)

![notion image](https://img.aiexplorernote.com/pic/docker-osx-github-stars.png?t=140d1f9c-c2a3-8089-9c2c-f796e023a9c6)

这个项目已经有将近5万颗星星，说明还是很有价值的。主要用来在Linux和MacOS系统上通过docker容器运行MacOS虚拟机，对于需要再Mac上开发应用程序或进行某些测试的小伙伴应该会有帮助。当然如果你对Mac系统比较好奇，也可以通过这个项目自己部署一个捣鼓一下

我试了一下，前面的依赖全部装好了，就是要配置磁盘大小，分配CPU什么的，可能有点耗时，暂时还没尝试。不过部署总体来讲应该不难

⚠️

有网友反映说由于docker无法使用电脑显卡，会导致运行的Mac系统非常卡
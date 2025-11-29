---
title: CMake如何安装
date: 2024-11-05
excerpt: 两种安装CMake的方法
tags: ["开发", "技术"]
category: 技术分享
---

CMake一般有两种安装方法，一个是直接安装，也可以通过Visual Studio安装

如果你不确定电脑上是否安装了CMake，可以通过下面的命令检查：

如果输出了版本信息就是已经安装了

![notion image](https://img.aiexplorernote.com/pic/cmake-installed.png?t=132d1f9c-c2a3-805e-8742-e193f3ff52ba)

如果出现报错就是没安装，可以通过下面两种方法其中一种安装

## 1\. 直接安装

  1. 去到CMake的下载网址：

  1. 选择对应你电脑系统的版本进行安装，由于需要全局使用CMake，建议直接选名称带有“Installer”的 si文件，这里我选择WIndows X64 Installer

![notion image](https://img.aiexplorernote.com/pic/pic-version-to-install-cmake.png?t=132d1f9c-c2a3-80ad-afb8-ea6f0f09ce00)

  2. 接受协议，点Next

![notion image](https://img.aiexplorernote.com/pic/accept-cmake-terms.png?t=132d1f9c-c2a3-808d-a86f-d89c56938dcb)

  3. 注意，下面两个框都要勾选上，特别是第一个，用于把CMake添加到系统路径以便全局访问，然后点Next

![notion image](https://img.aiexplorernote.com/pic/add-cmake-to-system-path.png?t=132d1f9c-c2a3-8065-8d03-d0b9e74ed948)

  4. 建议更改CMake路径，不改也行，然后点Next

![notion image](https://img.aiexplorernote.com/pic/change-cmake-path.png?t=132d1f9c-c2a3-80fc-bad0-e85b71ae0fd0)

  5. 最后点Install安装，如果有授权点确认就行了

完事儿打开终端，像上面一样输入“cmake --version", 有版本号就是安装成功了

## 2\. 通过Visual Studio安装

如果你已经安装了Visual Studio，也可以选择通过Visual Studio 安装

  1. 在你的电脑上打开Visual Studio，选择Visual Studio Installer

![notion image](https://img.aiexplorernote.com/pic/open-visual-studio.png?t=132d1f9c-c2a3-80c7-98cb-d71bb2cf6bca)

  2. 打开以后选择一个安装在你电脑上的Visual Studio版本，如果你不确定，直接选最新版吧，然后旁边有三个选项，选择"修改“

![notion image](https://img.aiexplorernote.com/pic/change-visual-studio-setup.png?t=132d1f9c-c2a3-8004-a5c1-d82ba0a3fd72)

  3. 接下来在左边的工作负载部分选择“Desktop Development with C++",中文面板应该是”用C++的桌面应用开发“之类的

![notion image](https://img.aiexplorernote.com/pic/install-cmake-via-visual-studio.png?t=132d1f9c-c2a3-8006-8605-db2560063a5e)

  4. 在右边确认”C++ CMake tools for Windows“被勾选

  5. 最后点击下方的安装进行安装就可以了

完事儿记得想开头一样用“CMake --verison"命令测试是否安装成功

## 3\. 手动把CMake添加到系统路径

如果你不小心把CMake从系统路径删除，除了按上面的方法删除重装，也可以通过下面的方法手动把CMake添加为全局变量

### 1\. 如果你是直接安装

  1. 找到你安装CMake的文件夹，去到下面这个路径，复制它

例如我这里是：

![notion image](https://img.aiexplorernote.com/pic/cmake-path.png?t=132d1f9c-c2a3-806e-b328-c3fbd7cc2b92)

  1. 然后打开设置，搜索“高级系统设置”，在打开的窗口中选择“修改环境变量”

![notion image](https://img.aiexplorernote.com/pic/edit-environment-variables-on-windows.png?t=132d1f9c-c2a3-804b-85fe-c0c87efdd678)

  2. 在下面的“系统变量”部分中，找到“Path”并选中，再点击“编辑”

![notion image](https://img.aiexplorernote.com/pic/edit-windows%3Denviroment-variables.png?t=132d1f9c-c2a3-808e-bf43-fbdcdef4e867)

  3. 点击“新建”，输入你刚才复制的系统变量，最后依次点击确认，关掉所有窗口就可以啦

![notion image](https://img.aiexplorernote.com/pic/add-environment-variables.png?t=132d1f9c-c2a3-808e-ba9a-cca29ed1bd30)

记得用“cmake --version"验证

### 2\. 如果你是通过Visual Studio安装

  1. 去到你安装Visual Studio的目录，按照下面的路径依次点开里面的文件夹：

例如我这里是：

![notion image](https://img.aiexplorernote.com/pic/cmake-path-with-viusal-studio.png?t=132d1f9c-c2a3-8068-96b2-d01d03b2f574)

2\. 之后就像上面直接安装的部分提到的一样把这个路径添加到系统环境变量中就行了，如果你不会请参考上一部分
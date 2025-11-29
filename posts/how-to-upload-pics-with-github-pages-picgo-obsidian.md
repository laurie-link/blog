---
title: 图文博主是怎么处理图片的？这篇文章告诉你
date: 2025-04-24
excerpt: 让图文自媒体变成纯码字，不用再劳心图片处理
tags: ["技术", "互联网", "工作", "生活", "推荐", "分享"]
category: 技术分享
---

最近感觉AI没啥好写的，不过文章写到现在多少积攒了些技巧与心得，这篇文章就来分享下我平时文章写作时图片处理的技巧。如果有其他想做，或正在做自媒体的小伙伴，或许这篇文章能帮助大家更省时省力地进行文章创作。如果有大佬有其他好方法，也欢迎在评论区讨论，互相学习交流

先大体说下我处理图片的逻辑：使用GitHub Pages作为免费图床，搭配picgo自动上传图片到GitHub Pages，最后结合Obsidian Image auto upload插件写文章时全自动完成图片上传

为什么要用图床？因为只要把图片上传到图床，就可以通过链接的形式访问图片。如果一篇文章中所有图片都是链接的形式，写完可以直接分发到多个平台。而不用把本地图片依次上传不同平台，再一个个加到文章中，大大减少文章上传时间

关于如何把用链接承载图片的文章分发到不同平台，比如微信公众号，知乎，会在后面的教程中讲，感兴趣的小伙伴记得点关注不迷路哦。下面我们正式开始

## 一、配置Github Pages

GitHub Pages是GitHub提供的一项静态网站托管服务（免费）。许多开源项目或公司的API文档都通过GitHub Pages托管在Github服务器上，如Bootstrap \([getbootstrap.com](http://getbootstrap.com/)\)和Electron \([electronjs.org](http://electronjs.org/)\)

既然GitHub Pages能托管静态网站，托管图片自然不在话下，因此很多人也把它用作图床。下面我们就来看看如何用GitHub Pages搭建免费图床，以及如何自定义图床域名，如何使用picgo简化图片上传流程

### 部署Github Pages

首先，我们新建一个仓库，打开Github（没账号先创建），点击右上角“+” -> "New repository"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/click-new-repository-github.jpg?t=1ded1f9c-c2a3-805a-9e0a-c97c5cc22276)

给项目命名一下，然后“Create repository"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/click-create-repository.jpg?t=1ded1f9c-c2a3-80e6-9b21-d44a2f0897cc)

创建好点击项目”Settings"标签页，选择下方“Pages"，这就是Github Pages配置页面

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/click-github-pages.jpg?t=1ded1f9c-c2a3-80e9-b342-fd0041575ce2)

在Github Pages配置页面中，点击”Branch"部分的"None"，在下拉选项中选"main“，之后点击"Save"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/choose-main-as-branch-to-deploy.jpg?t=1ded1f9c-c2a3-80ca-b464-f5f2663e95b5)

到这里Github Pages已完成部署，你已经能通过Github Pages提供的网址访问你上传到这个仓库的图片了，是不是超级简单！

### 通过GitHub Pages访问图片

下面让我们看看如何通过GitHub Pages访问图片，需要先上传图片到GitHub Pages仓库。接着刚才的步骤，向上看，有一个”Visit Site"，点它

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/vist-github-pages-site.jpg?t=1ded1f9c-c2a3-808d-b14f-fe0915ede045)

由于我们刚才没有上传任何文件，你会看到404页面，别担心，这是正常的

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/github-pages-404.jpg?t=1ded1f9c-c2a3-8002-bf8c-d95f096d2a9b)

现在我们来上传一两张图片到GitHub仓库。返回仓库页面，点击“Code"标签页 -> ”Add file" -> "Upload files"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/upload-pic-to-github-pages.jpg?t=1ded1f9c-c2a3-8013-8c0d-dcfd10311725)

点击中间框框，从文件管理器中选图片，最后点击左下角"Commit changes"上传该图片

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/commit-changes-to-github-pages-repository.jpg?t=1ded1f9c-c2a3-802a-b9ec-ca448cc47060)

OK，现在我们已经在根木录下上传了一张图片，先复制它的名字（带后缀）。来到刚才的404页面，在URL最后粘贴，回车，Voilà！成功，这就是访问GitHub Pages图床图片

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/visit-github-pages-pic.jpg?t=1ded1f9c-c2a3-80c5-8617-d813b069a6c9)

直接在根目录下上传图片虽然方便，但不好看，也不利于管理图片。我们可以在根目录下创建一些目录给图片分类

点击“Add file" -> "Create new file"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/create-new-file-github.jpg?t=1ded1f9c-c2a3-805d-a8d7-edf6aa45c56e)

在输入新文件夹名称后，最后添加一个正斜杠"/"，比如我这里写"pic/"。

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/create-pic-folder.jpg?t=1ded1f9c-c2a3-80e7-8c7c-e5fc3f20f4d8)

当你输入 "/" ，会看到路径后边（pic/）出现一个新输入框，表示我们现在正准备在这个新文件夹下创建文件。由于Git本身不追踪空文件夹，你会发现后面”Commit changes"呈灰色，无法点击，因此我们需要在这个新文件夹中创建文件。只需在弹出的新输入框中随便输入一个名称，它就会变成一个新文件，这时后方"Commit changes"也会变绿，可以点击

Tips：最好输入".gitkeep"，它专门用于告诉Git保留空文件夹。输入完后点击“Commit changes"提交更改

如果你会git clone，这步也可以通过克隆仓库，在本地批量完成图片上传

现在在新文件夹中上传图片，通过GitHub Pages图床访问上传到这个文件夹下的图片时，在URL后面加上"pic/\{图片名\}"即可访问。创建其他文件夹同理，用好这个可以让我们的图库更好管理

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/pic-path-in-github-pages.jpg?t=1ded1f9c-c2a3-8086-ad62-e96998496ae5)

### 自定义图床域名

当我们刚创建好GitHub Pages图床，图片的公开访问链接格式为： ”https://<你的用户名>.github.io/<你的仓库名>/<图片在仓库中的路径>“。或许有小伙伴像我一样想让链接好看一些，GitHub Pages针对这个需求提供了让我们自定义链接的选项，来看看如何实现：

首先，我们需要购买一个域名，关于如何购买域名，大家可以看这篇文章: [使用Namesilo购买域名](https://www.aiexplorernote.com/blog/namesilo)。不过Namesilo是国外服务，建议大家在国内的云厂商，比如腾讯云，华为云购买。因为如果业务主要面向国内，使用国内厂商的服务器，访问速度会更快。而且在这些厂商后台购买、解析域名往往容易一些

我对腾讯云熟悉一些，下面以腾讯云为例。域名注册（就是购买域名）这里不讲，大家在后台搜一下就行，淘宝买东西一样

可能一些小伙伴有Namesilo或其他域名注册商的域名，我们先来看下如何把Namesilo购买的域名的名称服务器转移到腾讯云，从而使用腾讯云的DNS解析域名。如果你是在国内厂商购买域名，这里可以跳过

在腾讯云后台，搜索云解析，点击结果中”云解析DNS"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/click-dns-analyze-tenxun.jpg?t=1ded1f9c-c2a3-8085-b001-e2907925563f)

点击左上角“添加域名"，输入你在Namesilo或其他域名注册商处购买的域名

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/add-domain-in-tenxunyun.jpg?t=1ded1f9c-c2a3-8028-8689-c6fc3dff7d3b)

完成添加后，点击蓝色高亮域名或者“解析"。你会发现上方有一个红色警告，点击中间”查看详情"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/click-look-into-detail-tenxunyun.jpg?t=1ded1f9c-c2a3-8037-a0e7-efdb2615b35b)

弹出一个让你添加腾讯云名称服务器的提示，右下角两个绿色高亮记录就是腾讯云名称服务器

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/tenxunyun-nameserver.jpg?t=1ded1f9c-c2a3-8042-a541-f09d65a5e86a)

这时候需要到域名注册商那里，把域名的名称服务器指向腾讯云。以NameSilo为例，我们来到NameSilo域名管理界面:<https://www.namesilo.com/account_domains.php>。勾选目标域名，点击上方“Change NameServer”

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/click-on-change-nameserver-in-namesilo.jpg?t=1ded1f9c-c2a3-802d-831f-e6e5ba58c216)

把刚才腾讯云弹出的提示框中两个名称服务器填到这里，如果有多余的就删除，只要两个。最后点提交

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/fill-nameserver-in-namesilo.jpg?t=1ded1f9c-c2a3-805a-a8cb-c8ec3b67a60a)

稍等几分钟，返回腾讯云域名解析页面，上面的红色警告就没有了。接下来我们给这个域名添加GitHub Pages的DNS记录。在“主机记录"下，随便填一个名称，我填"img"。记录类型选择”CNAME"。记录值是"\{你的github账户名\}.github,io"，比如我这里是"cjjj9330.github.io"。最后点击后方确认

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/add-dns-record-in-tenxunyun.jpg?t=1ded1f9c-c2a3-802e-93aa-fda91862fd3c)

来到GitHub Pages设置页面，在“Custome Domain”中填入我们刚才配置好的二级域名。格式为"\{主机记录\}.\{域名\}“，比如我这里是"img.aiexplorer.rest"。之后点击"Save"，等待DNS检查完成

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/custome-domain-in-github-pages.jpg?t=1ded1f9c-c2a3-8069-9627-f53e3509bc96)

检查完成，变成绿色后。我们就可以通过自定义域名访问图床中的图片啦。只需把原来的”https://<你的用户名>.github.io/<你的仓库名>/<图片在仓库中的路径>“，换成”https://<自定义二级域名>/<图片在仓库中的路径>“，比如我这里是”https://img.aiexplorer.rest/<图片在仓库中的路径>“

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/visit-custome-domain-pic.jpg?t=1ded1f9c-c2a3-8013-b9db-f5ebdbf4358e)

## 使用PicGo简化上传流程

如果我们每张图片都像一开始演示的那样手动上传GitHub Pages仓库，会让人感觉很麻烦，于是有大佬专门开发工具简化这个流程。PicGo就是这样一款很流行且开源免费的图床上传工具。让我们看看如何使用它

首先来到PicGo的Releases页面下载你电脑对应版本的应用程序： <https://github.com/Molunerfinn/PicGo/releases>

下载好以后打开。要注意picgo在Windows上有bug，直接点击桌面图标不会打开窗口，需点击任务栏中小图标才行

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/picgo-interface.jpg?t=1ded1f9c-c2a3-80ab-b16d-dbe91d49c377)

点击“PicGo设置"，在最下方勾选GitHub

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/check-github-in-picgo.jpg?t=1ded1f9c-c2a3-80cd-b30b-c86816a539ff)

接下来点击”图床设置"，可以看到有“GitHub"选项，编辑设置

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/click-github-in-picgogo.jpg?t=1ded1f9c-c2a3-8094-aeb3-d2e466728d20)

在这里配置GitHub Pages图床

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/configure-github-in-picgo.jpg?t=1ded1f9c-c2a3-80d1-a4e2-fac676d95757)

  * 图床名随意

  * "仓库名"是"\{GitHub账号/GitHub Pages仓库名\}"的格式

  * "设定分支名"一般都是main

  * "设定token"待会儿讲

  * "设定存储路径"是保存在GitHub Pages仓库中的位置。如上图，我写"pic"，也就是保存在仓库中"pic"文件夹下。不写也可以，只是这样会全部保存在根目录下，不太好看以及不便管理。

  * "设定自定义域名"，有的话就填写刚才弄好的二级域名，我这里是"<https://img/aiexplorer.rest>"

”设定Token“是说我们的GitHub token，它用来授权给picgo代表我们自己上传图片到我们的GitHub Pages图床。以下是如何获取GitHub Token

来到GitHub，点击右上角头像，在菜单中选择”Settings"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/click-settings-in-github.jpg?t=1ded1f9c-c2a3-80ba-8904-ddc7c2b43c4d)

往下拉，在最下面点击“Developer settings"，”Personal access token" 下，选择“Tokens\(classic\)"，再点击右边”Generate new token"，什么，居然还有一个选项，点击“Generate new token\(classic\)"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/generate-new-github-token.jpg?t=1ded1f9c-c2a3-80d3-a9fc-cfa22ec2f1e0)

在“Note”中填入token信息（随意）；有效期自己选；确保勾上“repo”权限（用于管理仓库）

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/configure-github-token.jpg?t=1ded1f9c-c2a3-8094-b72e-dea84307564d)

拉到最下面，“generate token"。然后会跳到下面的界面，看到那个绿色的条了吗？有个复制按钮，点它，这就是你的“设定token"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/copy-github-token.jpg?t=1ded1f9c-c2a3-800f-ab1f-fe8bbab5e33f)

把它粘贴到picgo图床设置中，GitHub图床配置就完成了

来到picgo主页面，随便截张图，点击”剪贴板图片"，命名，点击确定。如果看到上传成功就没问题，如果显示失败，大概率你开了魔法，但没设置代理。picgo代理需单独设置

点击picgo设置 -> 设置代理和镜像地址，在这里配置代理端口，格式为"[https://127.0.0.1](https://127.0.0.1/):\{端口\}“ 。端口在系统设置中的"代理"里查看。不会就问ChatGPT

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/configure-proxy-in-picgo.jpg?t=1ded1f9c-c2a3-8018-9cdd-c6ded844706a)

配置完成

小Tips: 在picgo设置中，可以开启上传图片后自动复制URL，这样上传完直接粘贴到想要的地方就可以了

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/automatically-copy-url-after-uploading.jpg?t=1ded1f9c-c2a3-8040-8bdd-d5e33f621628)

## 使用Obsidian+插件自动上传图片

picgo帮我们省去了自己在GitHub Pages仓库中上传图片的步骤，节省不少力气。但是图片上传流程还能更简单！如果你是和我一样的自媒体博主，或者想做自媒体，这部分的内容必看

我一般在Obsidian中写文章，每次写文章要加图片时，我会先用picgo上传图片，然后将自动粘贴到剪贴板的markdown格式图片粘贴到Obsidian中

后来发现一个Obsidian插件，允许用户将粘贴到Obsidian中的图片直接自动调用picgo上传并换成最终的markdown格式图片插入到Obsidian中，就跟直接在Notion中粘贴图片并自动上传到云端一样。下面我们看看如何使用这个插件

首先去Obsidian官网下载最新版软件：<https://obsidian.md/>

下载安装完成，打开软件，点击左下角齿轮图标。在设置页面中点击“Community plugins" -> "Turn on community plugins" - "Browse"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/turn-on-obsidian-community-plugins.jpg?t=1ded1f9c-c2a3-80a8-87fc-f77adffeab42)

搜索”Image auto upload"插件，点击安装，最后记得点“Enable"启用插件

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/enable-image-auto-upload-in-obsidian.jpg?t=1ded1f9c-c2a3-803f-8a64-eea11d6bb613)

安装完成继续打开设置页面，下方”Community plugin"中点击“Image auto upload"，开启”Auto Pasted Upload"

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/enable-auto-upload-obsidian.jpg?t=1ded1f9c-c2a3-80fe-81fd-d8050a743b7f)

现在你截图粘贴到Obsidian中，这个插件会自动调用picgo将图片上传到GitHub Pages，并且粘贴markdown格式的图片到Obsidian中

如果报错，很可能是picgo 服务没有监听或者监听端口不对，打开picgo设置，确保“设置serve"是开启状态

![notion image](https://img.aiexplorernote.com/%E8%87%AA%E5%AA%92%E4%BD%93%E4%BA%BA%E5%86%99%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%EF%BC%9F%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E5%91%8A%E8%AF%89%E4%BD%A0/set-picgo-server.jpg?t=1ded1f9c-c2a3-8042-947a-ec0c8d0d211d)

至此，大功告成

## 小结

这就是我平时写文章上传图片的技巧。我已经尽力写得通俗易懂，但对于完全没接触过这些东西的小伙伴或许还是很难消化。没关系，可以发给AI让它帮你理解嘛

如果文章对你有用，希望三连一波，唔该~
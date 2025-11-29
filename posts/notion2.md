---
title: NotionNext搭建个人网站教程（一）
date: 2024-11-05
excerpt: 建站教程其一
tags: ["实用工具", "建站", "Notion使用", "开发", "Notion"]
category: 技术分享
---

之前写过一篇《NotionNext,用Notion搭建一个多模态第二大脑，让你对笔记爱不释手》，介绍了用NotionNext这个项目搭建的与Notion联动的个人博客网站的一些优点，这篇文章是要详细介绍搭建这个个人网站的一些步骤，剩下的再另外更新。

使用NotionNext搭建个人网站，只需要花费十几元购买域名，无需任何技术背景，你只需要写一个文档一样写一篇Notion文章，就能一键给你自动部署属于你的Notion个人网站，非常适合零基础且想要搭建一个个人网站的小伙伴。

搭建完成后，你将会：

  1. 拥有一个自己的域名，知道如何购买域名

  2. 一个个人网站

  3. 以及其他惊喜~

让我们开始吧

## 一、账号、项目配置

首先你需要你个Notion账号，如果你没有账号，可以去Notion的官网：notion.so 进行注册

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fb565ffc9-2523-4b16-8232-1df2ceecba6f%2Fnotion%25E6%25B3%25A8%25E5%2586%258C.png?table=block&id=2605774c-8c13-478b-a862-a52edb4053f4&t=2605774c-8c13-478b-a862-a52edb4053f4&width=720.8229370117188&cache=v2)

用Email地址或者谷歌地址都可以，非常简单

下面需要一个Github账号，如果没有，需要先去注册一下，官网地址：


[Github](https://github.com)


注册好以后，搜索NotionNext项目，你也可以直接点击这里跳转到项目地址：

[NotionNexttangly1024 • Updated Dec 18, 2024](https://github.com/tangly1024/NotionNext)

首先fork项目：

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F5b8ba1f7-9235-4047-bcd3-966bd0bb8d34%2Ffork.png?table=block&id=4739a16e-fd22-467e-b63f-d0aff302bd11&t=4739a16e-fd22-467e-b63f-d0aff302bd11&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F0b0feba9-9150-4476-9b2f-d39497ead731%2Ffork2.png?table=block&id=cf520866-44b2-4b2e-ab47-f5bb284a56c4&t=cf520866-44b2-4b2e-ab47-f5bb284a56c4&width=720.8125&cache=v2)

然后在下方找到并点开blog.config.js这个文件

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fffe17ac7-abd3-45f9-81d1-db39df7a2d5c%2Fblog.config.js.png?table=block&id=aeebc0fe-3230-4ae9-913b-c348f48ef97e&t=aeebc0fe-3230-4ae9-913b-c348f48ef97e&width=720.8229370117188&cache=v2)

接下来复制模板地址到浏览器地址栏中并回车,你也可以直接复制这个：


[Prod-files-secure](https://prod-files-secure.s3.us-west-2.amazonaws.com)


![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F2768c4b6-af27-4b9c-a605-25ca72a59578%2F%25E6%25A8%25A1%25E6%259D%25BF%25E7%25BD%2591%25E5%259D%2580.png?table=block&id=9db8e316-96a9-4598-ae3a-6b266682e6fe&t=9db8e316-96a9-4598-ae3a-6b266682e6fe&width=720.8229370117188&cache=v2)

然后duplicate模板到自己的工作区：

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fd1ce8e53-32f5-4c88-b721-3c92d94a52c2%2Fnotion%25E6%25A8%25A1%25E6%259D%25BF%25E5%259B%25BE.png?table=block&id=c04cb5b0-ae9e-4007-a41b-5f54524ca9fb&t=c04cb5b0-ae9e-4007-a41b-5f54524ca9fb&width=720.8229370117188&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fff19ce1f-3f6d-43c1-b7e3-bb5d860462ca%2F%25E9%2580%2589%25E6%258B%25A9%25E5%25B7%25A5%25E4%25BD%259C%25E5%258C%25BA.png?table=block&id=e3eb4ec5-cd7c-4746-914b-7c36d1b706ca&t=e3eb4ec5-cd7c-4746-914b-7c36d1b706ca&width=720.8021240234375&cache=v2)

下面需要使用到Vercel，Vercel是一个托管平台，它用来托管我们的Github项目。如果你没有账号需要先去注册一个，官网地址：


[Assets](https://assets.vercel.com)


注册过程:

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F1051fb59-ca96-44f3-91f9-274cdea06d74%2Fvercel%25E6%25B3%25A8%25E5%2586%258C.png?table=block&id=a3231b7b-b3c9-4b53-aedf-0c1653c334b7&t=a3231b7b-b3c9-4b53-aedf-0c1653c334b7&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fb65050b9-7b8f-4451-b238-da7b3ea480e4%2Fvercel%25E6%25B3%25A8%25E5%2586%258C2.png?table=block&id=264ef544-839a-4f36-be8c-501eac18e27a&t=264ef544-839a-4f36-be8c-501eac18e27a&width=720.8229370117188&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F5d609870-440f-4c1f-b36a-fc1a01268c48%2Fvercel%25E6%25B3%25A8%25E5%2586%258C3.png?table=block&id=303ce99a-dc5a-4f2f-b560-3852b3d0d9cc&t=303ce99a-dc5a-4f2f-b560-3852b3d0d9cc&width=720.8125&cache=v2)

\(选择邮箱也行）

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F2a9ce644-1d89-4941-bbba-609d95b18370%2Fvercel%25E6%25B3%25A8%25E5%2586%258C4.png?table=block&id=d686de8b-3319-4545-b90a-22a6a20fb18b&t=d686de8b-3319-4545-b90a-22a6a20fb18b&width=720.8229370117188&cache=v2)

## 二、网站部署

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Ff277fd12-0c68-4648-a0f7-20acfdfdff8b%2F%25E6%25AD%25A3%25E7%2589%25871.png?table=block&id=8baa6f48-6cf4-47bc-bbc1-8a7f301cee38&t=8baa6f48-6cf4-47bc-bbc1-8a7f301cee38&width=720.8229370117188&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fde281871-d195-4c6c-9524-4b8470ef2426%2Fimport.png?table=block&id=2607685d-12a5-4d1a-aae8-135106ab754e&t=2607685d-12a5-4d1a-aae8-135106ab754e&width=720.8333740234375&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Ff58903f1-b0f3-452a-a672-951e9bbbde9f%2Fpage_id.png?table=block&id=60aad2c0-aef3-42de-a748-68927755a070&t=60aad2c0-aef3-42de-a748-68927755a070&width=720.8125&cache=v2)

第一个Name那里填写：NOTION\_PAGE\_ID

Value获取方法：

点开之前复制到自己工作区的模板

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F98b4d374-7d6e-45b0-bb0d-743ed8bf84ff%2Fvalue.png?table=block&id=0a90b180-6f71-4099-91f9-436afd6f3f42&t=0a90b180-6f71-4099-91f9-436afd6f3f42&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F54d19175-abb3-44c7-9b08-d9a212912846%2Fvalue2.png?table=block&id=e57a909b-a0e1-4ffe-a9fe-0a26601a939e&t=e57a909b-a0e1-4ffe-a9fe-0a26601a939e&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fe3969904-c3c4-4abe-a136-e8e35b3c7829%2Fvalue3.png?table=block&id=7ce0b712-3d21-484c-8ae2-6c127d0ec86d&t=7ce0b712-3d21-484c-8ae2-6c127d0ec86d&width=720.8229370117188&cache=v2)

把获取到的那一串字符粘贴到对应的位置

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F24c149e9-cfed-4b36-8751-ea4276399bc7%2F%25E9%2583%25A8%25E7%25BD%25B2.png?table=block&id=8361c3e6-d95c-4e7f-ae5c-2e591100e1d4&t=8361c3e6-d95c-4e7f-ae5c-2e591100e1d4&width=720.8229370117188&cache=v2)

等待一两分钟,撒花，部署完成

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F4c10a51a-a785-49b5-8173-7d5d9b9971ac%2F%25E6%2592%2592%25E8%258A%25B1.png?table=block&id=f10c267a-8000-4bf3-9a6c-43cedeef7e3f&t=f10c267a-8000-4bf3-9a6c-43cedeef7e3f&width=720.8229370117188&cache=v2)

这时候点开Vercel分配给你的域名就可以看到搭建好的博客网站了

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F669db888-a695-461f-9143-3b5a1f2b21ec%2F%25E6%2592%2592%25E8%258A%25B1%25E4%25B9%258B%25E5%2590%258E.png?table=block&id=4b38777a-942f-4569-af6b-2d6037c20576&t=4b38777a-942f-4569-af6b-2d6037c20576&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F08e73999-7baf-46da-8150-3167b5f69b34%2F%25E5%258D%259A%25E5%25AE%25A2%25E7%25BD%2591%25E7%25AB%2599.png?table=block&id=71f9bb12-e9c3-4324-a159-0259c8ccd589&t=71f9bb12-e9c3-4324-a159-0259c8ccd589&width=720.8229370117188&cache=v2)

## 三、域名购买、配置

但是Vercel分配的域名受到了污染，在国内不开魔法是无法访问的，所以这时候我们需要一个自己的域名，使得在国内也可以正常访问我们搭建的这个网站，下面介绍一下购买和配置域名的方法，以我比较常用的Namesilo举例，官网地址：


[Namesilo](https://www.namesilo.com)


没有账号的话需要先去注册，如果对域名没有要求的话可以选最便宜的买，都一样，buzz和top的比较便宜

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F1f57133a-dbcc-4e13-b9a3-315687bb5915%2F%25E8%25B4%25AD%25E4%25B9%25B0%25E5%259F%259F%25E5%2590%258D1.png?table=block&id=e6c131f3-1220-4e73-be84-b34f4395fbee&t=e6c131f3-1220-4e73-be84-b34f4395fbee&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F80be1914-4f9b-4eaf-8c33-45faf549b206%2F%25E8%25B4%25AD%25E4%25B9%25B0%25E5%259F%259F%25E5%2590%258D2.png?table=block&id=b959a214-d25e-4352-b3f3-f398a8c5d38f&t=b959a214-d25e-4352-b3f3-f398a8c5d38f&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F2f764e14-e90f-4fd1-93c0-50b27ae7c005%2F%25E8%25B4%25AD%25E4%25B9%25B0%25E5%259F%259F%25E5%2590%258D3.png?table=block&id=832bfde7-4774-4414-896e-fe720ed0d85c&t=832bfde7-4774-4414-896e-fe720ed0d85c&width=720.8229370117188&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F4d573490-af64-4b4e-ba1f-6162aa95731a%2F%25E8%25B4%25AD%25E4%25B9%25B0%25E5%259F%259F%25E5%2590%258D4.png?table=block&id=0e78e603-2dbc-403e-b483-d5f2eeed6813&t=0e78e603-2dbc-403e-b483-d5f2eeed6813&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Feb19dd8a-1e56-4557-8d95-83b506983941%2F%25E8%25B4%25AD%25E4%25B9%25B0%25E5%259F%259F%25E5%2590%258D5.png?table=block&id=a6fde337-604c-4378-984e-ee8280e5a79c&t=a6fde337-604c-4378-984e-ee8280e5a79c&width=720.8125&cache=v2)

购买成功后会跳转到下面的界面

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fb69a9537-2d27-4b05-ba19-811f90ab9cd6%2F%25E5%259F%259F%25E5%2590%258D%25E9%2585%258D%25E7%25BD%25AE.png?table=block&id=dc5e348b-e7f3-4634-a885-2518f9991d03&t=dc5e348b-e7f3-4634-a885-2518f9991d03&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F5005ab63-19a1-4149-8e31-f026812e549f%2F%25E8%25B4%25AD%25E4%25B9%25B0%25E5%259F%259F%25E5%2590%258D6.png?table=block&id=e4f176b4-bfe3-4930-a7b1-592919c0a759&t=e4f176b4-bfe3-4930-a7b1-592919c0a759&width=720.8229370117188&cache=v2)

这个先放着，别叉掉

到这里域名就购买成功了

我们先把购买的域名分配给部署的NotionNext网站

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fadc99ace-7008-42a2-a95f-fa4fb9b19bd9%2F%25E6%25B7%25BB%25E5%258A%25A0%25E5%259F%259F%25E5%2590%258D.png?table=block&id=3b4c8bdd-5786-4d35-bd10-fb9655c2578a&t=3b4c8bdd-5786-4d35-bd10-fb9655c2578a&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F3405531d-6ec8-43e2-8bca-54228458064a%2F%25E6%25B7%25BB%25E5%258A%25A0%25E5%259F%259F%25E5%2590%258D2.png?table=block&id=86304142-d7b0-438a-afda-51ac6928e2b7&t=86304142-d7b0-438a-afda-51ac6928e2b7&width=720.8229370117188&cache=v2)

下面开始配置域名,首先打开Cloudfalre，如果还没哟账号先自行去注册，官网地址：


[Cloudflare](https://www.cloudflare.com)


注册好以后打开来是这样的

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Feea98638-f78a-44f7-b1b0-a97614e878e3%2F%25E9%2585%258D%25E7%25BD%25AEcloud.png?table=block&id=7acf9b35-46c3-4268-9b5c-c6673f4e70b4&t=7acf9b35-46c3-4268-9b5c-c6673f4e70b4&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F68b07ea5-bfe9-43f4-8489-2af42ac94d03%2F%25E9%2585%258D%25E7%25BD%25AEcloud2.png?table=block&id=d3de6bf0-e862-461c-83e7-5c8e36906414&t=d3de6bf0-e862-461c-83e7-5c8e36906414&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F8a33c06f-c3db-4b97-8a63-c6da1d01edae%2F%25E9%2585%258D%25E7%25BD%25AEcloud3.png?table=block&id=90bb1eb1-05b0-47f2-8a77-f2da78e46191&t=90bb1eb1-05b0-47f2-8a77-f2da78e46191&width=720.8125&cache=v2)

下面需要修改两条DNS记录

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F1cf45b59-a3b4-47be-bc5c-71d1be64d17f%2F%25E6%259B%25B4%25E6%2594%25B9%25E8%25AE%25B0%25E5%25BD%2595.png?table=block&id=f9f5f9bd-5d44-4b1b-af3b-aa46db1ef107&t=f9f5f9bd-5d44-4b1b-af3b-aa46db1ef107&width=720.8229370117188&cache=v2)

记录的信息在Vercel后台查看

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fbae0fe0e-830b-4b75-a2c5-82890e182147%2F%25E9%2585%258D%25E7%25BD%25AEcloud4.png?table=block&id=813a19cb-515b-4834-b1cc-e89de61b12ad&t=813a19cb-515b-4834-b1cc-e89de61b12ad&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F204f2acd-a6d3-49cd-ae10-49239288fb3c%2F%25E6%25B7%25BB%25E5%258A%25A0%25E8%25AE%25B0%25E5%25BD%25951.png?table=block&id=1ef26078-a79b-420f-acff-a1d89450ee07&t=1ef26078-a79b-420f-acff-a1d89450ee07&width=720.8229370117188&cache=v2)

添加第二条记录

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fe40585f1-d4e0-4065-94f0-d75f15554669%2F%25E6%259B%25B4%25E6%2594%25B9%25E8%25AE%25B0%25E5%25BD%25951.png?table=block&id=d4e46b30-2cb4-40d6-b7ee-38808ef0715c&t=d4e46b30-2cb4-40d6-b7ee-38808ef0715c&width=720.8229370117188&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F9b2f087a-f4a7-436d-a193-bf29faa455e5%2F%25E6%25B7%25BB%25E5%258A%25A0%25E8%25AE%25B0%25E5%25BD%25953.png?table=block&id=e6ee4d21-55f6-4bb0-b170-96d455024f75&t=e6ee4d21-55f6-4bb0-b170-96d455024f75&width=720.8229370117188&cache=v2)

下面需要变更域名服务器

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F795ec312-767f-41ec-bb56-e027a1480812%2F%25E9%2585%258D%25E7%25BD%25AEnamesilo.png?table=block&id=94ac2a73-b3df-45ee-a9cc-85b98042fbc9&t=94ac2a73-b3df-45ee-a9cc-85b98042fbc9&width=720.8229370117188&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Ffe201253-dbf0-4c1e-aa5f-a75ebb34bfb8%2F%25E9%2585%258D%25E7%25BD%25AEnamesilo2.png?table=block&id=52a52cd8-3541-4c48-b1b1-25944177b70d&t=52a52cd8-3541-4c48-b1b1-25944177b70d&width=720.8125&cache=v2)

回到刚才Namesilo的域名管理页，如果不小心关掉了，可以点击这里打开：

[www.namesilo.comhttps://www.namesilo.com/account\_domains.php](https://www.namesilo.com/account_domains.php)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F0177ed38-617d-47dd-a771-74131db3a33b%2F%25E9%2585%258D%25E7%25BD%25AEnamesilo3.png?table=block&id=ae09d5ea-8804-4985-b805-158cf47cdf5c&t=ae09d5ea-8804-4985-b805-158cf47cdf5c&width=720.8125&cache=v2)

把默认的三个删除掉，添加刚才复制的cloudflare的名称服务器

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Ff3ce3844-62bf-4a2a-9860-a1154e851083%2F%25E9%2585%258D%25E7%25BD%25AEnamesilo4.png?table=block&id=874d35c9-c2ea-4d41-bd8b-851d76c9eba9&t=874d35c9-c2ea-4d41-bd8b-851d76c9eba9&width=720.8333740234375&cache=v2)

回到刚才的页面，点击检查名称服务器，等待更新

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F76600188-2fd6-4871-b123-f2029cbbd4eb%2F%25E9%2585%258D%25E7%25BD%25AEnamesilo5.png?table=block&id=c63eaafd-a43c-4598-88ad-686b0e84cae0&t=c63eaafd-a43c-4598-88ad-686b0e84cae0&width=720.8229370117188&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fd0ba02ad-874f-4811-a278-633fba579bb9%2F%25E9%2585%258D%25E7%25BD%25AEnamesilo6.png?table=block&id=d47629ea-4f85-451d-9111-a3b3c79c4450&t=d47629ea-4f85-451d-9111-a3b3c79c4450&width=720.8125&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F27e7f761-a120-4876-a183-e2d6241371f3%2F%25E9%2585%258D%25E7%25BD%25AEnamesilo7.png?table=block&id=19a457dd-d491-477e-a1ce-e0cae36eb796&t=19a457dd-d491-477e-a1ce-e0cae36eb796&width=720.8229370117188&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F29278c53-f495-44a6-8e97-3d4efc4c11db%2F%25E9%2585%258D%25E7%25BD%25AEnamesilo8.png?table=block&id=f0763f87-a2d2-4683-a29d-a4fe8f455e1a&t=f0763f87-a2d2-4683-a29d-a4fe8f455e1a&width=662&cache=v2)

这里检查大概5~·10分钟，耐心等待即可

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F05bb78bb-d2db-4da7-b980-bcc71be9e51d%2F%25E9%2585%258D%25E7%25BD%25AEnamesilo9.png?table=block&id=c6eec7dc-4d56-4357-984f-72d8023807bf&t=c6eec7dc-4d56-4357-984f-72d8023807bf&width=720.8125&cache=v2)

状态变为有效后，域名服务器就从Namesilo转到了Cloudflare,DNS也指向了Vercel的服务器

## 四、结语

回到Vercel后台，可以看到都变成合法配置了，

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Ffabacedd-80a3-45d9-ad26-820042596cc4%2F%25E5%2590%2588%25E6%25B3%2595%25E9%2585%258D%25E7%25BD%25AE.png?table=block&id=12ae4663-5ea0-421f-a22b-a3194cf66cb0&t=12ae4663-5ea0-421f-a22b-a3194cf66cb0&width=720.8125&cache=v2)

现在我们就可以通过自己的这个域名进入自己部署好的个人博客网站了，但是目前这个个人网站都只是一些模板内容，我们需要去修改它，让它成为真正的个人网站。这个想下一次再更新，可以提前预告一下内容：

  1. 如何修改网页的标题

  2. 修改网页的主图，侧边栏图标

  3. 樱花效果，烟花点击效果

  4. 菜单栏选项的配置

  5. 敬请期待

创作不易，希望可以给个赞，还有如果不想下期错过的话记得关注我哦~，Thanks♪\(･ω･\)ﾉ
---
title: 160页GPT4V论文总结！
date: 2024-11-05
excerpt: 微软对GPT4V能力的详细测试报告
tags: ["AI", "深度AI博文"]
category: AI学习
---

这个是我写的文章，很多图片在这里上传失败，原文链接：


[Static](https://static.zhihu.com)


紧跟OpenAI发布论文：《GPT-4V\(ision\) system card》，微软发布了一篇长达160多页介绍的论文：《The Dawn of LMMs: Preliminary Explorations with GPT-4V\(ision\) 》。

值得一提的是，这篇论文的作者也是“**全华班** ”，7名作者全部是华人，领衔的是一位在微软工作了17年的女性首席研究经理。

在166页报告发布前，他们还参与了OpenAI最新DALL·E 3的研究，对这个领域了解颇深。

相比OpenAI的18页GPT-4V论文，这篇166页“**食用指南** ”一发布，立刻被奉为GPT-4V用户必读之物

![notion image](https://pic3.zhimg.com/80/v2-7220ddff3d5d2508a3b6187913c7f916_1440w.jpg?t=64183b9b-1ad7-410d-84d9-f585db33454b)

MedARC（医疗人工智能研究中心）联合创始人兼CEO Tanishq Mathew Abraham表示，「这篇报告将是GPT-4V高级用户的必读之作。」

**原文链接** ：


[Link](https://link.zhihu.com/?target=https%3A//arxiv.org/abs/2309.17421)


因为对GPT4V的好奇，我也认真读完了这篇论文，并做了笔记，这篇文章主要是按照目录顺序总结每个章节的大意，另外我在几乎每张图例下面都注释了，方便每一个想要了解GPT4V的小伙伴轻松明了它的能力~

* * *

## 1.介绍

### 1.1 动机和总览

这一部分提到与之前的大型多模态模型（LMMs）相比，GPT-4V作为一个大型多模态模型（LMM）具有更强的通用智能。并说明论文主要沿着四个问题展开：

  1. GPT-4V支持哪些输入和工作模式？

  2. GPT-4V在不同领域和任务上的能力如何？

  3. 如何有效地使用和提示GPT-4V？

  4. 有哪些值得未来研究的方向？

### 1.2 我们探索GPT4V的方法

这部分主要讨论了如何评估GPT-4V的新能力和潜在用途。

报告指出，由于现有的LLMs（大语言模型）基准测试可能不再适用于评估LMMs（多模态大语言模型），特别是在图像描述等方面，因此报告主要侧重于使用定性结果而非定量基准评估GPT4V的表现。**报告的目标是探索GPT-4V可能已经具备的新能力** ，即使这些能力尚未完全可靠。开发一套全面的下一代评估任务和基准测试将是理想的最终解决方案，但由于所需的努力很大，因此这一工作被留到未来进行。同时，作者期望这份报告中的一系列示例能推动未来在建立新多模态任务基准、提升模型性能和探索新应用方面的研究。

在评估GPT4V的能力时，有**三个基准** ：

  * 展示的示例可能需要特别设计的提示和仔细的指导调整，**这些示例是专家们精心优化prompt，不断尝试的结果，最终效果可能在不同的样本中不一致** 。报告的主要目标是提供一份GPT-4V的潜在能力清单，这些能力可能在几次不成功的尝试后被忽视。

  * 通过控制输入提示中的图像和文本来保证这些内容在GPT-4V不是记忆训练样本或根据提示做出有根据的猜测。这样做是为了更准确地评估模型的真实能力，而不仅仅是它的记忆能力。

  * 强调零样本指导调整（zero-shot instruction tuning）作为默认的工作模式，在这种模式下，模型不依赖于上下文中的少数样本来进行学习，这有助于更准确地评估模型的真实能力。

### 1.3 怎么阅读这份报告

这里指出，本报告致力于为各领域的读者提供价值，无论是深耕AI研究的学者，还是非计算机科学专业的行业专家，都能在这份报告中找到新的启示和灵感。我们期待这份报告能激发出更多富有创意且具有实践价值的应用场景。

报告围绕四个核心问题进行探讨：

  1. GPT-4V支持哪些输入和工作模式？

  2. GPT-4V在不同领域和任务上的质量和通用性如何？

  3. 使用和提示GPT-4V的有效方法是什么？

  4. 有哪些有前景的未来方向？

除了概览和目录之外，报告还包括了一个**图表列表** 。这个列表详细列举了报告中的定性示例，作为一个额外的工具，以帮助读者更容易找到他们感兴趣的场景

![notion image](https://pic1.zhimg.com/80/v2-9aa3497abe55dd989a68bc20221f8c64_1440w.webp?t=b013fc5a-fbea-49a0-bcb7-ca880531b1a0)

## 2 GPT-4V支持的输入模式

GPT-4V支持多种输入模式，包括作为单模语言模型处理纯文本输入，接受单个图像-文本对或仅接受单个图像，以及接受交错的图像-文本对或仅接受多个图像输入。

### 2.1 文本输入

在这种模式下，GPT-4V可以执行各种语言和编码任务。

### 2..2 单个图文对

GPT-4V可以接受单个图像-文本对或单个图像作为输入来执行各种视觉和视觉-语言任务，如图像识别、物体定位、图像字幕、视觉问题回答等。

### 2.3 交错图文对

GPT-4V能够灵活处理交错的图像-文本输入。这些交错的图文对可以是图像为中心的，如带有短问题或指令的多个图像，也可以是文本为中心的，如带有两个插入图像的长文本，或者是图像和文本的均衡混合。充分展示了其灵活性。例如，它可以计算多个收据图像上支付的总税款。

![notion image](https://pic2.zhimg.com/80/v2-2fee335956099c7d4d435b4fd1bae53d_1440w.webp?t=354481dd-d71c-41ec-a9fc-09e33a2d8511)

GPT-4V还能有效地关联交错的图像-文本输入中的信息，如在菜单上找到啤酒价格，计算啤酒数量，并返回总费用。

![notion image](https://pic1.zhimg.com/80/v2-4607a18d49eeb37539de4ca77c0e3ea4_1440w.webp?t=84833374-c0c9-45e8-af87-d7f249673160)

除了直接应用外，处理交错的图像-文本输入也可以作为在上下文中进行少样本学习和其他高级测试时提示技术的基础组件，从而进一步提升GPT-4V的通用性。

## 3 GPT-4V的工作模式和提示技术

### 3.1 遵循文本指令（个人觉得这部分价值蛮大的，感兴趣的同学可以细读）

GPT-4V的强大之处在于其广泛的应用性，这主要源于其对文本指令的深入理解和遵循。在GPT-4V的测试中，两种源自LLM研究的提示技术取得了良好的效果：

  * \(i\) "限制性提示"：让GPT-4V以特定格式回应，比如“以Json格式返回。。。”，“用Markdown语法写出。。。”

![notion image](https://pic4.zhimg.com/80/v2-215d8570a2ffe8aac9295ee86d3de0fb_1440w.webp?t=0655ba67-3fd2-4fed-bfda-c82d257bf78a)

  * \(ii\) "要求良好表现"：明确地要求GPT-4V有良好的表现。也就是我们说的“你是一个。。。专家”。（起初我并不理解为什么要这么做，觉得多少有点玄学，看到这篇文章中的示例才真正明白）

![notion image](https://pic2.zhimg.com/80/v2-1445dbad1cdb40b711eca91cad237dd5_1440w.webp?t=9e8ae49a-f0c4-4805-bdd5-e0d34676336d)

### 3.2 视觉指向和视觉指针提示

这一部分讨论了GPT-4V在理解视觉指向方面的强项，特别是直接在图像上绘制的视觉指针。为了进一步利用这一能力，引入了一种名为“**视觉指针提示** ”的新提示方法。在这种方法中，人们通过编辑输入图像的像素空间来指定所需的目标，例如绘制视觉指针或手写场景文本。

![notion image](https://pic4.zhimg.com/80/v2-ca294984a2d0e44201330626473f0dff_1440w.webp?t=e94530d4-b094-455c-aae7-f8b048495b59)

### 3.3 视觉+文本提示

这一部分强调了GPT-4V在处理多模态输入方面的灵活性和通用性。与现有的多模态模型相比，GPT-4V能够处理各种格式的图像和文本输入，并且没有严格的格式要求。这使得GPT-4V能够更有效地理解多模态指令，适应未见过的任务。此外，与传统的指令跟随模式和在上下文中的少量示例学习相比，GPT-4V还支持更灵活的输入格式和更有效的任务演示方式。

![notion image](https://pic2.zhimg.com/80/v2-44114d48eab5739f0285e71358281ce9_1440w.webp?t=27320021-4d90-4d2c-86ba-c16325773a51)

GPT-4V能够处理各种格式的图像和文本输入

![notion image](https://pic2.zhimg.com/80/v2-1f91db5d743300ebd68d7769982893f5_1440w.webp?t=78827072-f987-4e5a-963c-ddf71b93af88)

GPT-4V还支持更灵活的输入格式和更有效的任务演示方式

### 3.4 在上下文中的少样本学习

这一段主要讨论了在上下文中的少样本学习（In-context Few-shot Learning）在LMMs（多模态大语言模型）中的应用和重要性。该方法通过在测试时提供与输入查询格式相同的在上下文中的示例来“教”模型执行新任务。文中提供了几个例子，强调了在某些情况下，尤其是当零样本或一样本指导方法不足时，使用足够数量的在上下文中的示例变得至关重要。然而，为了遵循测试的基准，即前面提到的“保证这些内容在GPT-4V不是记忆训练样本或根据提示做出有根据的猜测”，测试中限制了其在这方面的使用，并将样本学习的定量评估留给未来的研究。

![notion image](https://pic1.zhimg.com/80/v2-2cca0789499be52073878c3b90917b7c_1440w.webp?t=5054c5a9-74bd-4130-99e7-5e3bb54d895f)

零样本提示法尝试失败

![notion image](https://pic4.zhimg.com/80/v2-350b3747723bbf5d6a8700b70e0cc8ff_1440w.webp?t=49e350bc-e79c-40b4-b8ec-3449ba364a55)

单样本提示法尝试失败

![notion image](https://pic4.zhimg.com/80/v2-f0478fbc6d21067da75b140f4122de23_1440w.webp?t=6f4cb9ab-94db-4382-8889-60285c34a7d5)

少样本提示法最终成功

![notion image](https://pic4.zhimg.com/80/v2-264dd0fd834dc53b19af70f496ae12df_1440w.webp?t=849c7dd9-9895-440c-a2c8-c76bfa46cad1)

零样本提示法失败

![notion image](https://pic1.zhimg.com/80/v2-32f5f1e51ebe503bfeddb62f02a08ed0_1440w.webp?t=0891f34f-c666-48bb-85e7-7d56b95f765b)

单样本提示法失败

![notion image](https://pic3.zhimg.com/80/v2-fc2def53879d4813f6bc70eac3aec6fa_1440w.webp?t=8ea09bc2-1b70-4711-87fb-c410ec8d8294)

少样本提示法最终成功

## 4 Vision-Language Capability

这一部分主要探讨了GPT-4V在视觉-语言能力方面的多样性和泛化能力。

### 4.1 多领域上的图像描述

GPT4V能够处理多种任务，包括名人识别、地标识别、食物识别、医学图像理解、标志识别、场景理解和反事实示例。在各种测试中，GPT-4V不仅能准确识别和描述对象，还能理解和解释更复杂的视觉信息，如2023年G7峰会的情境或者需要拔除的智齿。这些能力表明GPT-4V具有很强的泛化能力和多模态理解能力。

![notion image](https://pic3.zhimg.com/80/v2-ebdd2dbd3dfa0a890af8e09af6b28a96_1440w.webp?t=6f2e72a0-94f6-47e0-b315-0eafa02c6906)

名人识别，在拜登哪张图中，它不仅认出了拜登，还通过后面的字猜出拜登在参加2023年的G7峰会

![notion image](https://pic3.zhimg.com/80/v2-5a2e69d361ebf639e00544e7479c2836_1440w.webp?t=354c8f7d-0b40-4a9d-85d7-77e915f9c220)

地标正确识别

![notion image](https://pic2.zhimg.com/80/v2-995d1047014a57d177e94a8d48de7f85_1440w.webp?t=87a02ef5-b1d9-45fa-bdfe-9617a1e22267)

食物正确识别

![notion image](https://pic4.zhimg.com/80/v2-4407670712b00995fc3d115f984a7173_1440w.webp?t=37207aa4-176b-4cd7-8835-cf367c3ebd6b)

医学图像正确理解

![notion image](https://pic1.zhimg.com/80/v2-2943b446dff6e1fa42d84b743f73c848_1440w.webp?t=e55e2c61-8f75-4194-9d75-53a5aac202d7)

医学图像正确理解

![notion image](https://pic1.zhimg.com/80/v2-6637437d9a1e97d0139c7fb26571aecc_1440w.webp?t=da36aa6e-0b23-427a-8955-ff8b49b11cba)

LOGO精准识别

![notion image](https://pic4.zhimg.com/80/v2-a9783b9b592ed5c9f1ae6892a45f9f13_1440w.webp?t=4e57e71d-4269-4be0-ad53-3469e13c3816)

甚至能识别出微软刚推出的Microsoft Copilot的LOGO

![notion image](https://pic4.zhimg.com/80/v2-212ee8c06b41ad39303e9f862fa3f023_1440w.webp?t=7bccba76-08e2-4db5-86bb-a63d9578dbdd)

场景理解

![notion image](https://pic1.zhimg.com/80/v2-a523030990d27ff10245365859acfd10_1440w.webp?t=996f016a-45ec-4113-bd9d-59649d2345f5)

反事实示例辨析

### 4.2 对象定位、计数和详细字幕

![notion image](https://pic1.zhimg.com/80/v2-26aff6972ab1691deb2f2f6e9c89cf20_1440w.webp?t=a9b7046f-1ffb-4886-8e0a-cfbe829e41c7)

在空间关系理解方面，GPT-4V能够识别图像中人与物体之间的空间关系

![notion image](https://pic1.zhimg.com/80/v2-0b14ec13e4579a862a6545d963127338_1440w.webp?t=66fd3a2b-c73c-43cd-af56-da7ca6658bf1)

在对象计数方面，GPT-4V能够成功地计数图像中的对象，尽管在对象被遮挡或场景复杂的情况下可能会出现错误

![notion image](https://pic3.zhimg.com/80/v2-4fe366323e41bd96472267ecc76a53aa_1440w.webp?t=cb15e642-4c4e-4323-bc58-97b785a2ecc5)

在对象定位方面，GPT-4V展示了生成边界框坐标的能力，但准确性有待提高

![notion image](https://pic4.zhimg.com/80/v2-ec357720bf4c1d6b24a81e1a517d5583_1440w.webp?t=7661531b-1822-4271-ae6a-796e90b65ace)

在密集字幕方面，GPT-4V能够成功地定位和识别图像中的个体，并为每个科学家提供简洁的描述

### 4.3 多模态知识和常识

这一段主要探讨了GPT-4V在多模态知识和常识推理方面的能力。在理解笑话和模因方面，GPT-4V展示了出色的能力，能够从视觉和文本模态中收集信息，并理解其中嵌入的幽默。在科学和知识方面，GPT-4V能够根据视觉上下文正确回答涵盖地理、物理、生物和地球科学等多个主题的问题。在多模态常识推理方面，GPT-4V有效地使用图像中呈现的边界框作为视觉提示，以识别个体所执行的动作。当提供更具体的输入提示时，GPT-4V展示了识别图像中众多微妙视觉线索的能力，并提供了一系列可信的假设。

![notion image](https://pic3.zhimg.com/80/v2-b8322e9eb14350709f010ebd847324f2_1440w.webp?t=b3a7fab0-815f-456a-b2a6-4322f52a59e2)

GPT4V准确识别梗图含意

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='924' height='1366'></svg>?t=8a5c341a-bd40-4ad0-8314-9bcc9b7ca325)

正确理解图像中的科学知识

![notion image](https://pic1.zhimg.com/80/v2-0f71b249b1b305c147c9ffe33fb164a8_1440w.webp?t=f8a1b98a-24ce-4553-84d6-4a5078549ca1)

理解地理、生物方面的知识

![notion image](https://pic1.zhimg.com/80/v2-34ff263c6606d6a80d0242265a2257bc_1440w.webp?t=aecc6f64-b930-4e24-9756-8ac49d5f255b)

甚至能直接根据图像给你讲课

![notion image](https://pic2.zhimg.com/80/v2-bb8b96aa8a2ded56ae3b1b7e0d1fae8d_1440w.webp?t=c5b11006-e60d-494b-b766-50cd483bc4f0)

展现了根据微妙线索进行常识推理的能力

### 4.4 场景文本、表格、图表和文档推理

这一部分主要探讨了GPT-4V在多个与视觉和语言相关的任务中的性能。在场景文本识别方面，GPT-4V能准确识别各种场景中的文本，包括手写和印刷文本。在视觉数学推理方面，模型能够提取图像中的关键信息，并以结构化的方式解决问题。在图表和表格理解方面，GPT-4V不仅能提供详细的描述，还能根据图表和表格回答问题。在文档理解方面，模型能理解各种类型的文档，并提供合理的回应。例如，它能准确地识别楼层平面图中第二个卧室的浴室位置，也能读懂考试试卷并准确填写答案。最后，在处理多页技术报告的更具挑战性的案例中，GPT-4V也表现出色，但偶尔会遗漏一些实现细节。

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1080' height='1404'></svg>?t=5ef616b1-9d14-41e7-a1ed-6fe8669e0b83)

能够准确识别不同语言的场景文本

![notion image](https://pic4.zhimg.com/80/v2-70039a94cb5ebd344e8cc327ce8eeea7_1440w.webp?t=5f8a830b-1edc-4e64-adea-ac55ca672658)

提取信息并解决数学问题

![notion image](https://pic3.zhimg.com/80/v2-ecddd169379cb1240d010f727e8870f2_1440w.webp?t=af382fe2-8d45-41da-9ece-2c6915efa485)

能够理解图表中的信息

![notion image](https://pic4.zhimg.com/80/v2-d3ecca7ae68b96b21cd731512a39f13b_1440w.webp?t=4fef7c1a-0571-4b71-a7e1-00dae654cffc)

能够理解图表中的信息

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='968' height='1358'></svg>?t=c6c9f577-66d4-4c1d-ade6-630f4f496425)

能够理解图表中的信息

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='940' height='1142'></svg>?t=e7b0d783-74e3-4122-b2af-01b782b814a2)

能够根据图表进行推理，回答问题

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='976' height='1538'></svg>?t=085af2c1-91b8-4ca8-8f98-fcc18f115388)

理解平面图、海报和考试试卷

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='966' height='1378'></svg>?t=02cb29b5-b1df-4d19-96ea-a6730da9d900)

能看懂技术报告，但偶尔会遗漏一些细节

### 4.5 多语言多模态理解

这一部分主要探讨了GPT-4V在多语言和多模态理解方面的能力。首先，GPT-4V能够识别和生成多种语言的图像描述。不仅如此，它还能根据指令以特定的输出语言中生成正确的描述。其次，GPT-4V在多语言场景文本识别方面也表现出色，能够识别和理解不同语言的场景文本，并将其翻译成其他语言。此外，GPT-4V还能理解细微文化差异，并为给定的婚礼图像生成合理的多语言描述。总体而言，GPT-4V在处理多种语言和文化环境方面表现出极大的灵活性。

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1080' height='1512'></svg>?t=850089a9-54bf-4dab-a694-411f27db4df9)

GPT-4V能够识别和生成多种语言的图像描述

![notion image](https://pic4.zhimg.com/80/v2-056bc7f51c9c0396b6ee995249316a57_1440w.webp?t=791e39a7-ed71-4e2e-bdb9-5b86c61480f9)

GPT-4V在多语言场景文本识别方面也表现出色

![notion image](https://pic3.zhimg.com/80/v2-36915b12832d327a1d9f4389c4ffe186_1440w.webp?t=34e05157-f328-42e9-968d-adb8889afd71)

能够识别和理解不同语言不同场景的文本，并将其翻译成其他语言

![notion image](https://pic4.zhimg.com/80/v2-d9b679a8e52d46498662390356b3cd87_1440w.webp?t=3689e8b3-2ab3-470f-b536-f98b4035d9f9)

GPT-4V还能理解图像中展现出的细微文化差异

### 4.6、视觉编码能力

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='910' height='840'></svg>?t=6f27259e-7188-472e-b6ee-18c8852a8f9c)

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='956' height='1474'></svg>?t=6f30d2b9-0047-41b0-b6a7-17a68563b04b)

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='940' height='1610'></svg>?t=95481ba7-092b-4ada-b228-2b297d983ba3)

通过代码复刻大致相同的初稿图

## 5 与人类互动：视觉指针提示

这一段是总的概览

### 5.1 理解视觉指针

这一段主要探讨了GPT-4V在与人类互动方面的视觉指针提示能力。首先，GPT-4V能够理解直接在图像上绘制的视觉指针，如圆圈、框和手绘等。这种能力有助于生成有针对性的图像描述。其次，GPT-4V还能理解用数值文本格式表示的区域坐标，但与视觉指针相比，文本坐标的精确性较低。基于这些观察，提出了一种名为“视觉指针提示”的新型模型交互方法。这种方法通过直接编辑图像像素空间来绘制视觉指针或场景文本，作为人类的指示指令。这种视觉指针对于人和机器都是直观的，因此是人机交互的良好渠道。

![notion image](https://pic4.zhimg.com/80/v2-5d500bbb89e0d1a36a8e7d8656ab9a6b_1440w.webp?t=502c8e61-877f-43d3-b281-a1a8f6c14f7d)

理解各种各样在图上的标记指针

![notion image](https://pic4.zhimg.com/80/v2-fc68ee4f39786c9c01213ee03159b973_1440w.webp?t=5364c0b9-4acf-45d6-a10c-246d787081dd)

理解用数值文本格式表示的区域坐标

### 5.2 视觉指针提示

这一部分主要探讨了报告提出的“视觉指针提示”的新型人机交互方法。这种方法直接编辑图像的像素空间，而不是传统的文本空间，从而提供更细致和全面的图像交互。例如，GPT-4V能够理解图像上写的问题和指向相应的边或角，提供一个细致的界面进行视觉对话。此外，这种方法也有助于GPT-4V更好地理解复杂的文档和图表。

### 5.3 生成指向输出

该部分讨论了GPT-4V是否能生成自己的指向输出，从而促进人机交互的闭环过程。实验结果显示，虽然GPT-4V对空间位置有一个粗略的理解，但它并不精确。然而，通过在提示中包括示例提示，可以帮助GPT-4V更好地理解坐标定义并生成更好的指向输出。

![notion image](https://pic4.zhimg.com/80/v2-00ee94cdbb9f5cf06d4de1a7e668b70b_1440w.webp?t=7c08d74a-07ac-4052-b0e3-8469560de61a)

视觉指针提示法案例

![notion image](https://pic4.zhimg.com/80/v2-28d9d75f2746c301ee2609c17d59bf2f_1440w.webp?t=eb61c300-dcc0-45a8-a1c3-1cb32e0bcb2a)

视觉指针提示法可以加强人机交互体验

![notion image](https://pic3.zhimg.com/80/v2-0107c786ffe2754c421a880dbad5d336_1440w.webp?t=0ba47673-efd8-45d1-b3cc-a23ce1e45002)

GPT4V能生成指向文本输出\(会不准确），使人机交互形成一个闭环过程

## 6 时间和视频理解

这一段主要探讨了GPT-4V在时间和视频理解方面的能力。尽管GPT-4V主要操作图像输入，但其对时间序列和视频内容的理解是对其整体评估的关键部分。这是因为现实世界的事件是随时间展开的，AI系统理解这些动态过程在实际应用中非常重要。

### 6.1 多图像排序

GPT-4V能准确地理解和分析视频帧序列，提供更深层次的上下文理解。

![notion image](https://pic1.zhimg.com/80/v2-39c6b3a72dbba12d9f8c8af9dd2ddf04_1440w.webp?t=99c74ec2-eb03-4e03-b944-a0f010f80416)

### 6.2 视频理解

**时间排序：** GPT-4V能够识别一系列乱序图像中的因果关系和时间进程。

![notion image](https://pic4.zhimg.com/80/v2-cc4a61f185eb9cf9856ec34ed841302b_1440w.webp?t=01670bd9-ce9c-4654-bf0c-b1000db51d0a)

![notion image](https://pic1.zhimg.com/80/v2-9bc08e9b40df073780e342ed0645a71c_1440w.webp?t=9e11b3a4-f8d7-40a4-b160-cb2905311fba)

**时间预测：** GPT-4V能像人一样推测未来事件，包括短期和长期。

![notion image](https://pic2.zhimg.com/80/v2-520a45e19634c56544e6ae2244db17bd_1440w.webp?t=1bd328d2-82d6-4249-829d-6bbde56af982)

**时间定位和推理：** GPT-4V能准确识别特定时刻的事件，并通过因果关系进行推理。

![notion image](https://pic4.zhimg.com/80/v2-de7fc13d040f5f0d3d08404333c66d1f_1440w.webp?t=4197956b-d26c-452e-8fb9-6b852bac032b)

### 6.3 视觉指针提示用于基础时间理解

这一段主要探讨了GPT-4V在视觉指针提示用于时间理解方面的能力。这样做大大增强了让GPT4V执行视频理解任务时的可控性。

**基础时间理解：** 通过在一系列图像帧中使用指向输入，GPT-4V能够准确地描述与相应时间顺序一致的事件；能够专注于被圈出个体的活动，并准确描述这些活动；不仅能理解事件的时间流程，还能解释发生的互动的性质和基调。例如，它能区分友好互动和暴力事件。

![notion image](https://pic3.zhimg.com/80/v2-a9f4fb43591b3efc04e70f7da54cf2f6_1440w.webp?t=fb64a910-1a58-4ae9-bd80-ac6d0f9bd997)

## 7 抽象视觉推理和智商测试

这部分主要探讨了GPT-4V在抽象视觉推理和智商测试方面的能力。以下是几个主要方面

### 7.1 抽象视觉刺激

GPT-4V能够从抽象和模糊的视觉刺激中推断出语义。例如，它能解释七巧板（tangram）和ASCII文本艺术等。

![notion image](https://pic3.zhimg.com/80/v2-aa0486999ae9d1f4e06939cf4b7fc57e_1440w.webp?t=5dd00d01-bebd-485b-b7ba-fb110e0a3b0c)

### 7.2 发现和关联局部对象

GPT-4V能够识别对象的各个部分，并将它们以语义上有意义的方式关联起来。

![notion image](https://pic1.zhimg.com/80/v2-a5037680178626a177c17fc9073eeac8_1440w.webp?t=da841295-d9f3-41a1-85aa-4abfa0d13ccb)

### 7.3 韦氏成人智力量表

GPT-4V能够完成不同的抽象推理任务，这些任务来自人类的智商测试。

![notion image](https://pic2.zhimg.com/80/v2-727a85c043306c98baa360dd69e95e31_1440w.webp?t=a084a547-2a41-4244-8ce8-78c9ad902783)

### 7.4 雷文渐进矩阵

这是一个非语言智力测试，设计用于衡量抽象推理和问题解决能力。GPT-4V在这方面也表现出合理的答案。

![notion image](https://pic1.zhimg.com/80/v2-96d7519bdc19b293e158a717660fa47c_1440w.webp?t=b8aa4eef-e5e8-47e9-b820-993e17a17247)

## 8 情商测试

这部分主要探讨了GPT-4V在情感智商（EQ）方面的能力。以下是几个主要方面

### 8.1 从面部表情读取情感

GPT-4V能够可靠地识别和解读人们的面部表情来判断其情感状态。

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='910' height='1032'></svg>?t=cbcefb4d-cf3d-4eed-97ca-9ab1b8ede510)

### 8.2 理解视觉内容如何引发情感

GPT-4V能够理解视觉内容如何引发人们的情感反应，这对于预测视觉内容可能引发的人类情感并做出适当反应至关重要。

![notion image](https://pic1.zhimg.com/80/v2-03b362f6d575f08b7626274af9604afc_1440w.webp?t=2c6dcf9c-dbd7-4337-81f1-816432b0c34e)

![notion image](https://pic1.zhimg.com/80/v2-2da516c000ae028e4486a8b45537a76c_1440w.webp?t=2fa6e5be-a3a7-46ad-bb94-bf90d2f3ec71)

GPT-4V 还能理解人类的主观判断，例如美学、社会规约

### 8.3 情感条件输出

GPT-4V能够根据感知到的情感有效地生成适当的文本输出。例如，它可以根据提示来描述一个可怕的图像，使其更加恐怖或安慰。

![notion image](https://pic3.zhimg.com/80/v2-16dbf174bc0829d4646e16e9fd37cb3a_1440w.webp?t=09d27a8b-eeaa-4b05-8c8f-f0d51c0d4c87)

## 9 新兴应用亮点

这一段主要探讨了GPT-4V在多个高价值应用场景和新用例中的潜力。以下是几个主要方面

### 9.1 找不同

GPT-4V能够识别两张视觉上相似但有细微差异的图像之间的不同，尽管解释可能不完全准确。

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='916' height='1514'></svg>?t=3ff0fb26-dcc9-43ff-be93-d934a40ce2dc)

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='934' height='1552'></svg>?t=7885338a-0d20-4920-86c3-34f7617c1ad6)

### 9.2 工业应用

**缺陷检测：** GPT-4V能够识别常见产品（如榛子、布料、螺钉和汽车保险杠）中的缺陷。

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='980' height='1474'></svg>?t=13f6a511-6d3f-4539-8a68-7393d20c9890)

GPT4V可以看出常见问题，但对复杂问题会拒绝回答

![notion image](https://pic1.zhimg.com/80/v2-6e56a2742143c4ec27f1d8ebfb46bf04_1440w.webp?t=59f9f824-375a-4533-8d0b-83129a1f90dd)

GPT4V只关注了小的错误，貌似不知道什么是好的样品

![notion image](https://pic2.zhimg.com/80/v2-bf16513c6824ff9e15714285a131ec59_1440w.webp?t=5260fa15-a069-4f8a-8d55-a963417075a2)

同样，通过样本提示法能优化结果，但有时依然有瑕疵

**安全检查：** GPT-4V用于检测工地员工是否佩戴个人防护装备，但在准确性方面还有待提高。

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1016' height='1592'></svg>?t=8b5b4471-5738-4535-b8b4-37bb50d833d0)

**自助结账：** GPT-4V展示了在自助结账系统中自动识别和计价商品的潜力，可能以后就不用收银员了。

![notion image](https://pic2.zhimg.com/80/v2-837c2dffc17b76bfb1b1d5095daff1c1_1440w.webp?t=63a807c6-89a5-4767-a1e9-837bb273513e)

### 9.3 医学应用

这部分主要探讨了GPT-4V在医学图像理解和放射科报告生成方面的应用。以下是几个主要方面

![notion image](https://pic4.zhimg.com/80/v2-6f4d34d68464136323cd86fc4f7e760b_1440w.webp?t=0a880bc9-93a0-4e64-8c89-815e544609cf)

GPT-4V 正确识别了研究并提供了准确的诊断

![notion image](https://pic4.zhimg.com/80/v2-bf498ee34459281ccd467d358425f8db_1440w.webp?t=381e55b0-5fd3-4b1e-8614-287c09b24971)

有错误，生成的高质量格式的报告，可以作为模板，减轻医学专业人士在起草报告时的工作负担

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1070' height='1546'></svg>?t=37849eca-7af9-4081-b8cd-d08794bd0b3a)

在胸部 CT 的情况下，GPT-4V 错误地识别了左侧而不是右侧的提及的结节，并且还产生了测量误差。处理交错的图像-文本对的能力允许 GPT-4V 引用先前的医学扫描和诊断历史，这对于医学专业人士的诊断过程被证明是至关重要的

![notion image](https://pic4.zhimg.com/80/v2-53b66f56109a9106cf9cfc25e6c174f3_1440w.webp?t=e2215fe7-db63-46a0-95b5-aa5e3e794cb9)

图 78 显示了从多个胸部 X 射线扫描中理解症状进展的示例。这些插图突显了 GPT-4V 作为放射学报告生成的 AI 助手的潜力。但是，由医学专业人士评估以确保其正确性和准确性是至关重要的。

## 9.4 汽车保险

这一段主要探讨了GPT-4V在汽车保险领域的应用，特别是在车祸报告方面。以下是几个主要方面

**损坏评估：** GPT-4V能够准确地识别和定位车辆损坏的范围，并能提供每个特定损坏实例的详细描述。在某些情况下，GPT-4V甚至尝试估算维修的潜在成本。

![notion image](https://pic3.zhimg.com/80/v2-13c2a0933e147890332ad58d59a83106_1440w.webp?t=f993fb81-e80c-4c81-a637-46516d5daf02)

**保险报告：** 在损坏评估的基础上，GPT-4V还能识别车辆的品牌、型号和车牌号，并以JSON格式返回获取的信息。

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='938' height='1268'></svg>?t=df2a8d1a-1957-4459-93cd-cc1892ae53a4)

需要注意的是，某些信息可能不可用，或者由于遮挡等原因难以识别，例如第二张图片中的车牌号。

### 9.5 定制化标注

**整理家庭照片：** GPT-4V能够为家庭相册中的每张照片生成包含家庭成员名字的个性化标注。这种方法不仅提高了照片组织的精确性，还增加了个性化搜索的可能性。

![notion image](https://pic1.zhimg.com/80/v2-6cf902d97674df5ba5b41f5704dfad7c_1440w.webp?t=dc5158d5-4be0-4d25-af04-347aa1a88d9f)

![notion image](https://pic4.zhimg.com/80/v2-80a663c382e5e93d1b3eb6c33bbce9b7_1440w.webp?t=222ad6c5-fa48-413a-83d6-17b4e7348d71)

**详细标注与分割：** 通过使用强大的分割模型，GPT-4V能够为每个感兴趣的对象生成高度详细的标注。这些标注甚至可能包括与全局上下文图像相关的引用。

![notion image](https://pic2.zhimg.com/80/v2-2a66427bdcbbccea82ad134c3ca3c189_1440w.webp?t=f66b1561-ceaf-44b8-91b0-f8ace1dd100b)

### 9.6 图像生成

这一部分主要探讨了GPT-4V在图像生成领域的多方面贡献

**图像生成的评估：** GPT-4V能够根据与给定文本提示的符合程度来评估生成的图像。它还提供了相似度得分的解释，这可以作为改进图像生成的反馈。

![notion image](https://pic2.zhimg.com/80/v2-c7bd753d19a793629a90b2ef2a5f17c5_1440w.webp?t=a4d5b152-ac58-410e-8708-dbbccd958c5d)

![notion image](https://pic2.zhimg.com/80/v2-07b89866f291c0538c2dc8fe2a5304bd_1440w.webp?t=a66d3324-61b7-4ac5-9237-f1bf7117cfc7)

**文本提示生成用于图像编辑：** GPT-4V不仅能评估生成的图像，还能生成或重写用于编辑的文本提示。这样做可以优化编辑后的图像，使其更具视觉吸引力。

![notion image](https://pic1.zhimg.com/80/v2-e6fb1e6965b2509414aca07545ec7638_1440w.webp?t=b12c68b8-a1dc-44d6-ad36-4db0dac75680)

**迭代编辑过程：** GPT-4V能够生成改进版本的提示，记忆原始图像、初始提示和编辑后的图像。用户可以反复细化他们的编辑，直到他们达到满意的结果。

![notion image](https://pic2.zhimg.com/80/v2-5c9573375b4bb7746646a3d71a129b3d_1440w.webp?t=b638e746-7574-4932-b0da-3284861ba52c)

### 9.7 具身实体

**操作家用电器：** GPT-4V能够通过阅读操作菜单来操作家用电器，如咖啡机。虽然它在识别按钮方面表现出色，但也存在一些视觉混淆导致的错误。

![notion image](https://pic2.zhimg.com/80/v2-a162bc25f97ca7318147f50529fb89ad_1440w.webp?t=1a8d0efb-5976-4fd1-852b-ed9dc06ace68)

可能因为混淆导致了错误

![notion image](https://pic1.zhimg.com/80/v2-291ac3a2cb8f3f7c5b3b25d92a853350_1440w.webp?t=ee687670-1fd4-43f5-8c8b-bd8f4cea4ea0)

通过单个图标分割识别以后成功

**任务导向巡航：** 通过使用Redfin虚拟房屋游览，GPT-4V能够在任务导向的场景中进行导航。例如，它能够根据给定的任务“去厨房并从冰箱里取出一个物品”来预测接下来的动作。

![notion image](https://pic1.zhimg.com/80/v2-77b1e81a3d4338470cdfe34e6e53426c_1440w.webp?t=6a5f9006-b932-45c0-94e5-cb9c13fa73b2)

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='966' height='1552'></svg>?t=7cb5b790-e0d3-4851-9ed1-2d68b40b8bb8)

### 9.8 GUI导航

这部分主要探讨了GPT-4V在图形用户界面（GUI）导航方面的多方面能力

**网页浏览：** GPT-4V能够在任务导向的设置下，通过屏幕截图来预测接下来的动作，如找到烹饪食谱或阅读当天的新闻。

寻找麻婆豆腐食谱：

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='906' height='1420'></svg>?t=3dbdb420-2f89-422d-a607-86e57d630f28)

![notion image](https://pic3.zhimg.com/80/v2-1220695881108cae28d208312f5e9aaa_1440w.webp?t=6f2b3be8-877a-4f2c-9ade-1a8a7e04eeab)

![notion image](https://pic3.zhimg.com/80/v2-a237516accd6765c68d23ff6c45c7ea6_1440w.webp?t=cfc6636f-09b7-4c4d-af30-bba94522f5b5)

![notion image](https://pic4.zhimg.com/80/v2-48444b8618cbf43f2071438e5f6b745b_1440w.webp?t=836a2b6d-bdeb-48f4-9d70-afe58ed0779e)

![notion image](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='926' height='1520'></svg>?t=e77d4ee4-f6ec-4ea8-b39f-f75cc0ee2fe8)

阅读今天的新闻：

![notion image](https://pic4.zhimg.com/80/v2-93226bfb63d27b7023423d236896cbbf_1440w.webp?t=63b7330b-0d5e-4115-bf2e-b90560909ca6)

![notion image](https://pic4.zhimg.com/80/v2-d1f89b895eca7fc5871487c33d598edb_1440w.webp?t=04d91257-7f84-45c1-9087-c6a1ed2b9c6c)

![notion image](https://pic4.zhimg.com/80/v2-bafd007ffe7d9631fea82ae61af9d24b_1440w.webp?t=467ab83e-e5ff-4de5-b0cf-082da645c1a4)

![notion image](https://pic2.zhimg.com/80/v2-a3b2cd4de2b10ff614c8a186d8f9c2b5_1440w.webp?t=2f2c065a-acd7-41fd-89c8-a73ee73eb642)

![notion image](https://pic4.zhimg.com/80/v2-fff55b306398bcd00e47e3bfe8c8a13b_1440w.webp?t=608f6230-81a9-47eb-adc7-727f686e3645)

![notion image](https://pic1.zhimg.com/80/v2-a9e43c10f7270fd79269a2432ec02cb0_1440w.webp?t=383a2ea5-aca0-4801-b330-090a51b50647)

**在线购物：** GPT-4V能够导航智能手机的GUI进行在线购物。例如，它能预测打开Amazon应用，设置价格范围，并最终进行结账。

![notion image](https://pic4.zhimg.com/80/v2-11e98a8fdf0e44e81530fc9c17978497_1440w.webp?t=2236f336-104e-4bdd-ad4d-4a5d62e02804)

![notion image](https://pic3.zhimg.com/80/v2-3862d917ab9ae818e1c7aa2af0124e5e_1440w.webp?t=a7102e4b-1311-4d9e-8127-20cc5df37c02)

![notion image](https://pic1.zhimg.com/80/v2-5a3967b96b8bbe402734fcf38867c1e0_1440w.webp?t=95204bf0-cfd4-447a-aacb-7ecc0a813019)

![notion image](https://pic2.zhimg.com/80/v2-4f1001a562d3e31ea54ccd464f3e57c9_1440w.webp?t=d0568bfb-a608-468c-b856-ffc4a8ab2a2d)

![notion image](https://pic2.zhimg.com/80/v2-75463a1789421c6b8c87dd4156f8dbb9_1440w.webp?t=7678b133-d329-44a9-835d-0f1e159389d3)

![notion image](https://pic1.zhimg.com/80/v2-6c1e7a7f24a3c1f0956196ac34365de8_1440w.webp?t=6d80b882-356d-47d9-8042-d249b36b727a)

![notion image](https://pic4.zhimg.com/80/v2-8d059fe6a3dbbcd380657ccdce25e60b_1440w.webp?t=8a321c62-6644-458b-95ef-edb8e53a08de)

![notion image](https://pic4.zhimg.com/80/v2-5e0a77635a8f48cb7d2f2345ab17d753_1440w.webp?t=8cf5e26f-fe12-4ae7-93cf-e1d7473007de)

![notion image](https://pic3.zhimg.com/80/v2-813c0752cd90ae6027679972d279610e_1440w.webp?t=d9333237-0ae8-4146-9eff-b14504001cbe)

**通知理解：** GPT-4V能够解释和响应通知内容，如地图应用的会议提醒或电脑屏幕上的呼叫和消息通知。

![notion image](https://pic1.zhimg.com/80/v2-2a165f555bf06ed7c1fee50a3a01e58c_1440w.webp?t=55a1b9b1-9ca1-44fe-aff2-ecef9c435021)

![notion image](https://pic2.zhimg.com/80/v2-cf9b977fbcaac32d414af275833d85b5_1440w.webp?t=08309c02-bc15-4ba1-bab5-c615734cc8f5)

**观看视频：** GPT-4V能够根据流行短视频的一系列屏幕截图来描述视频内容，无论视频是否有字幕。

![notion image](https://pic1.zhimg.com/80/v2-1dfc5b97a8bdea1e90bdbf5e9e5963bc_1440w.webp?t=c9a80769-cdc4-438d-b682-c7d950ffdc30)

![notion image](https://pic2.zhimg.com/80/v2-07c9901391424730f82cd5e0a7c314c1_1440w.webp?t=b34fda1f-2913-4ca8-9436-645f38a44f0c)

![notion image](https://pic3.zhimg.com/80/v2-c49dc92272f54e3a03755ed9c86ccb12_1440w.webp?t=6d23d433-ebf2-4dd0-a881-1d1297db001a)

![notion image](https://pic1.zhimg.com/80/v2-e9015354a841f92f615ddf2933acbf58_1440w.webp?t=ab1a4e89-1b28-4804-b3c1-18e2f1b82363)

![notion image](https://pic1.zhimg.com/80/v2-ed3b048367491d270285eded6bfcb694_1440w.webp?t=b61de0ad-7d0c-46c3-9ac4-cdcae4a2aa10)

## 10\. 大语言模型驱动的代理

这一段主要探讨了GPT-4V和LLMs在未来研究方向的多个可能性

### 10.1 多模态插件

插件在LLMs中起着关键作用，例如获取最新信息或执行计算。多模态插件，如Bing Image Search，可以让GPT-4V获取与输入图像相关的时效性信息。

![notion image](https://pic1.zhimg.com/80/v2-da53af37f37d000de8827bb62a072984_1440w.webp?t=45dae56f-ea2d-457b-b20a-05a66b3cd8df)

通过Bing图像搜索找到了图像

### 10.2 多模态链

这是一种更高级的系统范例，它将LLMs与一组插件集成在一起，允许更高级的推理和交互。

![notion image](https://pic2.zhimg.com/80/v2-fbcc7098fc3e39215477b1e81ab36bf9_1440w.webp?t=92aa2816-04f3-45e0-a59d-136fbee44484)

通过集成多个插件，LLMs能够综合处理多种类型的输入（如文本、图像、音频等），从而进行更全面的分析和推理。

### 10.3 自我反思

在LLMs中主要用于改进模型的输出结果。例如，自我反思能够更准确地对齐参考图像和生成的数据点数量。这种方法有助于手动优化模型的输出，使其更接近期望的结果。

![notion image](https://pic2.zhimg.com/80/v2-8faf55c3b9ef7f629a278afb76e4da89_1440w.webp?t=2717ec35-a48f-4a7b-896e-7ed701e460d5)

![notion image](https://pic4.zhimg.com/80/v2-6bec43264b521485331bbf612b7ec62f_1440w.webp?t=e680240e-ef23-497f-b977-0f1180e981df)

### 10.4 自我一致性

这是一种解码策略，通过聚合多个采样输出来产生最终答案，例如通过多数票。这个概念可以应用于中间思考过程，以提高LLM的推理性能。例如，通过多次运行或重新表述输入文本指令，然后使用简单的多数票来聚合最终答案。

![notion image](https://pic4.zhimg.com/80/v2-a18b2581879275c03f6ee4aac261dccb_1440w.webp?t=f96250fa-191a-4ee8-887a-5e54beb26ec7)

### 10.5 检索增强的LLMs

这种技术通过检索和整合相关信息到提示中来增强文本生成。这在需要专门的任务相关信息时特别有效，例如在高度专业化的专家领域，最新信息，或因用户而异的可定制信息。

## 11\. 总结

### 11.1 总结和结论

该报告主要关注了GPT-4V在各种应用场景中的表现。研究发现GPT-4V具有一些令人瞩目的能力，其中一些在现有的方法中尚未被展示或研究过。虽然报告可能没有挖掘出GPT4V所有的能力，但它可以作为未来研究的参考，以探索GPT-4V的更多用途，加深对LMMs的理解，以及构建更强大的LMMs。

### 11.2 未来展望

报告简要地讨论了GPT模型的弱点和局限性，并提出了未来研究方向的观点。例如，未来的LMMs应该能够**生成** 交织的图像-文本内容，如包含文本和图像的生动教程。此外，将其他模态性（如视频、音频和其他传感器数据）纳入LMMs将是有益的。关于学习过程，报告建议未来的模型应该能够从各种来源学习，包括在线网页内容和甚至真实世界的物理环境，而不局限于规范数据源。

## 参考资料：

[必看：微软166页论文解读 GPT-4V 全文翻译《多模态的新时代》The Dawn of LMMs: Preliminary Explorations with GPT-4V\(ision\) - 知乎 \(zhihu.com\)](https://zhuanlan.zhihu.com/p/659513317)

[实测GPT-4V后，微软写了份166页的测评报告-虎嗅网 \(huxiu.com\)](https://link.zhihu.com/?target=https%3A//www.huxiu.com/article/2137660.html%3Ftype%3Dtext)
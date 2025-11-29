---
title: 大大提升DALLE-3画图能力的prompt!
date: 2024-11-05
excerpt: DALLE-3提示词
tags: ["AI", "深度AI博文", "prompt"]
category: AI学习
---

这是国外油管博主分享的一个能把我们输入的简单提示词让DALLE-3自己进行优化后进行输出的提示词。

## 举个例子

当你输入“画一个牛排”，DALLE-3会根据提示词的要求从专业的角度自己生成四张对图片的风格、环境、视角及光线等做了优化的高质量提示词，让输出的图像更加精美。因此DALLE3生成的提示词可能是这样的：

  1. 一张多汁牛排的照片，烤至五分熟并带有烧烤痕迹，摆放在木质盘子上。牛排周围散布着新鲜的迷迭香枝条和一缕酱汁。背景是一张质朴的木制餐桌。来自左上方的温暖、环境光投射出微妙的阴影，突出了牛排的质地。拍摄工具：单反相机，微距摄影，50mm镜头。

  2. 一张在热烤架上嘶嘶作响的牛排的数字插图。牛排表面呈现出丰富的棕色烧焦痕迹，中心带有一丝粉红色。明亮的橙色火焰在其周围跳动，烟雾升腾，给人一种温暖的感觉。烤架的金属条与肉质形成对比。绘制工具：Adobe Illustrator，渐变阴影，对比度的运用。

  3. 一张牛排晚餐场景的水彩画。牛排烹饪得恰到好处，放在瓷盘上，旁边是蒸熟的蔬菜。背景是一个轻微模糊的餐桌，上面有酒杯和蜡烛。水彩技术展示了牛排的嫩度和多汁性。绘制工具：丙烯颜料，粗糙质地的画布，粗细不一的笔触。

  4. 一张切成片的牛排照片，展示其完美烹饪的内部。切片呈扇形排列，从棕色渐变到粉红色。牛排上撒有碎胡椒和海盐。背景是一块光滑的黑色石板，使牛排更加突出。强烈、集中的顶部光线强调了牛排的细节。拍摄工具：无反光镜相机，食品摄影，85mm镜头。

## 来吧展示

这些是我用这个提示词生成的图片，下面的每组图片都是`DALLE-3自己生成的提示词`+`成品大图`

## 原提示词：画一个天使

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F6ddbb953-eb9d-4323-8850-7e3f06bbf678%2F3.png?table=block&id=1ae43d45-1164-464d-a6cf-c298708c1ec5&t=1ae43d45-1164-464d-a6cf-c298708c1ec5&width=1579&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F9580a7be-617a-4a8c-bdbf-bb8e47a7d392%2F3a.jpg?table=block&id=3bab277e-8a44-4977-96db-ffbb7ced2c15&t=3bab277e-8a44-4977-96db-ffbb7ced2c15&width=510.3333435058594&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F32f1258d-32fe-4474-a138-a3ccbb0bdfb7%2F1.png?table=block&id=99c6eff9-90db-44f8-90de-1580594b5023&t=99c6eff9-90db-44f8-90de-1580594b5023&width=1684&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F7b51b107-4256-4a77-8a1a-d54a7aa31166%2F1a.png?table=block&id=8332cba7-7e35-40a1-8570-fa5113e5dee1&t=8332cba7-7e35-40a1-8570-fa5113e5dee1&width=510.3333435058594&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F51ac4bfe-71f6-4340-aab4-e61ccde37b69%2F5.png?table=block&id=e1fc2ad1-f8be-4c66-8197-a7096358dc99&t=e1fc2ad1-f8be-4c66-8197-a7096358dc99&width=1524&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F4536836e-3d9c-4de4-b531-06c7fc9c9894%2F5a.png?table=block&id=8f7775d8-cc4f-4bb8-9f53-7b82ecc37193&t=8f7775d8-cc4f-4bb8-9f53-7b82ecc37193&width=510.3333435058594&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F03621f72-073d-497d-bc11-a43888b564f4%2F7.png?table=block&id=271ac781-c435-4dd2-85d5-18d2d5ae2aa8&t=271ac781-c435-4dd2-85d5-18d2d5ae2aa8&width=1580&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F2ad95d4a-17ad-4b16-b9c5-4a3fa4cac133%2F7a.jpg?table=block&id=6abfa62c-cce0-4d21-bd86-9bf5a30459c1&t=6abfa62c-cce0-4d21-bd86-9bf5a30459c1&width=510.3333435058594&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fba40e7e0-8069-456c-97b3-9509a54bd16b%2F2.png?table=block&id=12575520-b185-4878-a17b-2fcaf0ba25f2&t=12575520-b185-4878-a17b-2fcaf0ba25f2&width=1520&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F2a88ed16-9070-4d8a-9983-e9616fd18b43%2F2a.png?table=block&id=1f9cfc04-9926-4afe-b70c-f8d6092b187a&t=1f9cfc04-9926-4afe-b70c-f8d6092b187a&width=510.3333435058594&cache=v2)

## 原提示词：画一个美味的牛排

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Ffe44e684-394a-45bc-a084-756c50474119%2F8.png?table=block&id=6ab086d0-e6d1-4b14-a7f8-04fbc996ec25&t=6ab086d0-e6d1-4b14-a7f8-04fbc996ec25&width=1564&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fed71f49f-9fc4-49a3-ac50-9af385714e3f%2F8a.jpg?table=block&id=e6f5a367-53c0-4ea5-9f1b-a1910835d940&t=e6f5a367-53c0-4ea5-9f1b-a1910835d940&width=510.3333435058594&cache=v2)

## 原提示词：画一个城堡

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F8bc121ec-4aeb-4861-8ca0-3fd4c374f37b%2F6.png?table=block&id=d6818303-51af-43ff-b7c8-766a8d0fc5b0&t=d6818303-51af-43ff-b7c8-766a8d0fc5b0&width=1603&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F2ea9c432-6cc5-4e09-9d3a-222d63a47c44%2F6a.png?table=block&id=2cb89953-c234-4552-80de-f794795b6ba4&t=2cb89953-c234-4552-80de-f794795b6ba4&width=510.3333435058594&cache=v2)

怎么样！是不是很精美？

## Prompt

## 使用方法：

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F4cc5985e-84e2-46d9-b810-47a97c92df9b%2F%25E4%25BD%25BF%25E7%2594%25A8%25E6%2596%25B9%25E6%25B3%25951.png?table=block&id=8f934094-184d-4ccd-b6b8-f420427cadac&t=8f934094-184d-4ccd-b6b8-f420427cadac&width=1784&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F59eed72e-2f08-4fc2-867d-c75b91e61885%2F%25E4%25BD%25BF%25E7%2594%25A8%25E6%2596%25B9%25E6%25B3%25952.png?table=block&id=1ba67639-cf48-404a-82ee-d54403ed4af3&t=1ba67639-cf48-404a-82ee-d54403ed4af3&width=1776&cache=v2)

## 原prompt（建议使用这个）：

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What would you like ChatGPT to know about you to provide better responses?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prompt Generation Guidelines:

Create prompts that paint a clear picture for image generation. Use precise, visual descriptions \(rather than metaphorical concepts\).

Try to keep prompts short, yet precise, and awe-inspiring.

Prompt Structure:

“A \[medium\] of \[subject\], \[subject’s characteristics\], \[relation to background\] \[background\]. \[Details of background\] \[Interactions with color and lighting\]. \("Taken on:"/"Drawn with:"\)\[Specific traits of style\]”

Medium:

Consider what form of art this image should be simulating.

Subject:

What is the main focus, reference-

Colors: Predominant and secondary colors.

Pose: Active, relaxed, dynamic, etc.

Viewing Angle: Aerial view, dutch angle, straight-on, extreme closeup, etc

Background:

How does the setting complement the subject?

Environment: Indoor, outdoor, abstract, etc.

Colors: How do they contrast or harmonize with the subject?

Lighting: Time of day, intensity, direction \(e.g., backlighting\).

Style Traits:

What are the unique artistic characteristics?

Influences: Art movement or artist that inspired the piece.

Technique: For paintings, how was the brush manipulated? For digital art, any specific digital technique?

Photo: Describe type of photography, camera gear, and camera settings. Any specific shot technique? \(Comma-separated list of these\)

Painting: Mention the kind of paint, texture of canvas, and shape/texture of brushstrokes. \(List\)

Digital: Note the software used, shading techniques, and multimedia approaches. \(List\)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How would you like ChatGPT to respond?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1\. Generate images, based on your detailed prompts using DALL E 3.

\- Always bring the idea alive, with bold and interesting choices for every element of the prompt.

\- Always follow the Prompt Guidelines

2\. Suggest four brand new ideas that I can riff off.

\- These should be simple concepts not full prompts

\- Try to take inspiration from the last suggestion I gave you rather than the full prompt

That’s it\! I don’t need any further context. The less fluff you include around the generations the faster I will see the images, and be able to iterate my ideas.

Defaults \(unless otherwise specified/implied\):

1\. Default aspect ratio: Please use a Square aspect ratio \(1:1\).

2\. Default style: Photograph. Include camera settings, type of photography and gear.

3\. Always produce four images and suggest four new ideas.

IMPORTANT: Avoid words or concepts that go against terms of service. Do not infringe on anyone's copyright; do not use suggestive or explicit imagery in your prompts. Do not emphasize or imply any elements that would not be considered G-rated.

## Prompt翻译：

`你可以介绍你自己以便让ChatGPT更好地回答你`

提示词生成指南： 创建能为图像生成绘制清晰画面的提示词。使用精确、视觉化的描述（而非难以捉摸的概念）。 尽量保持提示词简短、精确且令人惊叹。 

提示词结构： “一个\[媒介\]的\[主题\]，\[主题的特点\]，\[与背景的关系\]\[背景\]。\[背景的细节\]\[与颜色和光线的互动\]。\('拍摄于：'/'用...绘制：'\)\[风格的特定特点\]”

媒介： 考虑这个图像应该模仿哪种艺术形式。

主题： 什么是主要焦点，参考- 颜色：主要和次要颜色。 姿势：活跃、放松、动态等。 视角：俯视角、荷兰角、正面、特写等。

背景： 环境如何补充主题？

环境：室内、室外、抽象等。 颜色：与主题是如何对比或和谐的？ 光线：一天中的时间、强度、方向（例如，逆光）。

风格特点： 有哪些独特的艺术特点？ 影响：启发该作品的艺术流派或艺术家。 技术：对于绘画，如何操纵画笔？对于数字艺术，有没有特定的数字技术？ 照片：描述摄影类型、相机设备和相机设置。任何特定的拍摄技术？（用逗号分隔这些） 绘画：提及使用的颜料类型、画布的质地和笔触的形状/质地。（列表） 数字：注明使用的软件、阴影技术和多媒体方法。（列表）

`你想让ChatGPT怎么回答你`

1.基于您详细的提示词使用DALL E 3生成图像。 -总是用大胆和有趣的选择使想法变得生动。 -总是遵循提示词指南。 2.提出四个全新的想法供我发挥。 -这些应该是简单的概念，而不是完整的提示词。 -尽量从我给你的最后一个建议中获取灵感，而不是完整的提示词。

就这样！我不需要更多的上下文。你在生成过程中包括的废话越少，我看到图像的速度就越快，并且能够迭代我的想法。

默认设置（除非另有说明/暗示）：

1.默认宽高比：请使用正方形宽高比（1:1）。 2.默认风格：摄影。包括相机设置、摄影类型和设备。 3.总是生成四张图像并提出四个新想法。

重要：避免使用违反服务条款的词语或概念。不要侵犯任何人的版权；不要在您的提示词中使用暗示或明确的图像。不要强调或暗示任何不被认为是G级别的元素。

## Prompt分析

  1. **提示词生成指南** : 这部分强调使用“精确、视觉化的描述”而不是“难以捉摸的概念”。清晰、明确的指示来生成图像有助于DALLE-3生成更高质量的图像。

  2. **提示词结构** : 这是一个模板，包括媒介、主题、背景等多个元素，用于创建详细的提示词。
        * **媒介** : 指定图像应模仿的艺术形式。
        * **主题** : 图像的焦点，包括颜色、姿势和视角等。
        * **背景** : 描述主题与环境的关系，包括时间、光线方向等。

  3. **风格特点** : 包括图像的独特艺术特点，如使用的技术、影响等。

  4. **生成图像和新想法** : 提供了生成图像和提出新想法的具体步骤和要求。

  5. **默认设置** : 除非另有说明，否则会使用默认的宽高比和风格。

  6. **重要注意事项** : 提醒DALLE-3避免使用违反服务条款的词语或概念。

## 总结

可以看出，这个提示词大概率是由具备摄影专业知识的人编写的，其中涉及的元素、用词都很全面且专业，所以这个提示词的效果才会这么好。

但是生成的图像也一般有一个通病就是：乍一看好像都很好，但是细节上会有瑕疵，这类问题多见于涉及到人物图像的时候，上面的天使有几张的脸就是有些微的问题的。实物画就会好很多。不过总体来说生成的图像质量还是非常高的！都颇具想象力！而且就算有些微的瑕疵，也可以通过后期改一下，办法总比困难多！大家也快去试一试吧~
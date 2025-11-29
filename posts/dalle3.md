---
title: DALLE3使用秘籍，发挥DALLE3最大潜能
date: 2024-12-22
excerpt: DALLE3画图也可以超好看的
tags: ["深度AI博文"]
category: AI学习
---

DALLE3是ChatGPT用来绘画的文生图模型，它适合用来创作天马行空想法的图片，擅长风格偏2.5D，用DALLE3生成这种类型的图片很容易出片

今天专门测试DALLE3，连续生成几十张图，达到使用限制，自己总结出用DALLE3生成图片需要注意：

  1. DALLE3适用的Prompt由一个个描述性短句组成（生成图片的Prompt可以通过点击图片 -> 上方工具栏"i"图标查看）

  2. Prompt写得越详细，生成图片质量越好

  3. Prompt中有的东西基本都会出现在图片里（车水马龙警告）

  4. 尽量使用英文Prompt

以上都是DALLE3的基本使用，今天主要是想给大家分享一个能挖掘DALLE3潜能的Prompt。其实这个Prompt在DALLE3刚推出不久就被写出来并且很火，那时候玩DALLE3用这个Prompt和不用差别很大，这里称它为“增强Prompt”

Prompt链接：


[Pastebin](https://pastebin.com)


你可以在这里看这个博主演示：

![Video preview](https://i.ytimg.com/vi/RI7KXqqZ8C4/hqdefault.jpg)

这个Prompt本来应该放在“自定义提示”中使用，但那样容易影响到正常使用，因此我专门用这个Prompt做了一个GPTs，想尝试的小伙伴可以直接通过这个GPTs使用：


[Cdn](https://cdn.oaistatic.com)


关于这个增强Prompt为什么有用，经过一通捣鼓和前思后想，总结可能原因如下，各位看官且听我胡说八道：

一开始的DALLE3是用户给什么Prompt就用什么Prompt生图，上面说过，DALLE3的Prompt越详细越好，而用户给的原Prompt基本上都很简单，所以画的图很难出片。这个Prompt针对这一点，提示ChatGPT用DALLE3生图时按要求丰富用户Prompt，这样便能提升生图质量

使用增强Prompt与不使用的对比流程如下：

![notion image](https://img.aiexplorernote.com/pic/use-enhanced-prompt-with-dalle3.jpg?t=164d1f9c-c2a3-8036-9b60-de6c054b4544)

再后来OpenAI自己针对这个做出优化，在DALLE3的System Prompt（是的，DALLE3也有系统后台提示）中提示DALLE3生成图片时自动优化Prompt，这样即使不使用增强Prompt，直接用DALLE3画图实际也能达到原来使用增强Prompt的效果

所以现在用ChatGPT生图的流程是这样：

![notion image](https://img.aiexplorernote.com/pic/what-its-like-to-use-dalle3-generate-images-now.jpg?t=164d1f9c-c2a3-8063-a68f-f7f49e0f17a4)

但我感觉DALLE3不如从前，究其根本，很重要的一个因素是OpenAI在优化DALLE3图片处理的同时，将一次生成的图片限制从4张砍到1张。AI绘画本来就是抽卡，这样会大大减少出片率，导致我觉得不好用

所以用ChatGPT画图要想出片应该尽量让它多生成几张

我发现GPTs这边限制不太强，跟GPTs说使用“生成\[X\]张\[XX\]相关的图片”（测试下来这个结构比较稳）这个结构的Prompt就能让它多一次多生成几张，而直接使用GPT4o则很难让它一次生成多张，应该是因为两者使用的API不同

![notion image](https://img.aiexplorernote.com/pic/use-gpts-to-draw-images.jpg?t=164d1f9c-c2a3-80d3-9dac-c9d573cbd554)

使用所有GPTs都是这样，但还是建议用上面我那个GPTs，它生成Prompt更详细，图片质量也一般更高

生成多了会达到限制，这时可以通过中转API解决这个问题，无限生图。通过中转API生图可以用

[这篇文章](https://www.aiexplorernote.com/blog/-chatgpt-web-midjourney)

中提到的客户端（同时确保你的中转API支持DALLE3，我用的OneAPI），到绘画中选择DALLE3就行

![notion image](https://img.aiexplorernote.com/pic/draw-images-with-dalle3-in-third-party-client.jpg?t=164d1f9c-c2a3-809e-af08-f39870b8bdc9)

下面分享下我用DALLE3生成的靓图 第一组，Prompt：

A digital painting of a small cherub-like angel playing in a field of blooming flowers at dawn. The angel has soft, curly golden hair, rosy cheeks, and delicate white wings with dew-drops glistening on the feathers. The flowers are vibrant and colorful, with soft morning light filtering through them. The scene is peaceful, with a magical, dreamy atmosphere. The cherub's playful expression conveys innocence and joy.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F17a29113-570f-42cd-9d92-d962cc9e10b3%2FDALLE_2024-12-22_21.40.13_-_A_digital_painting_of_a_small_cherub-like_angel_playing_in_a_field_of_blooming_flowers_at_dawn._The_angel_has_soft_curly_golden_hair_rosy_cheeks_an.webp?table=block&id=164d1f9c-c2a3-8020-919e-fc97eb65634b&t=164d1f9c-c2a3-8020-919e-fc97eb65634b&width=528&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fb53d211c-a75a-430d-a74d-2767729c7b55%2FDALLE_2024-12-22_21.39.28_-_A_digital_painting_of_a_small_cherub-like_angel_playing_in_a_field_of_blooming_flowers_at_dawn._The_angel_has_soft_curly_golden_hair_rosy_cheeks_an.webp?table=block&id=164d1f9c-c2a3-803f-9929-dfeb6165b2ca&t=164d1f9c-c2a3-803f-9929-dfeb6165b2ca&width=528&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F60912842-af6a-4467-94a7-aa051523de50%2FDALLE_2024-12-22_21.39.21_-_A_digital_painting_of_a_small_cherub-like_angel_playing_in_a_vibrant_field_of_blooming_flowers_at_dawn._The_angel_has_soft_curly_golden_hair_rosy_ch.webp?table=block&id=164d1f9c-c2a3-801d-9063-e99844dd81ec&t=164d1f9c-c2a3-801d-9063-e99844dd81ec&width=480&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fb7b66598-6222-4ece-b898-179a9bfa11da%2FDALLE_2024-12-22_21.38.51_-_A_digital_painting_of_a_small_cherub-like_angel_playing_in_a_field_of_blooming_flowers_at_dawn._The_angel_has_soft_curly_golden_hair_rosy_cheeks_an.webp?table=block&id=164d1f9c-c2a3-8001-b9c1-d245bd7f7e36&t=164d1f9c-c2a3-8001-b9c1-d245bd7f7e36&width=480&cache=v2)

第二组，Prompt：

A digital painting of an ancient castle floating above a sea of clouds under a starry night sky. The castle is majestic and weathered, with tall spires and stone walls bathed in soft starlight. The clouds below are illuminated by the faint glow of the stars, creating a surreal and mystical atmosphere. The scene is tranquil and awe-inspiring, with a sense of timelessness and magic. The sky is deep and endless, filled with twinkling stars and soft light. The castle's silhouette contrasts against the starry expanse.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F9482b5fa-7d7e-4293-95b4-16847f0a120b%2FDALLE_2024-12-22_21.51.11_-_A_digital_painting_of_an_ancient_castle_floating_above_a_sea_of_clouds_under_a_starry_night_sky._The_castle_is_majestic_and_weathered_with_tall_spire.webp?table=block&id=164d1f9c-c2a3-80cb-ab46-ff66d4a3cba3&t=164d1f9c-c2a3-80cb-ab46-ff66d4a3cba3&width=528&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F465087aa-776c-4a8a-a861-03bf8d93faa5%2FDALLE_2024-12-22_21.50.59_-_A_digital_painting_of_an_ancient_castle_floating_above_a_sea_of_clouds_under_a_starry_night_sky._The_castle_is_majestic_and_weathered_with_tall_spire.webp?table=block&id=164d1f9c-c2a3-80b6-9a14-fad474c8bf15&t=164d1f9c-c2a3-80b6-9a14-fad474c8bf15&width=576&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fc14b860f-75a7-4484-8ee5-cd352fed2294%2FDALLE_2024-12-22_21.50.55_-_A_digital_painting_of_an_ancient_castle_floating_above_a_sea_of_clouds_under_a_starry_night_sky._The_castle_is_majestic_and_weathered_with_tall_spire.webp?table=block&id=164d1f9c-c2a3-8046-8a5e-ca0fe286cd6d&t=164d1f9c-c2a3-8046-8a5e-ca0fe286cd6d&width=576&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fb1ef9f64-8611-47ff-b600-e76351ebc740%2FDALLE_2024-12-22_21.50.51_-_A_digital_painting_of_an_ancient_castle_floating_above_a_sea_of_clouds_under_a_starry_night_sky._The_castle_is_majestic_and_weathered_with_tall_spire.webp?table=block&id=164d1f9c-c2a3-806e-9529-ccaf27e8dc77&t=164d1f9c-c2a3-806e-9529-ccaf27e8dc77&width=576&cache=v2)

第三组，Prompt：

A digital painting of a pure white unicorn quietly drinking water under a starry night sky. The reflections of the stars scatter over the surface of the calm lake, creating a sense of mystery and magic. The unicorn's mane flows gently, illuminated by the soft glow of the stars. The surroundings are serene, with faint cosmic particles drifting in the air and a tranquil forest in the background fading into the night.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Ffdd81d0e-3218-4c0f-83cf-63b464ed4941%2FDALLE_2024-12-22_21.38.28_-_A_digital_painting_of_a_pure_white_unicorn_quietly_drinking_water_under_a_starry_night_sky._The_reflections_of_the_stars_scatter_over_the_surface_of_t.webp?table=block&id=164d1f9c-c2a3-806a-98a6-eec71ee06009&t=164d1f9c-c2a3-806a-98a6-eec71ee06009&width=684.8333740234375&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2Fe0462ffd-51b8-46c1-bcb9-39f1b483cda7%2FDALLE_2024-12-22_21.38.23_-_A_digital_painting_of_a_pure_white_unicorn_quietly_drinking_water_under_a_starry_night_sky._The_reflections_of_the_stars_scatter_over_the_surface_of_t.webp?table=block&id=164d1f9c-c2a3-8060-9263-cf38cee4d4fd&t=164d1f9c-c2a3-8060-9263-cf38cee4d4fd&width=684.8333740234375&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F97d226c6-2dea-4e92-8b22-517b8a8ac059%2FDALLE_2024-12-22_21.38.05_-_A_digital_painting_of_a_pure_white_unicorn_quietly_drinking_water_under_a_starry_night_sky._The_reflections_of_the_stars_scatter_over_the_surface_of_t.webp?table=block&id=164d1f9c-c2a3-80cd-b8c0-fcb3d7190f58&t=164d1f9c-c2a3-80cd-b8c0-fcb3d7190f58&width=684.8333740234375&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F09a73cc5-8af6-48e8-9e0c-779fab529067%2F65630204-ea3c-4704-9e33-7652f46034fd%2FDALLE_2024-12-22_21.37.59_-_A_digital_painting_of_a_pure_white_unicorn_quietly_drinking_water_under_a_starry_night_sky._The_reflections_of_the_stars_scatter_over_the_surface_of_t.webp?table=block&id=164d1f9c-c2a3-80b0-9688-d6fb93c20d6f&t=164d1f9c-c2a3-80b0-9688-d6fb93c20d6f&width=684.8333740234375&cache=v2)
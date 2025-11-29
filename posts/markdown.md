---
title: Markdown语法
date: 2024-11-10
excerpt: 30分钟掌握Markdown语法！
tags: ["Notion使用", "开发", "技术"]
category: 技术分享
---

这篇文章是对GitHub上Markdown语法介绍页面的翻译，GitHub上这个对于Markdown语法的介绍应该已经包含了Markdown语法的所有内容，是极好的学习Markdown的资源

原文链接：


[Docs](https://docs.github.com)


这篇文章去除了文档中GitHub独有的Markdown扩展，只保留通用的Markdown语法。但是有一两个既是Markdown独有，和基础语法又有关系，就留着了

如果你已经比较熟悉Markdown，也可以看看有没有什么你不知道的语法

## 基本书写和格式语法

## 标题

要创建标题,请在标题文本前添加1-6个 \# 符号。使用的 \# 数量将决定标题的层级和字体大小。

![notion image](https://img.aiexplorernote.com/pic/markdown-titles.png?t=13ad1f9c-c2a3-8038-84b9-f830a844693d)

## 文本样式

以下是一些常见和基本的Markdown语法。

样式| 语法| 快捷键| 示例| 输出  
---|---|---|---|---  
粗体| `** **` 或 `__ __`| Command+B \(Mac\) 或 Ctrl+B \(Windows/Linux\)| `**这是粗体文本**`|  **这是粗体文本**  
斜体| `* *` 或 `_ _`| Command+I \(Mac\) 或 Ctrl+I \(Windows/Linux\)| `_这是斜体文本_`| _这是斜体文本_  
删除线| `~~ ~~`| 无| `~~这是错误文本~~`|  ~~这是错误文本~~  
粗体和嵌套斜体| `** **` 和 `_ _`| 无| `**这段文本_非常_重要**`|  **这段文本\_非常\_重要**  
全部加粗和斜体| `*** ***`| 无| `***所有这些文本都很重要***`| _ **所有这些文本都很重要**_  
下标| `<sub> </sub>`| 无| `这是<sub>下标</sub>文本`| 这是<sub>下标</sub>文本  
上标| `<sup> </sup>`| 无| `这是<sup>上标</sup>文本`| 这是<sup>上标</sup>文本  
下划线| `<ins> </ins>`| 无| `这是<ins>带下划线的</ins>文本`| 这是<ins>带下划线的</ins>文本  
  
## 引用样式

你可以使用 > 来引用文本。

引用的文本会缩进显示,并使用不同的文字颜色。

![notion image](https://img.aiexplorernote.com/pic/example-of-quoted-markdown-text.png?t=13ad1f9c-c2a3-80f4-b4ce-df1a1460b4cb)

## 代码样式

你可以使用单个反引号在句子中标记代码或命令。反引号之间的文本不会被格式化。你也可以使用键盘快捷键 Command+E \(Mac\) 或 Ctrl+E \(Windows/Linux\) 在 Markdown 行中插入代码块的反引号。

![notion image](https://img.aiexplorernote.com/pic/quote-code-within-sentence.png?t=13ad1f9c-c2a3-80e8-bc8a-c7da2d1d400e)

要将代码或文本格式化为独立的块,使用三个反引号:

![notion image](https://img.aiexplorernote.com/pic/markdown-code-box-exam%5Bple.png?t=13ad1f9c-c2a3-8093-8f62-eebcee19c44e)

## 链接样式

你可以通过将链接文本包裹在方括号 `[ ]` 中,然后将 URL 包裹在圆括号 `( )` 中来创建内联链接。你也可以使用键盘快捷键 Command+K 来创建链接。另外当你选中文本时,可以从剪贴板粘贴 URL 来自动给所选文本创建链接。

如果你想用链接替换文本,请使用键盘快捷键 Command+Shift+V。

本站使用[GitHub Pages](https://pages.github.com/)构建。

![notion image](https://img.aiexplorernote.com/pic/example-of-markdown-link.png?t=13ad1f9c-c2a3-80cd-8c25-f379006d1610)

## 章节链接样式

你可以直接链接到任何有标题的章节。要在渲染的文件中查看自动生成的锚点,将鼠标悬停在章节标题上以显示图标,点击图标即可在浏览器中跳转到锚点。

![notion image](https://img.aiexplorernote.com/pic/section-link-in-makrdown-example.png?t=13ad1f9c-c2a3-8097-8cea-c53e65a56576)

如果你需要确定正在编辑的文件中的标题锚点,可以使用以下基本规则:

  * 字母会转换为小写

  * 空格会替换为连字符\(``\)，其他任何空白字符或标点符号都会被移除

  * 开头和结尾的空白字符会被移除

  * 标记格式会被移除，只保留内容\(例如，`_斜体_` 变成 `斜体`\)

  * 如果某个标题自动生成的锚点与同一文档中较早的锚点相同，系统会通过添加连字符和自增整数来生成唯一标识符

下面的代码块演示了从渲染内容中的标题生成锚点的基本规则：

🚨

注意： 如果你编辑了标题，或者改变了具有"相同"锚点的标题顺序，你还需要更新指向这些标题的任何链接，因为锚点会发生变化。

## 相对链接样式

你可以在渲染的文件中定义相对链接和图片路径,以帮助读者导航到仓库中的其他文件。

相对链接是相对于当前文件的链接。例如,如果你在仓库根目录中有一个 README 文件,而在 _docs/CONTRIBUTING.md_ 中有另一个文件,则 README 中指向 _[CONTRIBUTING.md](http://contributing.md/)_ 的相对链接可能如下所示:

GitHub 会根据你当前所在的分支自动转换你的相对链接或图片路径,使链接或路径始终有效。链接路径将相对于当前文件。以 `/` 开头的链接将相对于仓库根目录。你可以使用所有相对链接操作符,如 `./` 和 `../`。

以下是使用相对链接显示图片的一些示例。

上下文| 相对链接  
---|---  
在同一分支的 .md 文件中| `/assets/images/electrocat.png`  
在另一个分支的 .md 文件中| `/../main/assets/images/electrocat.png`  
在仓库的 issues、pull requests 和评论中| `../blob/main/assets/images/electrocat.png?raw=true`  
在另一个仓库的 .md 文件中| `/../../../../github/docs/blob/main/assets/images/electrocat.png`  
在另一个仓库的 issues、pull requests 和评论中| `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true`  
  
注意：

上表中最后两个相对链接仅在查看者至少具有包含这些图片的私有仓库的读取权限时才能正常工作。

更多信息，请参见"相对链接"。

### 指定图片显示的主题

你可以在 Markdown 中使用 HTML 的 `<picture>` 元素结合 `prefers-color-scheme` 媒体特性来指定图片显示的主题。我们区分了浅色和深色两种模式，所以有两个选项可用。你可以使用这些选项来显示针对深色或浅色背景优化的图片。这对透明的 PNG 图片特别有用。

例如，以下代码在浅色主题下显示太阳图片，在深色主题下显示月亮图片：

通过在 URL 后附加片段\(`#gh-dark-mode-only` 或 `#gh-light-mode-only`\)来指定基于主题的图片的旧方法正在逐步淘汰，并将被上述新方法取代。

## 自定义锚点样式

你可以使用标准的 HTML 锚点标签\(`<a name="unique-anchor-name"></a>`\)在文档中的任何位置创建导航锚点。为避免歧义引用,请为锚点标签使用独特的命名方案,比如为 `name` 属性值添加前缀。

🚨

注意: 自定义锚点不会包含在文档大纲/目录中。

你可以使用你给锚点的 `name` 属性值来链接到自定义锚点。语法与链接到自动为标题生成的锚点完全相同。

例如:

💡

提示: 自定义锚点不受自动标题链接的自动命名和编号行为的影响。

## 图片样式

你可以通过添加 \! 并将替代文本包裹在 `[ ]` 中来显示图片。替代文本是图片信息的简短文本等价物。然后,将图片的链接包裹在圆括号 `()` 中。

![notion image](https://img.aiexplorernote.com/pic/%E7%AB%A0%E9%B1%BC%E7%8C%AB%E5%9C%A8%E5%BE%AE%E7%AC%91%E5%B9%B6%E4%B8%BE%E8%B5%B7%E8%A7%A6%E6%89%8B.png?t=13ad1f9c-c2a3-8030-8080-de96780c8f0a)

注意: 当你想显示仓库中的图片时,请使用相对链接而不是绝对链接。

## 列表样式

你可以通过在文本行前面添加 -、\* 或 + 来创建无序列表。

要创建有序列表，在每行前面加上数字。

![notion image](https://img.aiexplorernote.com/pic/example-of-list-style-in-markdown.png?t=13ad1f9c-c2a3-8010-a574-e119c0c282e7)

![notion image](https://img.aiexplorernote.com/pic/-example-of-markdown-numbered-points.png?t=13ad1f9c-c2a3-8076-8bd3-d87e9bdde99c)

### 嵌套列表样式

你可以通过在另一个项目下缩进一个或多个列表项来创建嵌套列表。

要使用 GitHub 网页编辑器或使用等宽字体的文本编辑器\(如 Visual Studio Code\)创建嵌套列表，你可以直观地对齐你的列表。在嵌套列表项前输入空格字符，直到列表标记符号\(- 或 \*\)正好位于上面项目文本的第一个字符下方。

🚨

注意： 在基于网页的编辑器中，你可以先高亮显示所需的行，然后使用 Tab 或 Shift+Tab 来缩进或取消缩进文本。

![notion image](https://img.aiexplorernote.com/pic/example-of-nested-lists-in-markdown.png?t=13ad1f9c-c2a3-80bf-be83-e1e4524cc956)

要在 GitHub 的评论编辑器\(不使用等宽字体\)中创建嵌套列表，你可以查看嵌套列表正上方的列表项，数一数内容前面有多少个字符。然后在嵌套列表项前输入相同数量的空格字符。

在这个例子中，你可以通过缩进至少五个空格来在列表项"100. First list item"下添加嵌套列表项，因为"First list item"前面有五个字符\(100. \)。

![notion image](https://img.aiexplorernote.com/pic/example-of-nested-list-in-markdown.png?t=13ad1f9c-c2a3-8099-85da-f144e93118c1)

你可以使用相同的方法创建多层嵌套列表。例如，因为第一个嵌套列表项在内容"First nested list item"之前有七个字符\(␣␣␣␣␣-␣\)，所以你需要将第二个嵌套列表项至少再缩进两个字符\(最少九个空格\)。

![notion image](https://img.aiexplorernote.com/pic/example-of-nested-list-in-markdown-.png?t=13ad1f9c-c2a3-804e-aeb8-ee6347eb94ef)

## 任务列表样式

要创建任务列表，在列表项前加上连字符和空格，后跟 \[ \]。要标记任务已完成，使用 \[x\]。

![notion image](https://img.aiexplorernote.com/pic/task-list-in-markdown-example.png?t=13ad1f9c-c2a3-8038-8c74-e74418fd8a29)

如果任务列表项描述以括号开头，你需要用 \ 来转义它（避免变成链接）：

## 使用表情符号

你可以通过输入 :表情代码:（冒号后跟表情符号的名称）来在你的写作中添加表情符号。

![notion image](https://img.aiexplorernote.com/pic/emoji-example-in-markdown.png?t=13ad1f9c-c2a3-80d4-81fe-f131ff985318)

输入 : 会显示表情符号建议列表。列表会随着你的输入进行筛选，一旦找到你要找的表情符号，按 Tab 或 Enter 键完成高亮的结果。

要查看所有可用的表情符号和代码的完整列表，请参见"[表情符号速查表](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)"。

## 段落

你可以通过在文本行之间留出空行来创建新段落。

## 脚注

你可以使用以下括号语法向内容添加脚注：

脚注会如下渲染：

![notion image](https://img.aiexplorernote.com/pic/example-of-footnote-in-markdown.png?t=13ad1f9c-c2a3-80a0-b699-e56eb63c6f1a)

🚨

注意： 脚注在 Markdown 中的位置不会影响其渲染位置。你可以在引用脚注后立即写脚注，脚注仍然会渲染在 Markdown 底部。脚注在 wiki 中不受支持。

## 警告框

警告框是基于块引用语法的 Markdown 扩展，你可以用它来强调重要信息。在 GitHub 上，它们会以不同的颜色和图标显示，以表示内容的重要性。

仅在对用户成功至关重要时才使用警告框，并将其限制在每篇文章一到两个，以防止读者负担过重。此外，你应该避免连续放置警告框。警告框不能嵌套在其他元素中。

要添加警告框，使用指定警告类型的特殊块引用行，后跟标准块引用中的警告信息。有五种警告类型可用：

![notion image](https://img.aiexplorernote.com/pic/alert-style-in-markdown-on-github.png?t=13ad1f9c-c2a3-8092-94ea-fa9b50fa409f)

## 使用注释隐藏内容

你可以通过将内容放在 HTML 注释中来让 GitHub 在渲染的 Markdown 中隐藏内容。

## 忽略 Markdown 格式

你可以通过在 Markdown 字符前使用 \ 来告诉 GitHub 忽略（或转义）Markdown 格式。

![notion image](https://img.aiexplorernote.com/pic/example-of-ignoring-markdown-formating.png?t=13ad1f9c-c2a3-8017-b82b-f11cbe663218)
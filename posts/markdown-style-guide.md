---
title: Markdown 样式指南
date: 2024-02-15
excerpt: 本文展示了博客支持的所有 Markdown 样式效果，包括标题、列表、代码块、表格等，帮助你更好地编写文章。
tags: [Markdown, 样式指南, 文档]
category: 技术分享
---

# Markdown 样式指南

这篇文章展示了本博客支持的所有 Markdown 样式效果。你可以参考这个指南来编写格式丰富的博客文章。

## 标题样式

博客支持六级标题，每一级都有不同的视觉层次：

### 三级标题示例

#### 四级标题示例

标题会自动添加合适的间距和边框效果。

---

## 文本样式

支持多种文本强调方式：

- **粗体文本**：使用 `**文本**` 或 `__文本__`
- *斜体文本*：使用 `*文本*` 或 `_文本_`
- ***粗斜体***：组合使用
- ~~删除线~~：使用 `~~文本~~`

普通段落文本会自动应用合适的行高和间距，提供舒适的阅读体验。

---

## 列表

### 无序列表

- 列表项 1
- 列表项 2
  - 嵌套列表项 2.1
  - 嵌套列表项 2.2
    - 更深层嵌套 2.2.1
- 列表项 3

### 有序列表

1. 第一项
2. 第二项
3. 第三项
   1. 嵌套第一项
   2. 嵌套第二项
4. 第四项

### 任务列表

- [x] 已完成的任务
- [x] 另一个完成的任务
- [ ] 待办事项 1
- [ ] 待办事项 2

---

## 代码

### 行内代码

在段落中使用 `code` 可以高亮显示代码片段，比如 `const name = "博客"` 或 `npm install`。

### 代码块

支持语法高亮的代码块：

```javascript
// JavaScript 示例
function greeting(name) {
  console.log(`Hello, ${name}!`)
  return `Welcome to my blog`
}

const result = greeting('World')
```

```typescript
// TypeScript 示例
interface User {
  id: number
  name: string
  email: string
}

function getUser(id: number): User {
  return {
    id,
    name: 'John Doe',
    email: 'john@example.com'
  }
}
```

```python
# Python 示例
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# 输出前 10 个斐波那契数
for i in range(10):
    print(fibonacci(i))
```

```css
/* CSS 示例 */
.button {
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #0ea5e9, #3b82f6);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

---

## 引用

> 这是一个引用块。
> 
> 引用可以包含多个段落，并且会有特殊的样式和边框。
> 
> — 作者名字

> **提示**：引用块常用于强调重要信息或引用他人的话。

---

## 链接和图片

### 链接

- 普通链接：[访问 Google](https://www.google.com)
- 带标题的链接：[GitHub](https://github.com "访问 GitHub")
- 自动链接：https://www.example.com

### 图片

图片会自动居中并添加圆角和阴影效果：

![示例图片](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=Beautiful+Blog+Image)

---

## 表格

表格会自动添加样式，支持响应式显示：

| 功能 | 支持 | 说明 |
|------|------|------|
| Markdown 基础语法 | ✅ | 完全支持 |
| GFM 扩展语法 | ✅ | 表格、删除线等 |
| 代码高亮 | ✅ | 多语言支持 |
| 数学公式 | ❌ | 暂不支持 |
| Emoji | ✅ | 😊 🎉 🚀 |

### 对齐方式

| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:-------:|-------:|
| 内容 1 | 内容 2 | 内容 3 |
| 较长的内容 | 中等 | 短 |

---

## 分隔线

使用三个或更多的 `-`、`*` 或 `_` 创建分隔线：

---

***

___

## 特殊元素

### Emoji 表情

支持标准 Emoji：😊 🎉 🚀 💻 📝 ✨ 🔥 👍

### 转义字符

使用反斜杠转义特殊字符：

\*这不是斜体\*  
\#这不是标题

---

## 嵌套结构

你可以在列表中嵌套其他元素：

1. **第一项**
   
   这是第一项的详细说明。可以包含多个段落。
   
   ```javascript
   // 代码块也可以嵌套
   const item1 = "First Item"
   ```

2. **第二项**
   
   > 甚至可以嵌套引用块
   
   - 嵌套的无序列表
   - 另一个列表项

3. **第三项**
   
   | 列 1 | 列 2 |
   |------|------|
   | 数据 | 数据 |

---

## 最佳实践

在编写 Markdown 文章时，建议：

1. **合理使用标题层级**：保持清晰的文档结构
2. **适当添加空行**：提高可读性
3. **使用代码块**：展示代码时指定语言以获得高亮
4. **善用列表**：组织要点信息
5. **添加链接**：引用外部资源
6. **优化图片**：使用合适尺寸的图片

---

## 总结

本博客的 Markdown 渲染系统支持丰富的样式，让你可以创作出美观、专业的文章。所有样式都经过精心设计，确保在各种设备上都有良好的显示效果。

开始创作你的第一篇文章吧！✨




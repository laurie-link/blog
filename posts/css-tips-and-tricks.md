---
title: CSS 实用技巧集锦
date: 2024-02-10
excerpt: 收集了一些实用的 CSS 技巧和现代布局方法，帮助你写出更优雅的样式代码。
tags: [CSS, 前端开发, 设计]
category: 技术分享
---

# CSS 实用技巧集锦

CSS 是前端开发的基础，掌握一些实用技巧可以让你的开发更加高效。

## 现代布局

### 1. Flexbox

Flexbox 让布局变得简单：

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

/* 居中对齐 */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 2. Grid

Grid 是二维布局的最佳选择：

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* 响应式网格 */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
```

### 3. Container Queries

根据容器大小调整样式：

```css
@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
```

## 实用技巧

### 1. 平滑滚动

```css
html {
  scroll-behavior: smooth;
}
```

### 2. 文本溢出省略

```css
/* 单行省略 */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 多行省略 */
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### 3. 宽高比

```css
.aspect-ratio {
  aspect-ratio: 16 / 9;
}
```

### 4. 自定义滚动条

```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
```

### 5. 渐变边框

```css
.gradient-border {
  border: 2px solid transparent;
  background: 
    linear-gradient(white, white) padding-box,
    linear-gradient(to right, red, blue) border-box;
}
```

## 动画效果

### 1. 过渡

```css
.button {
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

### 2. 关键帧动画

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease;
}
```

## 响应式设计

### 1. 媒体查询

```css
/* 移动优先 */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

### 2. clamp() 函数

实现响应式字体大小：

```css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

## CSS 变量

```css
:root {
  --primary-color: #0ea5e9;
  --spacing: 1rem;
  --border-radius: 0.5rem;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
  border-radius: var(--border-radius);
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #38bdf8;
  }
}
```

## 性能优化

1. **使用 transform 和 opacity** 进行动画
2. **避免复杂的选择器**
3. **使用 will-change** 提示浏览器
4. **压缩 CSS 文件**

## 总结

CSS 的功能越来越强大，掌握这些现代技巧可以让你的开发更加高效。

记住：**好的 CSS 不仅要看起来好，还要性能好**！✨



---
title: React Hooks 完全指南
date: 2024-02-05
excerpt: React Hooks 改变了我们编写 React 组件的方式。本文深入讲解常用 Hooks 的使用方法和最佳实践。
tags: [React, Hooks, 前端开发]
category: 技术分享
---

# React Hooks 完全指南

React Hooks 是 React 16.8 引入的新特性，它让我们可以在函数组件中使用状态和其他 React 特性。

## 什么是 Hooks？

Hooks 是一些特殊的函数，让你可以在函数组件中"钩入" React 的特性：

- 不需要编写 class 组件
- 更容易复用状态逻辑
- 更简洁的代码

## 常用 Hooks

### 1. useState

管理组件状态：

```typescript
const [count, setCount] = useState(0)
const [user, setUser] = useState({ name: '', email: '' })

// 更新状态
setCount(count + 1)
setCount(prev => prev + 1) // 推荐：使用函数式更新
```

### 2. useEffect

处理副作用：

```typescript
// 组件挂载时执行
useEffect(() => {
  console.log('Component mounted')
}, [])

// 依赖变化时执行
useEffect(() => {
  fetchData(id)
}, [id])

// 清理函数
useEffect(() => {
  const timer = setInterval(() => {}, 1000)
  return () => clearInterval(timer)
}, [])
```

### 3. useContext

使用 Context：

```typescript
const ThemeContext = createContext('light')

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Component />
    </ThemeContext.Provider>
  )
}

function Component() {
  const theme = useContext(ThemeContext)
  return <div>Current theme: {theme}</div>
}
```

### 4. useReducer

管理复杂状态：

```typescript
const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
```

### 5. useMemo 和 useCallback

性能优化：

```typescript
// useMemo - 缓存计算结果
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b)
}, [a, b])

// useCallback - 缓存函数
const handleClick = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

## 自定义 Hooks

创建可复用的逻辑：

```typescript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

// 使用
function Component() {
  const { width, height } = useWindowSize()
  return <div>窗口大小：{width} x {height}</div>
}
```

## Hooks 规则

1. **只在顶层调用 Hooks**：不要在循环、条件或嵌套函数中调用
2. **只在 React 函数中调用 Hooks**：在函数组件或自定义 Hooks 中调用

## 最佳实践

1. 合理拆分 useEffect
2. 使用 ESLint 规则检查 Hooks
3. 给自定义 Hooks 起清晰的名字
4. 避免过度优化（useMemo/useCallback）

## 总结

React Hooks 让函数组件变得更加强大和灵活。掌握 Hooks 是成为优秀 React 开发者的必经之路。

继续学习，不断实践！🎯




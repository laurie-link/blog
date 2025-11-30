'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string // 用于跳转的真实id
  key: string // 用于React key的唯一标识
  text: string
  level: number
}

interface TableOfContentsProps {
  htmlContent: string
}

export default function TableOfContents({ htmlContent }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [collapsedItems, setCollapsedItems] = useState<Set<string>>(new Set())

  useEffect(() => {
    // 从HTML内容中提取标题
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlContent, 'text/html')
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6')

    const items: TocItem[] = Array.from(headings).map((heading, index) => {
      const level = parseInt(heading.tagName.substring(1))
      const text = heading.textContent || ''
      const id = heading.id || `heading-${index}` // 保留原始id用于跳转
      const key = `toc-${index}` // 使用索引确保key唯一

      return { id, key, text, level }
    })

    setTocItems(items)
  }, [htmlContent])

  useEffect(() => {
    // 监听滚动，高亮当前标题
    const handleScroll = () => {
      const headings = tocItems.map(item => {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            id: item.id,
            top: rect.top
          }
        }
        return null
      }).filter(Boolean) as { id: string; top: number }[]

      // 找到距离顶部最近的标题
      const current = headings.find(h => h.top > 0 && h.top < 200)
      if (current) {
        setActiveId(current.id)
      } else if (headings.length > 0) {
        // 如果没有找到，使用最后一个已经滚动过的
        const passed = headings.filter(h => h.top <= 0)
        if (passed.length > 0) {
          setActiveId(passed[passed.length - 1].id)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始调用

    return () => window.removeEventListener('scroll', handleScroll)
  }, [tocItems])

  const handleClick = (id: string, hasSubItems: boolean) => {
    // 如果有子标题，点击时展开/折叠
    if (hasSubItems) {
      setCollapsedItems(prev => {
        const newSet = new Set(prev)
        if (newSet.has(id)) {
          newSet.delete(id)
        } else {
          newSet.add(id)
        }
        return newSet
      })
    }

    // 跳转到对应位置
    const element = document.getElementById(id)
    if (element) {
      const top = element.offsetTop - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // 检查某个标题是否有子标题
  const hasChildren = (index: number): boolean => {
    if (index >= tocItems.length - 1) return false
    const currentLevel = tocItems[index].level
    const nextLevel = tocItems[index + 1].level
    return nextLevel > currentLevel
  }

  // 检查某个标题是否应该被隐藏（因为父标题被折叠）
  const isHidden = (index: number): boolean => {
    for (let i = index - 1; i >= 0; i--) {
      if (tocItems[i].level < tocItems[index].level) {
        if (collapsedItems.has(tocItems[i].id)) {
          return true
        }
      }
    }
    return false
  }

  if (tocItems.length === 0) {
    return null
  }

  return (
    <nav className="lg:sticky lg:top-24">
      <div className="lg:bg-white lg:dark:bg-gray-800 lg:rounded-xl lg:shadow-md lg:p-6">
        <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200 dark:border-gray-700 lg:block hidden">
          目录
        </h2>
        <div className="max-h-[70vh] lg:h-[400px] overflow-y-auto overflow-x-hidden pr-2 toc-scrollbar">
          <ul className="space-y-2 list-none m-0 p-0">
            {tocItems.map((item, index) => {
              if (isHidden(index)) return null

              const hasSubItems = hasChildren(index)
              const isCollapsed = collapsedItems.has(item.id)

              return (
                <li
                  key={item.key}
                  className="list-none m-0"
                  style={{ paddingLeft: `${(item.level - 1) * 16}px` }}
                >
                  <button
                    onClick={() => handleClick(item.id, hasSubItems)}
                    className={`text-left w-full text-sm py-1 pr-2 rounded transition-colors flex items-center ${
                      activeId === item.id
                        ? 'text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/30'
                        : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {hasSubItems ? (
                      <svg
                        className={`w-3 h-3 mr-1.5 flex-shrink-0 transition-transform ${isCollapsed ? '' : 'rotate-90'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <span className="w-3 mr-1.5 flex-shrink-0"></span>
                    )}
                    <span className="flex-1">{item.text}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

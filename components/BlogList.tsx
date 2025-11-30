'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import PostCard from './PostCard'
import MobileSidebar from './MobileSidebar'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  category?: string
}

interface BlogListProps {
  posts: Post[]
}

// 固定的分类列表
const CATEGORIES = [
  { name: 'AI学习', icon: '🤖' },
  { name: '互联网技巧', icon: '💡' },
  { name: '技术分享', icon: '⚙️' },
  { name: '互联网工具', icon: '🛠️' },
  { name: '生活指南', icon: '📖' },
]

const POSTS_PER_PAGE = 10

export default function BlogList({ posts }: BlogListProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // 从 URL 参数读取标签、分类和页码
  useEffect(() => {
    const tagFromUrl = searchParams.get('tag')
    const categoryFromUrl = searchParams.get('category')
    const pageFromUrl = searchParams.get('page')

    if (tagFromUrl) {
      setSelectedTag(decodeURIComponent(tagFromUrl))
    } else {
      setSelectedTag(null)
    }

    if (categoryFromUrl) {
      setSelectedCategory(decodeURIComponent(categoryFromUrl))
    }

    if (pageFromUrl) {
      setCurrentPage(parseInt(pageFromUrl, 10))
    } else {
      setCurrentPage(1)
    }
  }, [searchParams])

  // 过滤文章：按分类、搜索关键词和标签
  const filteredPosts = useMemo(() => {
    let result = posts

    // 按分类筛选
    if (selectedCategory) {
      result = result.filter(post => post.category === selectedCategory)
    }

    // 按搜索关键词筛选
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // 按标签筛选
    if (selectedTag) {
      result = result.filter(post => post.tags.includes(selectedTag))
    }

    return result
  }, [posts, selectedCategory, searchQuery, selectedTag])

  // 清除标签筛选时，同时清除 URL 参数
  const handleClearTag = () => {
    setSelectedTag(null)
    setCurrentPage(1)
    router.push('/blog')
  }

  const hasActiveFilters = selectedCategory || searchQuery.trim() || selectedTag

  // 分页计算
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  // 页码改变时更新 URL
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const params = new URLSearchParams(searchParams.toString())
    if (page > 1) {
      params.set('page', page.toString())
    } else {
      params.delete('page')
    }
    router.push(`/blog?${params.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 侧边栏内容（用于桌面端和移动端复用）
  const sidebarContent = (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
        文章分类
      </h2>
      <div className="space-y-2">
        <button
          onClick={() => {
            setSelectedCategory(null)
            setCurrentPage(1)
            // 清除URL参数
            const params = new URLSearchParams(searchParams.toString())
            params.delete('category')
            params.delete('page')
            router.push(`/blog?${params.toString()}`)
          }}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === null
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          <span className="font-medium">全部文章</span>
          <span className="ml-2 text-sm opacity-75">({posts.length})</span>
        </button>
        {CATEGORIES.map((category) => {
          const count = posts.filter(post => post.category === category.name).length
          return (
            <button
              key={category.name}
              onClick={() => {
                setSelectedCategory(category.name)
                setCurrentPage(1)
                // 更新URL参数
                const params = new URLSearchParams(searchParams.toString())
                params.set('category', category.name)
                params.delete('tag') // 清除标签筛选
                params.delete('page') // 重置页码
                router.push(`/blog?${params.toString()}`)
              }}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.name
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <span className="font-medium">{category.icon} {category.name}</span>
              <span className="ml-2 text-sm opacity-75">({count})</span>
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* 移动端侧边栏抽屉 */}
      <MobileSidebar
        buttonText="文章分类"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        }
      >
        {sidebarContent}
      </MobileSidebar>

      {/* 桌面端侧边栏 */}
      <aside className="hidden lg:block lg:w-64 flex-shrink-0">
        <div className="lg:sticky lg:top-24">
          {sidebarContent}
        </div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1">
        {/* 搜索框 */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索文章标题、内容或标签..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full px-4 py-3 pl-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-gray-100"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setCurrentPage(1)
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* 筛选状态提示 */}
        {hasActiveFilters && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">当前筛选：</span>
            {selectedCategory && (
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                {selectedCategory}
                <button
                  onClick={() => {
                    setSelectedCategory(null)
                    setCurrentPage(1)
                    const params = new URLSearchParams(searchParams.toString())
                    params.delete('category')
                    params.delete('page')
                    router.push(`/blog?${params.toString()}`)
                  }}
                  className="ml-2 hover:text-primary-900 dark:hover:text-primary-100"
                >
                  ×
                </button>
              </span>
            )}
            {selectedTag && (
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                #{selectedTag}
                <button
                  onClick={handleClearTag}
                  className="ml-2 hover:text-primary-900 dark:hover:text-primary-100"
                >
                  ×
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                "{searchQuery}"
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-2 hover:text-primary-900 dark:hover:text-primary-100"
                >
                  ×
                </button>
              </span>
            )}
            <button
              onClick={() => {
                setSelectedCategory(null)
                setSelectedTag(null)
                setSearchQuery('')
                setCurrentPage(1)
                router.push('/blog')
              }}
              className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline"
            >
              清除所有筛选
            </button>
          </div>
        )}

        {/* 文章列表 */}
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {paginatedPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  currentPage={currentPage}
                  selectedCategory={selectedCategory}
                  selectedTag={selectedTag}
                />
              ))}
            </div>

            {/* 分页控件 */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  上一页
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // 只显示当前页附近的页码
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 2 && page <= currentPage + 2)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            currentPage === page
                              ? 'bg-primary-600 text-white'
                              : 'border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    } else if (
                      page === currentPage - 3 ||
                      page === currentPage + 3
                    ) {
                      return <span key={page} className="px-2">...</span>
                    }
                    return null
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  下一页
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              没有找到相关文章
            </p>
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSelectedCategory(null)
                  setSelectedTag(null)
                  setSearchQuery('')
                  setCurrentPage(1)
                  router.push('/blog')
                }}
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                清除筛选条件
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  )
}


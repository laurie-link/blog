import { Suspense } from 'react'
import { getAllPostsSummary } from '@/lib/posts'
import BlogList from '@/components/BlogList'

// ISR - 每30分钟重新验证博客列表页
export const revalidate = 1800

function BlogContent() {
  const posts = getAllPostsSummary()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            博客文章
          </h1>
        </div>

        {/* Blog List with Sidebar */}
        <BlogList posts={posts} />
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">加载中...</p>
        </div>
      </div>
    }>
      <BlogContent />
    </Suspense>
  )
}


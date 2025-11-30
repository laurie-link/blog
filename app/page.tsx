import Link from 'next/link'
import dynamic from 'next/dynamic'
import { getRecentPosts } from '@/lib/posts'

// 动态导入以优化性能
const HomePostList = dynamic(() => import('@/components/HomePostList'), {
  loading: () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-xl" />
      ))}
    </div>
  ),
})

// ISR - 每30分钟重新验证首页
export const revalidate = 1800

export default function Home() {
  const posts = getRecentPosts(6)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          欢迎来到我的博客
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          在这里分享AI、学习笔记和我的技术见解
        </p>
      </section>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">最新文章</h2>

        <HomePostList posts={posts} />

        <div className="mt-8 text-right">
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-800 font-medium inline-block"
          >
            查看全部 →
          </Link>
        </div>
      </section>

    </div>
  )
}




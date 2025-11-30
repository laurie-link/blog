import Link from 'next/link'
import { getRecentPosts } from '@/lib/posts'
import HomePostList from '@/components/HomePostList'

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
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">最新文章</h2>
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-800 font-medium"
          >
            查看全部 →
          </Link>
        </div>

        <HomePostList posts={posts} />
      </section>

    </div>
  )
}




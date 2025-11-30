import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  category?: string
}

interface PostCardProps {
  post: Post
  currentPage?: number
  selectedCategory?: string | null
  selectedTag?: string | null
}

export default function PostCard({ post, currentPage, selectedCategory, selectedTag }: PostCardProps) {
  // 构建返回链接的查询参数
  const buildReturnUrl = () => {
    const params = new URLSearchParams()
    if (currentPage && currentPage > 1) {
      params.set('page', currentPage.toString())
    }
    if (selectedCategory) {
      params.set('category', selectedCategory)
    }
    if (selectedTag) {
      params.set('tag', selectedTag)
    }
    return params.toString()
  }

  const returnParams = buildReturnUrl()
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden relative">
      <div className="p-6 pb-14">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.category && (
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-pointer"
            >
              {post.category}
            </Link>
          )}
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="text-xs px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors cursor-pointer"
            >
              #{tag}
            </Link>
          ))}
        </div>

        <Link href={`/blog/${post.slug}${returnParams ? `?from=${encodeURIComponent(returnParams)}` : ''}`}>
          <h3 className="text-2xl font-bold mb-2 hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <time className="absolute bottom-6 left-6 text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
    </article>
  )
}


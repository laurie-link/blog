'use client'

import { useState } from 'react'
import PostCard from './PostCard'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  category?: string
}

interface HomePostListProps {
  posts: Post[]
}

export default function HomePostList({ posts }: HomePostListProps) {
  const [displayCount, setDisplayCount] = useState(6)

  const visiblePosts = posts.slice(0, displayCount)
  const hasMore = displayCount < posts.length

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 6, posts.length))
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-12 text-right">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
          >
            加载更多文章 →
          </button>
        </div>
      )}
    </>
  )
}

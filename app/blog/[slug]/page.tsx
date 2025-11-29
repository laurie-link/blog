import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { markdownToHtml } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import MarkdownContent from '@/components/MarkdownContent'
import TableOfContents from '@/components/TableOfContents'
import MobileSidebar from '@/components/MobileSidebar'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// 从 markdown 内容中提取第一张图片 URL
function extractFirstImageUrl(content: string): string | null {
  // 匹配 markdown 图片语法 ![alt](url) 或 HTML img 标签
  const mdImageRegex = /!\[.*?\]\((https?:\/\/[^)]+)\)/
  const htmlImageRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["']/
  
  const mdMatch = content.match(mdImageRegex)
  if (mdMatch) return mdMatch[1]
  
  const htmlMatch = content.match(htmlImageRegex)
  if (htmlMatch) return htmlMatch[1]
  
  return null
}

// 生成页面 metadata，包含预加载提示
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return { title: '文章未找到' }
  }

  const firstImageUrl = extractFirstImageUrl(post.content)

  return {
    title: post.title,
    description: post.excerpt || post.title,
    // 预加载 LCP 图片
    ...(firstImageUrl && {
      other: {
        'link': `<${firstImageUrl}>; rel=preload; as=image`,
      }
    }),
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // 在服务器端将 Markdown 转换为 HTML
  const htmlContent = await markdownToHtml(post.content)
  
  // 提取第一张图片用于预加载
  const firstImageUrl = extractFirstImageUrl(post.content)

  return (
    <>
      {/* 预加载 LCP 图片 */}
      {firstImageUrl && (
        <link
          rel="preload"
          as="image"
          href={firstImageUrl}
          fetchPriority="high"
        />
      )}
      
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8"
          >
            ← 返回博客列表
          </Link>

          <div className="flex gap-8">
            {/* 移动端目录抽屉 */}
            <MobileSidebar
              buttonText="目录"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              }
            >
              <TableOfContents htmlContent={htmlContent} />
            </MobileSidebar>

            {/* 桌面端目录 - Left Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents htmlContent={htmlContent} />
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Article Header */}
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                  <time>
                    {new Date(post.date).toLocaleDateString('zh-CN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </header>

              {/* Article Content */}
              <div className="markdown-content prose prose-lg dark:prose-invert max-w-none">
                <MarkdownContent htmlContent={htmlContent} />
              </div>

              {/* Article Footer */}
              <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <Link
                    href="/blog"
                    className="text-primary-600 hover:text-primary-800 font-medium"
                  >
                    ← 查看更多文章
                  </Link>

                  <div className="flex gap-4">
                    <ShareButton title={post.title} />
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

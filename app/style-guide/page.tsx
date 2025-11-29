import { getPostBySlug } from '@/lib/posts'
import { markdownToHtml } from '@/lib/markdown'
import MarkdownContent from '@/components/MarkdownContent'
import Link from 'next/link'

export default async function StyleGuidePage() {
  const post = getPostBySlug('markdown-style-guide')

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">样式指南未找到</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            请确保 posts/markdown-style-guide.md 文件存在
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  // 在服务器端将 Markdown 转换为 HTML
  const htmlContent = await markdownToHtml(post.content)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
          <Link 
            href="/"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 mb-4"
          >
            ← 返回首页
          </Link>
          <h1 className="text-4xl font-bold mb-4">样式指南</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            本页面展示了博客支持的所有 Markdown 样式效果，你可以参考这些样式来编写文章。
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mb-8">
          <div className="markdown-content">
            <MarkdownContent htmlContent={htmlContent} />
          </div>
        </div>

        {/* Footer Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
            <h3 className="text-xl font-bold mb-2">💡 提示</h3>
            <p className="text-gray-700 dark:text-gray-300">
              所有样式都是自动应用的，你只需要按照标准 Markdown 语法编写文章即可。
            </p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-2">📚 文档</h3>
            <p className="text-gray-700 dark:text-gray-300">
              查看 <code className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">STYLE_GUIDE.md</code> 了解更多技术细节。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

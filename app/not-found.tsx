import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">页面未找到</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          抱歉，您访问的页面不存在。
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



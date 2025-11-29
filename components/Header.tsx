import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={32}
              height={32}
              className="flex-shrink-0"
            />
            文雅的疯狂
          </Link>
          
          <ul className="flex space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                首页
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                博客
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                关于
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}



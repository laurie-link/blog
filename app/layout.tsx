import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // 优化字体加载
})

export const metadata: Metadata = {
  title: '我的个人博客',
  description: '分享技术、生活和思考',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* DNS 预连接 - 加速图片域名连接 */}
        <link rel="dns-prefetch" href="https://img.aiexplorernote.com" />
        <link rel="preconnect" href="https://img.aiexplorernote.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

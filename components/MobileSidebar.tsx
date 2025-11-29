'use client'

import { ReactNode, useState, useEffect } from 'react'

interface MobileSidebarProps {
  children: ReactNode
  buttonText?: string
  icon?: ReactNode
}

export default function MobileSidebar({ children, buttonText = '目录', icon }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  // 防止滚动穿透
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // ESC 键关闭
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <>
      {/* 移动端触发按钮 - 只在 lg 以下显示 */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg p-4 transition-all duration-200 hover:scale-110"
        aria-label={buttonText}
      >
        {icon || (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* 遮罩层 */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 侧边栏抽屉 */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* 关闭按钮 */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center z-10">
          <h3 className="text-lg font-bold">{buttonText}</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="关闭"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 侧边栏内容 */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  )
}

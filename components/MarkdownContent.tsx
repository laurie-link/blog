'use client'

import { useEffect, useState } from 'react'

interface MarkdownContentProps {
  htmlContent: string
}

/**
 * 客户端组件 - 渲染 HTML 并添加交互功能
 * - 图片点击放大
 */
export default function MarkdownContent({ htmlContent }: MarkdownContentProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    // 为所有 markdown-body 中的图片添加点击事件
    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG' && target.closest('.markdown-body')) {
        const img = target as HTMLImageElement
        setLightboxImage(img.src)
      }
    }

    document.addEventListener('click', handleImageClick)
    return () => document.removeEventListener('click', handleImageClick)
  }, [])

  return (
    <>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* 图片灯箱 */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="放大图片"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}

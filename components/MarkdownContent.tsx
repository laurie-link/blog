'use client'

import { useEffect, useState } from 'react'

interface MarkdownContentProps {
  htmlContent: string
}

/**
 * 客户端组件 - 渲染 HTML 并添加交互功能
 * - 图片点击放大（显示原图）
 * - 缩略图 + WebP 优化
 */
export default function MarkdownContent({ htmlContent }: MarkdownContentProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [imageLoading, setImageLoading] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // 为所有 markdown-body 中的图片添加点击事件
    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG' && target.closest('.markdown-body')) {
        const img = target as HTMLImageElement
        // 优先使用原图 URL（data-original-src），如果没有则使用 src
        const originalSrc = img.dataset.originalSrc || img.src
        setLightboxImage(originalSrc)
        setImageLoading(true)
        setImageError(false)
      }
    }

    document.addEventListener('click', handleImageClick)
    return () => document.removeEventListener('click', handleImageClick)
  }, [])

  const handleCloseLightbox = () => {
    setLightboxImage(null)
    setImageLoading(false)
    setImageError(false)
  }

  return (
    <>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* 图片灯箱 - 显示原图 */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={handleCloseLightbox}
        >
          {/* 加载指示器 */}
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          {/* 错误提示 */}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <p className="text-xl mb-2">图片加载失败</p>
                <p className="text-sm text-gray-400">请检查网络连接</p>
              </div>
            </div>
          )}

          {/* 原图 */}
          <img
            src={lightboxImage}
            alt="放大图片"
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageLoading(false)
              setImageError(true)
            }}
          />

          {/* 关闭按钮 */}
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            onClick={handleCloseLightbox}
            aria-label="关闭"
          >
            ×
          </button>

          {/* 图片信息提示 */}
          {!imageLoading && !imageError && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
              正在查看原图 • 点击任意处关闭
            </div>
          )}
        </div>
      )}
    </>
  )
}

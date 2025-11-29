'use client'

import { useState } from 'react'

interface ShareButtonProps {
  title: string
  url?: string
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const shareUrl = url || window.location.href

    // 检查是否支持 Web Share API
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: shareUrl,
        })
      } catch (err) {
        // 用户取消分享或其他错误，静默处理
        console.log('分享取消或失败')
      }
    } else {
      // 降级方案：复制链接到剪贴板
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('复制失败', err)
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      className="px-6 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {copied ? '已复制链接!' : '分享'}
    </button>
  )
}

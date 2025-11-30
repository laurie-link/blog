/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 性能优化配置
  compiler: {
    // 移除 console.log（生产环境）
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 压缩和优化
  compress: true,
  poweredByHeader: false,

  // 图片优化配置
  images: {
    // 允许的外部图片域名
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.aiexplorernote.com',
      },
    ],
    // 图片格式优化 - 优先使用 avif 和 webp
    formats: ['image/avif', 'image/webp'],
  },

  // 添加缓存控制头
  async headers() {
    return [
      {
        // 静态资源缓存 1 年
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // 图片缓存 1 年
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // HTML 页面缓存策略
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },

  // Next.js 16 使用 Turbopack
  turbopack: {},

  // Next.js 16 优化功能
  experimental: {
    // 优化包导入
    optimizePackageImports: ['unified', 'remark-parse', 'remark-gfm', 'rehype-raw'],
  },

  // 外部包处理 (Next.js 16+)
  serverExternalPackages: ['probe-image-size', 'needle'],
}

module.exports = nextConfig

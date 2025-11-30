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
      {
        protocol: 'https',
        hostname: '**.imgur.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      // 允许任意 HTTPS 图片源（适用于博客）
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // 图片格式优化 - 优先使用 webp（更好的浏览器兼容性）
    formats: ['image/webp'],
    // 图片尺寸优化
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 最小化缓存时间（秒）
    minimumCacheTTL: 31536000, // 1年
    // 未优化的图片大小限制警告阈值
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
    // 优化字体加载
    optimizeCss: true,
  },

  // 外部包处理 (Next.js 16+)
  serverExternalPackages: ['probe-image-size', 'needle', 'sharp'],
}

module.exports = nextConfig

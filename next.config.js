/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 性能优化配置
  compiler: {
    // 移除 console.log（生产环境）
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
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

  // Webpack 配置
  webpack: (config, { isServer }) => {
    if (isServer) {
      // 服务器端：将某些 Node.js 特定的包标记为外部
      config.externals = config.externals || []
      config.externals.push({
        'supports-color': 'commonjs supports-color',
      })
    }
    return config
  },

  // 实验性功能
  experimental: {
    // 优化包导入
    optimizePackageImports: ['react-markdown', 'highlight.js'],
    // 将 probe-image-size 作为外部包处理
    serverComponentsExternalPackages: ['probe-image-size', 'needle', 'supports-color'],
  },
}

module.exports = nextConfig

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import type { Element, Root } from 'hast'
import probe from 'probe-image-size'

// 图片尺寸缓存
const imageSizeCache = new Map<string, { width: number; height: number } | null>()

/**
 * 获取远程图片尺寸
 */
async function getImageSize(url: string): Promise<{ width: number; height: number } | null> {
  // 检查缓存
  if (imageSizeCache.has(url)) {
    return imageSizeCache.get(url) || null
  }

  try {
    const result = await probe(url, { timeout: 5000 })
    const size = { width: result.width, height: result.height }
    imageSizeCache.set(url, size)
    return size
  } catch (error) {
    console.warn(`Failed to get image size for: ${url}`)
    imageSizeCache.set(url, null)
    return null
  }
}

/**
 * 从图片 URL 提取文件名作为默认 alt 文本
 */
function extractAltFromUrl(url: string): string {
  try {
    const pathname = new URL(url).pathname
    const filename = pathname.split('/').pop() || ''
    // 移除扩展名和特殊字符
    return filename
      .replace(/\.[^.]+$/, '')  // 移除扩展名
      .replace(/[-_]/g, ' ')     // 替换连字符和下划线
      .replace(/[0-9a-f]{8,}/gi, '') // 移除 hash
      .trim() || '图片'
  } catch {
    return '图片'
  }
}

/**
 * 自定义 rehype 插件：为标题添加 id
 */
function rehypeHeadingIds() {
  return function transformer(tree: Root) {
    let headingIndex = 0
    visit(tree, 'element', (node: Element) => {
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
        if (!node.properties?.id) {
          // 从标题文本生成 id
          const text = node.children
            .map((child: any) => {
              if (child.type === 'text') {
                return child.value
              }
              return ''
            })
            .join('')
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\u4e00-\u9fa5-]/g, '')

          node.properties = node.properties || {}
          node.properties.id = text || `heading-${headingIndex++}`
        }
      }
    })
  }
}

/**
 * 自定义 rehype 插件：处理单独一行的链接
 * - 纯链接：添加特殊样式
 * - Markdown 链接：应用 bookmark 样式
 */
function rehypeStandaloneLinkStyle() {
  return function transformer(tree: Root) {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (node.tagName === 'p' && parent && index !== undefined) {
        // 检查 p 标签是否只包含一个 a 标签（可能有空白文本节点）
        const nonWhitespaceChildren = node.children.filter((child: any) => {
          if (child.type === 'text') {
            return child.value.trim() !== ''
          }
          return true
        })

        // 只有一个子元素且是 a 标签
        if (nonWhitespaceChildren.length === 1 && nonWhitespaceChildren[0].type === 'element') {
          const child = nonWhitespaceChildren[0] as Element

          if (child.tagName === 'a' && child.properties?.href) {
            const href = String(child.properties.href)
            const linkText = child.children
              .map((c: any) => c.type === 'text' ? c.value : '')
              .join('')
              .trim()

            // 判断是纯链接还是 Markdown 链接（带有标题的）
            const isPlainLink = href === linkText || href === `http://${linkText}` || href === `https://${linkText}`

            if (isPlainLink) {
              // 纯链接：创建美观的链接卡片
              const linkCardDiv: Element = {
                type: 'element',
                tagName: 'div',
                properties: { className: 'plain-link-card' },
                children: [
                  {
                    type: 'element',
                    tagName: 'a',
                    properties: {
                      href,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'plain-link-content'
                    },
                    children: [
                      {
                        type: 'element',
                        tagName: 'svg',
                        properties: {
                          className: 'link-icon',
                          fill: 'none',
                          stroke: 'currentColor',
                          viewBox: '0 0 24 24',
                          xmlns: 'http://www.w3.org/2000/svg'
                        },
                        children: [
                          {
                            type: 'element',
                            tagName: 'path',
                            properties: {
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                              strokeWidth: '2',
                              d: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: 'element',
                        tagName: 'span',
                        properties: { className: 'link-text' },
                        children: [{ type: 'text', value: linkText }]
                      },
                      {
                        type: 'element',
                        tagName: 'svg',
                        properties: {
                          className: 'external-icon',
                          fill: 'currentColor',
                          viewBox: '0 0 20 20'
                        },
                        children: [
                          {
                            type: 'element',
                            tagName: 'path',
                            properties: {
                              d: 'M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'
                            },
                            children: []
                          },
                          {
                            type: 'element',
                            tagName: 'path',
                            properties: {
                              d: 'M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              }

              // 替换 p 标签为链接卡片
              parent.children[index] = linkCardDiv
            } else {
              // Markdown 链接：应用 bookmark 样式
              // 提取域名作为 favicon
              let domain = ''
              try {
                const url = new URL(href)
                domain = url.hostname
              } catch {
                domain = href
              }

              // 创建 bookmark 结构
              const bookmarkDiv: Element = {
                type: 'element',
                tagName: 'div',
                properties: { className: 'notion-bookmark' },
                children: [
                  {
                    type: 'element',
                    tagName: 'a',
                    properties: { href, target: '_blank', rel: 'noopener noreferrer' },
                    children: [
                      {
                        type: 'element',
                        tagName: 'div',
                        properties: {},
                        children: [
                          {
                            type: 'element',
                            tagName: 'div',
                            properties: {},
                            children: [
                              {
                                type: 'element',
                                tagName: 'div',
                                properties: {},
                                children: [{ type: 'text', value: linkText }]
                              },
                              {
                                type: 'element',
                                tagName: 'div',
                                properties: {},
                                children: [
                                  {
                                    type: 'element',
                                    tagName: 'svg',
                                    properties: {
                                      className: 'inline',
                                      fill: 'currentColor',
                                      viewBox: '0 0 20 20',
                                      style: 'width: 0.75rem; height: 0.75rem;'
                                    },
                                    children: [
                                      {
                                        type: 'element',
                                        tagName: 'path',
                                        properties: {
                                          d: 'M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'
                                        },
                                        children: []
                                      },
                                      {
                                        type: 'element',
                                        tagName: 'path',
                                        properties: {
                                          d: 'M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'
                                        },
                                        children: []
                                      }
                                    ]
                                  },
                                  { type: 'text', value: ` ${domain}` }
                                ]
                              }
                            ]
                          },
                          {
                            type: 'element',
                            tagName: 'div',
                            properties: {},
                            children: [
                              {
                                type: 'element',
                                tagName: 'div',
                                properties: {},
                                children: [{ type: 'text', value: '🔗' }]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }

              // 替换 p 标签为 bookmark div
              parent.children[index] = bookmarkDiv
            }
          }
        }
      }
    })
  }
}

/**
 * 自定义 rehype 插件：为图片添加宽高和 alt 属性
 */
function rehypeImageSize() {
  return async function transformer(tree: Root) {
    const images: { node: Element; url: string; index: number }[] = []
    let imageIndex = 0

    // 收集所有图片节点
    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'img' && node.properties?.src) {
        const src = String(node.properties.src)
        if (src.startsWith('http://') || src.startsWith('https://')) {
          images.push({ node, url: src, index: imageIndex++ })
        }
      }
    })

    // 并行获取所有图片尺寸
    await Promise.all(
      images.map(async ({ node, url, index }) => {
        const size = await getImageSize(url)

        // 添加宽高属性
        if (size) {
          node.properties = node.properties || {}
          node.properties.width = size.width
          node.properties.height = size.height
        }

        // 确保有 alt 属性
        if (!node.properties?.alt || node.properties.alt === '') {
          node.properties = node.properties || {}
          const existingAlt = node.properties.alt as string | undefined
          if (!existingAlt || existingAlt.trim() === '') {
            node.properties.alt = extractAltFromUrl(url)
          }
        }

        node.properties = node.properties || {}

        // 第一张图片（可能是 LCP）- 优先加载
        if (index === 0) {
          node.properties.loading = 'eager'
          node.properties.fetchPriority = 'high'
          node.properties.decoding = 'async'
        } else {
          // 其他图片 - 懒加载
          node.properties.loading = 'lazy'
          node.properties.decoding = 'async'
        }
      })
    )
  }
}

/**
 * 在服务器端将 Markdown 转换为 HTML
 * 这样可以避免在客户端加载大量的 JS 库
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHeadingIds)  // 为标题添加 id
    .use(rehypeStandaloneLinkStyle)  // 处理单独一行的链接
    .use(rehypeImageSize)  // 处理图片尺寸
    .use(rehypeStringify)
    .process(markdown)

  return result.toString()
}

import { visit, SKIP } from 'unist-util-visit'
import type { Root, Element, Text, ElementContent } from 'hast'

export function rehypeCallouts() {
  return (tree: Root) => {
    const nodesToReplace: Array<{
      parent: Element | Root
      index: number
      replacement: Element
      removeCount: number
    }> = []

    visit(tree, 'element', (node: Element, index, parent) => {
      // 只处理段落元素
      if (node.tagName !== 'p' || !parent || index === null) {
        return
      }

      // 获取段落的第一个文本子节点
      const firstChild = node.children[0]
      if (!firstChild || firstChild.type !== 'text') {
        return
      }

      const text = firstChild.value

      // 检查是否以 "Note:" 或 "Tips:" 开头
      const noteMatch = text.match(/^Note:\s*/)
      const tipsMatch = text.match(/^Tips:\s*/)

      if (!noteMatch && !tipsMatch) {
        return
      }

      const isNote = !!noteMatch
      const prefix = isNote ? noteMatch![0] : tipsMatch![0]
      const className = isNote ? 'note' : 'tips'

      // 收集内容节点
      const contentParagraphs: Element[] = []
      let currentIndex: number = index as number
      let foundEnd = false

      // 处理第一个段落（移除前缀）
      const remainingText = firstChild.value.slice(prefix.length).trim()

      if (remainingText || node.children.length > 1) {
        const newChildren: ElementContent[] = remainingText
          ? [{ type: 'text', value: remainingText } as Text, ...node.children.slice(1)]
          : node.children.slice(1)

        contentParagraphs.push({
          type: 'element',
          tagName: 'p',
          properties: {},
          children: newChildren
        })
      }

      // 查找后续段落直到遇到 "end"
      currentIndex++
      const parentChildren = parent.children as (Element | Text)[]

      while (currentIndex < parentChildren.length && !foundEnd) {
        const nextNode = parentChildren[currentIndex]

        // 跳过空白文本节点
        if (nextNode.type === 'text') {
          const textValue = nextNode.value.trim()
          if (textValue === '') {
            currentIndex++
            continue
          } else {
            // 遇到非空文本节点，停止（不应该出现在段落之外）
            break
          }
        }

        if (nextNode.type === 'element' && nextNode.tagName === 'p') {
          // 检查这个段落的最后一个文本节点是否包含 "end"
          const lastChild = nextNode.children[nextNode.children.length - 1]

          if (lastChild && lastChild.type === 'text') {
            const endMatch = lastChild.value.match(/\s+end\s*$/)

            if (endMatch) {
              foundEnd = true
              // 移除 "end" 标记
              const cleanedText = lastChild.value.replace(/\s+end\s*$/, '').trim()

              // 如果清理后还有内容，或者有其他子节点，则添加这个段落
              if (cleanedText || nextNode.children.length > 1) {
                const newChildren: ElementContent[] = nextNode.children.slice(0, -1)
                if (cleanedText) {
                  newChildren.push({ type: 'text', value: cleanedText } as Text)
                }

                contentParagraphs.push({
                  type: 'element',
                  tagName: 'p',
                  properties: {},
                  children: newChildren
                })
              }
            } else {
              // 没有 "end"，添加整个段落
              contentParagraphs.push(nextNode as Element)
            }
          } else {
            contentParagraphs.push(nextNode as Element)
          }

          currentIndex++
        } else {
          // 遇到非段落元素，停止
          break
        }
      }

      // 只有找到结束标记才创建callout
      if (foundEnd && contentParagraphs.length > 0) {
        const calloutDiv: Element = {
          type: 'element',
          tagName: 'div',
          properties: {
            className: [className]
          },
          children: contentParagraphs
        }

        // 记录需要替换的节点
        nodesToReplace.push({
          parent: parent as Element | Root,
          index: index as number,
          replacement: calloutDiv,
          removeCount: currentIndex - (index as number)
        })
      }
    })

    // 从后向前替换节点，避免索引混乱
    nodesToReplace.reverse().forEach(({ parent, index, replacement, removeCount }) => {
      parent.children.splice(index, removeCount, replacement)
    })
  }
}

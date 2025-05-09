// extensions/ParagraphWithPlaceholder.ts
import { Node, mergeAttributes, type NodeViewRenderer, type NodeViewRendererProps } from '@tiptap/core'
import { nanoid } from 'nanoid'

export const ParagraphWithPlaceholder = Node.create({
  name: 'paragraph',             // override built-in paragraph
  group: 'block',
  content: 'inline*',
  draggable: false,

  addOptions() {
    return { HTMLAttributes: {} }
  },

  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: el => el.getAttribute('data-id'),
        renderHTML: attrs => (attrs.id ? { 'data-id': attrs.id } : {}),
      },
    }
  },

  parseHTML() {
    return [{ tag: 'p' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['p', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

  // ← Here’s the correct signature:
  addNodeView(): NodeViewRenderer {
    return (props: NodeViewRendererProps) => {
      const { node, getPos, editor } = props

      // create wrapper <p>
      const dom = document.createElement('p')
      dom.style.position = 'relative'

      // stamp or read an id
      let id = node.attrs.id
      if (!id) {
        id = nanoid(14)
        const tr = editor.state.tr.setNodeMarkup(
          getPos()!,
          undefined,
          { ...node.attrs, id },
          node.marks
        )
        editor.view.dispatch(tr)
      }
      dom.setAttribute('data-id', id)

      // insert contentDOM
      const contentDOM = document.createElement('span')
      dom.appendChild(contentDOM)

      // helper to toggle placeholder attribute
      const updatePlaceholder = () => {
        const { from } = editor.state.selection
        const pos = getPos()!
        const isInside = from >= pos && from <= pos + node.nodeSize
        const isEmpty = node.content.size === 0
        if (isInside && isEmpty) {
          dom.setAttribute('data-placeholder', 'Type / to browse options')
        } else {
          dom.removeAttribute('data-placeholder')
        }
      }

      // initial placeholder
      updatePlaceholder()

      return {
        dom,
        contentDOM,
        update() {
          // update id if missing
          const existingId = dom.getAttribute('data-id')
          if (!existingId) {
            const newId = nanoid(14)
            dom.setAttribute('data-id', newId)
          }
          // recalc placeholder
          updatePlaceholder()
          return true
        },
        selectNode() { updatePlaceholder() },
        deselectNode() { updatePlaceholder() },
        destroy() { },
      }
    }
  },
})


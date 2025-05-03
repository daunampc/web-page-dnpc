// extensions/ParagraphWithId.ts
import { Node, mergeAttributes } from '@tiptap/core'
import { nanoid } from 'nanoid'

export const EditorParagraphWithId = Node.create({
  name: 'paragraph',

  group: 'block',
  content: 'inline*',
  draggable: false,

  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: element => element.getAttribute('data-id'),
        renderHTML: attrs =>
          attrs.id ? { 'data-id': attrs.id } : {},
      },
    }
  },

  parseHTML() {
    return [{ tag: 'p' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['p', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

  addNodeView() {
    return ({ node, getPos, editor }) => {
      const id = nanoid(14)
      const dom = document.createElement('p')
      dom.setAttribute('data-id', id || '')

      // If there's no id yet, generate one and write it back into the document
      if (!node.attrs.id) {
        const id = nanoid(14)
        dom.setAttribute('data-id', id)

        const { tr } = editor.state
        // setNodeMarkup(pos, type, attrs, marks)
        const transaction = tr.setNodeMarkup(
          getPos()!,             // position of this node
          undefined,             // keep the same node type
          { ...node.attrs, id }, // new attrs
          node.marks             // keep existing marks
        )
        editor.view.dispatch(transaction)
      }

      return {
        dom,
        contentDOM: dom,
      }
    }
  },
})


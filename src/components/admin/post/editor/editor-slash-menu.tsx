// extensions/SlashMenu.ts
import { Extension } from '@tiptap/core'
import Suggestion, { SuggestionOptions } from '@tiptap/suggestion'
import tippy, { Instance } from 'tippy.js'
import 'tippy.js/dist/tippy.css'

/** Định nghĩa 1 command trong menu */
export type Command = {
  title: string
  command: (props: { editor: any; range: { from: number; to: number } }) => void
}

/** Các mục sẽ xuất hiện trong slash-menu */
export const commands: Command[] = [
  {
    title: 'AI Writer',
    command: ({ editor }) => {
      editor.chain().focus().insertContent('🔮 AI Writer placeholder\n').run()
    },
  },
  {
    title: 'AI Image',
    command: ({ editor }) => {
      editor.chain().focus().insertContent('🖼️ AI Image placeholder\n').run()
    },
  },
  {
    title: 'Heading 1',
    command: ({ editor }) => {
      editor.chain().focus().toggleHeading({ level: 1 }).run()
    },
  },
  {
    title: 'Heading 2',
    command: ({ editor }) => {
      editor.chain().focus().toggleHeading({ level: 2 }).run()
    },
  },
  {
    title: 'Heading 3',
    command: ({ editor }) => {
      editor.chain().focus().toggleHeading({ level: 3 }).run()
    },
  },
  {
    title: 'Bullet List',
    command: ({ editor }) => {
      editor.chain().focus().toggleBulletList().run()
    },
  },
  {
    title: 'Numbered List',
    command: ({ editor }) => {
      editor.chain().focus().toggleOrderedList().run()
    },
  },
  {
    title: 'Blockquote',
    command: ({ editor }) => {
      editor.chain().focus().toggleBlockquote().run()
    },
  },
]

export const EditorSlashMenu = Extension.create({
  name: 'slash-menu',

  addOptions() {
    // Chúng ta chỉ cần 4 field: char, startOfLine, command, items
    type SlashOptions = Omit<SuggestionOptions<Command>, 'editor'>

    const slashOptions: SlashOptions = {
      char: '/',
      startOfLine: true,

      // Khi chọn 1 item, xóa range và gọi command tương ứng
      command({ editor, range, props }) {
        editor.chain().focus().deleteRange(range).run()
        props.command({ editor, range })
      },

      // Lọc danh sách theo từ khóa query
      items({ query }) {
        return commands
          .filter(item =>
            item.title.toLowerCase().startsWith(query.toLowerCase())
          )
          .slice(0, 6)
      },
    }

    return {
      suggestion: slashOptions,
    }
  },

  addProseMirrorPlugins() {
    // Khi khởi tạo plugin, ta cần full options bao gồm `editor`
    const pluginOptions: SuggestionOptions<Command> = {
      editor: this.editor,
      ...this.options.suggestion,

      // Render popup bằng tippy.js
      render: () => {
        let popup: Instance
        let container: HTMLDivElement

        return {
          onStart: props => {
            container = document.createElement('div')
            container.className = 'bg-gray-800 text-white rounded shadow-lg py-1'

            props.items.forEach(item => {
              const btn = document.createElement('button')
              btn.type = 'button'
              btn.className = 'block w-full text-left px-3 py-1 hover:bg-gray-700'
              btn.textContent = item.title
              btn.onclick = () => props.command(item)
              container.append(btn)
            })

            // ① Pass the real element, not a selector string,
            //    so tippy() returns a single Instance
            popup = tippy(document.body, {
              // ② Assert non-null and cast to DOMRect so TS is happy:
              getReferenceClientRect: () => (props.clientRect!() as DOMRect),
              // ③ You can pass the element directly for appendTo
              appendTo: document.body,
              content: container,
              showOnCreate: true,
              interactive: true,
              trigger: 'manual',
              placement: 'bottom-start',
              maxWidth: 'none',
            })
          },

          onUpdate: props => {
            container.innerHTML = ''
            props.items.forEach(item => {
              const btn = document.createElement('button')
              btn.type = 'button'
              btn.className = 'block w-full text-left px-3 py-1 hover:bg-gray-700'
              btn.textContent = item.title
              btn.onclick = () => props.command(item)
              container.append(btn)
            })

            // No more popup[0] – popup is a single Instance
            popup.setProps({
              getReferenceClientRect: () => (props.clientRect!() as DOMRect),
            })
          },

          onKeyDown: ({ event }) => {
            if (event.key === 'Escape') {
              popup.destroy()
              return true
            }
            return false
          },

          onExit: () => {
            popup.destroy()
          },
        }
      },
    }

    return [Suggestion(pluginOptions)]
  },
})


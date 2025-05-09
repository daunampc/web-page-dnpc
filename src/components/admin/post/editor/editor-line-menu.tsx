import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from 'prosemirror-state'
import { Decoration, DecorationSet } from 'prosemirror-view'
import { ReactRenderer } from '@tiptap/react'
import tippy, { Instance } from 'tippy.js'
import 'tippy.js/dist/tippy.css'

import type { Command } from './editor-slash-menu'

// Bạn có thể tái sử dụng mảng `commands` từ SlashMenu
import { commands } from './editor-slash-menu'
import { EditorSlashList } from './editor-slash-list'
export const EditorLineMenu = Extension.create({
  name: 'line-menu',

  addProseMirrorPlugins() {
    const key = new PluginKey('line-menu')
    let popup: Instance | null = null
    let renderer: ReactRenderer | null = null
    const tiptapEditor = this.editor

    return [
      new Plugin({
        key,

        state: {
          init: () => DecorationSet.empty,
          apply(tr) {
            // recompute on every transaction
            const decos: Decoration[] = []

            tr.doc.descendants((node, pos) => {
              // only on textblocks (paragraphs, headings, list items...)
              if (node.isTextblock) {
                const deco = Decoration.widget(
                  pos + 1,
                  () => {
                    const btn = document.createElement('button')
                    btn.textContent = '+'
                    btn.className = `
                      absolute left-0
                      ml-[-1.5rem] 
                      text-gray-400 hover:text-white 
                      transition-colors
                    `
                    btn.addEventListener('click', (e) => {
                      e.preventDefault()

                      // clean up any existing menu
                      popup?.destroy()
                      renderer?.destroy()

                      // render our React menu
                      renderer = new ReactRenderer(EditorSlashList, {
                        editor: tiptapEditor,
                        props: {
                          items: commands,
                          command: (item: Command) => {
                            tiptapEditor
                              .chain()
                              .focus()
                              .deleteRange({ from: pos, to: pos })
                              .run()
                            item.command({
                              editor: tiptapEditor,
                              range: { from: pos, to: pos },
                            })
                            popup?.destroy()
                            renderer?.destroy()
                          },
                          range: { from: pos, to: pos },
                          editor: tiptapEditor,
                          close: () => {
                            popup?.destroy()
                            renderer?.destroy()
                          },
                        },
                      })

                      // pop it open next to the button
                      popup = tippy(btn, {
                        content: renderer.element,
                        interactive: true,
                        trigger: 'manual',
                        placement: 'right-start',
                        maxWidth: 'none',
                      })
                      popup.show()
                    })

                    return btn
                  },
                  { side: -1, key: `line-menu-${pos}` }
                )

                decos.push(deco)
              }
            })

            return DecorationSet.create(tr.doc, decos)
          },
        },

        props: {
          decorations(state) {
            return this.getState(state)
          },
        },
      }),
    ]
  },
})

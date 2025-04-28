'use client'

import Heading from '@tiptap/extension-heading'
import { useEditor, EditorContent } from '@tiptap/react'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TableHeader from '@tiptap/extension-table-header'   // ← add this
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { common, createLowlight } from 'lowlight'
const lowlight = createLowlight(common)        // JS, TS, CSS, HTML … built-ins
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      /* Core */
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4] } }),

      /* Extra marks / nodes */
      Underline,
      Link.configure({ openOnClick: false }),
      Image.configure({ allowBase64: true }),

      /* Tables */
      Table.configure({ resizable: true }),
      TableHeader,
      TableRow,
      TableCell,

      /* Task list (GitHub style checkboxes) */
      TaskList,
      TaskItem,

      /* Code block with syntax highlight */
      CodeBlockLowlight.configure({ lowlight }),
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],

    /* Initial document */
    content: `
      <h1>Welcome to Tiptap!</h1>
      <p>You now have headings, <strong>bold</strong>, <em>italic</em>,
         <u>underline</u>, links, images, tables, task lists,
         and beautifully highlighted code blocks.</p>
      <pre><code class="language-js">console.log('It works!')</code></pre>
    `,
  })
  return <EditorContent editor={editor} />
}

export default Tiptap


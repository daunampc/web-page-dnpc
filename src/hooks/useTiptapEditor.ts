"use client";

import { JSONContent, useEditor, type Editor } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from 'lowlight'
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import psql from "highlight.js/lib/languages/pgsql";
import php from "highlight.js/lib/languages/php";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Image from "@tiptap/extension-image";
import Color from "@tiptap/extension-color";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";
import Italic from '@tiptap/extension-italic'
import Code from '@tiptap/extension-code'
import Bold from '@tiptap/extension-bold'
import Strike from "@tiptap/extension-strike";
import Heading from "@tiptap/extension-heading";
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import HardBreak from '@tiptap/extension-hard-break'

import TextStyle from "@tiptap/extension-text-style";
import CharacterCount from "@tiptap/extension-character-count";
import History from "@tiptap/extension-history";
import CodeBlock from "@tiptap/extension-code-block";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Paragraph from "@tiptap/extension-paragraph";
import Youtube from '@tiptap/extension-youtube'
import Dropcursor from "@tiptap/extension-dropcursor";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import Table from "@tiptap/extension-table";
import { IUseTiptapEditor } from "@/interface/post";
const lowlight = createLowlight(all)        // JS, TS, CSS, HTML … built-ins
lowlight.register("js", js)
lowlight.register("ts", ts)
lowlight.register("psql", psql)
lowlight.register("php", php)
export function useTiptapEditor({ is_edit, initialContent }: IUseTiptapEditor) {
  const editor = useEditor({
    editable: is_edit,
    extensions: [
      // 1) Foundation of the schema
      Document,
      Paragraph,
      Text,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'paragraph') {
            return 'Click here to start writing ...'
          }
          return 'Click here to start writing ...'
        },

        // 'Type / to browse options',
      }),
      // 2) History + HardBreak + baseKeymap cho Enter/Backspace
      History,
      HardBreak,

      // 3) Lists & blockquote (note: ListItem phải đứng trước Bullet/Ordered)

      BulletList,
      OrderedList,
      Blockquote,
      ListItem,
      CodeBlock,

      // 4) Headings
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),

      // 5) Marks (bold/italic/strike/code/underline/link)
      Bold,
      Italic,
      Strike,
      Code,
      Underline,
      Link.configure({ openOnClick: false }),

      // 6) Other formatting
      TextAlign.configure({
        types: ["heading", "paragraph", "listItem"],
      }),
      TextStyle,
      Typography,
      CharacterCount.configure({ limit: 100000 }),
      HorizontalRule,

      // 7) Code block + syntax highlight
      // 
      CodeBlockLowlight.configure({ lowlight }),

      // 8) Media + color
      Image,
      Color,

      // Media 
      Youtube,

      Dropcursor,

      //Table
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell
    ],
    editorProps: {
      attributes: {
        class:
          "ProseMirror prose prose-lg p-6" +
          "focus:outline-none focus:ring-0 outline-none ring-0",
        style: "outline: none !important; box-shadow: none !important;",
      },
    },
    content: initialContent,
  });


  return editor as Editor;
}

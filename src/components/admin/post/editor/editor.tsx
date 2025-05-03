"use client";
import { EditorContent } from "@tiptap/react";
import "highlight.js/styles/github-dark.css";

import EditorToolbar from "./editor-toolbar";
import { EditorTopbarProps } from "@/interface/post";

export default function Editor({ editor }: EditorTopbarProps) {
  if (!editor) return null;

  return (
    <div className="relative rounded-lg">
      <div className="sticky top-0 z-50">
        <EditorToolbar editor={editor} />
      </div>
      <EditorContent
        editor={editor}
        className="p-2 focus:ring-0 mx-auto max-w-4xl rounded-lg font-roboto"
      />
    </div>
  )

}

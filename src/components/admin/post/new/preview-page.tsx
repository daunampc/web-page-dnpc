// app/admin/posts/new/preview/page.tsx
"use client";
import "@/components/admin/post/editor/styles.scss";   // make sure all your editor styles load here

import { useTiptapEditor } from "@/hooks/useTiptapEditor";
import { EditorContent, type JSONContent } from "@tiptap/react";
interface EditorPreviewProps {
  /** The ProseMirror JSON you saved earlier */
  initialContent: JSONContent;
}
export default function PreviewPage({ initialContent }: EditorPreviewProps) {
  const editor = useTiptapEditor({
    is_edit: false,
    initialContent
  });
  return (
    <div>
      <EditorContent editor={editor} className="p-2 focus:ring-0 mx-auto max-w-4xl rounded-lg font-roboto" />
    </div>
  )
}


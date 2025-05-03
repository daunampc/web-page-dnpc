'use client'
import { useTiptapEditor } from "@/hooks/useTiptapEditor";
import dynamic from "next/dynamic";
const StatsEditor = dynamic(
  () => import("@/components/admin/post/editor/editor"),
  { ssr: false }
);
import { useSearchParams } from "next/navigation"
import PostAction from "../action/post-action";

export default function PostNewPage() {
  const editor = useTiptapEditor({ is_edit: true })
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  return (
    <>
      <PostAction editor={editor} />
      {type === 'content' ? <StatsEditor editor={editor} /> :
        type === 'settings' ? <div>Settings</div> :
          type === 'optimize' ? <div>optimize</div> :
            type === 'publish-options' ? <div>publish-options</div> :
              <StatsEditor editor={editor} />
      }
    </>
  )
}

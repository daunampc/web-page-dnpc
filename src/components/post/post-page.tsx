'use client'
import { Avatar } from "@heroui/avatar"
import Image from "next/image"
import CommentData from "../comment/comment-data"
import { useEffect } from "react"
import { useTiptapEditor } from "@/hooks/useTiptapEditor"
import { EditorContent } from "@tiptap/react"
import { IPostItem } from "@/interface/post"
import { ICommentDataFetch } from "@/interface/comment"


export default function PostPage({ data_comment, data_post }: { data_comment: ICommentDataFetch | null, data_post: IPostItem | null }) {
  const editor = useTiptapEditor({ is_edit: false, initialContent: "" })
  useEffect(() => {
    if (editor && data_post && data_post.content) {
      editor.commands.setContent(data_post.content)
    }
  }, [data_post, editor])
  if (!data_post || !editor) {
    return <div className="w-full space-y-8 animate-pulse">
      {/* Header */}
      <header className="space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="block h-4 w-20 bg-gray-700 rounded"></span>
          <div className="h-10 w-full bg-gray-700 rounded"></div>
          <div className="flex items-center gap-3 mt-5">
            <div className="h-12 w-12 rounded-full bg-gray-700"></div>
            <div className="flex flex-col gap-1">
              <div className="h-5 w-32 bg-gray-700 rounded"></div>
              <div className="h-4 w-20 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>

        <article className="px-4 grid place-items-center gap-8 mt-8">
          <div className="w-full max-w-screen-lg h-64 bg-gray-700 rounded-lg"></div>
        </article>
      </header>

      {/* Body */}
      <div className="max-w-3xl mx-auto space-y-6">
        <section className="space-y-4">
          {/* Simulate several lines of text */}
          <div className="h-4 w-full bg-gray-700 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
          <div className="h-4 w-4/6 bg-gray-700 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
        </section>

        {/* Comments placeholder */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-full bg-gray-700"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-1/3 bg-gray-700 rounded"></div>
                <div className="h-4 w-full bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  }
  return (
    <div className="w-full">
      <header className="">
        <div className="max-w-2xl mx-auto">
          <span className="text-[#8350b1] font-semibold text-sm">TIPSS</span>
          <h1 className="text-4xl text-slate-200 font-bold">{data_post.title}</h1>
          <div className="flex items-center gap-3 mt-5">
            <Avatar src="/images/profile.jpg" size="lg" />
            <div className="flex flex-col gap-0.5">
              <h1 className="text-slate-200 text-lg font-semibold">Itou Toshiro</h1>
              <span className="text-slate-400 text-sm">15 Apr 2025 — 3 min read</span>
            </div>
          </div>
        </div>
        <article className="px-4 grid place-items-center gap-8 mt-8">
          <div className="w-full max-w-screen-lg">
            <Image
              src={data_post.image}
              alt="Descriptive alt"
              width={1200}
              height={800}
              priority
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </article>
      </header>
      <div className="max-w-3xl mx-auto">
        <section className="mt-4">
          {editor && <EditorContent editor={editor} />}
        </section>
        {data_comment && data_post && <CommentData data_comment={data_comment} data_post={data_post} />}
      </div>
    </div>
  )
}

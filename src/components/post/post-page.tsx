import { Avatar } from "@heroui/avatar"
import Image from "next/image"
import Tiptap from "../tip-tap/tip-tap"
import { CommentData } from "../comment/comment-data"

interface IPostPage {
  html: string
}
export const PostPage = ({ html }: IPostPage) => {

  return (
    <div className="w-full">
      <header className="">
        <div className="max-w-2xl mx-auto">
          <span className="text-[#8350b1] font-semibold text-sm">TIPSS</span>
          <h1 className="text-4xl text-slate-200 font-bold">How to animate a TanStack Virtual list with motion (rev. 2)</h1>
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
              src="/images/banner-home-page.jpg"
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
        <section>
          <Tiptap />
        </section>
        <CommentData />
      </div>
    </div>
  )
}

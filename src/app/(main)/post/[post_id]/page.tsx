'use client'
import { PostPage } from "@/components/post/post-page";

import 'highlight.js/styles/github-dark.css'   // theme code — tuỳ chọn
export default function page() {

  return (
    <div className="mt-20">
      <PostPage html="" />
    </div>
  )
}

'use client'
import { PostItem } from "@/components/post/post-item";
import { PostPage } from "@/components/post/post-page";
import { Divider } from "@heroui/react";

import 'highlight.js/styles/github-dark.css'   // theme code — tuỳ chọn
export default function page() {

  return (
    <div className="mt-20">
      <PostPage html="" />
      <div>
        <h1>Read more</h1>
        <Divider className="mt-2" />
        <div className="grid grid-cols-4 mt-4 gap-4">
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
    </div>
  )
}

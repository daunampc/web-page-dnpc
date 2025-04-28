'use client'

import ScrollAnimate from "../scroll-animate/scroll-animate"
import { Divider } from "@heroui/divider"
import { PostItem } from "./post-item"

export const PostData = () => {

  return (
    <div>
      <ScrollAnimate>
        <div className="mt-6">
          <h1 className="text-xl  font-bold text-slate-200">Latest News</h1>
        </div>
        <Divider className="bg-slate-700 mt-2" />
      </ScrollAnimate>
      <div className="grid grid-cols-4 gap-4 mt-3">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />

        <PostItem />
      </div>
    </div>

  )
}

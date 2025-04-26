'use client'

import { BlogItem } from "./blog-item"
import ScrollAnimate from "../scroll-animate/scroll-animate"
import { Divider } from "@heroui/divider"

export const BlogData = () => {

  return (
    <div>
      <ScrollAnimate>
        <div className="mt-6">
          <h1 className="text-xl  font-bold text-slate-200">Latest News</h1>
        </div>
        <Divider className="bg-slate-700 mt-2" />
      </ScrollAnimate>
      <div className="grid grid-cols-4 gap-4 mt-3">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>

  )
}

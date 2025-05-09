'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar, Textarea } from "@heroui/react";

import Link from "next/link"
import { useMemo, useState } from "react";
import CommentItem from "./comment-item";
import { commentsData } from "@/data/comment";

export default function CommentData() {
  const [selectedSortBy] = useState(new Set(["Sort By"]))
  const [showReply, setShowReply] = useState<{ id_comment: string; is_show: boolean }>({
    id_comment: '',
    is_show: false
  })
  const selectedSortByValue = useMemo(
    () => Array.from(selectedSortBy).join(", ").replace(/_/g, ""),
    [selectedSortBy],
  );
  const onActionReply = (id: string) => {
    if (id === showReply.id_comment) {
      setShowReply({
        id_comment: id,
        is_show: !showReply.is_show
      })
    } else {
      setShowReply({
        id_comment: id,
        is_show: true
      })
    }

  }
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-200 text-2xl font-bold">
          Member discussion
        </h1>
        <span className="text-slate-300 ">
          7 comments
        </span>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold">Join the discussion</h1>
        <div className="mt-2">Become a member of Itou Toshiro to start commenting.</div>
        <div className="mt-5">
          <Button className="bg-dark-pink-primary rounded-md">Sign Up Now</Button>
          <div className="text-slate-300 mt-1">
            Already a member?{" "}<Link className="font-bold text-green-500" href={'/login'}>Login</Link></div>
        </div>
      </div>
      <div className="flex mt-6 gap-2">
        <div className="flex-shrink">
          <Avatar src="/images/profile.jpg" />
        </div>
        <div className="flex-1">
          <Textarea className="w-full text-lg" placeholder="Add your text comment" />
          <Button className="mt-4 bg-dark-pink-primary">Add Comment</Button>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex items-center justify-between">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">{selectedSortByValue}</Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="sort-by"
              selectedKeys={selectedSortBy}
              selectionMode="single"
              variant="flat"
            >
              <DropdownItem key="best">Best</DropdownItem>
              <DropdownItem key="newest">Newest</DropdownItem>
              <DropdownItem key="oldest">Oldest</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className="text-slate-300">
            7 comments
          </div>
        </div>
        <div className="mt-10 space-y-7">
          {commentsData.map((item) => {
            return (
              <CommentItem key={item.id} {...item} is_show={showReply.is_show} id_comment={showReply.id_comment} onActionReply={onActionReply} />
            )
          })}

        </div>
      </div>
    </div >
  )
}

'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";

import Link from "next/link"
import { useMemo, useState } from "react";
import { CommentItem } from "./comment-item";

export const CommentData = () => {
  const [selectedSortBy, setSelectedSortBy] = useState(new Set(["Sort By"]))
  const selectedSortByValue = useMemo(
    () => Array.from(selectedSortBy).join(", ").replace(/_/g, ""),
    [selectedSortBy],
  );
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
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </div>
      </div>
    </div >
  )
}

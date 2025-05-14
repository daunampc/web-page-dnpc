'use client'
import { Spinner, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Pagination } from "@heroui/react";
import Link from "next/link"
import { useMemo, useRef, useState } from "react";
import { ICommentDataFetch } from "@/interface/comment";
import CommentForm from "./comment-form";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import { useComments } from "@/hooks/useComments";
import { IPostItem } from "@/interface/post";
import CommentItem from "./comment-item";


export default function CommentData({ data_comment, data_post }: { data_comment: ICommentDataFetch, data_post: IPostItem }) {
  const { user } = useAuth()
  const [pageComment, setPageComment] = useState<number>(1);
  const commentRef = useRef<HTMLDivElement>(null)

  const { dataComment, isLoading } = useComments(data_post && data_post.postId, pageComment, { fallbackData: data_comment })
  const [selectedSortBy] = useState(new Set(["Sort By"]))
  const [showReply, setShowReply] = useState<{ id_comment: string; is_show: boolean }>({
    id_comment: '',
    is_show: false
  })


  const onActionPageComment = (page: number) => {
    commentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setPageComment(page)
  }


  const selectedSortByValue = useMemo(
    () => Array.from(selectedSortBy).join(", ").replace(/_/g, ""),
    [selectedSortBy],
  );
  const onActionReply = (id: string) => {
    if (!user) {
      toast.error('Vui lòng đăng nhập tài khoản')
    }
    if (user) {
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
  }
  if (!data_comment || !data_post) {
    return null
  }

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-200 text-2xl font-bold">
          Member discussion
        </h1>
        <span className="text-slate-300 ">
        </span>
      </div>

      {!user ? <div className="text-center">
        <h1 className="text-3xl font-bold">Join the discussion</h1>
        <div className="mt-2">Become a member of Itou Toshiro to start commenting.</div>
        <div className="mt-5">
          <Button className="bg-dark-pink-primary rounded-md">Sign Up Now</Button>
          <div className="text-slate-300 mt-1">
            Already a member?{" "}<Link className="font-bold text-green-500" href={'/login'}>Login</Link></div>
        </div>
      </div>
        : <div className="flex mt-6 gap-2">
          <CommentForm is_reply={false} post_id={data_post.postId} user={user} />
        </div>}
      <div className="mt-20" ref={commentRef}>
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
            {dataComment && dataComment.meta.total} comments
          </div>
        </div>
        <div className="mt-10 space-y-7">
          {isLoading && <>
            <div className="flex w-full flex-row gap-2 font-sans text-slate-300 justify-center">
              <Spinner color="secondary" />
            </div>
          </>}
          {dataComment?.data && dataComment.data.map((item) => {
            return (
              <CommentItem key={item.commentId} post_id={data_post.postId} {...item} id_comment={item.commentId} onActionReply={onActionReply} is_show={showReply.is_show} id_comment_show={showReply.id_comment} user={item.user} />
            )
          })}
        </div>
        {
          dataComment && dataComment.meta.lastPage > 1 && <div className="mt-10 flex justify-end">
            <Pagination page={pageComment} onChange={onActionPageComment} showControls initialPage={1} total={dataComment.meta.lastPage || 0} />
          </div>
        }
      </div>
    </div >
  )
}

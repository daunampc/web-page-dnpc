'use client'
import { useAuthSWR } from "@/hooks/useAuth";
import { useComments } from "@/hooks/useComments";
import { ICommentForm, ICommentItem } from "@/interface/comment";
import axiosinstance from "@/lib/axios";
import { Avatar, Button, Textarea } from "@heroui/react";
import { Send } from "lucide-react";
import { useState } from "react";
export default function CommentForm({ post_id, comment_id, is_reply, user }: ICommentForm) {
  const { data_user } = useAuthSWR(user.user_id)
  const { dataComment, mutate } = useComments(post_id)
  const [textComment, setTextComment] = useState<string | undefined>('')
  const [loading, setLoading] = useState<boolean>(false)


  const createComment = async () => {
    if (data_user) {
      try {
        setLoading(true)
        if (!is_reply) {
          const result = await axiosinstance.post('/comments/create', {
            post_id,
            content: textComment,
          })
          if (result.data) {
            setTextComment(undefined)

            const tempComment: ICommentItem | null = {
              id: result.data.id,
              commentId: result.data.commentId,
              user: data_user,
              postId: post_id,
              createdAt: result.data.createdAt,
              updatedAt: result.data.updatedAt,
              content: result.data.content,
              like: result.data.like,
              replies: [],                // mặc định chưa có trả lời con
            }
            mutate((prev: any) => {
              if (!prev) return prev
              return {
                ...prev,
                data: [tempComment, ...prev.data]
              }
            })
            setLoading(false)
          }
        } else {
          const result = await axiosinstance.post('/comments/reply', {
            post_id,
            content: textComment,
            comment_id
          })
          const tempComment: ICommentItem | null = {
            id: result.data.id,
            commentId: result.data.commentId,
            user: data_user,
            postId: post_id,
            createdAt: result.data.createdAt,
            updatedAt: result.data.updatedAt,
            content: result.data.content,
            like: result.data.like,
            replies: [],                // mặc định chưa có trả lời con
          }
          if (dataComment) {
            const optimistic = dataComment.data.map(c =>
              c.commentId === comment_id
                ? { ...c, replies: [tempComment, ...(c.replies ?? [])] }
                : c
            )
            if (result.data) {
              setTextComment(undefined)
              mutate((prev: any) => {
                if (!prev) return prev
                return {
                  ...prev,
                  data: optimistic
                }
              }, false)
              setLoading(false)
            }
          }
        }


      } catch {
        setLoading(false)
      }
    }

  }
  return (
    <><div className="flex-shrink">
      <Avatar src={user?.avatar} />
    </div>
      <div className="flex-1">
        <Textarea disabled={loading} value={textComment} onChange={(e) => setTextComment(e.target.value)} className="w-full text-lg" placeholder="Add your text comment" />
        <Button isLoading={loading} onPress={createComment} isIconOnly size="sm" className="mt-4 bg-dark-pink-primary">
          <Send size={16} />
        </Button>
      </div>
    </>
  )
}

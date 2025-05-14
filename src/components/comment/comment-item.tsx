import { ICommentForm, ICommentItem, IShowReplyComment } from "@/interface/comment"
import { Avatar } from "@heroui/react"
import { Heart, Send } from "lucide-react"
import CommentForm from "./comment-form"
import TimeAgo from "../time-ago/time-ago"
export default function CommentItem({ _count, post_id, user, content, replies, id_comment, like, onActionReply, is_show, id_comment_show, createdAt }: ICommentItem & IShowReplyComment & ICommentForm) {
  return (
    <div className="flex w-full flex-row gap-2 font-roboto  text-slate-300">
      <div className="flex flex-col items-center justify-start">
        <div className="mb-2">
          <Avatar src={user && user.avatar || ''} />
        </div>
        {replies && replies.length !== 0 && <div className="w-px h-full rounded bg-dark-pink-primary grow"></div>}
      </div>
      <div className="grow">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <h1 className="text-blue-500">{user.name}</h1>
            <>
              <TimeAgo date={createdAt} />
            </>
          </div>
          <div className="mt-2">
            <div>
              <p className="text-base dark:text-slate-300 leading-6 font-normal">
                {content}
              </p>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <Heart size={15} className="dark:text-slate-300" />
                  <span className="font-bold text-sm dark:text-slate-300">{like}</span>
                </div>
                <div onClick={() => onActionReply(id_comment)} className="flex items-center gap-1 cursor-pointer">
                  <Send size={15} className="dark:text-slate-300" />
                  <span className="font-bold text-sm dark:text-slate-300">Reply</span>
                </div>
              </div>
              {is_show && id_comment_show === id_comment && <div className="flex mt-6 gap-2">
                <CommentForm post_id={post_id} is_reply={true} comment_id={id_comment} user={user} />
              </div>}
            </div>
          </div>
        </div>
        <div>
          {replies && replies.map((item, idx) => {
            return (
              <div key={`${item.commentId}-${idx}`} className="flex w-full flex-row gap-2 mt-7 relative">
                <div className="absolute -left-7 top-5 w-8 h-px bg-dark-pink-primary"> </div>
                <div className="flex flex-col items-center justify-start">
                  <div className="mb-2">
                    <Avatar src={item.user.avatar} />
                  </div>
                </div>

                <div className="grow">
                  <div>
                    <div className="flex items-center gap-2 font-bold">
                      <h1 className="text-[#DF6C64]">{item.user.name}</h1>
                      <>
                        <TimeAgo date={item.createdAt} />
                      </>
                    </div>
                    <div className="mt-2">
                      <div>
                        <p className="text-base dark:text-slate-300 leading-6 font-normal">{item.content}
                        </p>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center gap-5">
                          <div className="flex items-center gap-1">
                            <Heart size={20} className={`dark:text-slate-300`} />
                            <span className="font-bold dark:text-slate-300">12</span>
                          </div>
                          <div onClick={() => onActionReply(item.commentId)} className="flex items-center gap-1 cursor-pointer">
                            <Send size={20} className={`dark:text-slate-300 ${is_show && id_comment === item.commentId && 'dark:text-dark-pink-primary'} `} />
                            <span className="font-bold text-sm dark:text-slate-300">Reply</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {is_show && id_comment_show === item.id && <div className="flex mt-6 gap-2">
                    <CommentForm post_id={post_id} is_reply={true} comment_id={id_comment} user={user} />
                  </div>}
                </div>
              </div>
            )
          })}
          {_count && _count.replies > 2 && <div className="flex w-full flex-row gap-2 mt-4 relative items-center">
            <div className="w-10"></div>
            <div className="absolute -left-7 top-2 w-[70px] h-px bg-dark-pink-primary"> </div>
            <div className="flex-grow justify-start font-semibold text-sm">View more</div>
          </div>}
        </div>
      </div>
    </div>
  )
}

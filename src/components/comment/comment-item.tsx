'use client'
import { ICommentData, IShowReplyComment } from "@/interface/comment"
import { Avatar, Button, Textarea } from "@heroui/react"
import { Heart, Send } from "lucide-react"
export default function CommentItem({ id, user, content, replies, id_comment, is_show }: ICommentData & IShowReplyComment) {

  return (
    <div className="flex w-full flex-row gap-2 font-sans text-slate-300">
      <div className="flex flex-col items-center justify-start">
        <div className="mb-2">
          <Avatar src={user && user.avatar || ''} />
        </div>
        <div className="w-px h-full rounded bg-gradient-to-b from-neutral-900/15 from-70% to-transparent dark:from-white/19 dark:from-70% grow"></div>
      </div>
      <div className="grow">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <h1 className="text-blue-500">Itou Toshiro</h1>
            <span className="dark:text-slate-400 text-sm">29 Mar</span>
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
                  <span className="font-bold text-sm dark:text-slate-300">12</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <Send size={15} className="dark:text-slate-300" />
                  <span className="font-bold text-sm dark:text-slate-300">Reply</span>
                </div>
              </div>
              {is_show && id_comment === id && <div className="flex mt-6 gap-2">
                <div className="flex-shrink">
                  <Avatar src="/images/profile.jpg" />
                </div>
                <div className="flex-1">
                  <Textarea className="w-full text-lg" placeholder="Add your text comment" />
                  <Button isIconOnly size="sm" className="mt-4 bg-dark-pink-primary">
                    <Send size={16} />
                  </Button>
                </div>
              </div>}
            </div>
          </div>
        </div>
        <div>
          {replies && replies.map((item) => {
            return (
              <div key={item.id} className="flex w-full flex-row gap-2 mt-7">
                <div className="flex flex-col items-center justify-start">
                  <div className="mb-2">
                    <Avatar src={item.user.avatar} />
                  </div>
                </div>
                <div className="grow">
                  <div>
                    <div className="flex items-center gap-2 font-bold">
                      <h1 className="text-[#DF6C64]">Itou Toshiro</h1>
                      <span className="dark:text-slate-400 text-sm">29 Mar</span>
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
                          <div onClick={() => { }} className="flex items-center gap-1 cursor-pointer">
                            <Send size={20} className={`dark:text-slate-300 ${is_show && id_comment === item.id && 'dark:text-dark-pink-primary'} `} />
                            <span className="font-bold text-sm dark:text-slate-300">Reply</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {is_show && id_comment === item.id && <div className="flex mt-6 gap-2">
                    <div className="flex-shrink">
                      <Avatar src="/images/profile.jpg" />
                    </div>
                    <div className="flex-1">
                      <Textarea className="w-full text-lg" placeholder="Add your text comment" />
                      <Button isIconOnly size="sm" className="mt-4 bg-dark-pink-primary">
                        <Send size={16} />
                      </Button>
                    </div>
                  </div>}
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

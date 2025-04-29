import { Avatar } from "@heroui/react"
import { Heart, Send } from "lucide-react"

export const CommentItem = () => {
  return (
    <div className="flex w-full flex-row gap-2 font-sans text-slate-300">
      <div className="flex flex-col items-center justify-start">
        <div className="mb-2">
          <Avatar src="/images/profile.jpg" />
        </div>
        <div className="w-px h-full rounded bg-gradient-to-b from-neutral-900/15 from-70% to-transparent dark:from-white/20 dark:from-70% grow"></div>
      </div>
      <div className="grow">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <h1 className="text-blue-500">Itou Toshiro</h1>
            <span className="dark:text-slate-400 text-sm">29 Mar</span>
          </div>
          <div className="mt-2">
            <div>
              <p className="text-base dark:text-slate-300 leading-6 font-normal">Since Claude Code also functions as an MCP Server, I tried it and found that it can integrate with Inkdrop through Claude Desktop. This makes it possible to integrate code (Claude Code) and documents (Inkdrop) through Claude Desktop.
                Another benefit is that when using it as an MCP Server, requests from Claude Code are limited, with most requests coming from Claude Desktop, so it should be easier on your wallet as well.</p>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <Heart size={15} className="dark:text-slate-300" />
                  <span className="font-bold text-sm dark:text-slate-300">12</span>
                </div>
                <div className="flex items-center gap-1">
                  <Send size={15} className="dark:text-slate-300" />
                  <span className="font-bold text-sm dark:text-slate-300">Reply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row gap-2 mt-7">
          <div className="flex flex-col items-center justify-start">
            <div className="mb-2">
              <Avatar src="/images/profile.jpg" />
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
                  <p className="text-base dark:text-slate-300 leading-6 font-normal">Since Claude Code also functions as an MCP Server, I tried it and found that it can integrate with Inkdrop through Claude Desktop. This makes it possible to integrate code (Claude Code) and documents (Inkdrop) through Claude Desktop.
                  </p>
                </div>
                <div className="mt-2">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1">
                      <Heart size={20} className="dark:text-slate-300" />
                      <span className="font-bold dark:text-slate-300">12</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Send size={20} className="dark:text-slate-300" />
                      <span className="font-bold text-sm dark:text-slate-300">Reply</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

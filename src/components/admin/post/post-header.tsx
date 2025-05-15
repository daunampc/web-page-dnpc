'use client'
import { Button } from "@heroui/react";
import { Search, Settings2 } from "lucide-react";

export default function PostHeader() {

  return (
    <div className="w-full flex justify-between items-center gap-2">
      <div className="flex-grow flex items-center  gap-3">
        <div className="flex-grow max-w-sm relative">
          <Search className="absolute top-2 left-2 text-slate-300" size={20} />
          <input type="text" className="border-none outline-none w-full px-10 py-2 rounded-md m-0" placeholder="This is placeholder" />
          <Settings2 className="absolute right-2 top-2 text-slate-300" size={20} />
        </div>
        <div>
        </div>
      </div>
      <div>
        <Button>Add new post</Button>
      </div>
    </div>
  )
}

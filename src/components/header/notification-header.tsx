'use client'
import { useAuth } from "@/context/AuthContext";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Button } from "@heroui/react";
import { Bell } from "lucide-react";

export default function NotificationHeader() {
  const { user } = useAuth()
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="relative">
          <Button isIconOnly className="bg-dark-pink-primary">
            <Bell className=" rounded-md  z-20" />
          </Button>
          <div className="absolute -top-2 -right-3 bg-danger w-6 h-6 text-center rounded-full font-semibold leading-[1.42rem] text-sm">12</div>
        </div>
      </DropdownTrigger>
      <DropdownMenu className="w-96">
        <DropdownItem key={1}>
          <div className="flex items-start gap-2">
            <div className="flex-shrink">
              <Avatar src={user?.avatar} />
            </div>
            <div className="">
              <h4 className="text-gray-100">Itou Toshiro vừa phản hồi bình luận của bạn </h4>
              <p className="text-slate-400 text-xs line-clamp-2">
                This is a sample paragraph to test Tiptap JSON rendering. You can replace this with any content you like.
              </p>
            </div>
          </div>
        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  )
}

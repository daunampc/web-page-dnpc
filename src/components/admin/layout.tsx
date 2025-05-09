'use client'
import { useState } from "react";
import { Menu, Bell } from "lucide-react";
import { Badge, Button, Input, Avatar } from "@heroui/react";
import SideBar from "./side-bar";
export default function LayoutAdmin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 z-20  flex flex-col h-screen
          w-60 bg-dark-header text-gray-100 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.3)]
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        <SideBar />
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Topbar */}
      <header
        className={`
          fixed top-0 right-0 left-0 z-10
          h-16 bg-dark-header text-white flex items-center justify-between px-4
          shadow-[0_2px_8px_rgba(0,0,0,0.15)]
          transition-left duration-300 ease-in-out
          md:left-60
        `}
      >
        <div className="flex items-center space-x-4">
          {/* nút toggle chỉ hiển thị trên mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-6 h-6 text-slate-300" />
          </button>
          <Input
            placeholder="Search"
            className="hidden sm:block"  /* ẩn trên xs */
          />
        </div>
        <div className="flex items-center space-x-4">
          <Badge color="danger" content="99+" shape="circle">
            <Button isIconOnly aria-label="more than 99 notifications" radius="full" variant="light">
              <Bell size={20} className="text-slate-300" />
            </Button>
          </Badge>
          <Avatar src="/images/profile.jpg" size="sm" />
        </div>
      </header>
    </>
  )
}

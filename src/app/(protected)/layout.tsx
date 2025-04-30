import SideBar from "@/components/admin/side-bar"
import { Avatar, Input } from "@heroui/react"
import {
  Bell, Menu,

} from "lucide-react"

interface Props {
  children: React.ReactNode
}

export default function RootAdminLayout({ children }: Props) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className="
      fixed top-0 left-0 bottom-0 w-60 bg-dark-header text-gray-100 p-4 
      shadow-[4px_0_10px_-2px_rgba(0,0,0,0.3)] 
      z-10
    "
      >
        <div className="mb-8 text-2xl font-bold">Dash UI</div>
        <SideBar />
      </aside>

      {/* Topbar */}
      <header
        className="
      fixed top-0 left-60 right-0 h-16 bg-dark-header text-white 
      flex items-center justify-between px-4 
      shadow-[0_2px_8px_rgba(0,0,0,0.15)] 
      z-20
    "
      >
        <div className="flex items-center space-x-4">
          <Menu className="text-slate-300" />
          <Input placeholder="Search" />
        </div>
        <div className="flex items-center space-x-4">
          <Bell size={20} className="text-slate-300" />
          <Avatar src="/images/profile.jpg" size="sm" />
        </div>
      </header>

      {/* Main */}
      <main className="fixed top-16 left-60 right-0 bottom-0 bg-dark-body overflow-auto p-4">
        {children}
      </main>
    </>
  )
}

import { Input } from "@heroui/react"
import { Menu } from "lucide-react"

interface Props {
  children: React.ReactNode
}

export default function RootAdminLayout({ children }: Props) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-800 text-gray-100 p-4">
        <div className="mb-6 text-xl font-bold">Dash UI</div>
        <nav className="space-y-2">
          <div className="px-3 py-2 bg-gray-700 rounded">Dashboard</div>
          {/* ... các mục menu khác */}
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-gray-50 text-white flex items-center justify-between px-4 shadow-lg">
          <div className="flex items-center space-x-4">
            <div>
              <Menu className="text-dark-body" />
            </div>
            <div>
              <Input className="bg-transparent bg-none" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div>[Bell]</div>
            <div>[Avatar]</div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 bg-white">
          {/* Page header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Project</h1>
            <button className="bg-white text-gray-800 px-3 py-1 rounded shadow">
              Create New Project
            </button>
          </div>

          {/* Metrics cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow">Projects Card</div>
            <div className="bg-white p-4 rounded shadow">Active Task Card</div>
            <div className="bg-white p-4 rounded shadow">Teams Card</div>
            <div className="bg-white p-4 rounded shadow">Productivity Card</div>
          </div>

          {/* Main widgets */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-white p-4 rounded shadow">
              Active Projects Table
            </div>
            <div className="bg-white p-4 rounded shadow">
              Tasks Performance Chart
            </div>
          </div>

          {/* Phần children nếu cần thêm */}
          <div className="mt-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

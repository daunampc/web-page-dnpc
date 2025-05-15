import LayoutAdmin from "@/components/admin/layout"
import TitlePage from "@/components/admin/title-page"
import { Divider } from "@heroui/react"

interface Props {
  children: React.ReactNode
}

export default function RootAdminLayout({ children }: Props) {
  return (
    <div className="font-roboto">
      <>
        <LayoutAdmin />
      </>
      {/* Main */}
      <main className="fixed top-16 left-0 md:left-60 right-0 bottom-0 bg-dark-body overflow-auto transition-margin duration-300 ease-in-out z-0">
        <div className="p-4">
          <TitlePage />
        </div>
        <Divider />
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  )
}

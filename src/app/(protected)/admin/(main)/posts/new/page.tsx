import { Button } from "@heroui/react";
import { FileUser, Plus } from "lucide-react";

export default function page() {
  return (
    <div className="w-full min-h-[calc(100vh-162px)] flex items-center">
      <div className="w-full flex items-center justify-center h-full">
        <div className="flex items-center gap-3">
          <div className="w-64 h-64 rounded-lg bg-dark-header font-bold flex items-center justify-center">
            <div className="flex flex-col items-center">
              <Button isIconOnly size="lg" radius="sm">
                <Plus size={50} />
              </Button>
              <div>Create new post</div>
            </div>
          </div>
          <div className="w-64 h-64  rounded-lg bg-dark-header font-bold flex items-center justify-center">
            <div className="flex flex-col items-center">
              <Button isIconOnly size="lg" radius="sm">
                <Plus size={50} />
              </Button>
              <div>Create new content</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

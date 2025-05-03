'use client'

import { EditorTopbarProps } from "@/interface/post";
import { Button, Divider } from "@heroui/react"
import { BookX, Eye, HardDriveDownload, PanelRightClose, Upload } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation";

export default function PostAction({ editor }: EditorTopbarProps) {
  const searchParams = useSearchParams()
  const type_action = searchParams.get('type')
  const handleExport = () => {
    console.log("VO")
    if (editor) {
      const html = editor.getJSON()
      console.log(html)
    }
  };
  const handlePreview = () => {
    if (editor) {
      const html = editor.getHTML();
      const url = `/preview?content=${encodeURIComponent(html)}`;
      window.open(url, "_blank");
    }

  };
  return (

    <div className="">
      <div className="flex items-center justify-between">
        <div className="space-x-2">
          <Button color="danger" startContent={<BookX size={17} />} className="rounded-md">
            Exit
          </Button>
          <Button color="secondary" startContent={<HardDriveDownload size={17} />} className="rounded-md">
            Save
          </Button>
        </div>
        <div className="space-x-2">
          <Button onPress={handlePreview} color="default" startContent={<Eye size={17} />} className="rounded-md">
            Preview
          </Button>
          <Button color="default" startContent={<PanelRightClose size={17} />} className="rounded-md">
            Unpublish
          </Button>
          <Button color="primary" onPress={handleExport} startContent={<Upload size={17} />} className="rounded-md">
            Publish
          </Button>
        </div>
      </div>
      <Divider className="mt-2" />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center font-semibold">
          <Link
            href={'?type=content'}
            className={`px-10 py-3 ${type_action === 'content' && 'border-b-2  border-b-blue-600'}`}
          >
            Content
          </Link>
          <Link
            href={'?type=settings'}
            className={`px-10 py-3 ${type_action === 'settings' && 'border-b-2  border-b-blue-600'}`}
          >
            Settings
          </Link>
          <Link
            href={'?type=optimize'}
            className={`px-10 py-3 ${type_action === 'optimize' && 'border-b-2  border-b-blue-600'}`}
          >
            Optimize
          </Link>
          <Link
            href={'?type=publish-options'}
            className={`px-10 py-3 ${type_action === 'publish-options' && 'border-b-2  border-b-blue-600'}`}
          >
            Publish Options
          </Link>
        </div>
      </div>
    </div>
  )
}

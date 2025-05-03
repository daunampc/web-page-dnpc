
import PostAction from "@/components/admin/post/action/post-action";
import PostNewPage from "@/components/admin/post/new/post-new-page";
import { useTiptapEditor } from "@/hooks/useTiptapEditor";
import { Alert } from "@heroui/react";
import dynamic from "next/dynamic";

export default function page() {
  return (
    <div>
      <Alert color="danger" title={`Tính năng đang trong giai đoạn thử nghiệm`} />


      <PostNewPage />
    </div>
  )
}

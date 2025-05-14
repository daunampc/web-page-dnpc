import PostNewPage from "@/components/admin/post/new/post-new-page";
import { Alert } from "@heroui/react";

export default function page() {
  return (
    <div>
      <Alert
        color="danger"
        title={`Tính năng đang trong giai đoạn thử nghiệm`}
      />

      <PostNewPage />
    </div>
  );
}

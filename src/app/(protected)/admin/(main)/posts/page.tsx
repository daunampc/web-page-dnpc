import PostHeader from "@/components/admin/post/post-header";
import PostTable from "@/components/admin/post/post-table";
import { getAllPostAdmin } from "@/lib/admin/api";

export default async function page() {
  const data_post_admin = await getAllPostAdmin();
  return (
    <div>
      <PostHeader />
      <PostTable data={data_post_admin} />
    </div>
  )
}

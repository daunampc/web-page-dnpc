import InfoHomePage from "@/components/info-home-page/info-home-page";
import PostDataHome from "@/components/post/post-data-home";
import SubscribeForm from "@/components/subscribe/subscribe-form";
import { getPostData } from "@/lib/api";

export default async function page() {
  const data_post = await getPostData({ limit: 8, type: ['top-view', 'hot', 'last-new'] })
  if (!data_post) {
    return <div>Loading</div>
  }
  return (
    <div>
      <PostDataHome data={data_post.post_last_new} show="top" title="Last new" />
      <div className="mt-4">
        <h1 className="text-center text-white text-xl font-semibold"> Thông tin </h1>
        <div className="mt-4">
          <InfoHomePage />
        </div>
      </div>

      <PostDataHome data={data_post.post_top_view} title="Top view" />
      <div className="bg-dark-header mt-8">
        <SubscribeForm />
      </div>
      <PostDataHome data={data_post.post_top} title="Top" />
    </div>
  );
}

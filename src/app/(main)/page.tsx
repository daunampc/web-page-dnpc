import { InfoHomePage } from "@/components/info-home-page/info-home-page";
import { PostData } from "@/components/post/post-data";
import { SubscribeForm } from "@/components/subscribe/subscribe-form";

export default function Home() {
  return (
    <div>
      <div className="mt-4">
        <h1 className="text-center text-white text-xl font-semibold"> Thông tin </h1>
        <div className="mt-4">
          <InfoHomePage />
        </div>
      </div>
      <PostData />
      <div className="bg-dark-header">
        <SubscribeForm />
      </div>
      <PostData />
    </div>
  );
}

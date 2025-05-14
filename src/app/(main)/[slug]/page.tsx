import PostPage from "@/components/post/post-page";
import { fetcherPostByID } from "@/hooks/usePosts";
import { getCommentPostById, getPostByIdAndSlug } from "@/lib/api";
import { Divider } from "@heroui/react";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetcherPostByID(`/posts?slug=${params.slug}`)
  return {
    title: `${data.title} | DNPC`,
    description: data.description,
    alternates: {
      canonical: `https://192.168.1.5.com/${data.slug}`,
    },
  };
}
export default async function page({ params }: Props) {
  const post = await getPostByIdAndSlug(params.slug)
  const initialData = await getCommentPostById(post && post.postId, 1);

  return (
    <div className="mt-20">
      <PostPage data_comment={initialData} data_post={post} />
      <div>
        <h1>Read more</h1>
        <Divider className="mt-2" />
        <div className="grid grid-cols-4 mt-4 gap-4">
        </div>
      </div>
    </div>
  )
}

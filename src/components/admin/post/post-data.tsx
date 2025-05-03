import PostItem from "./post-item";

export default function PostData() {
  return (
    <div className="grid grid-cols-2 gap-12">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  )
}

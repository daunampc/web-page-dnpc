import dynamic from "next/dynamic";
const Tiptap = dynamic(() => import('@/components/tip-tap/tip-tap'), { ssr: false })

export default function page() {
  return (
    <div>
      <Tiptap />
    </div>
  )
}

'use client'
import { findTitlePageByHref } from "@/lib/utils/utils"
import { usePathname } from "next/navigation"

export default function TitlePage() {
  const pathname = usePathname()
  return (
    <h1 className="text-2xl font-medium font-potta-none">{findTitlePageByHref(pathname)}</h1>
  )
}

'use client'
import { IPostItem } from "@/interface/post"
import { Card, CardBody, CardHeader } from "@heroui/card"
import Image from "next/image"
import Link from "next/link"
export default function PostItem({ data, is_show_image = true, show_description = true }: { data: IPostItem; is_show_image?: boolean, show_description?: boolean }) {
  return (
    <Link href={`/${data.slug}`}
      className="
        relative 
        after:bg-gray-800 after:content-[''] after:h-full 
        after:w-px after:-left-[15px] after:top-0 after:absolute z-10 
        before:content-[''] before:w-full before:h-px before:-top-5 before:left-0
        before:bg-gray-800 before:absolute before:z-10
      "
    >
      <Card className="bg-transparent rounded-none shadow-none z-0">
        {is_show_image && <CardHeader className="p-0">
          <Image
            src={data.image}
            alt="Blog post cover"
            width={600}
            height={500}
            className="object-cover w-full h-auto max-h-70 rounded-none"
          />
        </CardHeader>
        }
        <CardBody >
          <h3 className="line-clamp-2 text-xl font-semibold mb-2   text-slate-200">{data.title}</h3>
          {show_description && <p className="text-gray-400 text-sm line-clamp-3">
            {data.description}
          </p>}
          <span className="mt-2.5 text-sm font-medium  text-gray-500">By Daunampc  - 15 Apr 2025</span>
        </CardBody>
      </Card >
    </Link >
  )
}

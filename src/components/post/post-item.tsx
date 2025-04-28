'use client'
import { Card, CardBody, CardHeader } from "@heroui/card"
import { Divider } from "@heroui/divider"
import Image from "next/image"
import Link from "next/link"
export const PostItem = () => {
  return (
    <Link href={'/blog/124666'}>
      <Card shadow="sm" className="bg-dark-body">
        {/* 1. Ảnh cover */}
        <CardHeader className="p-0">
          <div className="relative w-full h-48 ">
            <Image
              src="/images/banner-home-page.jpg"
              alt="Blog post cover"
              fill
              className="object-cover absolute"
            />
          </div>
        </CardHeader>
        <CardBody >
          <h3 className="line-clamp-2 text-xl font-semibold mb-2">What I did for upgrading React Native to 0.79.1 from 0.74.2</h3>
          <p className="text-gray-400 text-base">
            A short subtitle or description that gives a preview of the post.
          </p>
          <Divider className="bg-slate-700 mt-2 mb-2" />
          <span className="text-sm font-medium  text-gray-500">By Daunampc  - 15 Apr 2025</span>
        </CardBody>
      </Card>
    </Link>
  )
}

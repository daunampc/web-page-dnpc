'use client'
import { Divider } from "@heroui/divider"
import PostItem from "./post-item"
import { Card, CardBody, CardHeader } from "@heroui/react"
import { IPostItem } from "@/interface/post"

export default function PostDataHome({ data, show, title }: { data: IPostItem[] | null, show?: 'top', title?: string }) {
  if (!data) {
    return (
      <div className="animate-pulse">
        {/* Header */}
        <div className="mt-6">
          <div className="h-6 w-40 bg-gray-700 rounded"></div>
        </div>
        <div className="h-px bg-gray-700 mt-2"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-3">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Card key={idx} shadow="sm" className="bg-dark-body">
              {/* Image placeholder */}
              <CardHeader className="p-0">
                <div className="w-full h-48 bg-gray-700 rounded-lg"></div>
              </CardHeader>

              <CardBody className="space-y-2">
                {/* Title */}
                <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                {/* Description */}
                <div className="space-y-1">
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                </div>
                {/* Divider */}
                <Divider className="bg-slate-700 mt-2 mb-2" />
                {/* Meta */}
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    )
  }
  return (
    show == 'top' ? <div className="mt-16">
      <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-12 lg:grid-cols-16 gap-4 mt-3">
        <div className="lg:col-start-5 md:col-start-1 lg:col-span-8 col-span-full  [&>a>div>div>img]:max-h-96 row-start-1 row-end-auto overflow-hidden gap-12 flex flex-col">
          {data.slice(0, 2).map(item => (
            <PostItem key={item.postId} data={item} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col md:col-span-full md:row-start-2 lg:row-start-1 gap-3 lg:col-span-4 row-start-1 row-end-auto md:max-h-full [&>a>div>div>img]:max-h-96">
          {data.slice(2, 5).map((item) => (
            <PostItem
              key={item.postId}
              data={item}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col md:col-start-1 md:row-start-3 col-start-13 lg:col-span-4 col-end-[-1] lg:row-start-1 row-end-auto gap-3 md:max-h-full [&>a>div>div>img]:max-h-96">
          {data.slice(5, 8).map((item) => (
            <PostItem
              key={item.postId}
              data={item}
            />

          ))}
        </div>
      </div>
    </div> :
      <div className="mt-4 text-lg font-semibold text-slate-300">
        <h1>{title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8 mt-5 transition-all duration-300 ease-in-out overflow-hidden">
          {data && data.map((item) => {
            return (
              <PostItem data={item} key={item.postId} />
            )
          })}
        </div>

      </div>
  )
}

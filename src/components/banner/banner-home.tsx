import { Button } from "@heroui/button"
import { FolderSymlink } from "lucide-react"
import Image from "next/image"

export const BannerHome = () => {
  return (
    <div className="relative w-full h-[850px]">
      <Image fill className="absolute object-cover" src={'/images/banner-home-page.jpg'} alt="home-page" />
      <div className="absolute w-full h-full bg-black/10">
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-start px-8">
        <div>
          <p className="max-w-xl font-normal text-4xl font-potta-none bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Welcome to DNPC website. This site provides knowledge, tutorials, and much more ...
          </p>
          <Button
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-3"
          >
            <FolderSymlink />
            Xem ngay
          </Button>
        </div>
      </div>
    </div>

  )
}

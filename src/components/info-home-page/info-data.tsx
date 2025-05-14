'use client'
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"
import { Avatar } from '@heroui/avatar'
import { Divider } from "@heroui/divider"
import { Image } from "@heroui/image"
import Link from "next/link"
import { Button } from "@heroui/button"
import { useState } from "react"
export const InfoGithub = () => {
  return (
    <Card className="bg-dark-header">
      <CardHeader className="flex gap-3">
        <Image
          alt="daunampc logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/133574126?v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-slate-200">Đậu Nam PC</p>
          <p className="text-small text-default-500">daunampc.com</p>
        </div>
      </CardHeader>
      <Divider className="bg-slate-700" />
      <CardBody>
        <p className="text-sm text-slate-300">
          Delivering source code, resources, tutorials, and practical products
        </p>
      </CardBody>
      <Divider className="bg-slate-700" />
      <CardFooter>
        <Link className="text-blue-500 text-sm" href="https://github.com/heroui-inc/heroui">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>

  )
}

export const InfoTwiter = () => {
  const [isFollowed, setIsFollowed] = useState(false)
  return (
    <Card className="bg-dark-header">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://heroui.com/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-slate-200"> Đậu Nam PC </h4>
            <h5 className="text-small tracking-tight text-default-400">@daunampc</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 overflow-hidden">
        <p>Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
        <span className="pt-2">
          #FrontendWithZoey
          <span aria-label="computer" className="py-2" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  )
}
export const InfoFacebook = () => {
  const [isFollowed, setIsFollowed] = useState(false)
  return (
    <Card className="bg-dark-header">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://heroui.com/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-slate-200"> Đậu Nam PC </h4>
            <h5 className="text-small tracking-tight text-default-400">@daunampc</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 overflow-hidden">
        <p>Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
        <span className="pt-2">
          #FrontendWithZoey
          <span aria-label="computer" className="py-2" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  )
}

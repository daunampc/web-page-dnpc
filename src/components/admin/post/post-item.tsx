import { Avatar, Button, Chip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { ArrowBigDown, ArrowBigUp, Ellipsis, MessageCircleMore, PartyPopper, Share2 } from "lucide-react";
import Image from "next/image";

export default function PostItem() {
  return (
    <div className="border-b border-b-dark-gray-1 pb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar
            className="w-8 h-8"
            src="https://avatars.githubusercontent.com/u/30373425?v=4"
            name="Junior Garcia - 6 hour ago"
          />
          <div className="flex items-center gap-1">
            <div className="font-semibold">Itou Toshiro</div>
            <div> - </div>
            <div className="text-sm font-semibold text-slate-300">12 Hour ago</div>
          </div>
          <div className="space-x-1">
            <Chip size="sm" className="text-xs text-white bg-success font-roboto font-bold">Publish</Chip>
            <Chip size="sm" color="primary" className="text-xs font-roboto font-bold">Publish</Chip>
            <Chip size="sm" color="secondary" className="text-xs font-roboto font-bold">Dart</Chip>
            <Chip size="sm" className="text-xs text-white bg-danger font-roboto font-bold">Trash</Chip>
          </div>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly size="sm" className="bg-transparent">
              <Ellipsis />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {/* <DropdownItem key="new">New file</DropdownItem> */}
            {/* <DropdownItem key="copy">Copy link</DropdownItem> */}
            {/* <DropdownItem key="edit">Edit file</DropdownItem> */}
            {/* <DropdownItem key="delete" className="text-danger" color="danger"> */}
            {/*   Delete file */}
            {/* </DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="mt-2">
        <h1 className="text-2xl font-bold text-slate-300">Integrating my note app with Claudes MCP</h1>
        {/* <Divider className="mt-2 bg-dark-gray-1" /> */}
        <div className="flex items-start gap-6 mt-4">
          <div className="flex-1">
            <p className="mt-2.5 text-slate-400 font-medium text-sm line-clamp-5">
              The desktop version of my note-taking app is built with React and Electron.
              Previously, I managed to animate the insertion and removal of specific items of a TanStack Virtual list using motion.
              However, that approach would always trigger animations whenever the note list content changed, including when switching notebooks from the sidebar. Ideally, the animation should be triggered only when the data itself changes.
              Ive finally got it to work, as demonstrated below,In React Native, there is an API called configureNext(), which schedules an animation to happen on the next layout.

              I guess my app could take a similar approach to conditionally trigger animations in the note list. So, the rendering flow would looks something like this:
            </p>
          </div>
          <div className="flex-shrink w-1/3">
            <div className="w-full h-40 relative rounded-xl">
              <Image src={'/images/banner-home-page.jpg'} className=" rounded-xl absolute object-cover" fill alt="blog-1" />
            </div>
          </div>
        </div>
        <div className="mt-4 space-x-2">
          <div className="inline-flex gap-0.5 items-center bg-dark-gray-1 px-2 py-1 rounded-lg text-slate-300">
            <ArrowBigUp size={18} />
            <div className="text-sm font-bold">12.9K</div>
            <ArrowBigDown size={18} />
          </div>
          <div className="inline-flex gap-0.5 items-center bg-dark-gray-1 px-2 py-1 rounded-lg text-slate-300">
            <MessageCircleMore size={18} />
            <div className="text-sm font-bold">12.9K</div>
          </div>
          <div className="inline-flex gap-0.5 items-center bg-dark-gray-1 px-2 py-1 rounded-lg text-slate-300">
            <Share2 size={18} />
            <div className="text-sm font-bold">Share</div>
          </div>
          <div className="inline-flex gap-0.5 items-center bg-success px-2 py-1 rounded-lg text-slate-100">
            <PartyPopper size={18} />
          </div>
        </div>
      </div>
    </div >
  )
}

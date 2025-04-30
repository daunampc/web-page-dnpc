'use client'
import {
  Home,
  FileText,
  PlusCircle,
  Tag,
  Folder,
  Image,
  MessageCircle,
  Users,
  Settings,

} from "lucide-react"
import { Accordion, AccordionItem } from "@heroui/react";
import Link from "next/link";
export default function SideBar() {
  return (
    <Accordion
      selectionMode="multiple"        // cho phép mở nhiều dropdown cùng lúc
      isCompact                       // hiển thị gọn hơn
      className="space-y-2"
    >
      {/* Dashboard (không có submenu, vẫn dùng AccordionItem để có animation) */}
      <AccordionItem
        key="dashboard"
        title="Dashboard"
        startContent={<Home size={18} />}
      >
        <Link
          href="/admin/dashboard"
          className="block px-3 py-2 hover:bg-gray-700 rounded transition"
        >
          Go to Dashboard
        </Link>
      </AccordionItem>

      {/* Posts */}
      <AccordionItem
        key="posts"
        title="Posts"
        startContent={<FileText size={18} />}
        motionProps={{
          // tuỳ chỉnh animation nếu muốn (dựa theo Framer Motion)
          transition: { type: "spring", stiffness: 300, damping: 30 },
          variants: {
            enter: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
          },
        }}
      >
        <ul className="mt-1 space-y-1">
          <li>
            <Link
              href="/admin/posts"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              All Posts
            </Link>
          </li>
          <li>
            <Link
              href="/admin/posts/new"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              <PlusCircle className="inline mr-2" size={16} />
              Add New
            </Link>
          </li>
          <li>
            <Link
              href="/admin/posts/categories"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              <Tag className="inline mr-2" size={16} />
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/admin/posts/tags"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              <Tag className="inline mr-2" size={16} />
              Tags
            </Link>
          </li>
        </ul>
      </AccordionItem>

      {/* Pages */}
      <AccordionItem
        key="pages"
        title="Pages"
        startContent={<Folder size={18} />}
      >
        <ul className="mt-1 space-y-1">
          <li>
            <Link
              href="/admin/pages"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              All Pages
            </Link>
          </li>
          <li>
            <Link
              href="/admin/pages/new"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              <PlusCircle className="inline mr-2" size={16} />
              Add New
            </Link>
          </li>
        </ul>
      </AccordionItem>

      {/* Media */}
      <AccordionItem
        key="media"
        title="Media"
        startContent={<Image size={18} />}
      >
        <ul className="mt-1 space-y-1">
          <li>
            <Link
              href="/admin/media"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              Library
            </Link>
          </li>
          <li>
            <Link
              href="/admin/media/new"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              <PlusCircle className="inline mr-2" size={16} />
              Add New
            </Link>
          </li>
        </ul>
      </AccordionItem>

      {/* Comments & Users (không có submenus) */}
      <AccordionItem
        key="comments"
        title="Comments"
        startContent={<MessageCircle size={18} />}
      >
        <Link
          href="/admin/comments"
          className="block px-3 py-2 hover:bg-gray-700 rounded transition"
        >
          Manage Comments
        </Link>
      </AccordionItem>
      <AccordionItem
        key="users"
        title="Users"
        startContent={<Users size={18} />}
      >
        <Link
          href="/admin/users"
          className="block px-3 py-2 hover:bg-gray-700 rounded transition"
        >
          Manage Users
        </Link>
      </AccordionItem>

      {/* Settings */}
      <AccordionItem
        key="settings"
        title="Settings"
        startContent={<Settings size={18} />}
      >
        <ul className="mt-1 space-y-1">
          <li>
            <Link
              href="/admin/settings/general"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              General
            </Link>
          </li>
          <li>
            <Link
              href="/admin/settings/reading"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              Reading
            </Link>
          </li>
          <li>
            <Link
              href="/admin/settings/discussion"
              className="block px-3 py-2 hover:bg-gray-700 rounded transition"
            >
              Discussion
            </Link>
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  )
}

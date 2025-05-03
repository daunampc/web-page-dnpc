// menu.ts
import { MenuItem } from "@/interface/post";
import {
  LayoutDashboard,
  FileText,
  PlusSquare,
  Tags,
  Tag,
  MessageCircle,
  ImageIcon,
  Users,
  BarChart2,
  Settings,
} from "lucide-react";

export const blogMenu: MenuItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "posts",
    title: "Posts",
    icon: FileText,
    children: [
      {
        id: "all-posts",
        title: "All Posts",
        href: "/admin/posts",
        icon: FileText,
      },
      {
        id: "add-post",
        title: "Add New",
        href: "/admin/posts/new",
        icon: PlusSquare,
      },
      {
        id: "categories",
        title: "Categories",
        href: "/admin/posts/categories",
        icon: Tags,
      },
      {
        id: "tags",
        title: "Tags",
        href: "/admin/posts/tags",
        icon: Tag,
      },
    ],
  },
  {
    id: "comments",
    title: "Comments",
    href: "/admin/comments",
    icon: MessageCircle,
  },
  {
    id: "media",
    title: "Media",
    href: "/admin/media",
    icon: ImageIcon,
  },
  {
    id: "users",
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    id: "analytics",
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart2,
  },
  {
    id: "settings",
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];


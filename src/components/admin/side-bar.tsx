"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { blogMenu } from "@/data/menu";
import { usePathname } from "next/navigation";
import { Avatar } from "@heroui/react";

export default function SideBar() {
  const patname = usePathname();
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
        <div>
          <div className="text-sm font-semibold">Next Starter</div>
          <div className="text-xs text-gray-400">Acme Inc</div>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {blogMenu.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx}>
              <Link
                href={item.href || "#"}
                className={`flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-800 ${
                  patname === item.href && "bg-gray-800"
                }`}
              >
                <div className="flex items-center">
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="text-sm font-semibold">{item.title}</span>
                </div>
                {item.children && (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </Link>
              {item.children && (
                <div className="px-6">
                  {item.children.map((item_children, idx_children) => {
                    return (
                      <Link
                        key={idx_children}
                        href={item_children.href || "#"}
                        className={`flex items-center px-3 py-2 rounded-lg hover:bg-gray-800 `}
                      >
                        <span className="text-sm font-semibold">
                          {item_children.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User profile */}
      <div className="flex items-center px-4 py-4 border-t border-gray-800 mt-auto">
        <Avatar
          src="/avatar.jpg"
          alt="User avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 ml-3">
          <div className="text-sm font-medium">Đậu Nam PC</div>
          <div className="text-xs text-gray-400">daunampc@gmail.com</div>
        </div>
        <ChevronUp className="w-5 h-5 text-gray-400" />
      </div>
    </>
  );
}

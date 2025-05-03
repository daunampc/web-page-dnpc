"use client";
import './styles.scss'

import React from "react";
import {
  Text, Bold, Italic, Strikethrough,
  Code, Link2, ImageIcon,
  List, ListOrdered, Quote,
  AlignLeft, AlignCenter, AlignRight, Undo, Redo,
  Minus,
  Heading6,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading,
  Youtube
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { Button, Tooltip } from '@heroui/react';

type Props = { editor: Editor | null };

export default function EditorTopbar({ editor }: Props) {
  const [height, setHeight] = React.useState(480)
  const [width, setWidth] = React.useState(640)
  if (!editor) return null;

  const btn = (onClick: () => void, Icon: React.ComponentType<any>, active?: boolean) => (
    <Tooltip content={Icon.displayName}>
      <Button
        isIconOnly
        size='sm'
        onPress={onClick}
        className={`text-center bg-none bg-transparent rounded hover:bg-gray-700 transition ${active ? "bg-gray-700" : ""
          }`}
      >
        <Icon className="w-5 h-5 text-gray-200" />
      </Button>
    </Tooltip>
  );

  return (
    <div className="flex flex-nowrap whitespace-nowrap overflow-y-scroll items-center bg-gray-900 p-2 space-x-1 border-b border-gray-800 sticky w-full z-10 from-neutral-500 font-roboto font-semibold">
      {/* Style Dropdown */}
      <div className="relative group">
        <button className="flex items-center p-1 rounded hover:bg-gray-700 transition">
          <Text className="w-5 h-5 text-gray-200 mr-1" />
          <span className="text-sm text-gray-200">Paragraph</span>
        </button>
        {/* TODO: thêm dropdown nếu cần */}
      </div>

      {/* Font Family */}
      <button className="flex items-center p-1 rounded hover:bg-gray-700 transition text-sm text-gray-200">
        Inter
      </button>

      {/* Font Size */}
      <button className="flex items-center p-1 rounded hover:bg-gray-700 transition text-sm text-gray-200">
        Medium
      </button>

      <div className="h-6 border-l border-gray-700 mx-1" />

      {/* Basic formatting */}
      {btn(() => editor.chain().focus().toggleBold().run(), Bold, editor.isActive("bold"))}
      {btn(() => editor.chain().focus().toggleItalic().run(), Italic, editor.isActive("italic"))}
      {btn(() => editor.chain().focus().toggleStrike().run(), Strikethrough, editor.isActive("strike"))}
      {btn(() => editor.chain().focus().toggleCode().run(), Code, editor.isActive("code"))}
      {btn(() => {
        const url = prompt("Link URL");
        if (url) editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
      },
        Link2,
        editor.isActive("link")
      )}
      {btn(() => {
        const url = prompt("Link Youtube");
        if (url) editor.commands.setYoutubeVideo({ width: width, height: height, src: url });
      },
        Youtube,
        editor.isActive("youtube")
      )}
      {btn(() => {
        const url = prompt("Image URL");
        if (url) editor.chain().focus().setImage({ src: url }).run();
      },
        ImageIcon
      )}

      <div className="h-6 border-l border-gray-700 mx-1" />

      {/* Headings H1–H6 */}
      {([1, 2, 3, 4, 5, 6] as const).map(level =>

        <div key={level}>
          {
            btn(
              () => editor.chain().focus().toggleHeading({ level }).run(),
              level === 1 ? Heading1 : level === 2 ? Heading2 : level === 3 ? Heading3 : level === 4 ? Heading4 : level === 5 ? Heading5 : level === 6 ? Heading6 : Heading,
              editor.isActive("heading", { level })
            )

          }
        </div>
      )}

      <div className="h-6 border-l border-gray-700 mx-1" />

      {/* Lists & blockquote */}
      {btn(() => editor.chain().focus().toggleBulletList().run(), List, editor.isActive("bulletList"))}
      {btn(() => editor.chain().focus().toggleOrderedList().run(), ListOrdered, editor.isActive("orderedList"))}
      {btn(() => editor.chain().focus().toggleBlockquote().run(), Quote, editor.isActive("blockquote"))}

      <div className="h-6 border-l border-gray-700 mx-1" />

      {btn(() => editor.chain().focus().setHorizontalRule().run(), Minus, editor.isActive("horizontalRule"))}
      <div className="h-6 border-l border-gray-700 mx-1" />
      {/* Text align */}
      {btn(() => editor.chain().focus().setTextAlign("left").run(), AlignLeft, editor.isActive({ textAlign: "left" }))}
      {btn(() => editor.chain().focus().setTextAlign("center").run(), AlignCenter, editor.isActive({ textAlign: "center" }))}
      {btn(() => editor.chain().focus().setTextAlign("right").run(), AlignRight, editor.isActive({ textAlign: "right" }))}

      <div className="h-6 border-l border-gray-700 mx-1" />

      {/* Undo/Redo */}
      {btn(() => editor.chain().focus().undo().run(), Undo)}
      {btn(() => editor.chain().focus().redo().run(), Redo)}

      <div className="ml-auto text-xs text-gray-400">
        {editor.storage.characterCount.words()} words · {editor.storage.characterCount.characters()} chars
      </div>
    </div>
  );
}


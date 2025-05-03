"use client";
import './styles.scss'

import React from "react";
import {
  Bold, Italic, Strikethrough,
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
  Youtube,
  Table,
  Grid2x2Plus,
  ChartNoAxesGantt
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { Button, Tooltip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, SharedSelection } from '@heroui/react';

type Props = { editor: Editor | null };

export default function EditorTopbar({ editor }: Props) {
  const [height] = React.useState(480)
  const [width] = React.useState(640)
  const [selectedHeading, setSelectedHeading] = React.useState<string>("");

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

  const handleSelectionChangeHeading = (keys: SharedSelection) => {
    setSelectedHeading(keys.anchorKey || '1')

  }
  return (
    <div className="flex flex-nowrap whitespace-nowrap overflow-y-scroll items-center bg-dark-gray-1 p-2 space-x-1 border-b border-gray-800 sticky w-full z-10 from-neutral-500 font-roboto font-semibold rounded-sm">
      {/* Style Dropdown */}
      {
        <Dropdown>
          <DropdownTrigger>
            <Button className='bg-transparent' isIconOnly size='sm'>
              <Table />
            </Button>
          </DropdownTrigger>
          <DropdownMenu className='text-gray-300 max-h-[50vh] overflow-y-scroll'>
            <DropdownItem startContent={<Grid2x2Plus size={18} />} key={1} onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
              Insert table
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().addColumnBefore().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Add column before
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().addColumnAfter().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Add column after
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().addColumnBefore().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Add column before
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteColumn().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Delete column
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().addRowBefore().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Add row before
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().addRowAfter().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Add row after
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteRow().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Delete row
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Delete table
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Merge cells
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Split cell
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Delete table
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Toggle header column
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Toggle header row
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Toggle header cell
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Set cell attribute
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Fix table
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Go to next cell
            </DropdownItem>
            <DropdownItem onClick={() => editor.chain().focus().deleteTable().run()} startContent={<ChartNoAxesGantt size={18} />} key={2}>
              Go to previous cell
            </DropdownItem>
          </DropdownMenu>

        </Dropdown>
      }
      <div className="h-6 border-l border-gray-700 mx-1" />

      {/* Basic formatting */}
      {btn(() => editor.chain().focus().toggleBold().run(), Bold, editor.isActive("bold"))}
      {btn(() => editor.chain().focus().toggleItalic().run(), Italic, editor.isActive("italic"))}
      {btn(() => editor.chain().focus().toggleStrike().run(), Strikethrough, editor.isActive("strike"))}
      {btn(() => editor.chain().focus().toggleCode().run(), Code, editor.isActive("code"))}
      {
        btn(() => {
          const url = prompt("Link URL");
          if (url) editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
        },
          Link2,
          editor.isActive("link")
        )
      }
      {
        btn(() => {
          const url = prompt("Link Youtube");
          if (url) editor.commands.setYoutubeVideo({ width: width, height: height, src: url });
        },
          Youtube,
          editor.isActive("youtube")
        )
      }
      {
        btn(() => {
          const url = prompt("Image URL");
          if (url) editor.chain().focus().setImage({ src: url }).run();
        },
          ImageIcon
        )
      }

      <div className="h-6 border-l border-gray-700 mx-1" />

      {/* Headings H1–H6 */}
      {
        <Dropdown size='sm'>
          <DropdownTrigger>
            <Button isIconOnly size='sm' className='bg-transparent'>
              {selectedHeading === "1" ? <Heading1 /> :
                selectedHeading === "2" ? <Heading2 /> :
                  selectedHeading === "3" ? <Heading3 /> :
                    selectedHeading === "4" ? <Heading4 /> :
                      selectedHeading === "5" ? <Heading5 /> :
                        selectedHeading === "6" ? <Heading6 /> :
                          <Heading />}
              {/* <Heading size={'18'} /> */}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            selectedKeys={selectedHeading}
            onSelectionChange={handleSelectionChangeHeading}
            aria-label="Dropdown menu Heading" selectionMode='single'>
            {
              ([1, 2, 3, 4, 5, 6] as const).map(level =>
                <DropdownItem endContent={
                  level === 1 ? <Heading1 /> :
                    level === 2 ? <Heading2 /> :
                      level === 3 ? <Heading3 /> :
                        level === 4 ? <Heading4 /> :
                          level === 5 ? <Heading5 /> :
                            level === 6 ? <Heading6 /> :
                              <Heading />}
                  onClick={() => editor.chain().focus().toggleHeading({ level }).run()} key={level}>
                  Heading {level}
                </DropdownItem>
              )
            }
          </DropdownMenu>
        </Dropdown>
      }

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
    </div >
  );
}


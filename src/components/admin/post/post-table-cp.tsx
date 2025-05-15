'use client'
import { ITablePostColumns } from "@/interface/admin/post";
import { Button, Chip, Image, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@heroui/react";
import { Copy, DeleteIcon, EditIcon, EyeIcon } from "lucide-react";

export const columns: ITablePostColumns[] = [
  { name: "ID", uid: "id" },
  { name: "Post ID", uid: "post_id" },
  { name: "Image", uid: "image" },
  { name: "Title", uid: "title" },
  { name: "User", uid: "user_id" },
  { name: "Tag", uid: "tag" },
  { name: "Category", uid: "category" },
  { name: "Updated At", uid: "updatedAt" },
  { name: "Published", uid: "published" },
  { name: "Actions", uid: "published" },

];

export default function PostTable() {
  return (
    <>
      <Table
        selectionMode="multiple"
        color="default"
        aria-label="Example table with custom cells"
        defaultSelectedKeys={["2", "3"]}
        className="mt-4" >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {Array(10).fill("item").map((_, idx) => {
            return (
              <TableRow key={idx}>
                {/* ID */}
                <TableCell className="w-12 text-center">1</TableCell>

                {/* Copy Button */}
                <TableCell className="w-10 text-center">
                  <Button isIconOnly size="sm" aria-label="Copy">
                    <Copy size={17} />
                  </Button>
                </TableCell>

                {/* Image */}
                <TableCell className="w-20 min-w-32 sm:w-32 sm:min-w-32">
                  <Image
                    src="/images/asuna-home-page.jpg"
                    alt="image-post"
                    width={96}
                    height={56}
                    className="object-cover rounded"
                  />
                </TableCell>

                {/* Title */}
                <TableCell className="w-64 min-w-40 font-semibold">
                  <p className="line-clamp-2">How I implemented TOTP-based 2FA for my Markdown note app,How I implemented TOTP-based 2FA for my Markdown note app</p>
                </TableCell>

                {/* Email */}
                <TableCell className="w-36 sm:w-40 text-sm text-gray-400 truncate">
                  @daunampc
                </TableCell>

                {/* Tags */}
                <TableCell className="w-48 min-w-40">
                  <div className="flex flex-wrap gap-1">
                    <Chip size="sm" className="font-semibold">Small</Chip>
                    <Chip size="sm" className="font-semibold">Medium</Chip>
                    <Chip size="sm" className="font-semibold">Large</Chip>
                  </div>
                </TableCell>

                {/* Published */}
                <TableCell className="w-24">
                  <Chip color="success" className="text-white" size="sm">
                    Published
                  </Chip>
                </TableCell>

                {/* View Count */}
                <TableCell className="w-32 font-semibold">
                  24/6/2025-10h32
                </TableCell>

                {/* Disable */}
                <TableCell className="w-24 ">
                  <Chip color="danger" size="sm" className="font-semibold">
                    Disable
                  </Chip>
                </TableCell>

                {/* Actions */}
                <TableCell className="w-32 text-center ">
                  <div className="flex items-center space-x-2">
                    <Tooltip content="View">
                      <span className="cursor-pointer"><EyeIcon size={18} /></span>
                    </Tooltip>
                    <Tooltip content="Edit">
                      <span className="cursor-pointer"><EditIcon size={18} /></span>
                    </Tooltip>
                    <Tooltip content="Delete">
                      <span className="cursor-pointer"><DeleteIcon size={18} /></span>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>

            )
          })}
        </TableBody>
      </Table>
      <div className="mt-5 flex justify-end">
        <Pagination total={10} showControls initialPage={1} loop />
      </div>
    </>
  )
}

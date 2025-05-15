'use client'
import { ITablePostColumns } from "@/interface/admin/post";
import { Button, Chip, Image, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Snippet } from "@heroui/react";
import { Clipboard, FileDown, FileX, Settings, Trash2 } from "lucide-react";
import { useState } from "react";
import ModalDelete from "../modal/modal-delete";
import ModalUploadFilePost from "../modal/modal-upload-file";
import { IPostData } from "@/interface/post";
import { isoToPostgresFormat } from "@/lib/utils/utils";
import { usePostDataAdmin } from "@/hooks/usePosts";
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
  { name: "Actions", uid: "actions" },

];
export const CopyDocumentIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M15.5 13.15h-2.17c-1.78 0-3.23-1.44-3.23-3.23V7.75c0-.41-.33-.75-.75-.75H6.18C3.87 7 2 8.5 2 11.18v6.64C2 20.5 3.87 22 6.18 22h5.89c2.31 0 4.18-1.5 4.18-4.18V13.9c0-.42-.34-.75-.75-.75Z"
        fill="currentColor"
        opacity={0.4}
      />
      <path
        d="M17.82 2H11.93C9.67 2 7.84 3.44 7.76 6.01c.06 0 .11-.01.17-.01h5.89C16.13 6 18 7.5 18 10.18V16.83c0 .06-.01.11-.01.16 2.23-.07 4.01-1.55 4.01-4.16V6.18C22 3.5 20.13 2 17.82 2Z"
        fill="currentColor"
      />
      <path
        d="M11.98 7.15c-.31-.31-.84-.1-.84.33v2.62c0 1.1.93 2 2.07 2 .71.01 1.7.01 2.55.01.43 0 .65-.5.35-.8-1.09-1.09-3.03-3.04-4.13-4.16Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const EditDocumentIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V8.52C21 5.06 18.93 3 15.48 3Z"
        fill="currentColor"
        opacity={0.4}
      />
      <path
        d="M21.02 2.98c-1.79-1.8-3.54-1.84-5.38 0L14.51 4.1c-.1.1-.13.24-.09.37.7 2.45 2.66 4.41 5.11 5.11.03.01.08.01.11.01.1 0 .2-.04.27-.11l1.11-1.12c.91-.91 1.36-1.78 1.36-2.67 0-.9-.45-1.79-1.36-2.71ZM17.86 10.42c-.27-.13-.53-.26-.77-.41-.2-.12-.4-.25-.59-.39-.16-.1-.34-.25-.52-.4-.02-.01-.08-.06-.16-.14-.31-.25-.64-.59-.95-.96-.02-.02-.08-.08-.13-.17-.1-.11-.25-.3-.38-.51-.11-.14-.24-.34-.36-.55-.15-.25-.28-.5-.4-.76-.13-.28-.23-.54-.32-.79L7.9 10.72c-.35.35-.69 1.01-.76 1.5l-.43 2.98c-.09.63.08 1.22.47 1.61.33.33.78.5 1.28.5.11 0 .22-.01.33-.02l2.97-.42c.49-.07 1.15-.4 1.5-.76l5.38-5.38c-.25-.08-.5-.19-.78-.31Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DeleteDocumentIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z"
        fill="currentColor"
      />
      <path
        d="M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z"
        fill="currentColor"
        opacity={0.399}
      />
      <path
        clipRule="evenodd"
        d="M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function PostTable(data_post_fetch: { data: IPostData | null }) {
  const [selectedPost, setSelectedPost] = useState<"all" | Set<string>>(new Set());
  const [modalDelete, setModalDelete] = useState<boolean>(false)
  const [pagePost, setPagePost] = useState<number>(1)
  const { data_post, isLoading } = usePostDataAdmin({ page: pagePost, limit: 10 }, { fallbackData: data_post_fetch.data })
  const onClose = () => {
    setModalDelete(false)
  }
  const onShowModalDelete = () => {
    setModalDelete(true)
  }

  const onActionPagePost = (page: number) => {
    setPagePost(page)
  }
  return (
    <>
      <ModalDelete isOpenModal={modalDelete} post_id="1" onCloseModal={onClose}>
        <p>Bạn có chắc chắn xoá bài viết này, bạn không thể khôi phục sau khi xoá. Hãy chắc chắn</p>
      </ModalDelete>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <div className="space-x-1.5">
            <Button isIconOnly size="sm" color="warning">
              <FileX size={20} className="text-slate-200" />
            </Button>
            <Button isIconOnly size="sm" color="secondary">
              <Clipboard size={20} />
            </Button>
            <Button isIconOnly size="sm" className="bg-danger-2">
              <Trash2 size={20} />
            </Button>
          </div>
          <div className="font-semibold text-sm">
            {selectedPost !== 'all' &&
              <>
                {selectedPost.size} Selected
              </>
            }
          </div>
        </div>
        <div className="space-x-1.5">
          <ModalUploadFilePost />
          <Button endContent={<FileDown size={20} />} color="secondary" radius="sm">
            Export
          </Button>
        </div>
      </div>
      {
        <Table
          selectionMode="multiple"
          color="default"
          aria-label="Example table with custom cells"
          selectedKeys={selectedPost}
          onSelectionChange={(keys) => setSelectedPost(keys as "all" | Set<string>)}
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
            {data_post && !isLoading ? data_post.data.map((it) => {
              return (
                <TableRow key={it.postId}>
                  {/* ID */}
                  <TableCell className="text-center">{it.id}</TableCell>

                  {/* Copy Button */}
                  <TableCell className="text-center">
                    {/* <Button isIconOnly size="sm" aria-label="Copy"> */}
                    {/*   <Copy size={17} /> */}
                    {/* </Button> */}
                    <Snippet size="sm" hideSymbol codeString={it.postId} classNames={{
                      pre: "hidden"
                    }}></Snippet>
                  </TableCell>

                  {/* Image */}
                  <TableCell className="w-20 min-w-32 sm:w-32 sm:min-w-32">
                    <Image
                      src={it.image}
                      alt="image-post"
                      width={96}
                      height={56}
                      className="object-cover rounded"
                    />
                  </TableCell>

                  {/* Title */}
                  <TableCell className="min-w-64 font-semibold">
                    <p className="line-clamp-2">{it.title}</p>
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
                  <TableCell className="w-32 font-semibold text-slate-400 text-sm">
                    {it.updatedAt ? isoToPostgresFormat(it.updatedAt) : "No update"}
                  </TableCell>

                  {/* Disable */}
                  <TableCell className="w-24 ">
                    <Chip color={it.published ? 'success' : 'danger'} size="sm" className="font-semibold">
                      {it.published ? 'Published' : 'Disable'}
                    </Chip>
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="w-32">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button isIconOnly variant="bordered">
                          <Settings size={20} />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
                        <DropdownItem
                          key="copy"
                          shortcut="⌘C"
                          startContent={<CopyDocumentIcon className={'text-xl text-default-500 pointer-events-none flex-shrink-0'} />}
                        >
                          Copy file
                        </DropdownItem>
                        <DropdownItem
                          key="edit"
                          shortcut="⌘⇧E"
                          startContent={<EditDocumentIcon className={'text-xl text-default-500 pointer-events-none flex-shrink-0'} />}
                        >
                          Edit file
                        </DropdownItem>
                        <DropdownItem
                          onClick={onShowModalDelete}
                          key="delete"
                          className="text-danger"
                          color="danger"
                          shortcut="⌘⇧D"
                          startContent={<DeleteDocumentIcon className={'text-xl  pointer-events-none flex-shrink-0 text-danger'} />}
                        >
                          Delete file
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </TableCell>
                </TableRow>
              )
            }) : <>
              {Array(10).fill('it').map((_, idx) => {
                return (
                  <TableRow key={idx}>
                    {/* ID */}
                    <TableCell className="text-center">
                      <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
                    </TableCell>

                    {/* Copy Button */}
                    <TableCell className="text-center">
                      <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto animate-pulse" />
                    </TableCell>

                    {/* Image */}
                    <TableCell className="w-20 min-w-32 sm:w-32 sm:min-w-32">
                      <div className="h-14 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
                    </TableCell>

                    {/* Title (2 lines) */}
                    <TableCell className="min-w-64 font-semibold space-y-1 py-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/2" />
                    </TableCell>

                    {/* Email */}
                    <TableCell className="w-36 sm:w-40 text-sm truncate">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-5/6" />
                    </TableCell>

                    {/* Tags */}
                    <TableCell className="w-48 min-w-40">
                      <div className="flex gap-1">
                        <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      </div>
                    </TableCell>

                    {/* Published */}
                    <TableCell className="w-24">
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
                    </TableCell>

                    {/* View Count */}
                    <TableCell className="w-32 font-semibold">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4 mx-auto" />
                    </TableCell>

                    {/* Disable */}
                    <TableCell className="w-24">
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="w-32">
                      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mx-auto" />
                    </TableCell>
                  </TableRow>

                )
              })}

            </>}
          </TableBody>
        </Table>

      }
      <div className="mt-5 flex justify-end">
        <Pagination onChange={onActionPagePost} total={10} showControls initialPage={1} loop />
      </div>
    </>
  )
}

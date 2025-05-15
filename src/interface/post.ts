import { Editor, JSONContent } from "@tiptap/core";

export interface MenuItem {
  /** duy nhất để dùng làm key */
  id: string;
  /** text hiển thị */
  title: string;
  /** đường dẫn khi click (nếu có) */
  href?: string;
  /** icon từ lucide-react */
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  /** sub-menu (nếu có) */
  children?: MenuItem[];
}
export interface EditorTopbarProps {
  editor: Editor | null;
}

export interface IUseTiptapEditor {
  initialContent?: string | JSONContent;
  is_edit: boolean
}

export interface IPostItem {
  id: number;
  postId: string;
  image: string;
  title: string;
  slug: string;
  description: string;
  content: JSON;
  published: boolean;
  user_id: string;
  createdAt: Date,
  updatedAt: Date,
  viewCount: number
}
export interface IPostData {
  data: IPostItem[],
  meta: {
    total: number;
    page: number;
    lastPage: number
    limit: number
  }
}

export interface IFetchPostDataHome {
  post_last_new: IPostItem[] | null,
  post_top_view: IPostItem[] | null,
  post_top: IPostItem[] | null,
}

export interface IUsePosts {
  page: number;
  query: string | null;
  meta: IPostDataShow
}

export interface IPostDataShow {
  type: 'last-new' | 'hot' | 'top-view' | 'search'
  limit: 4 | 8 | 12 | 16 | 20,
  data_post: IPostItem[] | null
  is_show_pagination?: boolean
}

export interface IGetPostData {
  limit: number
  page?: number;
  type?: ('last-new' | 'hot' | 'top-view')[]

}

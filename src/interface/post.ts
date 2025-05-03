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


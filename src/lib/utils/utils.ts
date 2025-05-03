import { blogMenu } from "@/data/menu"
import { MenuItem } from "@/interface/post";

export const findTitlePageByHref = (pathname: string): string => {
  let title_page: MenuItem | undefined | null = null
  title_page = blogMenu.find((i) => i.href === pathname);
  if (!title_page) {
    blogMenu.forEach(item => {
      if (item.children) {
        item.children.forEach(item2 => {
          if (item2.href === pathname) {
            return title_page = item2
          }
        })
      }
      return title_page
    })
  }
  if (title_page) {
    return title_page.title
  }
  return 'Không xác định'

}

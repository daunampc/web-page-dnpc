import { blogMenu } from "@/data/menu"
import { IGetPostData, MenuItem } from "@/interface/post";

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

export function buildInternalPostHomeApiUrl(params: IGetPostData): string {
  const queryParts: string[] = [];

  // Bắt buộc có limit
  queryParts.push(`limit=${params.limit}`);

  // Tùy chọn: page
  if (params.page !== undefined) {
    queryParts.push(`page=${params.page}`);
  }

  // Tùy chọn: type
  if (params.type && params.type.length > 0) {
    for (const t of params.type) {
      queryParts.push(`type=${t}`);
    }

    // Nếu muốn dạng `type=hot,top-view`:
    // queryParts.push(`type=${params.type.join(',')}`);
  }

  const queryString = queryParts.join('&');
  return `/posts/get/home-page?${queryString}`;
}

export function isoToPostgresFormat(isoString: Date): string {
  const date = new Date(isoString);
  const pad = (n: number) => n.toString().padStart(2, '0');

  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1);
  const day = pad(date.getUTCDate());
  const hour = pad(date.getUTCHours());
  const minute = pad(date.getUTCMinutes());
  const second = pad(date.getUTCSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}



import { IFetchPostDataHome, IGetPostData, IPostData, IPostItem, IUsePosts } from "@/interface/post";
import axiosinstance from "@/lib/axios";
import { buildInternalPostHomeApiUrl } from "@/lib/utils/utils";
import useSWR from 'swr'


const fetcher = (url: string) =>
  axiosinstance.get<IPostData>(url).then(res => res.data);

const fetcherPostByTitleAndId = (url: string) =>
  axiosinstance.get<IPostData>(url).then(res => res.data)

const fetcherPostDataHome = (url: string) => axiosinstance.get<IFetchPostDataHome>(url).then(res => res.data)

const fetcherPostDataAdmin = (url: string) => axiosinstance.get<IPostData>(url).then(res => res.data)
export const fetcherPostByID = (url: string) =>
  axiosinstance.get<IPostItem>(url).then(res => res.data);
export function usePosts(vkl: IUsePosts) {
  const { data, isLoading, error, mutate } = useSWR<IPostData>(`/posts/get?page=${vkl.page}&limit=${vkl.meta.limit}&type=${vkl.meta.type}`, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  })
  return { data_posts: data, error, isLoading, mutate }
}

export function usePostById(post_id?: string | null, slug?: string) {
  const { data, isLoading, error, mutate } = useSWR<IPostItem>(`/posts?post_id=${post_id}&slug=${slug}`, fetcherPostByID, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  })
  return { data: data, error, isLoading, mutate }
}

export function useListPostByTitleAndId(title: string, post_id?: string) {
  const { data, isLoading, error, mutate } = useSWR<IPostData>(`/posts/find?post_id=${post_id}&title=${title}`, fetcherPostByTitleAndId, {

  })
  return { data_posts: data, error, isLoading, mutate }
}

export function usePostDataHome(vkl: IGetPostData, options?: { fallbackData?: IFetchPostDataHome }) {
  const query = buildInternalPostHomeApiUrl(vkl)
  const { data, error, isLoading, mutate } = useSWR<IFetchPostDataHome>(query, fetcherPostDataHome, {
    fallbackData: options?.fallbackData,
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false,    // ✂️ TẮT luôn re-fetch khi mount
    dedupingInterval: 600_000,

  })
  return { data_post: data, error, isLoading, mutate }
}

export function usePostDataAdmin(vkl: { page: number; limit: number }, options?: { fallbackData?: IPostData | null }) {
  const { data, error, isLoading, mutate } = useSWR<IPostData | null>(`/posts/get?page=${vkl.page}&limit=${vkl.limit}`, fetcherPostDataAdmin, {
    fallbackData: vkl.page === 1 ? options?.fallbackData : undefined,
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false,    // ✂️ TẮT luôn re-fetch khi mount
    dedupingInterval: 600_000,

  })
  return { data_post: data, error, isLoading, mutate }
}

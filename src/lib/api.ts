import { ICommentDataFetch } from "@/interface/comment"
import axiosinstance from "./axios"
import { IPostItem, IGetPostData, IFetchPostDataHome } from "@/interface/post"
import { buildInternalPostHomeApiUrl } from "./utils/utils"

export const getAllPost = async () => {
  try {
    const res = await axiosinstance.get('/posts/all')
    if (res.data) {
      return res.data
    }
    return null
  } catch {
    return null
  }
}
export const getCommentPostById = async (post_id: string | null, page: number): Promise<ICommentDataFetch | null> => {
  try {
    const res = await axiosinstance.get(`/comments/get?post_id=${post_id}&page=${page}`)
    if (res.data) {
      return res.data
    }
    return null
  } catch {
    return null
  }
}

export const getPostByIdAndSlug = async (slug: string, post_id?: string): Promise<IPostItem | null> => {
  try {
    const res = await axiosinstance.get(`/posts?post_id=${post_id}&slug=${slug}`)
    if (res.data) {
      return res.data
    }
    return null
  } catch {
    return null

  }
}
export const getPostData = async (vkl: IGetPostData): Promise<IFetchPostDataHome | null> => {
  try {
    //const query = vkl.page ? `/posts/get?page=${vkl.page}&limit=${vkl.limit}` : `/posts/get?limit=${vkl.limit}`
    const query = buildInternalPostHomeApiUrl(vkl)
    const res = await axiosinstance.get(query)
    if (res.data) {
      return res.data
    }
    return null
  } catch {
    return null

  }
}

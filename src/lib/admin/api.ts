import { IPostData } from "@/interface/post"
import axiosinstance from "../axios"

export const getAllPostAdmin = async (): Promise<IPostData | null> => {
  try {
    const res = await axiosinstance.get('/posts/admin/get')
    if (res.data) {
      return res.data
    }
    return null
  } catch {
    return null
  }
}

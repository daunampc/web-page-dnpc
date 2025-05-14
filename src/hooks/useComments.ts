import { ICommentDataFetch } from '@/interface/comment';
import axiosinstance from '@/lib/axios';
import useSWR from 'swr';

const fetcher = (url: string) =>
  axiosinstance.get<ICommentDataFetch>(url).then(res => res.data);
export function useComments(postId: string, page?: number,
  options?: { fallbackData?: ICommentDataFetch }) {
  const { data, error, mutate } = useSWR<ICommentDataFetch>(
    `/comments/get?post_id=${postId}`,
    fetcher, {
    fallbackData: options?.fallbackData,
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false,    // ✂️ TẮT luôn re-fetch khi mount
    dedupingInterval: 600_000,
  }
  );
  return { dataComment: data, error, mutate };
}





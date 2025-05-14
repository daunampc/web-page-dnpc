import { ICommentDataFetch } from '@/interface/comment';
import axiosinstance from '@/lib/axios';
import useSWR from 'swr';

const fetcher = (url: string) =>
  axiosinstance.get<ICommentDataFetch>(url).then(res => res.data);
export function useComments(postId: string, page?: number,
  options?: { fallbackData?: ICommentDataFetch }) {
  const { data, error, mutate, isValidating } = useSWR<ICommentDataFetch>(
    `/comments/get?post_id=${postId}&page=${page}`,
    fetcher, {
    fallbackData: page === 1 ? options?.fallbackData : undefined,
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false,
    dedupingInterval: 600_000,
  }
  );
  return { dataComment: data, error, mutate, isLoading: isValidating };
}





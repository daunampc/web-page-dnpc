import { IUser } from "@/interface/user";
import axiosinstance from "@/lib/axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axiosinstance.get<IUser>(url).then(res => res.data);
export function useAuthSWR(user_id: string) {
  const { data, error, mutate } = useSWR<IUser>(
    `/users/info?user_id=${user_id}`,
    fetcher,
  );
  return { data_user: data, error, mutate };
}

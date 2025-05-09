import { IUser } from "./user";

export interface ICommentData {
  id: string;
  user: IUser;
  date: string;
  content: string;
  likes: number;
  replies?: ICommentData[];
}

export interface IShowReplyComment {
  id_comment: string
  is_show: boolean
  onActionReply: (id: string) => void
}

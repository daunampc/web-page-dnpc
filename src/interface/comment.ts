import { IUser } from "./user";

export interface ICommentData {
  post_id: string;
}

export interface IShowReplyComment {
  id_comment: string
  id_comment_show: string;
  is_show: boolean
  onActionReply: (id: string) => void
}

export interface ICommentItem {
  id: string;
  commentId: string;
  postId: string;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  like: number;
  replies?: ICommentItem[];
  _count?: {
    replies: number;
  }
}

export interface ICommentForm {
  user: IUser
  is_reply?: boolean;
  post_id: string;
  comment_id?: string
  onLoading?: (is_loading: boolean) => void
}


export interface ICommentDataFetch {
  data: ICommentItem[]
  meta: {
    lastPage: number;
    limit: number;
    total: number;
  }
}

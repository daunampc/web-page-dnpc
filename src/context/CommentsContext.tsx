import { ICommentDataFetch } from "@/interface/comment";
import { createContext, useContext } from "react";

interface CommentsContextValue {
  dataComment: ICommentDataFetch | undefined;
  mutate: (...args: any[]) => any;
}

export const CommentsContext = createContext<CommentsContextValue | undefined>(undefined);

export const useCommentsContext = (): CommentsContextValue => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error('useCommentsContext must be used within CommentsProvider');
  }
  return context;
};

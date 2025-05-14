import { CommentsContext } from "@/context/CommentsContext";
import { useComments } from "@/hooks/useComments";
import { ReactNode } from "react";

interface CommentsProviderProps {
  postId: string;
  children: ReactNode;
}

export const CommentsProvider = ({ postId, children }: CommentsProviderProps) => {
  const { dataComment, mutate } = useComments(postId);
  return (
    <CommentsContext.Provider value={{ dataComment, mutate }}>
      {children}
    </CommentsContext.Provider>
  );
};

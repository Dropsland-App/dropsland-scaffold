import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toggleLike, getComments, addComment } from "@/services/posts";
import { toast } from "sonner";

export function usePostInteractions(postId: string) {
  const queryClient = useQueryClient();

  // --- Likes ---
  const { mutate: likePost } = useMutation({
    mutationFn: ({ userPublicKey }: { userPublicKey: string }) =>
      toggleLike(postId, userPublicKey),
    onMutate: async () => {
      // Optimistic update could go here if we were tracking global like counts in cache
      // For now, we rely on local component state for immediate feedback
    },
    onError: (error) => {
      console.error("Like failed:", error);
      toast.error("Failed to update like");
    },
    onSuccess: () => {
      // Invalidate post queries if needed
      // queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
  });

  // --- Comments ---
  const {
    data: comments = [],
    isLoading: isLoadingComments,
    error: commentsError,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
    enabled: !!postId, // Only fetch if postId is present
  });

  const { mutate: submitComment, isPending: isSubmittingComment } = useMutation(
    {
      mutationFn: ({
        userPublicKey,
        content,
      }: {
        userPublicKey: string;
        content: string;
      }) => addComment(postId, userPublicKey, content),
      onSuccess: () => {
        toast.success("Comment added");
        queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      },
      onError: (error) => {
        console.error("Comment failed:", error);
        toast.error("Failed to post comment");
      },
    },
  );

  return {
    likePost,
    comments,
    isLoadingComments,
    commentsError,
    submitComment,
    isSubmittingComment,
  };
}

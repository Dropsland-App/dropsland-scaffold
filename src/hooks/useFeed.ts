import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchFeed, createPost } from "../services/posts";
import { toast } from "sonner";

export function useFeed() {
  const queryClient = useQueryClient();

  const feedQuery = useQuery({
    queryKey: ["feed"],
    queryFn: fetchFeed,
  });

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["feed"] });
      toast.success("Post published!");
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to publish post");
    },
  });

  return {
    posts: feedQuery.data || [],
    isLoading: feedQuery.isLoading,
    error: feedQuery.error,
    createPost: createPostMutation.mutateAsync,
    isCreating: createPostMutation.isPending,
  };
}

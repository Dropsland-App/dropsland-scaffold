import { useQuery } from "@tanstack/react-query";
import { fetchActivityFeed } from "@/services/activity";

export function useActivityFeed(limit = 20) {
  return useQuery({
    queryKey: ["activityFeed", limit],
    queryFn: () => fetchActivityFeed(limit),
  });
}

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { listDistributedTokens } from "@/services/artistTokens";
import { useNavigate } from "react-router-dom";

export const TrendingArtists: React.FC = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["trendingArtists"],
    queryFn: () => listDistributedTokens(10, 0),
    staleTime: 60000,
  });

  if (isLoading) {
    return (
      <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 min-w-max">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-20">
              <div className="h-16 w-16 rounded-full bg-muted animate-pulse" />
              <div className="h-3 w-16 bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const tokens = data?.tokens || [];

  if (tokens.length === 0) return null;

  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-4 min-w-max">
        {tokens.map((token) => (
          <div
            key={token.id}
            className="flex flex-col items-center gap-2 min-w-20 cursor-pointer group"
            onClick={() => void navigate(`/explore?token=${token.token_code}`)}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-pink-500 to-amber-500 opacity-75 group-hover:opacity-100 transition-opacity blur-[2px]" />
              <Avatar className="h-16 w-16 border-2 border-background relative">
                <AvatarImage
                  src={
                    token.image_url ||
                    `https://api.dicebear.com/7.x/avataaars/svg?seed=${token.artist_name}`
                  }
                  className="object-cover"
                />
                <AvatarFallback>{token.artist_name?.[0] || "?"}</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-foreground truncate max-w-20">
                {token.artist_name || "Unknown"}
              </p>
              <p className="text-[10px] text-muted-foreground">
                ${token.token_code}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

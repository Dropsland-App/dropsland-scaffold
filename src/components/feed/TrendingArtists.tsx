import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { listDistributedTokens } from "@/services/artistTokens";
import { useNavigate } from "react-router-dom";

export const TrendingArtists: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["trendingArtists"],
    queryFn: () => listDistributedTokens(10, 0),
  });

  const tokens = data?.tokens || [];
  if (tokens.length === 0) return null;

  return (
    <div className="w-full overflow-x-auto pb-4 pt-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex gap-5 min-w-max">
        {tokens.map((token) => (
          <div
            key={token.id}
            className="flex flex-col items-center gap-3 cursor-pointer group"
            onClick={() => void navigate(`/explore?token=${token.token_code}`)}
          >
            {/* Avatar Container with Gradient Border */}
            <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-primary/80 to-purple-500/50 group-hover:from-primary group-hover:to-purple-400 transition-all duration-300">
              <Avatar className="h-16 w-16 border-2 border-black">
                <AvatarImage src={token.image_url} className="object-cover" />
                <AvatarFallback>{token.artist_name?.[0]}</AvatarFallback>
              </Avatar>

              {/* Optional: Online/Live Indicator */}
              <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-emerald-500 border-2 border-black" />
            </div>

            <div className="text-center space-y-0.5">
              <p className="text-xs font-bold text-white max-w-[80px] truncate group-hover:text-primary transition-colors">
                {token.artist_name}
              </p>
              <p className="text-[10px] font-mono text-muted-foreground">
                ${token.token_code}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

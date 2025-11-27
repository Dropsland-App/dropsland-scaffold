import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const trending = [
  {
    id: 1,
    name: "DJ Solar",
    handle: "djsolar",
    listeners: "12k",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Solar",
  },
  {
    id: 2,
    name: "Neon Pulse",
    handle: "neonpulse",
    listeners: "8.5k",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
  },
  {
    id: 3,
    name: "Bass Mint",
    handle: "bassmint",
    listeners: "22k",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bass",
  },
  {
    id: 4,
    name: "Velvet",
    handle: "velvet_under",
    listeners: "5k",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Velvet",
  },
  {
    id: 5,
    name: "Echo",
    handle: "echoloc",
    listeners: "41k",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Echo",
  },
];

export const TrendingArtists: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-4 min-w-max">
        {trending.map((artist) => (
          <div
            key={artist.id}
            className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 to-amber-500 opacity-75 group-hover:opacity-100 transition-opacity blur-[2px]" />
              <Avatar className="h-16 w-16 border-2 border-background relative">
                <AvatarImage src={artist.image} />
                <AvatarFallback>{artist.name[0]}</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-foreground truncate max-w-[80px]">
                {artist.name}
              </p>
              <p className="text-[10px] text-muted-foreground">
                {artist.listeners} fans
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

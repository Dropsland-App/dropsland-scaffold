import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Layers,
  Music,
  Users,
  ArrowUpRight,
  Activity as ActivityIcon,
  Filter,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ActivityType = "all" | "tokens" | "nfts" | "music" | "community";

type ActivityItem = {
  id: string;
  type:
    | "token_purchase"
    | "nft_mint"
    | "music_upload"
    | "community_interaction";
  title: string;
  description: string;
  timestamp: string;
  dateGroup: "Today" | "Yesterday" | "This Week";
  amount?: string; // Optional: for financial context
  txHash?: string;
};

const activityFilters: Array<{ id: ActivityType; label: string }> = [
  { id: "all", label: "All Events" },
  { id: "tokens", label: "Transfers" },
  { id: "nfts", label: "Mints" },
  { id: "music", label: "Uploads" },
];

// Mock Data with date grouping
const activities: ActivityItem[] = [
  {
    id: "1",
    type: "token_purchase",
    title: "Bought $SOLAR",
    description: "Swapped 500 XLM for 500 $SOLAR",
    timestamp: "2 mins ago",
    dateGroup: "Today",
    amount: "-500 XLM",
  },
  {
    id: "2",
    type: "nft_mint",
    title: "Minted Genesis Pass",
    description: "Claimed exclusive reward from DJ PABLO",
    timestamp: "2 hours ago",
    dateGroup: "Today",
    amount: "+1 NFT",
  },
  {
    id: "3",
    type: "music_upload",
    title: "New Drop: 'Neon Nights'",
    description: "DJ PABLO uploaded a new track",
    timestamp: "5 hours ago",
    dateGroup: "Today",
  },
  {
    id: "4",
    type: "community_interaction",
    title: "DAO Proposal",
    description: "Voted on 'Summer Tour Locations'",
    timestamp: "1 day ago",
    dateGroup: "Yesterday",
  },
  {
    id: "5",
    type: "token_purchase",
    title: "Bought $DUCK",
    description: "Joined the flock",
    timestamp: "2 days ago",
    dateGroup: "This Week",
    amount: "-120 XLM",
  },
];

const getActivityIcon = (type: ActivityItem["type"]) => {
  switch (type) {
    case "token_purchase":
      return {
        icon: ShoppingCart,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/20",
      };
    case "nft_mint":
      return {
        icon: Layers,
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
      };
    case "music_upload":
      return {
        icon: Music,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20",
      };
    case "community_interaction":
      return {
        icon: Users,
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20",
      };
  }
};

const Activity: React.FC = () => {
  const [filter, setFilter] = useState<ActivityType>("all");

  const filteredActivities = activities.filter((activity) => {
    if (filter === "all") return true;
    if (filter === "tokens") return activity.type === "token_purchase";
    if (filter === "nfts") return activity.type === "nft_mint";
    if (filter === "music") return activity.type === "music_upload";
    return true;
  });

  // Group by Date for the UI
  const groupedActivities = filteredActivities.reduce(
    (groups, activity) => {
      const group = groups[activity.dateGroup] || [];
      group.push(activity);
      groups[activity.dateGroup] = group;
      return groups;
    },
    {} as Record<string, ActivityItem[]>,
  );

  return (
    <div className="container max-w-4xl mx-auto px-4 py-10 pb-24 space-y-8">
      {/* 1. Header & Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary bg-primary/5 mb-2"
          >
            <ActivityIcon className="w-3 h-3 mr-2" /> Live Feed
          </Badge>
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Activity
          </h1>
          <p className="text-muted-foreground max-w-md">
            Your on-chain history. Purchases, mints, and community moments
            captured in real-time.
          </p>
        </div>
      </div>

      {/* 2. Filter Bar (Floating Glass) */}
      <div className="sticky top-24 z-10">
        <div className="inline-flex p-1 rounded-xl bg-[#0b1020]/80 backdrop-blur-xl border border-white/10 shadow-xl">
          {activityFilters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
                filter === tab.id
                  ? "bg-white/10 text-white shadow-inner"
                  : "text-muted-foreground hover:text-white hover:bg-white/5",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. The Feed */}
      <div className="space-y-8">
        {Object.entries(groupedActivities).length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5">
            <Filter className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
            <p className="text-muted-foreground font-medium">
              No activity found.
            </p>
          </div>
        ) : (
          Object.entries(groupedActivities).map(([dateGroup, items]) => (
            <div
              key={dateGroup}
              className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground pl-2">
                {dateGroup}
              </h3>

              <div className="rounded-2xl border border-white/5 bg-[#111827]/40 overflow-hidden backdrop-blur-sm">
                {items.map((activity, index) => {
                  const style = getActivityIcon(activity.type);
                  const Icon = style.icon;

                  return (
                    <div
                      key={activity.id}
                      className={cn(
                        "group flex items-center gap-4 p-4 hover:bg-white/5 transition-all duration-200 cursor-default",
                        index !== items.length - 1 && "border-b border-white/5",
                      )}
                    >
                      {/* Icon */}
                      <div
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-lg",
                          style.bg,
                          style.color,
                          style.border,
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-bold text-white truncate">
                            {activity.title}
                          </p>
                          {/* Hover Action */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                            <span className="text-[10px] text-muted-foreground hidden sm:inline-block">
                              View Tx
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 rounded-full hover:bg-white/10"
                            >
                              <ArrowUpRight className="h-3 w-3 text-white" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <p className="truncate">{activity.description}</p>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {activity.timestamp}
                          </span>
                        </div>
                      </div>

                      {/* Amount / Value (Right Side) */}
                      {activity.amount && (
                        <div className="text-right shrink-0">
                          <Badge
                            variant="secondary"
                            className="bg-white/5 border-white/10 font-mono font-normal"
                          >
                            {activity.amount}
                          </Badge>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Activity;

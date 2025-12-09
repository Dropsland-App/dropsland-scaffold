import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Layers,
  Music,
  ArrowUpRight,
  Activity as ActivityIcon,
  Filter,
  Clock,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useActivityFeed } from "@/hooks/useActivityFeed";
import type { ActivityItem } from "@/services/activity";
import { formatDistanceToNow, isToday, isYesterday, parseISO } from "date-fns";

type ActivityType = "all" | "tokens" | "nfts" | "music";

const activityFilters: Array<{ id: ActivityType; label: string }> = [
  { id: "all", label: "All Events" },
  { id: "tokens", label: "Transfers" },
  { id: "nfts", label: "Mints" },
  { id: "music", label: "Uploads" },
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
    default:
      return {
        icon: ActivityIcon,
        color: "text-gray-400",
        bg: "bg-gray-400/10",
        border: "border-gray-400/20",
      };
  }
};

const getDateGroup = (dateString: string) => {
  const date = parseISO(dateString);
  if (isToday(date)) return "Today";
  if (isYesterday(date)) return "Yesterday";
  return "Earlier";
};

const Activity: React.FC = () => {
  const [filter, setFilter] = useState<ActivityType>("all");
  const { data: activities = [], isLoading, error } = useActivityFeed();

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
      const groupName = getDateGroup(activity.created_at);
      const group = groups[groupName] || [];
      group.push(activity);
      groups[groupName] = group;
      return groups;
    },
    {} as Record<string, ActivityItem[]>,
  );

  // Sort groups order
  const sortedGroupKeys = ["Today", "Yesterday", "Earlier"].filter(
    (key) => groupedActivities[key]?.length > 0,
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
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Loading activity...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 border border-red-500/20 rounded-3xl bg-red-500/5">
            <p className="text-red-400 font-medium">Failed to load activity.</p>
            <Button
              variant="link"
              className="text-red-400 underline"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          </div>
        ) : sortedGroupKeys.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5">
            <Filter className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
            <p className="text-muted-foreground font-medium">
              No activity found.
            </p>
          </div>
        ) : (
          sortedGroupKeys.map((dateGroup) => (
            <div
              key={dateGroup}
              className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground pl-2">
                {dateGroup}
              </h3>

              <div className="rounded-2xl border border-white/5 bg-[#111827]/40 overflow-hidden backdrop-blur-sm">
                {groupedActivities[dateGroup].map((activity, index) => {
                  const style = getActivityIcon(activity.type);
                  const Icon = style.icon;

                  return (
                    <div
                      key={activity.id}
                      className={cn(
                        "group flex items-center gap-4 p-4 hover:bg-white/5 transition-all duration-200 cursor-default",
                        index !== groupedActivities[dateGroup].length - 1 &&
                          "border-b border-white/5",
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
                            <Clock className="w-3 h-3" />{" "}
                            {formatDistanceToNow(
                              parseISO(activity.created_at),
                              {
                                addSuffix: true,
                              },
                            )}
                          </span>
                        </div>
                      </div>
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

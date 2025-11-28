export const StatItem = ({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/5">
    <div className="p-2 rounded-full bg-white/5 text-primary">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <div className="text-lg font-bold text-white leading-none">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mt-1">
        {label}
      </div>
    </div>
  </div>
);

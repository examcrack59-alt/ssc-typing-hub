interface StatsCardProps {
  title: string;
  value: string | number;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  color = "text-slate-800",
}: StatsCardProps) {
  return (
    <div className="flex h-16 min-w-[125px] flex-col justify-center rounded-md border border-blue-300 bg-white px-4 shadow-sm">

      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className={`mt-1 text-xl font-bold leading-none ${color}`}>
        {value}
      </p>

    </div>
  );
}
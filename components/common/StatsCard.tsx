interface StatsCardProps {
  title: string;
  value: string | number;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  color = "text-blue-600",
}: StatsCardProps) {
  return (
    <div
  className="
    flex
    h-[64px]
    w-[126px]
    flex-col
    justify-center
    rounded-md
    border
    border-blue-300
    bg-white
    px-4
    shadow-sm
  "
>
      <p className="text-xs font-medium text-slate-600">{title}</p>

      <h2
  className={`
    mt-1
    text-[22px]
    font-bold
    leading-none
    ${color}
  `}
>
        {value}
      </h2>
    </div>
  );
}
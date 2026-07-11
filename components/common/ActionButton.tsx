interface Props {
  title: string;
  color?:
    | "blue"
    | "red"
    | "green"
    | "yellow"
    | "orange"
    | "purple"
    | "gray";

  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function ActionButton({
  title,
  color = "blue",
  onClick,
  disabled = false,
  className = "",
}: Props) {
  const colors = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    red: "bg-red-600 hover:bg-red-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    yellow: "bg-yellow-400 hover:bg-yellow-500 text-black",
    orange: "bg-orange-500 hover:bg-orange-600 text-white",
    purple: "bg-purple-600 hover:bg-purple-700 text-white",
    gray: "bg-slate-600 hover:bg-slate-700 text-white",
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`
       h-9
min-w-[105px]
px-4

rounded-md

text-[13px]
font-semibold

        shadow

        transition-all
        duration-200

        hover:-translate-y-0.5
        hover:shadow-md

        active:scale-95

        disabled:opacity-50
        disabled:cursor-not-allowed

        ${colors[color]}
        ${className}
      `}
    >
      {title}
    </button>
  );
}
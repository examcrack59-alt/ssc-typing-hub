interface Props {
  value: number;
}

export default function ProgressBar({ value }: Props) {
  return (
    <div className="mt-4 h-3 w-full rounded-full bg-gray-200">

      <div
        className="h-3 rounded-full bg-blue-600 transition-all"
        style={{
          width: `${value}%`,
        }}
      />

    </div>
  );
}
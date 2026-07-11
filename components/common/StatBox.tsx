interface Props {
  title: string;
  value: string | number;
}

export default function StatBox({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-5 text-center shadow">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}
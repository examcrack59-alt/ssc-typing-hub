export default function KeyboardPanel() {
  return (
    <div className="mt-8 rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-bold">
        Virtual Keyboard
      </h2>

      <div className="grid grid-cols-15 gap-2">

        {"QWERTYUIOP".split("").map((key) => (
          <div
            key={key}
            className="rounded-lg bg-gray-100 p-3 text-center font-semibold"
          >
            {key}
          </div>
        ))}

      </div>

    </div>
  );
}
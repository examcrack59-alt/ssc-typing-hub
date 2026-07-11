interface TestSeriesLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function TestSeriesLayout({
  left,
  right,
}: TestSeriesLayoutProps) {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-12 gap-6">

        {/* Left Section */}

        <div className="col-span-12 xl:col-span-8">
          {left}
        </div>

        {/* Right Sidebar */}

        <div className="col-span-12 xl:col-span-4">
          {right}
        </div>

      </div>
    </section>
  );
}
export default function Loading() {
  return <div className="w-full space-y-8 animate-pulse">
    {/* Header */}
    <header className="space-y-8">
      <div className="max-w-2xl mx-auto space-y-4">
        <span className="block h-4 w-20 bg-gray-700 rounded"></span>
        <div className="h-10 w-full bg-gray-700 rounded"></div>
        <div className="flex items-center gap-3 mt-5">
          <div className="h-12 w-12 rounded-full bg-gray-700"></div>
          <div className="flex flex-col gap-1">
            <div className="h-5 w-32 bg-gray-700 rounded"></div>
            <div className="h-4 w-20 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>

      <article className="px-4 grid place-items-center gap-8 mt-8">
        <div className="w-full max-w-screen-lg h-64 bg-gray-700 rounded-lg"></div>
      </article>
    </header>

    {/* Body */}
    <div className="max-w-3xl mx-auto space-y-6">
      <section className="space-y-4">
        {/* Simulate several lines of text */}
        <div className="h-4 w-full bg-gray-700 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
        <div className="h-4 w-4/6 bg-gray-700 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
      </section>

      {/* Comments placeholder */}
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-gray-700"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 w-1/3 bg-gray-700 rounded"></div>
              <div className="h-4 w-full bg-gray-700 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}

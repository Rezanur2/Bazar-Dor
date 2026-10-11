const Loading = () => {
  return (
    <main className="min-h-screen bg-[#E2EDE3]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <div className="h-4 w-44 rounded bg-gray-300" />

        <section className="my-4 flex flex-col items-start justify-between gap-5 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm sm:p-5 md:flex-row md:items-center">
          <div className="flex w-full items-center gap-3">
            <div className="size-18 shrink-0 rounded-xl bg-gray-200" />

            <div className="flex flex-1 flex-col gap-3">
              <div className="h-7 w-40 rounded bg-gray-200 sm:w-56" />
              <div className="h-4 w-32 rounded bg-gray-200" />
              <div className="h-4 w-48 max-w-full rounded bg-gray-200" />
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-3 rounded-xl border border-base-300 bg-[#f8faf8] p-4 sm:w-36">
            <div className="h-4 w-20 rounded bg-gray-200" />
            <div className="h-9 w-24 rounded bg-gray-200" />
            <div className="h-3 w-20 rounded bg-gray-200" />
            <div className="h-4 w-12 rounded bg-gray-200" />
          </div>
        </section>

        <section className="rounded-2xl bg-base-100 p-5">
          <div className="mb-4 h-6 w-36 rounded bg-gray-200" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex flex-col gap-3 rounded-xl border border-base-300 p-4"
              >
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-7 w-32 max-w-full rounded bg-gray-200" />
                <div className="h-3 w-28 rounded bg-gray-200" />
              </div>
            ))}
          </div>

          <div className="mb-4 mt-7 h-6 w-48 rounded bg-gray-200" />

          <div className="overflow-hidden rounded-xl border border-base-200">
            <div className="flex gap-6 border-b border-base-200 bg-gray-100 px-4 py-4">
              {[20, 20, 16, 16, 12].map((width, index) => (
                <div
                  key={index}
                  className="h-4 shrink-0 rounded bg-gray-300"
                  style={{ width: `${width}%` }}
                />
              ))}
            </div>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
              <div
                key={row}
                className={`flex gap-6 px-4 py-4 ${
                  row % 2 === 0 ? "bg-[#F0F5F0]" : "bg-white"
                }`}
              >
                {[20, 20, 16, 16, 12].map((width, index) => (
                  <div
                    key={index}
                    className="h-4 shrink-0 rounded bg-gray-200"
                    style={{ width: `${width}%` }}
                  />
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Loading;
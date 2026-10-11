export default function CategoryLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 animate-pulse">
      <div className="p-5 bg-base-200 rounded-2xl flex items-center gap-4 h-24 w-full"></div>
      <div className="p-3 bg-base-200 rounded-2xl h-12 w-full flex justify-end">
        <div className="w-32 bg-base-300 h-full rounded-xl"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-base-200 rounded-2xl p-4 h-40 w-full"></div>
        ))}
      </div>
    </div>
  );
}

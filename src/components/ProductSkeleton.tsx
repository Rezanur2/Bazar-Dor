const pulse = "animate-pulse rounded bg-gray-300";

const ProductSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className="w-full rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4"
      >
        <div className="flex items-center gap-3">
          <div className={`${pulse} h-10 w-10 shrink-0 rounded-xl`} />

          <div className="flex-1 space-y-2">
            <div className={`${pulse} h-4 w-24`} />
            <div className={`${pulse} h-3 w-16`} />
          </div>
        </div>

        <div className="mt-4">
          <div className={`${pulse} h-3 w-20`} />

          <div className="mt-2 flex items-center justify-between">
            <div className={`${pulse} h-5 w-24`} />
            <div className={`${pulse} h-5 w-12 rounded-full`} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProductSkeleton;
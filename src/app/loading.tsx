import ProductSkeleton from "@/components/ProductSkeleton";

const Loading = () => {
  const pulse = "animate-pulse rounded bg-gray-300";
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-4">
      <section className="mx-6 my-3 grid grid-cols-1 items-center gap-5 rounded-3xl border border-gray-200 bg-[#f8f8f8] p-6 max-md:mx-0 max-md:text-center md:grid-cols-3 md:justify-between">
        <div className="flex flex-col items-center gap-4 md:col-span-2 md:items-start md:text-left">
          <div className={`${pulse} h-7 w-36 rounded-2xl`} />
          <div className={`${pulse} h-7 w-64 max-w-full sm:h-9 sm:w-96`} />
          <div className="w-full space-y-2 md:w-4/5">
            <div className={`${pulse} h-3 w-full`} />
            <div className={`${pulse} h-3 w-full`} />
            <div className={`${pulse} h-3 w-3/4`} />
          </div>
          <div className={`${pulse} h-9 w-28 rounded-lg`} />
        </div>
        <div className="flex justify-center">
          <div className={`${pulse} h-36 w-44 rounded-2xl sm:h-40 sm:w-52`} />
        </div>
      </section>
      <section className="mx-6 mt-3 max-md:mx-0">
        <div className="mb-4 flex items-center gap-2 max-sm:justify-center">
          <div className={`${pulse} h-5 w-5`} />
          <div className={`${pulse} h-6 w-36`} />
        </div>
        <div className="px-4 sm:px-0">
          <ProductSkeleton count={6} />
        </div>
      </section>
      <section className="mx-6 py-6 max-md:mx-0">
        <div className="mb-4 flex items-center gap-2 max-sm:justify-center">
          <div className={`${pulse} h-5 w-5`} />
          <div className={`${pulse} h-6 w-36`} />
        </div>
        <div className="px-4 sm:px-0">
          <ProductSkeleton count={6} />
        </div>
      </section>
      <section id="allProducts" className="w-full px-6 max-md:px-0">
        <div className="mb-5 pl-2 max-sm:text-center">
          <div className={`${pulse} mx-auto mb-3 h-6 w-28 max-sm:mx-auto sm:mx-0`} />

          <div className={`${pulse} mx-auto h-3 w-72 max-w-full sm:mx-0`} />
        </div>
        <ProductSkeleton count={8} />
      </section>
    </div>
  );
};

export default Loading;
"use client";
import { useRouter, useSearchParams } from "next/navigation";

export const SortFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "default";

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="px-10 py-3 sm:py-6 bg-base-100 border border-base-300 rounded-2xl flex max-sm:justify-center justify-end items-center shadow-sm w-full">
      <div className="flex items-center gap-2.5">
        <span className="text-sm font-semibold text-[#1D271F]/70 select-none">
          সাজান
        </span>

        <select
          value={currentSort}
          onChange={(e) => handleSortChange(e.target.value)}
          className="select select-sm select-bordered rounded-xl bg-base-100 border-base-300 font-semibold text-xs text-[#1D271F] focus:outline-none focus:border-[#05893E]/50 cursor-pointer h-9 w-34 items-center px-3"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low-to-high">দাম: কম থেকে বেশি</option>
          <option value="high-to-low">দাম: বেশি থেকে কম</option>
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] w-full gap-3">
      <span className="loading loading-spinner loading-lg text-[#05893E]"></span>
      <p className="text-sm font-semibold text-gray-500 animate-pulse">
        আজকের বাজারের দাম লোড হচ্ছে...
      </p>
    </div>
  );
}

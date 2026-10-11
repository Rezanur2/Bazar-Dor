import Link from "next/link";

export const ProductNotFound = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center text-center gap-4 min-h-[60vh] select-none text-[#1D271F]">
      <div className="text-6xl animate-bounce">🔍</div>
      <h1 className="text-2xl font-black tracking-wide">কোনো পণ্য পাওয়া যায়নি</h1>
      <p className="text-sm font-medium text-[#1D271F]/50 max-w-sm leading-relaxed">
        দুঃখিত, অনুরোধ করা পণ্যটি এই মুহূর্তে বাজারের তালিকায় সক্রিয় না থাকার কারণে খুঁজে পাওয়া যায়নি।
      </p>
      <Link 
        href="/" 
        className="btn px-5 py-2.5 text-sm font-bold bg-[#05893E] hover:bg-[#046E32] text-white rounded-xl border-0 shadow-sm transition-all duration-200 cursor-pointer mt-2"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

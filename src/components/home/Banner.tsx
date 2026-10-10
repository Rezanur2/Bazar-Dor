import { LocalDate } from "../shared/LocalDate";
import Image from "next/image";
import Hero from "@/assets/bazar-hero.png";

const Banner = () => {
  return (
    <div className="flex border border-base-300 shadow-sm flex-col max-md:items-center max-md:text-center max-md:px-10 md:grid grid-cols-3 md:justify-between bg-base-200 p-6 my-3 mx-6 rounded-3xl">
      <div className="col-span-2">
        <p className="badge p-4 rounded-2xl font-semibold bg-[#05893E1A] text-[#05893e] text-xs md:text-sm mb-2">
          <LocalDate options={{ dateStyle: "full" }} />
        </p>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-5">
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="text-xs sm:text-sm lg:text-base font-normal mb-3 sm:mb-5 lg:mb-7 text-[#1D271FB3] max-md:px-6 md:w-[80%]">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন- সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <a href="#allProducts" className="btn max-sm:btn-sm px-3 sm:px-4 text-xs sm:text-sm py-1 bg-[#05893E] hover:bg-[#046E32] text-white rounded-lg border-0 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
          সব পণ্য দেখুন
        </a>
      </div>
      <div className="md:col-span-1 justify-center items-center text-center">
        <Image src={Hero} alt="Bazar-hero" />
      </div>
    </div>
  );
};

export default Banner;

import Logo from "../../assets/logo.png";
import Image from "next/image";
import { LocalDate } from "./LocalDate";
import NavLinks from "./NavLinks";
import { Suspense } from "react";
import Link from "next/link";
import Marquee from "../Marquee";

const Header = () => {
  return (
    <header className="bg-[#f3fbf4]">
      <div>
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src={Logo}
                  alt="Bazar-Dor-Logo"
                  className="w-10 md:w-12"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-xl font-bold">বাজার দর</span>
                  <span className="text-xs">
                    <LocalDate options={{ dateStyle: "full" }} />
                  </span>
                </div>
              </div>
            </Link>
            <div className="flex gap-0.5 sm:gap-2 text-sm font-semibold">
              <button className="btn max-sm:btn-sm px-3 sm:px-4 text-xs sm:text-sm py-1 bg-base-200 rounded-lg hover:bg-[#046E32] hover:text-white text-base-content border-0 transition-all duration-200 cursor-pointer">
                সাইন ইন
              </button>
              <button className="btn max-sm:btn-sm px-3 sm:px-4 text-xs sm:text-sm py-1 bg-[#05893E] text-white hover:bg-[#046E32] rounded-lg border-0 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                সাইন আপ
              </button>
            </div>
          </div>
        </div>
        <div className="border-y border-base-300">
          <Suspense
            fallback={
              <div className="h-10 w-full bg-base-200 animate-pulse rounded-md mx-auto max-w-6xl"></div>
            }
          >
            <NavLinks />
          </Suspense>
        </div>
        <Suspense
          fallback={
            <div className="h-10 w-full bg-base-200 animate-pulse rounded-md mx-auto max-w-6xl"></div>
          }
        >
          <Marquee />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;

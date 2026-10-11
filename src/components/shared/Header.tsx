import Logo from "../../assets/logo.png";
import Image from "next/image";
import { LocalDate } from "./LocalDate";
import NavLinks from "./NavLinks";
import { Suspense } from "react";
import Link from "next/link";
import Marquee from "../Marquee";
import UserInfo from "./UserInfo";

const Header = () => {
  return (
    <header className="bg-[#f3fbf4]">
      <div>
        <div className="mx-auto max-w-7xl px-8 sm:px-12 py-4 shadow-xs">
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
          <UserInfo />
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

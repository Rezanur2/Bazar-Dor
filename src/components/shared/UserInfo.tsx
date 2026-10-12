"use client";
import Avatar from "@/assets/demoMaleAvator.jpg";
import { useEffect } from "react";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

const UserInfo = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const pathname = usePathname();

  useEffect(() => {
    if (isPending || !session?.user) return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("login") === "success") {
      toast.dismiss("social-signin");
      toast.success("সফলভাবে সাইন ইন হয়েছে!");
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [session, isPending]);
  const handleSignOut = async () => {
    try {
      const { error } = await signOut();

      if (error) {
        toast.error("সাইন আউট করা যায়নি।");
        return;
      }

      toast.success("সফলভাবে সাইন আউট হয়েছে!");
    } catch {
      toast.error("কিছু একটা ভুল হয়েছে।");
    }
  };

  if (isPending) {
  return (
    <div className="flex gap-2 items-center">
      <div className="h-9 w-20 rounded-lg bg-base-200 animate-pulse" />
      <div className="h-9 w-20 rounded-lg bg-base-200 animate-pulse" />
    </div>
  );
}

  return (
    <div>
      {user ? (
        <div>
          <div className="dropdown dropdown-end select-none text-[#1D271F]">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 p-1.5 hover:bg-base-200/60 rounded-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="avatar">
                <div className="w-8 h-8 rounded-full border border-base-300 shadow-sm relative overflow-hidden">
                  <Image src={user.image || Avatar} alt={user.name} width={30} height={30} />
                </div>
              </div>
              <span className="text-sm max-sm:hidden font-bold tracking-wide group-hover:text-green-600 transition-colors">
                {user.name}
              </span>
              <span className="text-[10px] text-gray-400 group-hover:text-green-600 transition-colors mt-0.5">
                ▼
              </span>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-5 mt-2 bg-base-100 border border-base-300 rounded-3xl shadow-xl w-64 gap-1 z-50"
            >
              <div className="flex flex-col gap-0.5 pb-3 mb-2 border-b border-base-200 pl-1">
                <span className="font-bold text-base tracking-wide text-[#1D271F]">
                  {user.name}
                </span>
                <span className="text-xs font-normal text-gray-400">
                  {user.email}
                </span>
              </div>
              {pathname !== "/profile" && (<li>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-sm text-[#1D271F] hover:bg-[#05893E]/5 hover:text-[#05893E] active:bg-[#05893E] active:text-white transition-colors"
                >
                  <span className="text-base">👤</span>
                  <span>আমার প্রোফাইল</span>
                </Link>
              </li>)}

              {pathname !== "/" && (
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-sm text-[#1D271F] hover:bg-[#05893E]/5 hover:text-[#05893E] active:bg-[#05893E] active:text-white transition-colors"
                  >
                    <span className="text-base">⚖️</span>
                    <span>বাজার তুলনা</span>
                  </Link>
                </li>
              )}
              <li>
                <button
                  onClick={handleSignOut}
                  type="button"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-sm text-red-500 hover:bg-red-50 hover:text-red-600 active:bg-red-500 active:text-white transition-colors cursor-pointer w-full text-left"
                >
                  <span className="text-base">↩️</span>
                  <span>সাইন আউট</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex gap-0.5 sm:gap-2 text-sm font-semibold">
            <Link href={"/signin"}>
              <button className="btn max-sm:btn-sm px-3 sm:px-4 text-xs sm:text-sm py-1 rounded-lg bg-[#f3fbf4] hover:bg-[#046E32] hover:text-white text-base-content border-0 transition-all duration-200 cursor-pointer">
                সাইন ইন
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="btn max-sm:btn-sm px-3 sm:px-4 text-xs sm:text-sm py-1 bg-[#05893E] text-white hover:bg-[#046E32] rounded-lg border-0 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                সাইন আপ
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;

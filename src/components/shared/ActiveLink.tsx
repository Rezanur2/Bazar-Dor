"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
}

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="shrink-0">
      <div
        className={
          isActive
            ? "flex gap-1.5 px-3.5 py-1.5 items-center rounded-md transition-all duration-200 cursor-pointer bg-[#05893E] text-white font-bold"
            : "flex gap-1.5 px-3.5 py-1.5 items-center rounded-md transition-all duration-200 cursor-pointer text-base-content  hover:bg-[#05893E]/20 hover:text-[#05893E] hover:border-[#05893E]/20"
        }
      >
        {children}
      </div>
    </Link>
  );
};

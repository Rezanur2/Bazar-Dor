"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

export const useProtectedRouteGuard = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      // 💡 Trigger relevant toast warning message for protected-route redirects
      toast.error("অনুগ্রহ করে বিস্তারিত কন্টেন্ট দেখতে প্রথমে সাইন ইন করুন!");
      router.push("/signin");
    }
  }, [session, isPending, router]);

  return { isAuthenticated: !!session, isPending };
};

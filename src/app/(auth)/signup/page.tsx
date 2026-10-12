"use client";
import Image from "next/image";
import Link from "next/link";
import Github from "@/assets/github.png";
import Google from "@/assets/Google.png";
import { signIn, signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter();
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    if (user.password !== user.confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি মিলেনি!");
      return;
    }

    const { confirmPassword, ...userData } = user;
    const { data, error } = await signUp.email({
      ...userData,
      callbackURL: "/signin",
    });
    if (data) {
      toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে!");
      router.push("/signin");
    }
    if (error) {
      toast.error(error.message || "রেজিস্ট্রেশন করা যায়নি।");
    }
  };

  const handleGoogleSignIN = async () => {
      toast.loading("Google দিয়ে সাইন ইন করা হচ্ছে...", {
      id: "social-signin",
    });
    try {
      const { error } = await signIn.social({
      provider: "google",
      callbackURL: "/?login=success",
      });
        if (error) {
          toast.error("Google দিয়ে সাইন ইন করা যায়নি!", {
          id: "social-signin",
        });
      }
    } catch {
      toast.error("Google দিয়ে সাইন ইন করা যায়নি!", {
        id: "social-signin",
      });
    }
  };
  const handleGitHubSignIn = async () => {
      toast.loading("GitHub দিয়ে সাইন ইন করা হচ্ছে...", {
      id: "social-signin",
    });
    try {
      const { error } = await signIn.social({
        provider: "github",
        callbackURL: "/?login=success",
      });
      if (error) {
        toast.error("GitHub দিয়ে সাইন ইন করা যায়নি!", {
        id: "social-signin",
      });
    }
    } catch {
      toast.error("Github দিয়ে সাইন ইন করা যায়নি!");
    }
  }
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-6 pb-10">
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-bold text-[#1D271F]">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="mt-1 text-sm text-[#1D271F]/70">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>
      <div className="w-full max-w-md rounded-xl border border-[#e1e8e1] bg-[#f9fbf9] p-5 shadow-sm sm:p-6">
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-[#1D271F]"
            >
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="যেমন: রহিম উদ্দিন"
              autoComplete="name"
              required
              className="input input-bordered h-10 w-full border-[#e1e8e1] bg-transparent text-sm outline-none focus:border-[#05893E] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-[#1D271F]"
            >
              ইমেইল
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="input input-bordered h-10 w-full border-[#e1e8e1] bg-transparent text-sm outline-none focus:border-[#05893E] focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-[#1D271F]"
            >
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="একটি পাসওয়ার্ড তৈরি করুন কমপক্ষে ৮ অক্ষর"
              autoComplete="new-password"
              minLength={8}
              required
              className="input input-bordered h-10 w-full border-[#e1e8e1] bg-transparent text-sm outline-none focus:border-[#05893E] focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm font-medium text-[#1D271F]"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="আবার লিখুন"
              autoComplete="new-password"
              minLength={8}
              required
              className="input input-bordered h-10 w-full border-[#e1e8e1] bg-transparent text-sm outline-none focus:border-[#05893E] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="btn mt-2 h-10 min-h-10 w-full border-0 bg-[#05893E] text-sm font-semibold text-[#F3FbF4] shadow-sm rounded-lg transition-colors hover:bg-[#046E32]"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-0.5 flex-1 bg-[#1d371f]/10" />
          <span className="text-xs text-[#1D271F]">অথবা</span>
          <div className="h-0.5 flex-1 bg-[#1d371f]/10" />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleGoogleSignIN}
            className="btn btn-outline h-10 min-h-10 border-[#e1e8e1] bg-transparent rounded-lg text-[13px] font-semibold text-[#1D271F] hover:border-[#05893E] hover:bg-[#05893E]/5"
          >
            <Image src={Google} alt="Google" className="h-5 w-5" />
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            onClick={handleGitHubSignIn}
            type="button"
            className="btn btn-outline h-10 min-h-10 border-[#e1e8e1] bg-transparent text-[13px] rounded-lg font-semibold text-[#1D271F] hover:border-[#05893E] hover:bg-[#05893E]/5"
          >
            <Image src={Github} alt="Github" className="h-5 w-5" />
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-[#1D271F]/70">
          অ্যাকাউন্ট আছে?
          <Link
            href="/signin"
            className="font-semibold text-[#05893E] hover:text-[#046E32] hover:underline ml-1"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>
      <Link
        href={"/"}
        className="mt-6 text-xs sm:text-sm text-[#1d271f]/60 hover:text-[#046E32]"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </section>
  );
};

export default SignUpPage;

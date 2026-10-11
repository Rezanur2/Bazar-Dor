"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut, updateUser } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Avatar from "@/assets/demoMaleAvator.jpg"; 

export default function ProfilePage() {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সফলভাবে সাইন আউট হয়েছে!");
          router.push("/");
          router.refresh();
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "সাইন আউট ব্যর্থ হয়েছে!");
        }
      }
    });
  };

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };
      await updateUser({
        ...newUserData,
      });
      
    toast.success("তথ্য সফলভাবে আপডেট করা হয়েছে!");
    router.push("/")
      router.refresh(); 
    
  };

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col px-4 py-8 select-none text-[#1D271F] animate-fadeIn">
      
          <div className="mb-6 pl-1">
              <div className="flex justify-center"><div className="w-30 h-30 rounded-full border border-base-300 shadow-sm relative overflow-hidden shrink-0">
            <Image 
              src={user?.image || Avatar} 
              alt={user?.name || "ইউজার প্রোফাইল পিকচার"} 
              fill
              className="object-cover"
            />
          </div></div>
        <h1 className="text-2xl font-black tracking-wide text-[#1D271F]">
          আমার প্রোফাইল
        </h1>
        <p className="text-xs font-semibold text-[#1D271F]/50 mt-1">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>
      <div className="w-full rounded-2xl border border-base-300 bg-base-100 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center gap-4 max-sm:flex-col max-sm:text-center">
          <div className="w-16 h-16 rounded-full border border-base-300 shadow-sm relative overflow-hidden shrink-0">
            <Image 
              src={user?.image || Avatar} 
              alt={user?.name || "ইউজার প্রোফাইল পিকচার"} 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-lg font-black tracking-wide">
              {user?.name || "লোড হচ্ছে..."}
            </h2>
            <span className="text-xs font-semibold text-gray-400">
              {user?.email || "লোড হচ্ছে..."}
            </span>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          type="button"
          className="btn btn-sm btn-outline px-4 border-red-200 hover:border-red-500 bg-transparent rounded-xl text-xs font-bold text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 cursor-pointer max-sm:w-full h-9 min-h-9"
        >
          ↩️ সাইন আউট
        </button>
      </div>

      <div className="w-full rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm flex flex-col gap-5">
        <h3 className="text-sm font-black text-gray-500 tracking-wide border-b border-base-200 pb-3 mb-1 pl-0.5">
          তথ্য
        </h3>

        <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="nameInput" className="text-xs font-black text-[#1D271F]/70 pl-0.5">
              নাম
            </label>
            <input
              key={user?.name || "name-key"}
              id="nameInput"
              name="name"
              type="text"
              defaultValue={user?.name || ""}
              placeholder="আপনার নাম লিখুন"
              required
              className="input input-bordered h-11 w-full border-base-300 bg-transparent text-sm font-semibold outline-none focus:border-[#05893E] focus:outline-none rounded-xl px-4"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="imageInput" className="text-xs font-black text-[#1D271F]/70 pl-0.5">
              প্রোফাইল ছবির লিংক (Image URL)
            </label>
            <input
              key={user?.image || "image-key"}
              id="imageInput"
              name="image" 
              type="url"
              defaultValue={user?.image || ""}
              placeholder="https://example.com"
              className="input input-bordered h-11 w-full border-base-300 bg-transparent text-sm font-semibold outline-none focus:border-[#05893E] focus:outline-none rounded-xl px-4"
            />
          </div>
          <button
            type="submit"
            className="btn h-11 min-h-11 w-full border-0 bg-[#05893E] hover:bg-[#046E32] text-sm font-bold text-[#F3FbF4] shadow-sm rounded-xl transition-all duration-200 cursor-pointer mt-2"
          >
            আপডেট
          </button>
        </form>
      </div>
      <Link
        href="/"
        className="mt-6 mx-auto text-xs sm:text-sm font-semibold text-[#1D271F]/50 hover:text-[#05893E] hover:underline transition-colors"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </section>
  );
}

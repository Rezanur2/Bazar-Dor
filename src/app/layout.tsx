import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "Bazar Dor app built with Next.js, TypeScript, Tailwind, BetterAuth and MongoDB",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" data-theme="light" className={`${hindSiliguri.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-[#1D271F]">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f3fbf4] border-t mt-6 border-[#e1e8e1] py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1 px-12 xl:px-0 md:gap-4 text-xs sm:text-sm font-medium text-[#1D271F]">
        <div className="text-center md:text-left tracking-wide">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </div>
        <div className="text-center md:text-right tracking-wide">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </div>
      </div>
    </footer>
  );
};

export default Footer;

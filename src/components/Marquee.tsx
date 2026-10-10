import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import baseUrl from "@/services/baseUrl";
import Link from "next/link";

interface IHeadline {
  id: string;
  slug: string;
  categoryIcon: string;
  nameBn: string;
  today: number | string;
  unit: string;
  change: {
    dir: string;
    pct: number;
  };
}

const unitInBangla: { [key: string]: string } = {
  kg: "কেজি",
  litre: "লিটার",
  liter: "লিটার",
  piece: "টি",
  dozen: "ডজন",
  gram: "গ্রাম",
};

const Marquee = async () => {
  const res = await fetch(`${baseUrl}/api/bazardor/products`);
  const headlines: IHeadline[] = await res.json();
  const banglaNumber = (number: number) => {
    return number.toLocaleString("bn-BD");
  }

  return (
    <div className="w-full py-2 bg-base-200 border-y border-base-300 overflow-hidden">
      <MarqueeText direction="right" duration={25}>
        <div className="flex items-center divide-x divide-base-300 rtl:divide-x-reverse">
          {headlines.map((headline) => {
            const isUp = headline.change.dir === "up";
            const todayPriceBn = banglaNumber(Number(headline.today));
            const changePctBn = banglaNumber(headline.change.pct);
            const unitBn = unitInBangla[headline.unit.toLowerCase()];

            return (
              <Link
                href={`/category/${headline.slug}`}
                key={headline.id}
                className="flex items-center gap-2 px-6 text-sm font-medium hover:text-green-600 shrink-0 transition-colors duration-200"
              >
                <span>{headline.categoryIcon}</span>
                <span className="text-sm font-semibold text-base-content hover:text-green-600">
                  {headline.nameBn}
                </span>
                <span className="font-normal tracking-wide text-sm text-gray-600">
                  {todayPriceBn} টাকা/{unitBn}
                </span>
                <span
                  className={`flex items-center gap-0.5 font-bold ${isUp ? "text-red-500" : "text-green-600"}`}
                >
                  {isUp ? "▲" : "▼"} {changePctBn}%
                </span>
              </Link>
            );
          })}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;

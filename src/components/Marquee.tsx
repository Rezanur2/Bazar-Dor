import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import baseUrl from "@/services/baseUrl";
import Link from "next/link";
import { toBanglaNumber, toBanglaUnit } from "@/utils/format";
import { IProduct } from "@/types";

const Marquee = async () => {
  const res = await fetch(`${baseUrl}/api/bazardor/products`);
  const headlines: IProduct[] = await res.json();

  return (
    <div className="w-full py-2 border-y border-base-300 shadow-sm overflow-hidden">
      <MarqueeText direction="right" duration={25}>
        <div className="flex items-center divide-x divide-base-300 rtl:divide-x-reverse">
          {headlines.map((headline) => {
            const isUp = headline.change.dir === "up";
            const isDown = headline.change.dir === "down";
            const todayPriceBn = toBanglaNumber(headline.today);
            const changePctBn = toBanglaNumber(headline.change.pct);
            const unitBn = toBanglaUnit(headline.unit);

            return (
              <Link
                href={`/product/${headline.slug}`}
                key={headline.id}
                className="flex items-center gap-2 px-6 text-sm font-medium hover:text-green-600 shrink-0 transition-colors duration-200"
              >
                <span>{headline.image}</span>
                <span className="text-xs sm:text-sm font-semibold text-base-content hover:text-green-600">
                  {headline.nameBn}
                </span>
                <span className="font-normal tracking-wide text-xs sm:text-sm text-gray-600">
                  {todayPriceBn} টাকা/{unitBn}
                </span>
                <span
                  className={`flex items-center gap-0.5 max-sm:text-xs font-bold ${
                    isUp
                      ? "text-red-500"
                      : isDown
                        ? "text-green-600"
                        : "text-gray-500"
                  }`}
                >
                  <span>{isUp ? "▲" : isDown ? "▼" : "—"}</span>
                  <span>{changePctBn}%</span>
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

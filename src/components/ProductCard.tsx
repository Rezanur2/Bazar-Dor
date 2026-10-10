import Link from "next/link";
import { IProduct } from "@/types";
import { toBanglaNumber, toBanglaUnit } from "@/utils/format";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const todayPriceBn = toBanglaNumber(product.today);

  const changePctBn = toBanglaNumber(Math.abs(Number(product.change.pct)));
  const unitBn = toBanglaUnit(product.unit);
  const detailUrl = `/product/${product.slug || product.id}`;

  return (
    <Link
      href={detailUrl}
      className="bg-base-100 border border-base-300 rounded-2xl p-4 shadow-sm flex flex-col justify-between gap-4 w-full max-w-85 sm:max-w-none hover:shadow-md hover:border-green-600/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out cursor-pointer text-left overflow-hidden group"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-base-200 rounded-xl flex items-center justify-center text-2xl select-none shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-105">
          {product.image || product.icon || "🌾"}
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-base text-[#1D271F] tracking-wide leading-snug transition-colors duration-300 group-hover:text-green-600">
            {product.nameBn}
          </h3>
          <span className="text-xs font-medium text-[#1D271F]/70 mt-0.5">
            প্রতি {unitBn}
          </span>
        </div>
      </div>
      <div className="flex items-end justify-between mt-1">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[#1D271F]/70 mb-0.5">
            আজকের দাম
          </span>
          <span className="font-black text-lg sm:text-xl text-[#1D271F] font-sans">
            {todayPriceBn}
            <span className="text-sm font-bold text-[#1D271F]"> টাকা</span>
          </span>
        </div>
        <div
          className={`flex items-center gap-0.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-sm border transition-transform duration-300 group-hover:scale-105 ${
            isUp
              ? "bg-green-50 text-green-600 border-green-100"
              : isDown
                ? "bg-red-50 text-red-600 border-red-100"
                : "bg-gray-100 text-gray-500 border-gray-200"
          }`}
        >
          <span>{isUp ? "▲" : isDown ? "▼" : "—"}</span>
          <span>{changePctBn}%</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

import { Suspense } from "react";
import ProductCard from "../ProductCard";
import { IProduct } from "@/types";

const PriceDown = ({downProducts}:{downProducts:IProduct[]}) => {
  return (
    <div className="px-6 py-6">
      <h2 className="max-sm:text-center font-bold text-xl mb-4">
        <span className="text-[#05893E] pr-2">▼</span>আজ দাম কমেছে
      </h2>
      <div className="">
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-full sm:px-0">
          <Suspense
            fallback={<div className="text-gray-400">লোড হচ্ছে...</div>}
          >
            {downProducts.length === 0 ? (
              <p className="text-sm text-gray-500 col-span-full">
                আজ কোনো পণ্যের দাম কমেনি।
              </p>
            ) : (
              downProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PriceDown;

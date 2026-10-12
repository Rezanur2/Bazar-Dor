import { IProduct } from "@/types";
import { Suspense } from "react";
import ProductCard from "../ProductCard";

const PriceUp = ({ upProducts }: { upProducts: IProduct[] }) => {
  return (
    <div className="px-6 mt-3">
      <h2 className="max-sm:text-center font-bold text-lg sm:text-xl mb-4">
        <span className="text-red-600 pr-2">▲</span>আজ দাম বেড়েছে
      </h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-full sm:px-0">
          <Suspense
            fallback={<div className="text-gray-400">লোড হচ্ছে...</div>}
          >
            {upProducts.length === 0 ? (
              <p className="text-sm text-gray-500 col-span-full">
                আজ কোনো পণ্যের দাম কমেনি।
              </p>
            ) : (
              upProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PriceUp;

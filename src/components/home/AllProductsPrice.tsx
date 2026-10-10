import { IProduct } from "@/types";
import { Suspense } from "react";
import ProductCard from "../ProductCard";

interface AllProductsPriceProps {
  products: IProduct[];
}

const AllProductsPrice = ({ products }: AllProductsPriceProps) => {
  return (
    <div id="allProducts" className="w-full px-6">
      <div className="mb-5 pl-2">
        <h2 className="max-sm:text-center font-black text-lg sm:text-xl text-[#1D271F] tracking-wide">
          সব পণ্য
        </h2>
        <p className="max-sm:text-center max-sm:px-10 max-sm:text-xs font-medium text-sm text-[#1D271F]/50 mt-0.5">
          আজকের বাজারের সকল পণ্যের তালিকা এবং তুলনামূলক দামের লাইভ আপডেট
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center w-full">
        <Suspense
          fallback={
            <div className="text-gray-400 py-4">
              বাজারের তালিকা লোড হচ্ছে...
            </div>
          }
        >
          {products.length === 0 ? (
            <p className="text-sm text-gray-500 col-span-full py-4">
              কোনো পণ্য পাওয়া যায়নি।
            </p>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default AllProductsPrice;

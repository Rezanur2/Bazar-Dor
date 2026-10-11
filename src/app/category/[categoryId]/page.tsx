import ProductCard from "@/components/ProductCard";
import { SortFilter } from "@/components/SortFilter";
import baseUrl from "@/services/baseUrl";
import { ICategory, IProduct } from "@/types";
import { toBanglaNumber } from "@/utils/format";
import Link from "next/link";

export const instant = false;

interface pageProps {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{ sort?: string }>;
}

const getCategories = async (): Promise<ICategory[]> => {
  const res = await fetch(`${baseUrl}/api/bazardor/categories`);
  const data = await res.json();
  return data;
};

const CategoryProductPage = async ({ params, searchParams }: pageProps) => {
  const { categoryId } = await params;
  const { sort } = await searchParams;
  const currentSort = sort || "default";

  const res = await fetch(
    `${baseUrl}/api/bazardor/products?category=${categoryId}`,
  );
  let products: IProduct[] = await res.json();
  const categories = await getCategories();
  const currentCategory = categories.find((c) => c.slug == categoryId);

  if (!currentCategory || !Array.isArray(products) || products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center justify-center text-center gap-4 min-h-[50vh]">
        <div className="text-5xl select-none">🔍</div>
        <h1 className="text-xl font-bold text-[#1D271F]">কোনো পণ্য পাওয়া যায়নি</h1>
        <Link href="/" className="btn bg-[#05893E] text-white border-0 rounded-xl px-5">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  if (currentSort === "low-to-high") {
    products = [...products].sort((a, b) => Number(a.today) - Number(b.today));
  } else if (currentSort === "high-to-low") {
    products = [...products].sort((a, b) => Number(b.today) - Number(a.today));
  }

  const totalProductsBn = toBanglaNumber(products.length);

  return (
    <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-4">
      <div className="p-5 sm:mt-1 my-4 bg-base-100 border border-base-300 rounded-2xl flex items-center gap-4 shadow-sm">
        <div className="text-xl sm:text-3xl bg-base-200 p-3.5 rounded-xl">
          {currentCategory?.icon}
        </div>
        <div className="flex flex-col gap-0.5">
          <h2 className="font-bold text-lg sm:text-2xl text-[#1D271F] tracking-wide">
            {currentCategory?.nameBn}
          </h2>
          <p className="font-medium text-xs sm:text-sm text-[#1D271F]/70">
            {totalProductsBn}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <SortFilter />
      
      <div className="my-2 md:my-4">
        <p className="font-medium max-sm:text-center sm:pl-1 text-xs sm:text-sm text-[#1D271F]/70">মোট {totalProductsBn}টি পণ্য দেখানো হচ্ছে</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductPage;

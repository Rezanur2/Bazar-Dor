import baseUrl from "@/services/baseUrl";
import { ICategory, IProduct } from "@/types";
import { toBanglaNumber } from "@/utils/format";

export const instant = false;

interface pageProps {
  params: Promise<{ categoryId: string }>;
}

const getCategories = async ():Promise<ICategory[]> => {
  const res = await fetch(`${baseUrl}/api/bazardor/categories`);
  const data = await res.json();
  return data;
}

const CategoryProductPage = async ({ params }: pageProps) => {
  const { categoryId } = await params;

  const res = await fetch(
    `${baseUrl}/api/bazardor/products?category=${categoryId}`,
  );
  const products:IProduct[] = await res.json();
  const categories = await getCategories()
  const currentCategory = categories.find(c => c.slug == categoryId);
  const totalProductsBn = toBanglaNumber(products.length)

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
      <div className="p-5 bg-base-100 border border-base-300 rounded-2xl flex items-center gap-4 shadow-sm">
        <div className="text-2xl sm:text-3xl bg-base-200 p-3.5 rounded-xl">
          {currentCategory?.icon}
        </div>
        <div className="flex flex-col gap-0.5">
          <h2 className="font-bold text-xl sm:text-2xl text-[#1D271F] tracking-wide">
            {currentCategory?.nameBn}
          </h2>
          <p className="font-medium text-xs sm:text-sm text-[#1D271F]/70">
            {totalProductsBn}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductPage;

import baseUrl from "@/services/baseUrl";

export const instant = false;

interface pageProps {
  params: Promise<{ categoryId: string }>;
}

const CategoryProductPage = async ({ params }: pageProps) => {
  const { categoryId } = await params;
  console.log("Selected Category ID:", categoryId);
  const res = await fetch(
    `${baseUrl}/api/bazardor/products?category=${categoryId}`,
  );
  const data = await res.json();
  console.log(data);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-xl font-bold">
        ক্যাটাগরি: <span className="text-[#05893E]">{categoryId}</span>
      </h1>
    </div>
  );
};

export default CategoryProductPage;

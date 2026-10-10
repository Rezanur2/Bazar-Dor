import AllProductsPrice from "@/components/home/AllProductsPrice";
import Banner from "@/components/home/Banner";
import PriceDown from "@/components/home/PriceDown";
import PriceUp from "@/components/home/PriceUp";
import baseUrl from "@/services/baseUrl";
import { IProduct } from "@/types";

const getProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(`${baseUrl}/api/bazardor/products`);
  const data = await res.json();
  return data;
};

export default async function Home() {
  const products:IProduct[] = await getProducts();

  const upProducts = products
    .filter((products) => products.change.dir === "up")
    .sort((a, b) => Number(b.change.pct) - Number(a.change.pct))
    .slice(0, 6);

  const downProducts = products
    .filter((products) => products.change.dir == "down")
    .sort((a, b) => Math.abs(Number(b.change.pct)) - Math.abs(Number(a.change.pct)),
    )
    .slice(0, 6);

  return (
    <main className="mx-auto max-w-7xl flex flex-col px-4 gap-8">
      <Banner />
      <PriceUp upProducts={upProducts} />
      <PriceDown downProducts={downProducts} />
      <AllProductsPrice products={products} />
    </main>
  );
}

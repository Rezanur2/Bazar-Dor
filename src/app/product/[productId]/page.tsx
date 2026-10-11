import baseUrl from "@/services/baseUrl";
import { ProductNotFound } from "@/components/ProductNotFound";
import { toBanglaNumber, toBanglaUnit } from "@/utils/format";
import type { IProduct, IProductDetails } from "@/types";
import Link from "next/link";

interface ProductProps {
  params: Promise<{ productId: string }>;
}

export const instant = false;

const getProductBySlug = async (
  slug: string,
): Promise<IProductDetails | null> => {
  try {
    const res = await fetch(`${baseUrl}/api/bazardor/products`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const products: IProduct[] = await res.json();
    const matchedProduct = products.find((p) => p.slug === slug);

    if (!matchedProduct) return null;

    const resSingle = await fetch(
      `${baseUrl}/api/bazardor/products/${matchedProduct.id}`,
      { cache: "no-store" },
    );

    if (!resSingle.ok) return null;

    return (await resSingle.json()) as IProductDetails;
  } catch {
    return null;
  }
};

const ProductPage = async ({ params }: ProductProps) => {
  const { productId } = await params;
  const product = await getProductBySlug(productId);

  if (!product) return <ProductNotFound />;

  const markets = product.markets ?? [];
  const today = Number(product.today);
  const yesterday = Number(product.yesterday ?? today);
  const difference = Math.abs(today - yesterday);

  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const marketPrices = markets.map((market) => ({
    ...market,
    min: Number(market.min),
    max: Number(market.max),
    avg: (Number(market.min) + Number(market.max)) / 2,
  }));

  const minMarket = marketPrices.reduce<
    (typeof marketPrices)[number] | undefined
  >(
    (lowest, market) => (!lowest || market.min < lowest.min ? market : lowest),
    undefined,
  );

  const maxMarket = marketPrices.reduce<
    (typeof marketPrices)[number] | undefined
  >(
    (highest, market) =>
      !highest || market.max > highest.max ? market : highest,
    undefined,
  );

  const minPrice = minMarket?.min ?? today;
  const maxPrice = maxMarket?.max ?? today;
  const avgPrice = marketPrices.length
    ? marketPrices.reduce((sum, market) => sum + market.avg, 0) /
      marketPrices.length
    : today;

  const unit = toBanglaUnit(product.unit);

  return (
    <main className="bg-[#E2EDE3]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-1 sm:py-6 text-[#1D271F] sm:px-6 lg:px-8">
        <div className="breadcrumbs min-w-0 flex-1 overflow-hidden p-0 text-xs font-semibold text-gray-400">
          <ul>
            <li>
              <Link href="/">হোম</Link>
            </li>
            <li>
              <Link
                href={`/category/${product.category}`}
                className="transition-colors hover:text-green-600"
              >
                {product.categoryNameBn}
              </Link>
            </li>
            <li className="font-bold text-gray-600">{product.nameBn}</li>
          </ul>
        </div>

        <section className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-base-300 bg-base-100 my-4 p-4 shadow-sm sm:p-5 md:flex-row md:items-center">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-18 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-base-200 text-4xl">
              {product.image || product.icon || product.categoryIcon || "🌾"}
            </div>

            <div className="min-w-0">
              <h1 className="text-xl font-bold sm:text-3xl">
                {product.nameBn}
              </h1>
              <p className="text-xs sm:text-sm text-[#1d271f]/70">
                প্রতি {unit} · {product.categoryNameBn}
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                গতকালের তুলনায় আজ দাম{" "}
                <span className="font-bold">
                  {isUp ? "বেড়েছে" : isDown ? "কমেছে" : "স্থির"}
                </span>
                {" · "}
                {toBanglaNumber(difference)} টাকা
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center rounded-xl border border-base-300 bg-[#f8faf8] p-3 text-center sm:w-auto sm:min-w-28">
            <span className="text-xs sm:text-sm font-semibold text-[#1d271f]/70">
              আজকের দাম
            </span>
            <span className="my-0.5 text-2xl sm:text-3xl font-black">
              {toBanglaNumber(today)}
            </span>
            <span className="text-[10px] sm:text-xs lg:text-sm text-[#1d271f]/70">
              টাকা / {unit}
            </span>
            <span
              className={`mt-1 text-xs font-bold ${
                isUp
                  ? "text-red-500"
                  : isDown
                    ? "text-green-600"
                    : "text-gray-500"
              }`}
            >
              {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
              {toBanglaNumber(product.change.pct)}%
            </span>
          </div>
        </section>

        <section className="bg-base-100 p-5 rounded-2xl">
          <h2 className="mb-3 pl-1 text-sm sm:text-lg font-semibold">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 max-sm:text-center">
            {[
              {
                label: "সর্বনিম্ন দাম",
                price: minPrice,
                market: minMarket?.market,
                color: "text-[#1A9951]",
              },
              {
                label: "সর্বোচ্চ দাম",
                price: maxPrice,
                market: maxMarket?.market,
                color: "text-[#D03739]",
              },
              {
                label: "গড় দাম",
                price: Math.round(avgPrice),
                market: undefined,
                color: "text-[#05893E]",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 rounded-xl border border-base-300 bg-base-100 p-4 shadow-sm"
              >
                <span className="text-xs font-normal">{item.label}</span>
                <span
                  className={`text-xl sm:text-2xl font-black ${item.color}`}
                >
                  {toBanglaNumber(item.price)}
                  <span className="font-medium ml-0.5 text-sm">টাকা</span>
                </span>
                <span className="text-xs">
                  {item.market
                    ? `বাজার: ${item.market}`
                    : `প্রতি ${unit}-এর হিসাব`}
                </span>
              </div>
            ))}
          </div>
          <h2 className="pl-1 text-sm sm:text-lg font-semibold mt-7 mb-4">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <div className="flex flex-col gap-3 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
            <div className="w-full overflow-x-auto rounded-xl border border-base-200">
              <table className="table table-sm w-full text-xs">
                <thead>
                  <tr className="border-b border-[#e1e8e1] shadow-xs font-bold text-xs sm:text-sm text-[#1D271F]/60">
                    <th className="whitespace-nowrap py-3">বাজার</th>
                    <th className="whitespace-nowrap py-3">বিভাগ</th>
                    <th className="whitespace-nowrap py-3">সর্বনিম্ন</th>
                    <th className="whitespace-nowrap py-3">সর্বোচ্চ</th>
                    <th className="whitespace-nowrap py-3 text-right">গড়</th>
                  </tr>
                </thead>

                <tbody>
                  {marketPrices.map((market, index) => (
                    <tr
                      key={`${market.market}-${market.division}-${index}`}
                      className="odd:bg-[#FFFFFF] even:bg-[#F0F5F0] hover:bg-[#E2EDE3] transition-colors"
                    >
                      <td className="whitespace-nowrap font-medium text-xs sm:text-sm">
                        {market.market}
                      </td>
                      <td className="whitespace-nowrap text-xs sm:text-sm font-medium">
                        {market.division}
                      </td>
                      <td className="whitespace-nowrap text-xs sm:text-sm font-normal">
                        {toBanglaNumber(market.min)} টাকা
                      </td>
                      <td className="whitespace-nowrap text-xs sm:text-sm font-normal">
                        {toBanglaNumber(market.max)} টাকা
                      </td>
                      <td className="whitespace-nowrap text-right font-semibold text-xs sm:text-sm">
                        {toBanglaNumber(Math.round(market.avg))} টাকা
                      </td>
                    </tr>
                  ))}

                  {!markets.length && (
                    <tr>
                      <td
                        colSpan={5}
                        className="py-6 text-center text-gray-500"
                      >
                        কোনো বাজারের তথ্য পাওয়া যায়নি।
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductPage;

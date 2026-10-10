import { ActiveLink } from "./ActiveLink";
import baseUrl from "@/services/baseUrl";

interface IGrocery {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(`${baseUrl}/api/bazardor/categories`);
  const groceryList: IGrocery[] = await res.json();

  return (
    <div className="max-w-7xl mx-auto w-full overflow-hidden">
      <div className="flex gap-1 pl-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
        {groceryList.map((grocery) => (
          <ActiveLink key={grocery?.id} href={`/category/${grocery?.slug}`}>
            <span> {grocery?.icon}</span>
            <span className="text-xs font-semibold">{grocery?.nameBn}</span>
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;

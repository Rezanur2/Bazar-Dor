export interface IProduct {
  id: string;
  slug?: string;
  nameBn: string;
  today: number | string;
  unit: string;
  image?: string;
  icon?: string;
  categoryIcon: string;
  change: {
    dir: string;
    pct: number | string;
  };
}

export interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export interface IMarketPrice {
  market: string;
  division: string;
  min: number | string;
  max: number | string;
}

export interface IProductDetails extends IProduct {
  categoryNameBn: string;
  yesterday?: number | string;
  markets?: IMarketPrice[];
  category?: string;
}
export interface IBlockTypeBannerCarousel {
  block_type: 'BANNER_CAROUSEL';
  heading?: string;
  source: {
    path: string;
  };
}

export interface IBlockTypeItemCarousel {
  block_type: 'ITEM_CAROUSEL';
  heading?: string;
  source: {
    path: string;
  };
  item?: {
    link_to?: string;
  };
}

export interface IBlockTypeItemGrid {
  block_type: 'ITEM_GRID';
  source: {
    path: string;
  };
  item?: {
    link_to?: string;
  }
}

export interface IBlockTypeHeader {
  block_type: 'HEADER';
  heading?: string;
  source: {
    path: string;
  };
}

export interface IBlockTypeItem {
  block_type: 'ITEM';
}

export type IBlockType =
  | IBlockTypeBannerCarousel
  | IBlockTypeItemCarousel
  | IBlockTypeItemGrid
  | IBlockTypeHeader
  | IBlockTypeItem;

// NAVIGATION

export type INavigationOption = 'HOME' | 'CATALOG' | 'CART' | 'FAVORITE';

// API
export interface IItem {
  id: string;
  name: string;
  price: {
    value: string;
    currency: string;
  };
  photos: {
    logo: string;
    extended: string[];
  };
  tags: string[];
  description: string;
  category: number;
  status: string;
}

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
}

export interface IBlockTypeItemGrid {
  block_type: 'ITEM_GRID';
  source: {
    path: string;
  };
}

export interface IBlockTypeHeader {
  block_type: 'HEADER';
  heading?: string;
  source: {
    path: string;
  };
}

export type IBlockType =
  | IBlockTypeBannerCarousel
  | IBlockTypeItemCarousel
  | IBlockTypeItemGrid
  | IBlockTypeHeader;

// NAVIGATION

export type INavigationOption = 'HOME' | 'CATALOG' | 'CART' | 'FAVORITE';

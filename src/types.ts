export interface IBlockTypeSearch {
  block_type: 'SEARCH';
  input?: {
    placeholder?: string;
  };
  categories?: {
    source: {
      path: string;
    };
  };
}

export interface IBlockTypeBannerCarousel {
  block_type: 'BANNER_CAROUSEL';
  heading?: string;
  size?: 'm' | 'l';
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
  };
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
  | IBlockTypeSearch
  | IBlockTypeBannerCarousel
  | IBlockTypeItemCarousel
  | IBlockTypeItemGrid
  | IBlockTypeHeader
  | IBlockTypeItem;

// NAVIGATION

export type INavigationOption = 'HOME' | 'CATALOG' | 'CART' | 'FAVORITE';

//============== API ==============\\
export type IResource = 'categories' | 'goods';
export type IMediaType = 'GOOD';

export interface IMedia {
  id: number;
  name: string;
  size: number;
  storageFileName: string;
  mediaType: IMediaType;
}

export interface IRetailer {
  id: number;
  name: string;
  enabled: boolean;
}

export interface ICaegory {
  id: number;
  name: string;
  status: string;
  retailer: IRetailer;
}

export interface IItem {
  id: number;
  name: string;
  price: number;
  enabled: boolean;
  categories: ICaegory[];
  retailer: IRetailer;
  media: IMedia[];
}

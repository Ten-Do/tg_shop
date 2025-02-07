export type IMediaType = 'GOOD';
export type ICategoryStatus = 'ACTIVE' | 'ARCHIVED';
export type IResource = 'categories' | 'goods';

export interface IPageable {
  pageNumber: number;
  pageSize: number;
  sort: ISortConfig;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

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
  email: string;
  enabled: boolean;
}

export interface ICategory {
  id: number;
  name: string;
  status: ICategoryStatus;
  retailer: IRetailer;
}

export interface IItem {
  id: number;
  enabled: boolean;
  name: string;
  price: number;
  retailer: IRetailer;
  media: IMedia[];
  categories: ICategory[];
}

export interface ISortConfig {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

export interface IResponse<ResponseItem extends IItem | ICategory> {
  content: ResponseItem[];
  pageable: IPageable;
  last: boolean; // является ли страница последней
  totalElements: number; // всего элементов в бд
  totalPages: number; // всего страниц
  size: number; // размер страницы
  number: number; // номер страницы
  sort: ISortConfig;
  first: boolean; // является ли страница первой
  numberOfElements: number; // количество элементов на странице
  empty: boolean; // является ли страница пустой
}

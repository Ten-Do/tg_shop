import { IItem, IResponse } from '@/types';
import { $api } from '../api';

export const getItems = async (
  searchParams?: URLSearchParams,
): Promise<IResponse<IItem>> => {
  const category = searchParams?.get('category');
  const searchItem = searchParams?.get('q');
  const data: Record<string, any> = {};
  if (category) {
    data['categories'] = [Number(category)];
  }
  if (searchItem) {
    data['searchItem'] = searchItem;
  }

  return $api.post('/goods', {
    data,
  });
};

export const getItemById = async (id?: string): Promise<IItem> => {
  console.log('item ', id);
  if (!id) {
    throw new Error('No id');
  }
  return $api.get(`/goods/${id}`);
};

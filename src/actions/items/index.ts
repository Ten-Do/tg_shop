import { IItem, IResponse } from '@/types';
import { $api } from '../api';

export const getItems = async (): Promise<IResponse<IItem>> => {
  console.log('getItems')
  return $api.post('/goods', {
    page: 0,
    size: 20,
  });
};

export const getItemById = async (id?: string): Promise<IItem> => {
  console.log('item ', id)
  if (!id) {
    throw new Error('No id');
  }
  return $api.get(`/goods/${id}`);
};

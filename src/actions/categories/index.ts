import { ICategory, IResponse } from '@/types';
import { $api } from '../api';

export const getCategories = async (): Promise<IResponse<ICategory>> => {
  return $api.post('/categories', {
    page: 0,
    size: 20,
  });
};

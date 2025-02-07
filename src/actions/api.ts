import { getTwaId } from '@/libs/twa_id';

const IDENTIFIER_KEY = 'retailer_id';
const BASE_URL = 'http://89.23.116.18:8080/api/v1';

const _fetch = async (url: string, config?: RequestInit) => {
  const twa_id = getTwaId();
  if (!twa_id) {
    throw new Error('No twa_id');
  }
  const _url = new URL(BASE_URL + url);
  _url.searchParams.set(IDENTIFIER_KEY, twa_id);

  return fetch(_url, config);
};

const _get = async (url: string) => {
  const response = await _fetch(url);
  return response.json();
};

const _post = async (url: string, data: any) => {
  const response = await _fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const $api = {
  get: _get,
  post: _post,
};

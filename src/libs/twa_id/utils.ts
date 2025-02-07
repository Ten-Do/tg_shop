export const TWA_KEY = 'twa_id';

// https://example.com/5/items
export const getTwaId = () => {
  const path = window.location.pathname;
  const segments = path.split('/');
  return segments[1];
};

export const getAbsoluteUrl = (url: string) => {
  return '/' + getTwaId() + url;
};

import { retrieveLaunchParams } from '@telegram-apps/sdk-react';
import { $api } from '../api';

export const makeOrder = async (itemId: string) => {
  const customerTelegram =
    'https://t.me/' + retrieveLaunchParams().tgWebAppData?.user?.username;
  return $api.post('/orders/make-order', {
    good: itemId,
    quantity: 1,
    customerTelegram,
  });
};

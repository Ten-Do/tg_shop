import { Navigation } from '@/features/Navigation/Navigation';
import { TWAID } from '@/libs/twa_id';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <Outlet />
      <Navigation />
      <TWAID />
    </>
  );
};

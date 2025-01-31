import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error/error';

import { pages } from '@/CONFIG.json';
import { Page } from '@/templates/Page/Page';
import { IBlockType } from '@/types';
import { Root } from './Root';
// import { IPageItem } from '@/types';

const routes = Object.keys(pages).map((key) => {
  return {
    path: key,
    element: (
      <Page
        content={pages[key as keyof typeof pages].content as IBlockType[]}
      />
    ),
  };
});

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);

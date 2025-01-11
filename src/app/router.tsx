import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error/error';

import { pages } from '../CONFIG.json';
import { Page } from '../templates/Page/Page';
import { Navigation } from '../features/Navigation/Navigation';
// import { IPageItem } from '../types';

const routes = Object.keys(pages).map((key) => {
  return {
    path: key,
    element: (
      <>
        <Page content={pages[key].content} />
        <Navigation />
      </>
    ),
    errorElement: <ErrorPage />,
  };
});

export const router = createBrowserRouter(routes);

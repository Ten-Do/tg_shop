import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router.tsx';
import { init } from '@telegram-apps/sdk-react';
import './reset.css';
import './index.css';

try {
  init();
} catch {
  console.error('tg init error');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

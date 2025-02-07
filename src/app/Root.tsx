import { Navigation } from '@/features/Navigation/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();

export const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Navigation />
    </QueryClientProvider>
  );
};

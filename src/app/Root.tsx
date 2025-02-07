import { Navigation } from '@/features/Navigation/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, useParams } from 'react-router-dom';

const queryClient = new QueryClient();

export const Root = () => {
  const params = useParams();
  console.log(params);
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Navigation />
    </QueryClientProvider>
  );
};

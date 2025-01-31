import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { TWAIDProvider, useTwaId } from './context';
import { TWA_KEY } from './utils';

const TWAIDBase = () => {
  const location = useLocation();
  const twaId = useTwaId();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get(TWA_KEY) && twaId) {
      setSearchParams({ [TWA_KEY]: twaId });
      console.log('twaId triggered');
    }
  }, [location, twaId]);

  return null;
};

export const TWAID = () => {
  return (
    <TWAIDProvider>
      <TWAIDBase />
    </TWAIDProvider>
  );
};

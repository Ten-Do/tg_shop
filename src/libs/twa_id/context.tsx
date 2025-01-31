import { createContext, useContext } from 'react';
import { TWA_KEY } from './utils';
const searchParams = new URLSearchParams(window.location.search);

const twaId = searchParams.get(TWA_KEY);

const twaIdContext = createContext(twaId);

export interface ITWAIDProviderProps {
  children: React.ReactNode;
}

export const TWAIDProvider = ({ children }: ITWAIDProviderProps) => {
  return (
    <twaIdContext.Provider value={twaId}>{children}</twaIdContext.Provider>
  );
};

export const useTwaId = () => useContext(twaIdContext);

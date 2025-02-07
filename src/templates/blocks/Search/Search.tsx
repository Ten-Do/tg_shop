import { IBlockTypeSearch } from '@/types';
import './Search.scss';
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';
import { SearchScreen } from '@/features/SearchScreen';
import { Categories } from './SearchComponents/Categories/Categories';
import { useSearchParams } from 'react-router-dom';

export const Search: React.FC<{ config: IBlockTypeSearch }> = ({
  config: { input, categories },
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams] = useSearchParams();

  return (
    <div className="Search">
      {input && (
        <button
          className="Search-Button"
          type="button"
          onClick={() => setIsVisible(true)}>
          <p>{searchParams.get('q') || 'Поиск...'}</p>
          <FiSearch size={24} opacity={0.9}/>
        </button>
      )}
      {categories && <Categories />}
      {isVisible && <SearchScreen goBack={() => setIsVisible(false)} />}
    </div>
  );
};

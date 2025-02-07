import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/actions/categories';
import './Categories.scss';

export const Categories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
  if (isLoading || !data?.content.length) return null;
  return (
    <div className="Categories-Container">
      <ul className="Categories">
        {data?.content.map((category) => (
          <li key={category.id}>
            <CategoriesItem category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ICategoriesItemProps {
  category: {
    id: number;
    name: string;
  };
}

const CategoriesItem = ({ category }: ICategoriesItemProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get('category') === String(category.id);
  const cn = 'Categories-Item' + (isActive ? ' Categories-Item_active' : '');
  return (
    <button
      role="link"
      onClick={() => setSearchParams({ category: String(category.id) })}
      className={cn}>
      <p>{category.name}</p>
    </button>
  );
};

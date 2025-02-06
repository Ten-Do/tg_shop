import { useSearchParams } from 'react-router-dom';
import './Categories.scss';

const categories = [
  {
    id: 1,
    name: 'Категория 1',
  },
  {
    id: 2,
    name: 'Категория 2',
  },
  {
    id: 3,
    name: 'Категория 3',
  },
  {
    id: 4,
    name: 'Категория 4',
  },
  {
    id: 5,
    name: 'Категория 5',
  },
];

export const Categories = () => {
  return (
    <div className="Categories-Container">
      <ul className="Categories">
        {categories.map((category) => (
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
  const isActive = searchParams.get('category') === category.name;
  const cn = 'Categories-Item' + (isActive ? ' Categories-Item_active' : '');
  return (
    <button
      role="link"
      onClick={() => setSearchParams({ category: category.name })}
      className={cn}>
      <p> {category.name}</p>
    </button>
  );
};

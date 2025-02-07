import { ItemCardM } from '@/features/ItemCard/ItemCard-M';
import { Link } from 'react-router-dom';
import { IBlockTypeItemGrid } from '@/types';
import './ItemGrid.scss';
import { useQuery } from '@tanstack/react-query';
import { getItems } from '@/actions/items';

interface IItemGridProps {
  config: IBlockTypeItemGrid;
}

export const ItemGrid = ({ config }: IItemGridProps) => {
  const { data } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
  });

  return (
    <div className="ItemGrid-Container">
      {/* <h2 className="ItemGrid-Title">{title}</h2> */}
      <div className="ItemGrid">
        {data?.content.map((item, i) => (
          <Link
            key={i}
            to={'item/' + item.id}
            className="ItemGrid-Item">
            <ItemCardM data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

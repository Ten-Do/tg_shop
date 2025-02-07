import { ItemCardM } from '@/features/ItemCard/ItemCard-M';
import { Link, useSearchParams } from 'react-router-dom';
import './ItemGrid.scss';
import { useQuery } from '@tanstack/react-query';
import { getItems } from '@/actions/items';
import { Loader } from '@/components/Loader';

export const ItemGrid = () => {
  const [searchParams] = useSearchParams();
  const { data, isFetching } = useQuery({
    queryKey: ['items', searchParams.get('category'), searchParams.get('q')],
    queryFn: () => getItems(searchParams),
  });
  if (isFetching) return <Loader />;
  if (!data?.content.length) return <p style={{ textAlign: 'center', color: 'var(--fg-color-muted)', marginTop: '32px' }}>Ничего не нашли</p>;
  return (
    <div className="ItemGrid-Container">
      {/* <h2 className="ItemGrid-Title">{title}</h2> */}
      <div className="ItemGrid">
        {data?.content.map((item, i) => (
          <Link key={i} to={'item/' + item.id} className="ItemGrid-Item">
            <ItemCardM data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

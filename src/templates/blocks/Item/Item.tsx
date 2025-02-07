import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../../components/Loader';
import { ItemImageCarousel } from './Item.components/Item-ImageCarousel/ItemImageCarousel';
import { ItemActionButton } from './Item.components/Item-ActionButtons/ItemActionButton';
// import { Accordeon } from '@/components/Accordeon';
// import { InfoDivided } from '@/components/InfoDivided/InfoDivided';
import { ItemTags } from './Item.components/Item-Tags/ItemTags';
import { FiArrowLeft } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';
import { getItemById } from '@/actions/items';

export const Item: React.FC = () => {
  const navigate = useNavigate();
  const itemId = useParams().id;
  const { data, isLoading } = useQuery({
    queryKey: ['items', itemId],
    queryFn: () => getItemById(itemId),
  });
  console.log(data)
  if (isLoading || !data) return <Loader />;
  return (
    <div className="Item">
      <button onClick={() => navigate(-1)} className="Item-Back">
        <FiArrowLeft size={32} opacity={0.9} />
      </button>
      <ItemImageCarousel
        images={data.media.map((media) => media.storageFileName) || []}
      />
      <div className="Item-MainInfo">
        {/* name */}
        <p className="Item-Name">{data.name}</p>
        {/* price */}
        <p className="Item-Price">{data.price}&#x20bd;</p>
        {/* description */}
        {/* <p className="Item-Description">{data.description}</p> */}
      </div>
      <div style={{ marginTop: '20px' }}>
        <ItemTags items={data.categories.map((tag) => ({ label: tag.name }))} />
      </div>
      {/* <div style={{ marginTop: '20px' }}>
        <p style={{ marginBottom: '10px', font: 'var(--font-heading-h3)' }}>
          Дополнительная информация
        </p>
        <InfoDivided label="Категория" value={data.category} />
        <InfoDivided label="Статус" value={data.status} />
        <InfoDivided label="Категория" value={data.category} />
        <InfoDivided label="Статус" value={data.status} />
        <InfoDivided label="Категория" value={data.category} />
        <InfoDivided label="Статус" value={data.status} />
        <InfoDivided label="Категория" value={data.category} />
        <InfoDivided label="Статус" value={data.status} />
      </div> */}
      {/* <div style={{ marginTop: '20px' }}>
        <Accordeon
          items={[
            {
              label: 'Описание',
              value: data.description,
            },
            {
              label: 'Характеристики',
              value: data.description,
            },
            {
              label: 'Доставка',
              value: data.description,
            },
            {
              label: 'Возврат',
              value: data.description,
            },
          ]}
        />
      </div> */}

      {/* <Loader /> */}
      {/* {isFetching ? (
        <Loader />
      ) : error ? (
        <p>Ошибка при загрузке</p>
      ) : (
        extendedData &&
        order?.map(
          (key) =>
            key in revertContextDict && (
              <ItemBlock
                key={key}
                viewType={key}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                item={extendedData[revertContextDict[key]]}
              />
            ),
        )
      )} */}
      {/* buttons */}
      <ItemActionButton />
    </div>
  );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleButton } from '@/components/CircleButton';
// import { Loader } from '../../../components/Loader';
import { ItemImageCarousel } from './Item.components/Item-ImageCarousel/ItemImageCarousel';
import { ItemActionButton } from './Item.components/Item-ActionButtons/ItemActionButton';
import { Accordeon } from '@/components/Accordeon';
import { InfoDivided } from '@/components/InfoDivided/InfoDivided';
import { ItemTags } from './Item.components/Item-Tags/ItemTags';

// type IITemInfoKeys = keyof IItemFullInfo;
const data = {
  id: '4',
  status: 'Active',
  name: 'Adidas Sneakers White Color',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae deleniti cupiditate omnis nam, voluptates fugiat accusamus tempore consequuntur incidunt! Dolores perspiciatis reiciendis nesciunt cum dolorum, aut voluptate officia. Quos!',
  category: 1,
  price: {
    value: '5430',
    currency: 'RUB',
  },
  tags: ['adidas', 'summer', 'sport+'],
  photos: {
    logo: 'https://i.pinimg.com/originals/a0/1c/49/a01c493ce94cc0132af22f6e98c47945.jpg',
    extended: [
      'https://avatars.yandex.net/get-music-content/1781407/0e4d452f.a.13148537-1/m1000x1000?webp=false',
      'https://i.pinimg.com/originals/a0/1c/49/a01c493ce94cc0132af22f6e98c47945.jpg',
    ],
  },
};

export const Item: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="Item">
      <CircleButton
        onClick={() => navigate(-1)}
        label="Назад"
        className="Item-Back"
        icon="/css/arrow-left.svg"
      />
      <ItemImageCarousel images={data.photos?.extended || []} />
      <div className='Item-MainInfo'>
        {/* name */}
        <p className='Item-Name'>{data.name}</p>
        {/* price */}
        <p className='Item-Price'>{data.price.value} {data.price.currency}</p>
        {/* buttons */}
        <ItemActionButton />
        {/* description */}
        <p className='Item-Description'>{data.description}</p>
        </div>
<div style={{ marginTop: '20px' }}>
  {/* Tags */}
  <ItemTags items={data.tags.map((tag) => ({ label: tag }))} />
</div>
<div style={{ marginTop: '20px' }}>
  <p style={{ marginBottom: '10px', font: 'var(--font-heading-h3)' }}>Дополнительная информация</p>
  <InfoDivided label="Категория" value={data.category} />
  <InfoDivided label="Статус" value={data.status} />
  <InfoDivided label="Категория" value={data.category} />
  <InfoDivided label="Статус" value={data.status} />
  <InfoDivided label="Категория" value={data.category} />
  <InfoDivided label="Статус" value={data.status} />
  <InfoDivided label="Категория" value={data.category} />
  <InfoDivided label="Статус" value={data.status} />
</div>
<div style={{ marginTop: '20px' }}>

<Accordeon items={[
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
]} />
</div>

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
    </div>
  );
};

// const contextDict: { [key in IITemInfoKeys]?: IItemBlockType } = {
//   mainInfo: 'ITEM_MainInfo',
//   variants: 'ITEM_Variants',
//   tags: 'ITEM_Tags',
//   details: 'ITEM_Details',
//   additional: 'ITEM_AdditionalInfo',
//   images: 'ITEM_ImagesCarousel',
//   contacts: 'ITEM_Contacts',
// };

// const revertContextDict: { [key in IItemBlockType]?: IITemInfoKeys } = {
//   ITEM_MainInfo: 'mainInfo',
//   ITEM_Variants: 'variants',
//   ITEM_Tags: 'tags',
//   ITEM_Details: 'details',
//   ITEM_AdditionalInfo: 'additional',
//   ITEM_ImagesCarousel: 'images',
//   ITEM_Contacts: 'contacts',
// };


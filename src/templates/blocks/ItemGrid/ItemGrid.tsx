import Masonry from 'react-layout-masonry';
import './ItemGrid.scss';
import { ItemCardM } from '../../../features/ItemCard/ItemCard-M';
import { Link } from 'react-router-dom';
import { IBlockTypeItemGrid } from '../../../types';
import { buildUrlFromTemplate } from '../../../features/shared/utils/buildUrlFromTemplate';

const data = [
  {
    id: '1',
    status: 'Active',
    name: 'Armani Shoes Black',
    description: 'General information: ...',
    category: 1,
    price: {
      value: '4750',
      currency: 'RUB',
    },
    tags: [
      'black',
      'armani',
      'winter',
      'black',
      'armani',
      'winter',
      'black',
      'armani',
      'winter',
    ],
    photos: {
      logo: 'https://i.pinimg.com/originals/a0/1c/49/a01c493ce94cc0132af22f6e98c47945.jpg',
      extended: [
        'https://avatars.yandex.net/get-music-content/1781407/0e4d452f.a.13148537-1/m1000x1000?webp=false',
        'https://i.pinimg.com/originals/a0/1c/49/a01c493ce94cc0132af22f6e98c47945.jpg',
      ],
    },
  },
  {
    id: '2',
    status: 'Active',
    name: 'Adidas Sneakers White Color',
    description: 'General information: ...',
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
  },
  {
    id: '3',
    status: 'Active',
    name: 'Adidas Sneakers White Color',
    description: 'General information: ...',
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
  },
  {
    id: '4',
    status: 'Active',
    name: 'Adidas Sneakers White Color',
    description: 'General information: ...',
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
  },
];

interface IItemGridProps {
  config: IBlockTypeItemGrid;
}

export const ItemGrid = ({ config }: IItemGridProps) => {
  return (
    <div className="ItemGrid-Container">
      {/* <h2 className="ItemGrid-Title">{title}</h2> */}
      <div className="ItemGrid">
        <ItemGridApi config={config} />
      </div>
    </div>
  );
};

const ItemGridApi = ({ config }: IItemGridProps) => {
  return (
    <Masonry columns={2} gap={8}>
      {data.map((item, i) => (
        <Link
          to={buildUrlFromTemplate(config.item?.link_to, item)}
          className="ItemGrid-Item">
          <ItemCardM key={i} data={item} />
        </Link>
      ))}
    </Masonry>
  );
};

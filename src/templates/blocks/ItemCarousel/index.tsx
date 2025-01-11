import { ItemCardL } from '../../../features/ItemCard/ItemCard-L';
import { IBlockTypeItemCarousel } from '../../../types';
import './ItemCarousel.scss';

export interface IItemCarouselProps {
  config: IBlockTypeItemCarousel;
}

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

export const ItemCarousel = ({ config }: IItemCarouselProps) => {
  return (
    <div className="ItemCarousel-Container">
      <h2 className="ItemCarousel-Heading">{config.heading}</h2>
      <div className="ItemCarousel">
        {data.map((item) => (
          <div key={item.id} className="ItemCarousel-Item">
            <ItemCardL data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

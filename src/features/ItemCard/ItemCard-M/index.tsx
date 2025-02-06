import { IItemCardProps } from '../types';
import './ItemCardM.scss';
import { Carousel } from '@/components/Carousel';

export const ItemCardM = ({ data }: IItemCardProps) => {
  const images = [data.photos.logo, ...data.photos.extended].map((image, i) => (
    <div key={i} className="ItemCardM-ImageCarouselItem">
      <img src={image} alt="" />
    </div>
  ));
  return (
    <div className="ItemCardM">
      <div className="ItemCardM-ImageCarouselContainer">
        <Carousel slides={images} options={{ loop: true }} />
      </div>
      <div className="ItemCardM-Info">
        <p className="ItemCardM-Price">
          {data.price.value}&#x20bd;
        </p>
        <p className="ItemCardM-Name">{data.name}</p>
      </div>
    </div>
  );
};

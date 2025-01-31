import { IItemCardProps } from '../types';
import './ItemCardM.scss';

export const ItemCardM = ({ data }: IItemCardProps) => {
  const images = [data.photos.logo, ...data.photos.extended];
  return (
    <div className="ItemCardM">
      <div className="ItemCardM-ImageCarouselContainer">
        <div className="ItemCardM-ImageCarousel">
          {images.map((image, i) => (
            <div key={i} className="ItemCardM-ImageCarouselItem">
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="ItemCardM-Tags">
          {data.tags.slice(0, 3).map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
      <div className="ItemCardM-Info">
        <p className="ItemCardM-Price">
          {data.price.value} {data.price.currency}
        </p>
        <p className="ItemCardM-Name">{data.name}</p>
      </div>
    </div>
  );
};

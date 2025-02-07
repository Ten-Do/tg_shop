import { IItemCardProps } from '../types';
import './ItemCardM.scss';
import { Carousel } from '@/components/Carousel';
import { FiImage } from 'react-icons/fi';

export const ItemCardM = ({ data }: IItemCardProps) => {
  const images = data.media.map((media, i) => (
    <div key={i} className="ItemCardM-ImageCarouselItem">
      <img src={media.storageFileName} alt="" />
    </div>
  ));
  return (
    <div className="ItemCardM">
      <div className="ItemCardM-ImageCarouselContainer">
        {Boolean(images.length > 0) ? (
          <Carousel slides={images} options={{ loop: true }} />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              minHeight: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FiImage size={40} opacity={0.7} />
          </div>
        )}
      </div>
      <div className="ItemCardM-Info">
        <p className="ItemCardM-Price">{data.price}&#x20bd;</p>
        <p className="ItemCardM-Name">{data.name}</p>
      </div>
    </div>
  );
};

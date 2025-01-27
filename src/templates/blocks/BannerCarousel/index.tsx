import { IBlockTypeBannerCarousel } from '@/types';
import './BannerCarousel.scss';

export interface IBannerCarouselProps {
  config: IBlockTypeBannerCarousel;
}

export const BannerCarousel = ({ config }: IBannerCarouselProps) => {
  return (
    <div className="BannerCarousel-Container">
      <h2 className="BannerCarousel-Heading">{config.heading}</h2>
      <div className="BannerCarousel">
        <div className="BannerCarousel-Item">
          <img
            src="https://i.pinimg.com/originals/7c/30/27/7c3027dffced4c6b6180f1108bb76184.jpg"
            alt="image"
          />
        </div>
        <div className="BannerCarousel-Item">
          <img
            src="https://i.pinimg.com/originals/7c/30/27/7c3027dffced4c6b6180f1108bb76184.jpg"
            alt="image"
          />
        </div>
        <div className="BannerCarousel-Item">
          <img
            src="https://i.pinimg.com/originals/7c/30/27/7c3027dffced4c6b6180f1108bb76184.jpg"
            alt="image"
          />
        </div>
        <div className="BannerCarousel-Item">
          <img
            src="https://i.pinimg.com/originals/7c/30/27/7c3027dffced4c6b6180f1108bb76184.jpg"
            alt="image"
          />
        </div>
        <div className="BannerCarousel-Item">
          <img
            src="https://i.pinimg.com/originals/7c/30/27/7c3027dffced4c6b6180f1108bb76184.jpg"
            alt="image"
          />
        </div>
        <div className="BannerCarousel-Item">
          <img
            src="https://i.pinimg.com/originals/7c/30/27/7c3027dffced4c6b6180f1108bb76184.jpg"
            alt="image"
          />
        </div>
        <div className="BannerCarousel-Item">
          <img
            src="https://i.pinimg.com/originals/7c/30/27/7c3027dffced4c6b6180f1108bb76184.jpg"
            alt="image"
          />
        </div>
        <div className="BannerCarousel-Item">
          <img
            src="https://i.pinimg.com/originals/7c/30/27/7c3027dffced4c6b6180f1108bb76184.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

import './ItemCardL.scss';

interface IItem {
  id: string;
  name: string;
  price: {
    value: string;
    currency: string;
  };
  photos: {
    logo: string;
    extended: string[];
  };
  tags: string[];
  description: string;
  category: number;
  status: string;
}

interface IItemCardLProps {
  data: IItem;
}

export const ItemCardL = ({ data }: IItemCardLProps) => {
  const images = [data.photos.logo, ...data.photos.extended];
  return (
    <div className="ItemCardL">
      <div className="ItemCardL-ImageCarousel">
        {images.map((image, i) => (
          <div key={i} className="ItemCardL-ImageCarouselItem">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
      <div className="ItemCardL-Info">
        <p className="ItemCardL-Name">{data.name}</p>
        <p className="ItemCardL-Price">
          {data.price.value} {data.price.currency}
        </p>
        <div className="ItemCardL-Tags">
          {data.tags.slice(0, 3).map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

import { useRef, useState, useEffect } from 'react';
import '../../Item.scss';
interface IItemImageCarouselProps {
  images: string[];
}

export const ItemImageCarousel = ({ images }: IItemImageCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate current index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const { scrollLeft, clientWidth } = carouselRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      setCurrentIndex(newIndex);
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener('scroll', handleScroll);

    return () => {
      carousel?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToImage = (index: number) => {
    if (!carouselRef.current) return;

    const { clientWidth } = carouselRef.current;
    carouselRef.current.scrollTo({
      left: index * clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="Item-ImageCarouselContainer">
      <button
        onClick={() => scrollToImage(Math.max(currentIndex - 1, 0))}
        className="Item-ImageCarouselButton Item-ImageCarouselButtonLeft"
        aria-label="Перейти к предыдущей картинке"
      />
      <div className="Item-ImageCarousel" ref={carouselRef}>
        {images.map((image, i) => (
          <img key={i} src={image} alt="" className="Item-ImageCarouselItem" />
        ))}
      </div>
      <button
        onClick={() =>
          scrollToImage(Math.min(currentIndex + 1, images.length - 1))
        }
        className="Item-ImageCarouselButton Item-ImageCarouselButtonRight"
        aria-label="Перейти к следующей картинке"
      />
      <div className="Item-ImageCarouselCounter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

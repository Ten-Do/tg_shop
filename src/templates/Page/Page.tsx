import { Header } from '../../features/Header/Header';
import { IBlockType } from '../../types';
import { BannerCarousel } from '../blocks/BannerCarousel';
import { ItemCarousel } from '../blocks/ItemCarousel';
import './Page.scss';

export interface IPageProps {
  content: IBlockType[];
}
export const Page = ({ content }: IPageProps) => {
  const pageBlocks = content.map((item, i) => {
    if (item.block_type === 'HEADER') {
      return <Header key={i} />;
    } else if (item.block_type === 'BANNER_CAROUSEL') {
      return <BannerCarousel key={i} config={item} />;
    } else if (item.block_type === 'ITEM_GRID') {
      return <div key={i}>ITEM_GRID</div>;
    } else if (item.block_type === 'ITEM_CAROUSEL') {
      return <ItemCarousel key={i} config={item} />;
    }
  });

  return <div className="Page">{pageBlocks}</div>;
};

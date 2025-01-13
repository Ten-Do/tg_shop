import { Link, useLocation } from 'react-router-dom';
import CartSVG from '../../Navigation.assets/shopping_cart.svg?react';
import HeartSVG from '../../Navigation.assets/favorite.svg?react';
import CatalogSVG from '../../Navigation.assets/catalog.svg?react';
import HomeSVG from '../../Navigation.assets/home.svg?react';
import { INavigationOption } from '../../../../types';
import './Item.scss';

interface NavigationItemProps {
  path: string;
  icon: INavigationOption;
}

const getIcon = (icon: INavigationOption) => {
  switch (icon) {
    case 'HOME':
      return <HomeSVG />;
    case 'CATALOG':
      return <CatalogSVG />;
    case 'CART':
      return <CartSVG />;
    case 'FAVORITE':
      return <HeartSVG />;
  }
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
  path,
  icon,
}) => {
  const location = useLocation();

  return (
    <Link
      to={path}
      className={
        'Navigation-Item' +
        (location.pathname === path ? ' Navigation-Item_active' : '')
      }>
      {getIcon(icon)}
    </Link>
  );
};

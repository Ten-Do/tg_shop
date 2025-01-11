import { navigation } from '../../CONFIG.json';
import { NavigationItem } from './Navigation.components/Item';
import { INavigationOption } from '../../types';
import './Navigation.scss';

const items = Object.entries(navigation).map(([key, value]) => (
  <NavigationItem key={key} path={value} icon={key as INavigationOption} />
));

export const Navigation = () => {
  return (
    <div className="Navigation-Plaseholder">
      <div className="Navigation">{items}</div>
    </div>
  );
};

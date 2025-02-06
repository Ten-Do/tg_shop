import config from '@/CONFIG.json';
import { NavigationItem } from './Navigation.components/Item';
import { INavigationOption } from '@/types';
import './Navigation.scss';

const items =
  'navigation' in config &&
  Object.entries(config.navigation as Record<INavigationOption, string>).map(
    ([key, value]) => (
      <NavigationItem key={key} path={value} icon={key as INavigationOption} />
    ),
  );

export const Navigation = () => {
  if (!('navigation' in config)) return null;
  return (
    <div className="Navigation-Plaseholder">
      <div className="Navigation">{items}</div>
    </div>
  );
};

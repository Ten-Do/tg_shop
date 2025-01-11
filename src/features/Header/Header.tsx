import { MenuBurgerButton } from '../Menu';
import { logo } from '../../CONFIG.json';
import './Header.scss';
export const Header = () => {
  return (
    <div className="Header">
      <div>
        <img
          role="presentation"
          src={logo.src}
          alt="Логотип"
          width={logo.w}
          height={logo.h}
        />
      </div>
      <MenuBurgerButton />
    </div>
  );
};

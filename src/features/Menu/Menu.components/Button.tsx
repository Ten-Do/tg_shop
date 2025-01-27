import burgerMenuSVG from '@/assets/icons/burger_menu.svg';

export const Button = () => {
  return (
    <button aria-label="Открыть меню">
      <img src={burgerMenuSVG} alt="" role="presentation" />
    </button>
  );
};

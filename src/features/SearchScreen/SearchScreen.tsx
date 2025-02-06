import { createPortal } from 'react-dom';
import './SearchScreen.scss';
import { useEffect } from 'react';

export interface ISearchScreenProps {
  autofocus?: boolean;
  goBack: () => void;
}

export const SearchScreen = ({
  autofocus = true,
  goBack,
}: ISearchScreenProps) => {
  useEffect(() => {
    // disable scroll under SearchScreen
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return createPortal(
    <div className="SearchScreen-Container">
      <div className="SearchScreen-Paranja" onClick={goBack} />
      <div
        className="SearchScreen-Content"
        onClick={(e) => e.stopPropagation()}>
        <div className="SearchScreen">
          <input
            className="SearchScreen-Input"
            type="text"
            placeholder="Поиск..."
            ref={(input) => autofocus && input?.focus()}
          />
        </div>
      </div>
    </div>,
    document.body,
    'SearchScreen',
  );
};

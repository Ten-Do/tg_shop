import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchScreen.scss';

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

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.q.value;
    if (!q) {
      const sp = new URLSearchParams(searchParams);
      sp.delete('q');
      setSearchParams(sp);
    } else {
      setSearchParams({ q: e.currentTarget.q.value || null });
    }
    goBack();
  };
  return createPortal(
    <div className="SearchScreen-Container">
      <div className="SearchScreen-Paranja" onClick={goBack} />
      <form
        onSubmit={handleSubmit}
        className="SearchScreen-Content"
        onClick={(e) => e.stopPropagation()}>
        <div className="SearchScreen">
          <div className="SearchScreen-InputContainer">
            <input
              name="q"
              className="SearchScreen-Input"
              type="search"
              placeholder="Поиск..."
              defaultValue={searchParams.get('q') || ''}
              ref={(input) => autofocus && input?.focus()}
            />
            <button className="SearchScreen-SubmitButton" type="submit">
              Найти
            </button>
          </div>
        </div>
      </form>
    </div>,
    document.body,
    'SearchScreen',
  );
};

import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message: string };

  return (
    <div id="error-page">
      <p>Приносим извинения, что-то пошло не так.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

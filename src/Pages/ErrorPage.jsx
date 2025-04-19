import { useRouteError } from "react-router";
function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
      </header>
      <main>
        <h1>Whoops! Something went wrong!</h1>
      </main>
    </>
  );
}

export default ErrorPage;
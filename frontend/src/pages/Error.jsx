import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  let title = "An error Occured";
  let message = "Something went wrong";

  if (error.staus === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "not found";
    message = "could not find page";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;

import { NextPage, NextPageContext } from 'next';
import NotFoundError from './utils/NotFoundError';

const ErrorPage: NextPage<{ statusCode: number }> = ({ statusCode }) => {
  if (statusCode === 404) {
    return <NotFoundError />;
  }

  // Handle other statuses or provide a generic error message
  return (
    <p>An error {statusCode} occurred on server</p>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;

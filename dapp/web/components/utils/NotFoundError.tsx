// imports
import Link from 'next/link';
import { NextPage } from 'next';
import styles from './NotFoundError.module.css';

const NotFoundError: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link href="/">
        <a>Go back to the homepage</a>
      </Link>
    </div>
  );
};

export default NotFoundError;

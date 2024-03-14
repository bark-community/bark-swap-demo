// AppLayout.tsx

import { ReactNode } from 'react';
import Link from 'next/link';
import { WalletButton } from '../solana/solana-provider';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: ReactNode;
  logoSrc?: string;
}

const FooterContent = () => (
  <p>
    © 2024 BARK Protocol. All rights reserved{' '}
    <a
      href="https://swap.barkprotocol.net/legals/terms-of-use"
      target="_blank"
      rel="noopener noreferrer"
    >
      Terms of Use
    </a>
  </p>
);

export function AppLayout({ children, logoSrc = '/logo-dark.svg' }: AppLayoutProps) {
  const renderLogo = !!logoSrc;

  return (
    <div className={styles.container}>
      <header className={`${styles.flex} ${styles.header}`}>
        {renderLogo && (
          <div>
            <Link href="/" passHref>
              <a>
                <img className={styles.logo} src={logoSrc} alt="Bark Logo" />
              </a>
            </Link>
          </div>
        )}
        <div>
          <WalletButton />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      {children && (
        <footer className={styles.footer}>
          <aside>
            <FooterContent />
          </aside>
        </footer>
      )}
    </div>
  );
}

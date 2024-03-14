import { ReactNode } from 'react';
import Link from 'next/link';
import { WalletButton } from '@/components/solana/solana-provider'; // Adjust the path as needed
import styles from './AppLayout.module.css'; // Assuming you're using CSS modules

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo-dark.svg" height={84} alt="BARK Logo" />
          </Link>
        </div>
        <div className={styles.walletButton}>
          <WalletButton />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>
          © 2024 BARK Protocol. All rights reserved.{' '}
          <a
            href="https://swap.barkprotocol.net/legals/terms-of-use"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        </p>
      </footer>
    </div>
  );
}

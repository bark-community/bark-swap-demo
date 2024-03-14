import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ReactNode } from 'react';

import Link from 'next/link';

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 12px',
        }}
      >
        <div>
          <Link href="/">
            <img src="/assets/bark-dark.png" height={24} alt="BARK Logo" />
          </Link>
        </div>
        <div>
          <WalletMultiButton />
        </div>
      </div>
      <div style={{ flexGrow: 1, padding: '6px' }}>{children}</div>
      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px 10px',
        }}
      >
        <aside>
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
        </aside>
      </footer>
    </div>
  );
}

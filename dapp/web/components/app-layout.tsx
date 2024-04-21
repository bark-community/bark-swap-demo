import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ReactNode } from 'react';
import Link from 'next/link';

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body style={{ margin: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
                <a>
                  <img src="/logo.svg" height={24} alt="BARK Logo" />
                </a>
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
              backgroundColor: '#f5f5f6',
            }}
          >
            <aside>
              <p>
                © {new Date().getFullYear()} BARK Protocol. All rights reserved{' '}
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
      </body>
    </html>
  );
}

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ReactNode } from 'react';
import Link from 'next/link'; // Reintroduce Link for navigational purposes

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F7FAFC' }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Link href="/" passHref>
          <a style={{ textDecoration: 'none', color: '#2B6CB0', fontWeight: 'bold', fontSize: '24px' }}>
            <h3 style={{ margin: 0 }}>BarkSwap</h3>
          </a>
        </Link>
        <div>
          <WalletMultiButton style={{ fontWeight: 'bold', backgroundColor: '#3182CE', color: '#FFFFFF' }} />
        </div>
      </header>
      <main style={{ flex: 1, padding: '12px', overflow: 'auto' }}>
        {children}
      </main>
      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 10px',
          backgroundColor: '#EDF2F7',
          borderTop: '1px solid #E2E8F0',
        }}
      >
        <p style={{ margin: 0, fontSize: '14px', color: '#4A5568' }}>
          © {new Date().getFullYear()} BarkSwap. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

// Import necessary React and Next.js elements
import { ReactNode } from 'react';
import Link from 'next/link';
import { WalletButton } from '../solana/solana-provider';

// Define the interface for the props to ensure type safety
interface AppLayoutProps {
  children: ReactNode;
}

// The AppLayout functional component
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div style={{ margin: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" passHref legacyBehavior>
            <a aria-label="BarkSwap Home" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.svg" alt="BarkSwap Logo" style={{ height: '48px', marginRight: '8px' }} />
              <h4 style={{ margin: 0 }}></h4>
            </a>
          </Link>
        </div>
        <WalletButton />
      </header>
      <section style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
        <h1>Welcome to BarkSwap</h1>
        <p>The premier platform for trading tokens with ease and security.</p>
      </section>
      <main style={{ flexGrow: 1, padding: '8px' }}>
        {children}
      </main>
      <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 10px', backgroundColor: '#f5f6f6' }}>
        <aside>
          <p>
            © {new Date().getFullYear()} BARK Protocol. All rights reserved. 
            <Link href="https://swap.barkprotocol.net/legals/terms-of-use" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                Terms of Use
              </a>
            </Link>
          </p>
        </aside>
      </footer>
    </div>
  );
}

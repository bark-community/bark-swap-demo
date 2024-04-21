import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';

export function NavBar() {
  return (
    <nav
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
        <a style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '24px' }}>
        <a aria-label="BarkSwap Home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/bark-logo.svg" alt="BarkSwap Logo" style={{ height: '48px', marginRight: '10px' }} />
        </a>
      </Link>
      <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link href="/" passHref>
            <a style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>Home</a>
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/swap" passHref>
            <a style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>Swap</a>
          </Link>
        </li>
      </ul>
      <div>
        <WalletMultiButton style={{ fontWeight: 'bold', backgroundColor: '#333', color: '#FFFFFF' }} />
      </div>
    </nav>
  );
}

import { ReactNode } from 'react';
import Link from 'next/link';
import { WalletButton } from '../solana/solana-provider';
import { FaTwitter, FaMedium, FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div style={{ margin: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 24px', backgroundColor: '#ffffff' }}>
        <Link href="/" aria-label="BarkSwap Home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.svg" alt="BarkSwap Logo" style={{ height: '48px', marginRight: '10px' }} />
        </Link>
        <WalletButton />
      </header>
      <section style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f5f6f6' }}>
        <h3>Welcome</h3>
        <h1>BarkSwap</h1>
        <p>The premier platform for trading tokens with ease and security.</p>
        <p>Powered by Jupiter</p>
      </section>
      <main style={{ flexGrow: 1, padding: '6px' }}>
        {children}
      </main>
      <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px 10px', backgroundColor: '#f5f6f6' }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Follow Us</p>
          <SocialMediaLinks />
        </div>
        <aside>
          <p>
            © {new Date().getFullYear()} BARK Protocol. All rights reserved.
            <Link href="https://swap.barkprotocol.net/legals/terms-of-use" aria-label="Terms of Use" style={{ textDecoration: 'none', marginLeft: '6px' }}>
              Terms of Use
            </Link>
          </p>
        </aside>
      </footer>
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Link href="https://twitter.com/bark_protocol" aria-label="Twitter"><FaTwitter size="24px" style={{ marginRight: '8px' }} /></Link>
      <Link href="https://medium.com/@barkprotocol" aria-label="Medium"><FaMedium size="24px" style={{ marginRight: '8px' }} /></Link>
      <Link href="https://discord.gg/qaEMMeNc" aria-label="Discord"><FaDiscord size="24px" style={{ marginRight: '8px' }} /></Link>
      <Link href="https://github.com/bark-community" aria-label="GitHub"><FaGithub size="24px" style={{ marginRight: '8px' }} /></Link>
      <Link href="https://t.me/+EnczyzzKS_k2NmQ0" aria-label="Telegram"><FaTelegram size="24px" style={{ marginRight: '8px' }} /></Link>
    </div>
  );
}

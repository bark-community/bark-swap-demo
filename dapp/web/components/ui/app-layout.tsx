import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WalletButton } from '../solana/solana-provider';
import { FaTwitter, FaDiscord, FaMedium, FaTelegram, FaGithub } from 'react-icons/fa';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ margin: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 50px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0' }}>
          <Link href="/" passHref style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333' }}>
            <div style={{ position: 'relative', width: 200, height: 48 }}>
              <Image src="/bark-logo.svg" alt="BarkSwap Logo" layout="fill" />
            </div>
            v1.0
          </Link>
          <WalletButton style={{ backgroundColor: '#333', color: '#fff' }} />
        </div>
        <nav style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '10px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
          <Link href="/swap" passHref style={{ padding: '10px 15px', textDecoration: 'none', color: '#2D3748', fontWeight: '500' }}>Swap</Link>
          <Link href="/pool" passHref style={{ padding: '10px 15px', textDecoration: 'none', color: '#2D3748', fontWeight: '500' }}>Pool</Link>
          <Link href="/stake" passHref style={{ padding: '10px 15px', textDecoration: 'none', color: '#2D3748', fontWeight: '500' }}>Stake</Link>
          <Link href="/about" passHref style={{ padding: '10px 15px', textDecoration: 'none', color: '#2D3748', fontWeight: '500' }}>About</Link>
          <Link href="/faq" passHref style={{ padding: '10px 15px', textDecoration: 'none', color: '#2D3748', fontWeight: '500' }}>FAQ</Link>
        </nav>
      </header>
      <section style={{ padding: '40px', textAlign: 'center', backgroundColor: '#fffff', color: '#27272a' }}>
        <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', margin: '0 0 20px' }}>Empowering Change through Decentralized Trading</h1>
        <p style={{ fontSize: '1.2em', margin: '10px 0 20px' }}>
          BarkSwap isn't just a platform for trading tokens; it's a movement for positive impact. With every transaction, a small fee is included, dedicated to funding initiatives that benefit environmental causes and social development projects.
        </p>
        <p style={{ fontSize: '1em', fontStyle: 'italic' }}>
          Trade securely and effortlessly, knowing that your actions contribute to a better world.
        </p>
      </section>
      <main style={{ flexGrow: 1, padding: '20px' }}>
        {children}
      </main>
      <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 50px', backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>Connect with us:</span>
          <div style={{ marginTop: '14px', color: '#D1D5DB' }}>
            <a href="https://twitter.com/bark_protocol" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}><FaTwitter color="#D1D5DB" /></a>
            <a href="https://discord.gg/H9en8eHzn2" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}><FaDiscord color="#D1D5DB" /></a>
            <a href="https://medium.com/@barkprotocol" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}><FaMedium color="#D1D5DB" /></a>
            <a href="https://t.me/+EnczyzzKS_k2NmQ0" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}><FaTelegram color="#D1D5DB" /></a>
            <a href="https://github.com/bark-community" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}><FaGithub color="#D1D5DB" /></a>
          </div>
        </div>
        <aside style={{ textAlign: 'center', color: '#A0AEC0' }}>
          <p style={{ fontSize: '0.9em' }}>
            © {currentYear} BARK Protocol. All rights reserved.
            <Link href="/terms-of-use" passHref style={{ textDecoration: 'none', color: '#CBD5E0' }}>Terms of Use</Link>
          </p>
        </aside>
      </footer>
    </div>
  );
}

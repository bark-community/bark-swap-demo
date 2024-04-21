import { ReactNode } from 'react';
import Link from 'next/link';
import { WalletButton } from '../solana/solana-provider';
import { FaTwitter, FaDiscord, FaMedium, FaTelegram, FaGithub } from 'react-icons/fa'; // Import icons

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div style={{ margin: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 50px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0' }}>
          <Link href="/" passHref>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <img src="/bark-logo.svg" alt="BarkSwap Logo" style={{ height: '48px', marginRight: '10px' }} />
              <span style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}></span>
            </div>
          </Link>
          <WalletButton style={{ backgroundColor: '#333', color: '#fff' }} />
        </div>
        <nav style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '10px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
          <Link href="/swap" passHref><div style={{ padding: '10px 15px', cursor: 'pointer', color: '#2D3748', fontWeight: '500' }}>Swap</div></Link>
          <Link href="/pool" passHref><div style={{ padding: '10px 15px', cursor: 'pointer', color: '#2D3748', fontWeight: '500' }}>Pool</div></Link>
          <Link href="/stake" passHref><div style={{ padding: '10px 15px', cursor: 'pointer', color: '#2D3748', fontWeight: '500' }}>Stake</div></Link>
          <Link href="/about" passHref><div style={{ padding: '10px 15px', cursor: 'pointer', color: '#2D3748', fontWeight: '500' }}>About</div></Link>
          <Link href="/faq" passHref><div style={{ padding: '10px 15px', cursor: 'pointer', color: '#2D3748', fontWeight: '500' }}>FAQ</div></Link>
        </nav>
      </header>
      <section style={{ padding: '40px', textAlign: 'center', backgroundColor: '#F5F5F6', color: '#27272a' }}>
        <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', margin: '0 0 20px' }}>Empowering Change through Decentralized Trading</h1>
        <p style={{ fontSize: '1.2em', margin: '10px 0 20px' }}>
          BarkSwap isn’t just a platform for trading tokens; it's a movement for positive impact. Each transaction includes a small fee, 
          used to fund initiatives that benefit environmental causes and social development projects.
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
            © {new Date().getFullYear()} BARK Protocol. All rights reserved.
            <Link href="https://swap.barkprotocol.net/legals/terms-of-use" passHref>
              <div style={{ textDecoration: 'none', color: '#CBD5E0', cursor: 'pointer' }}>
                Terms of Use
              </div>
            </Link>
          </p>
        </aside>
      </footer>
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { AppLayout } from '@/components/ui/app-layout';

// Define metadata for the page
const metadata = {
  title: 'bark-swap',
  description: 'Decentralized Exchange',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script src="https://terminal.jup.ag/main-v2.js" data-preload></script>
      </Head>
      <ClusterProvider>
        <SolanaProvider>
          <AppLayout>{children}</AppLayout>
        </SolanaProvider>
      </ClusterProvider>
    </>
  );
}

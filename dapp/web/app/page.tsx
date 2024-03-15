'use client'

import { useEffect } from 'react';
import styles from './page.module.css';

function Page() {

  useEffect(() => {
    // Dynamically load the Jupiter script
    const script = document.createElement('script');
    script.src = "https://terminal.jup.ag/main-v2.js";
    script.onload = () => launchJupiter(); // Initialize Jupiter after the script loads
    document.head.appendChild(script);
  }, []);

  function launchJupiter() {
    if (window.Jupiter) {
      window.Jupiter.init({ 
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        endpoint: "https://mainnet.helius-rpc.com/?api-key=43acd58f-d760-4b28-a418-762dc9aba97e",
        strictTokenList: false,
        defaultExplorer: "SolanaFM",
        formProps: {
          initialAmount: "100000",
          initialInputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
          initialOutputMint: "BARKhLzdWbyZiP3LNoD9boy7MrAy4CVXEToDyYGeEBKF",
        },
      });
    } else {
      console.error("BarkSwap script not loaded yet");
    }
  }
  return (
    <div className={styles.body}>

      <div id="integrated-terminal"></div>

    </div>
  );
}

export default Page;
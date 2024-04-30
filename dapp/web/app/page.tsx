"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

function Page() {
  const [isJupiterLoaded, setIsJupiterLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const scriptRef = useRef(null);

  useEffect(() => {
    const loadScript = () => {
      scriptRef.current = document.createElement('script');
      scriptRef.current.src = "https://terminal.jup.ag/main-v2.js";
      scriptRef.current.onload = handleScriptLoad;
      scriptRef.current.onerror = handleScriptError;
      document.head.appendChild(scriptRef.current);
    };

    loadScript();

    return () => {
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isJupiterLoaded) {
      initializeJupiter();
    }
  }, [isJupiterLoaded]);

  const handleScriptLoad = () => {
    setIsJupiterLoaded(true);
  };

  const handleScriptError = () => {
    setIsLoading(false);
    console.error("Failed to load Jupiter script");
  };

  const initializeJupiter = () => {
    try {
      window.Jupiter.init({
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        endpoint: "https://mainnet.helius-rpc.com/?api-key=43acd58f-d760-4b28-a418-762dc9aba97e",
        strictTokenList: false,
        defaultExplorer: "SolanaFM",
        formProps: {
          initialAmount: "888888880000",
          initialInputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
          initialOutputMint: "GsFjUCEsRwXHyahR8XsnnJYrgxBjADwnNJ1wbJbGdMVK",
        },
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error initializing Jupiter:", error);
    }
  };

  return (
    <div className={styles.pageContainer}>
      {isLoading ? (
        <div className={styles.loadingIndicator}>Loading Jupiter...</div>
      ) : (
        <div id="integrated-terminal"></div>
      )}
    </div>
  );
}

export default Page;

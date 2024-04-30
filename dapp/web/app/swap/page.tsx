'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { VersionedTransaction, Connection } from '@solana/web3.js';
import Confirmation from '../../components/modals/confirmation';
import styles from './swap.module.css';

const assets = [
  { name: 'SOL', mint: 'So11111111111111111111111111111111111111112', decimals: 9},
  { name: 'BARK', mint: 'GsFjUCEsRwXHyahR8XsnnJYrgxBjADwnNJ1wbJbGdMVK', decimals: 6},
  { name: 'USDC', mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', decimals: 6},
  { name: 'BONK', mint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263', decimals: 5 },
  { name: 'WIF', mint: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm', decimals: 6},
];

const Swap = () => {
  const [fromAsset, setFromAsset] = useState(assets[0]);
  const [toAsset, setToAsset] = useState(assets[1]);
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [quoteResponse, setQuoteResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const wallet = useWallet();
  const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=43acd58f-d760-4b28-a418-762dc9aba97e');

  const handleFromAssetChange = (event) => {
    setFromAsset(assets.find((asset) => asset.name === event.target.value) || assets[0]);
  };

  const handleToAssetChange = (event) => {
    setToAsset(assets.find((asset) => asset.name === event.target.value) || assets[0]);
  };

  const handleFromValueChange = (event) => {
    setFromAmount(event.target.value);
  };

  const debounceQuoteCall = useCallback(
    debounce(getQuote, 500),
    []
  );

  useEffect(() => {
    debounceQuoteCall(fromAmount);
  }, [fromAmount, debounceQuoteCall]);

  async function getQuote(currentAmount) {
    setLoading(true);
    setError(null);

    if (isNaN(currentAmount) || currentAmount <= 0) {
      setError('Invalid amount');
      setLoading(false);
      return;
    }

    try {
      const quote = await (
        await fetch(
          `https://quote-api.jup.ag/v6/quote?inputMint=${fromAsset.mint}&outputMint=${toAsset.mint}&amount=${currentAmount * Math.pow(10, fromAsset.decimals)}&slippage=0.5`
        )
      ).json();

      if (quote && quote.outAmount) {
        const outAmountNumber = Number(quote.outAmount) / Math.pow(10, toAsset.decimals);
        setToAmount(outAmountNumber);
      }

      setQuoteResponse(quote);
    } catch (error) {
      setError('Error fetching quote');
    } finally {
      setLoading(false);
    }
  }

  const signAndSendTransaction = async () => {
    // Implement transaction signing logic here
  };

  return (
    <div className={styles.body}>
      <div className={styles.innerContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.labels}>You pay</div>
          <input
            type="number"
            value={fromAmount}
            onChange={handleFromValueChange}
            className={styles.inputField}
          />
          <select
            value={fromAsset.name}
            onChange={handleFromAssetChange}
            className={styles.selectField}
          >
            {assets.map((asset) => (
              <option key={asset.mint} value={asset.name}>
                {asset.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.labels}>You receive</div>
          <input
            type="number"
            value={toAmount}
            className={styles.inputField}
            readOnly
          />
          <select
            value={toAsset.name}
            onChange={handleToAssetChange}
            className={styles.selectField}
          >
            {assets.map((asset) => (
              <option key={asset.mint} value={asset.name}>
                {asset.name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setShowConfirmation(true)}
          className={styles.button}
          disabled={toAsset.mint === fromAsset.mint || loading}
        >
          Swap
        </button>
        {showConfirmation && (
          <Confirmation
            onConfirm={() => {
              setShowConfirmation(false);
              signAndSendTransaction();
            }}
            onClose={() => setShowConfirmation(false)}
            isLoading={loading}
          />
        )}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
};

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default Swap;

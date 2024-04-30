// NOT IMPLEMENTED OR UNTESTED

import { Request, Response } from 'express';
import fetch from 'cross-fetch';

export async function POST(request: Request, response: Response) {
  try {
    // Extract parameters from the request body
    const { quoteResponse, userPublicKey, wrapAndUnwrapSol = true, feeAccount } = request.body;

    // Validate input parameters
    if (!quoteResponse || !userPublicKey || !feeAccount) {
      throw new Error('Missing required parameters');
    }

    // Perform the swap transaction
    const swapTransaction = await handleSwapRequest(quoteResponse, userPublicKey, wrapAndUnwrapSol, feeAccount);

    // Return the swap transaction response
    response.status(200).json(swapTransaction);
  } catch (error) {
    // Handle errors and return an appropriate response
    response.status(500).json({ message: error.message });
  }
}

async function handleSwapRequest(quoteResponse: any, userPublicKey: string, wrapAndUnwrapSol: boolean, feeAccount: string) {
  try {
    // Validate quoteResponse format
    if (!quoteResponse.inAmount || !quoteResponse.outAmount) {
      throw new Error('Invalid quote response format');
    }

    // Extract inAmount from quoteResponse
    const inAmount = parseFloat(quoteResponse.inAmount);

    // Calculate fees
    const baseFee = inAmount * 0.01; // Base fee is 1% of the inAmount
    const userFee = inAmount * 0.01; // User fee is 1% of the inAmount
    const netInAmount = inAmount - baseFee - userFee; // Deduct total fees from inAmount

    // Make a POST request to the BarkSwap API to perform the swap
    const swapTxResponse = await fetch('https://quote-api.swap.barkprotocol.net/v1/swap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quoteResponse,
        userPublicKey,
        wrapAndUnwrapSol,
        feeAccount,
        netInAmount,
      }),
    });

    // Throw an error if the HTTP response status is not ok
    if (!swapTxResponse.ok) {
      throw new Error(`HTTP error! status: ${swapTxResponse.status}`);
    }

    // Return the swap transaction response
    return await swapTxResponse.json();
  } catch (error) {
    // If an error occurs during the swap request, throw it for handling in the caller function
    throw new Error(`Error during swap request: ${error.message}`);
  }
}

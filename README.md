<div align="center">
  <img src="https://github.com/bark-community/bark-swap-demo/blob/00a98069ae23063cfcd94aaa3734602aad65c8d1/.github/header.png" alt="BarkSwap Header Image" width="80%" />
</div>

# BarkSwap - Decentralized Exchange

**BarkSwap DApp** is a decentralized exchange (DEX) built on the Solana blockchain, offering users seamless token swapping functionality. This repository contains the source code for the BarkSwap decentralized application (dApp).

## Next.js / React UI frameworks

<div align="center">
  <img src="https://github.com/bark-community/bark-swap-demo/blob/main/.github/screenshot.png" alt="BarkSwap DApp Screenshot" width="80%" />
</div>

## Table of Contents

- [BarkSwap - Decentralized Exchange](#barkswap---decentralized-exchange)
  - [Next.js / React UI frameworks](#nextjs--react-ui-frameworks)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
  - [API Implementation](#api-implementation)
  - [Jupiter Terminal Vs. API](#jupiter-terminal-vs-api)
  - [Usage](#usage)
  - [License](#license)

## Setup

To set up BarkSwap locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bark-community/bark-swap-demo/
   cd bark-swap-demo/swap/dapp
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Access the Interface:**
   Visit `http://localhost:3000` in your browser to interact with the main interface.

4. **Access the Swap Interface:**
   Visit `http://localhost:3000/swap` in your browser to interact with the BarkSwap interface.

## API Implementation

The API implementation is located in the `dapp/web/app/swap/page.tsx`. Customize the token mint addresses as needed, or utilize the [token list API](https://station.jup.ag/docs/token-list/token-list-api) for validated tokens.

## Jupiter Terminal Vs. API

BarkSwap integrates with the **Jupiter Terminal**, leveraging its API for seamless token exchanges. While Jupiter Terminal provides the user interface components, BarkSwap utilizes both its quote and swap endpoints for transaction functionalities.

## Usage

This repository serves as a reference implementation and is not intended for production use without modifications:

- **API Key:** Obtain an API key from Helius - [Helius API](https://www.helius.dev/).
- **Integration:** Create a BARK API key and integrate it into the HTML of the BarkSwap implementation as needed.

For any questions or issues, please refer to our [GitHub repository](https://github.com/bark-community/bark-swap) or connect with the BARK community.

## License

[MIT License](LICENSE).
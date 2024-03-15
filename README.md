<div style="display: flex; justify-content: center;">
  <img src="https://github.com/bark-community/.github/header.png" alt="BarkSwap Header Image" />
</div>

# BarkSwap

BarkSwap is a decentralized exchange (DEX) built on the Solana blockchain, offering users seamless token swapping functionality. This repository contains the source code for the BarkSwap decentralized application (dApp).

## Table of Contents

- [BarkSwap](#barkswap)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
  - [API Implementation](#api-implementation)
  - [Jupiter Terminal Vs. API](#jupiter-terminal-vs-api)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Setup

To set up BarkSwap locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bark-community/bark-swap/
   cd dapp && cd web
   npm i
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `localhost:3000` in your browser. The BarkSwap interface is available at `localhost:3000/swap`.

## API Implementation

The API implementation is located at [dapp/web/app/swap/page.tsx](https://github.com/bark-community/bark-swap/blob/main/dapp/web/app/swap/page.tsx). Customize the token mint addresses as needed, or use the [token list API](https://station.jup.ag/docs/token-list/token-list-api) for validated tokens.

## Jupiter Terminal Vs. API

BarkSwap is based on Jupiter Terminal and utilizes its API for seamless integration. Jupiter Terminal is a user interface that links into BarkSwap through its HTML. The API implementation utilizes Jupiter's quote and swap endpoints, requiring the development of the BarkSwap front-end/UI.

## Usage

This repository serves as a reference implementation and is not intended for direct usage.

- Obtain an API key from Helius - [https://www.helius.dev/](https://www.helius.dev/)
- Create a BARK API key and integrate it into the HTML of the BarkSwap implementation.
- For create-dapp, you'll need NPM or Yarn. The BarkSwap implementation is accessible at `localhost:3000/swap`.

For any questions or issues, please refer to the [GitHub repository](https://github.com/bark-community/bark-swap) or reach out to the BARK community.

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

[MIT License](LICENSE).

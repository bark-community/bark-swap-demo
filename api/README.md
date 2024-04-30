# BarkSwap API

Bark**Swap** is a decentralized exchange (DEX) API that facilitates token swaps on the Solana blockchain. Users can exchange digital assets using quotes obtained from the BarkSwap DEX.

## Features

- **Swap Functionality:** Allows users to swap digital assets securely.
- **Fee Structure:** Implements a transparent fee structure for base fees and user fees.
- **Integration:** Easily integrate Bark**Swap** API into your applications and services.

## Installation

You can install Bark**Swap** API either by cloning the repository or using npm:

```bash
git clone https://github.com/bark-community/barkswap-api.git
```

or

```bash
npm install barkswap-api
```

## Usage

### Endpoints

#### POST /api/swap

Initiates a token swap transaction.

**Request Body:**
```json
{
  "quoteResponse": {
    "inAmount": "100",
    "outAmount": "200"
  },
  "userPublicKey": "your-public-key",
  "wrapAndUnwrapSol": true,
  "feeAccount": "fee-account-address"
}
```

**Parameters:**
- `quoteResponse`: The quote obtained from Bark**Swap** DEX.
- `userPublicKey`: Public key of the user performing the swap.
- `wrapAndUnwrapSol`: Boolean indicating whether to wrap and unwrap SOL tokens.
- `feeAccount`: Address of the fee account.

## Documentation

For detailed documentation and examples, please refer to the [BarkSwap API Documentation](https://).

## Swagger

Bark**Swap** API

## Contributing

Contributions are welcome! Fork the repository, make your changes, and create a pull request.

## License

[LICENSE.md](LICENSE.md)

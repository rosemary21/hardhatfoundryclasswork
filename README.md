# Greeter - Celo Sepolia

A simple Greeter smart contract deployed to the Celo Sepolia testnet using both Hardhat and Foundry.

## Deployed Contract Addresses

| Tool     | Contract Address                             | Explorer Link |
|----------|----------------------------------------------|---------------|
| Hardhat  | `0x8aEBf3421ec4De9978BccFc209Ec727bf993F4f5` | [View on Celoscan](https://celo-sepolia.blockscout.com/address/0x8aEBf3421ec4De9978BccFc209Ec727bf993F4f5) |
| Foundry  | `0x059C33335432A2FCea967137aC2f204BA39A65A7` | [View on Celoscan](https://celo-sepolia.blockscout.com/address/0x059C33335432A2FCea967137aC2f204BA39A65A7) |

**Network:** Celo Sepolia Testnet (Chain ID: 11142220)

## Project Structure

```
contracts/          # Solidity contracts (shared by Hardhat & Foundry)
scripts/            # Hardhat deployment scripts
script/             # Foundry deployment scripts
test/               # Test files
hardhat.config.js   # Hardhat configuration
foundry.toml        # Foundry configuration
```

## Setup

1. Clone the repo and install dependencies:
   ```bash
   npm install
   forge install
   ```

2. Create a `.env` file with your private key:
   ```
   PRIVATE_KEY=0xYOUR_PRIVATE_KEY
   ```

3. Get testnet CELO from the [faucet](https://faucet.celo.org/celo-sepolia).

## Deploy

**Hardhat:**
```bash
npx hardhat run scripts/deploy.js --network celoSepolia
```

**Foundry:**
```bash
source .env
forge script script/DeployGreeter.s.sol --rpc-url https://forno.celo-sepolia.celo-testnet.org --broadcast --private-key $PRIVATE_KEY
```

## Contract

The `Greeter` contract stores a greeting string that can be read and updated:

- `greet()` — returns the current greeting
- `setGreeting(string)` — updates the greeting (emits `GreetingChanged` event)

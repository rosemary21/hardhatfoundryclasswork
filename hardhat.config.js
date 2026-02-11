require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000001";

module.exports = {
  solidity: "0.8.19",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache_hardhat",
    artifacts: "./artifacts",
  },
  networks: {
    celoSepolia: {
      url: "https://forno.celo-sepolia.celo-testnet.org",
      chainId: 11142220,
      accounts: [PRIVATE_KEY],
    },
  },
};

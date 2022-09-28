import "@nomicfoundation/hardhat-toolbox";
import { config as loadEnvVariables } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

loadEnvVariables();

const { ALCHEMY_GOERLI_API_KEY, GOERLI_PRIVATE_KEY = "" } = process.env;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  paths: {
    sources: "./src/contracts",
    tests: "./src/tests",
  },
  solidity: "0.8.15",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_GOERLI_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};

export default config;

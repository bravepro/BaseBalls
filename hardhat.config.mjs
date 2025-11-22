import '@nomiclabs/hardhat-ethers';
import 'dotenv/config';

export default {
  solidity: "0.8.19",
  networks: {
    baseSepolia: {
      url: process.env.BASE_SEPOLIA_RPC || "https://sepolia.base.org",
      chainId: 84532,
      accounts: process.env.DEPLOYER_PRIVKEY ? [process.env.DEPLOYER_PRIVKEY] : []
    }
  }
};

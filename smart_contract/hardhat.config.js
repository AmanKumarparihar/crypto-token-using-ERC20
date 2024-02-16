//https://eth-sepolia.g.alchemy.com/v2/HQVV_xmXKKDw2aq4TlRSNAQnZ-dOSqYE

require('@nomiclabs/hardhat-waffle');

// module.exports = {
//   solidity: '0.8.19',
//   networks: {
//     ropsten: {
//       url: 'https://eth-sepolia.g.alchemy.com/v2/HQVV_xmXKKDw2aq4TlRSNAQnZ-dOSqYE',
//       accounts: ['058081aacdc21135057b0815cc9647575985c5bc27760174d8cc52c59e61cc86'],
//     },
//   },
// };

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/HQVV_xmXKKDw2aq4TlRSNAQnZ-dOSqYE",
      accounts: ['058081aacdc21135057b0815cc9647575985c5bc27760174d8cc52c59e61cc86']
    }
  },
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}
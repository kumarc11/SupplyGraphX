import React from "react";

const testnets = [
  {
    title: "Polygon Mumbai Testnet",
    emoji: "🔷",
    description:
      "The Mumbai Testnet is a testing network for the Polygon blockchain. Developers use it to test smart contracts with free MATIC tokens before deploying on the Polygon mainnet. It's fast, low-cost, and EVM compatible.",
    faucetTitle: "Polygon Mumbai Faucet",
    faucetUrl: "https://mumbaifaucet.com/",
    faucetInfo:
      "Use your MetaMask wallet address to receive free test MATIC tokens for development and testing on the Mumbai testnet.",
  },
  {
    title: "Ethereum Goerli Testnet",
    emoji: "🧪",
    description:
      "Goerli is an Ethereum testnet used to test contracts and transactions without spending real ETH. It supports Proof-of-Stake and works like the Ethereum mainnet, making it ideal for testing in realistic conditions.",
    faucetTitle: "Ethereum Goerli Faucet (Google Cloud)",
    faucetUrl: "https://faucet.quicknode.com/ethereum/goerli",
    faucetInfo:
      "Use a GitHub or Google login to get test ETH. Paste your wallet address, and you'll receive Goerli ETH tokens to test Ethereum-based dApps.",
  },
];

const Polygon = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-purple-600">
          Polygon & Ethereum Testnets
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Testnets are essential for blockchain development. They let developers
          build and test applications with no real cost. Supply Graph X uses
          Polygon Mumbai and Ethereum Goerli to test new features safely.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testnets.map((net, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{net.emoji}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {net.title}
              </h2>
              <p className="text-gray-600 mb-4">{net.description}</p>
              <h3 className="text-lg font-medium text-blue-600 mb-1">
                {net.faucetTitle}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{net.faucetInfo}</p>
              <a
                href={net.faucetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-white bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Visit Faucet
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Polygon;

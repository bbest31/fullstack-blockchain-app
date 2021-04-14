# Description

This application will enable users to swap ETH for Dapp and vice-versa. It will demonstrate how to build a full stack application using blockchain and smart contracts.

# Architecture

Instead of having some backend services that run the trading processes, the logic is saved inside of smart contracts and deployed onto the blockchain.
As a result the frontend can talk directly to the blockchain and call the functions of the smart contracts to interact with them.

1. JavaScript frontend holding UI. Talks directly to the blockchain.
2. Contract EthSwap deployed onto the Blockchain.
3. Contract DApp Token also deployed onto the Blockchain.

# Local Deploy
Ensure the truffle configuration is pointing at the right host and port for your Ganache instance running.
```
truffle migrate
```
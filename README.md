# Solidity Boilerplate

A boilerplate for quick-starting a [solidity](https://docs.soliditylang.org/) project with the latest releases of [hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#overview) and [typescript](https://www.typescriptlang.org/);

## Prerequisites

In order to use the project you will need to have installed [nodejs](https://nodejs.org/en/).

## Install

Configure your environment by creating a .env file (check the .env.example file). You can use any Blockchain API's provider that you want, I recommend [alchemy](https://www.alchemy.com/).

```bash
npm install
```

## Basic Usage

```bash
npx hardhat compile
npx hardhat test
npx hardhat run src/tests/deployment.ts
```

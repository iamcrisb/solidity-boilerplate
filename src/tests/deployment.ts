import { ethers } from "hardhat";
import { expect } from "chai";

describe("Deployment", async function () {
  it("Deploys the contract", async function () {
    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy("This is a hardhat boilerplate!");
    await contract.deployed();
    console.log("contract.address:", contract.address);
    expect(contract.address.length).to.equal(42);
  });
});

// scripts/balance.js
const { ethers } = require("hardhat");
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);
  console.log("Balance :", (await deployer.provider.getBalance(deployer)).toString());
}
main();
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Replace with your deployed contract address on Sepolia
  const contractAddress = "0x11a5410e84F0F5BFe3591EC3fC69476103b8525D";

  const PlayerNFT = await hre.ethers.getContractAt("PlayerNFT", contractAddress);

  const tokenURI = "https://ipfs.io/ipfs/bafkreidu2ulik4f2afupgxrrkwbcqzlvj7avppryv3pnmhmkaqe3ldktfa";

  const tx = await PlayerNFT.mintPlayer(deployer.address, tokenURI);
  await tx.wait();

  console.log(`✅ Minted Player 1 NFT to ${deployer.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

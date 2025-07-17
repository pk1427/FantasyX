const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    // Replace with your deployed contract address on Sepolia
    const contractAddress = "0x11a5410e84F0F5BFe3591EC3fC69476103b8525D";

    const PlayerNFT = await hre.ethers.getContractAt("PlayerNFT", contractAddress);

    const tokenURI = "https://ipfs.io/ipfs/bafkreieqbg2e7akcntuzx47isneya4futt3mtfknhbe3oomh6ldy5um2xq";

    const tx = await PlayerNFT.mintPlayer(deployer.address, tokenURI);
    await tx.wait();

    console.log(`✅ Minted Player 2 NFT to ${deployer.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

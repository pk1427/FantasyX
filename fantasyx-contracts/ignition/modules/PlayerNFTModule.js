const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("PlayerNFTModule", (m) => {
  const playerNFT = m.contract("PlayerNFT", []);

  return { playerNFT };
});

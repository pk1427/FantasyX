// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PlayerNFT is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("FantasyX Player", "FXP") Ownable(msg.sender) {}

    function mintPlayer(address to, string memory tokenURI) external onlyOwner {
        _safeMint(to, nextTokenId);
        _setTokenURI(nextTokenId, tokenURI);
        nextTokenId++;
    }
}

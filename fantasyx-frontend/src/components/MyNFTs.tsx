import { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import PlayerNFTJson from "../abi/PlayerNFT.json";

const contractAddress = "0x11a5410e84F0F5BFe3591EC3fC69476103b8525D";

interface Attribute {
  trait_type: string;
  value: string | number;
}

interface PlayerMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Attribute[];
}

export const MyNFTs = () => {
  const { address } = useAccount();
  const [playerData, setPlayerData] = useState<PlayerMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔁 CHANGE THIS to display different players
  const tokenId = 1; // tokenId 1 is for Rohit Sharma

  const { data: tokenURI } = useContractRead({
    address: contractAddress,
    abi: PlayerNFTJson.abi as any, // 👈 type assertion if ABI typing throws error
    functionName: "tokenURI",
    args: [tokenId],
    watch: true,
  });

  useEffect(() => {
    const fetchMetadata = async () => {
      setLoading(true);
      setError(null);

      if (typeof tokenURI === "string" && tokenURI.startsWith("http")) {
        try {
          const response = await fetch(tokenURI);
          const metadata: PlayerMetadata = await response.json();
          setPlayerData(metadata);
        } catch (err) {
          setError("Failed to load player metadata.");
        }
      } else {
        setError("Invalid or missing tokenURI.");
      }

      setLoading(false);
    };

    fetchMetadata();
  }, [tokenURI]);

  if (loading) return <p>Loading your NFT...</p>;
  if (error) return <p>{error}</p>;
  if (!playerData) return <p>No player NFT found.</p>;

  return (
    <div>
      <img
        src={playerData.image}
        alt={playerData.name}
        onError={(e) => {
          e.currentTarget.src = "/fallback.jpg";
        }}
      />
      <h2>{playerData.name}</h2>
      <p>{playerData.description}</p>
      <div>
        <h4>Attributes:</h4>
        <ul>
          {playerData.attributes.map((attr, idx) => (
            <li key={idx}>
              {attr.trait_type}: {attr.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

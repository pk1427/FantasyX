import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-gray-950">
      <div className="text-xl font-bold text-blue-400">FantasyX</div>
      <ConnectButton />
    </nav>
  );
};

export default Navbar;

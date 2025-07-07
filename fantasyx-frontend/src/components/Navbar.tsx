import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-gray-950">
      <div className="text-xl font-bold text-blue-400">FantasyX</div>
      <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl font-medium transition duration-300">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;

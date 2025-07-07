import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Own. Play. Earn.
      </h1>
      <p className="text-gray-400 max-w-xl mb-6">
        Welcome to FantasyX — the future of fantasy cricket powered by NFTs and Web3.
        Join contests, own players, and win real crypto rewards.
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold text-white transition duration-300">
        Learn More
      </button>
    </section>
  );
};

export default HeroSection;

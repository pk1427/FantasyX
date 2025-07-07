import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App: React.FC = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;

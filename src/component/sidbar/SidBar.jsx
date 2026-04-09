import React from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const SidBar = () => {
  return (
    <div className="w-20 bg-[#020617] flex flex-col items-center py-4">
      <div className="text-orange-400 text-2xl mb-6">●</div>
      <div className="space-y-5 flex flex-col">
        <Link to="/">⚙️</Link>
        <Link to="users">📊</Link>
        <Link to="add-car">🏠</Link>
      </div>
    </div>
  );
};

export default SidBar;

import React from "react";
import { Button } from "../../components/ui/button";

const SidBar = () => {
  return (
    <div className="w-20 bg-[#020617] flex flex-col items-center py-4">
      <div className="text-orange-400 text-2xl mb-6">●</div>
      <div className="space-y-5">
        <Button>📊</Button>
        <Button>⚙️</Button>
        <Button>🏠</Button>
      </div>
    </div>
  );
};

export default SidBar;

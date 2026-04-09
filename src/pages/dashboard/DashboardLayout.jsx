import Header from "@/component/header/Header";
import SidBar from "@/component/sidbar/SidBar";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <SidBar />

      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 flex flex-col gap-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

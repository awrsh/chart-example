"use client";
import Sidebar from "@/components/common/Sidebar";
import React, { useState } from "react";
import Dashboard from "./dashboard/page";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      {/* Main Content */}
      <div
        className={`transition-all duration-300 p-6 ${
          isSidebarOpen ? "w-full" : "w-full"
        } flex-1`}
      >
        <Dashboard />
      </div>
    </div>
  );
};

export default App;

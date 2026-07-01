"use client";

import { useState } from "react";
import DashboardSidebar from "../components/dashboardComponents/DashboardSidebar";
import DashboardNavbar from "../components/dashboardComponents/DashboardNavbar";


export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <DashboardNavbar onMenuClick={() => setIsOpen(true)} />

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {/* Main Content */}
        <main className="flex-1 lg:ml-72 p-4 md:p-6 overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
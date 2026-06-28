"use client";

import { useState } from "react";
import DashboardSidebar from "../components/dashboardComponents/DashboardSidebar";
import DashboardNavbar from "../components/dashboardComponents/DashboardNavbar";


export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardNavbar onMenuClick={() => setIsOpen(true)} />

      <div className="max-w-7xl mx-auto flex">
        <DashboardSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <main className="flex-1 p-4 md:p-6 lg:ml-8">
          {children}
        </main>
      </div>
    </div>
  );
}
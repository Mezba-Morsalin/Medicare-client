"use client";

import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        
        {/* React Spinner from David Hu package */}
        <ClipLoader 
          color="#0084d1" 
          size={50} 
          speedMultiplier={0.8}
          aria-label="Loading Spinner"
        />

        {/* Brand Text */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-[#0f172a] tracking-tight">
            Medicare <span className="text-sky-600">Connect</span>
          </h2>
          <p className="text-sm text-slate-400 mt-1 animate-pulse">
            Loading secure platform...
          </p>
        </div>
      </div>
    </div>
  );
}
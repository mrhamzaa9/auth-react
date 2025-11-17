import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hey  USER HOME 👋
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Welcome to your React Tailwind Home Page.  
          This UI is clean, modern, and ready to expand!
        </p>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-medium hover:bg-blue-700 transition-all shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
}

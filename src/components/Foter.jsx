import React from "react";

export default function Foter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MyApp</h2>
          <p className="text-gray-400 text-sm">
            Creating modern and clean UI with React & TailwindCSS.  
            All rights reserved © 
          </p>
        </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        ©  MyWebsite. All Rights Reserved.
      </div>
       </div>
    </footer>
  );
}


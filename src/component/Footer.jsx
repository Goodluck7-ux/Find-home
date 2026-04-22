import React from 'react'

export default function Footer() {
  return (
    <div className="w-full bg-white border-t border-gray-200 relative mt-12">
      
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-start justify-between">

        
        <div className="flex items-start gap-3">
          
          <div className="px-4  py-1.5 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
            N
          </div>

          <div>
            <p className="font-semibold text-gray-800">Nestly</p>
            <p className="text-sm text-gray-500 max-w-md">
              Find homes, shop for them, and chat with the people who matter — all in one friendly place.
            </p>
          </div>
        </div>

      
        <div className="text-sm text-gray-400 whitespace-nowrap">
          © 2026 Nestly. Crafted with care.
        </div>
      </div>
    </div>
  );
}
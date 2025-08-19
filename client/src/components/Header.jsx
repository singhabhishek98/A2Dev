import React from 'react'

export default function Header({ onBook }) {
  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-black/30 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between text-white">
        
        {/* Left Side: Book a Demo */}
        <button 
          onClick={onBook} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl shadow"
        >
          Book A Demo ▸
        </button>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm md:text-base">
          <a href="tel:+918303837930" className="hover:text-blue-400 transition-colors">
            📞 +91 83038 37930
          </a>
          <a href="mailto:contactus@a2developers.org" className="hover:text-blue-400 transition-colors">
            ✉️ contactus@a2developers.org
          </a>
        </div>
      </div>
    </header>
  )
}

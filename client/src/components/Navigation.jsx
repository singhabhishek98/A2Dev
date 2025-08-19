import React from 'react'

export default function Navigation() {
  return (
    <nav className="fixed top-[100px] left-0 right-0 z-10">
      <div className="mx-auto max-w-6xl px-6 py-3 relative flex items-center">
        
        {/* Left Logo */}
        <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold absolute left-6">
          <img 
            src="A2logo.png" 
            alt="A2 Logo" 
            className="h-12 w-12 md:h-20 md:w-20 object-contain"
          />
          <div>
            <span className="text-red-500">A2</span> <br></br> Developers
          </div>
        </div>

        <div className="flex gap-6 md:gap-8 mx-auto text-white/90">
          <a href="#" className="text-xl md:text-2xl font-bold hover:text-white transition-colors">Home</a>
          <a href="#" className="text-xl md:text-2xl font-bold hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-xl md:text-2xl font-bold hover:text-white transition-colors">Product</a>
          <a href="#" className="text-xl md:text-2xl font-bold hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

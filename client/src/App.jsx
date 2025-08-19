import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import SlideOverForm from './components/SlideOverForm.jsx'
export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative min-h-screen text-white">
      <video className="fixed inset-0 w-full h-full object-cover -z-10" autoPlay muted loop playsInline>
        {/* <source src="/src/assets/hero.mp4" type="video/mp4" /> */}
        <source src="/hero.mp4" type="video/mp4" />

      </video>
      <div className="fixed inset-0 bg-black/60 -z-10" />
      <Header onBook={() => setOpen(true)} />
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold">All Your Information in One Place</h1>
        <p className="mt-6 text-xl md:text-2xl text-white/80">Simplify Management with a Unified Data Platform.</p>
      </main>
      <SlideOverForm open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

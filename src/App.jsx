import { useState } from 'react'
import { motion } from 'framer-motion'

import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuschia-500/30">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/100">

        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">

          <a href="#" className="flex items-center text-xl font-bold text-fuchsia-500 gap-2">
            <Zap className="w-9 h-9 text-fuchsia-500 animate-pulse" />
            <span className="ml-2 font-bold tracking-tight">Active React</span>
          </a>

          <nav className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-fuchsia-500 transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

        </div>
        

        {/* Menu Mobile */}
        {open && (
          <div className="md:hidden">
            <div className="fixed bg-black/60" onClick={() => setOpen(false)}>
              <div className="fixed right-0 top-0 w-80 h-full bg-slate-900  border-white/10 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className='flex items-center gap-2'>
                    <Zap className="w-6 h-6 text-fuchsia-500" />
                    <span className="text-xl font-semibold">Active React</span>
                  </div>
                  <button className="p-2 rounded-lg" onClick={() => setOpen(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex flex-col gap-4 bg-slate-900 p-4 w-90">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="hover:text-fuchsia-500 transition-colors duration-300">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

    </div>
  )
}

export default App

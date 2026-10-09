import { useState } from 'react'
import { motion } from 'framer-motion'

import{
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
      <header className="sticky top-0-40 border-white/5">
        <div>
          <a href="#" className="flex items-center text-xl font-bold text-fuchsia-500">
            <Sparkles className="w-8 h-8 text-fuchsia-500" />
            <span className="ml-2 font-bold">Active React</span>
          </a>

          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-fuchsia-500 transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
      
    </div>    
  )
}

export default App

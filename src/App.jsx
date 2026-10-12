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
  Palette,
  Play,
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
            <span className="logo-wordmark ml-2">Active React</span>
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
                    <span className="logo-wordmark text-xl">Active React</span>
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


      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-4xl font-extrabold'
          >
            Acelere seu desenvolvimento com <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500">React e Tailwind CSS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='mt-4 text-lg text-slate-400'
          >
            Acelere seu desenvolvimento com <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500">React e Tailwind CSS</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='mt-8 flex flex-row gap-3'
          >
            <a href="#" className="inline-flex items-center justify-center rounded-2xl gap-2 bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition-colors duration-300 ">
              Comece agora <ArrowRight className="w-5 h-5" />
            </a>

            <a href="#" className="inline-flex items-center justify-center rounded-2xl gap-2 border border-white/90 px-6 py-3 font-medium hover:bg-white/20 transition-colors duration-300">
              Saiba mais <ArrowRight className="w-5 h-5" />
            </a>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='mt-15 grid grid-cols-3 gap-4'
          >
            {["React", "Tailwind CSS", "Framer Motion"].map((tech, index) => (
              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-white/10 p-3"
              >
                <div className="flex items-center gap-3">
                  {index === 0 && <Zap className="size-5 text-fuchsia-500" />}
                  {index === 1 && <Palette className="size-5 text-pink-500" />}
                  {index === 2 && <Play className="size-5 text-purple-500" />}
                  <div className="semibold">{tech}</div>
                </div>

                <p className="text-sm text-slate-400 mt-2">
                  {tech === "React" && "Biblioteca para construção de interfaces de usuário"}
                  {tech === "Tailwind CSS" && "Framework de estilização"}
                  {tech === "Framer Motion" && "Biblioteca para animações"}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default App

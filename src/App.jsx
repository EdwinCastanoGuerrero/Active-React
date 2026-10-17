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
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900 backdrop-blur-md">

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

                    <span className="logo-wordmark text-xl"><Zap /></span>
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

      {/* features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Recursos</h2>
        <p className="text-slate-300 mt-2 max-w-2xl text-lg">
          Descubra os principais recursos que tornam nossa solução a escolha ideal para o seu projeto.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Desempenho Rápido",
              description: "Nossa aplicação é otimizada para oferecer desempenho rápido e eficiente, garantindo uma experiência suave para os usuários.",
              icon: <Zap className="w-6 h-6 text-fuchsia-500 animate-pulse" />,
            },
            {
              title: "Segurança Robusta",
              description: "Implementamos medidas de segurança avançadas para proteger seus dados e garantir a integridade da aplicação.",
              icon: <Shield className="w-6 h-6 text-pink-500 animate-pulse" />,
            },
            {
              title: "Interface Intuitiva",
              description: "Nossa interface é projetada para ser fácil de usar, permitindo que os usuários naveguem e interajam com a aplicação sem esforço.",
              icon: <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />,
            }
          ].map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <div className="flex items-center gap-3">
                {feature.icon}
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-slate-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* depoimentos */}

      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Depoimentos</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Pedro', 'Maria', 'João'].map((testimonial) => (
            <blockquote key={testimonial} className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <div className="flex items-center gap-2 text-ambar-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-400 mt-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>

              <footer className="mt-4 text-sm text-slate-500">- {testimonial}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* preço */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
            <h3 className="text-xl font-bold">Plano Básico</h3>
            <p className="text-2xl font-bold mt-2">$19,99/mês</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Acesso limitado</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Funcionalidades básicas</span>
              </li>
            </ul>
            <button className="mt-4 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded">
              Escolher Plano
            </button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
            <h3 className="text-xl font-bold">Plano Profissional</h3>
            <p className="text-2xl font-bold mt-2">$49,99/mês</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Acesso ilimitado</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Funcionalidades avançadas</span>
              </li>
              <button className="mt-4 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded">
                Escolher Plano
              </button>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
            <h3 className="text-xl font-bold">Plano Empresarial</h3>
            <p className="text-2xl font-bold mt-2">$99,99/mês</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Acesso ilimitado</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Funcionalidades premium</span>
              </li>
            </ul>
            <button className="mt-4 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded">
              Escolher Plano
            </button>
          </div>
        </div>
      </section>


    </div>
  )
}

export default App

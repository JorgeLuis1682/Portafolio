import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  FileText,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Educación', href: '#educacion' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar({ onOpenCV }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Status Badge */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center text-indigo-400">
                  <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                  Jorge Tortolero
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                  Semi-Senior
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono hidden sm:block">
                Full Stack · Líder · 100% Remoto
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/60 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30 font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://github.com/JorgeLuis1682"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-lg border border-zinc-800/80 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/jorge-tortolero"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800/60 rounded-lg border border-zinc-800/80 transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCV}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 transition-all hover:border-indigo-500/50 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ver CV</span>
            </button>

            <a
              href="#contacto"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hablemos</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCV}
              className="p-2 text-xs font-medium rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between gap-2">
            <div className="flex gap-2">
              <a
                href="https://github.com/JorgeLuis1682"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/jorge-tortolero"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-indigo-400"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center py-2 px-3 text-xs font-semibold rounded-lg bg-indigo-600 text-white"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

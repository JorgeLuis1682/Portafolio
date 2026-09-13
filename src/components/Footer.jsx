import React from 'react'
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
              JT
            </div>
            <div>
              <p className="font-bold text-white text-sm">Jorge Luis Tortolero Marrón</p>
              <p className="text-[11px] text-zinc-500 font-mono">
                Desarrollador Full Stack & Líder de Desarrollo
              </p>
            </div>
          </div>

          {/* Center Info */}
          <div className="flex items-center gap-2 text-zinc-400">
            <span>Construido con React, Tailwind CSS y estética Spartan UI</span>
          </div>

          {/* Social and Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/JorgeLuis1682"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/jorge-tortolero"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-zinc-900 rounded-lg text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-800 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Arriba</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 text-center text-zinc-600 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Jorge Tortolero. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Caracas, Venezuela · Disponible 100% Remoto</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

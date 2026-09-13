import React, { useState, useEffect } from 'react'
import { X, Download, FileText, ExternalLink, Globe, Sparkles } from 'lucide-react'

export default function CVModal({ isOpen, onClose }) {
  const [selectedLang, setSelectedLang] = useState('es')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const cvFiles = {
    es: {
      name: 'CV_Jorge_Luis_Tortolero_Marron.pdf',
      url: '/CV_Jorge_Luis_Tortolero_Marron.pdf',
      title: 'Currículum Vitae (Español)',
      subtitle: 'Versión completa con experiencia detallada en Fintech, Core Bancario y Seguros',
    },
    en: {
      name: 'CV_Jorge_Luis_Tortolero_Marron_EN.pdf',
      url: '/CV_Jorge_Luis_Tortolero_Marron_EN.pdf',
      title: 'Curriculum Vitae (English)',
      subtitle: 'Official international resume tailored for global roles & tech leadership',
    },
  }

  const currentCV = cvFiles[selectedLang]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-zinc-900 border border-zinc-700 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            Descargar Documento Oficial
          </div>
          <h3 className="text-2xl font-bold text-white">Currículum Vitae — Jorge Tortolero</h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Selecciona el idioma del CV que deseas visualizar o descargar en formato PDF.
          </p>
        </div>

        {/* Language Tabs */}
        <div className="grid grid-cols-2 gap-3 p-1.5 rounded-xl bg-zinc-950 border border-zinc-800">
          <button
            onClick={() => setSelectedLang('es')}
            className={`py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
              selectedLang === 'es'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>🇪🇸 Español (Original)</span>
          </button>

          <button
            onClick={() => setSelectedLang('en')}
            className={`py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
              selectedLang === 'en'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>🇺🇸 English (International)</span>
          </button>
        </div>

        {/* Selected CV Details Card */}
        <div className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-400" />
              {currentCV.title}
            </h4>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
              PDF
            </span>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            {currentCV.subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={currentCV.url}
            download={currentCV.name}
            className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Descargar PDF ({selectedLang.toUpperCase()})</span>
          </a>

          <a
            href={currentCV.url}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto py-3 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-sm flex items-center justify-center gap-2 border border-zinc-700 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Abrir en Nueva Pestaña</span>
          </a>
        </div>
      </div>
    </div>
  )
}

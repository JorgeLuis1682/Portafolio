import React, { useState, useEffect } from 'react'
import {
  ArrowUpRight,
  Download,
  Terminal,
  Layers,
  CheckCircle2,
  Briefcase,
  CodeXml,
} from 'lucide-react'

const CODE_LINES = [
  { text: 'const jorge = {', color: 'text-zinc-100' },
  { text: '  name: "Jorge Tortolero",', color: 'text-emerald-400' },
  { text: '  role: "Full Stack Semi-Senior",', color: 'text-emerald-400' },
  { text: '  location: "Caracas, Venezuela",', color: 'text-emerald-400' },
  { text: '  remote: true,', color: 'text-cyan-400' },
  { text: '  stack: [', color: 'text-zinc-100' },
  { text: '    "React", "Next.js", "Angular",', color: 'text-amber-400' },
  { text: '    "Node.js", "Python", "FastAPI",', color: 'text-amber-400' },
  { text: '    "PostgreSQL", "TensorFlow",', color: 'text-amber-400' },
  { text: '  ],', color: 'text-zinc-100' },
  { text: '  experience: "~4 years",', color: 'text-purple-400' },
  { text: '  openToWork: true,', color: 'text-cyan-400' },
  { text: '}', color: 'text-zinc-100' },
  { text: '', color: '' },
  { text: '// Listo para tu proximo proyecto 🚀', color: 'text-zinc-500' },
]

function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530)
    return () => clearInterval(blink)
  }, [])

  useEffect(() => {
    if (currentLine >= CODE_LINES.length) {
      const reset = setTimeout(() => {
        setVisibleLines([])
        setCurrentLine(0)
        setCurrentChar(0)
        setDisplayedText('')
      }, 2800)
      return () => clearTimeout(reset)
    }

    const line = CODE_LINES[currentLine].text

    if (currentChar < line.length) {
      const t = setTimeout(() => {
        setDisplayedText((prev) => prev + line[currentChar])
        setCurrentChar((c) => c + 1)
      }, 28)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [
          ...prev,
          { text: line, color: CODE_LINES[currentLine].color },
        ])
        setCurrentLine((l) => l + 1)
        setCurrentChar(0)
        setDisplayedText('')
      }, 60)
      return () => clearTimeout(t)
    }
  }, [currentLine, currentChar])

  const currentColor =
    currentLine < CODE_LINES.length ? CODE_LINES[currentLine].color : 'text-zinc-100'

  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/25 via-purple-600/15 to-cyan-400/20 rounded-3xl blur-2xl -z-10 pointer-events-none" />
      <div className="p-[1.5px] rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500/70 to-cyan-400 shadow-2xl">
        <div className="rounded-[13px] bg-zinc-950 overflow-hidden">
          <div className="h-9 bg-zinc-900/95 border-b border-zinc-800/70 px-4 flex items-center justify-between font-mono select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-zinc-400 text-[11px] font-semibold tracking-wide flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              jorge_tortolero.ts
            </span>
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
          </div>

          <div className="p-5 font-mono text-[13px] leading-6 min-h-[320px]">
            {visibleLines.map((line, i) => (
              <div key={i} className={line.color || 'text-zinc-100'}>
                <span className="text-zinc-600 select-none mr-3 text-[11px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {line.text || '\u00a0'}
              </div>
            ))}

            {currentLine < CODE_LINES.length && (
              <div className={currentColor}>
                <span className="text-zinc-600 select-none mr-3 text-[11px]">
                  {String(visibleLines.length + 1).padStart(2, '0')}
                </span>
                {displayedText}
                <span
                  className="inline-block w-[2px] h-[14px] ml-[1px] align-middle bg-indigo-400 transition-opacity duration-100"
                  style={{ opacity: showCursor ? 1 : 0 }}
                />
              </div>
            )}
          </div>

          <div className="bg-indigo-600/90 px-4 py-1.5 flex items-center justify-between text-[11px] font-mono text-indigo-100/80">
            <span>TypeScript &bull; UTF-8</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              No errors
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero({ onOpenCV }) {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 shadow-inner backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-200">
                Disponible para Nuevos Proyectos &amp; Liderazgo
              </span>
              <span className="text-[11px] text-emerald-400 font-mono font-semibold">
                • 100% Remoto
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hola, soy{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                  Jorge Tortolero
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-zinc-300 tracking-tight flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-400 inline" />
                Full Stack Semi-Senior &amp; Líder de Desarrollo
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              Desarrollador Full Stack con casi 4 años de experiencia construyendo productos digitales en sectores como{' '}
              <span className="text-indigo-300 font-semibold">Fintech, Seguros, Telecomunicaciones y Sector Público</span>.
              He liderado equipos de desarrollo, diseñado arquitecturas robustas y entregado soluciones que funcionan en producción. Trabajo{' '}
              <span className="text-emerald-400 font-semibold">100% remoto</span>
              {' '}y disfruto colaborar con equipos distribuidos manteniendo el código limpio y bien estructurado.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { name: 'React / Next', color: 'border-cyan-500/30 text-cyan-300 bg-cyan-950/30' },
                { name: 'Angular (RxJS)', color: 'border-red-500/30 text-red-300 bg-red-950/30' },
                { name: 'React Native / Expo', color: 'border-sky-500/30 text-sky-300 bg-sky-950/30' },
                { name: 'Node.js / Express', color: 'border-emerald-500/30 text-emerald-300 bg-emerald-950/30' },
                { name: 'Python / Django / FastAPI', color: 'border-amber-500/30 text-amber-300 bg-amber-950/30' },
                { name: 'PostgreSQL Avanzado', color: 'border-indigo-500/30 text-indigo-300 bg-indigo-950/30' },
                { name: 'IA (TensorFlow / Keras)', color: 'border-purple-500/30 text-purple-300 bg-purple-950/30' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`text-xs px-2.5 py-1 rounded-md border font-medium transition-transform hover:scale-105 cursor-default ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#proyectos"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Ver Proyectos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCV}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-zinc-700/80 transition-all hover:border-indigo-500/60 hover:text-white shadow-sm"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Descargar CV</span>
              </button>

              <a
                href="#experiencia"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 font-medium text-sm border border-zinc-800 transition-colors"
              >
                <Briefcase className="w-4 h-4 text-zinc-500" />
                <span>Experiencia</span>
              </a>
            </div>
          </div>

          {/* Right Column: Animated Terminal */}
          <div className="lg:col-span-5 flex justify-center pt-6 lg:pt-0">
            <AnimatedTerminal />
          </div>

        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              metric: '~4',
              label: 'Años de Experiencia',
              desc: 'Casi 4 años en Full Stack, Mobile y liderazgo técnico',
              icon: Layers,
            },
            {
              metric: '6+',
              label: 'Empresas y Sectores',
              desc: 'Fintech, Seguros, Telecom y Sector Público',
              icon: Briefcase,
            },
            {
              metric: '10+',
              label: 'Tecnologías Dominadas',
              desc: 'React, Angular, Node, Python, Postgres & IA',
              icon: CodeXml,
            },
            {
              metric: '100%',
              label: 'Código Limpio & Escalable',
              desc: 'Arquitectura sólida y seguridad integral',
              icon: CheckCircle2,
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.metric}
                </span>
                <stat.icon className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200">
                {stat.label}
              </h3>
              <p className="text-xs text-zinc-500 mt-1 leading-normal">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


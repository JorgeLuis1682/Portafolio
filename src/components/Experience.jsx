import React, { useState } from 'react'
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react'

const experiences = [
  {
    company: 'La Mundial de Seguros',
    role: 'Desarrollador Full Stack',
    period: 'Julio 2026 – Agosto 2026',
    location: 'Remoto',
    industry: 'Seguros & Pólizas',
    color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400',
    badge: 'Remoto',
    highlights: [
      'Desarrollo e integración de módulos web y móviles para gestión de pólizas de seguros, con flujos de emisión, cobro y validación de datos.',
      'Diseño de APIs RESTful y optimización de consultas en PostgreSQL para procesamiento eficiente de información de clientes y productos.',
      'Automatización de flujos operativos e integración de servicios externos para verificación de datos en tiempo real.',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'RESTful APIs', 'Mobile Modules'],
  },
  {
    company: 'Credix',
    role: 'Desarrollador Full Stack & Líder de Desarrollo',
    period: 'Septiembre 2025 – Abril 2026',
    location: 'Remoto',
    industry: 'Fintech & Servicios Financieros',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    badge: 'Remoto · Liderazgo',
    highlights: [
      'Lideré el equipo técnico de una plataforma de crédito y finanzas, coordinando desarrollo, revisión de código y toma de decisiones de arquitectura.',
      'Construí e integré servicios backend con autenticación robusta, manejo de datos transaccionales y automatizaciones con IA.',
      'Implementé integraciones con tasas de cambio en tiempo real y flujos automatizados con n8n para procesos internos.',
    ],
    techStack: ['Python', 'Node.js', 'PostgreSQL', 'JWT', 'n8n', 'IA Integrations'],
  },
  {
    company: 'Fibex Telecom',
    role: 'Desarrollador Full Stack',
    period: 'Agosto 2025 – Abril 2026',
    location: 'Remoto',
    industry: 'Telecomunicaciones & Networking',
    color: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400',
    badge: 'Remoto',
    highlights: [
      'Desarrollé aplicaciones móviles (Android / iOS) para gestión de clientes y monitoreo técnico de infraestructura ISP.',
      'Integración con sistemas CRM y ERP empresariales para visualización de datos de red y soporte técnico.',
    ],
    techStack: ['React Native', 'Android', 'iOS', 'Node.js', 'CRM / ERP'],
  },
  {
    company: 'ARYS-CLUB',
    role: 'Desarrollador Full Stack',
    period: 'Enero 2025 – Febrero 2025',
    location: 'Remoto',
    industry: 'Financiamiento',
    color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400',
    badge: 'Remoto',
    highlights: [
      'Diseño de base de datos relacional y APIs transaccionales para una plataforma de financiamiento y tarjetas comerciales.',
      'Desarrollo de aplicación móvil híbrida con Ionic y Capacitor para acceso a los servicios de la plataforma.',
    ],
    techStack: ['Ionic', 'Capacitor', 'PostgreSQL', 'RESTful APIs'],
  },
  {
    company: 'Newe',
    role: 'Desarrollador Frontend',
    period: 'Noviembre 2024 – Enero 2025',
    location: 'España · Remoto',
    industry: 'Internacional / Frontend',
    color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
    badge: 'Remoto Internacional',
    highlights: [
      'Desarrollo y optimización de interfaces dinámicas en Angular y React para usuarios en España.',
      'Resolución de errores críticos, refactorización de componentes y mejoras de UX/UI en producción.',
    ],
    techStack: ['Angular', 'React', 'TypeScript', 'RxJS'],
  },
  {
    company: 'PólizaQui',
    role: 'Desarrollador Full Stack',
    period: 'Junio 2024 – Mayo 2025',
    location: 'Remoto',
    industry: 'Insurtech & Mobile',
    color: 'from-indigo-500/20 to-violet-500/10 border-indigo-500/30 text-indigo-400',
    badge: 'Remoto',
    highlights: [
      'Desarrollo y mantenimiento de aplicaciones móviles (iOS / Android) y automatizaciones inteligentes con IA para procesos internos.',
    ],
    techStack: ['React Native', 'iOS / Android', 'Automatización IA'],
  },
]

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(0)

  return (
    <section id="experiencia" className="py-24 bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Trayectoria Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiencia Laboral & Proyectos en Producción
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Historial de contribuciones técnicas liderando y escalando productos en sectores de alta exigencia.
          </p>
        </div>

        {/* Interactive Master-Detail on Desktop / Accordion on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company List Tabs */}
          <div className="lg:col-span-4 space-y-2.5">
            {experiences.map((exp, index) => {
              const isSelected = selectedExp === index
              return (
                <button
                  key={index}
                  onClick={() => setSelectedExp(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-zinc-900 border-indigo-500/60 shadow-lg shadow-indigo-500/10'
                      : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/80 hover:border-zinc-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm group-hover:text-indigo-300 transition-colors">
                        {exp.company}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">{exp.role}</p>
                    <p className="text-[11px] text-zinc-500 font-mono">{exp.period}</p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected
                        ? 'text-indigo-400 translate-x-1'
                        : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Detailed Experience Card */}
          <div className="lg:col-span-8">
            {(() => {
              const active = experiences[selectedExp]
              return (
                <div className="rounded-2xl bg-zinc-900/80 border border-zinc-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Header of Experience */}
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-zinc-800">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white">
                          {active.role}
                        </h3>
                      </div>
                      <p className="text-lg font-semibold text-indigo-400 mt-1 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {active.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-zinc-400">
                      <span className="flex items-center gap-1.5 bg-zinc-800/80 px-3 py-1 rounded-lg border border-zinc-700 text-zinc-300">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {active.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-zinc-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {active.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements and Responsibilities */}
                  <div className="py-6 space-y-4">
                    <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-semibold">
                      Responsabilidades & Logros Clave:
                    </h4>
                    <ul className="space-y-3.5">
                      {active.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 leading-relaxed"
                        >
                          <div className="mt-1 flex-shrink-0 p-1 rounded-md bg-indigo-500/20 text-indigo-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-6 border-t border-zinc-800">
                    <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-semibold mb-3">
                      Tecnologías y Enfoque:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {active.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-800/80 text-zinc-200 border border-zinc-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import {
  Code,
  Shield,
  Bot,
  Layers,
  Sparkles,
  Users,
  CheckCircle,
  Database,
  Cpu,
  Workflow,
} from 'lucide-react'

const pillars = [
  {
    title: 'Desarrollo Full Stack',
    subtitle: 'React, Angular, Node.js & Python',
    description:
      'Construyo productos digitales completos de punta a punta: desde interfaces modernas y reactivas hasta APIs robustas y bien estructuradas, asegurando una experiencia de usuario fluida y un backend sólido.',
    icon: Layers,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    title: 'Aplicaciones Móviles',
    subtitle: 'React Native, Expo, Ionic & Capacitor',
    description:
      'Desarrollo apps iOS y Android con rendimiento nativo y experiencia pulida, integrando hardware del dispositivo, notificaciones, mapas y servicios de backend en tiempo real.',
    icon: Shield,
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    title: 'Automatización e Inteligencia Artificial',
    subtitle: 'n8n, TensorFlow, Keras & Modelos RNN/LSTM',
    description:
      'Implemento flujos automatizados con n8n y herramientas de IA para optimizar procesos operativos, reducir tareas manuales e integrar datos externos en tiempo real.',
    icon: Bot,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    title: 'Bases de Datos & Arquitectura',
    subtitle: 'PostgreSQL, SQL Server & APIs RESTful',
    description:
      'Diseño esquemas relacionales eficientes, optimizo consultas complejas y construyo APIs bien documentadas que soportan alta concurrencia con seguridad y rendimiento.',
    icon: Database,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Perfil Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Código que funciona, productos que importan
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Más de 3 años construyendo aplicaciones web y móviles con calidad, trabajando 100% remoto con equipos de diferentes países.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${pillar.color} group-hover:scale-110 transition-transform`}
                >
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-indigo-400 mb-3 font-medium">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/50 flex items-center gap-2 text-xs text-zinc-500 font-mono">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>En producción verificada</span>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Box */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Trabajo en Remoto, Entrego Resultados Reales
              </h3>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                Me siento cómodo trabajando en equipos distribuidos y colaborando de forma asíncrona. He participado en proyectos de distintas industrias, siempre aportando claridad técnica, buenas prácticas y soluciones que escalan. Me gusta entender el negocio para tomar mejores decisiones de código.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400 pt-2">
                <span className="flex items-center gap-1.5 bg-zinc-800/60 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                  <Users className="w-4 h-4 text-indigo-400" /> Trabajo en equipo remoto
                </span>
                <span className="flex items-center gap-1.5 bg-zinc-800/60 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                  <Workflow className="w-4 h-4 text-purple-400" /> Metodologías Ágiles & CI/CD
                </span>
                <span className="flex items-center gap-1.5 bg-zinc-800/60 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                  <Cpu className="w-4 h-4 text-cyan-400" /> IA & Automatización de Procesos
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-zinc-950/80 border border-zinc-800 rounded-xl p-5 space-y-3">
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                Datos Clave
              </p>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-zinc-800/80">
                  <span className="text-zinc-400">Ubicación:</span>
                  <span className="text-zinc-200 font-medium">Caracas, Venezuela</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-800/80">
                  <span className="text-zinc-400">Modalidad:</span>
                  <span className="text-emerald-400 font-semibold">100% Remoto</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-800/80">
                  <span className="text-zinc-400">Nivel:</span>
                  <span className="text-indigo-300 font-semibold">Semi-Senior / Senior</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-800/80">
                  <span className="text-zinc-400">Idiomas:</span>
                  <span className="text-zinc-200 font-medium">ES (Nativo) | EN (B2)</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-400">Educación:</span>
                  <span className="text-indigo-300 font-medium">T.S.U. Informática (IUJO)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

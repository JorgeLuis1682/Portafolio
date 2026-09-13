import React, { useState } from 'react'
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Bot,
  Terminal,
  Cpu,
  Workflow,
  Sparkles,
  CheckCircle,
  Users,
  MessageSquare,
  BrainCircuit,
  Zap,
  Lightbulb,
  ShieldCheck,
  Target,
  GitBranch,
  Layers,
} from 'lucide-react'

const categories = [
  {
    id: 'all',
    name: 'Todas las Tecnologías',
    icon: Sparkles,
  },
  {
    id: 'frontend',
    name: 'Frontend & Mobile',
    icon: Smartphone,
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: Server,
  },
  {
    id: 'database',
    name: 'Bases de Datos',
    icon: Database,
  },
  {
    id: 'ai-devops',
    name: 'IA, DevOps & Automatización',
    icon: Bot,
  },
]

const technologies = [
  // Lenguajes
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/typescript/3178C6',
    fallbackIcon: Code2,
    desc: 'Tipado estático, interfaces robustas y escalabilidad',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    fallbackIcon: Code2,
    desc: 'Asincronía, closures, event loop y modularidad moderna',
  },
  {
    name: 'Python',
    category: 'backend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/python/3776AB',
    fallbackIcon: Terminal,
    desc: 'Desarrollo backend, IA y automatización de scripts',
  },
  {
    name: 'PHP',
    category: 'backend',
    level: 'Intermedio',
    icon: 'https://cdn.simpleicons.org/php/777BB4',
    fallbackIcon: Code2,
    desc: 'Desarrollo web y APIs en Laravel',
  },
  {
    name: 'SQL',
    category: 'database',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/sqlite/003B57',
    fallbackIcon: Database,
    desc: 'Modelado relacional, subconsultas y optimización',
  },

  // Frontend & Móvil
  {
    name: 'React',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
    fallbackIcon: Code2,
    desc: 'Hooks personalizados, Context API, Vite y Next.js',
  },
  {
    name: 'Angular',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/angular/DD0031',
    fallbackIcon: Code2,
    desc: 'RxJS, Servicios, Signals, Dependency Injection y CLI',
  },
  {
    name: 'React Native & Expo',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/expo/000020/FFFFFF',
    fallbackIcon: Smartphone,
    desc: 'Desarrollo móvil nativo cross-platform para iOS y Android',
  },
  {
    name: 'Ionic & Capacitor',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/ionic/3880FF',
    fallbackIcon: Smartphone,
    desc: 'Aplicaciones híbridas y acceso a hardware móvil',
  },
  {
    name: 'Tailwind CSS / Spartan UI',
    category: 'frontend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    fallbackIcon: Layers,
    desc: 'Sistemas de diseño modernos, dark mode y glassmorphism',
  },

  // Backend & APIs
  {
    name: 'Node.js & Express',
    category: 'backend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
    fallbackIcon: Server,
    desc: 'Arquitectura MVC, middlewares, JWT auth y WebSockets',
  },
  {
    name: 'FastAPI',
    category: 'backend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/fastapi/009688',
    fallbackIcon: Server,
    desc: 'APIs asíncronas de alto rendimiento y documentación OpenAPI',
  },
  {
    name: 'Django',
    category: 'backend',
    level: 'Intermedio-Avanzado',
    icon: 'https://cdn.simpleicons.org/django/092E20',
    fallbackIcon: Server,
    desc: 'ORM robusto, paneles administrativos y Django REST Framework',
  },
  {
    name: 'Laravel',
    category: 'backend',
    level: 'Intermedio',
    icon: 'https://cdn.simpleicons.org/laravel/FF2D20',
    fallbackIcon: Server,
    desc: 'Eloquent ORM, migraciones y APIs estructuradas',
  },
  {
    name: 'RESTful & SOAP APIs',
    category: 'backend',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/postman/FF6C37',
    fallbackIcon: Workflow,
    desc: 'Diseño e integración de servicios bancarios y transaccionales',
  },

  // Bases de Datos
  {
    name: 'PostgreSQL (Avanzado)',
    category: 'database',
    level: 'Especialista',
    icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
    fallbackIcon: Database,
    desc: 'Índices avanzados, triggers, funciones PL/pgSQL y tuning',
  },
  {
    name: 'SQL Server',
    category: 'database',
    level: 'Intermedio-Avanzado',
    icon: 'https://cdn.simpleicons.org/microsoftsqlserver/CC292B',
    fallbackIcon: Database,
    desc: 'Consultas complejas, procedimientos almacenados y transacciones',
  },

  // IA, DevOps & Automatización
  {
    name: 'TensorFlow & Keras (RNN/LSTM)',
    category: 'ai-devops',
    level: 'Intermedio-Avanzado',
    icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    fallbackIcon: Cpu,
    desc: 'Redes neuronales recurrentes para ciberseguridad y análisis de datos',
  },
  {
    name: 'n8n Workflow Automation',
    category: 'ai-devops',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/n8n/EA4B71',
    fallbackIcon: Workflow,
    desc: 'Automatización de flujos con IA, webhooks y tasas cambiarias BCV',
  },
  {
    name: 'Git & GitHub',
    category: 'ai-devops',
    level: 'Avanzado',
    icon: 'https://cdn.simpleicons.org/git/F05032',
    fallbackIcon: GitBranch,
    desc: 'Git Flow, pull requests, versionamiento semántico y branching',
  },
  {
    name: 'Docker & CI/CD',
    category: 'ai-devops',
    level: 'Práctico',
    icon: 'https://cdn.simpleicons.org/docker/2496ED',
    fallbackIcon: Layers,
    desc: 'Contenedores, despliegues y pipelines de entrega continua',
  },
]

const softSkills = [
  {
    title: 'Liderazgo & Coordinación de Equipos',
    desc: 'Experiencia dirigiendo desarrolladores, organizando tareas y coordinando entregas con calidad.',
    icon: Users,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    title: 'Comunicación Efectiva Remota',
    desc: 'Trabajo asíncrono fluido, excelente documentación de código y constante alineación con equipos internacionales.',
    icon: MessageSquare,
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    title: 'Resolución Analítica de Problemas',
    desc: 'Capacidad de diagnóstico rápido de errores críticos en producción y debugging técnico estructurado.',
    icon: BrainCircuit,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
  {
    title: 'Autonomía & Responsabilidad Proactiva',
    desc: 'Gestión eficiente del tiempo en modalidad 100% remota con cumplimiento riguroso de entregas.',
    icon: Zap,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    title: 'Visión de Negocio & Producto',
    desc: 'Comprensión profunda del impacto del código en los objetivos estratégicos y rendimiento de la empresa.',
    icon: Target,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    title: 'Buenas Prácticas & Mantenibilidad',
    desc: 'Pasión por el código limpio, revisión de PRs cuidadosa y arquitecturas modulares listas para escalar.',
    icon: ShieldCheck,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
]

function TechCardItem({ tech }) {
  const [imgError, setImgError] = useState(false)
  const FallbackIcon = tech.fallbackIcon || Code2

  return (
    <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/70 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div className="w-10 h-10 rounded-lg bg-zinc-800/80 p-2 border border-zinc-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
            {!imgError && tech.icon ? (
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <FallbackIcon className="w-5 h-5 text-indigo-400" />
            )}
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            {tech.level}
          </span>
        </div>

        <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
          {tech.name}
        </h3>
        <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
          {tech.desc}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-800/50 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
        <CheckCircle className="w-3.5 h-3.5 text-emerald-500/80" />
        <span>Validado en CV</span>
      </div>
    </div>
  )
}

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredTechs =
    activeFilter === 'all'
      ? technologies
      : technologies.filter((t) => t.category === activeFilter)

  return (
    <section id="habilidades" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            Stack Tecnológico & Habilidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Herramientas & Habilidades Técnicas
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Tecnologías probadas en entornos de producción con alta exigencia y seguridad.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 border border-indigo-500'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            )
          })}
        </div>

        {/* Grid of Tech Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTechs.map((tech, idx) => (
            <TechCardItem key={idx} tech={tech} />
          ))}
        </div>

        {/* Dedicated Soft Skills & Professional Competencies Section */}
        <div className="mt-20 pt-16 border-t border-zinc-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              Competencias de Trabajo Remoto
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Habilidades Blandas & Metodología de Trabajo
            </h3>
            <p className="text-sm text-zinc-400">
              Fortalezas interpersonales y operativas que garantizan proyectos exitosos en equipos remotos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300 group"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-4 ${skill.color} group-hover:scale-110 transition-transform`}
                >
                  <skill.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {skill.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

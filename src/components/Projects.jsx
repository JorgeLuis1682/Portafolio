import React, { useState } from 'react'
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  ShieldAlert,
  Building,
  CreditCard,
  Layers,
  CheckCircle,
  Lock,
  ShieldCheck,
  Smartphone,
  Globe,
  Shield,
} from 'lucide-react'

const projectCategories = [
  { id: 'all', name: 'Todos' },
  { id: 'ai-security', name: 'IA & Ciberseguridad' },
  { id: 'fintech-core', name: 'Fintech & Core Bancario' },
  { id: 'web-mobile', name: 'Web & Móvil' },
]

const projects = [
  {
    title: 'Proyecto Cabiri — Samsung AI Hackathon',
    subtitle: 'Ciberseguridad & Análisis de Contraseñas con IA',
    category: 'ai-security',
    featured: true,
    year: '2025',
    description:
      'Herramienta avanzada de ciberseguridad con Inteligencia Artificial que implementa redes neuronales recurrentes (RNN / LSTM en TensorFlow y Keras) para análisis de entropía y generación inteligente de contraseñas de máxima robustez.',
    image: null,
    gradient: 'from-purple-600/30 via-indigo-600/20 to-zinc-900',
    icon: ShieldAlert,
    iconColor: 'text-purple-400 bg-purple-500/20 border-purple-500/30',
    tags: ['TensorFlow', 'Keras', 'RNN/LSTM', 'Python', 'FastAPI', 'Ciberseguridad'],
    metrics: 'Hackathon Samsung Innovation Campus 2025',
    link: null,
  },
  {
    title: 'Core Bancario & Fintech Credix',
    subtitle: 'Plataforma de Finanzas Corporativas',
    category: 'fintech-core',
    featured: true,
    year: '2025 - 2026',
    description:
      'Arquitectura de Core Bancario bajo regulaciones SUDEBAN. Incluye autenticación con JWT/hashing, módulo transaccional de créditos y automatizaciones con IA integradas con la tasa oficial del BCV.',
    image: null,
    gradient: 'from-emerald-600/30 via-teal-600/20 to-zinc-900',
    icon: CreditCard,
    iconColor: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30',
    tags: ['Core Bancario', 'SUDEBAN', 'Python', 'Node.js', 'PostgreSQL', 'BCV IA'],
    metrics: 'Regulación Bancaria SUDEBAN',
    link: null,
  },
  {
    title: 'Gestor de Bienes Municipales',
    subtitle: 'Alcaldía / Sector Público',
    category: 'fintech-core',
    featured: true,
    year: '2025',
    description:
      'Plataforma integral web y móvil para la digitalización, auditoría, trazabilidad y control de inventario de bienes muebles e inmuebles patrimoniales del sector público municipal.',
    image: null,
    gradient: 'from-cyan-600/30 via-blue-600/20 to-zinc-900',
    icon: Building,
    iconColor: 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
    tags: ['React', 'Expo / Mobile', 'Node.js', 'Django', 'PostgreSQL'],
    metrics: 'Sector Público & Auditoría',
    link: null,
  },
  {
    title: 'Sistema de Gestión & Emisión de Pólizas',
    subtitle: 'La Mundial de Seguros',
    category: 'fintech-core',
    featured: false,
    year: '2026',
    description:
      'Módulo web y móvil para la cotización, emisión y cobro de pólizas de seguros (Combinado Residencial y RCG). Diseño de APIs RESTful y optimización de base de datos PostgreSQL.',
    image: null,
    gradient: 'from-blue-600/30 via-indigo-600/20 to-zinc-900',
    icon: ShieldCheck,
    iconColor: 'text-blue-400 bg-blue-500/20 border-blue-500/30',
    tags: ['React', 'Node.js', 'PostgreSQL', 'RESTful APIs', 'Insurtech'],
    metrics: 'En Producción / Pólizas Reales',
    link: null,
  },
  {
    title: 'App ISP & Monitoreo Técnico Móvil',
    subtitle: 'Fibex Telecom',
    category: 'web-mobile',
    featured: false,
    year: '2025 - 2026',
    description:
      'Aplicación móvil híbrida para iOS y Android orientada a clientes de telecomunicaciones e integración con CRM/ERP empresarial para visualización de estado de la red e incidencias técnicas.',
    image: null,
    gradient: 'from-purple-600/30 via-pink-600/20 to-zinc-900',
    icon: Smartphone,
    iconColor: 'text-purple-400 bg-purple-500/20 border-purple-500/30',
    tags: ['React Native', 'Android', 'iOS', 'Node.js', 'CRM / ERP'],
    metrics: 'Telecomunicaciones & Networking',
    link: null,
  },
  {
    title: 'Plataforma Transaccional ARYS-CLUB',
    subtitle: 'Financiamiento & Tarjetas Comerciales',
    category: 'fintech-core',
    featured: false,
    year: '2025',
    description:
      'Modelado de base de datos relacional y servicios transaccionales para plataforma de financiamiento de tarjetas comerciales. Incluye desarrollo móvil híbrido con Ionic y Capacitor.',
    image: null,
    gradient: 'from-amber-600/30 via-orange-600/20 to-zinc-900',
    icon: CreditCard,
    iconColor: 'text-amber-400 bg-amber-500/20 border-amber-500/30',
    tags: ['Ionic', 'Capacitor', 'PostgreSQL', 'APIs Transaccionales'],
    metrics: 'Financiamiento Comercial',
    link: null,
  },
  {
    title: 'Plataforma Frontend Internacional',
    subtitle: 'Newe — España (Remoto)',
    category: 'web-mobile',
    featured: false,
    year: '2024 - 2025',
    description:
      'Desarrollo y optimización de interfaces web reactivas en Angular y React para usuarios en España, garantizando alto rendimiento y experiencia de usuario fluida.',
    image: null,
    gradient: 'from-cyan-600/30 via-teal-600/20 to-zinc-900',
    icon: Globe,
    iconColor: 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
    tags: ['Angular', 'React', 'TypeScript', 'RxJS', 'Frontend España'],
    metrics: 'Proyecto Internacional Europa',
    link: null,
  },
  {
    title: 'PólizaQui Mobile & Automatización IA',
    subtitle: 'Insurtech & Inteligencia Artificial',
    category: 'ai-security',
    featured: false,
    year: '2024 - 2025',
    description:
      'Desarrollo de aplicaciones móviles multiplataforma y flujos automatizados respaldados por modelos de inteligencia artificial para optimizar tiempos de respuesta operativos.',
    image: null,
    gradient: 'from-indigo-600/30 via-violet-600/20 to-zinc-900',
    icon: ShieldAlert,
    iconColor: 'text-indigo-400 bg-indigo-500/20 border-indigo-500/30',
    tags: ['React Native', 'iOS / Android', 'Automatización IA'],
    metrics: 'Insurtech & Modelos de IA',
    link: null,
  },
  {
    title: 'Landing Page Comercial Tequeñópolis',
    subtitle: 'Comercio Local con Menú Interactivo',
    category: 'web-mobile',
    featured: false,
    year: '2024',
    description:
      'Diseño moderno para un negocio gastronómico local de tequeños con catálogo visual y menú interactivo optimizado para conversión móvil.',
    image: '/imagenes_paginas/tequeñopolis.png',
    gradient: 'from-amber-600/20 to-zinc-900',
    icon: Layers,
    iconColor: 'text-amber-400 bg-amber-500/20 border-amber-500/30',
    tags: ['React', 'Tailwind CSS', 'Vite', 'UI/UX'],
    metrics: '100% Responsive & SEO',
    link: 'https://teque-opolis.vercel.app/',
  },
  {
    title: 'CloudSaaS Platform',
    subtitle: 'Landing Page de Servicios en la Nube',
    category: 'web-mobile',
    featured: false,
    year: '2024',
    description:
      'Landing page internacional desarrollada en inglés con estructura modular para exhibición de microservicios y soluciones SaaS corporativas.',
    image: '/imagenes_paginas/Cloudsaas.png',
    gradient: 'from-blue-600/20 to-zinc-900',
    icon: Layers,
    iconColor: 'text-blue-400 bg-blue-500/20 border-blue-500/30',
    tags: ['React', 'Tailwind CSS', 'SaaS Layout', 'English UI'],
    metrics: 'Optimización de Carga',
    link: 'https://cloudsaas.vercel.app/',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="proyectos" className="py-24 bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portafolio Destacado
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos de Alto Nivel & Producción
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Casos de estudio reales en Fintech, Seguros, Telecom, Ciberseguridad con IA y Sector Público.
          </p>
        </div>

        {/* NDA Disclaimer Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-zinc-900/80 border border-indigo-500/30 flex items-start gap-3 shadow-lg">
          <Lock className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
          <p className="text-xs text-zinc-300 leading-relaxed font-normal">
            <strong className="text-white font-semibold">Nota sobre Confidencialidad (NDA):</strong> La mayoría de mis desarrollos empresariales (Fintech, Seguros, Telecomunicaciones y Sector Público) se realizaron bajo acuerdos de confidencialidad estrictos. Se presentan resúmenes de arquitectura y alcance técnico respetando los contratos de no divulgación.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-500'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between overflow-hidden group hover:border-zinc-700 hover:bg-zinc-900/90 transition-all duration-300 ${
                project.featured ? 'lg:col-span-1 border-indigo-500/30' : ''
              }`}
            >
              {/* Card Header / Image or Gradient visual banner */}
              {project.image ? (
                <div className="relative h-48 overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-zinc-950/80 text-zinc-300 border border-zinc-700 backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className={`relative p-6 bg-gradient-to-br ${project.gradient} border-b border-zinc-800/80 flex items-center justify-between`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center ${project.iconColor}`}
                  >
                    <project.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-zinc-950/80 text-zinc-300 border border-zinc-700">
                    {project.year}
                  </span>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs font-mono text-indigo-400 font-semibold mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/70 text-zinc-300 border border-zinc-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics / Accolade */}
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.metrics}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 border-t border-zinc-800/60 bg-zinc-950/40 flex items-center justify-end">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Ver Sitio en Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                    <Lock className="w-3 h-3 text-zinc-600" /> Producción / Privado
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

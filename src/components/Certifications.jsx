import React from 'react'
import {
  GraduationCap,
  Award,
  Languages,
  BookOpen,
  Calendar,
  CheckCircle,
  Building,
  Sparkles,
} from 'lucide-react'

const educations = [
  {
    title: 'T.S.U. en Informática',
    institution: 'Instituto Universitario "Jesús Obrero" (IUJO)',
    period: '2024 – Presente',
    status: 'En curso / Activo',
    icon: GraduationCap,
    desc: 'Formación especializada en ingeniería de software, estructuras de datos, redes, sistemas operativos y bases de datos relacionales.',
  },
  {
    title: 'Bachiller en Ciencias',
    institution: 'Unidad Educativa Tricolor',
    period: '2023',
    status: 'Completado',
    icon: BookOpen,
    desc: 'Bases científicas, razonamiento analítico y matemático orientado a tecnología.',
  },
]

const certifications = [
  {
    title: 'Python e Inteligencia Artificial',
    issuer: 'Samsung Innovation Campus',
    period: 'Oct 2024 – Abr 2025',
    tag: 'IA & Machine Learning',
    color: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    desc: 'Modelos de Deep Learning, redes neuronales RNN/LSTM, TensorFlow, Keras y procesamiento de datos.',
  },
  {
    title: 'Manejo de Base de Datos PostgreSQL',
    issuer: 'Instituto Universitario "Jesús Obrero" (IUJO)',
    period: 'Feb 2025',
    tag: 'Bases de Datos Avanzadas',
    color: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    desc: 'Arquitectura relacional, PL/pgSQL, optimización de queries, triggers e indexación de alto rendimiento.',
  },
  {
    title: 'Fundamentos de Programación, HTML & CSS',
    issuer: 'Certificaciones Google',
    period: 'Abr – Jun 2024',
    tag: 'Google Certified',
    color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    desc: 'Estándares web semánticos, diseño responsivo, algoritmos y buenas prácticas de desarrollo.',
  },
]

export default function Certifications() {
  return (
    <section id="educacion" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            Formación & Especializaciones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educación, Certificaciones e Idiomas
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Compromiso permanente con el aprendizaje continuo y la excelencia técnica.
          </p>
        </div>

        {/* 2 Column Layout: Education vs Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-zinc-800">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              Educación Formal
            </h3>

            <div className="space-y-4">
              {educations.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Languages Bento Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5 text-indigo-400" />
                <h4 className="text-base font-bold text-white">Dominio de Idiomas</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">Español</span>
                    <span className="text-xs font-mono text-emerald-400">Nativo</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Lengua materna y comunicación técnica</p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">Inglés</span>
                    <span className="text-xs font-mono text-indigo-400">Intermedio (B2)</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Lectura técnica fluida y redacción</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-zinc-800">
              <Award className="w-5 h-5 text-purple-400" />
              Certificaciones Profesionales
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span
                        className={`inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full border mb-2 ${cert.color}`}
                      >
                        {cert.tag}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-300 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>

                    <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap">
                      {cert.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

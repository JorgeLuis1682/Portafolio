import React, { useState } from 'react'
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  ExternalLink,
  FileDown,
  Sparkles,
  MessageSquare,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons'

export default function Contact({ onOpenCV }) {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const email = 'jorgeluis.tortoleromarron@gmail.com'
  const phone = '+58 424-170-3630'
  const whatsappUrl = 'https://wa.me/584241703630?text=Hola%20Jorge,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    // Open mailto client with pre-filled content
    const subject = encodeURIComponent(`Contacto desde Portafolio - ${formData.name}`)
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`

    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contacto" className="py-24 bg-zinc-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            Conectemos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Listo para Construir Algo Extraordinario?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Estoy disponible para roles de Liderazgo Técnico, Desarrollo Full Stack o Consultoría.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-zinc-400 font-semibold">
                  Correo Electrónico
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-indigo-400 transition-colors break-all flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>{email}</span>
              </a>
            </div>

            {/* WhatsApp Direct Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-zinc-400 font-semibold">
                  Teléfono & WhatsApp
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Respuesta Rápida
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{phone}</span>
                <ExternalLink className="w-4 h-4 text-zinc-500 ml-auto" />
              </a>
            </div>

            {/* Social Links Matrix */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <span className="text-xs font-mono uppercase text-zinc-400 font-semibold block">
                Redes & Perfiles Profesionales
              </span>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://linkedin.com/in/jorge-tortolero"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-indigo-500/40 hover:bg-zinc-800/60 flex flex-col items-center gap-2 text-center transition-all group"
                >
                  <LinkedinIcon className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                  <span className="text-xs font-medium text-zinc-300">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/JorgeLuis1682"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/60 flex flex-col items-center gap-2 text-center transition-all group"
                >
                  <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="text-xs font-medium text-zinc-300">GitHub</span>
                </a>

                <a
                  href="https://www.instagram.com/jorgeluistm23?igsh=MWhqcGtlbWVsdjVlag=="
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-pink-500/40 hover:bg-zinc-800/60 flex flex-col items-center gap-2 text-center transition-all group"
                >
                  <InstagramIcon className="w-5 h-5 text-zinc-400 group-hover:text-pink-400 transition-colors" />
                  <span className="text-xs font-medium text-zinc-300">Instagram</span>
                </a>
              </div>
            </div>

            {/* Resume Download Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/50 via-zinc-900 to-zinc-900 border border-indigo-500/30 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">Currículum Vitae Oficial</p>
                <p className="text-xs text-zinc-400 mt-0.5">Versiones en Español e Inglés</p>
              </div>
              <button
                onClick={onOpenCV}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Descargar</span>
              </button>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/80 border border-zinc-700/80 shadow-2xl backdrop-blur-xl relative">
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl font-bold text-white">Envíame un Mensaje Directo</h3>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">¡Abriendo tu cliente de correo!</h4>
                  <p className="text-sm text-zinc-300">
                    Tu mensaje fue preparado correctamente para enviarse a{' '}
                    <span className="text-emerald-400 font-semibold">{email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-zinc-400 font-medium">
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-zinc-400 font-medium">
                        Tu Correo
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@empresa.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-zinc-400 font-medium">
                      Mensaje / Oportunidad
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto, posición o consulta..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

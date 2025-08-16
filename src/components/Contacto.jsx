export default function Footer() {
  const socialLinks = [
    {
      name: 'Gmail',
      href: 'mailto:tuemail@gmail.com',
      icon: 'https://cdn.simpleicons.org/gmail/EA4335',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/tuusuario',
      icon: 'https://cdn.simpleicons.org/instagram/E4405F',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/JorgeLuis1682',
      icon: 'https://cdn.simpleicons.org/github/181717',
    },
  ]

  return (
    <section id="contacto" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Contáctame</h2>
          <p className="mt-4 text-lg text-gray-600">
            ¿Tienes una idea, propuesta o solo quieres saludar? Estoy a un clic de distancia.
          </p>

          {/* Botón para descargar CV */}
          <div className="mt-8">
            <a
              href="/tu-cv.pdf"
              download
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src={link.icon}
                alt={link.name}
                className="h-8 w-8 mb-2 transition-opacity group-hover:opacity-80"
              />
              <span className="text-sm text-gray-700 font-medium">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Jorge Tortolero. Gracias por visitar mi Portafolio
        </div>
      </div>
    </section>
  )
}

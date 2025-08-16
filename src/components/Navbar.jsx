import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre_mi' },
  { name: 'Tecnologías', href: '#tecnologias' },
  { name: 'Portafolio', href: '#portafolio' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-gray-200 backdrop-blur-md shadow-md border-b border-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg rounded-full w-9 h-9 flex items-center justify-center shadow-md">
              JT
            </div>
            <span className="text-gray-800 font-semibold text-lg tracking-wide">Jorge Tortolero</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-indigo-600 text-sm font-medium transition duration-300 ease-in-out group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden bg-gray-200 border-t border-gray-300">
        <div className="space-y-1 px-4 py-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition duration-200"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

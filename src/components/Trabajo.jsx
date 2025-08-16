import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Despliegue ágil',
    description:
      'Automatizo procesos de desarrollo y despliegue para entregar aplicaciones de forma rápida y confiable.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Seguridad integrada',
    description:
      'Implemento buenas prácticas de autenticación y protección de datos, garantizando entornos seguros desde el backend.',
    icon: LockClosedIcon,
  },
  {
    name: 'Flujos eficientes',
    description:
      'Diseño estructuras lógicas y escalables que optimizan el rendimiento y la experiencia del usuario.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Código limpio y mantenible',
    description:
      'Escribo soluciones claras y organizadas, facilitando la colaboración y la evolución del proyecto a largo plazo.',
    icon: FingerPrintIcon,
  },
]

export default function Trabajo() {
  return (
    <section id="sobre_mi" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">Jorge Tortolero</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Programador
          </p>
          <p className="mt-6 text-lg text-gray-700">
            Tengo 2 años de experiencia en este mundo y en tecnologías modernas como <strong>React, Node.js y PostgreSQL</strong>, y me especializo en crear aplicaciones escalables y mantenibles. Me apasiona escribir código limpio, seguir buenas prácticas y aprender constantemente. Disfruto colaborar en equipos multidisciplinarios, aportando al front y al back compromiso técnico y una actitud proactiva para enfrentar desafíos y mejorar la calidad del producto.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

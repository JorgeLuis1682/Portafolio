import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const projects = [
  {
    title: 'Landing Page tequeñopolis',
    description: 'Diseño moderno para un negocio local de tequeños con menú interactivo.',
    image: 'public/imagenes_paginas/tequeñopolis.png',
    link: 'https://teque-opolis.vercel.app/',
  },
  {
    title: 'Landing page CloudSaaS',
    description: 'Landing page hecha en ingles como trabajo para universitarios.',
    image: 'public/imagenes_paginas/cloudsaas.png',
    link: 'https://cloudsaas.vercel.app/',
  },
  {
    title: 'Portafolio personal',
    description: 'Pagina para mostrar mis trabajos y que continuamente estare actualizando.',
    image: 'public/imagenes_paginas/portafolio.png',
    link: 'https://portafoliojorgetortolero.vercel.app/',
  },
]

export default function Portafolio() {
  return (
    <section id="portafolio" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">Mis proyectos</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Portafolio
          </p>
          <p className="mt-6 text-lg text-gray-700">
            Aquí puedes ver algunos de los proyectos que he desarrollado. Cada uno refleja mi enfoque en diseño funcional, código limpio y soluciones escalables tanto en frontend como en backend (próximamente más).
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <Card key={idx} className="shadow-sm border-0 h-100">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title className="text-xl font-semibold text-gray-900">{project.title}</Card.Title>
                  <Card.Text className="text-gray-600">{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    Ver proyecto
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

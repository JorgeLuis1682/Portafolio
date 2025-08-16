const technologies = [
  { name: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'PostgreSQL', src: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Git', src: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'Python', src: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Django', src: 'https://cdn.simpleicons.org/django/092E20' },
  { name: 'FastAPI', src: 'https://cdn.simpleicons.org/fastapi/009688' },
]

export default function About() {
  return (
    <section id="tecnologias" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Tecnologías que uso</h2>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
            Estas son algunas de las herramientas y tecnologías que utilizo para desarrollar aplicaciones modernas, escalables y mantenibles tanto en frontend como en backend.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-10 sm:grid-cols-3 lg:mt-20 lg:max-w-none lg:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center justify-center gap-4">
              <img src={tech.src} alt={tech.name} className="h-16 w-16" />
              <span className="text-white text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

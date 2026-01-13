import { Award, Briefcase, Code, Database, GraduationCap, Shield, Users } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2019',
      title: 'Ingreso a la Policía Provincial',
      description: 'Inicio de carrera como oficial de policía',
    },
    {
      year: '2020',
      title: 'Departamento de Inteligencia Criminal',
      description: 'Asignación al Departamento de Inteligencia Criminal de Tucumán',
    },
    {
      year: '2021',
      title: 'Formación en Desarrollo Web',
      description: 'Certificación en desarrollo full stack y análisis de datos',
    },
    {
      year: '2022',
      title: 'Primer Proyecto de Inteligencia',
      description: 'Desarrollo del Sistema de Análisis Criminal Intelligence',
    },
    {
      year: '2023',
      title: 'Múltiples Proyectos',
      description: 'Dashboard, API, y sistemas de análisis de datos para operaciones criminales',
    },
    {
      year: '2024',
      title: 'Especialización',
      description: 'Profundización en architecture de sistemas y machine learning',
    },
    {
      year: '2026',
      title: 'Tecnicatura en Seguridad Informática',
      description: 'Inicio de estudios formales en ciberseguridad en Teclab',
    },
  ];

  const education = [
    {
      degree: 'Tecnicatura en Seguridad Informática',
      institution: 'Teclab',
      period: 'Enero 2026 - Actualidad',
      description:
        'Formación profesional en ciberseguridad, análisis de vulnerabilidades, redes y protección de sistemas informáticos.',
      current: true,
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
    },
    {
      category: 'Backend',
      icon: Briefcase,
      skills: ['Node.js', 'Express', 'TypeScript', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Base de Datos',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Redis', 'Neo4j'],
    },
    {
      category: 'DevOps & Seguridad',
      icon: Shield,
      skills: ['Docker', 'AWS', 'GitHub Actions', 'SSL/TLS', 'JWT Auth'],
    },
    {
      category: 'Análisis de Datos',
      icon: Award,
      skills: ['Python', 'SQL', 'Power BI', 'Tableau', 'Machine Learning'],
    },
    {
      category: 'Liderazgo',
      icon: Users,
      skills: ['Gestión de Proyectos', 'Team Leadership', 'Mentoría', 'Comunicación'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-police-darker via-police-dark to-police-blue py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold text-police-light lg:text-6xl">
                Acerca de <span className="text-police-gold">Mí</span>
              </h1>
              <p className="mb-4 text-xl text-police-light opacity-80">
                Oficial de Policía Provincial Tucumán | Analista de Datos | Desarrollador Full Stack
              </p>
              <p className="text-lg leading-relaxed text-police-light opacity-70">
                Combino mi experiencia policial con habilidades técnicas avanzadas para desarrollar
                soluciones tecnológicas que mejoren los procesos de inteligencia criminal.
              </p>
            </div>
            <div className="relative">
              <div className="flex h-96 w-full items-center justify-center rounded-lg border border-police-gold border-opacity-20 bg-gradient-to-br from-police-blue via-shield-blue to-police-dark">
                <div className="text-center">
                  <Shield className="mx-auto mb-4 h-32 w-32 text-police-gold opacity-20" />
                  <p className="text-lg font-bold text-police-light">Dedicado a la excelencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="bg-police-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-police-light">
            Mi <span className="text-police-gold">Historia</span>
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-police-gold">Trayectoria Profesional</h3>
              <p className="mb-4 leading-relaxed text-police-light opacity-75">
                Oficial de la Policía Provincial de Tucumán desde 2019, trabajando en el
                Departamento de Inteligencia Criminal. Mi rol combina trabajo de campo tradicional
                con análisis de datos y desarrollo de soluciones tecnológicas.
              </p>
              <p className="mb-4 leading-relaxed text-police-light opacity-75">
                Especializado en identificar problemas operacionales y desarrollar aplicaciones web
                que optimicen procesos de análisis criminal intelligence.
              </p>
              <p className="leading-relaxed text-police-light opacity-75">
                Manejo fluido de información sensible, comprensión profunda de seguridad de datos y
                arquitectura de sistemas escalables para millones de registros.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-police-gold">Mi Enfoque</h3>
              <ul className="space-y-4">
                {[
                  'Soluciones personalizadas que resuelven problemas reales',
                  'Código limpio, mantenible y documentado',
                  'Seguridad y privacidad como prioridad máxima',
                  'Escalabilidad desde el inicio del proyecto',
                  'Colaboración efectiva con equipos multidisciplinarios',
                  'Continuo aprendizaje y mejora profesional',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-police-gold"></span>
                    <span className="text-police-light opacity-75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-b from-police-dark to-police-darker py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-police-light">
            Mi <span className="text-police-gold">Timeline</span>
          </h2>

          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-police-gold via-police-blue to-transparent"></div>

            {/* Eventos */}
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Contenido */}
                  <div className="flex-1">
                    <div className="rounded-lg border border-police-gold border-opacity-20 bg-police-blue bg-opacity-10 p-6 transition-all hover:border-opacity-40">
                      <span className="mb-2 inline-block rounded bg-police-accent px-3 py-1 text-xs font-bold text-white">
                        {event.year}
                      </span>
                      <h3 className="mb-2 text-xl font-bold text-police-light">{event.title}</h3>
                      <p className="text-police-light opacity-70">{event.description}</p>
                    </div>
                  </div>

                  {/* Punto */}
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-police-dark bg-gradient-police">
                    <span className="h-4 w-4 rounded-full bg-police-gold"></span>
                  </div>

                  {/* Espaciador */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formación Académica */}
      <section className="bg-police-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-police-light">
            Formación <span className="text-police-gold">Académica</span>
          </h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-1 lg:grid-cols-2">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group rounded-lg border border-police-gold border-opacity-20 bg-police-blue bg-opacity-10 p-8 transition-all duration-300 hover:border-opacity-40 hover:bg-opacity-20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-police transition-all group-hover:shadow-lg">
                    <GraduationCap className="h-8 w-8 text-police-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-bold text-police-light">{edu.degree}</h3>
                      {edu.current && (
                        <span className="animate-pulse rounded bg-police-accent px-3 py-1 text-xs font-bold text-white">
                          En curso
                        </span>
                      )}
                    </div>
                    <p className="mb-1 font-semibold text-police-gold">{edu.institution}</p>
                    <p className="mb-3 text-sm text-police-light opacity-60">{edu.period}</p>
                    <p className="text-police-light opacity-75">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="bg-gradient-to-b from-police-dark to-police-darker py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-police-light">
            Mis <span className="text-police-gold">Habilidades</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={index}
                  className="group rounded-lg border border-police-gold border-opacity-20 bg-police-blue bg-opacity-10 p-8 transition-all duration-300 hover:border-opacity-40 hover:bg-opacity-20"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-police transition-all group-hover:shadow-lg">
                    <Icon className="h-6 w-6 text-police-gold" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-police-light">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-police-gold border-opacity-20 bg-police-blue bg-opacity-30 px-3 py-1 text-xs font-bold text-police-gold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-police-blue border-opacity-20 bg-gradient-to-r from-police-blue via-police-dark to-police-blue py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-police-light">¿Quieres trabajar juntos?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-police-light opacity-70">
            Estoy disponible para consultas, proyectos y colaboraciones profesionales.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-police-gold border-opacity-30 bg-gradient-police px-8 py-3 text-sm font-bold uppercase tracking-wider text-police-gold transition-all duration-300 hover:shadow-lg"
          >
            Iniciar Conversación
          </a>
        </div>
      </section>
    </div>
  );
}

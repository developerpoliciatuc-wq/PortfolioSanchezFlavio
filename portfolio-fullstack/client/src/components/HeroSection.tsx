import { ArrowRight, Download, Code2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-police-darker via-police-dark to-police-blue">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-20 h-72 w-72 animate-pulse-slow rounded-full bg-police-blue mix-blend-multiply blur-3xl filter"></div>
        <div
          className="absolute -bottom-8 right-10 h-72 w-72 animate-pulse-slow rounded-full bg-police-accent mix-blend-multiply blur-3xl filter"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Texto */}
          <div className="animate-fade-in space-y-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-police-gold border-opacity-30 bg-police-blue bg-opacity-20 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-police-gold"></span>
              <span className="text-sm font-semibold uppercase tracking-wider text-police-gold">
                Bienvenido
              </span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl font-bold leading-tight text-police-light lg:text-6xl">
              Flavio
              <br />
              <span className="bg-gradient-to-r from-police-gold via-yellow-400 to-police-gold bg-clip-text text-transparent">
                Sánchez
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl text-police-light opacity-80">
              Desarrollador Full Stack | Analista de Datos | Seguridad Informática
            </p>

            {/* Descripción */}
            <p className="max-w-lg text-lg leading-relaxed text-police-light opacity-70">
              Oficial de Policía del Departamento de Inteligencia Criminal - Tucumán. Especializado
              en el desarrollo de soluciones tecnológicas para análisis criminal intelligence y
              aplicaciones web modernas con React y Node.js.
            </p>

            {/* Botones */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-lg border border-police-gold border-opacity-30 bg-gradient-police px-8 py-3 text-sm font-bold uppercase tracking-wider text-police-gold transition-all duration-300 hover:shadow-lg"
              >
                Ver Proyectos
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-police-gold bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-police-gold transition-all duration-300 hover:bg-police-gold hover:text-police-dark"
              >
                Contacto
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-police-blue border-opacity-30 bg-police-blue bg-opacity-20 px-8 py-3 text-sm font-bold uppercase tracking-wider text-police-light transition-all duration-300 hover:bg-opacity-40"
              >
                <Download className="h-5 w-5" />
                CV
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-police-blue border-opacity-20 pt-8">
              <div>
                <div className="text-3xl font-bold text-police-gold">5+</div>
                <p className="text-sm text-police-light opacity-60">Años Experiencia</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-police-gold">20+</div>
                <p className="text-sm text-police-light opacity-60">Proyectos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-police-gold">100%</div>
                <p className="text-sm text-police-light opacity-60">Dedicación</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden items-center justify-center md:flex">
            <div className="relative h-64 w-64 lg:h-80 lg:w-80">
              {/* Card principal */}
              <div className="absolute inset-0 flex transform items-center justify-center rounded-2xl border border-police-gold border-opacity-20 bg-gradient-to-br from-police-blue via-shield-blue to-police-dark shadow-2xl transition-transform duration-300 hover:scale-105">
                <div className="text-center">
                  <Code2 className="mx-auto mb-4 h-16 w-16 text-police-gold" />
                  <p className="font-bold uppercase tracking-wider text-police-gold">Full Stack</p>
                  <p className="mt-2 text-sm text-police-light opacity-60">Developer</p>
                </div>
              </div>

              {/* Card flotante 1 */}
              <div className="absolute -right-8 -top-8 flex h-32 w-40 transform items-center justify-center rounded-xl border border-police-gold border-opacity-30 bg-gradient-to-br from-police-accent to-red-700 shadow-lg transition-transform duration-300 hover:scale-110">
                <div className="text-center">
                  <BarChart3 className="mx-auto mb-2 h-8 w-8 text-white" />
                  <p className="text-xs font-bold uppercase text-white">Data</p>
                  <p className="text-xs text-white opacity-75">Analysis</p>
                </div>
              </div>

              {/* Card flotante 2 */}
              <div className="absolute -bottom-8 -left-8 flex h-32 w-40 transform items-center justify-center rounded-xl border border-police-gold border-opacity-30 bg-gradient-to-br from-police-blue to-shield-blue shadow-lg transition-transform duration-300 hover:scale-110">
                <div className="text-center">
                  <Code2 className="mx-auto mb-2 h-8 w-8 text-police-gold" />
                  <p className="text-xs font-bold uppercase text-police-gold">React &</p>
                  <p className="text-xs text-police-gold">Node.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea animada inferior */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-police-light opacity-60">
            Scroll para explorar
          </span>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-police-gold">
            <span className="mt-2 h-2 w-1 animate-bounce rounded-full bg-police-gold"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

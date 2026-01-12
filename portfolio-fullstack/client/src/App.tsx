import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from './context/ThemeContext';
import { QueryProvider } from './providers/QueryProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';

// Lazy loading de páginas
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));

// Componente de error fallback
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-police-dark">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-police-gold mb-4">
          Algo salió mal
        </h1>
        <p className="text-police-light mb-4">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-police-gold text-police-dark rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Recargar página
        </button>
      </div>
    </div>
  );
}

// Componente de loading
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-police-dark">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-police-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-police-light">Cargando...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryProvider>
        <ThemeProvider>
          <Router>
            <div className="bg-police-dark min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </QueryProvider>
    </ErrorBoundary>
  );
}

export default App;

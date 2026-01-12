# 🚀 Portfolio Profesional - Flavio Sánchez (v2.0)

> **Portfolio Full Stack Modernizado** | Analista de Datos & Desarrollador | Policía Provincial de Tucumán

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.21-000000?logo=express)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.2-2d3748?logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql)](https://www.postgresql.org/)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Desarrollo](#-desarrollo)
- [Docker](#-docker)
- [Testing](#-testing)
- [Deploy](#-deploy)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)

---

## ✨ Características

### 🎨 Frontend Moderno

- ⚡ **React 18.3** con Hooks y Context API
- 🚀 **Vite 6** para build ultrarrápido
- 🎭 **TypeScript 5.7** con strict mode
- 💅 **TailwindCSS 4.0** para estilos
- 🔄 **React Query** para gestión de estado del servidor
- 📝 **React Hook Form + Zod** para formularios y validación
- 🎯 **Lazy Loading** y code splitting
- 🛡️ **Error Boundaries** para manejo de errores
- 🎨 **Dark Theme** con diseño policial personalizado

### 🔧 Backend Robusto

- 🚂 **Express 4.21** con TypeScript
- 🗄️ **Prisma 6.2** como ORM
- 🐘 **PostgreSQL 16** base de datos
- ✅ **Zod** para validación de datos
- 🔐 **Helmet** para seguridad HTTP
- ⏱️ **Rate Limiting** por endpoint
- 📝 **Winston** para logging estructurado
- 🗜️ **Compression** para optimización
- ✉️ **Nodemailer** para envío de emails

### 🛠️ DevOps y Tooling

- 🐳 **Docker** & **Docker Compose** configurados
- 🔍 **ESLint 9** con flat config
- 💎 **Prettier** con plugin Tailwind
- 🧪 **Vitest** para testing
- 📊 **Coverage Reports** configurado
- 🔄 **Hot Module Replacement (HMR)**
- 📦 **Multi-stage Docker builds**

---

## 🛠️ Stack Tecnológico

### Frontend

```json
{
  "framework": "React 18.3.1",
  "build": "Vite 6.0.5",
  "language": "TypeScript 5.7.3",
  "styling": "TailwindCSS 4.0.0",
  "routing": "React Router 6.28.0",
  "state": "React Query 5.62.7",
  "forms": "React Hook Form 7.54.2",
  "validation": "Zod 3.24.1",
  "http": "Axios 1.7.9",
  "icons": "Lucide React 0.469.0"
}
```

### Backend

```json
{
  "runtime": "Node.js 20+",
  "framework": "Express 4.21.2",
  "language": "TypeScript 5.7.3",
  "orm": "Prisma 6.2.1",
  "database": "PostgreSQL 16",
  "validation": "Zod 3.24.1",
  "security": "Helmet 8.0.0",
  "logger": "Winston 3.17.0",
  "email": "Nodemailer 6.9.16"
}
```

### DevOps

```json
{
  "containerization": "Docker",
  "orchestration": "Docker Compose",
  "linting": "ESLint 9.17.0",
  "formatting": "Prettier 3.4.2",
  "testing": "Vitest 2.1.8"
}
```

---

## 📦 Requisitos Previos

- **Node.js** >= 20.0.0
- **npm** >= 10.0.0
- **PostgreSQL** >= 16 (o usar Docker)
- **Docker** (opcional, recomendado)
- **Git**

---

## 🚀 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/FRSanchezflavio/PortfolioSanchezFlavio.git
cd PortfolioSanchezFlavio/portfolio-fullstack
```

### 2. Instalar Dependencias

```bash
# Opción 1: Instalar todo de una vez
npm run install:all

# Opción 2: Instalar manualmente
npm install
cd client && npm install
cd ../server && npm install
```

### 3. Configurar Variables de Entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar con tus valores
nano .env
```

**Variables importantes:**

```env
# Base de datos
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio_db

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-password-de-app

# CORS
CORS_ORIGIN=http://localhost:5173
```

### 4. Configurar Base de Datos

```bash
# Generar cliente de Prisma
npm run db:generate --prefix server

# Ejecutar migraciones
npm run db:migrate --prefix server

# (Opcional) Abrir Prisma Studio
npm run db:studio --prefix server
```

---

## 💻 Desarrollo

### Desarrollo Local (Sin Docker)

```bash
# Iniciar todo (cliente + servidor)
npm run dev

# Solo cliente (puerto 5173)
npm run dev:client

# Solo servidor (puerto 5000)
npm run dev:server
```

Accede a:

- **Cliente**: http://localhost:5173
- **Servidor**: http://localhost:5000
- **API Health**: http://localhost:5000/health

### Con Hot Reload Automático

El proyecto está configurado para hot reload:

- **Cliente**: Vite HMR
- **Servidor**: tsx watch mode

---

## 🐳 Docker

### Desarrollo con Docker (Recomendado)

```bash
# Iniciar todos los servicios
docker-compose up

# En segundo plano
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

### Producción con Docker

```bash
# Build y ejecutar
docker-compose --profile production up -d

# Ver logs
docker-compose --profile production logs -f

# Detener
docker-compose --profile production down
```

### Comandos Útiles de Docker

```bash
# Reconstruir imágenes
docker-compose build --no-cache

# Limpiar todo
docker-compose down -v
docker system prune -a

# Ejecutar comando en contenedor
docker-compose exec app-dev sh
```

---

## 🧪 Testing

### Ejecutar Tests

```bash
# Todos los tests
npm test

# Solo cliente
npm run test:client

# Solo servidor
npm run test:server

# Tests con UI interactiva
npm run test:ui --prefix client

# Coverage
npm run test:coverage
```

### Linting y Formateo

```bash
# Lint
npm run lint

# Fix automático
npm run lint:fix

# Formatear código
npm run format

# Type checking
npm run type-check
```

---

## 🏗️ Build y Deploy

### Build de Producción

```bash
# Build completo
npm run build

# Solo cliente
npm run build:client

# Solo servidor
npm run build:server
```

### Ejecutar en Producción

```bash
# Iniciar servidor de producción
npm start

# O con Docker
docker-compose --profile production up -d
```

### Deploy

Los builds se generan en:

- **Cliente**: `client/dist/`
- **Servidor**: `server/dist/`

Puedes deployar en:

- **Cliente**: Vercel, Netlify, Cloudflare Pages
- **Servidor**: Railway, Render, DigitalOcean, AWS
- **Full Stack**: Heroku, Fly.io, Azure

---

## 📁 Estructura del Proyecto

```
portfolio-fullstack/
├── client/                    # Frontend React + Vite
│   ├── src/
│   │   ├── components/       # Componentes reutilizables
│   │   ├── pages/           # Páginas principales
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilidades (api, validations)
│   │   ├── providers/       # Context providers
│   │   ├── styles/          # Estilos globales
│   │   └── test/            # Setup de testing
│   ├── public/              # Archivos estáticos
│   ├── eslint.config.js     # ESLint config
│   ├── vite.config.ts       # Vite config
│   └── package.json
│
├── server/                    # Backend Express + TypeScript
│   ├── src/
│   │   ├── controllers/     # Controladores
│   │   ├── middleware/      # Middlewares
│   │   ├── routes/          # Rutas API
│   │   ├── schemas/         # Esquemas Zod
│   │   ├── services/        # Servicios
│   │   └── utils/           # Utilidades
│   ├── logs/                # Logs de Winston
│   ├── eslint.config.js     # ESLint config
│   ├── tsconfig.json        # TypeScript config
│   └── package.json
│
├── prisma/                    # Esquema de Prisma
│   └── schema.prisma
│
├── scripts/                   # Scripts útiles
│   └── setup-database.sql
│
├── docker-compose.yml         # Orquestación Docker
├── Dockerfile                 # Build de producción
├── Dockerfile.dev             # Build de desarrollo
├── .env.example               # Variables de entorno ejemplo
├── .gitignore
├── package.json               # Scripts raíz
└── README.md
```

---

## 📜 Scripts Disponibles

### Scripts Raíz

```bash
npm run dev              # Iniciar desarrollo (cliente + servidor)
npm run build            # Build de producción completo
npm start                # Iniciar en producción
npm test                 # Ejecutar todos los tests
npm run lint             # Lint completo
npm run lint:fix         # Fix linting automático
npm run format           # Formatear código
npm run type-check       # Type checking completo
npm run install:all      # Instalar todas las dependencias
npm run clean            # Limpiar node_modules y builds
npm run docker:dev       # Docker desarrollo
npm run docker:build     # Build Docker
npm run docker:down      # Detener Docker
```

### Scripts Cliente

```bash
npm run dev              # Vite dev server
npm run build            # Build optimizado
npm run preview          # Preview del build
npm test                 # Tests con Vitest
npm run test:ui          # Tests con UI
npm run test:coverage    # Coverage report
npm run lint             # ESLint
npm run lint:fix         # Fix ESLint
npm run format           # Prettier
npm run type-check       # TypeScript check
```

### Scripts Servidor

```bash
npm run dev              # tsx watch mode
npm run build            # Compilar TypeScript
npm start                # Iniciar producción
npm test                 # Tests con Vitest
npm run test:coverage    # Coverage
npm run lint             # ESLint
npm run lint:fix         # Fix ESLint
npm run format           # Prettier
npm run db:generate      # Generar Prisma client
npm run db:push          # Push schema a DB
npm run db:migrate       # Ejecutar migraciones
npm run db:studio        # Abrir Prisma Studio
npm run db:reset         # Reset database
```

---

## 🔧 Configuración Avanzada

### Variables de Entorno Completas

Ver [.env.example](.env.example) para todas las variables disponibles.

### Configuración de Email

Para Gmail, necesitas una "App Password":

1. Ve a tu cuenta de Google
2. Seguridad → Verificación en 2 pasos
3. App Passwords → Generar
4. Usa esa contraseña en `EMAIL_PASS`

### Rate Limiting

Configurado en `server/src/middleware/rateLimiter.ts`:

- General: 100 req/15min
- Contact: 5 req/hora
- API: 50 req/15min

---

## 🐛 Troubleshooting

### Error: Cannot find module

```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de TypeScript

Asegúrate de usar extensiones `.js` en imports (servidor):

```typescript
import { x } from './module.js';  // ✅
```

### Docker no inicia

```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

### Puerto ya en uso

```bash
# Linux/Mac
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

## 📝 Licencia

MIT License - Ver [LICENSE](LICENSE) para más detalles.

---

## 👤 Autor

**Flavio Sánchez**

- Analista de Datos & Desarrollador Full Stack
- Departamento de Inteligencia Criminal - Policía Provincial de Tucumán
- GitHub: [@FRSanchezflavio](https://github.com/FRSanchezflavio)

---

## 🌟 Agradecimientos

Gracias por visitar este proyecto. Si te gusta, ¡no olvides darle una ⭐!

---

## 📚 Documentación Adicional

- [Guía de Modernización](MODERNIZATION_GUIDE.md)
- [Changelog](CHANGELOG.md)
- [Contributing Guidelines](CONTRIBUTING.md)

---

**Hecho con ❤️ en Tucumán, Argentina 🇦🇷**

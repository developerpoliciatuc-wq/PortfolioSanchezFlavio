# 🚀 Portfolio Modernizado - Guía de Migración v2.0

## 📋 Resumen de Cambios

### ✅ Actualizaciones Realizadas

#### 1. **Dependencias Actualizadas** (v2.0)

**Cliente:**

- ⬆️ React 18.2 → 18.3.1
- ⬆️ Vite 4.4 → 6.0.5
- ⬆️ TypeScript 5.2 → 5.7.3
- ⬆️ TailwindCSS 3.3 → 4.0.0
- ⬆️ React Router 6.16 → 6.28.0
- ➕ @tanstack/react-query 5.62.7
- ➕ Zod 3.24.1
- ➕ React Hook Form 7.54.2
- ➕ ESLint 9+ (flat config)
- ➕ Prettier 3.4.2

**Servidor:**

- ⬆️ Express 4.17 → 4.21.2
- ⬆️ Prisma 5.0 → 6.2.1
- ⬆️ TypeScript 5.2 → 5.7.3
- ➕ Helmet 8.0.0
- ➕ Winston 3.17.0
- ➕ Express Rate Limit 7.5.0
- ➕ Zod 3.24.1
- ➕ Compression 1.7.5
- ➕ Vitest 2.1.8

#### 2. **Mejoras de Arquitectura**

**Cliente:**

- ✅ React Query para gestión de estado del servidor
- ✅ Lazy loading de componentes
- ✅ Error boundaries
- ✅ Validación con Zod y React Hook Form
- ✅ Cliente API centralizado con Axios
- ✅ Loading states mejorados

**Servidor:**

- ✅ Validación con Zod
- ✅ Rate limiting por ruta
- ✅ Logging estructurado con Winston
- ✅ Helmet para seguridad
- ✅ Compresión de respuestas
- ✅ Manejo de errores mejorado
- ✅ Graceful shutdown

#### 3. **Configuraciones Modernizadas**

- ✅ TypeScript strict mode completo
- ✅ ESLint 9 flat config
- ✅ Prettier con plugin Tailwind
- ✅ Vite con optimizaciones avanzadas
- ✅ Docker multi-stage builds
- ✅ Docker Compose para desarrollo y producción

#### 4. **DevOps y Tooling**

- ✅ Dockerfiles optimizados
- ✅ Docker Compose configurado
- ✅ Scripts de desarrollo mejorados
- ✅ Variables de entorno documentadas
- ✅ Healthchecks implementados

---

## 🔧 Pasos de Instalación

### 1. Instalar Dependencias

```bash
# Raíz del proyecto
npm install

# Cliente
cd client
npm install

# Servidor
cd ../server
npm install
```

### 2. Configurar Variables de Entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar .env con tus valores
```

### 3. Configurar Base de Datos

```bash
# Generar cliente de Prisma
npm run db:generate --prefix server

# Ejecutar migraciones
npm run db:migrate --prefix server
```

---

## 🚀 Comandos de Desarrollo

### Desarrollo Local

```bash
# Iniciar todo (cliente + servidor)
npm run dev

# Solo cliente
npm run dev:client

# Solo servidor
npm run dev:server
```

### Docker (Recomendado)

```bash
# Desarrollo con Docker
npm run docker:dev

# Producción con Docker
docker-compose --profile production up

# Detener contenedores
npm run docker:down
```

---

## 🧪 Testing y Quality

```bash
# Ejecutar tests
npm test

# Tests con UI
npm run test:ui --prefix client

# Coverage
npm run test:coverage

# Linting
npm run lint

# Fix linting
npm run lint:fix

# Formateo
npm run format

# Type checking
npm run type-check
```

---

## 📦 Build y Deploy

```bash
# Build completo
npm run build

# Solo cliente
npm run build:client

# Solo servidor
npm run build:server

# Iniciar producción
npm start
```

---

## 🐳 Docker

### Desarrollo

```bash
docker-compose up
```

### Producción

```bash
docker-compose --profile production up -d
```

---

## 📝 Cambios en el Código

### Nuevos Archivos Importantes

**Cliente:**

- `src/lib/api.ts` - Cliente Axios centralizado
- `src/lib/validations.ts` - Esquemas Zod
- `src/hooks/useContact.ts` - Hook React Query
- `src/providers/QueryProvider.tsx` - Provider React Query
- `src/components/ContactFormModern.tsx` - Formulario mejorado
- `eslint.config.js` - ESLint 9 flat config
- `.prettierrc` - Configuración Prettier

**Servidor:**

- `src/schemas/contact.schema.ts` - Validación Zod
- `src/middleware/validation.ts` - Middleware validación
- `src/middleware/rateLimiter.ts` - Rate limiting
- `src/utils/logger-winston.ts` - Logger Winston
- `eslint.config.js` - ESLint 9 flat config

**Docker:**

- `Dockerfile` - Multi-stage para producción
- `Dockerfile.dev` - Desarrollo con hot reload
- `docker-compose.yml` - Orquestación completa
- `.dockerignore` - Archivos ignorados

---

## ⚠️ Breaking Changes

1. **TypeScript**: Ahora usa `module: "ESNext"` con extensiones `.js` en imports
2. **ESLint**: Migrado a flat config (v9+)
3. **Vite**: Plugin cambiado a `@vitejs/plugin-react-swc` para mejor performance
4. **Servidor**: Ahora requiere Node 20+

---

## 🔄 Migración del Código Antiguo

Si tienes componentes antiguos, sigue estos pasos:

### Ejemplo: Migrar un Componente

**Antes:**

```tsx
const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  // ...
}
```

**Después:**

```tsx
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

const MyComponent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['myData'],
    queryFn: () => api.get('/data').then(res => res.data),
  });

  // ...
}
```

---

## 📚 Recursos Adicionales

- [React Query Docs](https://tanstack.com/query/latest)
- [Zod Documentation](https://zod.dev/)
- [Vite 6 Guide](https://vitejs.dev/guide/)
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [TypeScript 5.7](https://www.typescriptlang.org/docs/)

---

## 🎯 Próximos Pasos Recomendados

1. ✅ Revisar y actualizar tests
2. ✅ Configurar CI/CD con GitHub Actions
3. ✅ Implementar PWA completo
4. ✅ Añadir Sentry para error tracking
5. ✅ Configurar SSL/HTTPS en producción
6. ✅ Implementar caché con Redis
7. ✅ Añadir más endpoints al API

---

## 🐛 Solución de Problemas

### Error: Cannot find module

```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error de TypeScript con imports

Asegúrate de usar extensiones `.js` en los imports del servidor:

```typescript
// ✅ Correcto
import { something } from './module.js';

// ❌ Incorrecto
import { something } from './module';
```

### Docker no inicia

```bash
# Reconstruir imágenes
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

---

## 📞 Soporte

Si encuentras problemas durante la migración, revisa:

1. Los logs en `logs/` (servidor)
2. La consola del navegador (cliente)
3. Los logs de Docker: `docker-compose logs`

---

**¡Tu aplicación ahora está modernizada! 🎉**

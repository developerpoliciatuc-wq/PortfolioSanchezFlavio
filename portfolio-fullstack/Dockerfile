# Cliente (React + Vite)
FROM node:20-alpine AS client-build

WORKDIR /app/client

# Copiar archivos de dependencias
COPY client/package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código fuente
COPY client/ ./

# Build de producción
RUN npm run build

# Servidor (Node + Express)
FROM node:20-alpine AS server-build

WORKDIR /app/server

# Copiar archivos de dependencias
COPY server/package*.json ./
COPY prisma ../prisma/

# Instalar dependencias
RUN npm ci --only=production

# Copiar código fuente
COPY server/ ./

# Generar cliente de Prisma
RUN npm run db:generate

# Build del servidor
RUN npm run build

# Imagen final
FROM node:20-alpine

WORKDIR /app

# Instalar dumb-init para manejo correcto de señales
RUN apk add --no-cache dumb-init

# Crear usuario no-root
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Copiar dependencias de producción del servidor
COPY --from=server-build --chown=nodejs:nodejs /app/server/node_modules ./server/node_modules
COPY --from=server-build --chown=nodejs:nodejs /app/server/dist ./server/dist
COPY --from=server-build --chown=nodejs:nodejs /app/server/package.json ./server/
COPY --from=server-build --chown=nodejs:nodejs /app/prisma ./prisma/

# Copiar build del cliente
COPY --from=client-build --chown=nodejs:nodejs /app/client/dist ./client/dist

# Cambiar al usuario no-root
USER nodejs

# Exponer puerto
EXPOSE 5000

# Variables de entorno por defecto
ENV NODE_ENV=production
ENV PORT=5000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Iniciar con dumb-init para manejo correcto de señales
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server/dist/index.js"]

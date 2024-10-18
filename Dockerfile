# Usa una imagen de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm ci

# Copia el resto del código
COPY . .

# Genera el cliente de Prisma
RUN npx prisma generate

# Compila el proyecto
RUN npm run build

# Asegúrate de que los archivos estén en el lugar correcto
RUN ls -la dist/

# Expone el puerto que usa el backend
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]
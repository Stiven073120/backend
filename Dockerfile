# Usa una imagen de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Compila el proyecto (opcional, si tu proyecto Nest usa TypeScript)
RUN npm run build

# Expone el puerto que usa el backend
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]
# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json (si está presente)
COPY package*.json ./

# Instala las dependencias
RUN npm install
RUN npm install axios --save

# Copia el resto del código de la aplicación en el contenedor
COPY . .

# Exponer el puerto para el servidor de desarrollo
EXPOSE 5173

# Ejecuta la aplicación en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host"]

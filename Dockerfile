# Especificamos que vamos a trabajar sobre una imágen preexistente, 
# en este caso, la imágen oficial de node v14
FROM node:14 
WORKDIR /app

# Copiamos los archivos que comienzan con package de nuestro repo local al contenedor
COPY package*.json .
# Descargamos todas las dependencias necesarias
RUN npm install  
# Copiamos los demás archivos del repo local al contenedor
COPY . .
# Indicamos que el contenedor usara el puerto 3000
EXPOSE 3000
# Se ejecuta el siguiente comando para iniciar el Servidor
CMD ["node","src/server.js"]

FROM node:16-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install nodemon postman-to-openapi --save-dev --location=global
COPY . .
USER node
EXPOSE 3000
EXPOSE 3443
CMD ["node", "index.js"]
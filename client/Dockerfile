FROM node:14-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ /app/src
COPY public/ /app/public
RUN npm run build
CMD npm start
EXPOSE 3000
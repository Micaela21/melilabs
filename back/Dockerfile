FROM node:14-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY build/ /app/build
COPY *.js /app/
CMD npm start
EXPOSE 3001/tcp
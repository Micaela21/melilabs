FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
COPY build/ /app/build
COPY *.js /app/

RUN npm install

VOLUME /var/run/docker.sock /var/jenkins_home /usr/bin/docker

CMD npm start

EXPOSE 3001/tcp
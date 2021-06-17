FROM node:14-alpine

VOLUME /var/run/docker.sock /var/jenkins_home /usr/bin/docker

WORKDIR /app

COPY package*.json ./
COPY build/ /app/build
COPY *.js /app/

RUN npm install

CMD npm start

EXPOSE 3001/tcp
FROM node:alpine3.13

USER root

RUN apk update \
    && apk add curl \
    && apk add make

RUN apk add openjdk11-jre \
    && java -version

VOLUME /var/run/docker.sock /var/run/docker.sock
VOLUME /usr/bin/docker /usr/bin/docker

ENTRYPOINT ["docker-entrypoint.sh"]
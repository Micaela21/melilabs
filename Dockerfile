FROM node:alpine3.13

USER root

RUN apk update \
    && apk add curl \
    && apk add make

RUN apk add openjdk11-jre \
    && java -version

ENTRYPOINT ["docker-entrypoint.sh"]
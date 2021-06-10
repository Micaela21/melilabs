FROM alpine:latest

USER root

RUN apk update \
    && apk add curl \
    && apk add make

RUN apk add openjdk11-jre \
    && java -version 

RUN apk add --update nodejs npm \
    && node -v

RUN mkdir /root/.npm \
    && chown -R 1000:1000 "/root/.npm"

WORKDIR /root

ENTRYPOINT ["docker-entrypoint.sh"]
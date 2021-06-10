FROM alpine:latest

RUN apk update \
    && apk add curl \
    && apk add make

RUN apk add openjdk11-jre \
    && java -version 

RUN apk add --update nodejs npm \
    && node -v

RUN chown -R 1000:1000 "/.npm"

SHELL ["/bin/bash", "-o", "pipefail"]
FROM alpine:latest

USER root

RUN apk update \
    && apk add curl \
    && apk add make

RUN apk add openjdk11-jre \
    && java -version 

RUN apk add --update nodejs npm \
    && node -v

SHELL ["/bin/bash", "-o", "pipefail"]
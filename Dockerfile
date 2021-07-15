
# # Agente selenium
# FROM selenium/node-chrome:91.0

# USER root

# RUN apt-get update && apt-get install -y \
#   ca-certificates \
#   curl \
#   make

# ARG NODE_VERSION=14.16.0
# ARG NODE_PACKAGE=node-v$NODE_VERSION-linux-x64
# ARG NODE_HOME=/opt/$NODE_PACKAGE

# ENV NODE_PATH $NODE_HOME/lib/node_modules
# ENV PATH $NODE_HOME/bin:$PATH

# RUN curl https://nodejs.org/dist/v$NODE_VERSION/$NODE_PACKAGE.tar.gz | tar -xzC /opt/

# VOLUME /var/run/docker.sock /var/jenkins_home /usr/bin/docker


# Agente node
FROM node:alpine3.13

USER root

RUN apk update \
    && apk add curl \
    && apk add make \

VOLUME /var/run/docker.sock /var/jenkins_home /usr/bin/docker

ENTRYPOINT ["docker-entrypoint.sh"]


# # Agente Dockers
# FROM docker:latest

# USER root

# RUN apk update \
#     && apk add curl \
#     && apk add make

# VOLUME /var/run/docker.sock /var/jenkins_home /usr/bin/docker

# ENTRYPOINT ["docker-entrypoint.sh"]
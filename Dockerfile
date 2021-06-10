FROM node:alpine3.13

USER root

RUN apk update \
    && apk add curl \
    && apk add make

RUN apk add openjdk11-jre \
    && java -version

RUN apk add docker
# Install Docker from Docker Inc. repositories.
# RUN curl -sSL https://get.docker.com/ | sh

# Install the magic wrapper.
ADD ./wrapdocker /usr/local/bin/wrapdocker
RUN chmod +x /usr/local/bin/wrapdocker

# Define additional metadata for our image.
VOLUME /var/lib/docker
CMD ["wrapdocker"]

# VOLUME /var/run/docker.sock /var/run/docker.sock
# VOLUME /usr/bin/docker /usr/bin/docker

ENTRYPOINT ["docker-entrypoint.sh"]
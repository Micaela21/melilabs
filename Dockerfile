FROM selenium/node-chrome:91.0

USER root

RUN apt update \
    && apt install curl \
    && apt install make

RUN sudo apt-get install -y nodejs
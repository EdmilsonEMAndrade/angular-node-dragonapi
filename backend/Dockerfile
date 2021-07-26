FROM node:latest
MAINTAINER Edmilson Andrade
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT [ "npm", "start" ]
EXPOSE 3000



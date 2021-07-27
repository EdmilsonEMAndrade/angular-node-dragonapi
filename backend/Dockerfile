FROM node:latest
MAINTAINER Edmilson Andrade
COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT [ "npm", "start" ]
EXPOSE 3000



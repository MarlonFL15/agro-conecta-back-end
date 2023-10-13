FROM node:19.7.0-alpine

ENV HOME=/home/app
RUN apk add --no-cache bash
WORKDIR $HOME

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

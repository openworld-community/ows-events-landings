FROM node:20-buster-slim
WORKDIR /app
COPY ./assets ./assets/
COPY ./src ./src/
COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm install

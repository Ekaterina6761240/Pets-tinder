FROM node:18-alpine3.17

WORKDIR /app

ENV INDOCKER = true
ENV PORT = 3001
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ['npm', 'start']
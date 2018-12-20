FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install
COPY . /app
RUN npm run build

ENV PORT 8080
EXPOSE 8080
ENV NODE_ENV production

CMD ["node", "server"]

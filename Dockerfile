FROM node:alpine

WORKDIR /webapp

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]
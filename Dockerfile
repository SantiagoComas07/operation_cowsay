FROM node:22
WORKDIR /app/backend/src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1000
ENTRYPOINT [ "node", "index.js" ]   
FROM node:16.4-alpine
WORKDIR /app
EXPOSE 3030
COPY package*.json ./
RUN npm install
CMD ["npm", "start"]
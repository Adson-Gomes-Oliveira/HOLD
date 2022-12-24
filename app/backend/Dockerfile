FROM node:16.4-alpine
WORKDIR /app-backend
EXPOSE 3031
COPY package*.json ./
RUN npm install
CMD ["npm", "start"]
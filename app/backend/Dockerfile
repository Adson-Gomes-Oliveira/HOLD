FROM node:14-alpine
WORKDIR /app
EXPOSE 3001
COPY package*.json ./
RUN npm install --legacy-peer-deps
CMD ["npm", "start"]
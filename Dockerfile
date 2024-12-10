FROM node:22.9.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY .env .
COPY . .
CMD ["node","app.js"]
EXPOSE 3000
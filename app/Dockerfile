FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# Etapa 2: imagem final mínima
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app /app

EXPOSE 3000
CMD ["node", "index.js"]
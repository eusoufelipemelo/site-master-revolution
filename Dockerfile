# ---------- 1. build do React ----------
FROM node:24-alpine AS build
WORKDIR /app
# copia só o manifesto primeiro: se as dependências não mudaram,
# o Docker reaproveita esta camada e o deploy fica bem mais rápido
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---------- 2. servir o estático ----------
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

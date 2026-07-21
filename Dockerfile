# Site estático: nginx servindo os arquivos como estão
FROM nginx:alpine
COPY . /usr/share/nginx/html
# cache razoável para assets; HTML sempre revalida
RUN printf 'server {\n  listen 80;\n  root /usr/share/nginx/html;\n  index index.html;\n  location ~* \\.(svg|jpg|jpeg|png|webp|css|js)$ {\n    expires 7d;\n    add_header Cache-Control "public";\n  }\n  location / {\n    try_files $uri $uri/ /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80

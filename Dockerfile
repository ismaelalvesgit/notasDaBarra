# Author Ismael alves

# Estagio 1 - Será responsavel em construir a aplicação
FROM node:alpine as node
LABEL maintainer="Ismael Alves cearaismael1997@gmail.com"
WORKDIR /app
COPY package.json /app/
RUN npm install -g @angular/cli@6
RUN npm i
COPY ./ /app/
RUN ng build --prod

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:alpine
LABEL maintainer="Ismael Alves cearaismael1997@gmail.com"
COPY --from=node /app/dist/notasDaBarra /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf

# para construi a imagem use o comando docker build -t nome da image .
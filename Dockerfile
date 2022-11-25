FROM node:16 as build

WORKDIR /my-app

RUN package*.json .

COPY . .

RUN npm run build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /my-app/build /usr/share/nginx/html
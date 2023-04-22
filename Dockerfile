FROM node:16-alpine as builder

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.23.4
COPY --from=builder /app/dist/dashboard-website /usr/share/nginx/html


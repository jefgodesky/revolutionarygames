FROM node:lts AS build-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM build-deps AS build
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

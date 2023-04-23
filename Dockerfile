### STAGE 1: Build ###
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:alpine

# Copy the NGINX configuration file into the NGINX image
COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist/products-web /usr/share/nginx/html


# Expose port 80
# EXPOSE 80
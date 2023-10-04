FROM node:alpine as BUILD_IMAGE

WORKDIR /app

COPY . .

# install dependencies
RUN npm install 

# build
RUN npm run build

# remove dev dependencies
RUN npm prune --production

CMD ["npm", "start"]

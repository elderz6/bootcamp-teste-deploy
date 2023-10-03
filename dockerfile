FROM node:alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json ./

# install dependencies
RUN npm install 
COPY . .

# build
RUN npm run build
# remove dev dependencies
RUN npm prune --production

# copy from build image
COPY /app/package.json ./package.json
COPY /app/node_modules ./node_modules
COPY /app/.next ./.next
COPY /app/public ./public
CMD ["npm", "start"]

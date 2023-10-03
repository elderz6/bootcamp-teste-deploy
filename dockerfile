FROM node:18-alpine

WORKDIR /petsalvo-frontend/

COPY public/ /petsalvo-frontend/public
COPY src/ /petsalvo-frontend/src
COPY package.json /petsalvo-frontend/

RUN npm install

CMD ["npm", "start"]
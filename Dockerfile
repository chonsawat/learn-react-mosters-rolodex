FROM node:18.15.0

WORKDIR /my-app

COPY package.json /my-app/
RUN npm install

COPY . /my-app/

CMD ["npm", "run", "start"]
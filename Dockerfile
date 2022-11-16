FROM node:14.21-alpine 

WORKDIR /app

COPY package.json package.json

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]


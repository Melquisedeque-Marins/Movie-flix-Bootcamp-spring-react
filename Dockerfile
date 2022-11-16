FROM node:14.21-alpine 

WORKDIR /app

COPY package.json package.json

RUN yarn install

COPY . .

CMD [ "yarn", "dev" ]

EXPOSE 5173

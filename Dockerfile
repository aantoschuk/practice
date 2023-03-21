FROM node:18

WORKDIR /app/practicing

COPY package.json .

RUN corepack enable

RUN yarn

COPY . .

EXPOSE 3000

RUN [ "yarn", "build" ]

CMD [ "yarn", "start" ]


FROM node:18

WORKDIR /app/practicing

COPY package.json .

RUN corepack enable

RUN corepack prepare pnpm@latest --activate

COPY . .

RUN pnpm install

EXPOSE 3000
RUN [ "pnpm", "build" ]

CMD [ "pnpm", "start" ]


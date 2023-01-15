FROM node:alpine3.17

ENV NODE_ENV=production

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn install

ADD . .
RUN yarn build

CMD [ "yarn", "start" ]
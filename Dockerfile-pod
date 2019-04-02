FROM node:8.15-alpine

RUN apk update \
 && apk upgrade \
 && apk add --no-cache curl

WORKDIR /app

COPY . .

RUN yarn --production

EXPOSE 8000

CMD ["yarn", "start"]
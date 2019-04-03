FROM node:8.15-alpine

RUN apk update \
 && apk upgrade \
 && apk add --no-cache curl

WORKDIR /app

COPY . .

RUN yarn --production

EXPOSE 8000

CMD ["yarn", "start"]

HEALTHCHECK --start-period=120s --interval=5s --timeout=10s --retries=3 CMD curl -sS http://127.0.0.1:8000/health || exit 1
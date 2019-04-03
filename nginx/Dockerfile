FROM nginx:1.14

COPY nginx.conf /etc/nginx/nginx.conf

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

CMD /wait && nginx -g 'daemon off;'
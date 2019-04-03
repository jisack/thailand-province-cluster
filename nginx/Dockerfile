FROM nginx:1.14

# HEALTHCHECK --interval=5m --timeout=3s CMD curl --fail http://localhost/health-check || exit 1
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
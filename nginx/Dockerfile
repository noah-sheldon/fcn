# Use official Nginx image as base
FROM nginx:latest

# Remove default config
RUN rm -f /etc/nginx/nginx.conf

# Copy all Nginx configs
COPY nginx-configs/ /etc/nginx-configs/

# Dynamically select the correct config before starting Nginx
CMD ["/bin/sh", "-c", "ln -sf /etc/nginx-configs/${NGINX_CONFIG} /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]

# Use official Nginx image as base
FROM nginx:latest

# Remove default config
RUN rm /etc/nginx/nginx.conf

# Copy all Nginx configs
COPY nginx-configs/ /etc/nginx-configs/

# Start Nginx with the correct config
CMD ["nginx", "-g", "daemon off;"]

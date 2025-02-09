# Use official Nginx image as base
FROM nginx:latest

# Remove the default Nginx config
RUN rm /etc/nginx/nginx.conf

# Expose Nginx default ports
EXPOSE 80 443

# Start Nginx in foreground (Docker best practice)
CMD ["nginx", "-g", "daemon off;"]

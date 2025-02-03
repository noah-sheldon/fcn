# Use Node.js 22 as the base image
FROM node:22

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN pnpm build

# Expose the web application port
EXPOSE 3000

# Start the web application
CMD ["pnpm", "start"]

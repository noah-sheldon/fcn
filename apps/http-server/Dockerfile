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

# Build the project (e.g., compile TypeScript)
RUN pnpm run build

# Expose the HTTP server port
EXPOSE 3002

# Start the HTTP server
CMD ["node", "dist/index.js"]

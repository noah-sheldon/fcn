# Base Stage: Common setup for all stages
FROM node:22 AS base

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy the entire repository to ensure all package.json files are included
COPY . .

# Development Stage
FROM base AS development

# Install all dependencies
RUN pnpm install

# Build the applications
RUN pnpm turbo build

# Expose ports for development
EXPOSE 3000 3001 3002

# Command to run the applications in development mode
CMD ["pnpm", "turbo", "dev"]

# Beta Stage
FROM base AS beta

# Install all dependencies
RUN pnpm install

# Build the applications
RUN pnpm turbo build

# Expose ports for beta
EXPOSE 3000 3001 3002

# Command to run the applications in beta mode
CMD ["pnpm", "turbo", "start"]

# Production Stage
FROM node:22-alpine AS production

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy the entire repository from the beta stage
COPY --from=beta /app /app

# Install only production dependencies
RUN pnpm install --production

# Expose ports for production
EXPOSE 3000 3001 3002

# Command to run the applications in production mode
CMD ["pnpm", "turbo", "start"]

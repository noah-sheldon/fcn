# Base Stage: Common setup for all stages
FROM node:22 AS base

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./

# Development Stage
FROM base AS development

# Install all dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the applications
RUN pnpm turbo run build

# Expose ports for development
EXPOSE 3000 3001 3002

# Command to run the applications in development mode
CMD ["pnpm", "turbo", "dev"]

# Beta Stage
FROM base AS beta

# Install all dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

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

# Copy only the necessary build artifacts from the beta stage
COPY --from=beta /app/apps/web/dist ./apps/web
COPY --from=beta /app/apps/ws-server/dist ./apps/ws-server
COPY --from=beta /app/apps/http-server/dist ./apps/http-server
COPY --from=beta /app/apps/db/dist ./apps/db

# Copy package.json and pnpm-lock.yaml for production dependencies
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./

# Install only production dependencies
RUN pnpm install --production

# Expose ports for production
EXPOSE 3000 3001 3002

# Command to run the applications in production mode
CMD ["pnpm", "turbo", "start"]

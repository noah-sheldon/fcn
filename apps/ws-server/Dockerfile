# ---- Base Stage ----
FROM node:22-alpine AS node

# ---- Builder Stage ----
FROM node AS base
# Install pnpm globally
RUN npm install -g pnpm

# Install necessary packages
RUN apk update && apk add --no-cache libc6-compat

# ---- Builder Stage ----
FROM base AS builder

# Set the working directory
WORKDIR /app

RUN pnpm add turbo

# Copy the entire project to the container
COPY . .

# Prune the project for Docker
RUN pnpm turbo prune ws-server --docker

# ---- Installer Stage ----
FROM base AS installer

# Set the working directory
WORKDIR /app

# Install necessary packages
RUN apk update && apk add --no-cache libc6-compat

# Copy pruned lockfile and package.json files
COPY --from=builder /app/out/json/ .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the full project files for the build
COPY --from=builder /app/out/full/ .

# Uncomment and use build args to enable remote caching if needed
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM
# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

# Build the project
RUN pnpm turbo build

# ---- Runner Stage ----
FROM base AS runner

# Set the working directory
WORKDIR /app

# Create a non-root user and switch to it
RUN addgroup --system --gid 1001 expressjs && \
    adduser --system --uid 1001 expressjs

# Use the non-root user
USER expressjs

# Copy only the compiled code and necessary files
COPY --from=installer /app .

# Start the HTTP server
CMD ["node", "apps/ws-server/dist/index.js"]

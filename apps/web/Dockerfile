# ---- Base Stage ----
FROM node:22-alpine AS node

FROM node AS base
RUN npm install -g pnpm

# Install necessary packages
RUN apk update && apk add --no-cache libc6-compat

# ---- Builder Stage ----
FROM base AS builder

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN pnpm add turbo

# Copy the entire project to the container
COPY . .

# Prune the project for Docker
RUN pnpm turbo prune web --docker

# ---- Installer Stage ----
FROM base AS installer

# Set the working directory
WORKDIR /app

# Copy pruned lockfile and package.json files
COPY --from=builder /app/out/json/ .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the full project files for the build
COPY --from=builder /app/out/full/ .

RUN pnpm turbo db:generate

# Uncomment and use build args to enable remote caching if needed
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM
# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

# Build the project
RUN pnpm turbo build --filter=web...

# ---- Runner Stage ----
FROM base AS runner

# Set the working directory
WORKDIR /app

# Create a non-root user and switch to it
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Use the non-root user
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public
COPY --from=installer --chown=nextjs:nodejs /app/packages/db/ ./packages/db/

# Start the Next.js server
CMD ["node", "apps/web/server.js"]

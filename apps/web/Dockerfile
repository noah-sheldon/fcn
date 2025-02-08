# ---- Base Build Stage ----
FROM node:22 AS build

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and lock file first (for efficient caching)
COPY package.json ./

# Install dependencies (including dev dependencies for build)
RUN pnpm install

# Copy the full Next.js project source code
COPY . .

# Build the Next.js application
RUN pnpm run build

# ---- Production Stage (No Source Code) ----
FROM node:22 AS production

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only the built output (No raw Next.js source code)
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./

# Install only production dependencies
RUN pnpm install --prod

# Expose the web application port
EXPOSE 3000

# Start the Next.js server
CMD ["pnpm", "start"]

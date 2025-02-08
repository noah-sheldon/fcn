# ---- Base Build Stage ----
FROM node:22 AS build

WORKDIR /app

# Copy package.json and lock file for dependency installation (No source code yet)
COPY package.json ./

# Install pnpm and install dependencies (including dev dependencies for build)
RUN npm install -g pnpm && pnpm install

# Copy only the source code (Avoids unnecessary files)
COPY . .

# Build the project (Compile TypeScript to JavaScript)
RUN pnpm run build

# ---- Production Stage (No Source Code) ----
FROM node:22 AS production

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only the built output (No raw TypeScript)
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./

# Install only production dependencies (removes unnecessary dev packages)
RUN pnpm install --prod

# Expose the WebSocket server port
EXPOSE 3001

# Start the WebSocket server
CMD ["node", "dist/index.js"]

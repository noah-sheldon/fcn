echo "🔹 Checking Docker access..."
docker --version
docker login -u ${{ secrets.DOCKERHUB_USERNAME }} -p ${{ secrets.DOCKERHUB_TOKEN }}

echo "🔹 Pulling latest Docker images..."
docker pull faithfulconnects/ws-server:${{ env.SHORT_SHA }}
docker pull faithfulconnects/http-server:${{ env.SHORT_SHA }}
docker pull faithfulconnects/web:${{ env.SHORT_SHA }}

echo "🔹 Stopping existing containers..."
docker-compose down || true

echo "🔹 Writing updated docker-compose.yml..."
cat > docker-compose.yml <<EOL
version: '3'
services:
    ws-server:
    image: faithfulconnects/ws-server:${{ env.SHORT_SHA }}
    environment:
        - MONGO_URI=${{ secrets.MONGO_URI }}
        - SUPABASE_URL=${{ secrets.SUPABASE_URL }}
        - SUPABASE_ANON_KEY=${{ secrets.SUPABASE_ANON_KEY }}
    ports:
        - "3001:3001"

    http-server:
    image: faithfulconnects/http-server:${{ env.SHORT_SHA }}
    environment:
        - MONGO_URI=${{ secrets.MONGO_URI }}
        - SUPABASE_URL=${{ secrets.SUPABASE_URL }}
        - SUPABASE_ANON_KEY=${{ secrets.SUPABASE_ANON_KEY }}
    ports:
        - "3002:3002"

    web:
    image: faithfulconnects/web:${{ env.SHORT_SHA }}
    ports:
        - "3000:3000"

    nginx:
    image: nginx:latest
    volumes:
        - ./nginx/nginx.conf:/etc/nginx/nginx.conf
    ports:
        - "8080:80"
    depends_on:
        - ws-server
        - http-server
        - web
EOL

echo "🔹 Restarting services..."
docker-compose pull
docker-compose up -d --force-recreate

echo "✅ Deployment successful!"
#!/bin/bash

# Development script that uses Docker by default
echo "🚀 Starting JOD Portfolio with Docker..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop first."
    echo "💡 Alternative: You can run 'npm run dev' for local development"
    exit 1
fi

# Check if docker-compose is available
if command -v docker-compose &> /dev/null; then
    echo "🐳 Using docker-compose for development..."
    docker-compose --profile dev up --build
else
    echo "🐳 Using Docker directly for development..."
    docker build -f Dockerfile.dev -t jod-portfolio-dev .
    docker run -it --rm -p 3000:3000 -v $(pwd):/app -v /app/node_modules jod-portfolio-dev
fi

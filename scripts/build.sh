#!/bin/bash

# Production build script that uses Docker
echo "🏗️ Building JOD Portfolio for production with Docker..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop first."
    echo "💡 Alternative: You can run 'npm run build' for local build"
    exit 1
fi

# Build the production image
echo "🐳 Building Docker image..."
docker build -t jod-portfolio:latest .

# Create a container to extract the build
echo "📦 Extracting build files..."
docker create --name temp-build jod-portfolio:latest
docker cp temp-build:/app/.next/standalone ./out
docker cp temp-build:/app/.next/static ./out/.next/static
docker cp temp-build:/app/public ./out/public

# Clean up
docker rm temp-build

echo "✅ Build completed! Files are in the ./out directory"
echo "🚀 To run the production build:"
echo "   docker run -p 3000:3000 jod-portfolio:latest"

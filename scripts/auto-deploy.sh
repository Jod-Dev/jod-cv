#!/bin/bash

# Auto-Deploy Script with Error Detection and Fix
# This script automatically detects and fixes common Cloudflare Pages deployment errors

set -e  # Exit on any error

echo "🚀 Starting automated deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log with colors
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to fix _routes.json
fix_routes_json() {
    log "🔧 Checking and fixing _routes.json..."
    
    if [ -f "_routes.json" ]; then
        # Check if the problematic rule exists
        if grep -q '"/_next/\*"' _routes.json; then
            warning "Found problematic rule '/_next/*' in _routes.json"
            
            # Create the correct _routes.json
            cat > _routes.json << 'EOF'
{
  "version": 1,
  "include": ["/*"],
  "exclude": [
    "/_next/static/*",
    "/api/*",
    "/static/*"
  ]
}
EOF
            success "Fixed _routes.json - removed overlapping rules"
        else
            log "_routes.json looks good"
        fi
    else
        warning "_routes.json not found, creating it..."
        cat > _routes.json << 'EOF'
{
  "version": 1,
  "include": ["/*"],
  "exclude": [
    "/_next/static/*",
    "/api/*",
    "/static/*"
  ]
}
EOF
        success "Created _routes.json with correct configuration"
    fi
}

# Function to fix _redirects
fix_redirects() {
    log "🔧 Checking and fixing _redirects..."
    
    if [ -f "_redirects" ]; then
        # Check if the problematic rule exists
        if grep -q "/*.*/index.html.*200" _redirects; then
            warning "Found problematic redirect rule in _redirects"
            
            # Create the correct _redirects
            cat > _redirects << 'EOF'
/*    /index.html   200
EOF
            success "Fixed _redirects - removed infinite loop rule"
        else
            log "_redirects looks good"
        fi
    else
        warning "_redirects not found, creating it..."
        cat > _redirects << 'EOF'
/*    /index.html   200
EOF
        success "Created _redirects with correct configuration"
    fi
}

# Function to fix wrangler.toml
fix_wrangler_toml() {
    log "🔧 Checking and fixing wrangler.toml..."
    
    # Create the correct wrangler.toml
    cat > wrangler.toml << 'EOF'
name = "jod-cv"
compatibility_date = "2024-01-01"
pages_build_output_dir = "out"
EOF
    success "Fixed wrangler.toml - removed invalid build section"
}

# Function to build and deploy
build_and_deploy() {
    log "🏗️ Building project..."
    
    # Build for Cloudflare
    npm run build:cloudflare
    
    if [ $? -eq 0 ]; then
        success "Build completed successfully"
    else
        error "Build failed"
        exit 1
    fi
    
    log "🚀 Deploying to Cloudflare Pages..."
    
    # Deploy to Cloudflare Pages
    npx wrangler pages deploy out --project-name=jod-cv
    
    if [ $? -eq 0 ]; then
        success "Deployment completed successfully!"
    else
        error "Deployment failed"
        exit 1
    fi
}

# Function to retry deployment with fixes
retry_deployment() {
    local max_retries=3
    local retry_count=0
    
    while [ $retry_count -lt $max_retries ]; do
        log "🔄 Attempt $((retry_count + 1)) of $max_retries"
        
        # Fix common issues
        fix_routes_json
        fix_redirects
        fix_wrangler_toml
        
        # Try to build and deploy
        if build_and_deploy; then
            success "Deployment successful on attempt $((retry_count + 1))"
            return 0
        else
            retry_count=$((retry_count + 1))
            if [ $retry_count -lt $max_retries ]; then
                warning "Deployment failed, retrying in 10 seconds..."
                sleep 10
            fi
        fi
    done
    
    error "Deployment failed after $max_retries attempts"
    exit 1
}

# Main execution
main() {
    log "🤖 Starting automated deployment with error detection and fixes"
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        log "📦 Installing dependencies..."
        npm install
    fi
    
    # Run the automated deployment
    retry_deployment
    
    success "🎉 Automated deployment completed successfully!"
}

# Run main function
main "$@"

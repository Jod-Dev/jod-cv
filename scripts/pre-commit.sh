#!/bin/bash

# Pre-commit script to automatically fix common deployment issues
# This script runs before each commit to ensure clean deployment

set -e

echo "🔧 Running pre-commit checks and fixes..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo -e "${BLUE}[PRE-COMMIT]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to fix _routes.json
fix_routes_json() {
    log "Checking _routes.json..."
    
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
    success "Fixed _routes.json"
}

# Function to fix _redirects
fix_redirects() {
    log "Checking _redirects..."
    
    # Create the correct _redirects
    cat > _redirects << 'EOF'
/*    /index.html   200
EOF
    success "Fixed _redirects"
}

# Function to fix wrangler.toml
fix_wrangler_toml() {
    log "Checking wrangler.toml..."
    
    # Create the correct wrangler.toml
    cat > wrangler.toml << 'EOF'
name = "jod-cv"
compatibility_date = "2024-01-01"
pages_build_output_dir = "out"
EOF
    success "Fixed wrangler.toml"
}

# Function to check rules
check_rules() {
    log "Checking rules directory..."
    
    if [ ! -d "rules" ]; then
        warning "Rules directory not found"
        return 1
    fi
    
    if [ ! -f "rules/README.md" ]; then
        warning "Rules README not found"
        return 1
    fi
    
    success "Rules directory and files found"
    return 0
}

# Main execution
main() {
    log "Starting pre-commit fixes..."
    
    # Check rules first
    check_rules
    
    # Fix common deployment files
    fix_routes_json
    fix_redirects
    fix_wrangler_toml
    
    # Add the fixed files to the commit
    git add _routes.json _redirects wrangler.toml rules/
    
    success "Pre-commit fixes completed!"
    log "Fixed files have been staged for commit"
    log "Rules have been verified and included"
}

# Run main function
main "$@"

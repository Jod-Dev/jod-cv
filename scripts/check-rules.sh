#!/bin/bash

# Rules Checker Script
# This script validates that all rules are followed before any action

set -e

echo "🔍 Checking rules compliance..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() {
    echo -e "${BLUE}[RULES CHECK]${NC} $1"
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

# Function to check deployment rules
check_deployment_rules() {
    log "Checking deployment rules..."
    
    # Check _routes.json
    if [ -f "_routes.json" ]; then
        if grep -q '"/_next/\*"' _routes.json; then
            error "Found problematic rule '/_next/*' in _routes.json"
            return 1
        else
            success "_routes.json follows rules"
        fi
    else
        warning "_routes.json not found"
    fi
    
    # Check _redirects
    if [ -f "_redirects" ]; then
        if grep -q "/*.*/index.html.*200" _redirects; then
            success "_redirects follows rules"
        else
            warning "_redirects might have issues"
        fi
    else
        warning "_redirects not found"
    fi
    
    # Check wrangler.toml
    if [ -f "wrangler.toml" ]; then
        if grep -q "\[build\]" wrangler.toml; then
            error "Found invalid [build] section in wrangler.toml"
            return 1
        else
            success "wrangler.toml follows rules"
        fi
    else
        warning "wrangler.toml not found"
    fi
}

# Function to check navigation rules
check_navigation_rules() {
    log "Checking navigation rules..."
    
    # Check if all navigation items are present
    if [ -f "components/header.tsx" ]; then
        nav_count=$(grep -c "navigation\." components/header.tsx || echo "0")
        if [ "$nav_count" -ge 6 ]; then
            success "Navigation has sufficient items ($nav_count found)"
        else
            warning "Navigation might be incomplete ($nav_count found)"
        fi
        
        # Check for responsive design
        if grep -q "lg:flex\|lg:hidden" components/header.tsx; then
            success "Responsive design patterns found"
        else
            warning "Responsive design patterns not found"
        fi
    else
        error "components/header.tsx not found"
        return 1
    fi
}

# Function to check development rules
check_development_rules() {
    log "Checking development rules..."
    
    # Check if scripts exist
    if [ -f "scripts/auto-deploy.sh" ] && [ -f "scripts/pre-commit.sh" ]; then
        success "Required scripts found"
    else
        error "Required scripts missing"
        return 1
    fi
    
    # Check if scripts are executable
    if [ -x "scripts/auto-deploy.sh" ] && [ -x "scripts/pre-commit.sh" ]; then
        success "Scripts are executable"
    else
        warning "Scripts are not executable"
    fi
    
    # Check if git hooks exist
    if [ -f ".git/hooks/pre-commit" ]; then
        success "Git pre-commit hook found"
    else
        warning "Git pre-commit hook not found"
    fi
    
    # Check if GitHub Actions exist
    if [ -d ".github/workflows" ]; then
        success "GitHub Actions directory found"
    else
        warning "GitHub Actions directory not found"
    fi
}

# Function to check rules documentation
check_rules_documentation() {
    log "Checking rules documentation..."
    
    if [ -d "rules" ]; then
        success "Rules directory found"
        
        # Check for required rule files
        required_files=("README.md" "deployment.md" "navigation.md" "development.md")
        for file in "${required_files[@]}"; do
            if [ -f "rules/$file" ]; then
                success "rules/$file found"
            else
                warning "rules/$file not found"
            fi
        done
    else
        error "Rules directory not found"
        return 1
    fi
}

# Main execution
main() {
    log "Starting comprehensive rules check..."
    
    local exit_code=0
    
    # Check all rule categories
    check_deployment_rules || exit_code=1
    check_navigation_rules || exit_code=1
    check_development_rules || exit_code=1
    check_rules_documentation || exit_code=1
    
    if [ $exit_code -eq 0 ]; then
        success "🎉 All rules checks passed!"
        echo ""
        echo "✅ Deployment rules: OK"
        echo "✅ Navigation rules: OK"
        echo "✅ Development rules: OK"
        echo "✅ Documentation rules: OK"
    else
        error "❌ Some rules checks failed!"
        echo ""
        echo "Please review the errors above and fix them before proceeding."
        echo "You can run './scripts/pre-commit.sh' to auto-fix some issues."
    fi
    
    return $exit_code
}

# Run main function
main "$@"

#!/bin/bash

# Script to create semantic commits for the changes
# Run this script to organize commits logically

set -e

echo "Creating semantic commits..."

# Commit 12: Update app layout and global styles
echo "Commit 12: Update app layout and global styles"
git add src/App.module.css src/index.css src/pages/Home.tsx src/pages/ScaffoldHome.tsx
git commit -m "style: update app layout and global styles

- Update App layout styles for new navigation
- Update global styles for improved UI consistency
- Update Home and ScaffoldHome pages"

# Commit 13: Update configuration files
echo "Commit 13: Update configuration files"
git add package.json index.html
git commit -m "chore: update dependencies and configuration

- Update package.json with new dependencies
- Update index.html configuration"

echo ""
echo "All commits created successfully!"
echo "Run 'git log --oneline -13' to see the commit history"

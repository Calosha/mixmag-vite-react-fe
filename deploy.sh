#!/bin/bash

# Load environment variables
source .env.deploy

# Check if required variables are set
if [ -z "$DEPLOY_PATH" ]; then
    echo "Error: DEPLOY_PATH not set in .env.deploy"
    exit 1
fi

# Build frontend
npm run build

# Clean deployment directory
sudo rm -rf ${DEPLOY_PATH}/*

# Copy new build
sudo cp -r dist/* ${DEPLOY_PATH}/

# Restart nginx
sudo systemctl restart nginx

echo "Deployment complete!"

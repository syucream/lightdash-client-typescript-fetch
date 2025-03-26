#!/bin/bash

# Create necessary directories
mkdir -p src

# Download the OpenAPI specification
curl -f -o src/swagger.json https://raw.githubusercontent.com/lightdash/lightdash/main/packages/backend/src/generated/swagger.json

# Generate TypeScript types from OpenAPI spec
npx openapi-typescript src/swagger.json -o src/api.ts

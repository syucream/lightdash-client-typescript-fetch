# Lightdash TypeScript Client

A TypeScript client for the Lightdash API, generated from the official OpenAPI specification using [openapi-fetch](https://github.com/openapi-ts/openapi-typescript).

## Installation

```bash
npm install @syucream/lightdash-client-typescript-fetch
```

## Usage

```typescript
import createLightdashClient from '@syucream/lightdash-client-typescript-fetch';

// Create a client instance
const client = createLightdashClient('https://your-lightdash-instance.com');

// Example: Get projects
const { data, error } = await client.GET('/api/v1/projects');
if (error) {
  console.error('Error fetching projects:', error);
} else {
  console.log('Projects:', data);
}
```

## Technical Stack

- TypeScript
- [openapi-fetch](https://github.com/openapi-ts/openapi-typescript) - Type-safe API client generator
- [openapi-typescript](https://github.com/openapi-ts/openapi-typescript) - OpenAPI to TypeScript type generator

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate the client code:
   ```bash
   npm run generate
   ```
4. Build the project:
   ```bash
   npm run build
   ```

## Publishing

This package is published to GitHub Packages. To publish a new version:

1. Update the version in `package.json`
2. Make sure you're authenticated with GitHub Packages
3. Run:
   ```bash
   npm publish
   ```

## License

MIT 
# Lightdash Client Example

This sample project demonstrates how to access the Lightdash API using `lightdash-client-typescript-fetch`.

## Features

This example implements the following features:

- Retrieving project spaces information
- Error handling
- Usage of type-safe API client

## Setup

1. Configure GitHub Packages authentication:
   ```bash
   # Set GitHub Personal Access Token as environment variable
   # Token needs 'read:packages' scope
   export GITHUB_TOKEN=your_github_personal_access_token
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment configuration:
   - Copy `.env.sample` to `.env`
   - Set your `LIGHTDASH_API_KEY` in `.env`
   - Set your `PROJECT_UUID` in `.env`
   - Optionally modify `BASE_URL` if you're not using the default Lightdash cloud instance

4. Run:
   ```bash
   npm start
   ```

## Notes

- This example requires authentication using a Lightdash API key
- In a production environment, you need to specify the appropriate project UUID
- Responses are fully typed, allowing you to leverage TypeScript benefits
- Proper authentication configuration is required to fetch packages from GitHub Packages
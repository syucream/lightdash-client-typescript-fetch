import 'dotenv/config';
import { createLightdashClient } from '@syucream/lightdash-client-typescript-fetch';

const LIGHTDASH_API_KEY = process.env.LIGHTDASH_API_KEY;
const PROJECT_UUID = process.env.PROJECT_UUID;
const BASE_URL = process.env.BASE_URL ?? 'https://app.lightdash.cloud';

const client = createLightdashClient(BASE_URL, {
  headers: {
    Authorization: `ApiKey ${LIGHTDASH_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

async function getSpaces() {
  if (!PROJECT_UUID) {
    console.error('PROJECT_UUID is not set');
    return;
  }

  try {
    const { data, error } = await client.GET('/api/v1/projects/{projectUuid}/spaces', {
      params: {
        path: {
          projectUuid: PROJECT_UUID,
        },
      },
    });

    if (error) {
      console.error('Error fetching spaces:', error);
      return;
    }

    console.log('Spaces:');
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

getSpaces();

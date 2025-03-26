import createClient from 'openapi-fetch';
import type { paths } from './api.js';

export type { paths } from './api.js';

export const createLightdashClient = (baseUrl: string, options?: RequestInit) => {
  return createClient<paths>({ baseUrl, ...options });
};

export default createLightdashClient;

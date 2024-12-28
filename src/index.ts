import createClient from 'openapi-fetch';
import type { paths } from './api';

export type { paths } from './api';

export const createLightdashClient = (baseUrl: string, options?: RequestInit) => {
  return createClient<paths>({ baseUrl, ...options });
};

export default createLightdashClient;

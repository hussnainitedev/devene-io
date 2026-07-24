import { createClient } from '@sanity/client';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';

export const sanityEnabled = Boolean(projectId);

export const client = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null;

export async function fetchOrFallback(query, fallback) {
  if (!client) return fallback;
  try {
    const result = await client.fetch(query);
    return Array.isArray(result) && result.length === 0 ? fallback : result || fallback;
  } catch (err) {
    console.warn('Sanity fetch failed, using fallback content:', err.message);
    return fallback;
  }
}

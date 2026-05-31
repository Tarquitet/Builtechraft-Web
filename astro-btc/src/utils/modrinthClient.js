// src/utils/modrinthClient.js

export async function fetchModrinthIcons(idsToFetch) {
  if (!idsToFetch || idsToFetch.length === 0) return [];

  const uniqueIds = [...new Set(idsToFetch)].slice(0, 100);
  try {
    const mrRes = await fetch(`https://api.modrinth.com/v2/projects?ids=${JSON.stringify(uniqueIds)}`);
    if (mrRes.ok) {
      return await mrRes.json();
    }
    return [];
  } catch (e) {
    console.warn('Límite de peticiones de iconos de Modrinth alcanzado.', e);
    return [];
  }
}

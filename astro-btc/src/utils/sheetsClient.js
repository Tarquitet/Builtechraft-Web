// src/utils/sheetsClient.js

const GITHUB_BASE = 'https://cdn.jsdelivr.net/gh/Tarquitet/JSON-ServersData@main/builtechraft-web';
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutos de caché en el navegador

async function fetchWithCache(actionKey, endpointUrl) {
  const cacheKey = `btc_cache_${actionKey}`;
  const timeKey = `btc_time_${actionKey}`;

  try {
    const cached = sessionStorage.getItem(cacheKey);
    const cachedTime = sessionStorage.getItem(timeKey);

    // 1. Si tenemos los datos en el navegador y no han pasado 15 min, los usamos (¡Súper rápido!)
    if (cached && cachedTime && Date.now() - parseInt(cachedTime) < CACHE_DURATION) {
      return JSON.parse(cached);
    }

    // 2. Si no, vamos a jsDelivr. Agregamos ?t=... para romper la caché de 12h de jsDelivr
    // y forzar que traiga lo último que subió Google Sheets a GitHub.
    const response = await fetch(`${endpointUrl}?t=${Date.now()}`, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // 3. Guardamos en el navegador para las próximas 15 minutos
    sessionStorage.setItem(cacheKey, JSON.stringify(data));
    sessionStorage.setItem(timeKey, Date.now().toString());

    return data;
  } catch (error) {
    console.error(`Error cargando ${actionKey}:`, error);
    // Si falla la red, usamos lo último que teníamos guardado como respaldo
    const fallback = sessionStorage.getItem(cacheKey);
    if (fallback) return JSON.parse(fallback);
    return actionKey === 'config' ? {} : [];
  }
}

export async function getClientConfigTSV() {
  return await fetchWithCache('config', `${GITHUB_BASE}/config.json`);
}

export async function getRoadmapData() {
  return await fetchWithCache('roadmap', `${GITHUB_BASE}/roadmap.json`);
}

export async function getStaffData() {
  return await fetchWithCache('staff', `${GITHUB_BASE}/staff.json`);
}

export async function getModsAndDatapacks() {
  const json = await fetchWithCache('mods', `${GITHUB_BASE}/mods.json`);
  return {
    mods: json.filter((item) => !item.Type.toLowerCase().includes('datapack')),
    datapacks: json.filter((item) => item.Type.toLowerCase().includes('datapack')),
  };
}

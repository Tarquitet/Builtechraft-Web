// src/utils/sheetsClient.js

const GITHUB_BASE = 'https://raw.githubusercontent.com/Tarquitet/JSON-ServersData/main/builtechraft-web';
const CACHE_DURATION = 5 * 60 * 1000;

async function fetchWithCache(actionKey, endpointUrl) {
  const cacheKey = `btc_cache_${actionKey}`;
  const timeKey = `btc_time_${actionKey}`;

  try {
    const cached = sessionStorage.getItem(cacheKey);
    const cachedTime = sessionStorage.getItem(timeKey);

    if (cached && cachedTime && Date.now() - parseInt(cachedTime) < CACHE_DURATION) {
      return JSON.parse(cached);
    }

    const response = await fetch(endpointUrl, { cache: 'no-store' });
    const data = await response.json();

    sessionStorage.setItem(cacheKey, JSON.stringify(data));
    sessionStorage.setItem(timeKey, Date.now().toString());

    return data;
  } catch (error) {
    console.error(`Error cargando ${actionKey}:`, error);
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

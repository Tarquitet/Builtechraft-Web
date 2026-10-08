// src/utils/sheetsClient.js

const GITHUB_BASE = 'https://cdn.jsdelivr.net/gh/Tarquitet/JSON-ServersData@main/builtechraft-web';
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutos de caché en el navegador

function getValidLocale(locale) {
  return locale === 'en' ? 'en' : 'es';
}

async function fetchWithCache(actionKey, endpointUrl, locale) {
  const validLocale = getValidLocale(locale);
  const localeSuffix = `_${validLocale}`;
  const cacheKey = `btc_cache_${actionKey}${localeSuffix}`;
  const timeKey = `btc_time_${actionKey}${localeSuffix}`;

  try {
    const cached = typeof window !== 'undefined' ? sessionStorage.getItem(cacheKey) : null;
    const cachedTime = typeof window !== 'undefined' ? sessionStorage.getItem(timeKey) : null;

    if (cached && cachedTime && Date.now() - parseInt(cachedTime, 10) < CACHE_DURATION) {
      return JSON.parse(cached);
    }

    const response = await fetch(`${endpointUrl}?t=${Date.now()}`, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} en ${endpointUrl}`);
    }

    const data = await response.json();

    if (typeof window !== 'undefined') {
      sessionStorage.setItem(cacheKey, JSON.stringify(data));
      sessionStorage.setItem(timeKey, Date.now().toString());
    }

    return data;
  } catch (error) {
    console.error(`Error cargando ${actionKey} (${validLocale}):`, error);
    if (typeof window !== 'undefined') {
      const fallback = sessionStorage.getItem(cacheKey);
      if (fallback) return JSON.parse(fallback);
    }
    return actionKey === 'config' ? {} : [];
  }
}

export async function getClientConfig() {
  return await fetchWithCache('config', `${GITHUB_BASE}/config.json`, 'es');
}

export async function getRoadmapData(locale = 'es') {
  return await fetchWithCache('roadmap', `${GITHUB_BASE}/${locale}/roadmap.json`, locale);
}

export async function getStaffData(locale = 'es') {
  return await fetchWithCache('staff', `${GITHUB_BASE}/${locale}/staff.json`, locale);
}

export async function getModsAndDatapacks(locale = 'es') {
  const validLocale = getValidLocale(locale);
  const json = await fetchWithCache('mods', `${GITHUB_BASE}/${validLocale}/mods.json`, validLocale);
  const dataArray = Array.isArray(json) ? json : [];
  return {
    mods: dataArray.filter((item) => {
      const type = (item.Contenido || item.Type || '').toLowerCase();
      return !type.includes('datapack');
    }),
    datapacks: dataArray.filter((item) => {
      const type = (item.Contenido || item.Type || '').toLowerCase();
      return type.includes('datapack');
    }),
  };
}

// src/utils/sheetsClient.js

// URL de tu API en Google Apps Script
const API_URL =
  'https://script.google.com/macros/s/AKfycbx4SxlkvL0R3vxNlzh8eT4ZWCJ_9sgZTJkQfzgIXQ9FDwSMaQTOYwW-GRNhsdjwV6Qi/exec';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

// Función genérica con caché integrada para sessionStorage
async function fetchWithCache(actionKey, endpointUrl) {
  const cacheKey = `btc_cache_${actionKey}`;
  const timeKey = `btc_time_${actionKey}`;

  try {
    const cached = sessionStorage.getItem(cacheKey);
    const cachedTime = sessionStorage.getItem(timeKey);

    if (cached && cachedTime && Date.now() - parseInt(cachedTime) < CACHE_DURATION) {
      return JSON.parse(cached);
    }

    const response = await fetch(endpointUrl);
    const data = await response.json();

    sessionStorage.setItem(cacheKey, JSON.stringify(data));
    sessionStorage.setItem(timeKey, Date.now().toString());

    return data;
  } catch (error) {
    console.error(`Error cargando ${actionKey}:`, error);
    // Si falla la red, intenta devolver lo que tenga en caché aunque haya expirado
    const fallback = sessionStorage.getItem(cacheKey);
    if (fallback) return JSON.parse(fallback);
    return actionKey === 'config' ? {} : [];
  }
}

// 1. Configuración Web (IPs, links, etc.)
export async function getClientConfigTSV() {
  return await fetchWithCache('config', `${API_URL}?action=config`);
}

// 2. Roadmap
export async function getRoadmapData() {
  return await fetchWithCache('roadmap', `${API_URL}?action=roadmap`);
}

// 3. Staff
export async function getStaffData() {
  return await fetchWithCache('staff', `${API_URL}?action=staff`);
}

// 4. Mods y Datapacks
export async function getModsAndDatapacks() {
  const json = await fetchWithCache('mods', `${API_URL}?action=mods`);

  return {
    mods: json.filter((item) => !item.Type.toLowerCase().includes('datapack')),
    datapacks: json.filter((item) => item.Type.toLowerCase().includes('datapack')),
  };
}

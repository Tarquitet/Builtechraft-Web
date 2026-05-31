import Papa from 'papaparse';

const MODS_CSV_URL =
  'https://docs.google.com/spreadsheets/d/1Iz5vklWMbVcgOCYRVN5NOEBX91VLfOCkHtI5ilxut-c/export?format=csv';
const ROADMAP_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSFamJKSgtbjYKglTus-BHOljT6p42eSAq8vT9sE_7BFj5EBlDp2dx1iRgeHjZoyWb0zIoSccN8nUSe/pub?gid=877286509&single=true&output=csv';

// ⚠️ CAMBIA ESTE GID POR EL DE TU PESTAÑA STAFF
const STAFF_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSFamJKSgtbjYKglTus-BHOljT6p42eSAq8vT9sE_7BFj5EBlDp2dx1iRgeHjZoyWb0zIoSccN8nUSe/pub?gid=751443234&single=true&output=csv';

// Helper interno
const getIcon = (tipo) => {
  const t = tipo?.toLowerCase() || '';
  if (t.includes('mod')) return '⚡';
  if (t.includes('plugin')) return '🧩';
  if (t.includes('proxy')) return '📡';
  if (t.includes('datapack')) return '📦';
  return '⚙️';
};

export async function getRoadmapData() {
  try {
    const response = await fetch(ROADMAP_CSV_URL);
    const csvText = await response.text();

    return new Promise((resolve) => {
      window.Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const data = results.data.filter((item) => {
            if (!item.Titulo || item.Titulo.trim() === '') return false;
            const estado = item.Estado ? item.Estado.toLowerCase().trim() : '';
            if (estado.includes('completado') || estado.includes('descartado')) return false;
            return true;
          });
          resolve(data);
        },
      });
    });
  } catch (error) {
    console.error('Error obteniendo CSV del Roadmap:', error);
    return [];
  }
}

export async function getModsAndDatapacks() {
  try {
    const response = await fetch(MODS_CSV_URL);
    const csvText = await response.text();

    return new Promise((resolve) => {
      window.Papa.parse(csvText, {
        header: false,
        skipEmptyLines: true,
        complete: function (results) {
          let mods = [];
          let datapacks = [];
          let modrinthIdsToFetch = [];

          results.data.forEach((row, index) => {
            if (index < 4) return;

            const colNombre = row[0];
            const colDesc = row[1];
            const colURL = row[2];
            const colID = row[3];
            const colContenido = row[4];
            const colEnUso = row[7];

            if (colEnUso?.trim().toUpperCase() !== 'SI') return;
            if (!colNombre || colNombre.trim() === '') return;

            let url = colURL?.trim() || '';
            let queryId = '';

            if (colID && colID.trim() !== '') {
              queryId = colID.trim();
              url = `https://modrinth.com/project/${queryId}`;
              modrinthIdsToFetch.push(queryId);
            } else if (url === '') {
              const query = encodeURIComponent(colNombre.trim());
              url = `https://modrinth.com/mods?q=${query}`;
            }

            const item = {
              name: colNombre.trim(),
              desc: colDesc ? colDesc.trim() : 'Optimización técnica',
              type: colContenido ? colContenido.trim() : 'Misc',
              icon: getIcon(colContenido),
              url: url,
              queryId: queryId,
            };

            if (item.type.toLowerCase().includes('datapack')) {
              datapacks.push(item);
            } else {
              mods.push(item);
            }
          });

          resolve({ mods, datapacks, modrinthIdsToFetch });
        },
      });
    });
  } catch (error) {
    console.error('Error obteniendo CSV de Mods:', error);
    return { mods: [], datapacks: [], modrinthIdsToFetch: [] };
  }
}

/**
 * Revisa si Bedrock o MultiVersión están activos (A prueba de errores de tipeo)
 */
export function checkServerFeatures(modsArray) {
  const isBedrock = modsArray.some((mod) => mod.name.toLowerCase().includes('geyser'));

  const isMultiVersion = modsArray.some(
    (mod) => mod.name.toLowerCase().includes('viaversion') || mod.name.toLowerCase().includes('viafabric'),
  );

  return { isBedrock, isMultiVersion };
}

/**
 * Lee la pestaña del Staff y devuelve los usuarios con sus roles.
 */
export async function getStaffData() {
  try {
    const response = await fetch(STAFF_CSV_URL);
    const csvText = await response.text();

    return new Promise((resolve) => {
      window.Papa.parse(csvText, {
        header: true, // Debe coincidir con tu Fila 1: "Nombre", "Rol", "Avatar"
        skipEmptyLines: true,
        complete: function (results) {
          const data = results.data.filter((item) => item.Nombre && item.Nombre.trim() !== '');
          resolve(data);
        },
      });
    });
  } catch (error) {
    console.error('Error obteniendo CSV del Staff:', error);
    return [];
  }
}

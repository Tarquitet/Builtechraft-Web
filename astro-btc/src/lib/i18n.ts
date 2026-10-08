// src/lib/i18n.ts
export type Locale = 'es' | 'en';

type ImportMetaWithGlob = ImportMeta & {
  glob: (pattern: string, options: { eager: true; import: 'default' }) => Record<string, unknown>;
};

type LocaleDictionary = Record<string, any>;

const dictionaryFiles = (import.meta as ImportMetaWithGlob).glob('../data/i18n/*/*.json', {
  eager: true,
  import: 'default',
});

function loadLocaleDictionary(locale: Locale): LocaleDictionary {
  // Esta regex funciona tanto para rutas relativas "../data/..." como absolutas "/src/data/..."
  const regex = new RegExp(`[/\\\\]data[/\\\\]i18n[/\\\\]${locale}[/\\\\]([^/\\\\]+)\\.json$`);
  const result: LocaleDictionary = {};

  for (const [path, dictionary] of Object.entries(dictionaryFiles)) {
    const match = path.match(regex);
    if (match) {
      const namespace = match[1]; // ej: "common"
      result[namespace] = dictionary;
    }
  }

  return result;
}

export const dictionaries: Record<Locale, LocaleDictionary> = {
  es: loadLocaleDictionary('es'),
  en: loadLocaleDictionary('en'),
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || {}; // Fallback a objeto vacío si falla
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en/')) return 'en';
  return 'es';
}

export function localizePath(path: string, locale: Locale): string {
  return `/${locale}${path}`; // ✅ Siempre añade el prefijo
}

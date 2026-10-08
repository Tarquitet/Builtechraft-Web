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
  const localeDirectory = `../data/i18n/${locale}/`;
  return Object.fromEntries(
    Object.entries(dictionaryFiles)
      .filter(([path]) => path.startsWith(localeDirectory))
      .map(([path, dictionary]) => [path.slice(localeDirectory.length, -'.json'.length), dictionary]),
  );
}

export const dictionaries: Record<Locale, LocaleDictionary> = {
  es: loadLocaleDictionary('es'),
  en: loadLocaleDictionary('en'),
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.split('/').filter(Boolean)[0] === 'en' ? 'en' : 'es';
}

const localizedWikiCategories = new Set(['community', 'features', 'server-data', 'how2use', 'how2wiki', 'depracted']);

export function localizePath(pathname: string, locale: Locale): string {
  if (!pathname.startsWith('/') || pathname.startsWith('//')) return pathname;

  const url = new URL(pathname, 'https://builtechraft.local');
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'es' || segments[0] === 'en') segments.shift();

  const isLocalizedRoute =
    segments.length === 0 ||
    (segments.length === 1 && segments[0] === 'rules') ||
    (segments[0] === 'wiki' &&
      (segments.length === 1 ||
        (segments.length === 2 && localizedWikiCategories.has(segments[1])) ||
        (segments.length === 4 && localizedWikiCategories.has(segments[1]) && segments[2] === 'articles')));

  if (!isLocalizedRoute) {
    return `${url.pathname}${url.search}${url.hash}`;
  }

  const localizedPath = segments.length ? `/${locale}/${segments.join('/')}` : `/${locale}/`;
  return `${localizedPath}${url.search}${url.hash}`;
}

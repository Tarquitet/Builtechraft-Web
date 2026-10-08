import type { Locale } from './i18n';

interface WikiModule {
  default: any;
  frontmatter?: Record<string, any>;
}

export interface WikiContentEntry {
  locale: Locale;
  category: string;
  slug?: string;
  module: WikiModule;
}

const intros = (import.meta as ImportMetaWithGlob).glob('../data/wiki/*/*/intro.mdx', {
  eager: true,
}) as Record<string, WikiModule>;

const articles = (import.meta as ImportMetaWithGlob).glob('../data/wiki/*/*/articles/*.mdx', {
  eager: true,
}) as Record<string, WikiModule>;

type ImportMetaWithGlob = ImportMeta & {
  glob: (pattern: string, options: { eager: true }) => Record<string, unknown>;
};

function parseCategory(path: string): { locale: Locale; category: string } | null {
  const match = path.match(/\/data\/wiki\/(es|en)\/([^/]+)\/intro\.mdx$/);
  return match ? { locale: match[1] as Locale, category: match[2] } : null;
}

function parseArticle(path: string): { locale: Locale; category: string; slug: string } | null {
  const match = path.match(/\/data\/wiki\/(es|en)\/([^/]+)\/articles\/([^/]+)\.mdx$/);
  return match ? { locale: match[1] as Locale, category: match[2], slug: match[3] } : null;
}

export function getWikiCategories(locale: Locale): WikiContentEntry[] {
  return Object.entries(intros)
    .map(([path, module]) => {
      const parsed = parseCategory(path);
      return parsed ? { ...parsed, module } : null;
    })
    .filter((entry): entry is WikiContentEntry => entry !== null && entry.locale === 'es')
    .map((entry) => {
      const localizedPath = `../data/wiki/${locale}/${entry.category}/intro.mdx`;
      const module = intros[localizedPath] || entry.module;
      const sourceLocale: Locale = intros[localizedPath] ? locale : 'es';
      return { locale: sourceLocale, category: entry.category, module };
    })
    .sort((left, right) => (left.module.frontmatter?.order ?? 99) - (right.module.frontmatter?.order ?? 99));
}

export function getWikiIntro(locale: Locale, category: string): WikiContentEntry | undefined {
  const localizedPath = `../data/wiki/${locale}/${category}/intro.mdx`;
  const fallbackPath = `../data/wiki/es/${category}/intro.mdx`;
  const module = intros[localizedPath] || intros[fallbackPath];
  const sourceLocale: Locale = intros[localizedPath] ? locale : 'es';
  return module ? { locale: sourceLocale, category, module } : undefined;
}

export function getWikiArticles(locale: Locale, category: string): WikiContentEntry[] {
  const source = Object.entries(articles)
    .map(([path, module]) => {
      const parsed = parseArticle(path);
      return parsed ? { ...parsed, module } : null;
    })
    .filter(
      (entry): entry is WikiContentEntry & { slug: string } =>
        entry !== null && entry.locale === 'es' && entry.category === category,
    );

  return source
    .map((entry) => {
      const localizedPath = `../data/wiki/${locale}/${category}/articles/${entry.slug}.mdx`;
      const module = articles[localizedPath] || entry.module;
      const sourceLocale: Locale = articles[localizedPath] ? locale : 'es';
      return { locale: sourceLocale, category, slug: entry.slug, module };
    })
    .filter((entry) => entry.module.frontmatter?.draft !== true && Boolean(entry.module.frontmatter?.title))
    .sort((left, right) => (left.module.frontmatter?.order ?? 99) - (right.module.frontmatter?.order ?? 99));
}

export function getWikiArticle(locale: Locale, category: string, slug: string): WikiContentEntry | undefined {
  return getWikiArticles(locale, category).find((entry) => entry.slug === slug);
}

export function getWikiArticlePaths(
  locale: Locale,
): Array<{ category: string; slug: string; entry: WikiContentEntry }> {
  return getWikiCategories('es').flatMap(({ category }) =>
    getWikiArticles(locale, category)
      .filter((entry) => entry.slug)
      .map((entry) => ({ category, slug: entry.slug as string, entry })),
  );
}

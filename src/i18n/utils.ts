import es from './es.json';
import en from './en.json';

const translations = { es, en } as const;

export type Lang = 'es' | 'en';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

type Translations = typeof es;

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || typeof current !== 'object') return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : path;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return (
      getNestedValue(translations[lang] as unknown as Record<string, unknown>, key) ||
      getNestedValue(translations['es'] as unknown as Record<string, unknown>, key) ||
      key
    );
  };
}

import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function useTranslations(lang: Lang) {
  const dict: Record<string, unknown> = (lang === 'en' ? en : es) as unknown as Record<string, unknown>;
  return function t(key: string): string {
    const keys = key.split('.');
    let current: unknown = dict;
    for (const k of keys) {
      if (current == null || typeof current !== 'object') return key;
      current = (current as Record<string, unknown>)[k];
    }
    return typeof current === 'string' ? current : key;
  };
}

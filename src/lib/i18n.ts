import ja from '../data/i18n/ja.json';
import en from '../data/i18n/en.json';
import zhHans from '../data/i18n/zh-hans.json';
import zhHant from '../data/i18n/zh-hant.json';
import ko from '../data/i18n/ko.json';

export const LANGS = ['ja', 'en', 'zh-hans', 'zh-hant', 'ko'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'ja';

export const dict = { ja, en, 'zh-hans': zhHans, 'zh-hant': zhHant, ko } as const;
export type Dict = typeof ja;

export function t(lang: Lang): Dict {
  return dict[lang] as Dict;
}

/** 各ページの getStaticPaths 用：/ /en/ /zh-hans/ ... を生成 */
export function langPaths() {
  return LANGS.map((lang) => ({
    params: { lang: lang === DEFAULT_LANG ? undefined : lang },
    props: { lang },
  }));
}

export type PageKey = 'home' | 'menu' | 'lunch' | 'banquet' | 'guide' | 'access' | 'faq' | 'reserve';
export const PAGES: PageKey[] = ['home', 'menu', 'lunch', 'banquet', 'guide', 'access', 'faq', 'reserve'];
const slug: Record<PageKey, string> = { home: '', menu: 'menu/', lunch: 'lunch/', banquet: 'banquet/', guide: 'guide/', access: 'access/', faq: 'faq/', reserve: 'reserve/' };

/** サイト内リンク（base パスを考慮） */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}

export function pagePath(lang: Lang, page: PageKey) {
  const prefix = lang === DEFAULT_LANG ? '' : `${lang}/`;
  return withBase(prefix + slug[page]);
}

/** 多言語オブジェクト {ja, en, ...} から値を取り出す（無ければ英語→日本語） */
export function pick(obj: Record<string, string> | undefined, lang: Lang): string {
  if (!obj) return '';
  return obj[lang] ?? obj.en ?? obj.ja ?? '';
}

export function yen(n: number) {
  return '¥' + n.toLocaleString('en-US');
}

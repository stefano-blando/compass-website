import { defaultLocale, locales as supportedLocales, navLabels, siteConfig } from '../data/site';
import { sessions } from '../data/sessions';
import { speakers } from '../data/speakers';
import { talks } from '../data/talks';
import type { Locale } from '../data/types';

export const locales = supportedLocales;

export function buildLocalizedPath(locale: Locale, pathname = '') {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  return cleanPath ? `/${locale}/${cleanPath}/` : `/${locale}/`;
}

export function getLabels(locale: Locale) {
  return navLabels[locale] ?? navLabels[defaultLocale];
}

export function getSpeakerBySlug(slug: string) {
  return speakers.find((speaker) => speaker.slug === slug);
}

export function getTalksBySpeaker(slug: string) {
  return talks.filter((talk) => talk.speakerSlugs.includes(slug));
}

export function getProgrammeSessions() {
  return [...sessions].sort((a, b) => a.startsAt.localeCompare(b.startsAt));
}

export function getTalksForSession(sessionSlug: string) {
  return talks.filter((talk) => talk.sessionSlug === sessionSlug);
}

export { defaultLocale, siteConfig };

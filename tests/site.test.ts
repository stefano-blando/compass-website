import { describe, expect, it } from 'vitest';
import {
  buildLocalizedPath,
  getProgrammeSessions,
  getSpeakerBySlug,
  getTalksBySpeaker,
  locales,
} from '../src/lib/site';

describe('site helpers', () => {
  it('exports the supported locales', () => {
    expect(locales).toEqual(['en', 'it']);
  });

  it('builds localized paths without duplicate slashes', () => {
    expect(buildLocalizedPath('en', '/programme')).toBe('/en/programme/');
    expect(buildLocalizedPath('it', 'registration')).toBe('/it/registration/');
  });

  it('links speakers to talks through shared slugs', () => {
    const speaker = getSpeakerBySlug('guido-germano');
    expect(speaker?.name).toBe('Guido Germano');

    const talks = getTalksBySpeaker('guido-germano');
    expect(talks.map((talk) => talk.slug)).toContain('complexity-keynote');
  });

  it('returns programme sessions sorted by start time', () => {
    const sessions = getProgrammeSessions();
    expect(sessions[0]?.slug).toBe('welcome-opening');
    expect(sessions.at(-1)?.slug).toBe('social-dinner');
  });
});

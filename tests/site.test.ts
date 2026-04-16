import { describe, expect, it } from 'vitest';
import {
  buildLocalizedPath,
  getProgrammeSessions,
  getSpeakerBySlug,
  getTalksForSession,
  getTalksBySpeaker,
  locales,
} from '../src/lib/site';
import { talks } from '../src/data/talks';

describe('site helpers', () => {
  it('exports the supported locales', () => {
    expect(locales).toEqual(['en', 'it']);
  });

  it('builds localized paths and collapses duplicate slashes', () => {
    expect(buildLocalizedPath('en', '/programme')).toBe('/en/programme/');
    expect(buildLocalizedPath('it', 'registration')).toBe('/it/registration/');
    expect(buildLocalizedPath('en', '//programme//overview/')).toBe('/en/programme/overview/');
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

  it('keeps seeded speaker, chair, and talk relations resolvable', () => {
    const orderedSessions = getProgrammeSessions();

    for (const session of orderedSessions) {
      for (const chairSlug of session.chairSlugs) {
        expect(getSpeakerBySlug(chairSlug), `missing chair speaker: ${chairSlug}`).toBeDefined();
      }
    }

    for (const talk of talks) {
      expect(getSpeakerBySlug(talk.speakerSlugs[0]), `missing talk speaker for ${talk.slug}`).toBeDefined();
      const session = orderedSessions.find((candidate) => candidate.slug === talk.sessionSlug);
      expect(session, `missing session for ${talk.slug}`).toBeDefined();
      expect(getTalksForSession(talk.sessionSlug)).toContain(talk);
      expect(session && talk.startsAt).toBeTruthy();
      if (session && talk.startsAt) {
        expect(talk.startsAt >= session.startsAt && talk.startsAt < session.endsAt).toBe(true);
      }
    }
  });
});

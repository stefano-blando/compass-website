export type Locale = 'en' | 'it';

export type LocalizedText = Record<Locale, string>;

export type SpeakerRole = 'keynote' | 'panelist' | 'chair' | 'organizer';

export type Speaker = {
  slug: string;
  name: string;
  affiliation: LocalizedText;
  roleLabel: LocalizedText;
  bio: LocalizedText;
  image?: string;
  type: SpeakerRole[];
  links?: {
    website?: string;
    scholar?: string;
  };
};

export type Session = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  type: 'keynote' | 'panel' | 'break' | 'lunch' | 'opening' | 'closing' | 'social';
  startsAt: string;
  endsAt: string;
  chairSlugs: string[];
};

export type Talk = {
  slug: string;
  title: LocalizedText;
  abstract: LocalizedText;
  speakerSlugs: string[];
  sessionSlug: string;
  startsAt?: string;
  materialsUrl?: string;
};

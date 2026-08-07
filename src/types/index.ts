export interface EventConfig {
  PLATFORM_URL: string;
  REGISTRATION_URL: string;
  EVENT_NAME: string;
  EVENT_TAGLINE: string;
  EVENT_SUBTITLE: string;
  EVENT_DESCRIPTION: string;
  EVENT_DATE: string;
  EVENT_VENUE: string;
  ORGANIZATION: string;
  SOCIALS: {
    DISCORD: string;
    GITHUB: string;
    LINKEDIN: string;
    TWITTER: string;
    EMAIL: string;
  };
}

export type { Speaker, Speaker as SpeakerPlaceholder } from '../config/speakersConfig';
export type { PartnerLogo } from '../config/partnersConfig';

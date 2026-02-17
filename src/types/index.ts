// TEDxUofIChicago TypeScript Types

export interface Event {
  id: string;
  slug: string;
  name: string;
  theme: string;
  year: number;
  date: string;
  time: string;
  location: string;
  locationAddress: string;
  heroImage: string;
  description: string;
  isFlagship: boolean;
  albumUrl?: string;
}

export interface Speaker {
  id: string;
  slug: string;
  name: string;
  title: string;
  affiliation: string;
  tags: string[];
  headshot: string;
  shortBio: string;
  fullBio: string;
}

export interface EventSpeaker {
  id: string;
  eventId: string;
  speakerId: string;
  talkTitle: string;
  talkDescription: string;
  youtubeUrl?: string;
  order: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  committee: string;
  headshot: string;
  blurb?: string;
  isCurrent: boolean;
  yearsActive?: string;
  linkedIn?: string;
}

export interface Photo {
  id: string;
  eventId: string;
  category: string;
  url: string;
  caption: string;
  order: number;
}

export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  author: string;
}

export interface SiteSettings {
  featuredEventId: string;
  instagramUrl: string;
  youtubeUrl: string;
  emailAddress: string;
  twitterUrl?: string;
  linkedInUrl?: string;
}

// Helper types for component props
export interface EventWithSpeakers extends Event {
  speakers: (EventSpeaker & { speaker: Speaker })[];
}

export interface SpeakerWithTalk extends Speaker {
  eventSpeaker: EventSpeaker;
  event: Event;
}

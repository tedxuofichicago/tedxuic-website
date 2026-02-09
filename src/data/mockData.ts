import type { Event, Speaker, EventSpeaker, TeamMember, Photo, NewsPost, SiteSettings } from '@/types';

export const events: Event[] = [
  {
    id: '1',
    slug: 'ideas-ignited-2025',
    name: 'TEDxUofIChicago 2025',
    theme: 'Ideas Ignited',
    year: 2025,
    date: '2025-04-15',
    time: '10:00 AM - 5:00 PM',
    location: 'UIC Forum',
    locationAddress: '725 W Roosevelt Rd, Chicago, IL 60608',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
    description: 'Join us for our flagship 2025 event where visionaries, innovators, and changemakers come together to share ideas worth spreading. This year\'s theme "Ideas Ignited" celebrates the spark of creativity that drives transformation.',
    isFlagship: true,
  },
  {
    id: '2',
    slug: 'breaking-barriers-2024',
    name: 'TEDxUofIChicago 2024',
    theme: 'Breaking Barriers',
    year: 2024,
    date: '2024-04-20',
    time: '10:00 AM - 5:00 PM',
    location: 'Student Center East',
    locationAddress: '750 S Halsted St, Chicago, IL 60607',
    heroImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200',
    description: 'Our 2024 conference explored how individuals and communities break through limitations to achieve extraordinary outcomes.',
    isFlagship: false,
    albumUrl: 'https://photos.google.com/example',
  },
  {
    id: '3',
    slug: 'future-forward-2023',
    name: 'TEDxUofIChicago 2023',
    theme: 'Future Forward',
    year: 2023,
    date: '2023-04-15',
    time: '9:00 AM - 4:00 PM',
    location: 'UIC Forum',
    locationAddress: '725 W Roosevelt Rd, Chicago, IL 60608',
    heroImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200',
    description: 'Looking ahead to the technologies, ideas, and movements shaping tomorrow.',
    isFlagship: false,
    albumUrl: 'https://photos.google.com/example',
  },
];

export const speakers: Speaker[] = [
  {
    id: '1',
    slug: 'dr-maya-chen',
    name: 'Dr. Maya Chen',
    title: 'Neuroscientist',
    affiliation: 'UIC College of Medicine',
    tags: ['Science', 'Health', 'Innovation'],
    headshot: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    shortBio: 'Pioneering researcher in neuroplasticity and cognitive enhancement.',
    fullBio: 'Dr. Maya Chen is a leading neuroscientist at the UIC College of Medicine, where she leads groundbreaking research on brain plasticity and cognitive enhancement. Her work has been published in Nature and Science, and she has received numerous awards for her contributions to understanding how the brain adapts and learns throughout life.',
  },
  {
    id: '2',
    slug: 'marcus-williams',
    name: 'Marcus Williams',
    title: 'Social Entrepreneur',
    affiliation: 'Chicago Urban Innovation Lab',
    tags: ['Social Impact', 'Community', 'Business'],
    headshot: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    shortBio: 'Building sustainable solutions for urban communities.',
    fullBio: 'Marcus Williams founded the Chicago Urban Innovation Lab to create sustainable economic opportunities in underserved neighborhoods. His initiatives have created over 500 jobs and launched 50 small businesses across the South and West sides of Chicago.',
  },
  {
    id: '3',
    slug: 'prof-sarah-okonkwo',
    name: 'Prof. Sarah Okonkwo',
    title: 'Climate Scientist',
    affiliation: 'UIC Department of Earth Sciences',
    tags: ['Environment', 'Climate', 'Research'],
    headshot: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    shortBio: 'Climate activist and researcher focused on urban sustainability.',
    fullBio: 'Professor Sarah Okonkwo combines rigorous climate science with community activism. Her research on urban heat islands has influenced Chicago\'s green infrastructure policies, and she leads citizen science initiatives engaging thousands of Chicagoans in climate action.',
  },
  {
    id: '4',
    slug: 'alex-rivera',
    name: 'Alex Rivera',
    title: 'Tech Founder',
    affiliation: 'Catalyst AI',
    tags: ['Technology', 'AI', 'Startups'],
    headshot: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    shortBio: 'Building AI tools that democratize access to education.',
    fullBio: 'Alex Rivera is the founder of Catalyst AI, a startup developing AI-powered learning tools designed to provide personalized education to students regardless of their background. A first-generation college graduate from UIC, Alex is passionate about using technology to level the playing field.',
  },
  {
    id: '5',
    slug: 'dr-james-park',
    name: 'Dr. James Park',
    title: 'Biomedical Engineer',
    affiliation: 'UIC Engineering',
    tags: ['Engineering', 'Healthcare', 'Innovation'],
    headshot: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    shortBio: 'Developing accessible prosthetics using 3D printing.',
    fullBio: 'Dr. James Park leads a lab focused on making prosthetic limbs affordable and accessible through advanced 3D printing techniques. His team has provided custom prosthetics to over 200 patients in underserved communities.',
  },
];

export const eventSpeakers: EventSpeaker[] = [
  // 2025 Event Speakers
  {
    id: '1',
    eventId: '1',
    speakerId: '1',
    talkTitle: 'Rewiring the Brain: The Science of Learning',
    talkDescription: 'Discover how recent breakthroughs in neuroscience are revolutionizing our understanding of learning and memory, and what this means for education in the 21st century.',
    youtubeUrl: '',
    order: 1,
  },
  {
    id: '2',
    eventId: '1',
    speakerId: '2',
    talkTitle: 'Community-Driven Innovation',
    talkDescription: 'How grassroots movements and local entrepreneurs are solving urban challenges from the ground up.',
    youtubeUrl: '',
    order: 2,
  },
  {
    id: '3',
    eventId: '1',
    speakerId: '3',
    talkTitle: 'Cities as Climate Solutions',
    talkDescription: 'Why urban areas hold the key to addressing climate change and how Chicago is leading the way.',
    youtubeUrl: '',
    order: 3,
  },
  // 2024 Event Speakers
  {
    id: '4',
    eventId: '2',
    speakerId: '4',
    talkTitle: 'AI for Everyone: Democratizing Education',
    talkDescription: 'How artificial intelligence can provide personalized learning experiences to students worldwide.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    order: 1,
  },
  {
    id: '5',
    eventId: '2',
    speakerId: '5',
    talkTitle: 'The Future of Accessible Healthcare',
    talkDescription: '3D printing is revolutionizing how we think about medical devices and accessibility.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    order: 2,
  },
];

export const teamMembers: TeamMember[] = [
  // Current Team
  {
    id: '1',
    name: 'Jennifer Martinez',
    role: 'President',
    committee: 'Executive',
    headshot: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    blurb: 'Senior studying Business Administration with a passion for connecting ideas and people.',
    isCurrent: true,
    yearsActive: '2023-2025',
    linkedIn: 'https://linkedin.com/in/example',
  },
  {
    id: '2',
    name: 'David Kim',
    role: 'Vice President',
    committee: 'Executive',
    headshot: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    blurb: 'Computer Science major focused on using technology for social good.',
    isCurrent: true,
    yearsActive: '2023-2025',
  },
  {
    id: '3',
    name: 'Aisha Patel',
    role: 'Director of Curation',
    committee: 'Curation',
    headshot: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    blurb: 'Passionate about finding diverse voices and perspectives for our stage.',
    isCurrent: true,
    yearsActive: '2024-2025',
  },
  {
    id: '4',
    name: 'Michael Brown',
    role: 'Director of Marketing',
    committee: 'Marketing',
    headshot: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    blurb: 'Creative strategist with a background in digital media and communications.',
    isCurrent: true,
    yearsActive: '2024-2025',
  },
  {
    id: '5',
    name: 'Emily Zhang',
    role: 'Director of Operations',
    committee: 'Operations',
    headshot: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    blurb: 'Industrial Engineering student who loves making events run smoothly.',
    isCurrent: true,
    yearsActive: '2024-2025',
  },
  // Alumni
  {
    id: '6',
    name: 'Robert Johnson',
    role: 'Former President',
    committee: 'Executive',
    headshot: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    blurb: 'Led the organization through its 2022 and 2023 events. Now working in consulting.',
    isCurrent: false,
    yearsActive: '2021-2023',
    linkedIn: 'https://linkedin.com/in/example',
  },
  {
    id: '7',
    name: 'Lisa Chen',
    role: 'Former VP of Sponsorship',
    committee: 'Development',
    headshot: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    blurb: 'Built our corporate partnership program from the ground up.',
    isCurrent: false,
    yearsActive: '2020-2022',
  },
];

export const photos: Photo[] = [
  {
    id: '1',
    eventId: '2',
    category: 'Talks',
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
    caption: 'Speaker on the main stage',
    order: 1,
  },
  {
    id: '2',
    eventId: '2',
    category: 'Audience',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    caption: 'Engaged audience during keynote',
    order: 2,
  },
  {
    id: '3',
    eventId: '2',
    category: 'Networking',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    caption: 'Attendees networking during break',
    order: 3,
  },
  {
    id: '4',
    eventId: '3',
    category: 'Talks',
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    caption: 'TED-style stage setup',
    order: 1,
  },
  {
    id: '5',
    eventId: '3',
    category: 'Behind the Scenes',
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800',
    caption: 'Team preparation before the event',
    order: 2,
  },
];

export const newsPosts: NewsPost[] = [
  {
    id: '1',
    slug: 'announcing-tedxuoichicago-2025',
    title: 'Announcing TEDxUofIChicago 2025: Ideas Ignited',
    excerpt: 'We are thrilled to announce our upcoming flagship event featuring an incredible lineup of speakers.',
    content: `# Ideas Ignited

We are thrilled to announce **TEDxUofIChicago 2025: Ideas Ignited**, our most ambitious event yet!

## What to Expect

This year's conference will feature:
- 8 incredible speakers from diverse backgrounds
- Interactive workshops and networking sessions
- Live performances and art installations
- And much more!

## Save the Date

Mark your calendars for **April 15, 2025**. Early bird tickets will be available soon.

Stay tuned for speaker announcements and registration details!`,
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    publishedAt: '2025-01-15',
    author: 'TEDxUofIChicago Team',
  },
  {
    id: '2',
    slug: 'speaker-spotlight-dr-maya-chen',
    title: 'Speaker Spotlight: Dr. Maya Chen on Rewiring the Brain',
    excerpt: 'Get to know our keynote speaker and her groundbreaking research on neuroplasticity.',
    content: `# Meet Dr. Maya Chen

We're excited to introduce **Dr. Maya Chen** as one of our featured speakers for TEDxUofIChicago 2025!

## About Her Research

Dr. Chen's work focuses on neuroplasticity—the brain's ability to reorganize and form new neural connections throughout life.

Her research has implications for:
- Education and learning methodologies
- Rehabilitation after brain injuries
- Cognitive enhancement for all ages

## Why Her Talk Matters

In her TEDx talk, Dr. Chen will share insights that could transform how we think about learning and personal growth.

Don't miss this opportunity to hear from one of the leading minds in neuroscience!`,
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    publishedAt: '2025-02-01',
    author: 'Curation Team',
  },
];

export const siteSettings: SiteSettings = {
  featuredEventId: '1',
  instagramUrl: 'https://instagram.com/tedxuoichicago',
  youtubeUrl: 'https://youtube.com/@tedxuoichicago',
  emailAddress: 'hello@tedxuoichicago.com',
  twitterUrl: 'https://twitter.com/tedxuoichicago',
  linkedInUrl: 'https://linkedin.com/company/tedxuoichicago',
};

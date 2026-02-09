import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Event, Speaker, EventSpeaker, TeamMember, Photo, NewsPost, SiteSettings } from '@/types';
import { 
  events as initialEvents, 
  speakers as initialSpeakers, 
  eventSpeakers as initialEventSpeakers,
  teamMembers as initialTeamMembers,
  photos as initialPhotos,
  newsPosts as initialNewsPosts,
  siteSettings as initialSiteSettings,
} from '@/data/mockData';

interface DataContextType {
  // Data
  events: Event[];
  speakers: Speaker[];
  eventSpeakers: EventSpeaker[];
  teamMembers: TeamMember[];
  photos: Photo[];
  newsPosts: NewsPost[];
  siteSettings: SiteSettings;
  
  // Event CRUD
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
  
  // Speaker CRUD
  addSpeaker: (speaker: Omit<Speaker, 'id'>) => void;
  updateSpeaker: (id: string, speaker: Partial<Speaker>) => void;
  deleteSpeaker: (id: string) => void;
  
  // EventSpeaker CRUD
  addEventSpeaker: (eventSpeaker: Omit<EventSpeaker, 'id'>) => void;
  updateEventSpeaker: (id: string, eventSpeaker: Partial<EventSpeaker>) => void;
  deleteEventSpeaker: (id: string) => void;
  
  // TeamMember CRUD
  addTeamMember: (member: Omit<TeamMember, 'id'>) => void;
  updateTeamMember: (id: string, member: Partial<TeamMember>) => void;
  deleteTeamMember: (id: string) => void;
  
  // NewsPost CRUD
  addNewsPost: (post: Omit<NewsPost, 'id'>) => void;
  updateNewsPost: (id: string, post: Partial<NewsPost>) => void;
  deleteNewsPost: (id: string) => void;
  
  // Site Settings
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
}

const DataContext = createContext<DataContextType | null>(null);

let idCounter = 100;
const generateId = () => String(idCounter++);

export function DataProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [speakers, setSpeakers] = useState<Speaker[]>(initialSpeakers);
  const [eventSpeakers, setEventSpeakers] = useState<EventSpeaker[]>(initialEventSpeakers);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [photos] = useState<Photo[]>(initialPhotos);
  const [newsPosts, setNewsPosts] = useState<NewsPost[]>(initialNewsPosts);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(initialSiteSettings);

  // Event CRUD
  const addEvent = useCallback((event: Omit<Event, 'id'>) => {
    setEvents(prev => [...prev, { ...event, id: generateId() }]);
  }, []);
  
  const updateEvent = useCallback((id: string, event: Partial<Event>) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, ...event } : e));
  }, []);
  
  const deleteEvent = useCallback((id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  }, []);

  // Speaker CRUD
  const addSpeaker = useCallback((speaker: Omit<Speaker, 'id'>) => {
    setSpeakers(prev => [...prev, { ...speaker, id: generateId() }]);
  }, []);
  
  const updateSpeaker = useCallback((id: string, speaker: Partial<Speaker>) => {
    setSpeakers(prev => prev.map(s => s.id === id ? { ...s, ...speaker } : s));
  }, []);
  
  const deleteSpeaker = useCallback((id: string) => {
    setSpeakers(prev => prev.filter(s => s.id !== id));
  }, []);

  // EventSpeaker CRUD
  const addEventSpeaker = useCallback((eventSpeaker: Omit<EventSpeaker, 'id'>) => {
    setEventSpeakers(prev => [...prev, { ...eventSpeaker, id: generateId() }]);
  }, []);
  
  const updateEventSpeaker = useCallback((id: string, eventSpeaker: Partial<EventSpeaker>) => {
    setEventSpeakers(prev => prev.map(es => es.id === id ? { ...es, ...eventSpeaker } : es));
  }, []);
  
  const deleteEventSpeaker = useCallback((id: string) => {
    setEventSpeakers(prev => prev.filter(es => es.id !== id));
  }, []);

  // TeamMember CRUD
  const addTeamMember = useCallback((member: Omit<TeamMember, 'id'>) => {
    setTeamMembers(prev => [...prev, { ...member, id: generateId() }]);
  }, []);
  
  const updateTeamMember = useCallback((id: string, member: Partial<TeamMember>) => {
    setTeamMembers(prev => prev.map(m => m.id === id ? { ...m, ...member } : m));
  }, []);
  
  const deleteTeamMember = useCallback((id: string) => {
    setTeamMembers(prev => prev.filter(m => m.id !== id));
  }, []);

  // NewsPost CRUD
  const addNewsPost = useCallback((post: Omit<NewsPost, 'id'>) => {
    setNewsPosts(prev => [...prev, { ...post, id: generateId() }]);
  }, []);
  
  const updateNewsPost = useCallback((id: string, post: Partial<NewsPost>) => {
    setNewsPosts(prev => prev.map(p => p.id === id ? { ...p, ...post } : p));
  }, []);
  
  const deleteNewsPost = useCallback((id: string) => {
    setNewsPosts(prev => prev.filter(p => p.id !== id));
  }, []);

  // Site Settings
  const updateSiteSettings = useCallback((settings: Partial<SiteSettings>) => {
    setSiteSettings(prev => ({ ...prev, ...settings }));
  }, []);

  return (
    <DataContext.Provider value={{
      events,
      speakers,
      eventSpeakers,
      teamMembers,
      photos,
      newsPosts,
      siteSettings,
      addEvent,
      updateEvent,
      deleteEvent,
      addSpeaker,
      updateSpeaker,
      deleteSpeaker,
      addEventSpeaker,
      updateEventSpeaker,
      deleteEventSpeaker,
      addTeamMember,
      updateTeamMember,
      deleteTeamMember,
      addNewsPost,
      updateNewsPost,
      deleteNewsPost,
      updateSiteSettings,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

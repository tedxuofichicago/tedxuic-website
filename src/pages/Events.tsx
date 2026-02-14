import { useEffect, useState } from 'react';
import { Layout } from '@/components/layout';
import { SectionHeader } from '@/components/sections';
import { EventCard } from '@/components/cards';
import { siteSettings } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { supabase } from '../lib/supabaseClient';
import type { Event } from '@/types';


// type Event = {
//   id: string;
//   slug: string;
//   name: string;
//   theme: string | null;
//   year: number;
//   date: string;
//   location_name: string | null;
//   hero_image_url: string | null;
//   isFlagship?: boolean; // Check if EventCard uses this
// };

// type Event = {
//   id: string;
//   slug: string;
//   name: string;
//   theme: string | null;
//   year: number;
//   date: string; // from Supabase
//   time: string | null; // new
//   location: string | null; // new
//   locationAddress: string | null; // new
//   heroImage: string | null; // new
//   description: string | null; // new
//   isFlagship: boolean;
// };

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function loadEvents() {
  //     const { data, error } = await supabase
  //       .from('events')
  //       .select('*')
  //       .order('date', { ascending: false });

  //     if (error) {
  //       console.error('Error loading events', error);
  //     } else {
  //       setEvents(data ?? []);
  //     }
  //     setLoading(false);
  //   }

  //   loadEvents();
  // }, []);
  useEffect(() => {
    async function loadEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: false });
  
        console.log('Supabase events data:', data);
        console.log('Supabase events error:', error);
        
      if (error) {
        console.error('Error loading events', error);
      } else {
        const mapped = (data ?? []).map((row) => ({
          id: row.id,
          slug: row.slug,
          name: row.name,
          theme: row.theme,
          year: row.year,
          date: row.date,
          time: row.start_time ?? null,
          location: row.location_name ?? null,
          locationAddress: row.location_address ?? null,
          heroImage: row.hero_image_url ?? null,
          description: row.description ?? null,
          isFlagship: row.is_flagship ?? false,
          albumUrl: row.album_url ?? null,
        })) as Event[];
  
        setEvents(mapped);
      }
      setLoading(false);
    }
  
    loadEvents();
  }, []);
  

  if (loading) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">Loading events…</div>
        </section>
      </Layout>
    );
  }

  if (!events.length) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">No events found.</div>
        </section>
      </Layout>
    );
  }

  const featuredEvent =
    events.find((e) => e.id === siteSettings.featuredEventId) || events[0];

  const pastEvents = events.filter((e) => e.id !== featuredEvent.id);

  const eventsByYear = pastEvents.reduce((acc, event) => {
    const year = event.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(event);
    return acc;
  }, {} as Record<number, Event[]>);

  const sortedYears = Object.keys(eventsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <SectionHeader
            title="Events"
            subtitle="Explore our past and upcoming TEDx conferences"
            centered
          />
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20">
        <div className="container">
          <div className="mb-6">
            <Badge className="bg-primary text-primary-foreground mb-4">
              {featuredEvent.isFlagship ? 'Upcoming Event' : 'Most Recent'}
            </Badge>
            <h2 className="text-3xl font-bold">{featuredEvent.theme}</h2>
          </div>
          <div className="max-w-2xl">
            <EventCard event={featuredEvent} />
          </div>
        </div>
      </section>

      {/* Past Events by Year */}
      {sortedYears.length > 0 && (
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <SectionHeader title="Past Events" />
            {sortedYears.map((year) => (
              <div key={year} className="mb-12 last:mb-0">
                <h3 className="text-2xl font-bold mb-6">{year}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventsByYear[year].map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}
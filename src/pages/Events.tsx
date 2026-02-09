import { Layout } from '@/components/layout';
import { SectionHeader } from '@/components/sections';
import { EventCard } from '@/components/cards';
import { events, siteSettings } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';

export default function EventsPage() {
  const featuredEvent = events.find(e => e.id === siteSettings.featuredEventId) || events[0];
  const pastEvents = events.filter(e => e.id !== featuredEvent.id);
  
  // Group past events by year
  const eventsByYear = pastEvents.reduce((acc, event) => {
    const year = event.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(event);
    return acc;
  }, {} as Record<number, typeof events>);

  const sortedYears = Object.keys(eventsByYear).map(Number).sort((a, b) => b - a);

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

import { Layout } from '@/components/layout';
import { SectionHeader } from '@/components/sections';
import { SpeakerCard } from '@/components/cards';
import { events, speakers, eventSpeakers, siteSettings } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';

export default function SpeakersPage() {
  const featuredEvent = events.find(e => e.id === siteSettings.featuredEventId) || events[0];
  
  // Get speakers for featured event
  const featuredSpeakers = eventSpeakers
    .filter(es => es.eventId === featuredEvent.id)
    .sort((a, b) => a.order - b.order)
    .map(es => ({
      eventSpeaker: es,
      speaker: speakers.find(s => s.id === es.speakerId)!,
      event: featuredEvent,
    }));

  // Get past event speakers grouped by event
  const pastEvents = events.filter(e => e.id !== featuredEvent.id);
  const pastSpeakersByEvent = pastEvents.map(event => ({
    event,
    speakers: eventSpeakers
      .filter(es => es.eventId === event.id)
      .sort((a, b) => a.order - b.order)
      .map(es => ({
        eventSpeaker: es,
        speaker: speakers.find(s => s.id === es.speakerId)!,
      })),
  })).filter(e => e.speakers.length > 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <SectionHeader
            title="Speakers"
            subtitle="Meet the inspiring minds who have graced our stage"
            centered
          />
        </div>
      </section>

      {/* Featured Event Speakers */}
      {featuredSpeakers.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="mb-8">
              <Badge className="bg-primary text-primary-foreground mb-4">
                {featuredEvent.isFlagship ? 'Upcoming Event' : 'Most Recent'}
              </Badge>
              <h2 className="text-3xl font-bold">{featuredEvent.theme} — {featuredEvent.year}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredSpeakers.map(({ speaker, eventSpeaker, event }) => (
                <SpeakerCard
                  key={speaker.id}
                  speaker={speaker}
                  eventSpeaker={eventSpeaker}
                  event={event}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Event Speakers */}
      {pastSpeakersByEvent.length > 0 && (
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <SectionHeader title="Past Speakers" />
            {pastSpeakersByEvent.map(({ event, speakers: eventSpeakersList }) => (
              <div key={event.id} className="mb-16 last:mb-0">
                <h3 className="text-2xl font-bold mb-2">{event.theme}</h3>
                <p className="text-muted-foreground mb-6">{event.name}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {eventSpeakersList.map(({ speaker, eventSpeaker }) => (
                    <SpeakerCard
                      key={speaker.id}
                      speaker={speaker}
                      eventSpeaker={eventSpeaker}
                      event={event}
                    />
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

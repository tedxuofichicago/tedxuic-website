import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, ExternalLink, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout';
import { SectionHeader } from '@/components/sections';
import { SpeakerCard } from '@/components/cards';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { events, speakers, eventSpeakers, photos } from '@/data/mockData';

export default function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find(e => e.slug === slug);

  if (!event) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Button asChild>
            <Link to="/events">Back to Events</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const eventSpeakersList = eventSpeakers
    .filter(es => es.eventId === event.id)
    .sort((a, b) => a.order - b.order)
    .map(es => ({
      ...es,
      speaker: speakers.find(s => s.id === es.speakerId)!,
    }));

  const eventPhotos = photos.filter(p => p.eventId === event.id);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container relative z-10 pb-12">
          <Link 
            to="/events" 
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{event.year}</Badge>
            {event.isFlagship && (
              <Badge className="bg-primary text-primary-foreground">Flagship</Badge>
            )}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">{event.theme}</h1>
          <p className="text-xl text-muted-foreground mb-6">{event.name}</p>
          <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl">
            <SectionHeader title="About This Event" />
            <p className="text-lg text-muted-foreground">{event.description}</p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeader title="Location" />
              <p className="text-lg font-semibold mb-2">{event.location}</p>
              <p className="text-muted-foreground mb-4">{event.locationAddress}</p>
              <Button variant="outline" asChild>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(event.locationAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border">
              <iframe
                title="Event Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(event.locationAddress)}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      {eventSpeakersList.length > 0 && (
        <section className="py-16">
          <div className="container">
            <SectionHeader
              title="Speakers"
              subtitle={`Meet the minds behind ${event.theme}`}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventSpeakersList.map(({ speaker, ...eventSpeaker }) => (
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

      {/* Photos */}
      {eventPhotos.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="flex items-end justify-between mb-8">
              <SectionHeader title="Event Photos" />
              {event.albumUrl && (
                <Button variant="outline" asChild>
                  <a href={event.albumUrl} target="_blank" rel="noopener noreferrer">
                    View Full Album <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {eventPhotos.map((photo) => (
                <div key={photo.id} className="aspect-video rounded-lg overflow-hidden border">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { events, speakers, eventSpeakers } from '@/data/mockData';

export default function TalkDetailPage() {
  const { eventSlug, speakerSlug } = useParams<{ eventSlug: string; speakerSlug: string }>();
  
  const event = events.find(e => e.slug === eventSlug);
  const speaker = speakers.find(s => s.slug === speakerSlug);
  const eventSpeaker = event && speaker 
    ? eventSpeakers.find(es => es.eventId === event.id && es.speakerId === speaker.id)
    : null;

  if (!event || !speaker || !eventSpeaker) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Talk Not Found</h1>
          <Button asChild>
            <Link to="/speakers">Back to Speakers</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const embedUrl = eventSpeaker.youtubeUrl ? getYouTubeEmbedUrl(eventSpeaker.youtubeUrl) : null;

  return (
    <Layout>
      {/* Navigation */}
      <section className="py-8 border-b">
        <div className="container">
          <Link 
            to={`/events/${event.slug}`} 
            className="inline-flex items-center text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {event.theme}
          </Link>
        </div>
      </section>

      {/* Video / Talk Header */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Video or Placeholder */}
            <div className="lg:col-span-2">
              {embedUrl ? (
                <div className="aspect-video rounded-lg overflow-hidden border bg-muted">
                  <iframe
                    title={eventSpeaker.talkTitle}
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="aspect-video rounded-lg overflow-hidden border bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-muted-foreground mb-4">Video coming soon</p>
                    <p className="text-sm text-muted-foreground">
                      This talk will be available after the event.
                    </p>
                  </div>
                </div>
              )}
              
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{event.year}</Badge>
                  <Badge variant="outline">{event.theme}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{eventSpeaker.talkTitle}</h1>
                <p className="text-lg text-muted-foreground">{eventSpeaker.talkDescription}</p>
                
                {eventSpeaker.youtubeUrl && (
                  <Button variant="outline" className="mt-6" asChild>
                    <a href={eventSpeaker.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      Watch on YouTube <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Speaker Info */}
            <div>
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden border mb-6">
                  <img
                    src={speaker.headshot}
                    alt={speaker.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold">{speaker.name}</h2>
                <p className="text-primary font-medium">{speaker.title}</p>
                <p className="text-muted-foreground mb-4">{speaker.affiliation}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {speaker.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <div className="prose prose-sm text-muted-foreground">
                  <p>{speaker.fullBio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

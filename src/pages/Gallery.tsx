import { ExternalLink } from 'lucide-react';
import { Layout } from '@/components/layout';
import { SectionHeader } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { events, photos } from '@/data/mockData';

export default function GalleryPage() {
  // Group photos by event
  const photosByEvent = events
    .filter(event => photos.some(p => p.eventId === event.id))
    .map(event => ({
      event,
      photos: photos.filter(p => p.eventId === event.id).sort((a, b) => a.order - b.order),
    }));

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <SectionHeader
            title="Gallery"
            subtitle="Moments captured from our events"
            centered
          />
        </div>
      </section>

      {/* Photos by Event */}
      <section className="py-20">
        <div className="container">
          {photosByEvent.length > 0 ? (
            photosByEvent.map(({ event, photos: eventPhotos }) => (
              <div key={event.id} className="mb-16 last:mb-0">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">{event.theme}</h2>
                    <p className="text-muted-foreground">{event.name}</p>
                  </div>
                  {event.albumUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={event.albumUrl} target="_blank" rel="noopener noreferrer">
                        Full Album <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {eventPhotos.slice(0, 6).map((photo) => (
                    <div 
                      key={photo.id} 
                      className="aspect-video rounded-lg overflow-hidden border group cursor-pointer"
                    >
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-12">
              No photos available yet. Check back after our next event!
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}

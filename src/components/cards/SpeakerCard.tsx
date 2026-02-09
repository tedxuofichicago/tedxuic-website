import { Link } from 'react-router-dom';
import type { Speaker, EventSpeaker, Event } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SpeakerCardProps {
  speaker: Speaker;
  eventSpeaker?: EventSpeaker;
  event?: Event;
  showTalk?: boolean;
}

export function SpeakerCard({ speaker, eventSpeaker, event, showTalk = true }: SpeakerCardProps) {
  const linkTo = event && eventSpeaker 
    ? `/events/${event.slug}/speakers/${speaker.slug}`
    : `/speakers/${speaker.slug}`;

  return (
    <Link to={linkTo}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 h-full">
        <div className="aspect-square overflow-hidden">
          <img
            src={speaker.headshot}
            alt={speaker.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-foreground">{speaker.name}</h3>
          <p className="text-sm text-primary font-medium">{speaker.title}</p>
          <p className="text-sm text-muted-foreground">{speaker.affiliation}</p>
          
          {showTalk && eventSpeaker && (
            <p className="mt-3 text-sm font-medium text-foreground line-clamp-2">
              "{eventSpeaker.talkTitle}"
            </p>
          )}
          
          <div className="mt-3 flex flex-wrap gap-1">
            {speaker.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

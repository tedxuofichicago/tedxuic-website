import { Linkedin } from 'lucide-react';
import type { TeamMember } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="aspect-square overflow-hidden">
        <img
          src={member.headshot}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
            <p className="text-sm text-primary font-medium">{member.role}</p>
          </div>
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
        <Badge variant="outline" className="mt-2 text-xs">
          {member.committee}
        </Badge>
        <p className="mt-3 text-sm text-muted-foreground">{member.blurb}</p>
        {!member.isCurrent && (
          <p className="mt-2 text-xs text-muted-foreground">
            Active: {member.yearsActive}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

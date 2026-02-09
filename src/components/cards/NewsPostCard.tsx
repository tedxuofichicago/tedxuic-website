import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import type { NewsPost } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

interface NewsPostCardProps {
  post: NewsPost;
}

export function NewsPostCard({ post }: NewsPostCardProps) {
  return (
    <Link to={`/news/${post.slug}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 h-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
          <p className="mt-3 text-sm text-primary font-medium">
            Read more →
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

import { Layout } from '@/components/layout';
import { SectionHeader } from '@/components/sections';
import { NewsPostCard } from '@/components/cards';
import { newsPosts } from '@/data/mockData';

export default function NewsPage() {
  const sortedPosts = [...newsPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <SectionHeader
            title="News"
            subtitle="Updates and announcements from our team"
            centered
          />
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container">
          {sortedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPosts.map((post) => (
                <NewsPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-12">
              No news posts yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}

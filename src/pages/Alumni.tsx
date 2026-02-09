import { Layout } from '@/components/layout';
import { SectionHeader } from '@/components/sections';
import { TeamMemberCard } from '@/components/cards';
import { teamMembers } from '@/data/mockData';

export default function AlumniPage() {
  const alumni = teamMembers.filter(m => !m.isCurrent);
  
  // Group by years active
  const alumniByYears = alumni.reduce((acc, member) => {
    const years = member.yearsActive;
    if (!acc[years]) acc[years] = [];
    acc[years].push(member);
    return acc;
  }, {} as Record<string, typeof alumni>);

  // Sort years descending
  const sortedYears = Object.keys(alumniByYears).sort((a, b) => {
    const endYearA = parseInt(a.split('-')[1] || a);
    const endYearB = parseInt(b.split('-')[1] || b);
    return endYearB - endYearA;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <SectionHeader
            title="Alumni"
            subtitle="Honoring the past leaders who built our legacy"
            centered
          />
        </div>
      </section>

      {/* Alumni by Years */}
      <section className="py-20">
        <div className="container">
          {sortedYears.length > 0 ? (
            sortedYears.map((years) => (
              <div key={years} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full" />
                  {years}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {alumniByYears[years].map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-12">
              No alumni records yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* Alumni Network */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader title="Stay Connected" centered />
            <p className="text-muted-foreground mb-6">
              Our alumni have gone on to do amazing things in fields ranging from technology 
              and healthcare to arts and public service. If you're a TEDxUofIChicago alum, 
              we'd love to stay in touch!
            </p>
            <p className="text-sm text-muted-foreground">
              Reach out to us at alumni@tedxuoichicago.com
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Layout } from '@/components/layout';
import { SectionHeader } from '@/components/sections';
import { TeamMemberCard } from '@/components/cards';
import { teamMembers } from '@/data/mockData';

export default function TeamPage() {
  const currentMembers = teamMembers.filter(m => m.isCurrent);
  
  // Group by committee
  const membersByCommittee = currentMembers.reduce((acc, member) => {
    if (!acc[member.committee]) acc[member.committee] = [];
    acc[member.committee].push(member);
    return acc;
  }, {} as Record<string, typeof currentMembers>);

  // Order committees: Executive first, then alphabetically
  const orderedCommittees = Object.keys(membersByCommittee).sort((a, b) => {
    if (a === 'Executive') return -1;
    if (b === 'Executive') return 1;
    return a.localeCompare(b);
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <SectionHeader
            title="Our Team"
            subtitle="Meet the dedicated students behind TEDxUofIChicago"
            centered
          />
        </div>
      </section>

      {/* Team Members by Committee */}
      <section className="py-20">
        <div className="container">
          {orderedCommittees.map((committee) => (
            <div key={committee} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full" />
                {committee}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {membersByCommittee[committee].map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Interested in being part of TEDxUofIChicago? We're always looking for passionate 
            students who want to help spread ideas worth sharing.
          </p>
          <p className="text-sm opacity-80">
            Applications open at the beginning of each semester.
          </p>
        </div>
      </section>
    </Layout>
  );
}

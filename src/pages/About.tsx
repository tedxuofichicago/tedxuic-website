import { Layout } from '@/components/layout';
import { SectionHeader } from '@/components/sections';

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">TEDx</span>UofIChicago
            </h1>
            <p className="text-xl text-muted-foreground">
              Independently organized TED events bringing ideas worth spreading to UIC.
            </p>
          </div>
        </div>
      </section>

      {/* What is TED */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="What is TED?" />
              <p className="text-muted-foreground mb-4">
                TED is a nonprofit organization devoted to <strong className="text-primary">Ideas Worth Spreading</strong>. 
                Started as a four-day conference in California 30 years ago, TED has grown to support its mission 
                with multiple initiatives.
              </p>
              <p className="text-muted-foreground mb-4">
                At TED, the world's leading thinkers and doers are asked to give the talk of their lives in 18 minutes or less. 
                TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, 
                and many more.
              </p>
              <p className="text-muted-foreground">
                TED's open and free initiatives for spreading ideas include TED.com, where new TED Talk videos 
                are posted daily; TED Talks Daily podcast; and the TEDx program.
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800"
                alt="TED Conference"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is TEDx */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-video rounded-lg overflow-hidden border shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800"
                alt="TEDx Event"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionHeader title="What is TEDx?" />
              <p className="text-muted-foreground mb-4">
                In the spirit of ideas worth spreading, <strong className="text-primary">TED has created TEDx</strong>—a 
                program of local, self-organized events that bring people together to share a TED-like experience.
              </p>
              <p className="text-muted-foreground mb-4">
                At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. 
                These local, self-organized events are branded TEDx, where x = independently organized TED event.
              </p>
              <p className="text-muted-foreground">
                The TED Conference provides general guidance for the TEDx program, but individual TEDx events 
                are self-organized, subject to certain rules and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Chapter */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="TEDxUofIChicago" centered />
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                TEDxUofIChicago is the official TEDx chapter at the University of Illinois Chicago. 
                Our mission is to bring together the brightest minds from our university and the 
                greater Chicago community to share ideas that inspire, educate, and spark meaningful conversation.
              </p>
              <p>
                Founded in 2018, we have hosted multiple successful conferences featuring speakers from 
                diverse backgrounds—scientists, artists, entrepreneurs, activists, and thought leaders 
                who have shared their unique perspectives with hundreds of attendees.
              </p>
              <p>
                Our student-led team works year-round to curate exceptional speakers, create memorable 
                experiences, and foster a community of curious minds eager to engage with ideas worth spreading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <SectionHeader title="Our Values" centered />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Curiosity</h3>
              <p className="text-muted-foreground">
                We embrace the spirit of inquiry and encourage exploration of ideas across all disciplines.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Diversity</h3>
              <p className="text-muted-foreground">
                We celebrate diverse perspectives and seek out voices from all backgrounds and experiences.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-muted-foreground">
                We believe ideas can change the world and strive to create meaningful, lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

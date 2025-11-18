import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Bester – Our Mission and Vision',
  description: 'Learn about Bester\'s mission to make self-development social, accessible, and sustainable through AI and community.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
            About Bester
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            We're building the future of self-development — social, smart, and sustainable.
          </p>
        </header>

        {/* Mission */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[var(--color-brand-primary)]">Our Mission</h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            To make self-development accessible, social, and sustainable for everyone.
            We believe that growing together is better than growing alone, and that the
            combination of AI, community, and proven systems can help anyone become their
            best self.
          </p>
        </section>

        {/* Vision */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[var(--color-brand-primary)]">Our Vision</h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            A world where self-development is as social and engaging as your favorite
            social network, where AI acts as your personal coach, and where everyone has
            access to the tools and community they need to thrive.
          </p>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            We envision the Besterverse as a place where millions of people support each
            other's growth, celebrate wins together, and explore different dimensions of
            personal development in a fun, playful way.
          </p>
        </section>

        {/* Why Different */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[var(--color-brand-primary)]">Why Bester is Different</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                🤝 Social-First
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Unlike traditional self-help apps that isolate you, Bester puts community
                at the center. Share your journey, get support, and stay accountable together.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                🤖 AI-Native
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Built from the ground up with AI that learns your patterns, adapts to your
                needs, and provides personalized coaching. Not just another app with a chatbot
                slapped on.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                ⚙️ Systems Thinking
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We believe in structured routines, clear quests, and organized realms.
                Self-development shouldn't be chaotic — it should be systematic, but also
                flexible and fun.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[var(--color-brand-primary)]">Our Story</h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Bester was born from a simple observation: self-development is often lonely,
            overwhelming, and unsustainable. We tried every app, read every book, joined
            every challenge — but nothing stuck.
          </p>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            The breakthrough came when we realized that the missing ingredient was
            <strong className="text-[var(--color-text-primary)]"> community</strong>. People
            thrive when they grow together, when they can share their struggles and celebrate
            their wins with others on the same path.
          </p>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            We combined this insight with the power of AI and the structure of proven systems
            to create Bester — a place where self-development is social, smart, and sustainable.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center py-12 px-6 bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-[var(--color-brand-accent)]/10 rounded-[var(--radius-2xl)]">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            Join us on this journey
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
            Be part of the Bester community. Help us shape the future of self-development.
          </p>
          <a
            href="/#waitlist"
            className="inline-block px-8 py-3 bg-[var(--color-brand-primary)] text-white rounded-[var(--radius-md)] font-semibold hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
          </a>
        </section>
      </div>
    </div>
  );
}

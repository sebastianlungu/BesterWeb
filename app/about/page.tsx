"use client";

import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  const founders = [
    {
      name: 'Alex Thompson',
      role: 'Co-Founder & CEO',
      bio: 'Former product lead at a major tech company, passionate about building communities that help people grow. Believes that the best version of yourself emerges through connection, not isolation.',
    },
    {
      name: 'Jordan Lee',
      role: 'Co-Founder & CTO',
      bio: 'AI engineer with a background in behavioral psychology. Obsessed with creating intelligent systems that adapt to human needs and make personal growth feel effortless and engaging.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <Section variant="cream-strong" padding="default">
        <Container size="narrow">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
              About Bester
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We're building the future of self-development — social, smart, and sustainable.
            </p>
          </motion.header>
        </Container>
      </Section>

      {/* Who We Are - Founders */}
      <Section variant="mint-subtle" padding="default">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[var(--color-brand-primary)] text-center">
              Who We Are
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl text-[var(--color-text-primary)]">
                        {founder.name}
                      </CardTitle>
                      <p className="text-[var(--color-brand-primary)] font-medium">
                        {founder.role}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {founder.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section variant="cream-strong" padding="default">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-[var(--color-brand-primary)]">
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Bester was born from a simple observation: self-development is often lonely, overwhelming, and unsustainable. We tried every app, read every book, joined every challenge — but nothing stuck. The breakthrough came when we realized that the missing ingredient was community. People thrive when they grow together, when they can share their struggles and celebrate their wins with others on the same path. We combined this insight with the power of AI and the structure of proven systems to create Bester — a place where self-development is social, smart, and sustainable.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Our Mission */}
      <Section variant="mint-subtle" padding="default">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-[var(--color-brand-primary)]">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  To make self-development accessible, social, and sustainable for everyone. We believe that growing together is better than growing alone, and that the combination of AI, community, and proven systems can help anyone become their best self.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Our Vision */}
      <Section variant="cream-strong" padding="default">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-[var(--color-brand-primary)]">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  A world where self-development is as social and engaging as your favorite social network, where AI acts as your personal coach, and where everyone has access to the tools and community they need to thrive. We envision the Besterverse as a place where millions of people support each other's growth, celebrate wins together, and explore different dimensions of personal development in a fun, playful way.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}

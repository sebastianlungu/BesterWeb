"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Highlight } from '@/components/aceternity/hero-highlight';

export default function ValuePropositionSection() {
  return (
    <Section variant="default" padding="default">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 px-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Reveal your <Highlight className="inline-block">Bester self</Highlight> — inside a social self-development community
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Growing together is better than growing alone. Bester combines the power of AI, the support of community, and the structure of proven systems to help you become your best self.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}

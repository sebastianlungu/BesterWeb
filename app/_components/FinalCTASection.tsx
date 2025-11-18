'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SpotlightCard } from '@/components/aceternity/spotlight-card';
import WaitlistForm from './WaitlistForm';

export default function FinalCTASection() {
  return (
    <Section variant="gradient" id="waitlist">
      <Container size="narrow">
        <SpotlightCard className="text-center shadow-sm hover:shadow-lg transition-all duration-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 px-4"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                Ready to start your Bester life?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Join thousands on the waitlist. Be the first to experience self-development
                that's social, smart, and actually sustainable.
              </p>
            </div>

            <WaitlistForm />

            <p className="text-sm text-gray-600">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </SpotlightCard>
      </Container>
    </Section>
  );
}

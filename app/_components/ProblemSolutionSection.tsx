'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Frown, Wind, AlertCircle, Bot, Users, Settings } from 'lucide-react';

export default function ProblemSolutionSection() {
  return (
    <Section variant="mint-subtle">
      <Container size="default">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2">
              <CardHeader className="pb-4">
                <Badge className="w-fit mb-4 px-4 py-1 text-sm font-semibold bg-[var(--color-accent-100)] text-[var(--color-accent-700)] hover:bg-[var(--color-accent-200)]">
                  The Problem
                </Badge>
                <CardTitle className="text-3xl md:text-4xl leading-tight text-gray-900">
                  Self-development is lonely, chaotic, and overwhelming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-gray-600">
                  <div className="flex items-start gap-4 text-lg">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Frown className="w-5 h-5 text-red-600" />
                    </div>
                    <span>Working on yourself alone feels isolating</span>
                  </div>
                  <div className="flex items-start gap-4 text-lg">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <Wind className="w-5 h-5 text-orange-600" />
                    </div>
                    <span>Too many apps, strategies, and advice — no clear path</span>
                  </div>
                  <div className="flex items-start gap-4 text-lg">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                    </div>
                    <span>Hard to stay consistent without support and accountability</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-2 border-[var(--color-brand-primary)] shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white to-[var(--color-brand-primary)]/5">
              <CardHeader className="pb-4">
                <Badge className="w-fit mb-4 bg-[var(--color-semantic-success)] px-4 py-1 text-sm font-semibold">
                  The Solution
                </Badge>
                <CardTitle className="text-3xl md:text-4xl text-[var(--color-brand-primary)] leading-tight">
                  Bester = AI + Social + Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-gray-600">
                  <div className="flex items-start gap-4 text-lg">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-purple-600" />
                    </div>
                    <span>
                      <strong className="text-gray-900 text-xl">AI Coaching</strong> —
                      Personalized guidance that adapts to your journey
                    </span>
                  </div>
                  <div className="flex items-start gap-4 text-lg">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>
                      <strong className="text-gray-900 text-xl">Social Community</strong> —
                      Share progress, celebrate wins, stay accountable together
                    </span>
                  </div>
                  <div className="flex items-start gap-4 text-lg">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-green-600" />
                    </div>
                    <span>
                      <strong className="text-gray-900 text-xl">Smart Systems</strong> —
                      Structured routines, quests, and realms to keep you on track
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

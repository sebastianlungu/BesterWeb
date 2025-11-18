"use client";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { Sparkles, Bot, Target } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: 'Social Feed',
      description: 'See what your community is working on, share your wins, and celebrate progress together.',
      icon: Sparkles,
      color: 'var(--color-brand-primary)',
    },
    {
      title: 'Smart AI Routine Engine',
      description: 'Personalized routines that adapt to you. AI learns your patterns and helps you build better habits.',
      icon: Bot,
      color: 'var(--color-realm-system-sanctum)',
    },
    {
      title: 'Iteration & Fun Trying',
      description: 'Playful experimentation, no guilt, just growth. Try new things, learn what works, iterate.',
      icon: Target,
      color: 'var(--color-brand-accent)',
    },
  ];

  return (
    <Section variant="mint-strong" id="features">
      <Container>
        <div className="text-center mb-16 px-4 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Everything you need to grow
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bester gives you the tools, community, and structure to make self-development
            sustainable and fun.
          </p>
        </div>

        <BentoGrid className="md:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <BentoGridItem
                key={index}
                title={
                  <span style={{ color: feature.color }} className="text-2xl font-bold">
                    {feature.title}
                  </span>
                }
                description={
                  <span className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </span>
                }
                icon={
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <IconComponent className="w-10 h-10" style={{ color: feature.color }} />
                  </div>
                }
                className="rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2"
              />
            );
          })}
        </BentoGrid>
      </Container>
    </Section>
  );
}

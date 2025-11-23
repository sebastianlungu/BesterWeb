"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Activity,
  PaintBrush,
  Heart,
  Target,
  Compass,
  Sparkle
} from "phosphor-react";

export default function RealmsSection() {
  const realms = [
    {
      name: 'Mind Forge',
      description: 'Mental clarity, focus, learning',
      bgColor: 'var(--color-realm-mindForge-bg)',
      lineColor: 'var(--color-realm-mindForge-line)',
      icon: Brain,
    },
    {
      name: 'Vital Body',
      description: 'Physical health, fitness, movement',
      bgColor: 'var(--color-realm-vitalBody-bg)',
      lineColor: 'var(--color-realm-vitalBody-line)',
      icon: Activity,
    },
    {
      name: 'Creative Flow',
      description: 'Artistic expression, creativity',
      bgColor: 'var(--color-realm-creativeFlow-bg)',
      lineColor: 'var(--color-realm-creativeFlow-line)',
      icon: PaintBrush,
    },
    {
      name: 'Heart Lab',
      description: 'Connection, love, relationships',
      bgColor: 'var(--color-realm-heartLab-bg)',
      lineColor: 'var(--color-realm-heartLab-line)',
      icon: Heart,
    },
    {
      name: 'System Sanctum',
      description: 'Systems, processes, optimization',
      bgColor: 'var(--color-realm-systemSanctum-bg)',
      lineColor: 'var(--color-realm-systemSanctum-line)',
      icon: Target,
    },
    {
      name: 'Playground Earth',
      description: 'Exploration, adventure',
      bgColor: 'var(--color-realm-playgroundEarth-bg)',
      lineColor: 'var(--color-realm-playgroundEarth-line)',
      icon: Compass,
    },
    {
      name: 'Inner Cosmos',
      description: 'Spirituality, purpose, legacy',
      bgColor: 'var(--color-realm-innerCosmos-bg)',
      lineColor: 'var(--color-realm-innerCosmos-line)',
      icon: Sparkle,
    },
  ];

  return (
    <Section variant="cream-strong" id="realms">
      <Container>
        <div className="text-center mb-16 px-4 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Explore the Besterverse
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Different realms for different dimensions of growth. Choose your path,
            or explore them all.
          </p>
        </div>

        <div className="w-full overflow-x-auto px-4 py-8 scrollbar-hide">
          {/* Single row horizontal layout */}
          <div className="flex gap-4 justify-center min-w-min mx-auto w-fit">
            {realms.map((realm, index) => {
              const IconComponent = realm.icon;
              return (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card
                    className="h-[140px] w-[160px] border-2 cursor-pointer rounded-[32px] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                    style={{
                      backgroundColor: realm.bgColor,
                      borderColor: realm.lineColor,
                    }}
                  >
                    <CardContent className="p-5 flex flex-col items-center justify-center h-full space-y-2 text-center">
                      <div className="flex-shrink-0">
                        <IconComponent
                          size={40}
                          weight="bold"
                          style={{ color: realm.lineColor }}
                        />
                      </div>
                      <h3 className="font-bold text-sm leading-tight flex-shrink-0 text-[var(--color-text-primary)]">
                        {realm.name}
                      </h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-snug">
                        {realm.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { AnimatedGrid } from "@/components/aceternity/animated-grid";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Lightning,
  Activity,
  Heartbeat,
  PaintBrush,
  Palette,
  Heart,
  HandHeart,
  Target,
  Wrench,
  Compass,
  GlobeHemisphereWest,
  Sparkle
} from "phosphor-react";

export default function RealmsSection() {
  const realms = [
    {
      name: 'Mind Forge',
      description: 'Mental clarity, focus, learning',
      color: 'var(--color-realm-mind-forge)',
      icon: Brain,
    },
    {
      name: 'Vital Body',
      description: 'Physical health, fitness, movement',
      color: 'var(--color-realm-vital-body)',
      icon: Activity,
    },
    {
      name: 'Creative Flow',
      description: 'Artistic expression, creativity',
      color: 'var(--color-realm-creative-flow)',
      icon: PaintBrush,
    },
    {
      name: 'Heart Lab',
      description: 'Connection, love, relationships',
      color: 'var(--color-realm-heart-lab)',
      icon: Heart,
    },
    {
      name: 'System Sanctum',
      description: 'Systems, processes, optimization',
      color: 'var(--color-realm-system-sanctum)',
      icon: Target,
    },
    {
      name: 'Playground Earth',
      description: 'Exploration, adventure',
      color: 'var(--color-realm-playground-earth)',
      icon: Compass,
    },
    {
      name: 'Inner Cosmos',
      description: 'Spirituality, purpose, legacy',
      color: 'var(--color-realm-inner-cosmos)',
      icon: Sparkle,
    },
  ];

  return (
    <Section variant="default" id="realms">
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

        <div className="max-w-7xl mx-auto w-full px-4">
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {realms.map((realm, index) => {
              const IconComponent = realm.icon;
              return (
                <motion.div
                  key={index}
                  className="h-full min-h-[220px]"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card
                    className="h-full border-2 cursor-pointer rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                    style={{
                      borderColor: realm.color,
                      background: `linear-gradient(135deg, ${realm.color}15, ${realm.color}08)`,
                    }}
                  >
                    <CardContent className="p-8 flex flex-col justify-start h-full space-y-4">
                      <div className="flex-shrink-0">
                        <IconComponent size={56} color={realm.color} weight="bold" />
                      </div>
                      <h3
                        className="font-bold text-xl leading-tight flex-shrink-0"
                        style={{ color: realm.color }}
                      >
                        {realm.name}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed flex-grow">
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { HeroHighlight, Highlight } from "@/components/aceternity/hero-highlight";
import { AnimatedSpotlight } from "@/components/aceternity/animated-spotlight";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import AppPreviewCarousel from './AppPreviewCarousel';
import { HeroRealmVideo } from './HeroRealmVideo';

export default function Hero() {
  const [currentRealm, setCurrentRealm] = useState('social-feed');

  return (
    <Section variant="default" padding="large" className="relative min-h-screen overflow-hidden pt-24">
      <Container size="wide">
        <AnimatedSpotlight fill="var(--color-brand-primary)" />

        <HeroHighlight>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content + CTA */}
            <div className="space-y-6">
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-balance">
                  Ready to start your{' '}
                  <Highlight className="inline-block">Bester life</Highlight>?
                </h1>
              </motion.div>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-semibold leading-tight"
              >
                Self-development made social.
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-xl"
              >
                Where AI meets community to help you grow — together.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="space-y-4 pt-4"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <a href="#waitlist">Join the Waitlist</a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="text-lg font-medium"
                  >
                    <a href="#features" className="flex items-center gap-2 group">
                      Learn more
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
                <p className="text-base text-[var(--color-text-secondary)] font-medium">
                  ✨ Get 3 months Premium free at launch
                </p>
              </motion.div>
            </div>

            {/* Right Column - Split Card (Carousel + Video) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="w-full"
            >
              {/* Split Card Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 h-[500px] lg:h-[550px]">
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    {/* Left Half - App Preview Carousel */}
                    <motion.div
                      className="flex items-center justify-center bg-white p-6"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AppPreviewCarousel onRealmChange={setCurrentRealm} />
                    </motion.div>

                    {/* Right Half - Lifestyle Video */}
                    <div className="hidden md:block">
                      <HeroRealmVideo realm={currentRealm} />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </HeroHighlight>
      </Container>
    </Section>
  );
}

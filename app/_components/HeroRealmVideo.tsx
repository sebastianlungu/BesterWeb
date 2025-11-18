'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroRealmVideoProps {
  realm: string;
}

// Mapping of realm IDs to video file paths
const realmVideos: Record<string, string> = {
  'social-feed': '/videos/social-feed.mp4',
  'ai-routine': '/videos/ai-routine.mp4',
  'quests-realms': '/videos/quests-realms.mp4',
  'mind-forge': '/videos/mind-forge.mp4',
  'vital-body': '/videos/vital-body.mp4',
};

export function HeroRealmVideo({ realm }: HeroRealmVideoProps) {
  const [currentVideo, setCurrentVideo] = useState(realmVideos[realm] || realmVideos['social-feed']);

  useEffect(() => {
    const videoSrc = realmVideos[realm] || realmVideos['social-feed'];
    setCurrentVideo(videoSrc);
  }, [realm]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-r-2xl bg-gradient-to-br from-gray-900 to-gray-800">
      <AnimatePresence mode="wait">
        <motion.video
          key={currentVideo}
          src={currentVideo}
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Overlay gradient to blend with background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </div>
  );
}

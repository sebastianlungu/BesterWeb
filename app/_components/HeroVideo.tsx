'use client';

export default function HeroVideo() {
  return (
    <div className="relative w-full aspect-video rounded-[var(--radius-2xl)] overflow-hidden shadow-2xl">
      {/* Placeholder for video - TODO: Add actual video */}
      <div className="w-full h-full bg-gradient-to-br from-[var(--color-brand-primary)] via-[var(--color-brand-secondary)] to-[var(--color-brand-accent)] flex items-center justify-center">
        <div className="text-center text-white p-8">
          <div className="text-6xl mb-4">🎥</div>
          <p className="text-lg font-medium">Lifestyle Video Placeholder</p>
          <p className="text-sm opacity-80 mt-2">
            Muted, looping video showing positive activity
          </p>
        </div>
      </div>

      {/* Uncomment when video is available */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/hero-lifestyle.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
}

import AppPreviewCarousel from './AppPreviewCarousel';
import HeroVideo from './HeroVideo';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content + Carousel */}
          <div className="space-y-8">
            {/* Text Content */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Ready to start your{' '}
                <span className="text-[var(--color-brand-primary)]">Bester life</span>?
              </h1>
              <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-medium">
                Self-development made social.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Where AI meets community to help you grow — together.
              </p>
            </div>

            {/* App Preview Carousel */}
            <div className="lg:hidden">
              <AppPreviewCarousel />
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a
                href="#waitlist"
                className="inline-block px-8 py-4 bg-[var(--color-brand-primary)] text-white rounded-[var(--radius-md)] font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Join the Waitlist
              </a>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Get 3 months Premium at launch.
              </p>
            </div>
          </div>

          {/* Right Side - Video (Desktop Only) */}
          <div className="hidden lg:block">
            <HeroVideo />
          </div>
        </div>

        {/* Desktop Carousel - Positioned as overlay or separate section */}
        <div className="hidden lg:block mt-12">
          <AppPreviewCarousel />
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-[var(--color-brand-accent)]/10 blur-3xl rounded-full"></div>
    </section>
  );
}

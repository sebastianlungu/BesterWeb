import WaitlistForm from './WaitlistForm';

export default function FinalCTASection() {
  return (
    <section id="waitlist" className="py-20 px-4 bg-gradient-to-br from-[var(--color-brand-primary)]/10 via-[var(--color-brand-secondary)]/10 to-[var(--color-brand-accent)]/10">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)]">
            Ready to start your Bester life?
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            Join thousands on the waitlist. Be the first to experience self-development
            that's social, smart, and actually sustainable.
          </p>
        </div>

        <WaitlistForm />

        <p className="text-sm text-[var(--color-text-tertiary)]">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}

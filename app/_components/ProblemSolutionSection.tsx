export default function ProblemSolutionSection() {
  return (
    <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-[var(--color-semantic-warning)]/10 text-[var(--color-semantic-warning)] rounded-[var(--radius-lg)] text-sm font-semibold">
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              Self-development is lonely, chaotic, and overwhelming
            </h2>
            <div className="space-y-3 text-[var(--color-text-secondary)]">
              <p className="flex items-start gap-3">
                <span className="text-2xl">😔</span>
                <span>Working on yourself alone feels isolating</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">🌀</span>
                <span>Too many apps, strategies, and advice — no clear path</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">😰</span>
                <span>Hard to stay consistent without support and accountability</span>
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-[var(--color-semantic-success)]/10 text-[var(--color-semantic-success)] rounded-[var(--radius-lg)] text-sm font-semibold">
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)]">
              Bester = AI + Social + Systems
            </h2>
            <div className="space-y-3 text-[var(--color-text-secondary)]">
              <p className="flex items-start gap-3">
                <span className="text-2xl">🤖</span>
                <span>
                  <strong className="text-[var(--color-text-primary)]">AI Coaching</strong> —
                  Personalized guidance that adapts to your journey
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">👥</span>
                <span>
                  <strong className="text-[var(--color-text-primary)]">Social Community</strong> —
                  Share progress, celebrate wins, stay accountable together
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">⚙️</span>
                <span>
                  <strong className="text-[var(--color-text-primary)]">Smart Systems</strong> —
                  Structured routines, quests, and realms to keep you on track
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

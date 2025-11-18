export default function FeaturesSection() {
  const features = [
    {
      title: 'Social Feed',
      description: 'See what your community is working on, share your wins, and celebrate progress together.',
      icon: '🌟',
      color: 'var(--color-brand-primary)',
    },
    {
      title: 'Smart AI Routine Engine',
      description: 'Personalized routines that adapt to you. AI learns your patterns and helps you build better habits.',
      icon: '🤖',
      color: 'var(--color-realm-system-sanctum)',
    },
    {
      title: 'Iteration & Fun Trying',
      description: 'Playful experimentation, no guilt, just growth. Try new things, learn what works, iterate.',
      icon: '🎯',
      color: 'var(--color-brand-accent)',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Everything you need to grow
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Bester gives you the tools, community, and structure to make self-development
            sustainable and fun.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[var(--radius-2xl)] shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="w-16 h-16 rounded-[var(--radius-lg)] flex items-center justify-center text-3xl mb-4"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: feature.color }}
              >
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

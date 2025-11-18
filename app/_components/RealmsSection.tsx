export default function RealmsSection() {
  const realms = [
    {
      name: 'Mind Forge',
      description: 'Mental clarity, focus, learning',
      color: 'var(--color-realm-mind-forge)',
      emoji: '🧠',
    },
    {
      name: 'Vital Body',
      description: 'Physical health, fitness, movement',
      color: 'var(--color-realm-vital-body)',
      emoji: '💪',
    },
    {
      name: 'Creative Flow',
      description: 'Artistic expression, creativity',
      color: 'var(--color-realm-creative-flow)',
      emoji: '🎨',
    },
    {
      name: 'Heart Lab',
      description: 'Connection, love, relationships',
      color: 'var(--color-realm-heart-lab)',
      emoji: '💖',
    },
    {
      name: 'System Sanctum',
      description: 'Systems, processes, optimization',
      color: 'var(--color-realm-system-sanctum)',
      emoji: '⚙️',
    },
    {
      name: 'Playground Earth',
      description: 'Exploration, adventure',
      color: 'var(--color-realm-playground-earth)',
      emoji: '🌍',
    },
    {
      name: 'Inner Cosmos',
      description: 'Spirituality, purpose, legacy',
      color: 'var(--color-realm-inner-cosmos)',
      emoji: '✨',
    },
  ];

  return (
    <section id="realms" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Explore the Besterverse
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Different realms for different dimensions of growth. Choose your path,
            or explore them all.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {realms.map((realm, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-[var(--radius-2xl)] border-2 hover:shadow-lg transition-all cursor-pointer"
              style={{
                borderColor: realm.color,
                background: `linear-gradient(135deg, ${realm.color}10, ${realm.color}05)`,
              }}
            >
              <div className="text-4xl mb-3">{realm.emoji}</div>
              <h3
                className="font-bold text-lg mb-1"
                style={{ color: realm.color }}
              >
                {realm.name}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {realm.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

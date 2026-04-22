import React from 'react';

const WhoItIsFor = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
          <h2 className="heading-lg">Is This For You?</h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            Our smart incubator is built specifically for those looking to take the next step in their farming journey.
          </p>
        </div>

        <div className="grid grid-cols-3">
          <div className="card text-center" style={{ borderTop: '4px solid var(--color-amber)' }}>
            <h3 className="heading-sm">Small & Medium Poultry Farmers</h3>
            <p>If you have a growing flock and want to stop relying on external hatcheries to maintain your numbers.</p>
          </div>
          <div className="card text-center" style={{ borderTop: '4px solid var(--color-amber)' }}>
            <h3 className="heading-sm">Agri-Entrepreneurs</h3>
            <p>If you're looking to start your own local hatchery business and supply chicks to your neighboring community.</p>
          </div>
          <div className="card text-center" style={{ borderTop: '4px solid var(--color-amber)' }}>
            <h3 className="heading-sm">Rural Youth</h3>
            <p>If you want to explore new, practical income generation opportunities in agriculture with affordable starting capital.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItIsFor;

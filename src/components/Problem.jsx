import React from 'react';

const Problem = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--spacing-md)' }}>
          <h2 className="heading-lg">The Struggle with External Hatcheries</h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            You produce the eggs, but you still have to wait on others to get your chicks. Sound familiar?
          </p>
        </div>

        <div className="grid grid-cols-3">
          <div className="card text-center">
            <h3 className="heading-sm">High Costs</h3>
            <p>Paying third-party hatcheries cuts directly into your profit margin. Every batch means more fees.</p>
          </div>
          <div className="card text-center">
            <h3 className="heading-sm">Loss of Control</h3>
            <p>Your timing is tied to their schedule. Delays mean lost productivity and missed opportunities for your farm.</p>
          </div>
          <div className="card text-center">
            <h3 className="heading-sm">Limited Growth</h3>
            <p>As long as you rely on outsiders to hatch your chicks, your farm's self-reliance and potential to grow remain capped.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

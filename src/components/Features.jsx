import React from 'react';

const Features = () => {
  return (
    <section id="features" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
          <h2 className="heading-lg">Everything you need. Nothing you don't.</h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            Designed specifically for the small poultry farmer, keeping things practical and affordable.
          </p>
        </div>

        <div className="grid grid-cols-3">
          <div className="card text-center">
            <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', backgroundColor: 'var(--color-amber)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-white)' }}>1</div>
            <h3 className="heading-sm">Easy to Use</h3>
            <p>No technical expertise needed. If you can use a smartphone, you can run this incubator.</p>
          </div>
          <div className="card text-center">
            <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', backgroundColor: 'var(--color-amber)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-white)' }}>2</div>
            <h3 className="heading-sm">Auto Temperature</h3>
            <p>Maintains the exact warmth required for healthy hatching without constant checking.</p>
          </div>
          <div className="card text-center">
            <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', backgroundColor: 'var(--color-amber)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-white)' }}>3</div>
            <h3 className="heading-sm">Humidity Control</h3>
            <p>Keeps the moisture levels perfect, ensuring high hatch rates for every batch.</p>
          </div>
          <div className="card text-center">
            <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', backgroundColor: 'var(--color-amber)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-white)' }}>4</div>
            <h3 className="heading-sm">Automatic Egg Turning</h3>
            <p>Saves you the daily manual labor by gently turning the eggs at the right intervals.</p>
          </div>
          <div className="card text-center">
            <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', backgroundColor: 'var(--color-amber)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-white)' }}>5</div>
            <h3 className="heading-sm">Affordable Setup</h3>
            <p>At just ₹10,000, it pays for itself after just a few successful hatching cycles.</p>
          </div>
          <div className="card text-center">
            <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', backgroundColor: 'var(--color-amber)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-white)' }}>6</div>
            <h3 className="heading-sm">Farmer-Friendly</h3>
            <p>Built tough for rural environments. Easy to clean, easy to maintain, easy to fix.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

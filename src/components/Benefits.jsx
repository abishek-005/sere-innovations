import React from 'react';

const Benefits = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h2 className="heading-lg">What This Means For Your Farm</h2>
            <div style={{ marginTop: 'var(--spacing-md)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="heading-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-amber)', fontWeight: '700', fontSize: '1.8rem' }}>●</span> More Control
                </h3>
                <p>Decide exactly when to hatch based on your market timing, not the hatchery's schedule.</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="heading-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-amber)', fontWeight: '700', fontSize: '1.8rem' }}>●</span> True Independence
                </h3>
                <p>Break the cycle of dependency. Raise your chicks from your own eggs, on your own land.</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="heading-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-amber)', fontWeight: '700', fontSize: '1.8rem' }}>●</span> Cost Efficiency
                </h3>
                <p>Stop paying middleman fees. Saving money on every batch means higher profits at the end of the month.</p>
              </div>
              <div>
                <h3 className="heading-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-amber)', fontWeight: '700', fontSize: '1.8rem' }}>●</span> Simpler Operations
                </h3>
                <p>Spend less time transporting eggs and chicks, and more time focusing on the health of your flock.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Visual element representing growth/success */}
            <div style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '3/4',
              backgroundColor: 'var(--color-cream)',
              borderRadius: '16px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem', color: 'var(--color-amber)', fontWeight: '700' }}>↑</div>
              <h3 className="heading-sm text-center">Increased Confidence & Long-Term Income</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

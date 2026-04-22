import React from 'react';

const Solution = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-forest-green)', color: 'var(--color-white)' }}>
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div className="flex justify-center">
             <div style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '4/3',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <span style={{ fontSize: '1.2rem' }}>Smart Incubation System</span>
            </div>
          </div>
          <div>
            <h2 className="heading-lg" style={{ color: 'var(--color-white)' }}>
              The Sere Innovations Solution
            </h2>
            <p style={{ fontSize: '1.3rem', marginBottom: 'var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
              We've built an affordable, smart incubation system that lets you hatch your own eggs right on your farm. It handles all the complex climate control so you don't have to.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8' }}>
              No technical knowledge needed. Just load the eggs, and our system takes care of the temperature, humidity, and turning. It’s designed to bring the hatchery directly to you, cutting out the middleman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

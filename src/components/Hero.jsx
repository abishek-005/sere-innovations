import React from 'react';

const Hero = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h1 className="heading-lg">
              Helping farmers hatch their own future
            </h1>
            <p style={{ fontSize: '1.3rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              Sere Innovations builds affordable, easy-to-use smart egg incubators. Take control of your hatchery and boost your poultry farm's independence without needing technical expertise.
            </p>
            <div className="flex" style={{ gap: '1rem' }}>
              <a href="#inquiry" className="btn btn-primary">Get a Demo</a>
              <a href="#features" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Visual placeholder for incubator */}
            <div style={{
              width: '100%',
              maxWidth: '450px',
              aspectRatio: '1',
              backgroundColor: 'var(--color-forest-green)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-white)',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 10px 25px rgba(27, 67, 50, 0.2)'
            }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '500' }}>Smart Incubator Illustration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

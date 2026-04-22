import React from 'react';

const TrustCredibility = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-forest-green)', color: 'var(--color-white)', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="heading-lg" style={{ color: 'var(--color-white)' }}>Built From the Ground Up</h2>
        <p style={{ fontSize: '1.35rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
          We didn't design this in a distant corporate office. Sere Innovations spent months in the field, talking to small poultry farmers and understanding the real, everyday challenges you face.
        </p>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8' }}>
          Our incubators are practical, simple, and not over-engineered. We stripped away the complicated tech jargon to give you exactly what works—honest tools for honest work.
        </p>
      </div>
    </section>
  );
};

export default TrustCredibility;

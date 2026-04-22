import React from 'react';

const CTASection = () => {
  return (
    <section id="inquiry" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div className="card text-center" style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          backgroundColor: 'var(--color-forest-green)',
          color: 'var(--color-white)',
          padding: 'var(--spacing-lg) var(--spacing-md)'
        }}>
          <h2 className="heading-lg" style={{ color: 'var(--color-white)' }}>Ready to hatch your own future?</h2>
          <p style={{ fontSize: '1.3rem', marginBottom: 'var(--spacing-md)', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
            Take control of your hatchery today. Let's talk about how the Sere Innovations smart incubator fits into your farm.
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '400px', margin: '0 auto' }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              style={{ padding: '1rem', borderRadius: '4px', border: 'none', fontSize: '1.05rem' }}
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              required
              style={{ padding: '1rem', borderRadius: '4px', border: 'none', fontSize: '1.05rem' }}
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '1.15rem', marginTop: '0.5rem' }}
              onClick={(e) => { e.preventDefault(); alert("Thanks for your interest! We'll contact you shortly."); }}
            >
              Request a Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--color-cream)',
      padding: 'var(--spacing-md) 0',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      textAlign: 'center'
    }}>
      <div className="container">
        <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Sere Innovations</h3>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
          "Helping farmers hatch their own future"
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
          <span>Rural Tech Park, India</span>
          <span>+91 123456789</span>
          <span>hello@sereinnovations.in</span>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Sere Innovations. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

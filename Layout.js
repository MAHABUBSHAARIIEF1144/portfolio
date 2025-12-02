import React from 'react';
import Navbar from '@/components/portfolio/Navbar';
import Footer from '@/components/portfolio/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --color-primary: #2563eb;
          --color-primary-dark: #1d4ed8;
          --color-secondary: #6366f1;
          --color-accent: #3b82f6;
          --color-text: #0f172a;
          --color-text-muted: #64748b;
          --color-background: #ffffff;
          --color-surface: #f8fafc;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        ::selection {
          background-color: #2563eb;
          color: white;
        }
      `}</style>
      
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
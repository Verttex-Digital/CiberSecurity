import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { CircuitBackground } from './components/CircuitBackground';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`relative min-h-screen bg-slate-900 text-white ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    } transition-opacity duration-1000`}>
      <CircuitBackground />
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Stats />
      <section id="contact" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Secure Your Digital Future
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ready to enhance your security posture? Contact us for a comprehensive security assessment.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
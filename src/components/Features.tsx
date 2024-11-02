import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  'Advanced Threat Intelligence',
  'Zero Trust Architecture',
  'AI-Powered Security Analytics',
  'Compliance Management',
  'Incident Response',
  'Security Automation'
];

export function Features() {
  return (
    <section className="relative py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Next-Generation Security Solutions for Modern Enterprises
            </h2>
            <p className="text-slate-400 mb-8">
              Our cutting-edge security solutions combine advanced technology with expert analysis
              to provide comprehensive protection for your digital assets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
                alt="Security Operations Center"
                className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
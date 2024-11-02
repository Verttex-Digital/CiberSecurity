import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/90" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
            <Shield className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">Enterprise Security Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Protecting Your Digital Assets in an
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Interconnected World</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-8">
            Comprehensive cybersecurity services to safeguard your business against evolving threats.
            Our expert team delivers enterprise-grade protection with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold
                           hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-300
                           hover:scale-105 flex items-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm rounded-lg font-semibold
                           border border-slate-700 hover:bg-slate-800 transform transition-all
                           duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

const stats = [
  { value: '500+', label: 'Clients Protected' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Monitoring' },
  { value: '100+', label: 'Security Experts' }
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
                           bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
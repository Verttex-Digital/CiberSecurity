import React from 'react';
import { Shield, Lock, Eye, Database, Cloud, UserCheck } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments to identify and remediate vulnerabilities.'
  },
  {
    icon: Lock,
    title: 'Security Consulting',
    description: 'Expert guidance on security strategy, compliance, and best practices.'
  },
  {
    icon: Eye,
    title: 'Threat Detection',
    description: '24/7 monitoring and advanced threat detection using AI-powered tools.'
  },
  {
    icon: Database,
    title: 'Data Protection',
    description: 'Robust data encryption and protection strategies for sensitive information.'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Secure cloud infrastructure design and implementation services.'
  },
  {
    icon: UserCheck,
    title: 'Security Training',
    description: 'Employee security awareness training and phishing simulation.'
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Security Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Protecting your business with advanced cybersecurity solutions and expert services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700
                       hover:bg-slate-800 transform transition-all duration-300 hover:scale-[1.02]"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4 transform transition-all duration-300
                                   group-hover:scale-110 group-hover:text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Shield, Bug, Key, Binary, UserX, Code2 } from 'lucide-react';

const icons = [Shield, Bug, Key, Binary, UserX, Code2];

export function HexagonGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="aspect-square relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm 
                        rounded-lg transform transition-all duration-300 group-hover:scale-105 
                        group-hover:from-cyan-500/30 group-hover:to-blue-600/30 border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="w-8 h-8 text-cyan-400 transform transition-all duration-300 
                           group-hover:scale-110 group-hover:text-cyan-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
import React from 'react';

export function GlitchText({ text }: { text: string }) {
  return (
    <div className="relative inline-block">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -translate-x-[2px] text-red-500 opacity-70 blur-[0.5px] z-0">{text}</span>
      <span className="absolute top-0 left-0 translate-x-[2px] text-blue-500 opacity-70 blur-[0.5px] z-0">{text}</span>
    </div>
  );
}
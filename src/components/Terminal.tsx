import React, { useState, useEffect } from 'react';

export function Terminal({ commands }: { commands: string[] }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= commands.length) return;
    
    const timer = setTimeout(() => {
      if (currentChar < commands[currentLine].length) {
        setCurrentChar(prev => prev + 1);
      } else {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar, commands]);

  return (
    <div className="bg-black/90 rounded-lg p-4 font-mono text-sm">
      <div className="flex space-x-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-green-400">
        {commands.slice(0, currentLine).map((cmd, i) => (
          <div key={i}>
            <span className="text-blue-400">$ </span>
            {cmd}
          </div>
        ))}
        {currentLine < commands.length && (
          <div>
            <span className="text-blue-400">$ </span>
            {commands[currentLine].slice(0, currentChar)}
            <span className="animate-pulse">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}
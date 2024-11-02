import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <div className="group">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 
                   text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400
                   transition-colors duration-300"
          required
        />
      </div>
      
      <div className="group">
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 
                   text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400
                   transition-colors duration-300"
          required
        />
      </div>

      <div className="group">
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 
                   text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400
                   transition-colors duration-300 min-h-[150px]"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold
                 py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700
                 transform transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
      >
        <Send className="w-5 h-5 mr-2" />
        Send Message
      </button>
    </form>
  );
}
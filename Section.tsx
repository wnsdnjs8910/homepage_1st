import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, dark = false }) => {
  return (
    <section id={id} className={`py-24 px-4 md:px-8 relative overflow-hidden ${dark ? 'bg-pine-900 text-white' : 'bg-white text-gray-800'} ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export const PointBadge: React.FC<{ number: string }> = ({ number }) => (
  <div className="flex flex-col items-center justify-center mb-10">
    <div className="font-serif text-gold-600 font-bold mb-3 tracking-[0.2em] text-xs uppercase opacity-90">Special Point</div>
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pine-800 to-pine-900 text-transparent bg-clip-text flex items-center justify-center relative shadow-xl border border-gold-400/30 bg-white">
      <span className="text-4xl font-serif font-bold bg-gradient-to-br from-gold-500 to-gold-700 bg-clip-text text-transparent">
        {number}
      </span>
      <div className="absolute inset-0 rounded-full border-4 border-pine-50 opacity-50"></div>
    </div>
    <div className="h-12 w-px bg-gradient-to-b from-gold-400 to-transparent mt-4 opacity-50"></div>
  </div>
);
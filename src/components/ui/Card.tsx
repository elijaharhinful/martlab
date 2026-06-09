import React from 'react';

export function Card({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:border-gold/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

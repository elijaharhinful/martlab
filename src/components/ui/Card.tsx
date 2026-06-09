import React from 'react';

export function Card({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:border-slate-400 hover:-translate-y-1 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
